// Monthly chart article generator.
//
// Usage:
//   node scripts/generate-monthly-chart.js YYYY-MM
//
// Reads data/blog/charts/YYYY-MM.json (which must follow the schema
// in data/blog/charts/_example.json), runs the curated track list
// through the template at data/blog/templates/monthly-chart-template.js,
// appends the generated article to the appropriate data/blog/posts*.js
// file, prepends the slim entry to data/blog/listing.js, and
// regenerates sitemap, search-index, and RSS / Atom artifacts so the
// new article is picked up everywhere it needs to be.
//
// Target posts file selection:
//   - Picks the highest-numbered posts*.js file that already contains
//     a 'monthly-charts' tagged entry (currently posts11.js).
//   - If that file has fewer than 12 entries, appends to it.
//   - Otherwise creates posts<N+1>.js, wires it into data/blog/index.js,
//     and writes the new article as the first entry.
//
// Idempotency:
//   - Refuses to overwrite an article whose slug is already in the
//     posts catalogue. Re-running for the same YYYY-MM is a no-op
//     except for re-running the regenerators.

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const CHARTS_DIR = path.join(ROOT, 'data', 'blog', 'charts');
const POSTS_DIR  = path.join(ROOT, 'data', 'blog');
const LISTING    = path.join(POSTS_DIR, 'listing.js');
const INDEX_FILE = path.join(POSTS_DIR, 'index.js');
const TEMPLATE   = path.join(POSTS_DIR, 'templates', 'monthly-chart-template.js');

const MAX_ENTRIES_PER_FILE = 12;

function fail(msg) {
  console.error(`error: ${msg}`);
  process.exit(1);
}

function info(msg) {
  console.log(msg);
}

// -------- artist-slug resolver ---------------------------------------------

// Walk data/artists/ and build a name → slug index. The artist files
// each declare entries with `slug:` and `name:` literals; a regex pass
// is sufficient and avoids ESM/CJS interop pain.
function buildArtistResolver() {
  const dir = path.join(ROOT, 'data', 'artists');
  const map = new Map();
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.js') || f === 'index.js') continue;
    const text = fs.readFileSync(path.join(dir, f), 'utf8');
    // splitRecords: anchor on `slug:` then read forward to next `slug:` or EOF
    const re = /slug:\s*['"]([a-z0-9-]+)['"]/g;
    const matches = [];
    let m;
    while ((m = re.exec(text)) !== null) {
      matches.push({ slug: m[1], start: m.index });
    }
    for (let i = 0; i < matches.length; i++) {
      const start = matches[i].start;
      const end   = i + 1 < matches.length ? matches[i + 1].start : text.length;
      const body  = text.slice(start, end);
      const nm = /name:\s*['"]([^'"]+)['"]/.exec(body);
      if (nm) {
        const name = nm[1];
        if (!map.has(name.toLowerCase())) map.set(name.toLowerCase(), matches[i].slug);
      }
    }
  }
  return (artistName) => {
    if (!artistName) return null;
    // Strip "feat. ..." suffix, strip parenthetical credits, lowercase.
    const cleaned = artistName
      .replace(/\s+feat\.?\s.*$/i, '')
      .replace(/\s+ft\.?\s.*$/i, '')
      .replace(/\s+&\s+.*$/, ' & ANY')   // keep first artist for "A & B" pairings
      .replace(/\(.*?\)/g, '')
      .trim()
      .toLowerCase();
    if (map.has(cleaned)) return map.get(cleaned);
    // Fall back to first-segment match for "A & B" / "A vs. B" style strings.
    const firstSeg = cleaned.split(/\s+(?:&|vs\.?|x|×|with)\s+/)[0].trim();
    if (firstSeg && map.has(firstSeg)) return map.get(firstSeg);
    return null;
  };
}

// -------- JS-literal serializer --------------------------------------------

// Produces single-quoted JS object-literal source matching the style
// of the existing posts*.js files. Strings escape backslash and
// single-quote; multi-line strings are written on a single line
// (the data we serialize never contains literal newlines, only HTML).
function jsLiteral(value, indent = 0) {
  const pad = '  '.repeat(indent);
  const next = '  '.repeat(indent + 1);

  if (value === null || value === undefined) return 'null';
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (typeof value === 'string') {
    return "'" + value.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r?\n/g, ' ') + "'";
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    const flat = value.every((v) => typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean');
    if (flat) {
      return '[' + value.map((v) => jsLiteral(v, indent + 1)).join(', ') + ']';
    }
    return '[\n' + value.map((v) => next + jsLiteral(v, indent + 1)).join(',\n') + '\n' + pad + ']';
  }
  if (typeof value === 'object') {
    const keys = Object.keys(value);
    if (keys.length === 0) return '{}';
    return '{\n' + keys.map((k) => next + k + ': ' + jsLiteral(value[k], indent + 1)).join(',\n') + '\n' + pad + '}';
  }
  return JSON.stringify(value);
}

// -------- posts*.js targeting ----------------------------------------------

function listPostsFiles() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /^posts\d+\.js$/.test(f) || f === 'posts.js')
    .map((f) => ({
      file: f,
      n: f === 'posts.js' ? 1 : Number(f.match(/posts(\d+)\.js/)[1]),
      path: path.join(POSTS_DIR, f),
    }))
    .sort((a, b) => a.n - b.n);
}

function fileEntryCount(content) {
  // Count top-level slug literals — a reasonable proxy for entries.
  return (content.match(/^\s*slug:\s*['"][^'"]+['"]/gm) || []).length;
}

function fileHasMonthlyChartTag(content) {
  return /'monthly-charts'/.test(content);
}

function pickTargetPostsFile() {
  const all = listPostsFiles();
  // Prefer the highest-numbered file that already holds monthly-charts entries
  for (let i = all.length - 1; i >= 0; i--) {
    const text = fs.readFileSync(all[i].path, 'utf8');
    if (fileHasMonthlyChartTag(text)) {
      const count = fileEntryCount(text);
      if (count < MAX_ENTRIES_PER_FILE) {
        return { mode: 'append', target: all[i], text, count };
      }
      // file is full → spill into the next number
      const nextN = all[all.length - 1].n + 1;
      return { mode: 'create', nextN, after: all[i] };
    }
  }
  // No existing monthly-charts file → create posts<max+1>.js
  const nextN = all[all.length - 1].n + 1;
  return { mode: 'create', nextN, after: all[all.length - 1] };
}

function appendArticleToFile(target, articleSrc) {
  const text = fs.readFileSync(target.path, 'utf8');
  // Find the closing `\n];\n` that ends the exported posts array.
  // The arrays in this codebase always end exactly that way; if a
  // future file deviates the script should fail loudly rather than
  // silently corrupt the file.
  const closingRe = /\n\];\s*$/;
  if (!closingRe.test(text)) {
    fail(`cannot locate closing "];\\n" of array in ${target.file} — script needs an update`);
  }
  const replacement = ',\n\n' + indentBlock(articleSrc, 2) + '\n];\n';
  const next = text.replace(/\n\];\s*$/, replacement);
  fs.writeFileSync(target.path, next);
}

function indentBlock(src, n) {
  const pad = ' '.repeat(n);
  return src.split('\n').map((line) => (line.length ? pad + line : line)).join('\n');
}

function createNewPostsFile(nextN, articleSrc) {
  const file = path.join(POSTS_DIR, `posts${nextN}.js`);
  const exportName = `posts${nextN}`;
  const body =
    `// Auto-generated by scripts/generate-monthly-chart.js.\n` +
    `// New monthly-chart entries are appended in-place by the\n` +
    `// generator. Hand-edit at your own risk; the script regex-\n` +
    `// matches the final "];\\n" line to splice in new articles.\n\n` +
    `export const ${exportName} = [\n` +
    indentBlock(articleSrc, 2) +
    `\n];\n`;
  fs.writeFileSync(file, body);

  // Wire into data/blog/index.js
  const idx = fs.readFileSync(INDEX_FILE, 'utf8');
  if (idx.includes(`from './posts${nextN}'`)) return; // already imported
  const importLine = `import { ${exportName} } from './posts${nextN}';\n`;
  // Insert before the first blank line after the import block, OR
  // just after the last existing posts<N> import — whichever is
  // simpler to locate.
  const lastImport = /import\s+\{\s*posts\d+\s*\}\s+from\s+['"]\.\/posts\d+['"];\s*\n/g;
  let lastMatchEnd = 0;
  let m;
  while ((m = lastImport.exec(idx)) !== null) {
    lastMatchEnd = m.index + m[0].length;
  }
  if (lastMatchEnd === 0) fail('cannot locate import block in data/blog/index.js');
  const beforeSpread = /export const posts\s*=\s*\[/m.exec(idx);
  if (!beforeSpread) fail('cannot locate "export const posts = ..." in data/blog/index.js');
  let next = idx.slice(0, lastMatchEnd) + importLine + idx.slice(lastMatchEnd);

  // Append spread into the exported array. The file uses a single-
  // line `export const posts = [...posts1, ..., ...postsN];` form.
  next = next.replace(
    /(export const posts\s*=\s*\[[^\]]*?)(\];)/,
    (whole, head, tail) => head + `, ...${exportName}` + tail
  );
  fs.writeFileSync(INDEX_FILE, next);
}

// -------- listing.js prepend ----------------------------------------------

function prependToListing(article) {
  const text = fs.readFileSync(LISTING, 'utf8');
  // The listing file is newest-first. Insert directly after the line
  // `export const listing = [`.
  const slim = {
    slug: article.slug,
    date: article.date,
    readTime: article.readTime,
    tags: article.tags,
    en: { title: article.en.title, excerpt: article.en.excerpt },
    ja: { title: article.ja.title, excerpt: article.ja.excerpt },
  };
  // Single-line format matching existing listing entries.
  const slimSrc =
    `  // Auto-added by generate-monthly-chart.js\n` +
    `  { slug: ${jsLiteral(slim.slug)}, date: ${jsLiteral(slim.date)}, readTime: ${slim.readTime}, tags: ${jsLiteral(slim.tags)},\n` +
    `    en: { title: ${jsLiteral(slim.en.title)}, excerpt: ${jsLiteral(slim.en.excerpt)} },\n` +
    `    ja: { title: ${jsLiteral(slim.ja.title)}, excerpt: ${jsLiteral(slim.ja.excerpt)} } },\n`;
  const re = /(export const listing\s*=\s*\[\s*\n)/;
  if (!re.test(text)) fail('cannot locate "export const listing = [" in data/blog/listing.js');
  const next = text.replace(re, (m) => m + slimSrc);
  fs.writeFileSync(LISTING, next);
}

// -------- regenerators -----------------------------------------------------

function runRegen(scriptName) {
  const sp = path.join(ROOT, 'scripts', scriptName);
  if (!fs.existsSync(sp)) {
    info(`  · ${scriptName}: not present, skipping`);
    return;
  }
  try {
    execSync(`node ${JSON.stringify(sp)}`, { stdio: 'inherit', cwd: ROOT });
  } catch (e) {
    info(`  · ${scriptName}: exited non-zero (continuing) — ${e.message}`);
  }
}

// -------- main -------------------------------------------------------------

async function main() {
  const ym = process.argv[2];
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(ym || '')) {
    fail('usage: node scripts/generate-monthly-chart.js YYYY-MM (e.g. 2026-06)');
  }
  const [yearStr, monthStr] = ym.split('-');
  const year  = Number(yearStr);
  const monthIdx = Number(monthStr) - 1;
  const monthName = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December',
  ][monthIdx];

  const chartPath = path.join(CHARTS_DIR, `${ym}.json`);
  if (!fs.existsSync(chartPath)) {
    fail(`chart input file missing: ${path.relative(ROOT, chartPath)}\n` +
         `       create it from data/blog/charts/_example.json before running this script`);
  }
  let chart;
  try {
    chart = JSON.parse(fs.readFileSync(chartPath, 'utf8'));
  } catch (e) {
    fail(`chart file is not valid JSON: ${e.message}`);
  }
  if (!chart.tracks || !Array.isArray(chart.tracks) || chart.tracks.length === 0) {
    fail('chart file must contain a non-empty tracks[] array');
  }
  if (chart.month && chart.month !== monthName) {
    info(`note: chart.month "${chart.month}" overrides filename-derived "${monthName}"`);
  }
  if (chart.year && chart.year !== year) {
    info(`note: chart.year ${chart.year} overrides filename-derived ${year}`);
  }

  info(`▶ Loading template …`);
  const template = await import(`file://${TEMPLATE.replace(/\\/g, '/')}`);

  info(`▶ Building artist-slug resolver from data/artists/ …`);
  const resolveArtistSlug = buildArtistResolver();

  info(`▶ Generating article via template …`);
  const article = template.generateMonthlyChart({
    month: chart.month || monthName,
    year:  chart.year  || year,
    publishedAt: chart.publishedAt,
    tracks: chart.tracks,
    resolveArtistSlug,
  });

  // Idempotency: bail out early if the slug already exists anywhere.
  const allPostsFiles = listPostsFiles();
  for (const f of allPostsFiles) {
    const t = fs.readFileSync(f.path, 'utf8');
    if (t.includes(`'${article.slug}'`) || t.includes(`"${article.slug}"`)) {
      info(`✱ slug "${article.slug}" already present in ${f.file} — skipping insert.`);
      info(`   re-running regenerators only.`);
      runRegen('generate-sitemap.js');
      runRegen('generate-search-index.js');
      runRegen('generate-rss.js');
      info('done.');
      return;
    }
  }

  // Serialize once; reused for both the file insert and the listing
  // logging output.
  const articleSrc = jsLiteral(article, 0);

  const target = pickTargetPostsFile();
  if (target.mode === 'append') {
    info(`▶ Appending to ${target.target.file} (currently ${target.count} entries) …`);
    appendArticleToFile(target.target, articleSrc);
  } else {
    info(`▶ Creating new posts${target.nextN}.js (rotation point reached) …`);
    createNewPostsFile(target.nextN, articleSrc);
  }

  info(`▶ Updating data/blog/listing.js …`);
  prependToListing(article);

  info(`▶ Regenerating sitemap, search-index, and feeds …`);
  runRegen('generate-sitemap.js');
  runRegen('generate-search-index.js');
  runRegen('generate-rss.js');

  info('');
  info(`✅ ${article.slug} added.`);
  info(`   ${article.en.title}`);
  info(`   tracks: ${article.tracks.length}`);
  info(`   review the diff with: git diff -- data/blog/`);
  info(`   commit when satisfied: git add data/blog/ public/ && git commit -m "feat(blog): monthly chart — ${chart.month || monthName} ${chart.year || year}"`);
}

main().catch((e) => {
  console.error(e.stack || e.message);
  process.exit(1);
});

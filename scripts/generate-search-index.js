// Generates public/search-index.json by parsing data files via regex.
// Same approach as scripts/generate-sitemap.js — avoids ESM/CJS interop pain.
// Output is consumed at runtime by components/SearchModal.jsx and /search.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'public', 'search-index.json');

// ---------- helpers ---------------------------------------------------------

// Unescape JS string content captured between matching quotes.
function unesc(s) {
  if (s == null) return '';
  return s
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\')
    .replace(/\\n/g, ' ')
    .replace(/\\r/g, '')
    .replace(/\\t/g, ' ')
    .replace(/&apos;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .trim();
}

// Match either single- or double-quoted JS string. Quote char is captured to
// allow correct closing-quote matching via backreference.
const Q = `(['"])((?:\\\\.|(?!\\1)[^])*?)\\1`;

// Build a per-record regex: anchor on `slug:` then look for given field within
// a sliding window. Returns null if not found.
function findField(text, field) {
  const re = new RegExp(`${field}\\s*:\\s*${Q}`);
  const m = text.match(re);
  return m ? unesc(m[2]) : null;
}

// Find a nested {en,ja} pair under a parent key (e.g. `sub: { en: '...', ja: '...' }`).
function findBilingual(text, parent) {
  // Match `parent: { en: '..', ja: '..' }` allowing whitespace and reordering.
  const re = new RegExp(
    `${parent}\\s*:\\s*\\{[^}]*?en\\s*:\\s*${Q}[^}]*?ja\\s*:\\s*${Q}[^}]*?\\}`
  );
  const m = text.match(re);
  if (m) return { en: unesc(m[2]), ja: unesc(m[4]) };
  // Try ja before en.
  const re2 = new RegExp(
    `${parent}\\s*:\\s*\\{[^}]*?ja\\s*:\\s*${Q}[^}]*?en\\s*:\\s*${Q}[^}]*?\\}`
  );
  const m2 = text.match(re2);
  if (m2) return { en: unesc(m2[4]), ja: unesc(m2[2]) };
  return { en: null, ja: null };
}

// Split a file's content into per-record chunks anchored on `slug: '<slug>'`.
// Each chunk runs from one slug match to just before the next (or EOF).
function splitRecords(text) {
  const re = new RegExp(`slug:\\s*${Q}`, 'g');
  const out = [];
  const matches = [];
  let m;
  while ((m = re.exec(text)) !== null) {
    matches.push({ slug: m[2], start: m.index });
  }
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].start;
    const end = i + 1 < matches.length ? matches[i + 1].start : text.length;
    out.push({ slug: matches[i].slug, body: text.slice(start, end) });
  }
  return out;
}

function readDataDir(subdir, opts = {}) {
  const dir = path.join(ROOT, 'data', subdir);
  if (!fs.existsSync(dir)) return [];
  const records = [];
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.js') || (opts.skipIndex !== false && file === 'index.js')) {
      continue;
    }
    const text = fs.readFileSync(path.join(dir, file), 'utf8');
    for (const rec of splitRecords(text)) {
      records.push(rec);
    }
  }
  return records;
}

// ---------- per-domain extractors ------------------------------------------

function extractBlog() {
  const file = path.join(ROOT, 'data', 'blog', 'listing.js');
  const text = fs.readFileSync(file, 'utf8');
  const out = [];
  for (const { slug, body } of splitRecords(text)) {
    const date = findField(body, 'date');
    // Tags array — capture inside brackets, split by quoted entries.
    const tagsMatch = body.match(/tags:\s*\[([^\]]*)\]/);
    const tags = tagsMatch
      ? Array.from(tagsMatch[1].matchAll(new RegExp(Q, 'g'))).map((m) => unesc(m[2]))
      : [];

    // Each post has en: { title, excerpt } and ja: { title, excerpt }.
    // Use slightly different parent regex because en/ja blocks can include
    // both title and excerpt.
    const enBlock = body.match(/en:\s*\{([^}]*)\}/);
    const jaBlock = body.match(/ja:\s*\{([^}]*)\}/);
    let titleEn = null, excerptEn = null, titleJa = null, excerptJa = null;
    if (enBlock) {
      titleEn = findField(enBlock[1], 'title');
      excerptEn = findField(enBlock[1], 'excerpt');
    }
    if (jaBlock) {
      titleJa = findField(jaBlock[1], 'title');
      excerptJa = findField(jaBlock[1], 'excerpt');
    }
    if (!titleEn && !titleJa) continue;
    out.push({
      id: `blog:${slug}`,
      type: 'blog',
      url: `/blog/${slug}`,
      slug,
      titleEn: titleEn || '',
      titleJa: titleJa || '',
      excerptEn: excerptEn || '',
      excerptJa: excerptJa || '',
      date: date || null,
      tags,
      icon: '✍',
      flag: null,
    });
  }
  return out;
}

function extractDomain(subdir, type, urlPrefix) {
  const records = readDataDir(subdir);
  const out = [];
  for (const { slug, body } of records) {
    // Skip the helper objects inside index.js by only consuming files in the
    // subdir already filtered above. But splitRecords also picks up entries
    // inside category metadata in some files (like glossary categories) —
    // for safety, require that the slug-anchored body contain a name/short/term.
    const name = findField(body, 'name');
    const flag = findField(body, 'flag');
    const emoji = findField(body, 'emoji');
    const sub = findBilingual(body, 'sub');
    const short = findBilingual(body, 'short');
    const term = findBilingual(body, 'term');

    let titleEn, titleJa;
    if (type === 'glossary') {
      // Glossary records use `term: { en, ja }` for the main label.
      titleEn = (term.en || '').trim();
      titleJa = (term.ja || '').trim();
    } else {
      titleEn = name || '';
      titleJa = name || '';
    }
    const excerptEn = (short.en || sub.en || '').trim();
    const excerptJa = (short.ja || sub.ja || '').trim();
    if (!titleEn && !titleJa && !excerptEn && !excerptJa) continue;

    out.push({
      id: `${type}:${slug}`,
      type,
      url: `${urlPrefix}/${slug}`,
      slug,
      titleEn,
      titleJa,
      excerptEn,
      excerptJa,
      date: null,
      tags: [],
      icon: emoji || (type === 'glossary' ? '📖' : type === 'label' ? '💿' : '🎤'),
      flag: flag || null,
    });
  }
  return out;
}

// Events have a different per-record shape: name at top level, with
// en.description and ja.description for the body. Walks data/events/
// the same way extractDomain walks artists/labels/glossary, but uses
// the events-specific field shape.
function extractEvents() {
  const records = readDataDir('events');
  const out = [];
  for (const { slug, body } of records) {
    const name = findField(body, 'name');
    if (!name) continue;
    const country = findField(body, 'country');
    const enBlock = body.match(/en:\s*\{([\s\S]*?)\n\s*\}/);
    const jaBlock = body.match(/ja:\s*\{([\s\S]*?)\n\s*\}/);
    const descEn = enBlock ? findField(enBlock[1], 'description') || '' : '';
    const descJa = jaBlock ? findField(jaBlock[1], 'description') || '' : '';
    out.push({
      id: `event:${slug}`,
      type: 'event',
      url: `/events/${slug}`,
      slug,
      titleEn: name,
      titleJa: name,
      excerptEn: descEn,
      excerptJa: descJa,
      date: null,
      tags: [],
      icon: '🎉',
      flag: country || null,
    });
  }
  return out;
}

// ---------- main -----------------------------------------------------------

function main() {
  console.log('═══════════════════════════════════════');
  console.log('🔎 Search Index Generator');
  console.log('═══════════════════════════════════════');

  const blog = extractBlog();
  const artists = extractDomain('artists', 'artist', '/artists');
  const labels = extractDomain('labels', 'label', '/labels');
  const glossary = extractDomain('glossary', 'glossary', '/glossary');
  const events = extractEvents();

  const docs = [...blog, ...artists, ...labels, ...glossary, ...events];

  console.log(`✅ Blog:     ${blog.length}`);
  console.log(`✅ Artists:  ${artists.length}`);
  console.log(`✅ Labels:   ${labels.length}`);
  console.log(`✅ Glossary: ${glossary.length}`);
  console.log(`✅ Events:   ${events.length}`);
  console.log(`✅ Total:    ${docs.length}`);

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(docs));
  const sizeKb = (fs.statSync(OUT).size / 1024).toFixed(1);
  console.log(`✅ Wrote ${OUT} (${sizeKb} KB)`);
}

main();

// Generates RSS 2.0 and Atom 1.0 feeds for the blog.
//
// Output (all under public/, served at the site root by Next.js static export):
//   /rss.xml      — bilingual canonical (EN-language metadata; both EN and
//                   JA titles included in each item description so readers
//                   running mixed-language clients see something useful)
//   /atom.xml     — same content, Atom 1.0 format
//   /rss.en.xml   — English-only items
//   /rss.ja.xml   — Japanese-only items
//
// The script reads data/blog/listing.js by regex (no ESM/CJS interop required)
// and emits XML directly. Run via `npm run rss` or as part of `prebuild`.

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://trance-nexus.com';
const FEED_TITLE_EN = 'TRANCE NEXUS — Blog';
const FEED_TITLE_JA = 'TRANCE NEXUS — ブログ';
const FEED_DESC_EN =
  'Long-form trance music coverage: history, artists, labels, scene reports, gear and production guides.';
const FEED_DESC_JA =
  'トランスミュージックの長尺記事：歴史、アーティスト、レーベル、シーン、機材・制作ガイド。';
const FEED_AUTHOR = 'TRANCE NEXUS';
const FEED_AUTHOR_EMAIL = 'hello.sacredjapan@gmail.com';
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Parse data/blog/listing.js into an ordered array of post entries.
// Format expected (newest-first, two visual layouts both supported):
//   { slug: '...', date: 'YYYY-MM-DD', readTime: N, tags: [...],
//     en: { title: '...', excerpt: '...' },
//     ja: { title: '...', excerpt: '...' } },
function loadPosts() {
  const file = path.join(__dirname, '..', 'data', 'blog', 'listing.js');
  const src = fs.readFileSync(file, 'utf8');

  // Split on each `slug:` declaration; the first chunk is preamble.
  const chunks = src.split(/(?=\bslug:\s*['"][^'"]+['"])/);
  const posts = [];

  for (const chunk of chunks) {
    const slugMatch = /slug:\s*['"]([a-z0-9-]+)['"]/.exec(chunk);
    if (!slugMatch) continue;
    const slug = slugMatch[1];

    const dateMatch = /date:\s*['"](\d{4}-\d{2}-\d{2})['"]/.exec(chunk);
    if (!dateMatch) continue;
    const date = dateMatch[1];

    // The two language blocks. We isolate each `en: { ... }` / `ja: { ... }`
    // first so a JA `excerpt:` can't be mis-attributed to the EN block.
    const enBlock = matchBalancedObject(chunk, /\ben:\s*\{/);
    const jaBlock = matchBalancedObject(chunk, /\bja:\s*\{/);
    const en = parseLangBlock(enBlock);
    const ja = parseLangBlock(jaBlock);
    if (!en.title || !ja.title) continue;

    posts.push({ slug, date, en, ja });
  }

  // Stable sort: newest first by date, then alphabetically by slug as tie-breaker.
  posts.sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    return a.slug < b.slug ? -1 : 1;
  });

  return posts;
}

// Find the matching `{` ... `}` block following `pattern` and return the
// substring between (and including) the braces. Returns '' if no match.
function matchBalancedObject(src, pattern) {
  const m = pattern.exec(src);
  if (!m) return '';
  let i = m.index + m[0].length - 1; // position of the opening '{'
  let depth = 0;
  let start = i;
  for (; i < src.length; i++) {
    const c = src[i];
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) return src.slice(start, i + 1);
    }
  }
  return '';
}

function parseLangBlock(block) {
  if (!block) return {};
  const title = pickQuoted(block, 'title');
  const excerpt = pickQuoted(block, 'excerpt');
  return { title, excerpt };
}

// Pull a single-line quoted string for a given field name. Handles ' " and `,
// and unescapes the matching quote character so `it\'s` round-trips cleanly.
function pickQuoted(block, field) {
  const re = new RegExp(`${field}\\s*:\\s*(['"\`])([\\s\\S]*?)(?<!\\\\)\\1`);
  const m = re.exec(block);
  if (!m) return '';
  const q = m[1];
  return m[2].replace(new RegExp(`\\\\${q}`, 'g'), q);
}

function rfc822(dateStr) {
  // dateStr is YYYY-MM-DD; treat as midnight UTC.
  return new Date(`${dateStr}T00:00:00Z`).toUTCString();
}

function isoDate(dateStr) {
  return new Date(`${dateStr}T00:00:00Z`).toISOString();
}

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildRss({ items, title, description, lang, selfPath }) {
  const lastBuild = new Date().toUTCString();
  const itemXml = items
    .map((it) => {
      const link = `${SITE_URL}/blog/${it.slug}`;
      return `  <item>
    <title>${escapeXml(it.title)}</title>
    <link>${link}</link>
    <guid isPermaLink="true">${link}</guid>
    <pubDate>${rfc822(it.date)}</pubDate>
    <description>${escapeXml(it.excerpt)}</description>
  </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(title)}</title>
  <link>${SITE_URL}</link>
  <atom:link href="${SITE_URL}${selfPath}" rel="self" type="application/rss+xml" />
  <description>${escapeXml(description)}</description>
  <language>${lang}</language>
  <lastBuildDate>${lastBuild}</lastBuildDate>
  <generator>trance-nexus rss generator</generator>
${itemXml}
</channel>
</rss>
`;
}

function buildAtom({ items, title, description, lang, selfPath }) {
  const updated = items.length > 0 ? isoDate(items[0].date) : new Date().toISOString();
  const entryXml = items
    .map((it) => {
      const link = `${SITE_URL}/blog/${it.slug}`;
      return `  <entry>
    <title>${escapeXml(it.title)}</title>
    <link href="${link}" />
    <id>${link}</id>
    <updated>${isoDate(it.date)}</updated>
    <published>${isoDate(it.date)}</published>
    <summary>${escapeXml(it.excerpt)}</summary>
  </entry>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${lang}">
  <title>${escapeXml(title)}</title>
  <subtitle>${escapeXml(description)}</subtitle>
  <link href="${SITE_URL}${selfPath}" rel="self" type="application/atom+xml" />
  <link href="${SITE_URL}" />
  <id>${SITE_URL}${selfPath}</id>
  <updated>${updated}</updated>
  <author>
    <name>${escapeXml(FEED_AUTHOR)}</name>
    <email>${FEED_AUTHOR_EMAIL}</email>
  </author>
  <generator>trance-nexus atom generator</generator>
${entryXml}
</feed>
`;
}

function main() {
  console.log('═══════════════════════════════════════');
  console.log('📡  RSS / Atom Feed Generator');
  console.log('═══════════════════════════════════════');

  const posts = loadPosts();
  if (posts.length === 0) {
    console.error('❌ No posts found in data/blog/listing.js');
    process.exit(1);
  }
  console.log(`✅ Loaded ${posts.length} blog posts`);

  const enItems = posts.map((p) => ({
    slug: p.slug,
    date: p.date,
    title: p.en.title,
    excerpt: p.en.excerpt,
  }));
  const jaItems = posts.map((p) => ({
    slug: p.slug,
    date: p.date,
    title: p.ja.title,
    excerpt: p.ja.excerpt,
  }));

  // Canonical /rss.xml is English. /rss.en.xml is an explicit alias for
  // operators who want a clearly-language-tagged URL. /rss.ja.xml is the
  // Japanese mirror. /atom.xml is the Atom 1.0 form of the canonical feed.
  const writes = [
    {
      file: 'rss.xml',
      body: buildRss({
        items: enItems,
        title: FEED_TITLE_EN,
        description: FEED_DESC_EN,
        lang: 'en',
        selfPath: '/rss.xml',
      }),
    },
    {
      file: 'atom.xml',
      body: buildAtom({
        items: enItems,
        title: FEED_TITLE_EN,
        description: FEED_DESC_EN,
        lang: 'en',
        selfPath: '/atom.xml',
      }),
    },
    {
      file: 'rss.en.xml',
      body: buildRss({
        items: enItems,
        title: FEED_TITLE_EN,
        description: FEED_DESC_EN,
        lang: 'en',
        selfPath: '/rss.en.xml',
      }),
    },
    {
      file: 'rss.ja.xml',
      body: buildRss({
        items: jaItems,
        title: FEED_TITLE_JA,
        description: FEED_DESC_JA,
        lang: 'ja',
        selfPath: '/rss.ja.xml',
      }),
    },
  ];

  for (const { file, body } of writes) {
    const dest = path.join(PUBLIC_DIR, file);
    fs.writeFileSync(dest, body, 'utf8');
    const sizeKb = (Buffer.byteLength(body, 'utf8') / 1024).toFixed(1);
    console.log(`✅ public/${file} written (${sizeKb} KB)`);
  }

  console.log('\n✅ Feed generation complete');
  console.log(`   ${SITE_URL}/rss.xml`);
  console.log(`   ${SITE_URL}/atom.xml`);
  console.log(`   ${SITE_URL}/rss.en.xml`);
  console.log(`   ${SITE_URL}/rss.ja.xml`);
}

main();

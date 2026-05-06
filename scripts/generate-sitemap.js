const fs = require('fs');
const path = require('path');
const axios = require('axios');

const SITE_URL = 'https://trance-nexus.com';

// Extract slugs from data/<dir>/*.js by regex (avoids ESM/CJS interop)
function collectSlugs(subdir) {
  const dir = path.join(__dirname, '..', 'data', subdir);
  if (!fs.existsSync(dir)) return [];
  const slugs = [];
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.js') || file === 'index.js') continue;
    const content = fs.readFileSync(path.join(dir, file), 'utf8');
    const re = /slug:\s*['"]([a-z0-9-]+)['"]/g;
    let m;
    while ((m = re.exec(content)) !== null) slugs.push(m[1]);
  }
  return slugs;
}

const ARTIST_PAGES = collectSlugs('artists').map((slug) => ({
  url: `/artists/${slug}`,
  changefreq: 'monthly',
  priority: '0.7',
}));

const GLOSSARY_PAGES = collectSlugs('glossary').map((slug) => ({
  url: `/glossary/${slug}`,
  changefreq: 'monthly',
  priority: '0.5',
}));

const LABEL_PAGES = collectSlugs('labels').map((slug) => ({
  url: `/labels/${slug}`,
  changefreq: 'monthly',
  priority: '0.7',
}));

// Categories + tags are keyed by `id:` not `slug:` — extract those by reading the relevant files directly.
function collectIdsFrom(relPath) {
  const filePath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf8');
  const ids = [];
  const re = /id:\s*['"]([a-z0-9-]+)['"]/g;
  let m;
  while ((m = re.exec(content)) !== null) ids.push(m[1]);
  // De-dupe (the file also lists TAG_GROUPS which use id:'subgenre' etc — but those don't get pages,
  // so de-dupe via Set is enough; sitemap will only generate the ones that resolve to real pages.
  // The collision list is small and routes for missing ids would 404, but generateStaticParams
  // controls what's actually built — sitemap is best-effort listing.
  return Array.from(new Set(ids));
}

const CATEGORY_PAGES = collectIdsFrom('data/blog/categories.js').map((id) => ({
  url: `/category/${id}`,
  changefreq: 'weekly',
  priority: '0.6',
}));

// tags.js contains both per-tag entries and the TAG_GROUPS metadata; filter against the actual
// tag id set by reading tags.js once and dropping any group ids that aren't real tags.
const TAG_FILE = path.join(__dirname, '..', 'data/blog/tags.js');
const TAG_GROUP_IDS = new Set(['subgenre', 'artist', 'place', 'tool', 'era']);
const TAG_PAGES = fs.existsSync(TAG_FILE)
  ? collectIdsFrom('data/blog/tags.js')
      .filter((id) => !TAG_GROUP_IDS.has(id))
      .map((id) => ({ url: `/tag/${id}`, changefreq: 'weekly', priority: '0.5' }))
  : [];

const PAGES = [
  { url: '/',          changefreq: 'daily',  priority: '1.0' },
  { url: '/radio',     changefreq: 'daily',  priority: '0.9' },
  { url: '/events',    changefreq: 'daily',  priority: '0.9' },
  { url: '/artists',   changefreq: 'weekly', priority: '0.8' },
  { url: '/labels',    changefreq: 'weekly', priority: '0.8' },
  { url: '/glossary',  changefreq: 'weekly', priority: '0.7' },
  { url: '/category',  changefreq: 'weekly', priority: '0.6' },
  { url: '/tag',       changefreq: 'weekly', priority: '0.5' },
  { url: '/setlists',  changefreq: 'weekly', priority: '0.7' },
  { url: '/timeline',  changefreq: 'monthly', priority: '0.7' },
  { url: '/about',    changefreq: 'monthly', priority: '0.5' },
  { url: '/privacy',  changefreq: 'monthly', priority: '0.3' },
  { url: '/cookies',  changefreq: 'monthly', priority: '0.3' },
  { url: '/dmca',     changefreq: 'monthly', priority: '0.3' },
  { url: '/terms',    changefreq: 'monthly', priority: '0.3' },
  { url: '/contact',  changefreq: 'monthly', priority: '0.3' },
  { url: '/blog',     changefreq: 'weekly',  priority: '0.8' },
  { url: '/blog/history-of-trance-music',              changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/top-10-trance-subgenres-explained',    changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/essential-trance-labels-2026',         changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/best-trance-festivals-worldwide',      changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/how-to-dj-trance-beginners-guide',    changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/iconic-trance-anthems-that-defined-an-era', changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/rise-of-psytrance-goa-to-modern-day', changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/trance-vs-house-vs-techno',           changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/role-of-vocals-in-trance-music',      changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/why-trance-music-endures',            changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/pioneer-dj-vs-denon-dj-for-trance',        changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/best-headphones-for-trance-djing-2026',     changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/essential-vst-plugins-trance-production',   changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/how-to-mix-trance-beatmatching-phrasing',  changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/art-of-trance-buildup-production-secrets',  changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/armin-van-buuren-king-of-trance',           changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/above-beyond-anjuna-empire',                changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/paul-van-dyk-pioneer-of-trance',            changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/tiesto-evolution-trance-to-edm',            changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/ferry-corsten-three-decades-of-trance',     changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/best-trance-clubs-in-europe',               changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/a-state-of-trance-show-that-changed-everything', changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/tomorrowland-trance-stage',                 changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/ibiza-and-trance-love-story',               changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/underground-trance-scene',                  changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/best-trance-tracks-1990s',                  changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/defining-trance-anthems-2000s',             changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/top-trance-tracks-2010s',                   changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/modern-trance-classics-2020s-so-far',       changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/trance-tracks-defined-each-decade-retrospective', changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/women-in-trance-pioneers-modern-stars',     changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/nifra-slovakia-trance-queen',               changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/miss-monique-rising-progressive-star',      changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/new-generation-trance-artists-to-watch-2026', changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/female-djs-reshaping-trance-scene',         changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/trance-music-films-tv-memorable-moments',   changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/spirituality-of-trance-why-it-hits-different', changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/trance-meditation-music-mind-expansion',    changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/trance-documentary-watchlist',              changefreq: 'monthly', priority: '0.6' },
  { url: '/blog/trance-influence-other-genres',             changefreq: 'monthly', priority: '0.6' },
  ...ARTIST_PAGES,
  ...LABEL_PAGES,
  ...GLOSSARY_PAGES,
  ...CATEGORY_PAGES,
  ...TAG_PAGES,
];

function buildSitemap() {
  const lastmod = new Date().toISOString().split('T')[0];
  const urls = PAGES.map(p => {
    const abs = `${SITE_URL}${p.url}`;
    return `  <url>
    <loc>${abs}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${abs}"/>
    <xhtml:link rel="alternate" hreflang="ja" href="${abs}"/>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

async function submitIndexNow() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    console.log('⚠ INDEXNOW_KEY not set — skipping IndexNow submission');
    return;
  }

  // Write key verification file so search engines can validate ownership
  fs.writeFileSync(`./public/${key}.txt`, key);
  console.log(`✅ IndexNow key file written: public/${key}.txt`);

  const urlList = PAGES.map(p => `${SITE_URL}${p.url}`);
  const body = {
    host: 'trance-nexus.com',
    key,
    keyLocation: `${SITE_URL}/${key}.txt`,
    urlList,
  };

  // Submit to IndexNow API (covers Bing, Yandex, and others)
  try {
    const res = await axios.post('https://api.indexnow.org/IndexNow', body, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      timeout: 15000,
    });
    console.log(`✅ IndexNow submitted (HTTP ${res.status}) — ${urlList.length} URLs`);
  } catch (err) {
    console.log(`⚠ IndexNow submission failed: ${err.message}`);
  }

  // Also submit directly to Bing (IndexNow origin)
  try {
    const res = await axios.post('https://www.bing.com/indexnow', body, {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      timeout: 15000,
    });
    console.log(`✅ Bing IndexNow submitted (HTTP ${res.status})`);
  } catch (err) {
    console.log(`⚠ Bing IndexNow failed: ${err.message}`);
  }
}

async function pingGoogle() {
  // Google deprecated the ping API in 2023; robots.txt Sitemap directive is the
  // recommended discovery method. This call is kept as a best-effort fallback.
  try {
    const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`;
    const res = await axios.get(url, { timeout: 10000 });
    console.log(`✅ Google ping (HTTP ${res.status})`);
  } catch (err) {
    console.log(`⚠ Google ping skipped (${err.message}) — robots.txt discovery is active`);
  }
}

async function main() {
  console.log('═══════════════════════════════════════');
  console.log('🗺  Sitemap Generator + Search Engine Ping');
  console.log('═══════════════════════════════════════');

  const sitemap = buildSitemap();
  const robots = buildRobotsTxt();

  fs.writeFileSync('./public/sitemap.xml', sitemap);
  fs.writeFileSync('./public/robots.txt', robots);
  console.log('✅ public/sitemap.xml written');
  console.log('✅ public/robots.txt written');

  await pingGoogle();
  await submitIndexNow();

  console.log('\n✅ Sitemap generation complete');
  console.log(`   ${SITE_URL}/sitemap.xml`);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Sitemap generation failed:', err);
    process.exit(1);
  });

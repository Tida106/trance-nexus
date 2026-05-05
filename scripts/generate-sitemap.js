const fs = require('fs');
const axios = require('axios');

const SITE_URL = 'https://trance-nexus.com';

const PAGES = [
  { url: '/',          changefreq: 'daily',  priority: '1.0' },
  { url: '/radio',     changefreq: 'daily',  priority: '0.9' },
  { url: '/events',    changefreq: 'daily',  priority: '0.9' },
  { url: '/artists',   changefreq: 'weekly', priority: '0.8' },
  { url: '/setlists',  changefreq: 'weekly', priority: '0.7' },
  { url: '/privacy',  changefreq: 'monthly', priority: '0.3' },
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

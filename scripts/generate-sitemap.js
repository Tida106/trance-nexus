const fs = require('fs');
const axios = require('axios');

const SITE_URL = 'https://trance-nexus.com';

const PAGES = [
  { url: '/',          changefreq: 'daily',  priority: '1.0' },
  { url: '/radio',     changefreq: 'daily',  priority: '0.9' },
  { url: '/events',    changefreq: 'daily',  priority: '0.9' },
  { url: '/artists',   changefreq: 'weekly', priority: '0.8' },
  { url: '/setlists',  changefreq: 'weekly', priority: '0.7' },
];

function buildSitemap() {
  const lastmod = new Date().toISOString().split('T')[0];
  const urls = PAGES.map(p => `  <url>
    <loc>${SITE_URL}${p.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function buildRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

async function pingGoogle() {
  try {
    const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`;
    const res = await axios.get(url, { timeout: 10000 });
    console.log(`✅ Google pinged (HTTP ${res.status})`);
  } catch (err) {
    // Ping API was deprecated by Google in 2023 — failure is expected but harmless.
    // Discovery happens automatically via robots.txt Sitemap directive.
    console.log(`⚠ Google ping skipped (${err.message}) — robots.txt discovery is active`);
  }
}

async function main() {
  console.log('═══════════════════════════════════════');
  console.log('🗺  Sitemap Generator');
  console.log('═══════════════════════════════════════');

  const sitemap = buildSitemap();
  const robots = buildRobotsTxt();

  // Write to public/ — next build copies this to out/ automatically
  fs.writeFileSync('./public/sitemap.xml', sitemap);
  fs.writeFileSync('./public/robots.txt', robots);
  console.log('✅ public/sitemap.xml written');
  console.log('✅ public/robots.txt written');

  await pingGoogle();

  console.log('\n✅ Sitemap generation complete');
  console.log(`   ${SITE_URL}/sitemap.xml`);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Sitemap generation failed:', err);
    process.exit(1);
  });

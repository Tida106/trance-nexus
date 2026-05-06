// Generates PWA assets at build time:
//   public/icons/icon-{192,512,512-maskable}.png
//   public/icons/apple-touch-icon.png  (180×180)
//   public/icons/favicon-{16,32}.png
//   public/manifest.webmanifest        (paths prefixed with BASE_PATH)
//   public/sw.js                       (service worker, scope-aware)
//
// BASE_PATH handling: GitHub Pages serves project sites under /trance-nexus
// (configure-pages exports BASE_PATH at workflow time). Local dev runs at /.
// Both manifest paths and the SW's pre-cache list have to match wherever the
// site is actually served from, so this script reads BASE_PATH the same way
// next.config.js does and bakes it in.

'use strict';

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const BASE_PATH = process.env.BASE_PATH || '';
const PUBLIC = path.join(__dirname, '..', 'public');
const ICONS_DIR = path.join(PUBLIC, 'icons');

const COLORS = {
  bg:     '#0d0d0d',
  bg2:    '#1a0a00',
  orange: '#f97316',
  red:    '#dc2626',
  amber:  '#f59e0b',
  white:  '#ffffff',
};

// Square logo SVG (used as the source for every raster icon).
// Maskable variant gets extra safe-zone padding (Android masks ~10–20% from edges).
function logoSvg({ size, maskable = false }) {
  const padPct = maskable ? 0.18 : 0.08;
  const pad = Math.round(size * padPct);
  const inner = size - pad * 2;
  const cx = size / 2;
  const cy = size / 2;
  const r = inner / 2;
  const fs = Math.round(inner * 0.32);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="${COLORS.bg2}"/>
      <stop offset="100%" stop-color="${COLORS.bg}"/>
    </radialGradient>
    <linearGradient id="ring" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="${COLORS.red}"/>
      <stop offset="50%" stop-color="${COLORS.orange}"/>
      <stop offset="100%" stop-color="${COLORS.amber}"/>
    </linearGradient>
    <linearGradient id="text" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="${COLORS.white}"/>
      <stop offset="100%" stop-color="${COLORS.amber}"/>
    </linearGradient>
  </defs>

  <rect width="${size}" height="${size}" fill="url(#bg)"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="url(#ring)" stroke-width="${Math.max(2, Math.round(inner * 0.04))}"/>
  <circle cx="${cx}" cy="${cy}" r="${Math.round(r * 0.78)}" fill="none" stroke="${COLORS.orange}" stroke-opacity="0.35" stroke-width="${Math.max(1, Math.round(inner * 0.012))}"/>
  <text x="${cx}" y="${cy + fs * 0.36}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="${fs}" font-weight="900" letter-spacing="${Math.round(fs * 0.02)}"
    text-anchor="middle" fill="url(#text)">TN</text>
</svg>`;
}

async function writePng(outFile, { size, maskable = false }) {
  const svg = logoSvg({ size, maskable });
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(outFile);
  const kb = (fs.statSync(outFile).size / 1024).toFixed(1);
  return kb;
}

async function generateIcons() {
  if (!fs.existsSync(ICONS_DIR)) fs.mkdirSync(ICONS_DIR, { recursive: true });
  const targets = [
    { name: 'icon-192.png',           size: 192, maskable: false },
    { name: 'icon-512.png',           size: 512, maskable: false },
    { name: 'icon-512-maskable.png',  size: 512, maskable: true  },
    { name: 'apple-touch-icon.png',   size: 180, maskable: false },
    { name: 'favicon-32.png',          size:  32, maskable: false },
    { name: 'favicon-16.png',          size:  16, maskable: false },
  ];
  for (const t of targets) {
    const out = path.join(ICONS_DIR, t.name);
    const kb = await writePng(out, { size: t.size, maskable: t.maskable });
    console.log(`✅ icons/${t.name}  (${kb} KB)`);
  }
}

function generateManifest() {
  // Every URL in the manifest is browser-resolved against the manifest's own
  // location, BUT some user agents are picky about absolute paths. We bake
  // BASE_PATH in so the manifest works whether served from / or /trance-nexus.
  const p = (sub) => `${BASE_PATH}${sub}`;
  const manifest = {
    name: 'TRANCE NEXUS — Trance Music Portal',
    short_name: 'TRANCE NEXUS',
    description:
      'Comprehensive trance music portal: artists, labels, radio shows, setlists, festivals, and long-form journalism.',
    start_url: p('/'),
    scope: p('/'),
    id: p('/'),
    display: 'standalone',
    orientation: 'portrait-primary',
    theme_color: COLORS.orange,
    background_color: COLORS.bg,
    lang: 'en',
    dir: 'ltr',
    categories: ['music', 'entertainment', 'news'],
    icons: [
      { src: p('/icons/icon-192.png'),          sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: p('/icons/icon-512.png'),          sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: p('/icons/icon-512-maskable.png'), sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    shortcuts: [
      { name: 'Blog',     short_name: 'Blog',     url: p('/blog'),    icons: [{ src: p('/icons/icon-192.png'), sizes: '192x192' }] },
      { name: 'Artists',  short_name: 'Artists',  url: p('/artists'), icons: [{ src: p('/icons/icon-192.png'), sizes: '192x192' }] },
      { name: 'Radio',    short_name: 'Radio',    url: p('/radio'),   icons: [{ src: p('/icons/icon-192.png'), sizes: '192x192' }] },
    ],
  };
  const out = path.join(PUBLIC, 'manifest.webmanifest');
  fs.writeFileSync(out, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`✅ manifest.webmanifest  (${(fs.statSync(out).size / 1024).toFixed(1)} KB)`);
}

function generateServiceWorker() {
  // Cache version bump on every build so old SWs evict cleanly.
  const VERSION = `tn-${new Date().toISOString().slice(0, 10)}-${Date.now().toString(36)}`;
  const p = (sub) => `${BASE_PATH}${sub}`;

  // App-shell URLs to pre-cache (must all return 200 from this build).
  const PRECACHE_URLS = [
    p('/'),
    p('/blog'),
    p('/artists'),
    p('/labels'),
    p('/radio'),
    p('/manifest.webmanifest'),
    p('/icons/icon-192.png'),
    p('/icons/icon-512.png'),
    p('/icons/apple-touch-icon.png'),
  ];

  const sw = `// trance-nexus service worker — cache version: ${VERSION}
//
// Strategy:
//   1. Pre-cache app-shell on install (best-effort; one 404 won't abort).
//   2. HTML navigations  → network-first, falling back to cache, then offline page.
//   3. Static assets     → stale-while-revalidate (fast first paint, fresh on next visit).
//   4. RSS/sitemap/etc.  → network-only (always live).
//   5. Cross-origin      → bypass entirely (Spotify embeds, fonts, etc.).
//
// The cache name embeds a build-time version string. On activate, every cache
// that does not match this name is deleted, so old assets cannot stick around
// across deploys.

const CACHE_NAME = '${VERSION}';
const PRECACHE_URLS = ${JSON.stringify(PRECACHE_URLS, null, 2).replace(/\n/g, '\n')};
const BASE_PATH = ${JSON.stringify(BASE_PATH)};

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Don't fail the whole install if one URL 404s — addAll is atomic, so
    // we add individually and swallow per-URL errors.
    await Promise.all(
      PRECACHE_URLS.map((url) =>
        cache.add(url).catch((e) => console.warn('[sw] precache skipped', url, e))
      )
    );
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

function isHtmlNavigation(request) {
  if (request.mode === 'navigate') return true;
  const accept = request.headers.get('accept') || '';
  return request.method === 'GET' && accept.includes('text/html');
}

function isNetworkOnly(url) {
  // Live data — never serve from cache.
  return /\\.(xml|txt|json)$/.test(url.pathname) ||
         url.pathname.endsWith('/sitemap.xml') ||
         url.pathname.endsWith('/atom.xml') ||
         /\\/rss(\\.[a-z]{2})?\\.xml$/.test(url.pathname);
}

function isStaticAsset(url) {
  return /\\.(js|css|png|jpg|jpeg|svg|webp|gif|woff2?|ttf|otf|ico)$/.test(url.pathname);
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // Same-origin only. Cross-origin (Spotify, YouTube, Apple Music embeds, GA, etc.)
  // is left to the browser — caching third-party responses without their headers
  // can cause subtle bugs and offers little value.
  if (url.origin !== self.location.origin) return;

  if (isNetworkOnly(url)) return; // pass through

  if (isHtmlNavigation(request)) {
    event.respondWith(networkFirst(request));
    return;
  }
  if (isStaticAsset(url)) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) cache.put(request, fresh.clone()).catch(() => {});
    return fresh;
  } catch (e) {
    const cached = await cache.match(request);
    if (cached) return cached;
    // Final fallback: serve the cached app-shell root.
    const root = await cache.match(BASE_PATH + '/') || await cache.match(BASE_PATH + '/index.html');
    if (root) return root;
    return new Response(
      '<!doctype html><meta charset="utf-8"><title>Offline</title>' +
      '<style>body{background:#0d0d0d;color:#fff;font-family:sans-serif;padding:2rem;text-align:center}</style>' +
      '<h1>TRANCE NEXUS</h1><p>You are offline and this page is not in your cache.</p>' +
      '<p><a href="' + BASE_PATH + '/" style="color:#f97316">Return to home</a></p>',
      { status: 503, headers: { 'content-type': 'text/html; charset=utf-8' } }
    );
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((res) => {
      if (res && res.ok) cache.put(request, res.clone()).catch(() => {});
      return res;
    })
    .catch(() => null);
  return cached || network || fetch(request);
}

// Allow the page to trigger a one-shot cache flush (used after major
// content updates if needed).
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
`;
  const out = path.join(PUBLIC, 'sw.js');
  fs.writeFileSync(out, sw, 'utf8');
  console.log(`✅ sw.js  (${(fs.statSync(out).size / 1024).toFixed(1)} KB)  version=${VERSION}`);
}

async function main() {
  console.log('═══════════════════════════════════════');
  console.log('📱  PWA asset generator');
  console.log('═══════════════════════════════════════');
  console.log(`   BASE_PATH = "${BASE_PATH}"`);
  await generateIcons();
  generateManifest();
  generateServiceWorker();
  console.log('\n✅ PWA assets ready');
}

main().catch((err) => {
  console.error('❌ PWA generation failed:', err);
  process.exit(1);
});

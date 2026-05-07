// Generates PWA + favicon + OG assets at build time from public/logo.png:
//
//   public/favicon.ico                 (multi-size: 16, 32, 48)
//   public/favicon-16x16.png
//   public/favicon-32x32.png
//   public/apple-touch-icon.png        (180×180)
//   public/icon-192.png                (192×192)
//   public/icon-512.png                (512×512)
//   public/icon-512-maskable.png       (512×512 with safe-zone padding)
//   public/og-image.png                (1200×630, logo centred on black bg)
//   public/manifest.webmanifest        (paths prefixed with BASE_PATH)
//   public/sw.js                       (service worker, scope-aware)
//
// Source of truth is public/logo.png (a square logo, currently 1024×1024).
// All raster icons are produced by sharp from this single source so the
// brand stays in sync — change logo.png and rebuild and every surface
// updates.
//
// BASE_PATH handling: GitHub Pages serves project sites under
// /trance-nexus when there is no custom domain (configure-pages exports
// BASE_PATH at workflow time). With the CNAME file in place BASE_PATH
// is the empty string. Local dev runs at /. Both manifest paths and
// the SW pre-cache list have to match wherever the site is actually
// served from, so this script reads BASE_PATH the same way
// next.config.js does and bakes it in.

'use strict';

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const BASE_PATH = process.env.BASE_PATH || '';
const PUBLIC = path.join(__dirname, '..', 'public');
const LOGO_SRC = path.join(PUBLIC, 'logo.png');

const COLORS = {
  bg:     '#0d0d0d',
  bg2:    '#1a0a00',
  orange: '#f97316',
  red:    '#dc2626',
  amber:  '#f59e0b',
};

function kb(file) {
  return (fs.statSync(file).size / 1024).toFixed(1);
}

// Produce a square PNG buffer scaled from the logo. `size` is the final
// edge length. `safeZonePct` reserves transparent padding around the logo
// for maskable icons (Android masks ~10–20% from the edges).
async function logoPng(size, { safeZonePct = 0, background = null } = {}) {
  const inset = Math.round(size * safeZonePct);
  const inner = size - inset * 2;

  let pipeline = sharp(LOGO_SRC).resize(inner, inner, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  });

  // For maskable icons we need real padding inside the canvas — extend()
  // wraps the resized logo with a transparent border of the right width.
  if (inset > 0) {
    pipeline = pipeline.extend({
      top: inset,
      bottom: inset,
      left: inset,
      right: inset,
      background: background || { r: 0, g: 0, b: 0, alpha: 0 },
    });
  }

  // For solid-background icons (favicon.ico contents need no transparency
  // to render well on light browser chrome) we flatten on the requested
  // colour after resizing.
  if (background) {
    pipeline = pipeline.flatten({ background });
  }

  return pipeline.png({ compressionLevel: 9 }).toBuffer();
}

// Hand-rolled multi-size .ico writer. The ICO format is a 6-byte header
// followed by N×16-byte directory entries followed by N image payloads.
// Each entry stores the size, where in the file the image data lives,
// and how big it is. Modern browsers accept PNG-encoded payloads inside
// .ico, which keeps this short and avoids pulling in a BMP encoder.
//
// Directory entry layout (all little-endian):
//   0  bWidth        u8     0 means 256
//   1  bHeight       u8     0 means 256
//   2  bColorCount   u8     0 (no palette)
//   3  bReserved     u8     0
//   4  wPlanes       u16    1 for PNG payloads
//   6  wBitCount     u16    32
//   8  dwBytesInRes  u32    image byte length
//  12  dwImageOffset u32    file offset of image
function buildIco(images) {
  const HEADER_SIZE = 6;
  const ENTRY_SIZE = 16;
  const dirSize = HEADER_SIZE + ENTRY_SIZE * images.length;

  const header = Buffer.alloc(HEADER_SIZE);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = .ICO
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  let offset = dirSize;
  for (const { size, data } of images) {
    const e = Buffer.alloc(ENTRY_SIZE);
    e.writeUInt8(size === 256 ? 0 : size, 0);
    e.writeUInt8(size === 256 ? 0 : size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    entries.push(e);
    offset += data.length;
  }

  return Buffer.concat([
    header,
    ...entries,
    ...images.map((i) => i.data),
  ]);
}

async function generateFavicons() {
  // Per the user spec: multi-size ICO with 16/32/48. We generate the PNG
  // payloads from the logo, then bundle them into a single .ico file.
  const ICO_SIZES = [16, 32, 48];
  const icoImages = [];
  for (const size of ICO_SIZES) {
    icoImages.push({ size, data: await logoPng(size) });
  }
  const icoBuf = buildIco(icoImages);
  const icoPath = path.join(PUBLIC, 'favicon.ico');
  fs.writeFileSync(icoPath, icoBuf);
  console.log(`✅ favicon.ico  (${kb(icoPath)} KB, sizes ${ICO_SIZES.join('/')})`);

  for (const size of [16, 32]) {
    const out = path.join(PUBLIC, `favicon-${size}x${size}.png`);
    fs.writeFileSync(out, await logoPng(size));
    console.log(`✅ favicon-${size}x${size}.png  (${kb(out)} KB)`);
  }
}

async function generateAppIcons() {
  const targets = [
    { name: 'apple-touch-icon.png', size: 180, opts: {} },
    { name: 'icon-192.png',         size: 192, opts: {} },
    { name: 'icon-512.png',         size: 512, opts: {} },
    { name: 'icon-512-maskable.png', size: 512, opts: { safeZonePct: 0.18, background: COLORS.bg } },
  ];
  for (const t of targets) {
    const out = path.join(PUBLIC, t.name);
    fs.writeFileSync(out, await logoPng(t.size, t.opts));
    console.log(`✅ ${t.name}  (${kb(out)} KB)`);
  }
}

// Centred-logo OG card on a 1200×630 black canvas. Logo target is 480×480
// — comfortable margin on all sides while still being big enough to read
// in social-feed thumbnails.
async function generateOgImage() {
  const W = 1200;
  const H = 630;
  const LOGO = 480;

  const logoBuf = await sharp(LOGO_SRC)
    .resize(LOGO, LOGO, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const out = path.join(PUBLIC, 'og-image.png');
  await sharp({
    create: {
      width: W,
      height: H,
      channels: 3,
      background: { r: 13, g: 13, b: 13 }, // matches COLORS.bg (#0d0d0d)
    },
  })
    .composite([{ input: logoBuf, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(out);

  console.log(`✅ og-image.png  (${kb(out)} KB, ${W}×${H})`);
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
      { src: p('/icon-192.png'),          sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: p('/icon-512.png'),          sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: p('/icon-512-maskable.png'), sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    shortcuts: [
      { name: 'Blog',    short_name: 'Blog',    url: p('/blog'),    icons: [{ src: p('/icon-192.png'), sizes: '192x192' }] },
      { name: 'Artists', short_name: 'Artists', url: p('/artists'), icons: [{ src: p('/icon-192.png'), sizes: '192x192' }] },
      { name: 'Radio',   short_name: 'Radio',   url: p('/radio'),   icons: [{ src: p('/icon-192.png'), sizes: '192x192' }] },
    ],
  };
  const out = path.join(PUBLIC, 'manifest.webmanifest');
  fs.writeFileSync(out, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`✅ manifest.webmanifest  (${kb(out)} KB)`);
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
    p('/icon-192.png'),
    p('/icon-512.png'),
    p('/apple-touch-icon.png'),
    p('/logo.png'),
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
  console.log(`✅ sw.js  (${kb(out)} KB)  version=${VERSION}`);
}

async function main() {
  console.log('═══════════════════════════════════════');
  console.log('📱  PWA + favicon + OG asset generator');
  console.log('═══════════════════════════════════════');
  console.log(`   BASE_PATH = "${BASE_PATH}"`);

  if (!fs.existsSync(LOGO_SRC)) {
    console.error(`❌ Source logo missing at ${LOGO_SRC}. Place a square PNG/JPEG there and rerun.`);
    process.exit(1);
  }

  await generateFavicons();
  await generateAppIcons();
  await generateOgImage();
  generateManifest();
  generateServiceWorker();

  console.log('\n✅ All brand assets ready');
}

main().catch((err) => {
  console.error('❌ PWA generation failed:', err);
  process.exit(1);
});

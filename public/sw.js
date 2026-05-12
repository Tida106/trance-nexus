// trance-nexus service worker — cache version: tn-2026-05-12-mp20fj9f
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

const CACHE_NAME = 'tn-2026-05-12-mp20fj9f';
const PRECACHE_URLS = [
  "/",
  "/blog",
  "/artists",
  "/labels",
  "/radio",
  "/manifest.webmanifest",
  "/icon-192.png",
  "/icon-512.png",
  "/apple-touch-icon.png",
  "/logo.png"
];
const BASE_PATH = "";

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
  return /\.(xml|txt|json)$/.test(url.pathname) ||
         url.pathname.endsWith('/sitemap.xml') ||
         url.pathname.endsWith('/atom.xml') ||
         /\/rss(\.[a-z]{2})?\.xml$/.test(url.pathname);
}

function isStaticAsset(url) {
  return /\.(js|css|png|jpg|jpeg|svg|webp|gif|woff2?|ttf|otf|ico)$/.test(url.pathname);
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

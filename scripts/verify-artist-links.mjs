#!/usr/bin/env node
// verify-artist-links.mjs
//
// Walks every artist file under data/artists/ and verifies every URL
// declared in any `links: { ... }` block. Reports PASS/FAIL per URL.
//
// Why a regex parser instead of `import`:
//   The artist data files use Next.js's extensionless ESM imports
//   (`import { legends } from './legends'`), which plain Node ESM
//   refuses to resolve. Reading the files as text and pulling the
//   `links` blocks with a small regex sidesteps the resolver entirely
//   and stays robust to future schema additions — we only care about
//   `slug:` and `links: { ... }`, and that pattern is stable across
//   every file in the directory.
//
// Run:
//   node scripts/verify-artist-links.mjs
//   node scripts/verify-artist-links.mjs --slug=bt,sasha       (filter)
//   node scripts/verify-artist-links.mjs --json                (JSON out)
//   node scripts/verify-artist-links.mjs --concurrency=8       (default 6)
//
// Verification rules:
//   - HTTPS request with strict TLS (default Node behaviour). Self-signed
//     or expired certs are treated as failures since real visitors see
//     the same browser warning.
//   - Try HEAD first; fall back to GET if the server rejects HEAD with
//     400/403/405/501.
//   - 10-second timeout per request (each redirect hop gets its own).
//   - Follow up to 5 redirects manually so the chain can be reported.
//   - Browser-real User-Agent — Cloudflare and AWS WAF often 403 curl-
//     style UAs (this is exactly why ra.co always 403'd before).
//
// Exit code: 0 if every URL ends at a 2xx response, 1 otherwise.

import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTISTS_DIR = path.resolve(__dirname, '..', 'data', 'artists');

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    return m ? [m[1], m[2] ?? true] : [a, true];
  })
);

const SLUG_FILTER = args.slug ? new Set(String(args.slug).split(',')) : null;
const JSON_OUT = !!args.json;
// Auto-disable ANSI colours when stdout is piped or redirected — keeps
// the log file readable in git without manual stripping. --color forces
// it back on, --no-color forces it off.
const COLOR =
  args.color === true
    ? true
    : args['no-color'] === true
    ? false
    : Boolean(process.stdout.isTTY);
const c = COLOR
  ? { ok: '\x1b[32m', fail: '\x1b[31m', bold: '\x1b[1m', reset: '\x1b[0m' }
  : { ok: '', fail: '', bold: '', reset: '' };
// Default concurrency lowered from 6 to 3 after we observed the first
// batch of 6 simultaneous fetches racing TLS/DNS warmup on this machine
// — every URL in the first batch returned UND_ERR_CONNECT_TIMEOUT
// (undici code "20") even though identical URLs returned 200 milliseconds
// later. 3 leaves enough parallelism that the run still finishes in
// well under a minute on 50 artists.
const CONCURRENCY = Math.max(1, Number(args.concurrency) || 3);
const TIMEOUT_MS = 10_000;
const MAX_REDIRECTS = 5;

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

const COMMON_HEADERS = {
  'user-agent': UA,
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'accept-language': 'en-US,en;q=0.9,ja;q=0.8',
};

// --- Parse artist source files ------------------------------------------

// Returns [{ slug, name?, key, url }] for every URL declared in any
// `links: { ... }` block in any data/artists/*.js file.
function collectTargets() {
  const files = readdirSync(ARTISTS_DIR).filter((f) => f.endsWith('.js'));
  const out = [];
  for (const file of files) {
    if (file === 'index.js') continue;
    const src = readFileSync(path.join(ARTISTS_DIR, file), 'utf8');

    // Each artist record is a top-level `{ ... }` containing `slug:` and
    // `links:`. We walk slug-by-slug: find each `slug: '...'`, then look
    // at the *following* `links: { ... }` block within the same record.
    // This keeps us from mis-matching a `links` block across artist
    // boundaries.
    const slugRe = /slug:\s*['"]([a-z0-9-]+)['"]/g;
    let m;
    while ((m = slugRe.exec(src)) !== null) {
      const slug = m[1];
      // Search forward for the next `links: {` until the next `slug:`.
      const tail = src.slice(m.index);
      const nextSlugIdx = tail.slice(1).search(/slug:\s*['"][a-z0-9-]+['"]/);
      const window =
        nextSlugIdx >= 0 ? tail.slice(0, nextSlugIdx + 1) : tail;
      const linksMatch = window.match(/links:\s*\{([\s\S]*?)\}/);
      if (!linksMatch) continue;

      // Pull `key: 'url'` (or "url") pairs out of the block.
      const kvRe = /([a-z][a-zA-Z0-9_]*)\s*:\s*['"]([^'"]+)['"]/g;
      let kv;
      while ((kv = kvRe.exec(linksMatch[1])) !== null) {
        const url = kv[2];
        if (!/^https?:\/\//i.test(url)) continue; // skip non-URL keys
        out.push({ slug, key: kv[1], url, file });
      }
    }
  }
  return out;
}

// --- HTTP verification --------------------------------------------------

async function fetchOne(url, { method = 'HEAD' } = {}) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method,
      redirect: 'manual',
      headers: COMMON_HEADERS,
      signal: controller.signal,
    });
    return res;
  } finally {
    clearTimeout(t);
  }
}

// Transient error codes worth retrying. UND_ERR_CONNECT_TIMEOUT (numeric
// code 20 in undici), DNS races, TLS handshake aborts, etc. happen
// during the first burst of a fresh process — usually settle on retry.
const RETRYABLE = new Set([
  'UND_ERR_CONNECT_TIMEOUT',
  'UND_ERR_HEADERS_TIMEOUT',
  'UND_ERR_BODY_TIMEOUT',
  'UND_ERR_SOCKET',
  'ECONNRESET',
  'ETIMEDOUT',
  'EAI_AGAIN',
  'ENETUNREACH',
  20, // some undici versions surface the numeric only
]);

async function fetchWithRetry(url, options, attempts = 3) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fetchOne(url, options);
    } catch (err) {
      lastErr = err;
      const cause = err.cause ?? err;
      const code = cause?.code;
      if (!RETRYABLE.has(code) && !RETRYABLE.has(String(code))) throw err;
      // Brief back-off before retry — gives DNS/TLS warmup time to settle.
      await new Promise((r) => setTimeout(r, 250 * (i + 1)));
    }
  }
  throw lastErr;
}

async function checkUrl(originalUrl) {
  let url = originalUrl;
  const chain = [];
  for (let i = 0; i <= MAX_REDIRECTS; i++) {
    let res;
    try {
      res = await fetchWithRetry(url, { method: 'HEAD' });
      // Some servers (Amazon /dp/, certain WAFs) return 4xx on HEAD.
      // Retry with GET, but only when no redirect was given — a 30x
      // already tells us where to go.
      const isRedirect = res.status >= 300 && res.status < 400;
      if (!isRedirect && [400, 403, 405, 501].includes(res.status)) {
        res = await fetchWithRetry(url, { method: 'GET' });
      }
    } catch (err) {
      const cause = err.cause ?? err;
      const reason =
        cause?.code ||
        cause?.reason ||
        cause?.message ||
        err.message ||
        'unknown-error';
      return {
        ok: false,
        finalUrl: url,
        chain,
        reason,
        status: null,
      };
    }

    chain.push({ url, status: res.status });

    if (res.status >= 200 && res.status < 300) {
      return {
        ok: true,
        finalUrl: url,
        chain,
        reason: null,
        status: res.status,
      };
    }

    if (res.status >= 300 && res.status < 400) {
      const next = res.headers.get('location');
      if (!next) {
        return {
          ok: false,
          finalUrl: url,
          chain,
          reason: 'redirect-without-location',
          status: res.status,
        };
      }
      url = new URL(next, url).toString();
      continue;
    }

    return {
      ok: false,
      finalUrl: url,
      chain,
      reason: `HTTP ${res.status}`,
      status: res.status,
    };
  }

  return {
    ok: false,
    finalUrl: url,
    chain,
    reason: `too many redirects (>${MAX_REDIRECTS})`,
    status: null,
  };
}

async function pool(items, n, fn) {
  const results = [];
  let i = 0;
  const workers = Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx], idx);
    }
  });
  await Promise.all(workers);
  return results;
}

// --- Main ---------------------------------------------------------------

const all = collectTargets();
const targets = SLUG_FILTER ? all.filter((t) => SLUG_FILTER.has(t.slug)) : all;

if (targets.length === 0) {
  console.error('No URLs to check.');
  process.exit(2);
}

const slugCount = new Set(targets.map((t) => t.slug)).size;

if (!JSON_OUT) {
  console.log(
    `\nVerifying ${targets.length} URLs across ${slugCount} artists ` +
      `(concurrency=${CONCURRENCY}, timeout=${TIMEOUT_MS / 1000}s)…\n`
  );
}

const checked = await pool(targets, CONCURRENCY, async (t) => {
  const r = await checkUrl(t.url);
  if (!JSON_OUT) {
    const tag = r.ok ? `${c.ok}[OK  ]${c.reset}` : `${c.fail}[FAIL]${c.reset}`;
    const status = (r.status ?? 'ERR').toString().padStart(3);
    const slugCol = t.slug.padEnd(22);
    const keyCol = t.key.padEnd(11);
    if (r.ok) {
      console.log(`${tag} ${slugCol} ${keyCol} ${status}  ${t.url}`);
    } else {
      console.log(
        `${tag} ${slugCol} ${keyCol} ${status}  ${t.url}\n` +
          `       reason: ${r.reason}` +
          (r.chain.length > 1
            ? `\n       chain:  ${r.chain
                .map((h) => `${h.status} → ${h.url}`)
                .join('\n               ')}`
            : '')
      );
    }
  }
  return { ...t, ...r };
});

const failed = checked.filter((c) => !c.ok);
const passed = checked.filter((c) => c.ok);

if (JSON_OUT) {
  console.log(
    JSON.stringify(
      {
        total: checked.length,
        passed: passed.length,
        failed: failed.length,
        failures: failed.map((f) => ({
          slug: f.slug,
          file: f.file,
          key: f.key,
          url: f.url,
          status: f.status,
          reason: f.reason,
          chain: f.chain,
        })),
      },
      null,
      2
    )
  );
} else {
  console.log(
    `\nSummary: ${c.bold}${passed.length}/${checked.length}${c.reset} OK, ` +
      `${c.bold}${failed.length}${c.reset} failed.`
  );
  if (failed.length > 0) {
    console.log('\nFailures:');
    for (const f of failed) {
      console.log(`  ${f.slug.padEnd(22)} ${f.key.padEnd(11)} ${f.url}`);
      console.log(`    → ${f.reason}`);
    }
  }
}

process.exit(failed.length === 0 ? 0 : 1);

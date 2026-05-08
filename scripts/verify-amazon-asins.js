#!/usr/bin/env node
// verify-amazon-asins.js
//
// Pre-build gate that fetches every Amazon ASIN declared in the data
// layer and fails the build if any ASIN's product page is missing,
// SSL-broken, or rate-limited beyond retry. Mirrors the artist-link
// verifier (scripts/verify-artist-links.mjs) in spirit and defaults.
//
// Run:
//   node scripts/verify-amazon-asins.js
//   node scripts/verify-amazon-asins.js --json
//   node scripts/verify-amazon-asins.js --concurrency=2
//
// Sources walked (in priority order, dedup'd by asin):
//   1. data/blog/products.js — every ASIN under `ja:` AND under `en:`
//      is checked against amazon.co.jp. The site routes ALL affiliate
//      links to the JP store regardless of UI language, so ASINs in the
//      en: arrays must also be valid JP-store ASINs.
//   2. components/AmazonLink.jsx + any other components/*.jsx that
//      hard-code an asin — verified against amazon.co.jp.
//   3. data/blog/posts*.js — same JP-store check for any inline ASINs
//      that escape products.js (currently none, but the walker is
//      forward-compatible).
//
// Verification rules:
//   - GET /dp/<ASIN> with strict TLS (default Node behaviour). Self-
//     signed / expired certs fail the gate because real visitors see
//     the same browser warning.
//   - HEAD requests are deliberately skipped — Amazon returns 405 on
//     HEAD for /dp/ across both regions, so they're misleading.
//   - 10-second timeout per request, up to 2 retries on transient
//     network errors (UND_ERR_CONNECT_TIMEOUT etc.) so DNS/TLS warmup
//     races can't false-negative.
//   - 200 with Amazon's "page not found" body marker counts as a
//     failure — Amazon returns 200 even for retired ASINs in some
//     paths, with the 404 message inside the HTML body.
//
// Exit code: 0 if every ASIN passes its required checks, 1 otherwise.
// On exit-1 the build chain (`build` script in package.json) bails
// before next-build runs.
//
// Logs: full output is mirrored to logs/verify-amazon-asins.log so a
// CI run with --silent npm flags still leaves a postmortem behind.

'use strict';

const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const PRODUCTS_FILE = path.join(ROOT, 'data', 'blog', 'products.js');
const LOG_DIR = path.join(ROOT, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'verify-amazon-asins.log');
const SCAN_DIRS = [
  path.join(ROOT, 'components'),
  path.join(ROOT, 'data', 'blog'),
];

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    return m ? [m[1], m[2] ?? true] : [a, true];
  })
);

const JSON_OUT = !!args.json;
const CONCURRENCY = Math.max(1, Number(args.concurrency) || 2);
const TIMEOUT_MS = 10_000;
const MAX_ATTEMPTS = 3; // initial + 2 retries
const BACKOFF_MS = 250;

const COLOR =
  args.color === true
    ? true
    : args['no-color'] === true
    ? false
    : Boolean(process.stdout.isTTY);
const c = COLOR
  ? { ok: '\x1b[32m', fail: '\x1b[31m', dim: '\x1b[2m', bold: '\x1b[1m', reset: '\x1b[0m' }
  : { ok: '', fail: '', dim: '', bold: '', reset: '' };

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// All affiliate links route to amazon.co.jp now, so the verifier only
// targets the JP store. The locale dimension below is retained inside
// the data layer (ja/en arrays in products.js) only to drive caption
// language — the destination URL is identical.
const STORE = { domain: 'www.amazon.co.jp', label: 'amazon.co.jp' };

// "Page not found" body markers for amazon.co.jp. Amazon serves 200 +
// a 404-like body for some retired ASINs, so status alone is insufficient.
const NOT_FOUND_PATTERNS = [
  /ページが見つかりません/,
  /該当する商品はありません/,
  /お探しのページは見つかりませんでした/,
];

const RETRYABLE = new Set([
  'UND_ERR_CONNECT_TIMEOUT',
  'UND_ERR_HEADERS_TIMEOUT',
  'UND_ERR_BODY_TIMEOUT',
  'UND_ERR_SOCKET',
  'ECONNRESET',
  'ETIMEDOUT',
  'EAI_AGAIN',
  'ENETUNREACH',
  20,
  '20',
]);

// --- Mirror stdout to logs/verify-amazon-asins.log ----------------------

function setupLog() {
  fs.mkdirSync(LOG_DIR, { recursive: true });
  // Truncate at start of run so the log always reflects the latest run.
  const stream = fs.createWriteStream(LOG_FILE, { flags: 'w' });
  const origWrite = process.stdout.write.bind(process.stdout);
  process.stdout.write = (chunk, ...rest) => {
    // Strip ANSI before writing to file so the log is grep-friendly.
    const text =
      typeof chunk === 'string'
        ? chunk.replace(/\x1b\[[0-9;]*m/g, '')
        : chunk;
    stream.write(text);
    return origWrite(chunk, ...rest);
  };
  return stream;
}

// --- Source scanning ----------------------------------------------------

// Parse data/blog/products.js for {asin, locale} pairs. The locale
// label (ja/en) is preserved purely for log readability — every ASIN
// is verified against amazon.co.jp regardless of which array it sits in.
function asinsFromProducts() {
  const src = fs.readFileSync(PRODUCTS_FILE, 'utf8');
  const out = [];
  const localeRe = /\b(ja|en)\s*:\s*\[([\s\S]*?)\][,}]/g;
  let m;
  while ((m = localeRe.exec(src)) !== null) {
    const locale = m[1];
    const block = m[2];
    const asinRe = /\basin\s*:\s*['"]([A-Z0-9]{10})['"]/g;
    let am;
    while ((am = asinRe.exec(block)) !== null) {
      out.push({ asin: am[1], locale, source: 'products.js' });
    }
  }
  return out;
}

// Walk components/ and data/blog/ for any other inline ASINs not in
// products.js. These are verified against amazon.co.jp.
function asinsFromOtherSources(known) {
  const seen = new Set(known.map((k) => k.asin));
  const out = [];
  const walkRe = /\basin\s*:\s*['"]([A-Z0-9]{10})['"]/g;
  function walk(dir) {
    let entries = [];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
        continue;
      }
      if (!/\.(js|jsx|mjs)$/.test(e.name)) continue;
      if (full === PRODUCTS_FILE) continue;
      const src = fs.readFileSync(full, 'utf8');
      let m;
      while ((m = walkRe.exec(src)) !== null) {
        if (seen.has(m[1])) continue;
        seen.add(m[1]);
        out.push({
          asin: m[1],
          locale: 'auto',
          source: path.relative(ROOT, full),
        });
      }
    }
  }
  for (const d of SCAN_DIRS) walk(d);
  return out;
}

// --- HTTP -----------------------------------------------------------------

async function fetchOnce(url) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, {
      method: 'GET',
      redirect: 'follow', // amazon /dp/ frequently 30x to a longer canonical
      headers: {
        'user-agent': UA,
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'accept-language': 'en-US,en;q=0.9,ja;q=0.8',
      },
      signal: controller.signal,
    });
  } finally {
    clearTimeout(t);
  }
}

async function fetchWithRetry(url) {
  let lastErr;
  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    try {
      return await fetchOnce(url);
    } catch (err) {
      lastErr = err;
      const cause = err.cause ?? err;
      const code = cause?.code;
      if (!RETRYABLE.has(code) && !RETRYABLE.has(String(code))) throw err;
      await new Promise((r) => setTimeout(r, BACKOFF_MS * (i + 1)));
    }
  }
  throw lastErr;
}

// Verify one ASIN against amazon.co.jp. Returns { ok, status, reason }.
async function checkAsin(asin) {
  const url = `https://${STORE.domain}/dp/${encodeURIComponent(asin)}`;
  let res;
  try {
    res = await fetchWithRetry(url);
  } catch (err) {
    const cause = err.cause ?? err;
    return {
      ok: false,
      status: null,
      url,
      reason: cause?.code || cause?.message || err.message || 'unknown-error',
    };
  }
  if (res.status < 200 || res.status >= 300) {
    return { ok: false, status: res.status, url, reason: `HTTP ${res.status}` };
  }
  // Body inspection — Amazon serves 200 with a 404 message for some
  // retired ASINs.
  let body = '';
  try {
    body = await res.text();
  } catch (err) {
    return {
      ok: false,
      status: res.status,
      url,
      reason: `body-read-failed: ${err.message}`,
    };
  }
  for (const re of NOT_FOUND_PATTERNS) {
    if (re.test(body)) {
      return {
        ok: false,
        status: res.status,
        url,
        reason: `not-found body marker (/${re.source}/)`,
      };
    }
  }
  return { ok: true, status: res.status, url, reason: null };
}

async function verifyEntry(entry) {
  // entry: { asin, locale: 'ja'|'en'|'auto', source }
  // Every entry is verified against amazon.co.jp regardless of locale —
  // locale is preserved only for log column readability.
  const r = await checkAsin(entry.asin);
  return [{ ...entry, ...r, store: STORE.label }];
}

async function pool(items, n, fn) {
  const results = [];
  let i = 0;
  const workers = Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      const r = await fn(items[idx], idx);
      results.push(...(Array.isArray(r) ? r : [r]));
    }
  });
  await Promise.all(workers);
  return results;
}

// --- Main ---------------------------------------------------------------

(async () => {
  const logStream = setupLog();

  const fromProducts = asinsFromProducts();
  const fromOthers = asinsFromOtherSources(fromProducts);
  const targets = [...fromProducts, ...fromOthers];

  if (targets.length === 0) {
    if (!JSON_OUT) {
      console.log('No ASINs found in data/blog/products.js or scanned sources — nothing to verify.');
    } else {
      console.log(JSON.stringify({ total: 0, passed: 0, failed: 0, failures: [] }));
    }
    logStream.end();
    process.exit(0);
  }

  if (!JSON_OUT) {
    console.log(
      `\nVerifying ${targets.length} ASIN${targets.length === 1 ? '' : 's'} ` +
        `(concurrency=${CONCURRENCY}, timeout=${TIMEOUT_MS / 1000}s, ` +
        `retries=${MAX_ATTEMPTS - 1})…\n`
    );
  }

  const checked = await pool(targets, CONCURRENCY, async (t) => {
    const rs = await verifyEntry(t);
    if (!JSON_OUT) {
      for (const r of rs) {
        const tag = r.ok ? `${c.ok}[OK  ]${c.reset}` : `${c.fail}[FAIL]${c.reset}`;
        const status = (r.status ?? 'ERR').toString().padStart(3);
        const storeCol = (r.store || '?').padEnd(12);
        const localeCol = (r.locale || 'auto').padEnd(4);
        console.log(`${tag} ${r.asin} ${localeCol} ${storeCol} ${status}  ${r.url}`);
        if (!r.ok) console.log(`       ${c.dim}reason: ${r.reason}${c.reset}`);
        if (r.note) console.log(`       ${c.dim}note:   ${r.note}${c.reset}`);
      }
    }
    return rs;
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
            asin: f.asin,
            locale: f.locale,
            source: f.source,
            url: f.url,
            status: f.status,
            reason: f.reason,
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
        console.log(`  ${f.asin}  (${f.locale || 'auto'})  ${f.source}`);
        console.log(`    → ${f.reason}`);
        console.log(`    ${f.url}`);
      }
      console.log(
        `\n${c.fail}${c.bold}BUILD GATE: ASIN verification failed.${c.reset}\n` +
          'See README "Pre-build verification" for fix steps.'
      );
    }
  }

  logStream.end();
  process.exit(failed.length === 0 ? 0 : 1);
})().catch((err) => {
  console.error('verify-amazon-asins crashed:', err);
  process.exit(2);
});

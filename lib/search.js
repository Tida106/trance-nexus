'use client';

import MiniSearch from 'minisearch';

// next.config.js exposes BASE_PATH as NEXT_PUBLIC_BASE_PATH so client-side
// fetch calls can prefix it correctly (Next's <Link>/<Image> handle the
// basePath automatically; raw fetch does not).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

let cachedMiniSearch = null;
let loadPromise = null;

// Custom tokenizer:
// - splits on whitespace + ASCII punctuation
// - extracts CJK 2-grams + single chars so Japanese queries can match without
//   needing morphological segmentation
function tokenize(text) {
  if (!text) return [];
  const parts = String(text)
    .toLowerCase()
    .split(/[\s　.,!?;:'"()\[\]{}\/\\<>@#$%^&*+=|`~\-—–]+/u)
    .filter(Boolean);
  const out = [];
  for (const p of parts) {
    if (/[぀-ヿ㐀-鿿＀-￯]/u.test(p)) {
      // CJK chunk — emit each char and 2-grams
      for (const c of p) out.push(c);
      for (let i = 0; i < p.length - 1; i++) out.push(p.slice(i, i + 2));
    } else {
      out.push(p);
    }
  }
  return out;
}

// Lazy-loads /search-index.json on first call. Subsequent calls share the
// same MiniSearch instance.
export async function getSearchIndex() {
  if (cachedMiniSearch) return cachedMiniSearch;
  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    const res = await fetch(`${BASE}/search-index.json`);
    if (!res.ok) throw new Error(`Search index fetch failed: ${res.status}`);
    const docs = await res.json();
    const ms = new MiniSearch({
      idField: 'id',
      fields: ['titleEn', 'titleJa', 'excerptEn', 'excerptJa'],
      storeFields: [
        'type',
        'url',
        'titleEn',
        'titleJa',
        'excerptEn',
        'excerptJa',
        'icon',
        'flag',
        'date',
        'tags',
      ],
      tokenize,
      processTerm: (t) => (t ? t.toLowerCase() : t),
      searchOptions: {
        boost: { titleEn: 3, titleJa: 3, excerptEn: 1, excerptJa: 1 },
        fuzzy: 0.2,
        prefix: true,
        tokenize,
        processTerm: (t) => (t ? t.toLowerCase() : t),
      },
    });
    ms.addAll(docs);
    cachedMiniSearch = ms;
    return ms;
  })();

  return loadPromise;
}

export async function performSearch(query, { limit = 30 } = {}) {
  const trimmed = (query || '').trim();
  if (!trimmed) return [];
  const ms = await getSearchIndex();
  return ms.search(trimmed).slice(0, limit);
}

export const TYPE_ORDER = ['blog', 'artist', 'label', 'glossary'];

export const TYPE_LABELS = {
  blog: { en: 'Articles', ja: '記事' },
  artist: { en: 'Artists', ja: 'アーティスト' },
  label: { en: 'Labels', ja: 'レーベル' },
  glossary: { en: 'Glossary', ja: '用語集' },
};

export function groupByType(results) {
  const groups = {};
  for (const t of TYPE_ORDER) groups[t] = [];
  for (const r of results) {
    if (groups[r.type]) groups[r.type].push(r);
  }
  return groups;
}

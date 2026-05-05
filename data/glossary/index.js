import { genres } from './genres';
import { production } from './production';
import { djs } from './djs';
import { culture } from './culture';

export const glossary = [
  ...genres,
  ...production,
  ...djs,
  ...culture,
];

export const glossarySlugs = glossary.map((g) => g.slug);

export function getTermBySlug(slug) {
  return glossary.find((g) => g.slug === slug);
}

export function getRelatedTerms(slug, limit = 5) {
  const term = getTermBySlug(slug);
  if (!term) return [];
  return (term.related || [])
    .map(getTermBySlug)
    .filter(Boolean)
    .slice(0, limit);
}

// Build a single regex for detecting glossary terms in arbitrary text.
// Matches the longest term first, supports en + ja + aliases. Used for
// auto-linking inside blog posts.
export function buildTermDetector() {
  const items = [];
  for (const g of glossary) {
    const variants = [
      g.term.en,
      g.term.ja,
      ...(g.aliases || []),
    ].filter(Boolean);
    for (const v of variants) {
      items.push({ pattern: v, slug: g.slug });
    }
  }
  // Sort longest-first so multi-word terms beat their shorter prefixes
  items.sort((a, b) => b.pattern.length - a.pattern.length);
  return items;
}

// Detect glossary terms present in given EN+JA text. Returns dedup'd term entries.
export function detectTerms(text) {
  if (!text) return [];
  const lowered = text.toLowerCase();
  const seen = new Set();
  const detector = buildTermDetector();
  const hits = [];
  for (const { pattern, slug } of detector) {
    if (seen.has(slug)) continue;
    // Case-insensitive substring check (covers Japanese natively).
    if (lowered.includes(pattern.toLowerCase())) {
      seen.add(slug);
      hits.push(getTermBySlug(slug));
    }
  }
  return hits.filter(Boolean);
}

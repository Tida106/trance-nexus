import { majors } from './majors';
import { classics } from './classics';
import { modern } from './modern';
import { artists } from '@/data/artists/index';

// Future batches:
// import { psy } from './psy';

export const labels = [
  ...majors,
  ...classics,
  ...modern,
  // ...psy,
];

export const labelSlugs = labels.map((l) => l.slug);

export function getLabelBySlug(slug) {
  return labels.find((l) => l.slug === slug);
}

export function getRelatedLabels(slug, limit = 5) {
  const l = getLabelBySlug(slug);
  if (!l) return [];
  return (l.related || [])
    .map(getLabelBySlug)
    .filter(Boolean)
    .slice(0, limit);
}

// Lookup label slug by name string (case-insensitive, supports aliases).
// Used to convert artist.labels[] string names into clickable links.
export function findLabelByName(name) {
  if (!name) return null;
  const needle = name.toLowerCase().trim();
  for (const l of labels) {
    if (l.name.toLowerCase() === needle) return l;
    if ((l.aliases || []).some((a) => a.toLowerCase() === needle)) return l;
  }
  // Fallback: substring match (e.g. "Coldharbour Recordings" inside "Coldharbour")
  for (const l of labels) {
    const labelLower = l.name.toLowerCase();
    if (needle.includes(labelLower) || labelLower.includes(needle)) return l;
    for (const a of l.aliases || []) {
      const aliasLower = a.toLowerCase();
      if (needle.includes(aliasLower) || aliasLower.includes(needle)) return l;
    }
  }
  return null;
}

// Reverse lookup: which artists list this label in their `labels` field?
export function getArtistsForLabel(label) {
  if (!label) return [];
  const labelNames = [label.name, ...(label.aliases || [])].map((s) =>
    s.toLowerCase()
  );
  return artists.filter((a) => {
    if (!Array.isArray(a.labels)) return false;
    return a.labels.some((entry) => {
      const e = entry.toLowerCase();
      return labelNames.some((n) => e.includes(n) || n.includes(e));
    });
  });
}

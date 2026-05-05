import { legends } from './legends';

// Future batches will be appended here:
// import { progressive } from './progressive';
// import { uplifting } from './uplifting';
// import { psy } from './psy';

export const artists = [
  ...legends,
  // ...progressive,
  // ...uplifting,
  // ...psy,
];

export const slugs = artists.map(a => a.slug);

export function getArtistBySlug(slug) {
  return artists.find(a => a.slug === slug);
}

export function getRelatedArtists(slug, limit = 4) {
  const a = getArtistBySlug(slug);
  if (!a) return [];
  return (a.related || [])
    .map(getArtistBySlug)
    .filter(Boolean)
    .slice(0, limit);
}

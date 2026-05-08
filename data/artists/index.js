import { legends } from './legends';
import { legends2 } from './legends2';
import { progressive } from './progressive';
import { progressive2 } from './progressive2';
import { progressive3 } from './progressive3';
import { uplifting } from './uplifting';
import { uplifting2 } from './uplifting2';
import { uplifting3 } from './uplifting3';
import { vocal } from './vocal';
import { psy } from './psy';
import { psy2 } from './psy2';

export const artists = [
  ...legends,
  ...legends2,
  ...progressive,
  ...progressive2,
  ...progressive3,
  ...uplifting,
  ...uplifting2,
  ...uplifting3,
  ...vocal,
  ...psy,
  ...psy2,
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

import { legends } from './legends';
import { legends2 } from './legends2';
import { progressive } from './progressive';
import { progressive2 } from './progressive2';
import { progressive3 } from './progressive3';
import { uplifting } from './uplifting';
import { uplifting2 } from './uplifting2';
import { uplifting3 } from './uplifting3';
import { uplifting4 } from './uplifting4';
import { uplifting5 } from './uplifting5';
import { uplifting6 } from './uplifting6';
import { crossover } from './crossover';
import { crossover2 } from './crossover2';
import { vocal } from './vocal';
import { vocal2 } from './vocal2';
import { vocal3 } from './vocal3';
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
  ...uplifting4,
  ...uplifting5,
  ...uplifting6,
  ...crossover,
  ...crossover2,
  ...vocal,
  ...vocal2,
  ...vocal3,
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

// Maps each blog post slug to its category (one) and tags (many).
// Source of truth for /category/* and /tag/* routes.

import { listing } from './listing';
import { categories } from './categories';
import { tags as allTags } from './tags';

export const classification = {
  'why-trance-music-endures': {
    category: 'history',
    tags: ['90s', '2000s', '2010s', '2020s', 'uplifting', 'asot'],
  },
  'role-of-vocals-in-trance-music': {
    category: 'subgenres',
    tags: ['vocal', 'above-and-beyond', 'ferry-corsten'],
  },
  'trance-vs-house-vs-techno': {
    category: 'subgenres',
    tags: ['progressive', 'uplifting'],
  },
  'rise-of-psytrance-goa-to-modern-day': {
    category: 'subgenres',
    tags: ['psytrance', 'goa', '90s', '2000s', '2010s'],
  },
  'iconic-trance-anthems-that-defined-an-era': {
    category: 'history',
    tags: ['90s', '2000s', 'uplifting', 'vocal', 'paul-van-dyk', 'ferry-corsten', 'armin-van-buuren', 'tiesto'],
  },
  'how-to-dj-trance-beginners-guide': {
    category: 'production',
    tags: ['dj-equipment', 'production-tips'],
  },
  'best-trance-festivals-worldwide': {
    category: 'events',
    tags: ['ibiza', 'tomorrowland', 'asot', '2010s', '2020s'],
  },
  'essential-trance-labels-2026': {
    category: 'labels',
    tags: ['uplifting', 'progressive', 'psytrance', '2020s'],
  },
  'top-10-trance-subgenres-explained': {
    category: 'subgenres',
    tags: ['uplifting', 'progressive', 'psytrance', 'vocal', 'hard-trance', 'goa'],
  },
  'pioneer-dj-vs-denon-dj-for-trance': {
    category: 'production',
    tags: ['dj-equipment'],
  },
  'best-headphones-for-trance-djing-2026': {
    category: 'production',
    tags: ['dj-equipment', '2020s'],
  },
  'essential-vst-plugins-trance-production': {
    category: 'production',
    tags: ['vst', 'production-tips', '2020s'],
  },
  'how-to-mix-trance-beatmatching-phrasing': {
    category: 'production',
    tags: ['dj-equipment', 'production-tips'],
  },
  'art-of-trance-buildup-production-secrets': {
    category: 'production',
    tags: ['production-tips', 'vst'],
  },
  'armin-van-buuren-king-of-trance': {
    category: 'artists',
    tags: ['armin-van-buuren', 'asot', 'uplifting', '2000s', '2010s', '2020s'],
  },
  'above-beyond-anjuna-empire': {
    category: 'artists',
    tags: ['above-and-beyond', 'vocal', 'progressive', '2000s', '2010s'],
  },
  'paul-van-dyk-pioneer-of-trance': {
    category: 'artists',
    tags: ['paul-van-dyk', 'progressive', '90s', '2000s'],
  },
  'tiesto-evolution-trance-to-edm': {
    category: 'artists',
    tags: ['tiesto', 'progressive', '2000s', '2010s'],
  },
  'ferry-corsten-three-decades-of-trance': {
    category: 'artists',
    tags: ['ferry-corsten', 'uplifting', '90s', '2000s', '2010s'],
  },
  'best-trance-clubs-in-europe': {
    category: 'events',
    tags: ['ibiza', '2000s', '2010s'],
  },
  'a-state-of-trance-show-that-changed-everything': {
    category: 'history',
    tags: ['asot', 'armin-van-buuren', 'uplifting', '2000s', '2010s', '2020s'],
  },
  'tomorrowland-trance-stage': {
    category: 'events',
    tags: ['tomorrowland', '2010s', '2020s'],
  },
  'ibiza-and-trance-love-story': {
    category: 'events',
    tags: ['ibiza', '90s', '2000s', '2010s'],
  },
  'underground-trance-scene': {
    category: 'subgenres',
    tags: ['progressive', 'hard-trance', '2010s', '2020s'],
  },
  'history-of-trance-music': {
    category: 'history',
    tags: ['90s', '2000s', '2010s', 'goa'],
  },
  // Batch 4: decade-by-decade rankings
  'best-trance-tracks-1990s': {
    category: 'history',
    tags: ['90s', 'paul-van-dyk', 'ferry-corsten', 'uplifting'],
  },
  'defining-trance-anthems-2000s': {
    category: 'history',
    tags: ['2000s', 'tiesto', 'armin-van-buuren', 'paul-van-dyk', 'above-and-beyond', 'vocal'],
  },
  'top-trance-tracks-2010s': {
    category: 'history',
    tags: ['2010s', 'above-and-beyond', 'progressive', 'vocal', 'uplifting'],
  },
  'modern-trance-classics-2020s-so-far': {
    category: 'history',
    tags: ['2020s', 'above-and-beyond', 'uplifting', 'progressive'],
  },
  'trance-tracks-defined-each-decade-retrospective': {
    category: 'history',
    tags: ['90s', '2000s', '2010s', '2020s', 'tiesto', 'above-and-beyond'],
  },
  // Batch 5: women & new generation
  'women-in-trance-pioneers-modern-stars': {
    category: 'artists',
    tags: ['vocal', '2000s', '2010s', '2020s', 'above-and-beyond'],
  },
  'nifra-slovakia-trance-queen': {
    category: 'artists',
    tags: ['2010s', '2020s', 'progressive'],
  },
  'miss-monique-rising-progressive-star': {
    category: 'artists',
    tags: ['progressive', '2020s'],
  },
  'new-generation-trance-artists-to-watch-2026': {
    category: 'artists',
    tags: ['progressive', 'uplifting', '2020s'],
  },
  'female-djs-reshaping-trance-scene': {
    category: 'artists',
    tags: ['progressive', 'vocal', '2020s'],
  },
};

export function getCategoryForPost(slug) {
  const c = classification[slug];
  if (!c) return null;
  return categories.find((cat) => cat.id === c.category) || null;
}

export function getTagsForPost(slug) {
  const c = classification[slug];
  if (!c) return [];
  return c.tags
    .map((id) => allTags.find((t) => t.id === id))
    .filter(Boolean);
}

// Returns posts in a given category, newest first (listing is already newest-first).
export function getPostsInCategory(categoryId) {
  return listing.filter((p) => classification[p.slug]?.category === categoryId);
}

// Returns posts with a given tag, newest first.
export function getPostsWithTag(tagId) {
  return listing.filter((p) => classification[p.slug]?.tags?.includes(tagId));
}

// Counts per category — used by /category index.
export function getCategoryCounts() {
  const counts = {};
  for (const cat of categories) counts[cat.id] = 0;
  for (const p of listing) {
    const c = classification[p.slug]?.category;
    if (c && counts[c] !== undefined) counts[c]++;
  }
  return counts;
}

// Counts per tag — used by /tag index for cloud sizing.
export function getTagCounts() {
  const counts = {};
  for (const t of allTags) counts[t.id] = 0;
  for (const p of listing) {
    for (const tagId of classification[p.slug]?.tags || []) {
      if (counts[tagId] !== undefined) counts[tagId]++;
    }
  }
  return counts;
}

// Events catalogue — one file per event, default export = event object.
//
// Schema (all fields optional unless marked required):
//   slug:         (required) URL-safe identifier
//   name:         (required) canonical event name
//   status:       (required) 'upcoming' | 'past' | 'annual'
//                 'annual' means the event recurs yearly with confirmed
//                 cadence; specific upcoming-edition dates may or may
//                 not be in `dates.next`
//   category:     'mega' | 'specialty' | 'psy' | 'regional' | 'label'
//   region:       'EU' | 'NA' | 'LATAM' | 'ASIA' | 'OCE' | 'AFRICA'
//   country:      ISO-3166-1 alpha-2
//
//   dates: {
//     next: { start: 'YYYY-MM-DD', end: 'YYYY-MM-DD', tba?: bool }
//     typicalMonth: 'July'        // for annual events without confirmed next date
//     cadence: 'annual' | 'biennial' | 'series' | 'milestone'
//   }
//
//   venue: {
//     name, address, country, lat, lng,
//     capacity?: number   // approximate where known
//   }
//
//   genres:       array of glossary slugs ('uplifting-trance', 'psytrance', ...)
//   headliners:   array of artist slugs (links resolve to /artists/<slug>)
//   labels:       array of label names that anchor the event musically
//
//   editions:     array of historical editions
//                 [{ year: 2024, dates?: 'July 19–21', headliners?: [...] }, ...]
//
//   official_url: canonical event homepage
//   ticket_url:   tickets page (may equal official_url)
//   og_image:     '/og/events/<slug>.png' (forward-looking; OG generator
//                 can produce these later — Next.js does not error on
//                 missing static images, the metadata path just resolves
//                 to a 404 on social cards until generated)
//
//   en, ja: { description: '200–400 char summary' }
//
// IMPORTANT: This file is regex-scanned by scripts/generate-sitemap.js
// and scripts/generate-search-index.js — they pick up `slug:` literals
// directly from the per-event files, so no per-batch rebuild of the
// index registry is required when new events are added. Just create
// the file and add the import here.

// Batch 1
import tomorrowland from './tomorrowland';
import aStateOfTranceFestival from './a-state-of-trance-festival';
import transmissionPrague from './transmission-prague';
import luminosityBeachFestival from './luminosity-beach-festival';
import dreamstateSocal from './dreamstate-socal';
import abgtMilestoneEvents from './abgt-milestone-events';
// Batch 2 — mainstream / global mega festivals
import edcLasVegas from './edc-las-vegas';
import ultraMusicFestivalMiami from './ultra-music-festival-miami';
import tomorrowlandWinter from './tomorrowland-winter';
import untoldFestival from './untold-festival';
import creamfields from './creamfields';
import ultraEurope from './ultra-europe';

export const events = [
  tomorrowland,
  aStateOfTranceFestival,
  transmissionPrague,
  luminosityBeachFestival,
  dreamstateSocal,
  abgtMilestoneEvents,
  edcLasVegas,
  ultraMusicFestivalMiami,
  tomorrowlandWinter,
  untoldFestival,
  creamfields,
  ultraEurope,
];

export const eventSlugs = events.map((e) => e.slug);

export function getEventBySlug(slug) {
  return events.find((e) => e.slug === slug);
}

// Sort: upcoming/annual with confirmed `next.start` ascending; events
// without a confirmed next date by typicalMonth heuristic; past last.
function nextDateValue(e) {
  const d = e.dates?.next?.start;
  if (d) return new Date(d).getTime();
  return Infinity;
}

export function getUpcomingEvents(limit = null) {
  const now = Date.now();
  const upcoming = events
    .filter((e) => {
      if (e.status === 'past') return false;
      const v = nextDateValue(e);
      return v >= now;
    })
    .sort((a, b) => nextDateValue(a) - nextDateValue(b));
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getPastEvents() {
  const now = Date.now();
  return events
    .filter((e) => {
      if (e.status === 'past') return true;
      const v = nextDateValue(e);
      return Number.isFinite(v) && v < now;
    })
    .sort((a, b) => nextDateValue(b) - nextDateValue(a));
}

export function getEventsByGenre(genreSlug) {
  return events.filter((e) => (e.genres || []).includes(genreSlug));
}

export function getEventsByRegion(region) {
  return events.filter((e) => e.region === region);
}

export function getEventsByCountry(country) {
  return events.filter((e) => e.country === country);
}

export function getEventsByArtist(artistSlug) {
  return events.filter((e) => (e.headliners || []).includes(artistSlug));
}

export function getRelatedEvents(slug, limit = 4) {
  const e = getEventBySlug(slug);
  if (!e) return [];
  const sameCategory = events.filter(
    (x) => x.slug !== slug && x.category === e.category
  );
  const sharedGenre = events.filter(
    (x) =>
      x.slug !== slug &&
      x.category !== e.category &&
      (x.genres || []).some((g) => (e.genres || []).includes(g))
  );
  return [...sameCategory, ...sharedGenre].slice(0, limit);
}

// Bidirectional artist ↔ label link integrity check.
//
// Usage:
//   node scripts/verify-artist-label-links.js [--report]
//
// Walks data/artists/ and data/labels/ via dynamic import, runs every
// artist.labels[] string through findLabelByName, and reports:
//   - resolution rate (how many label-name strings link to a slug)
//   - per-label roster size (reverse lookup via getArtistsForLabel)
//   - bidirectional consistency: every resolved (artist, label) pair
//     should appear in both directions
//   - unresolved label strings, with the artists that reference them
//     (candidates for MISSING_ENTITIES.md)
//
// Exit code 0 if no critical inconsistency, 1 otherwise. The CLI is
// designed to be wired into a pre-commit hook later if desired.
//
// `--report` writes the full breakdown to stdout. Without it, the
// script prints only summary stats + critical issues.

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const ARTIST_FILES = [
  'legends', 'legends2',
  'progressive', 'progressive2', 'progressive3',
  'uplifting', 'uplifting2', 'uplifting3',
  'vocal', 'vocal2', 'vocal3',
  'psy', 'psy2',
];
const LABEL_FILES = ['majors', 'classics', 'modern', 'psy'];

async function loadAll() {
  const artists = [];
  for (const f of ARTIST_FILES) {
    const m = await import(`file://${path.join(ROOT, 'data', 'artists', f + '.js').replace(/\\/g, '/')}`);
    artists.push(...m[f]);
  }
  const labels = [];
  for (const f of LABEL_FILES) {
    const m = await import(`file://${path.join(ROOT, 'data', 'labels', f + '.js').replace(/\\/g, '/')}`);
    labels.push(...m[f]);
  }
  return { artists, labels };
}

// Re-implementation of findLabelByName matching data/labels/index.js.
// Inlined here so the script is self-contained (the index module
// uses bare-specifier imports that bare Node can't resolve without
// extension rewriting).
function findLabelByName(labels, name) {
  if (!name) return null;
  const needle = name.toLowerCase().trim();
  for (const l of labels) {
    if (l.name.toLowerCase() === needle) return l;
    if ((l.aliases || []).some((a) => a.toLowerCase() === needle)) return l;
  }
  for (const l of labels) {
    const lower = l.name.toLowerCase();
    if (needle.includes(lower) || lower.includes(needle)) return l;
    for (const a of l.aliases || []) {
      const al = a.toLowerCase();
      if (needle.includes(al) || al.includes(needle)) return l;
    }
  }
  return null;
}

// Reverse lookup matching getArtistsForLabel.
function getArtistsForLabel(label, artists) {
  if (!label) return [];
  const names = [label.name, ...(label.aliases || [])].map((s) => s.toLowerCase());
  return artists.filter((a) => {
    if (!Array.isArray(a.labels)) return false;
    return a.labels.some((entry) => {
      const e = entry.toLowerCase();
      return names.some((n) => e.includes(n) || n.includes(e));
    });
  });
}

function main() {
  const verbose = process.argv.includes('--report');

  return loadAll().then(({ artists, labels }) => {
    console.log('═══════════════════════════════════════');
    console.log('🔗  Artist ↔ Label Link Integrity');
    console.log('═══════════════════════════════════════');
    console.log(`Artists: ${artists.length}   Labels: ${labels.length}`);

    // Pass 1 — forward direction: artist.labels[] → resolved slug
    let totalRefs = 0;
    let resolvedRefs = 0;
    const unresolved = new Map(); // string → [artistSlug,...]
    const artistToLabels = new Map(); // artistSlug → Set<labelSlug>
    for (const a of artists) {
      const set = new Set();
      for (const lname of a.labels || []) {
        totalRefs++;
        const m = findLabelByName(labels, lname);
        if (m) {
          resolvedRefs++;
          set.add(m.slug);
        } else {
          if (!unresolved.has(lname)) unresolved.set(lname, []);
          unresolved.get(lname).push(a.slug);
        }
      }
      artistToLabels.set(a.slug, set);
    }
    const rate = totalRefs ? Math.round((resolvedRefs / totalRefs) * 100) : 0;
    console.log(`Resolved label refs: ${resolvedRefs} / ${totalRefs}  (${rate}%)`);

    // Pass 2 — reverse direction: per-label roster
    const labelToArtists = new Map();
    for (const l of labels) {
      labelToArtists.set(l.slug, new Set(getArtistsForLabel(l, artists).map((a) => a.slug)));
    }
    const rosterSizes = [...labelToArtists.entries()].map(([slug, set]) => ({ slug, n: set.size }));
    const empty = rosterSizes.filter((r) => r.n === 0);
    const small = rosterSizes.filter((r) => r.n > 0 && r.n < 3);
    const ok    = rosterSizes.filter((r) => r.n >= 3 && r.n <= 15);
    const big   = rosterSizes.filter((r) => r.n > 15);
    console.log(`Roster size buckets: empty=${empty.length}  small(1-2)=${small.length}  ok(3-15)=${ok.length}  large(>15)=${big.length}`);

    // Pass 3 — bidirectional consistency.
    // For every (artist, label) pair where the artist's labels[] string
    // resolves to label X, the label's reverse-roster should contain
    // the artist. With the same matcher driving both directions this
    // should always hold; the check is mainly there to catch a future
    // refactor that splits the matchers and forgets the symmetry.
    const inconsistencies = [];
    for (const a of artists) {
      const fwd = artistToLabels.get(a.slug);
      for (const labelSlug of fwd) {
        const reverseSet = labelToArtists.get(labelSlug);
        if (!reverseSet || !reverseSet.has(a.slug)) {
          inconsistencies.push({ artist: a.slug, label: labelSlug });
        }
      }
    }
    console.log(`Bidirectional inconsistencies: ${inconsistencies.length}`);

    if (verbose) {
      console.log('\n--- per-label roster sizes ---');
      for (const r of rosterSizes.sort((a, b) => a.n - b.n)) {
        const flag = r.n === 0 ? '⚠ empty' : r.n < 3 ? '· small' : r.n > 15 ? '✓ large' : '✓ ok';
        console.log(`  ${r.slug.padEnd(28)} ${String(r.n).padStart(3)}  ${flag}`);
      }

      console.log('\n--- unresolved label strings (candidates for MISSING_ENTITIES.md) ---');
      const sorted = [...unresolved.entries()].sort((a, b) => b[1].length - a[1].length);
      for (const [name, arts] of sorted) {
        const ex = arts.slice(0, 3).join(', ');
        const more = arts.length > 3 ? `, +${arts.length - 3}` : '';
        console.log(`  ${name.padEnd(40)} ${String(arts.length).padStart(2)}×  (${ex}${more})`);
      }

      if (inconsistencies.length) {
        console.log('\n--- bidirectional inconsistencies ---');
        for (const i of inconsistencies) console.log(`  ${i.artist} → ${i.label}: not in label.roster`);
      }
    }

    if (inconsistencies.length > 0) {
      console.log('\n✗ Critical: bidirectional inconsistencies detected — fix matcher logic');
      process.exit(1);
    }
    console.log('\n✓ All resolved (artist, label) pairs are bidirectionally consistent.');
    process.exit(0);
  }).catch((e) => {
    console.error('error:', e.message);
    process.exit(2);
  });
}

main();

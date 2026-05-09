# Missing Entities — Future Catalogue Additions

Inventory of labels and artists that are referenced in the existing
catalogue but not yet first-class entries with their own pages. Used
as a checklist when expanding the labels and artists databases.

Auto-derived (mostly) from:

```
node scripts/verify-artist-label-links.js --report
```

Last regenerated: 2026-05-09.

## A. Labels referenced by ≥1 artist but not in the catalogue

The dominant gap. Every entry below is a real, verifiable record
label that one or more of the 70 artists in `data/artists/` cite as
part of their release history. Adding these as proper label entries
under `data/labels/` would:

- Create live `/labels/<slug>` pages with the same schema as the
  existing 40
- Auto-resolve the corresponding artist `labels[]` strings via
  `findLabelByName` (no per-artist edits needed)
- Auto-populate the JSON-LD `memberOf` array on the artist page
- Auto-populate the JSON-LD `member` array on the label page

### A1. Artist-run / boutique trance imprints (highest value to add)

These have clear single-artist owners already in our catalogue and
would directly close circular references:

| Label | Founder / Artist (in our DB) | Reference count | Suggested category |
|---|---|---|---|
| Wake Your Mind | Cosmic Gate | 1× | classics or modern |
| Find Your Harmony / inHarmony Music | Andrew Rayel | 2× | modern |
| Statement! | Ruben de Ronde | 1× | modern |
| Captured Music | Standerwick (and Mark Sixma) | 1× | modern |
| Magic Island Records | Roger Shah | 1× | classics |
| Pryda Presents | Eric Prydz | 1× | classics or modern |
| Aropa Records | Dash Berlin | 2× | classics |
| GO On Air | Giuseppe Ottaviani | 1× | modern |
| Open Up Records / Reaction | Simon Patterson | 2× | classics |
| Afterdark | Sneijder | 1× | modern |
| Sirup Music / Euphonic | Roger Shah / Ronski Speed | 2× | classics |
| Bedrock Bedrock spin-offs (Boxed) | John Digweed | 1× | modern |
| Renaissance Records | Hernan Cattáneo / Sasha era | 1× | classics |
| Hope Recordings / The Soundgarden | Nick Warren | 2× | classics |
| Stoneblue Records | ilan Bluestone | 1× | modern |
| Odd One Out | Yotto | 1× | modern |
| Siona Records / Tomorrowland Music | Miss Monique | 2× | modern |
| Consequence of Society | Cristoph | 1× | modern |
| Auditory Recordings | Linnea Schössow | 1× | modern |

### A2. Pre-2000 historical labels (medium value)

Foundational labels referenced by the legends artists; would round
out the historical canon:

| Label | Country | Reference count | Notes |
|---|---|---|---|
| Bonzai Records (parent) | BE | 1× | Parent of the existing bonzai-progressive sub-label |
| Deconstruction | UK | 2× | Robert Miles, Sasha — early progressive home |
| Media Records / BXR | IT | 2× ea. | Mauro Picotto, Gigi D'Agostino — Italian dance institution |
| Tsunami Records | NL | 1× | Ferry Corsten / DJ Tiësto Magik-era |
| Perfecto Records | UK | 1× | Paul Oakenfold's label, BT-era |
| Reflective Records | US | 1× | BT early album home |
| DBX Records / Salt Records | IT | 1× | Robert Miles "Children" original home |
| Hooj Choons related (Boxed) | UK | 1× | John Digweed Northern Exposure-era |
| Phonokol Records | IL | 2× | Astral Projection, Atmos — Israeli psy/Goa institution |
| Bakerloo Records / Alchemy | IT | 1× ea. | Mauro Picotto sub-imprints |

### A3. Major-label / cross-genre context (low priority)

Major labels that show up in artist data but aren't trance-specific.
Adding pages would dilute the catalogue's editorial focus; better
left as plain-text muted cards in the Affiliated Labels section.

| Label | Notes |
|---|---|
| Sony Music, Atlantic Records, Mute | Major-label distribution credits — out of scope |
| Monstercat, Dim Mak Records, Spinnin' (already in) | Adjacent EDM majors — out of scope unless a focused subset of trance crossover material justifies inclusion |
| Kontor Records, ZYX Music | German dance-pop majors — out of scope |
| CDR, Five AM, Bandcamp self-release | Self-publishing / generic distribution markers — never need their own pages |

### A4. Modern adjacent / melodic-techno (review case-by-case)

Labels in the trance-adjacent melodic-techno / progressive-house
space; some are already part of the active progressive-trance
listening community even if not strictly trance:

| Label | Country | Reference count | Notes |
|---|---|---|---|
| Afterlife / Afterlife Records | IT | 2× | Tale of Us; Anyma & Mind Against home |
| Last Night On Earth (already added in batch 2) | UK | — | ✓ In catalogue |
| Innervisions, Diynamic | DE | 0× current | Would surface progressive-melodic-techno crossover |
| HABITAT, Life and Death | DE | 1× ea. | Mind Against affiliations |
| Interstellar Recordings | various | 1× | Anyma sub |
| Schulz Music Group | DE/US | 2× | Markus Schulz's parent label umbrella |
| Sun Station Records, Alteza Records | various | 1× ea. | Symbolic, Vini Vici sub-imprints |

## B. Labels in catalogue with empty roster

These 9 labels are in the catalogue but no current artist record
references them. They need a known roster figure added to the
artists database (or a pre-existing artist's `labels[]` array
extended) to populate their roster section:

| Label slug | Suggested roster figure (not yet in artists DB unless noted) |
|---|---|
| ultra-music | major distribution; intentionally empty (out of trance scope) |
| ava-recordings | Andy Moor (founder, not in artists DB) |
| bonzai-progressive | M.I.K.E. Push, Yves Deruyter (not in artists DB) |
| outburst-records | Sneijder is in the DB — extend his `labels[]` to include 'Outburst Records' |
| microcastle | Henry Saiz, Guy J, Soundprank (none in artists DB) |
| selador-recordings | Steve Parry, Dave Seaman (founders, not in artists DB) |
| nano-records | Domestic / Hux Flux / Liquid Soul (Liquid Soul is in psy.js — extend his `labels[]`) |
| tip-records | Hallucinogen / Shpongle (not in artists DB) |
| damaged-records | Damaged is Christopher Lawrence's; not in artists DB |
| grotesque-music | RAM (Ram Boon, label founder, not in artists DB) |

## C. Artists referenced in catalogued label biographies but not yet in artists DB

Pulled by hand from label `bio.en` text — these are the artists most
prominently discussed across the 40 label entries who don't yet have
their own `/artists/<slug>` page. Adding them would create new
member-list completions:

- **Andy Moor** — founder of AVA Recordings; appears in Black Hole, Anjunabeats, Armada bios
- **Sneijder** — already in DB; note that his `labels[]` should reference Outburst (his label) for symmetry
- **Bryan Kearney** — already in DB
- **Activa, Heatbeat, James Dymond** — appear in multiple harder-trance label bios
- **Will Atkinson** — already in DB
- **Mark Sixma** — appears in Captured / Statement! contexts
- **Henry Saiz, Guy J** — appear in Bedrock, Sudbeat, Selador, microCastle bios
- **Lane 8, Ben Böhmer, Cubicolor** — appear in Anjunadeep / Colorize / LNOE bios
- **Christopher Lawrence** — Damaged Records founder
- **Jorge Caballero** — microCastle founder
- **Steve Parry, Dave Seaman** — Selador founders
- **Trance Wax (Ejeca)** — emerging UK trance figure

## How to use this list

1. When adding a new label, check Section A first — some unresolved
   strings may match. Adding the label resolves the artist-side
   references automatically.
2. When adding a new artist, scan Section C — the artist may
   already be expected by a catalogued label's bio.
3. After any addition, re-run:
   ```
   node scripts/verify-artist-label-links.js --report
   ```
   The resolution rate should increase, and any new bidirectional
   inconsistencies will surface immediately.

## Maintenance

- Regenerate this document by running the verify script with
  `--report` and updating the unresolved list.
- Any entries demoted to "intentionally not adding" should move
  to Section A3 with a one-line justification.
- The script returns exit code 0 when bidirectional consistency
  holds, exit 1 on a real bug. Wire into a pre-commit hook later
  if cadence justifies it.

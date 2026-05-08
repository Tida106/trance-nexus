# Monthly Chart Workflow

Once-per-month operational guide for publishing the monthly trance
chart article. The pipeline is half-automated: a human curates the
ten tracks (the irreducibly editorial part), the generator handles
everything else.

## TL;DR

```bash
# 1. create the chart input
cp data/blog/charts/_example.json data/blog/charts/2026-06.json
$EDITOR data/blog/charts/2026-06.json

# 2. run the generator
node scripts/generate-monthly-chart.js 2026-06

# 3. review and ship
git diff -- data/blog/ public/
git add data/blog/charts/2026-06.json data/blog/posts*.js data/blog/listing.js public/
git commit -m "feat(blog): monthly chart — June 2026"
git push
```

The generator handles the article body, the slim listing entry, the
sitemap, the search-index, and the RSS / Atom feeds. The human handles
the ten tracks. That's the whole loop.

## When to publish

Publish at the **start of the following month** (e.g., the June 2026
chart goes live in early July 2026). This gives the full month a
chance to settle — late-month releases get fair treatment, and the
chart reflects the full month's listening rather than a snapshot.

The chart input file's `publishedAt` field controls the article's
`post.date`, which drives the chronological ordering in
`data/blog/listing.js` and in the sitemap. Set it to the publication
date, not the chart-period start.

## Step 1 — Create the chart input

Copy the template and fill in the ten tracks:

```bash
cp data/blog/charts/_example.json data/blog/charts/<YYYY-MM>.json
```

Filename **must** be `YYYY-MM.json` (e.g., `2026-06.json`). The
generator regex-validates the CLI argument against this format and
will refuse to run otherwise.

Required top-level fields:

| field | type | notes |
|---|---|---|
| `month` | string | full English month name, e.g., `"June"` |
| `year` | number | e.g., `2026` |
| `publishedAt` | ISO date string | drives `post.date` |
| `tracks` | array | exactly 10 entries is the editorial convention |

Required per-track fields:

| field | type | notes |
|---|---|---|
| `rank` | number | 1–10, must be unique per chart |
| `artist` | string | exactly as it should appear in the article body |
| `title` | string | track title |
| `label` | string | release label |
| `genre` | string | free text; auto-mapped to a glossary slug for the genre mix line |
| `releaseDate` | ISO date | e.g., `"2026-06-15"` |
| `review_en` | string | 1–3 sentence editorial review in English |
| `review_ja` | string | 1–3 sentence editorial review in Japanese |

Optional per-track fields (preserved on the track record for future
surfacing — current renderer ignores unknown keys):

| field | type | notes |
|---|---|---|
| `beatportUrl` | URL | Beatport track page |
| `spotifyUrl` | URL | Spotify track URL |

## Step 2 — Curation rules (no fabrication)

The single hardest rule, inherited from the rest of TRANCE NEXUS
editorial: **every track must be a verifiable real release on a real
label**. This applies absolutely:

- ✗ no fabricated track titles
- ✗ no fabricated artist–label pairings
- ✗ no fabricated chart positions sourced from "what feels like a top 10"
- ✓ every track verifiable on at least one of: Beatport, Spotify, label release page, ASOT episode tracklist, the artist's own social channels

If you can't verify ten tracks for the month, ship fewer. Five
verified tracks is a better article than ten with two fabricated
entries.

Suggested research surfaces, in order of authority:

1. **Beatport monthly trance charts** — primary source for the
   genre's commercial view. Includes the Top 100 Trance, Best New
   Trance R/D/H, and the per-week new-release feeds.
2. **ASOT episode tracklists** — Armin van Buuren's weekly show
   covers ~40 tracks/week. Four episodes per month gives a wide
   editorial view of what label A&R is pushing.
3. **Group Therapy / Anjunabeats radio tracklists** — for the
   progressive / melodic side of the genre.
4. **FSOE / Aly & Fila tracklists** — for uplifting and the harder
   138 BPM scene.
5. **Per-label release calendars** — Anjunabeats, Black Hole, FSOE,
   Coldharbour, Pure Trance, Vandit, VII, Subculture, Armada, et al.
6. **1001tracklists.com** — reverse-lookup for tracks you've heard in
   sets but can't ID.

## Step 3 — Run the generator

```bash
node scripts/generate-monthly-chart.js <YYYY-MM>
```

Behaviour:

- Reads `data/blog/charts/<YYYY-MM>.json`
- Builds an artist-name → slug resolver from `data/artists/` (so
  `"Aly & Fila"` in the chart resolves to `aly-and-fila` and the
  rendered ranked list will link `#1. Aly & Fila` to
  `/artists/aly-and-fila`)
- Generates the article via `data/blog/templates/monthly-chart-template.js`
- Appends the new article to the highest-numbered `posts*.js` file
  that already holds monthly-chart entries (currently `posts11.js`).
  Once that file reaches 12 entries the script auto-rotates into
  `posts<N+1>.js` and wires it into `data/blog/index.js`.
- Prepends a slim entry to `data/blog/listing.js` (newest-first)
- Regenerates `public/sitemap.xml`, `public/search-index.json`,
  `public/rss.xml`, `public/rss.en.xml`, `public/rss.ja.xml`,
  `public/atom.xml`

Idempotent: re-running for the same YYYY-MM is a no-op except for
the regenerators. Useful if the underlying artists / labels catalogue
has changed and the artist-slug resolution should be re-applied —
just delete the previous insert (or `git restore`) and re-run.

## Step 4 — Review and ship

```bash
git diff -- data/blog/ public/
```

Sanity-check:

- The new article's `tracks[]` is well-formed (one entry per rank, no
  missing fields).
- Every `artistSlug` resolved that should have. Artists not yet in
  `data/artists/` will land with `artistSlug: null` — the renderer
  falls back to plain text, which is fine, but if a top-3 act has
  no artist page it's worth adding one to `data/artists/` before
  shipping the chart.
- The slim listing entry sits at the top of `data/blog/listing.js`.
- Feeds and sitemap include the new slug:
  ```bash
  grep "best-trance-tracks-<month>-<year>" public/sitemap.xml public/rss.xml
  ```

Ship:

```bash
git add data/blog/charts/<YYYY-MM>.json data/blog/posts*.js \
        data/blog/listing.js data/blog/index.js public/
git commit -m "feat(blog): monthly chart — <Month> <Year>"
git push
```

GitHub Pages will rebuild within 1–2 minutes, and the new chart will
be live at:

`https://tida106.github.io/trance-nexus/blog/best-trance-tracks-<month>-<year>/`

## Coexistence with legacy chart articles

The Jan–May 2026 chart articles in `data/blog/posts11.js` were
authored by hand before this template existed and use a 5–6 section
essay format **without** a `tracks[]` array. They render fine —
`components/BlogPost.jsx` only renders the ranked-list block when
`Array.isArray(post.tracks) && post.tracks.length > 0`, so the
absence of the field is a no-op.

New articles produced by this generator carry both:
- A short 2-section narrative `content[]` (intro + closing)
- A 10-entry `tracks[]` that drives the ranked-list block + the
  ItemList JSON-LD

Both formats coexist in the catalogue. Migration of the legacy
articles to the template-driven shape is **optional and not
required** for routing, rendering, or feeds. If you do want to
backfill, the cleanest path is: author a `data/blog/charts/<YYYY-MM>.json`
for each historical month, delete the legacy article from
`posts11.js` + `listing.js`, and run the generator. Don't try to
edit-in-place — the regex insertion logic assumes the file has the
`\n];` terminator pristine and is not re-runnable on a half-migrated
file.

## Common failure modes

- `cannot locate closing "];\n" of array in postsN.js` — the script's
  regex insertion needs `posts*.js` files to end with `\n];\n`. If
  manual edits broke that, fix the file's trailing whitespace and
  re-run.
- `track #N missing review_en/review_ja` — at least one of the two
  review fields is required per track. Both is best.
- `slug "..." already present in postsN.js — skipping insert` — this
  is the idempotency path, not an error. The article was already
  added on a previous run.

## Cadence target

- Month ends → 7-day window to assemble the curated list
- Run generator + ship by the 7th of the following month
- Twelve charts per year → posts11.js holds Jan–Dec; rotation to
  posts15.js happens automatically when the 12th chart lands

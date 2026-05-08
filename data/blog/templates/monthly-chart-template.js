// Monthly chart article template.
//
// Used by scripts/generate-monthly-chart.js to turn a curated chart
// JSON file (data/blog/charts/YYYY-MM.json) into a fully-formed blog
// post object compatible with data/blog/posts*.js. The output object
// uses the same shape as the existing All-Time Best ranked-list canon
// articles (posts12.js): a standard `content` array of narrative
// sections PLUS a structured `tracks` array that the [slug] route
// picks up to emit ItemList + MusicRecording JSON-LD on top of the
// regular BlogPosting schema, and that components/BlogPost.jsx
// renders as the auto-styled ranked-list block.
//
// Reusing the existing `tracks` shape (rather than inventing a new
// "monthly chart" specific shape) means monthly charts get the
// ranked-list visual styling, the ItemList rich-result eligibility,
// and the embeds/affiliate handling that the All-Time Best articles
// already enjoy — for free, with no template or renderer changes.
//
// IMPORTANT: This module is consumed by scripts/generate-monthly-chart.js
// via dynamic import. Keep the runtime-side exports stable. Internal
// helpers can change freely.

const TAGS = ['classics', 'analysis', 'monthly-charts'];

const READ_TIME_BASE = 5;        // minutes for narrative + closing
const READ_TIME_PER_TRACK = 0.5; // approximate

const MONTH_JA = {
  January: '1月',  February: '2月',  March: '3月',     April: '4月',
  May: '5月',     June: '6月',      July: '7月',      August: '8月',
  September: '9月', October: '10月', November: '11月', December: '12月',
};

// Heuristic mapping from a free-text genre string in the chart JSON
// to a glossary slug for cross-linking. Returns null when no clean
// match exists; the template then falls back to plain text.
function genreToGlossarySlug(genre) {
  if (!genre) return null;
  const g = genre.toLowerCase();
  if (g.includes('uplift'))                            return 'uplifting-trance';
  if (g.includes('progressive'))                       return 'progressive-trance';
  if (g.includes('vocal'))                             return 'vocal-trance';
  if (g.includes('psy') || g.includes('goa'))          return 'psytrance';
  if (g.includes('tech'))                              return 'tech-trance';
  if (g.includes('hard'))                              return 'hard-trance';
  if (g.includes('dream'))                             return 'dream-trance';
  if (g.includes('balearic'))                          return 'balearic-trance';
  if (g.includes('melodic techno') || g === 'melodic') return 'melodic-techno';
  if (g.includes('acid'))                              return 'acid-trance';
  if (g === 'trance')                                  return 'trance';
  return null;
}

// HTML-escape free-text fields so a stray < or & in a track review
// can't break the rendered article.
function esc(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Year extraction from an ISO release date. Falls back to the chart
// year when the per-track releaseDate is missing.
function yearFromReleaseDate(d, fallbackYear) {
  if (!d) return fallbackYear;
  const m = /^(\d{4})/.exec(d);
  return m ? Number(m[1]) : fallbackYear;
}

// Slug-form artist lookup. Generator script passes a resolver that
// has access to the artists catalogue; the template itself does not
// import data/artists/ so it stays free of cross-module dependencies.
function defaultArtistSlugResolver() {
  return null;
}

// Convert one chart-JSON track entry into the internal `tracks[]`
// shape that the BlogPost component already renders (see component
// comment block for the canonical schema). Extra fields (beatportUrl,
// spotifyUrl) are preserved on the track record for future surfacing
// — the renderer ignores unknown keys.
function buildTrack(entry, year, resolveArtistSlug) {
  const artistSlug = resolveArtistSlug(entry.artist) || null;
  return {
    rank: entry.rank,
    artist: entry.artist,
    artistSlug,
    title: entry.title,
    label: entry.label,
    year: yearFromReleaseDate(entry.releaseDate, year),
    genre: entry.genre,
    releaseDate: entry.releaseDate || null,
    beatportUrl: entry.beatportUrl || null,
    spotifyUrl: entry.spotifyUrl || null,
    review: {
      en: entry.review_en || '',
      ja: entry.review_ja || '',
    },
  };
}

// Narrative intro section in EN. Pulls the genre mix from the tracks
// array so the opener reflects what was actually selected — uplifting-
// heavy months read as uplifting-heavy, psy-heavy months as psy-
// heavy, without any per-month authoring.
function introSectionEn(month, year, tracks) {
  const genres = new Set(tracks.map((t) => t.genre).filter(Boolean));
  const mix = Array.from(genres).slice(0, 4).join(', ');
  const lead = `<p>TRANCE NEXUS editorial picks for ${month} ${year} — ten tracks that anchored the month across ASOT, Group Therapy, FSOE, Coldharbour, and Pure Trance / WAO138 rotation. Each entry is a real release on a real label, sourced from Beatport's monthly trance charts, ASOT episode tracklists, and label release calendars; the framing is "what we noticed this month" rather than a chart re-print.</p>`;
  const mixLine = mix
    ? `<p>The month's genre mix: <strong>${esc(mix)}</strong>. Tracks below are ranked editorially, not by streaming or chart position.</p>`
    : '';
  return { heading: `${month} ${year} — The Month at a Glance`, body: lead + mixLine };
}

function introSectionJa(month, year, tracks) {
  const genres = new Set(tracks.map((t) => t.genre).filter(Boolean));
  const mix = Array.from(genres).slice(0, 4).join('、');
  const monthJa = MONTH_JA[month] || month;
  const lead = `<p>TRANCE NEXUS編集部が選ぶ${year}年${monthJa}のベスト・トランス・トラック10選 ― ASOT、Group Therapy、FSOE、Coldharbour、Pure Trance / WAO138のローテーションを横断して月を支えた楽曲。各エントリーは実在のレーベルの実在リリースで、Beatportの月次トランス・チャート、ASOTエピソード・トラックリスト、レーベル・リリース・カレンダーを元にソースされている。フレーミングはチャートの再掲ではなく「今月私たちが気づいたもの」だ。</p>`;
  const mixLine = mix
    ? `<p>今月のジャンル・ミックス：<strong>${esc(mix)}</strong>。下記のトラックはストリーミングやチャート順位ではなく編集部基準でランク付けされている。</p>`
    : '';
  return { heading: `${year}年${monthJa} ― 今月の概況`, body: lead + mixLine };
}

// Closing section in EN — frames the chart as part of the year-long
// running coverage and points to the next/related editorial surfaces.
function closingSectionEn(month, year) {
  return {
    heading: 'Editorial Notes',
    body:
      `<p>This list is a snapshot, not a verdict. The picks above are the ten records that earned the most attention from us across ${month} ${year}, surfaced from a much wider listening pass that included full Beatport monthly chart digests, every ASOT episode of the month, and per-label release-page reviews. Tracks that didn't make the cut here may still appear in our <a href="/blog">All-Time Best canon coverage</a> later — many monthly picks become canon picks once a year of context catches up.</p>` +
      `<p>For a fuller view of the year's running shape, browse the <a href="/blog">monthly archive</a>; for the structural argument behind why these tracks belong to trance proper, see the <a href="/glossary">glossary</a>.</p>`,
  };
}

function closingSectionJa(month, year) {
  const monthJa = MONTH_JA[month] || month;
  return {
    heading: '編集部ノート',
    body:
      `<p>このリストはスナップショットであり、判決ではない。上のピックは${year}年${monthJa}に私たちから最も注意を獲得した10枚で、Beatportの月次チャート・ダイジェスト、月のすべてのASOTエピソード、レーベル別のリリース・ページ・レビューを含むはるかに広いリスニング・パスから浮上したものだ。ここで選ばれなかったトラックも、後に<a href="/blog">All-Time Bestカノン・カバレッジ</a>で現れる可能性がある ― 多くの月次ピックは1年の文脈が追いつくとカノン・ピックになる。</p>` +
      `<p>年の流れのより充実した見方には、<a href="/blog">月次アーカイブ</a>を参照。これらのトラックがトランス本体に属する理由の構造的な議論については、<a href="/glossary">用語集</a>を参照。</p>`,
  };
}

// Public API — called by scripts/generate-monthly-chart.js.
//
// Inputs:
//   month        — full English month name, e.g. "June"
//   year         — number, e.g. 2026
//   publishedAt  — ISO date string, becomes post.date (defaults to
//                  the first of the month after `month`)
//   tracks       — array of chart-JSON track entries (see schema in
//                  docs/MONTHLY_CHART_WORKFLOW.md)
//   resolveArtistSlug — optional function (artistName) => slug|null;
//                  the script supplies a real resolver that consults
//                  data/artists/. The template falls back to
//                  null-returning when called without one (for unit
//                  tests / preview rendering).
//
// Output: a post object ready to drop into a posts*.js file. Adheres
// to the same shape as posts12.js entries, including the optional
// `tracks` field that triggers ranked-list rendering and ItemList
// JSON-LD emission.
export function generateMonthlyChart({
  month,
  year,
  publishedAt,
  tracks,
  resolveArtistSlug = defaultArtistSlugResolver,
}) {
  if (!month || !year || !Array.isArray(tracks) || tracks.length === 0) {
    throw new Error('generateMonthlyChart: month, year, and tracks[] are required');
  }
  // Validate per-track required fields. Throws on first bad entry so
  // the generator script can surface the issue with a useful pointer.
  for (const t of tracks) {
    if (typeof t.rank !== 'number') throw new Error(`track missing numeric rank: ${JSON.stringify(t).slice(0, 120)}`);
    if (!t.artist) throw new Error(`track #${t.rank} missing artist`);
    if (!t.title)  throw new Error(`track #${t.rank} missing title`);
    if (!t.label)  throw new Error(`track #${t.rank} missing label`);
    if (!t.review_en && !t.review_ja) {
      throw new Error(`track #${t.rank} missing review_en/review_ja (at least one required)`);
    }
  }

  const monthJa = MONTH_JA[month] || month;
  const slug = `best-trance-tracks-${month.toLowerCase()}-${year}`;
  const date = publishedAt || `${year}-${String(monthIndex(month) + 1).padStart(2, '0')}-01`;
  const readTime = Math.max(
    READ_TIME_BASE,
    Math.round(READ_TIME_BASE + tracks.length * READ_TIME_PER_TRACK)
  );

  const internalTracks = tracks
    .slice()
    .sort((a, b) => a.rank - b.rank)
    .map((t) => buildTrack(t, year, resolveArtistSlug));

  // Pull a representative top-3 artist string for the SEO title.
  const top3 = internalTracks
    .filter((t) => t.rank <= 3)
    .map((t) => t.artist)
    .join(', ');

  const titleEn = `Best Trance Tracks of ${month} ${year} — Top ${tracks.length} Uplifting, Progressive & Psy`;
  const titleJa = `${year}年${monthJa}のベスト・トランス・トラック${tracks.length}選 ― アップリフティング、プログレッシブ、サイの注目リリース`;

  const descEn = `TRANCE NEXUS editorial picks for ${month} ${year} — the top ${tracks.length} trance tracks across uplifting, progressive, and psytrance. Featuring ${top3}.`;
  const descJa = `TRANCE NEXUS編集部が選ぶ${year}年${monthJa}のベスト・トランス・トラック${tracks.length}選 ― アップリフティング、プログレッシブ、サイトランスの注目リリース。${top3}ほか。`;

  const excerptEn = `Ten records that anchored ${month} ${year} across ASOT, Group Therapy, FSOE, Coldharbour, and Pure Trance / WAO138 rotation. Sourced from real label releases on Beatport's monthly chart, ASOT episode tracklists, and per-label calendars — no fabricated chart positions.`;
  const excerptJa = `${year}年${monthJa}のASOT、Group Therapy、FSOE、Coldharbour、Pure Trance / WAO138のローテーションを横断して月を支えた10枚。Beatportの月次チャート、ASOTエピソード・トラックリスト、レーベル別カレンダー上の実在リリースを元にソース ― 捏造されたチャート順位は一切なし。`;

  return {
    slug,
    date,
    readTime,
    tags: TAGS.slice(),
    en: {
      title: titleEn,
      description: descEn,
      excerpt: excerptEn,
      content: [introSectionEn(month, year, internalTracks), closingSectionEn(month, year)],
    },
    ja: {
      title: titleJa,
      description: descJa,
      excerpt: excerptJa,
      content: [introSectionJa(month, year, internalTracks), closingSectionJa(month, year)],
    },
    tracks: internalTracks,
  };
}

// Zero-indexed month name → number. Used by date defaulting.
function monthIndex(name) {
  return [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December',
  ].indexOf(name);
}

// Surface for scripts and tests.
export const __internals = {
  TAGS,
  MONTH_JA,
  genreToGlossarySlug,
  buildTrack,
  monthIndex,
};

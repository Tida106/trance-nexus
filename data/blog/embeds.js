// Per-blog-post music embeds.
//
// Each entry under embedsBySlug accepts:
//   { platform, id?, query?, label?, title?, compact? }
//
// Use `id` when you have a verified platform identifier (renders an iframe).
// Use `query` as a fallback search term (renders a "Listen on X" card).
//
// We deliberately use `query` for individual tracks where we cannot attest
// the exact platform ID — the resulting card links the reader to the
// platform's search results, which is honest and remains useful when IDs
// are added later. Verified IDs (artist pages from existing artist data)
// use the `id` form so the reader sees a real player.
//
// Spotify ID format: `<type>:<id>` where type ∈ {artist, album, playlist, track}.
// Apple ID format:    `<country>/<type>/<name>/<numericId>`.
// SoundCloud:         full URL or `<user>/<slug>` path.
// YouTube:            11-char video ID, or `PL...` playlist ID.

export const embedsBySlug = {
  // Iconic anthems — search-link cards (track IDs not verified locally).
  'iconic-trance-anthems-that-defined-an-era': [
    {
      platform: 'spotify',
      query: 'Robert Miles Children original',
      label: 'Robert Miles — Children (1995)',
    },
    {
      platform: 'spotify',
      query: 'Paul van Dyk For an Angel',
      label: 'Paul van Dyk — For an Angel (1998)',
    },
    {
      platform: 'spotify',
      query: 'System F Out of the Blue',
      label: 'System F (Ferry Corsten) — Out of the Blue (1999)',
    },
    {
      platform: 'spotify',
      query: 'Tiesto Adagio for Strings',
      label: 'Tiësto — Adagio for Strings (2005)',
    },
  ],

  // Artist features — embed the artist page directly using IDs already in
  // data/artists/* (Spotify artist URI 22-char base62 ID).
  'armin-van-buuren-king-of-trance': [
    {
      platform: 'spotify',
      id: 'artist:0SfsnGyD8FpIN4U4WCkBZ5',
      label: 'Armin van Buuren — top tracks on Spotify',
    },
  ],
  'paul-van-dyk-pioneer-of-trance': [
    {
      platform: 'spotify',
      id: 'artist:1Bl6wpkWCQ4KVgnASpvzzA',
      label: 'Paul van Dyk — top tracks on Spotify',
    },
  ],
  'tiesto-evolution-trance-to-edm': [
    {
      platform: 'spotify',
      id: 'artist:2o5jDhtHVPhrJdv3cEQ99Z',
      label: 'Tiësto — top tracks on Spotify',
    },
  ],
  'ferry-corsten-three-decades-of-trance': [
    {
      platform: 'spotify',
      id: 'artist:3vdkr8DbTu5fS3FhRKRZIz',
      label: 'Ferry Corsten — top tracks on Spotify',
    },
  ],
  'above-beyond-anjuna-empire': [
    {
      platform: 'spotify',
      id: 'artist:3pp2tmmXEYePnNjGiNa1Bs',
      label: 'Above & Beyond — top tracks on Spotify',
    },
  ],

  // ASOT — show as a search card pending a verified channel/playlist ID.
  'a-state-of-trance-show-that-changed-everything': [
    {
      platform: 'spotify',
      query: 'A State of Trance Yearmix',
      label: 'A State of Trance — Yearmix series',
    },
    {
      platform: 'youtube',
      query: 'A State of Trance official',
      label: 'A State of Trance — YouTube channel',
    },
  ],

  // Subgenre / production-tutorial articles — search cards by genre or
  // technique. Pure search-link form; the iframe will replace the card if
  // a future edit supplies a verified id.
  'rise-of-psytrance-goa-to-modern-day': [
    { platform: 'spotify', query: 'Astrix Trust in Trance', label: 'Astrix — Trust in Trance' },
    { platform: 'spotify', query: 'Vini Vici Great Spirit', label: 'Vini Vici — Great Spirit' },
  ],
  'role-of-vocals-in-trance-music': [
    { platform: 'spotify', query: 'Above Beyond Sun Moon Richard Bedford', label: 'Above & Beyond — Sun & Moon' },
    { platform: 'spotify', query: 'Dash Berlin Till the Sky Falls Down', label: 'Dash Berlin — Till the Sky Falls Down' },
  ],

  // Genre-history surveys — search cards spanning the eras the article
  // covers, so the reader can sample the period rather than read about it.
  'history-of-trance-music': [
    { platform: 'spotify', query: 'Age of Love The Age of Love 1990', label: 'Age of Love — The Age of Love (1990) · proto-trance' },
    { platform: 'spotify', query: 'Robert Miles Children original', label: 'Robert Miles — Children (1995) · dream trance' },
    { platform: 'spotify', query: 'Paul van Dyk For an Angel', label: 'Paul van Dyk — For an Angel (1998) · classic era' },
    { platform: 'spotify', query: 'Tiesto Adagio for Strings', label: 'Tiësto — Adagio for Strings (2005) · stadium era' },
  ],

  'top-10-trance-subgenres-explained': [
    { platform: 'spotify', query: 'Armin van Buuren Communication uplifting', label: 'Uplifting · Armin van Buuren — Communication' },
    { platform: 'spotify', query: 'Above Beyond Sun Moon vocal trance', label: 'Vocal · Above & Beyond — Sun & Moon' },
    { platform: 'spotify', query: 'Sasha Xpander progressive trance', label: 'Progressive · Sasha — Xpander' },
    { platform: 'spotify', query: 'Astrix Trust in Trance psy', label: 'Psy · Astrix — Trust in Trance' },
    { platform: 'spotify', query: 'Simon Patterson Bulldozer tech trance', label: 'Tech · Simon Patterson — Bulldozer' },
  ],

  'essential-trance-labels-2026': [
    { platform: 'spotify', query: 'Armada Music A State of Trance', label: 'Armada Music · ASOT compilation series' },
    { platform: 'spotify', query: 'Anjunabeats Above Beyond Group Therapy', label: 'Anjunabeats · Above & Beyond — Group Therapy' },
    { platform: 'spotify', query: 'Black Hole Recordings In Search of Sunrise', label: 'Black Hole · In Search of Sunrise series' },
    { platform: 'spotify', query: 'Future Sound of Egypt Aly Fila', label: 'FSOE · Aly & Fila label' },
  ],

  'best-trance-festivals-worldwide': [
    { platform: 'youtube', query: 'Tomorrowland trance stage aftermovie', label: 'Tomorrowland — trance stage aftermovie' },
    { platform: 'youtube', query: 'A State of Trance Utrecht festival', label: 'A State of Trance Festival — Utrecht' },
    { platform: 'youtube', query: 'Dreamstate festival trance', label: 'Dreamstate — Insomniac trance festival' },
  ],

  'how-to-dj-trance-beginners-guide': [
    { platform: 'youtube', query: 'how to DJ trance beatmatching tutorial', label: 'Beatmatching trance — tutorial' },
    { platform: 'spotify', query: 'A State of Trance Yearmix', label: 'A State of Trance — Yearmix · listen as long-form set' },
    { platform: 'spotify', query: 'Above Beyond Group Therapy radio', label: 'Above & Beyond — Group Therapy radio · long-form set' },
  ],

  'trance-vs-house-vs-techno': [
    { platform: 'spotify', query: 'Armin van Buuren Communication trance', label: 'Trance · Armin van Buuren — Communication' },
    { platform: 'spotify', query: 'Daft Punk One More Time house', label: 'House · Daft Punk — One More Time' },
    { platform: 'spotify', query: 'Charlotte de Witte techno', label: 'Techno · Charlotte de Witte' },
  ],

  'why-trance-music-endures': [
    { platform: 'spotify', query: 'Above Beyond Sun Moon Richard Bedford', label: 'Above & Beyond — Sun & Moon · why people return' },
    { platform: 'spotify', query: 'Armin van Buuren This Is What It Feels Like', label: 'Armin van Buuren — This Is What It Feels Like' },
    { platform: 'spotify', query: 'Gareth Emery Concrete Angel Christina Novelli', label: 'Gareth Emery — Concrete Angel' },
  ],

  // Gear / production articles — embed the reference tracks readers should
  // listen to while studying technique.
  'pioneer-dj-vs-denon-dj-for-trance': [
    { platform: 'youtube', query: 'Pioneer CDJ 3000 trance review', label: 'Pioneer CDJ-3000 — trance review' },
    { platform: 'youtube', query: 'Denon DJ SC6000 trance review', label: 'Denon DJ SC6000 — trance review' },
  ],

  'best-headphones-for-trance-djing-2026': [
    { platform: 'youtube', query: 'Pioneer HDJ X10 review headphones', label: 'Pioneer HDJ-X10 — review' },
    { platform: 'youtube', query: 'Sennheiser HD 25 DJ headphones review', label: 'Sennheiser HD 25 — DJ standard review' },
  ],

  'essential-vst-plugins-trance-production': [
    { platform: 'youtube', query: 'Sylenth1 trance presets demo', label: 'Sylenth1 — trance presets demo' },
    { platform: 'youtube', query: 'Spire VST trance lead tutorial', label: 'Spire — trance lead tutorial' },
    { platform: 'youtube', query: 'Serum trance supersaw tutorial', label: 'Serum — trance supersaw tutorial' },
  ],

  'how-to-mix-trance-beatmatching-phrasing': [
    { platform: 'spotify', query: 'Armin van Buuren A State of Trance live mix', label: 'Reference set · Armin van Buuren — ASOT live' },
    { platform: 'spotify', query: 'Paul van Dyk Vonyc Sessions long set', label: 'Reference set · Paul van Dyk — VONYC Sessions' },
    { platform: 'youtube', query: 'how to phrase trance mix 32 bar', label: 'Phrasing tutorial — 32-bar trance' },
  ],

  'art-of-trance-buildup-production-secrets': [
    { platform: 'spotify', query: 'Armin van Buuren In and Out of Love buildup', label: 'Buildup study · Armin van Buuren — In and Out of Love' },
    { platform: 'spotify', query: 'Above Beyond Thing Called Love buildup', label: 'Buildup study · Above & Beyond — Thing Called Love' },
    { platform: 'youtube', query: 'trance breakdown buildup tutorial', label: 'Buildup production — tutorial' },
  ],

  // Venue / scene articles — videos and DJ sets recorded at the venues.
  'best-trance-clubs-in-europe': [
    { platform: 'youtube', query: 'Amnesia Ibiza trance Cream', label: 'Amnesia Ibiza — Cream trance era' },
    { platform: 'youtube', query: 'Gatecrasher Sheffield trance', label: 'Gatecrasher Sheffield — UK trance temple' },
    { platform: 'youtube', query: 'Berghain Tresor Berlin techno trance', label: 'Berlin — Tresor / Berghain history' },
  ],

  'tomorrowland-trance-stage': [
    { platform: 'youtube', query: 'Tomorrowland A State of Trance stage', label: 'Tomorrowland — ASOT stage set' },
    { platform: 'youtube', query: 'Tomorrowland Armin van Buuren mainstage', label: 'Tomorrowland — Armin van Buuren mainstage' },
  ],

  'ibiza-and-trance-love-story': [
    { platform: 'spotify', query: 'Tiesto In Search of Sunrise Ibiza', label: 'Tiësto — In Search of Sunrise · Ibiza sunrise mix' },
    { platform: 'spotify', query: 'Sasha John Digweed Northern Exposure Ibiza', label: 'Sasha & John Digweed — Northern Exposure' },
    { platform: 'youtube', query: 'Cafe del Mar Ibiza sunset chillout', label: 'Café del Mar — Ibiza sunset' },
  ],

  'underground-trance-scene': [
    { platform: 'spotify', query: 'Bryan Kearney Kearnage uplifting', label: 'Bryan Kearney — Kearnage · underground uplifting' },
    { platform: 'spotify', query: 'John OCallaghan Subculture trance', label: "John O'Callaghan — Subculture" },
    { platform: 'spotify', query: 'Sean Tyas tech trance', label: 'Sean Tyas — tech trance' },
  ],
};

export function getEmbedsForSlug(slug) {
  return embedsBySlug[slug] || [];
}

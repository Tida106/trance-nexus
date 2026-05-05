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
};

export function getEmbedsForSlug(slug) {
  return embedsBySlug[slug] || [];
}

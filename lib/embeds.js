// Helpers for the MusicEmbed component.
//
// Note on track IDs: we deliberately avoid hard-coding individual track IDs
// where we can't verify them. For artist-level embeds we reuse the IDs already
// stored in data/artists/* (extracted from the `links.spotify` URL field).
// For track-level embeds inside blog posts, the data layer can supply either
// a verified `id` (renders a real iframe) or a `query` string (renders a
// "Listen on X" card linking to the platform's search results).

// Pull a Spotify artist ID from a URL like:
//   https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5
// Returns null if the URL doesn't match (e.g. user/playlist URLs).
export function spotifyArtistIdFromUrl(url) {
  if (!url || typeof url !== 'string') return null;
  const m = url.match(/spotify\.com\/(?:[a-z]{2}\/)?artist\/([a-zA-Z0-9]{10,30})/);
  return m ? m[1] : null;
}

// Same idea but for playlist URLs:
//   https://open.spotify.com/playlist/37i9dQZF1DX...
export function spotifyPlaylistIdFromUrl(url) {
  if (!url || typeof url !== 'string') return null;
  const m = url.match(/spotify\.com\/(?:[a-z]{2}\/)?playlist\/([a-zA-Z0-9]{10,30})/);
  return m ? m[1] : null;
}

// Returns true if the given Spotify URL is for a profile that has no
// embeddable equivalent (e.g. a /user/<name> page). These render only as
// outbound links, not iframes.
export function isSpotifyUserUrl(url) {
  if (!url || typeof url !== 'string') return false;
  return /spotify\.com\/(?:[a-z]{2}\/)?user\//.test(url);
}

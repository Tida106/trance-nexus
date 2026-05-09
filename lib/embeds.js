// Helpers for the MusicEmbed component.
//
// The component now renders a search-URL hand-off (Spotify / YouTube /
// Apple Music / Beatport) — never a platform-specific iframe — because
// shipping verified platform IDs across 70+ artists proved unreliable.
// See components/MusicEmbed.jsx for the rationale.
//
// These helpers turn an artist's `topWorks` (or a label's `topReleases`)
// into a list of {query, label} pairs MusicEmbed knows how to render.

// Build a list of MusicEmbed-compatible entries from an artist's
// `topWorks` array. Each entry is `{query, label}` — no platform IDs.
//
// Each topWorks entry may have `{ title, year, type }`. We construct a
// query string of "<artist> <title>" and a label of
// "<artist> — <title> (<year>)" for clarity.
export function featuredTracksForArtist(artist, n = 5) {
  if (!artist || !Array.isArray(artist.topWorks)) return [];
  return artist.topWorks.slice(0, n).map((w) => {
    const cleanTitle = String(w.title)
      .replace(/\s*\([^)]*\)\s*/g, ' ') // drop parenthetical aliases like "(as System F)"
      .trim();
    return {
      query: `${artist.name} ${cleanTitle}`,
      label: `${artist.name} — ${w.title}${w.year ? ` (${w.year})` : ''}`,
    };
  });
}

// Same idea for labels. `topReleases` entries have
// `{ title, artist, year, type }`. Query is "<release artist> <title>"
// so the search lands on the actual recording rather than the label
// page.
export function featuredTracksForLabel(label, n = 5) {
  if (!label || !Array.isArray(label.topReleases)) return [];
  return label.topReleases.slice(0, n).map((r) => {
    const artist = r.artist || label.name;
    const cleanArtist = String(artist).replace(/\s*\(.*?\)\s*/g, ' ').trim();
    const cleanTitle = String(r.title).replace(/\s*\([^)]*\)\s*/g, ' ').trim();
    return {
      query: `${cleanArtist} ${cleanTitle}`,
      label: `${r.artist || ''} — ${r.title}${r.year ? ` (${r.year})` : ''}`.replace(
        /^ — /,
        ''
      ),
    };
  });
}

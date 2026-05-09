'use client';

import { useTranslation } from '@/lib/useTranslation';

// MusicEmbed — search-URL hand-off card.
//
// Why no iframe?
//   We previously rendered Spotify (and other) iframes when a verified
//   platform ID was supplied. The catalogue's stored IDs turned out
//   to be unreliable: many resolved to "Page not found" (Ferry Corsten,
//   Above & Beyond, Aly & Fila, Cosmic Gate) and some resolved to the
//   wrong artist entirely (a "Paul van Dyk" entry pointed at
//   BROCKHAMPTON). Verifying 70+ artist IDs against the Spotify Web API
//   from this build environment is unreliable, and shipping unverified
//   IDs risks worse user experience than no embed at all.
//
//   Search-URL hand-off has none of those failure modes. The platform's
//   own search box does the disambiguation, the user always lands on a
//   real result, and there is no risk of the wrong entity rendering
//   under an artist's name. It also keeps the component dependency-free.
//
// Props (kept compatible with the legacy iframe-mode call sites):
//   query    — search string (artist + title, or artist alone)
//   label?   — caption text shown above the buttons
//   title?   — accessibility label / fallback caption
//   compact? — tighter layout (timeline cards)
//   platform — IGNORED. Retained for back-compat with old call sites
//              that passed { platform, id }; the buttons row covers
//              all four platforms regardless. Old `id` props are also
//              ignored — when no `query` is given we synthesise one
//              from `label` (the format historically used was
//              "Artist — Title (Year) · note" so we extract the
//              artist + title from the part before the optional ·).
export default function MusicEmbed({ query, label, title, compact, platform, id }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  // Resolve a search query from props. Priority: explicit query →
  // derived from label → null (don't render).
  const q = (query && String(query).trim()) || deriveQueryFromLabel(label);
  if (!q) return null;

  const captionText = label || title || q;
  const enc = encodeURIComponent(q);

  // Four platform search hand-offs. Spotify / Apple / Beatport are
  // affiliate-shaped destinations so they carry rel="sponsored";
  // YouTube is a free search and does not.
  const platforms = [
    {
      name: 'Spotify',
      labelJa: 'Spotifyで聴く',
      labelEn: 'Listen on Spotify',
      icon: '🎧',
      href: `https://open.spotify.com/search/${enc}`,
      sponsored: true,
    },
    {
      name: 'YouTube',
      labelJa: 'YouTubeで検索',
      labelEn: 'YouTube',
      icon: '📺',
      href: `https://www.youtube.com/results?search_query=${enc}`,
      sponsored: false,
    },
    {
      name: 'Apple Music',
      labelJa: 'Apple Music',
      labelEn: 'Apple Music',
      icon: '🍎',
      href: `https://music.apple.com/search?term=${enc}`,
      sponsored: true,
    },
    {
      name: 'Beatport',
      labelJa: 'Beatport',
      labelEn: 'Beatport',
      icon: '🛒',
      href: `https://www.beatport.com/search?q=${enc}`,
      sponsored: true,
    },
  ];

  return (
    <div className="bg-dark-bg2/40 border border-orange-900/20 rounded-sm overflow-hidden">
      {label && (
        <div className="px-3 py-2 border-b border-orange-900/20">
          <span className="text-xs tracking-widest text-text-light/85 block truncate">
            {label}
          </span>
        </div>
      )}
      <div className={`flex flex-wrap gap-1.5 ${compact ? 'p-2' : 'p-3'}`}>
        {platforms.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel={p.sponsored ? 'noopener noreferrer sponsored' : 'noopener noreferrer'}
            aria-label={`${p.name}: ${captionText}`}
            className="inline-flex items-center gap-1.5 font-bebas text-xs tracking-widest px-3 py-1.5 rounded border border-accent-orange/40 bg-accent-orange/5 text-accent-orange hover:bg-accent-orange/15 hover:border-accent-orange transition-colors"
          >
            <span aria-hidden="true">{p.icon}</span>
            <span>{isJA ? p.labelJa : p.labelEn}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// Recover a usable search query from a legacy caller that supplied
// only { id, label } (e.g. data/blog/embeds.js artist-feature entries
// like { id: 'artist:0Sfsn...', label: 'Armin van Buuren — top tracks
// on Spotify' }). Strategy:
//   - Drop everything from "·" (mid-content separator) onward.
//   - Take the part before " — ", treat as artist; if there's a
//     " — <title>" tail, append the title up to any parenthetical.
//   - Strip "top tracks on Spotify" / "official" tail noise.
function deriveQueryFromLabel(label) {
  if (!label || typeof label !== 'string') return null;
  const main = label.split(/\s+·\s+/)[0]; // drop the " · note" tail
  const parts = main.split(/\s+(?:—|–|-)\s+/);
  const artist = (parts[0] || '').trim();
  const title = (parts[1] || '')
    .replace(/\s*\([^)]*\)\s*/g, ' ')
    .replace(/\b(top tracks on Spotify|official|on Spotify|YouTube channel)\b/gi, '')
    .trim();
  const q = (artist + (title ? ` ${title}` : '')).trim();
  return q || null;
}

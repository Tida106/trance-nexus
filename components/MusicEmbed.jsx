'use client';

import { useTranslation } from '@/lib/useTranslation';

// Optional Apple Music affiliate token (Performance Partners / Impact). When
// not set, Apple embeds render without an `at=` query.
const APPLE_AFFILIATE = process.env.NEXT_PUBLIC_APPLE_AFFILIATE || '';

// Render an embed for a single platform. Two modes:
//
//   { platform, id }    — emits the platform's official iframe (lazy-loaded)
//   { platform, query } — emits a clickable card linking to platform search
//
// Spotify ID format supports prefixed types: 'artist:<id>', 'track:<id>',
// 'album:<id>', 'playlist:<id>'. Bare IDs default to track.
//
// Apple ID format: '<country>/<type>/<name>/<numericId>' (the path that
// follows music.apple.com/). We append `?at=<token>` if configured.
//
// SoundCloud ID format: full SoundCloud URL of the track or playlist.
//
// YouTube ID format: 11-char video ID (default), or playlist ID starting
// with PL/UU/OL.
//
// Props:
//   platform : 'spotify' | 'apple' | 'soundcloud' | 'youtube'
//   id?      : platform-specific identifier (see above)
//   query?   : fallback search string (used when id is unavailable)
//   label?   : caption shown above the player
//   title?   : iframe title for accessibility
//   compact? : reduces iframe height where supported
export default function MusicEmbed({ platform, id, query, label, title, compact }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const config = getEmbedConfig({ platform, id, query, compact });
  if (!config) return null;

  const captionTitle =
    title ||
    label ||
    `${config.brandLabel} ${isJA ? 'プレイヤー' : 'player'}`;

  return (
    <div className="bg-dark-bg2/40 border border-orange-900/20 rounded-sm overflow-hidden">
      {label && (
        <div className="px-3 py-2 border-b border-orange-900/20 flex items-center justify-between gap-2">
          <span className="text-xs tracking-widest text-text-light/85 truncate">
            {label}
          </span>
          <span className="text-xs tracking-widest text-accent-orange/70 font-bebas shrink-0">
            {config.brandLabel}
          </span>
        </div>
      )}
      {config.embed ? (
        <iframe
          src={config.embed}
          loading="lazy"
          allow={config.allow}
          allowFullScreen={config.allowFullScreen}
          title={captionTitle}
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ border: 0, width: '100%', height: config.height }}
          className="block bg-black"
        />
      ) : (
        <a
          href={config.fallback}
          target="_blank"
          rel="noopener noreferrer sponsored"
          aria-label={`${config.brandLabel}: ${label || query || ''}`}
          className="block px-4 py-6 text-center hover:bg-accent-orange/5 transition-colors"
        >
          <span className="text-3xl block mb-2" aria-hidden="true">
            {config.icon}
          </span>
          <span className="font-bebas text-sm tracking-widest text-accent-orange">
            {isJA ? `${config.brandLabel} で聴く →` : `Listen on ${config.brandLabel} →`}
          </span>
          {query && (
            <span className="block mt-2 text-xs text-text-muted/70 italic font-barlow">
              {isJA ? `検索: ${query}` : `Search: ${query}`}
            </span>
          )}
        </a>
      )}
    </div>
  );
}

function getEmbedConfig({ platform, id, query, compact }) {
  switch (platform) {
    case 'spotify': {
      if (id) {
        const [type, realId] = id.includes(':') ? id.split(':') : ['track', id];
        const heights = {
          artist: 380,
          playlist: 380,
          album: 380,
          track: compact ? 80 : 152,
        };
        return {
          embed: `https://open.spotify.com/embed/${type}/${realId}`,
          fallback: null,
          icon: '🎧',
          brandLabel: 'Spotify',
          height: heights[type] || 152,
          allow:
            'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture',
          allowFullScreen: false,
        };
      }
      if (query) {
        return {
          embed: null,
          fallback: `https://open.spotify.com/search/${encodeURIComponent(query)}`,
          icon: '🎧',
          brandLabel: 'Spotify',
        };
      }
      return null;
    }
    case 'apple': {
      if (id) {
        const at = APPLE_AFFILIATE
          ? (id.includes('?') ? '&' : '?') + `at=${encodeURIComponent(APPLE_AFFILIATE)}`
          : '';
        return {
          embed: `https://embed.music.apple.com/${id}${at}`,
          fallback: null,
          icon: '🍎',
          brandLabel: 'Apple Music',
          height: compact ? 110 : 175,
          allow:
            'autoplay *; encrypted-media *; clipboard-write; fullscreen *',
          allowFullScreen: true,
        };
      }
      if (query) {
        return {
          embed: null,
          fallback: `https://music.apple.com/search?term=${encodeURIComponent(query)}`,
          icon: '🍎',
          brandLabel: 'Apple Music',
        };
      }
      return null;
    }
    case 'soundcloud': {
      if (id) {
        const url = id.startsWith('http') ? id : `https://soundcloud.com/${id}`;
        const params = new URLSearchParams({
          url,
          color: '#ff6a00',
          auto_play: 'false',
          hide_related: 'true',
          show_comments: 'false',
          show_user: 'true',
          show_reposts: 'false',
          show_teaser: 'false',
        });
        return {
          embed: `https://w.soundcloud.com/player/?${params.toString()}`,
          fallback: null,
          icon: '☁',
          brandLabel: 'SoundCloud',
          height: compact ? 120 : 166,
          allow: 'autoplay; clipboard-write; encrypted-media; fullscreen',
          allowFullScreen: false,
        };
      }
      if (query) {
        return {
          embed: null,
          fallback: `https://soundcloud.com/search?q=${encodeURIComponent(query)}`,
          icon: '☁',
          brandLabel: 'SoundCloud',
        };
      }
      return null;
    }
    case 'youtube': {
      if (id) {
        const isPlaylist = /^(PL|UU|OL|RD|FL|LL)/.test(id);
        const url = isPlaylist
          ? `https://www.youtube-nocookie.com/embed/videoseries?list=${id}`
          : `https://www.youtube-nocookie.com/embed/${id}`;
        return {
          embed: url,
          fallback: null,
          icon: '▶',
          brandLabel: 'YouTube',
          height: compact ? 240 : 360,
          allow:
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
          allowFullScreen: true,
        };
      }
      if (query) {
        return {
          embed: null,
          fallback: `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
          icon: '▶',
          brandLabel: 'YouTube',
        };
      }
      return null;
    }
    default:
      return null;
  }
}

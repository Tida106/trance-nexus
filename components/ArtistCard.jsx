'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

// Flag emoji → country gradient (flag stripe colors, left to right)
const FLAG_GRADIENTS = {
  // 横縞（to bottom）: 実際の国旗通りの向き
  '🇳🇱': 'linear-gradient(to bottom,#AE1C28 0%,#AE1C28 33%,#FFFFFF 33%,#FFFFFF 66%,#21468B 66%,#21468B 100%)', // Netherlands 赤白青・横
  '🇩🇪': 'linear-gradient(to bottom,#000000 0%,#000000 33%,#DD0000 33%,#DD0000 66%,#FFCE00 66%,#FFCE00 100%)', // Germany 黒赤黄・横
  '🇪🇬': 'linear-gradient(to bottom,#CE1126 0%,#CE1126 33%,#FFFFFF 33%,#FFFFFF 66%,#000000 66%,#000000 100%)', // Egypt 赤白黒・横
  '🇮🇱': 'linear-gradient(to bottom,#0038B8 0%,#0038B8 18%,#FFFFFF 18%,#FFFFFF 40%,#0038B8 40%,#0038B8 60%,#FFFFFF 60%,#FFFFFF 82%,#0038B8 82%,#0038B8 100%)', // Israel 青白青白青・横
  '🇸🇰': 'linear-gradient(to bottom,#FFFFFF 0%,#FFFFFF 33%,#0B4FD5 33%,#0B4FD5 66%,#EE1C25 66%,#EE1C25 100%)', // Slovakia 白青赤・横
  // 縦縞（to right）: 実際の国旗通りの向き
  '🇮🇹': 'linear-gradient(to right,#009246 0%,#009246 33%,#FFFFFF 33%,#FFFFFF 66%,#CE2B37 66%,#CE2B37 100%)', // Italy 緑白赤・縦
  '🇫🇷': 'linear-gradient(to right,#002395 0%,#002395 33%,#FFFFFF 33%,#FFFFFF 66%,#ED2939 66%,#ED2939 100%)', // France 青白赤・縦
  '🇲🇩': 'linear-gradient(to right,#003DA5 0%,#003DA5 33%,#FFD200 33%,#FFD200 66%,#CC0001 66%,#CC0001 100%)', // Moldova 青黄赤・縦
  // 複合デザイン
  '🇬🇧': 'linear-gradient(to bottom,#012169 0%,#012169 38%,#C8102E 38%,#C8102E 62%,#012169 62%,#012169 100%)', // UK 青赤青・横（ユニオンジャック簡略）
  '🇺🇸': 'linear-gradient(to bottom,#B22234 0%,#B22234 14%,#FFFFFF 14%,#FFFFFF 28%,#B22234 28%,#B22234 42%,#FFFFFF 42%,#FFFFFF 56%,#B22234 56%,#B22234 70%,#FFFFFF 70%,#FFFFFF 84%,#B22234 84%,#B22234 100%)', // USA 赤白縞
};
const DEFAULT_GRADIENT = 'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)';

export default function ArtistCard({ artist }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const sub = artist.sub?.[language] || artist.sub?.en || '';
  const short = artist.short?.[language] || artist.short?.en || '';

  return (
    // The whole card has been a <Link> all along — clicking anywhere
    // navigates to /artists/<slug>. The hover styling is intentionally
    // strong (lift + warm-orange shadow + full-opacity border) so the
    // card reads as obviously interactive rather than the user having
    // to find the "View profile →" CTA. cursor-pointer is added
    // explicitly because some browsers don't apply the default <a>
    // pointer cursor when display:block is set on the link.
    <Link
      href={`/artists/${artist.slug}`}
      aria-label={`${artist.name} — ${isJA ? 'プロフィールを見る' : 'View profile'}`}
      className="group block cursor-pointer bg-white/[0.05] border border-[rgba(212,175,55,0.3)] rounded-sm overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:border-accent-orange hover:shadow-2xl hover:shadow-accent-orange/20 focus-visible:-translate-y-1.5 focus-visible:border-accent-orange focus-visible:shadow-2xl focus-visible:shadow-accent-orange/20"
    >
      <div className="h-24 relative flex items-end p-4 overflow-hidden" style={{ background: FLAG_GRADIENTS[artist.flag] || DEFAULT_GRADIENT }}>
        {/* Subtle zoom on hover — gives the banner gradient a sense of
            life beyond the card lift. The container clips it. */}
        <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-105" style={{ background: FLAG_GRADIENTS[artist.flag] || DEFAULT_GRADIENT }} />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber z-10" />
        <div className="absolute top-3 right-3 text-xl z-10">{artist.flag}</div>
      </div>

      <div className="p-4 relative">
        {/* Icon container: relative + z-20 so the circle always paints
            on top of the banner — it sits with -mt-10 negative margin
            so the top half overlaps the banner gradient by design,
            but never gets clipped or hidden behind it. The circle's
            border picks up the orange accent on card hover so the
            interactive state is visually consistent. */}
        <div className="flex items-end mb-4 relative z-20">
          <div className="w-14 h-14 rounded-full border-2 border-accent-orange bg-white/[0.05] flex items-center justify-center text-2xl shadow-lg -mt-10 -mb-2 transition-shadow group-hover:shadow-accent-orange/40 group-hover:shadow-xl">
            {artist.emoji}
          </div>
        </div>

        <h3 className="font-bebas text-xl tracking-widest text-[#C89020] mb-1 group-hover:text-accent-orange transition-colors">
          {artist.name}
        </h3>
        <div className="text-xs tracking-widest text-accent-peach mb-2">{sub}</div>
        <p className="text-sm text-text-light leading-relaxed mb-3 line-clamp-3">{short}</p>

        <div className="flex gap-2 flex-wrap mb-3">
          {artist.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs tracking-widest px-2 py-1 rounded border border-accent-orange/30 bg-accent-orange/5 text-accent-peach"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA: the whole card is the click target, so this is purely
            decorative — a visual "where this card goes" hint that
            slides on hover to mirror the card's lift animation. */}
        <span
          aria-hidden="true"
          className="inline-flex items-center gap-1 font-bebas text-xs tracking-widest text-accent-peach group-hover:text-accent-peach transition-all"
        >
          <span>{isJA ? 'プロフィールを見る' : 'View profile'}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </Link>
  );
}

'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

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
      className="group block cursor-pointer bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:border-accent-orange hover:shadow-2xl hover:shadow-accent-orange/20 focus-visible:-translate-y-1.5 focus-visible:border-accent-orange focus-visible:shadow-2xl focus-visible:shadow-accent-orange/20"
    >
      <div className={`h-24 relative flex items-end p-4 overflow-hidden ${artist.banner}`}>
        {/* Subtle zoom on hover — gives the banner gradient a sense of
            life beyond the card lift. The container clips it. */}
        <div className={`absolute inset-0 ${artist.banner} transition-transform duration-300 group-hover:scale-105`} />
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
          <div className="w-14 h-14 rounded-full border-2 border-accent-orange bg-dark-bg flex items-center justify-center text-2xl shadow-lg -mt-10 -mb-2 transition-shadow group-hover:shadow-accent-orange/40 group-hover:shadow-xl">
            {artist.emoji}
          </div>
        </div>

        <h3 className="font-bebas text-xl tracking-widest text-white mb-1 group-hover:text-accent-orange transition-colors">
          {artist.name}
        </h3>
        <div className="text-xs tracking-widest text-accent-orange mb-2">{sub}</div>
        <p className="text-sm text-text-light/55 leading-relaxed mb-3 line-clamp-3">{short}</p>

        <div className="flex gap-2 flex-wrap mb-3">
          {artist.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs tracking-widest px-2 py-1 rounded border border-accent-orange/30 bg-accent-orange/5 text-accent-orange"
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
          className="inline-flex items-center gap-1 font-bebas text-xs tracking-widest text-accent-orange/70 group-hover:text-accent-orange transition-all"
        >
          <span>{isJA ? 'プロフィールを見る' : 'View profile'}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </Link>
  );
}

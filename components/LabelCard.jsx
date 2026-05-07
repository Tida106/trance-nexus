'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

export default function LabelCard({ label }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const short = label.short?.[language] || label.short?.en || '';

  return (
    // Same pattern as ArtistCard — whole card is a single Link with
    // strengthened hover affordance, banner zoom, and the icon
    // promoted to z-20 so it's never clipped behind the banner.
    <Link
      href={`/labels/${label.slug}`}
      aria-label={`${label.name} — ${isJA ? 'レーベル詳細' : 'View label'}`}
      className="group block cursor-pointer bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:border-accent-orange hover:shadow-2xl hover:shadow-accent-orange/20 focus-visible:-translate-y-1.5 focus-visible:border-accent-orange focus-visible:shadow-2xl focus-visible:shadow-accent-orange/20"
    >
      <div className={`h-20 relative flex items-end p-4 overflow-hidden ${label.banner}`}>
        <div className={`absolute inset-0 ${label.banner} transition-transform duration-300 group-hover:scale-105`} />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber z-10" />
        <div className="absolute top-3 right-3 text-xl z-10">{label.flag}</div>
      </div>

      <div className="p-4 relative">
        <div className="flex items-end mb-3 relative z-20">
          <div className="w-12 h-12 rounded-full border-2 border-accent-orange bg-dark-bg flex items-center justify-center text-xl shadow-lg -mt-9 -mb-2 transition-shadow group-hover:shadow-accent-orange/40 group-hover:shadow-xl">
            {label.emoji}
          </div>
        </div>

        <h3 className="font-bebas text-lg tracking-widest text-white mb-1 group-hover:text-accent-orange transition-colors leading-tight">
          {label.name}
        </h3>
        <div className="text-xs tracking-widest text-accent-orange mb-2">
          {label.hq} · EST {label.founded}
        </div>
        <p className="text-sm text-text-light/55 leading-relaxed mb-3 line-clamp-3">{short}</p>

        <div className="flex gap-1.5 flex-wrap mb-3">
          {(label.subgenres || []).slice(0, 3).map((g) => (
            <span
              key={g}
              className="text-xs tracking-widest px-2 py-0.5 rounded border border-accent-orange/30 bg-accent-orange/5 text-accent-orange"
            >
              {g}
            </span>
          ))}
        </div>

        <span
          aria-hidden="true"
          className="inline-flex items-center gap-1 font-bebas text-xs tracking-widest text-accent-orange/70 group-hover:text-accent-orange transition-all"
        >
          <span>{isJA ? 'レーベル詳細' : 'View label'}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </Link>
  );
}

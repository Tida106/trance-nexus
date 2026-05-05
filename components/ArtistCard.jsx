'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

export default function ArtistCard({ artist }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const sub = artist.sub?.[language] || artist.sub?.en || '';
  const short = artist.short?.[language] || artist.short?.en || '';

  return (
    <Link
      href={`/artists/${artist.slug}`}
      className="group bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:translate-y-[-5px] hover:shadow-xl hover:border-accent-orange/50 transition-all block"
    >
      <div className={`h-24 relative flex items-end p-4 ${artist.banner}`}>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
        <div className="absolute top-3 right-3 text-xl">{artist.flag}</div>
      </div>

      <div className="p-4">
        <div className="flex items-end mb-4">
          <div className="w-14 h-14 rounded-full border-2 border-accent-orange bg-dark-bg flex items-center justify-center text-2xl shadow-lg -mt-8 -mb-2">
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

        <div className="text-xs tracking-widest text-text-muted">
          {isJA ? 'プロフィールを見る →' : 'View profile →'}
        </div>
      </div>
    </Link>
  );
}

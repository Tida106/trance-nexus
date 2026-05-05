'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

export default function LabelCard({ label }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const short = label.short?.[language] || label.short?.en || '';

  return (
    <Link
      href={`/labels/${label.slug}`}
      className="group bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:translate-y-[-5px] hover:shadow-xl hover:border-accent-orange/50 transition-all block"
    >
      <div className={`h-20 relative flex items-end p-4 ${label.banner}`}>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
        <div className="absolute top-3 right-3 text-xl">{label.flag}</div>
      </div>

      <div className="p-4">
        <div className="flex items-end mb-3">
          <div className="w-12 h-12 rounded-full border-2 border-accent-orange bg-dark-bg flex items-center justify-center text-xl shadow-lg -mt-7 -mb-2">
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

        <div className="text-xs tracking-widest text-text-muted">
          {isJA ? 'レーベル詳細 →' : 'View label →'}
        </div>
      </div>
    </Link>
  );
}

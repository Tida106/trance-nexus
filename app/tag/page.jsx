'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useTranslation } from '@/lib/useTranslation';
import { tags, TAG_GROUPS } from '@/data/blog/tags';
import { getTagCounts } from '@/data/blog/classification';

const BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'Tags', ja: 'タグ' }, href: '/tag' },
];

// Map a count to a Tailwind text-size class — bigger count, bigger label.
function sizeClassForCount(count, max) {
  if (max === 0) return 'text-sm';
  const ratio = count / max;
  if (ratio >= 0.75) return 'text-2xl';
  if (ratio >= 0.5) return 'text-xl';
  if (ratio >= 0.25) return 'text-lg';
  return 'text-sm';
}

export default function TagIndexPage() {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const counts = getTagCounts();
  const max = Math.max(0, ...Object.values(counts));

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[60px] pb-20 px-12">
        <div className="max-w-5xl mx-auto">
          <div className="py-12">
            <div className="mb-4">
              <Breadcrumb items={BREADCRUMB} />
            </div>
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {isJA ? 'タグクラウド' : 'Tag Cloud'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-3" />
            <p className="text-text-light/60 text-sm font-barlow max-w-2xl">
              {isJA
                ? 'すべてのブログ記事タグを一覧で表示。タグの大きさは記事数を反映しています。'
                : 'Every tag used across our blog. Larger labels indicate more articles tagged with that term.'}
            </p>
          </div>

          {TAG_GROUPS.map((group) => {
            const groupTags = tags.filter((t) => t.group === group.id);
            if (groupTags.length === 0) return null;
            return (
              <section key={group.id} className="mb-10">
                <h2 className="font-bebas text-2xl tracking-widest text-accent-orange mb-2">
                  {isJA ? group.ja : group.en}
                </h2>
                <div className="w-12 h-0.5 bg-gradient-to-r from-accent-red to-accent-orange mb-5" />
                <div className="flex gap-3 flex-wrap items-baseline">
                  {groupTags.map((t) => {
                    const count = counts[t.id] || 0;
                    const sizeClass = sizeClassForCount(count, max);
                    const inactive = count === 0;
                    return (
                      <Link
                        key={t.id}
                        href={`/tag/${t.id}`}
                        className={`font-bebas tracking-widest px-3 py-1.5 rounded border transition-all ${sizeClass} ${
                          inactive
                            ? 'border-orange-900/15 text-text-muted/50 hover:text-text-muted'
                            : 'border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 hover:border-accent-orange'
                        }`}
                      >
                        {isJA ? t.name.ja : t.name.en}
                        <span className="ml-2 text-xs opacity-60">{count}</span>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

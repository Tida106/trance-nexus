'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useTranslation } from '@/lib/useTranslation';
import { categories } from '@/data/blog/categories';
import { getCategoryCounts } from '@/data/blog/classification';

const BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'Categories', ja: 'カテゴリ' }, href: '/category' },
];

export default function CategoryIndexPage() {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const counts = getCategoryCounts();

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
              {isJA ? '記事カテゴリ' : 'Article Categories'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-3" />
            <p className="text-text-light/60 text-sm font-barlow max-w-2xl">
              {isJA
                ? 'TRANCE NEXUS のブログ記事はテーマごとに6つのカテゴリに分類されています。興味のあるテーマからお探しください。'
                : 'TRANCE NEXUS blog articles are organised into six thematic categories. Browse by what interests you most.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="group bg-dark-bg2/80 border border-orange-900/20 rounded-sm p-6 hover:border-accent-orange/50 hover:translate-y-[-3px] hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0">{cat.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <h2 className="font-bebas text-xl tracking-widest text-white group-hover:text-accent-orange transition-colors">
                        {isJA ? cat.name.ja : cat.name.en}
                      </h2>
                      <span className="text-xs tracking-widest text-accent-orange font-bebas shrink-0">
                        {counts[cat.id]}{' '}
                        {counts[cat.id] === 1
                          ? isJA
                            ? '件'
                            : 'article'
                          : isJA
                          ? '件'
                          : 'articles'}
                      </span>
                    </div>
                    <div className="text-xs tracking-widest text-text-muted mb-3">
                      {isJA ? cat.name.en : cat.name.ja}
                    </div>
                    <p className="text-sm text-text-light/65 leading-relaxed font-barlow">
                      {isJA ? cat.description.ja : cat.description.en}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

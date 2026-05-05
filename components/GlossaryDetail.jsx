'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { useTranslation } from '@/lib/useTranslation';

const CATEGORY_LABELS = {
  genre: { en: 'Genre', ja: 'ジャンル' },
  production: { en: 'Production', ja: 'プロダクション' },
  dj: { en: 'DJ / Performance', ja: 'DJ・パフォーマンス' },
  culture: { en: 'Scene / Culture', ja: 'シーン・カルチャー' },
};

export default function GlossaryDetail({ term, related, artists, posts }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const name = isJA ? term.term.ja : term.term.en;
  const otherName = isJA ? term.term.en : term.term.ja;
  const short = isJA ? term.short.ja : term.short.en;
  const def = isJA ? term.definition.ja : term.definition.en;
  const catLabel = CATEGORY_LABELS[term.category]?.[language] || term.category;

  const breadcrumbItems = [
    { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
    { label: { en: 'Glossary', ja: '用語集' }, href: '/glossary' },
    { label: { en: term.term.en, ja: term.term.ja }, href: `/glossary/${term.slug}` },
  ];

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[60px] pb-20 px-12">
        <div className="max-w-3xl mx-auto">
          <div className="pt-8 pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <header className="py-8">
            <div className="text-xs tracking-widest text-accent-orange font-bebas mb-2">
              {catLabel}
            </div>
            <h1 className="font-bebas text-5xl md:text-6xl tracking-wider text-white mb-1">
              {name}
            </h1>
            <div className="font-bebas text-xl tracking-widest text-text-muted mb-3">
              {otherName}
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-5" />
            <p className="text-text-light/85 text-lg leading-relaxed font-barlow italic">
              {short}
            </p>
          </header>

          <section className="mb-10">
            <h2 className="font-bebas text-2xl tracking-widest text-accent-orange mb-4">
              {isJA ? '解説' : 'Definition'}
            </h2>
            <div className="text-text-light/80 text-base leading-loose font-barlow whitespace-pre-line bg-dark-bg2/60 border-l-2 border-accent-orange p-5">
              {def}
            </div>
          </section>

          {related?.length > 0 && (
            <section className="mb-10">
              <h2 className="font-bebas text-2xl tracking-widest text-accent-orange mb-4">
                {isJA ? '関連用語' : 'Related Terms'}
              </h2>
              <div className="flex gap-2 flex-wrap">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/glossary/${r.slug}`}
                    className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                  >
                    {isJA ? r.term.ja : r.term.en}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {artists?.length > 0 && (
            <section className="mb-10">
              <h2 className="font-bebas text-2xl tracking-widest text-accent-orange mb-4">
                {isJA ? '関連アーティスト' : 'Related Artists'}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {artists.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/artists/${a.slug}`}
                    className="group flex items-center gap-3 bg-dark-bg2/80 border border-orange-900/20 rounded-sm p-3 hover:border-accent-orange/50 transition-all"
                  >
                    <div className="text-2xl">{a.emoji}</div>
                    <div className="min-w-0">
                      <div className="font-bebas text-sm tracking-widest text-white group-hover:text-accent-orange transition-colors truncate">
                        {a.name}
                      </div>
                      <div className="text-xs text-text-muted tracking-widest">{a.flag}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {posts?.length > 0 && (
            <section className="mb-10">
              <h2 className="font-bebas text-2xl tracking-widest text-accent-orange mb-4">
                {isJA ? '関連記事' : 'Related Articles'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {posts.map((p) => {
                  const c = isJA ? p.ja : p.en;
                  return (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group block bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:border-accent-orange/50 transition-all"
                    >
                      <div className="h-1 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
                      <div className="p-3">
                        <h3 className="font-bebas text-sm tracking-widest text-white group-hover:text-accent-orange transition-colors leading-tight">
                          {c.title}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          <div className="border-t border-orange-900/20 pt-6">
            <Link
              href="/glossary"
              className="inline-block font-bebas text-sm tracking-widest px-5 py-2 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all rounded"
            >
              ← {isJA ? '用語集インデックスへ' : 'Back to glossary index'}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

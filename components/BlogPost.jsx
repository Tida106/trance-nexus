'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import GlossaryReferences from './GlossaryReferences';
import { useTranslation } from '@/lib/useTranslation';

// Lightweight card for related / prev-next articles
function ArticleCard({ post, isJA }) {
  const c = isJA ? post.ja : post.en;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:border-accent-orange/50 hover:translate-y-[-3px] hover:shadow-lg transition-all"
    >
      <div className="h-1.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
      <div className="p-4">
        <div className="flex gap-1.5 flex-wrap mb-2">
          {post.tags.slice(0, 2).map(t => (
            <span key={t} className="text-xs px-1.5 py-0.5 rounded border border-accent-orange/25 bg-accent-orange/5 text-accent-orange tracking-widest">
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-bebas text-base tracking-widest text-white mb-2 leading-tight group-hover:text-accent-orange transition-colors line-clamp-2">
          {c.title}
        </h3>
        <p className="text-xs text-text-light/50 leading-relaxed line-clamp-2 mb-3">
          {c.excerpt}
        </p>
        <div className="text-xs text-text-muted tracking-widest">
          {post.date} · {post.readTime} {isJA ? '分' : 'min'}
        </div>
      </div>
    </Link>
  );
}

export default function BlogPost({ post, prevPost, nextPost, related }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const content = isJA ? post.ja : post.en;

  const breadcrumbItems = [
    { label: { en: 'Home',  ja: 'ホーム' }, href: '/' },
    { label: { en: 'Blog',  ja: 'ブログ' }, href: '/blog' },
    { label: { en: post.en.title, ja: post.ja.title }, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[60px] pb-20 px-12">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <div className="pt-8 pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Header */}
          <header className="mb-10">
            <div className="flex gap-2 flex-wrap mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs tracking-widest px-2 py-0.5 rounded border border-accent-orange/30 bg-accent-orange/5 text-accent-orange"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-bebas text-4xl md:text-5xl tracking-wider text-white mb-4 leading-tight">
              {content.title}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-4" />

            <p className="text-text-light/60 text-base leading-relaxed mb-5">
              {content.description}
            </p>

            <div className="flex gap-6 text-xs text-text-muted tracking-widest">
              <span>📅 {post.date}</span>
              <span>⏱ {post.readTime} {isJA ? '分で読める' : 'min read'}</span>
            </div>
          </header>

          {/* Article body */}
          <article className="space-y-10">
            {content.content.map((section, i) => (
              <section key={i}>
                <h2 className="font-bebas text-2xl tracking-widest text-accent-orange mb-4">
                  {section.heading}
                </h2>
                <div
                  className="text-text-light/75 text-sm leading-relaxed font-barlow"
                  dangerouslySetInnerHTML={{ __html: section.body }}
                />
              </section>
            ))}
          </article>

          <GlossaryReferences
            text={[
              post.en.title,
              post.ja.title,
              post.en.description,
              post.ja.description,
              ...post.en.content.map((s) => s.heading + ' ' + s.body),
              ...post.ja.content.map((s) => s.heading + ' ' + s.body),
            ].join(' ')}
          />

          {/* Prev / Next navigation */}
          <nav
            aria-label={isJA ? '前後の記事' : 'Previous and next articles'}
            className="mt-16 pt-8 border-t border-orange-900/20 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex flex-col gap-1 p-4 border border-orange-900/20 rounded-sm hover:border-accent-orange/40 hover:bg-accent-orange/5 transition-all"
              >
                <span className="text-xs text-text-muted tracking-widest">
                  ← {isJA ? '前の記事' : 'Previous'}
                </span>
                <span className="text-sm font-bebas tracking-widest text-white group-hover:text-accent-orange transition-colors line-clamp-2">
                  {isJA ? prevPost.ja.title : prevPost.en.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex flex-col gap-1 p-4 border border-orange-900/20 rounded-sm hover:border-accent-orange/40 hover:bg-accent-orange/5 transition-all text-right sm:text-right"
              >
                <span className="text-xs text-text-muted tracking-widest">
                  {isJA ? '次の記事' : 'Next'} →
                </span>
                <span className="text-sm font-bebas tracking-widest text-white group-hover:text-accent-orange transition-colors line-clamp-2">
                  {isJA ? nextPost.ja.title : nextPost.en.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>

          {/* Related articles */}
          {related && related.length > 0 && (
            <section className="mt-12">
              <h2 className="font-bebas text-2xl tracking-widest text-white mb-2">
                {isJA ? '関連記事' : 'Related Articles'}
              </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-accent-red to-accent-orange mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map(p => (
                  <ArticleCard key={p.slug} post={p} isJA={isJA} />
                ))}
              </div>
            </section>
          )}

          {/* Back to blog */}
          <div className="mt-10 pt-8 border-t border-orange-900/20 flex justify-between items-center">
            <Link
              href="/blog"
              className="font-bebas text-sm tracking-widest px-5 py-2 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all rounded"
            >
              ← {isJA ? 'ブログ一覧' : 'All Articles'}
            </Link>
            <div className="text-xs text-text-muted tracking-widest">
              TRANCE NEXUS BLOG
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

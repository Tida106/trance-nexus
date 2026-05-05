'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import { useTranslation } from '@/lib/useTranslation';

export default function BlogPost({ post }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const content = isJA ? post.ja : post.en;

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[60px] pb-20 px-12">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <div className="py-8">
            <Link
              href="/blog"
              className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
            >
              ← {isJA ? 'ブログ一覧に戻る' : 'Back to Blog'}
            </Link>
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
                  className="text-text-light/75 text-sm leading-relaxed font-barlow prose-trance"
                  dangerouslySetInnerHTML={{ __html: section.body }}
                />
              </section>
            ))}
          </article>

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-orange-900/20 flex justify-between items-center">
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

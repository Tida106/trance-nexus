'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { useTranslation } from '@/lib/useTranslation';

const BLOG_BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'Blog', ja: 'ブログ' }, href: '/blog' },
];

export default function BlogListing({ listings }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="py-12">
            <div className="mb-4">
              <Breadcrumb items={BLOG_BREADCRUMB} />
            </div>
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {isJA ? 'ブログ' : 'Blog'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-3" />
            <p className="text-text-muted text-sm tracking-widest">
              {isJA
                ? 'トランスミュージックの深堀り記事 — 歴史、アーティスト、フェスティバル、そして文化'
                : 'In-depth articles on trance music — history, artists, festivals, and culture'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((post) => {
              const content = isJA ? post.ja : post.en;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:border-accent-orange/50 hover:translate-y-[-4px] hover:shadow-xl transition-all block"
                >
                  {/* Header bar */}
                  <div className="h-2 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />

                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mb-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs tracking-widest px-2 py-0.5 rounded border border-accent-orange/30 bg-accent-orange/5 text-accent-orange"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="font-bebas text-xl tracking-widest text-white mb-3 leading-tight group-hover:text-accent-orange transition-colors">
                      {content.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-text-light/55 leading-relaxed mb-4 line-clamp-3">
                      {content.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-text-muted tracking-widest border-t border-orange-900/15 pt-3">
                      <span>{post.date}</span>
                      <span>{post.readTime} {isJA ? '分' : 'min read'}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { useTranslation } from '@/lib/useTranslation';

// Used for both /category/[slug] and /tag/[slug] — same shape, different route prefix.
//
// Props:
//   type: 'category' | 'tag'
//   item: { id, name:{en,ja}, description:{en,ja}, emoji?, group? }
//   posts: array of slim listing entries
//   related: array of related taxonomy items (other categories or sibling tags)
function PostCard({ post, isJA }) {
  const c = isJA ? post.ja : post.en;
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:border-accent-orange/50 hover:translate-y-[-3px] hover:shadow-lg transition-all block"
    >
      <div className="h-1.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
      <div className="p-5">
        <div className="flex gap-1.5 flex-wrap mb-2">
          {(post.tags || []).slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs tracking-widest px-1.5 py-0.5 rounded border border-accent-orange/25 bg-accent-orange/5 text-accent-orange"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-bebas text-lg tracking-widest text-white mb-2 leading-tight group-hover:text-accent-orange transition-colors line-clamp-2">
          {c.title}
        </h3>
        <p className="text-xs text-text-light/55 leading-relaxed mb-3 line-clamp-2">
          {c.excerpt}
        </p>
        <div className="text-xs text-text-muted tracking-widest">
          {post.date} · {post.readTime} {isJA ? '分' : 'min read'}
        </div>
      </div>
    </Link>
  );
}

export default function TaxonomyListing({ type, item, posts, related }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const isCategory = type === 'category';
  const indexHref = isCategory ? '/category' : '/tag';
  const indexLabelEn = isCategory ? 'Categories' : 'Tags';
  const indexLabelJa = isCategory ? 'カテゴリ' : 'タグ';
  const detailPrefix = isCategory ? '/category' : '/tag';

  const breadcrumbItems = [
    { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
    { label: { en: indexLabelEn, ja: indexLabelJa }, href: indexHref },
    { label: item.name, href: `${detailPrefix}/${item.id}` },
  ];

  const name = isJA ? item.name.ja : item.name.en;
  const description = isJA ? item.description.ja : item.description.en;

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[60px] pb-20 px-12">
        <div className="max-w-5xl mx-auto">
          <div className="pt-8 pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Header */}
          <header className="py-8">
            <div className="text-xs tracking-widest text-accent-orange font-bebas mb-2">
              {isCategory
                ? isJA
                  ? 'カテゴリ'
                  : 'CATEGORY'
                : isJA
                ? 'タグ'
                : 'TAG'}
            </div>
            <h1 className="font-bebas text-5xl md:text-6xl tracking-wider text-white mb-2">
              {item.emoji ? `${item.emoji} ` : ''}
              {name}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-5" />
            <p className="text-text-light/85 text-base leading-relaxed font-barlow max-w-3xl">
              {description}
            </p>
            <div className="mt-3 text-xs text-text-muted tracking-widest">
              {posts.length}{' '}
              {posts.length === 1
                ? isJA
                  ? '件の記事'
                  : 'article'
                : isJA
                ? '件の記事'
                : 'articles'}
            </div>
          </header>

          {/* Posts */}
          {posts.length === 0 ? (
            <p className="text-center text-text-muted py-12">
              {isJA ? '該当する記事はまだありません' : 'No articles in this taxonomy yet'}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} isJA={isJA} />
              ))}
            </div>
          )}

          {/* Related taxonomies */}
          {related?.length > 0 && (
            <section className="mt-12 pt-8 border-t border-orange-900/20">
              <h2 className="font-bebas text-2xl tracking-widest text-accent-orange mb-4">
                {isCategory
                  ? isJA
                    ? '他のカテゴリ'
                    : 'Other Categories'
                  : isJA
                  ? '関連タグ'
                  : 'Related Tags'}
              </h2>
              <div className="flex gap-2 flex-wrap">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`${detailPrefix}/${r.id}`}
                    className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                  >
                    {r.emoji ? `${r.emoji} ` : ''}
                    {isJA ? r.name.ja : r.name.en}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10 pt-6 border-t border-orange-900/20 flex gap-3 flex-wrap">
            <Link
              href={indexHref}
              className="inline-block font-bebas text-sm tracking-widest px-5 py-2 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all rounded"
            >
              ← {isJA ? `${indexLabelJa}一覧へ` : `All ${indexLabelEn}`}
            </Link>
            <Link
              href="/blog"
              className="inline-block font-bebas text-sm tracking-widest px-5 py-2 border border-orange-900/30 text-text-muted hover:text-accent-orange hover:border-accent-orange transition-all rounded"
            >
              {isJA ? '全記事一覧' : 'All Articles'}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

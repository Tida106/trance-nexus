'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import GlossaryReferences from './GlossaryReferences';
import { useTranslation } from '@/lib/useTranslation';
import {
  getCategoryForPost,
  getTagsForPost,
} from '@/data/blog/classification';
import { getEmbedsForSlug } from '@/data/blog/embeds';
import { getProductsForSlug } from '@/data/blog/products';
import MusicEmbed from './MusicEmbed';
import NewsletterForm from './NewsletterForm';
import AmazonLink from './AmazonLink';

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
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <div className="pt-8 pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Header */}
          <header className="mb-10">
            {(() => {
              const category = getCategoryForPost(post.slug);
              const taxonomyTags = getTagsForPost(post.slug);
              return (
                <div className="flex gap-2 flex-wrap mb-4 items-center">
                  {category && (
                    <Link
                      href={`/category/${category.id}`}
                      className="text-xs tracking-widest font-bebas px-2.5 py-1 rounded bg-accent-orange/20 border border-accent-orange text-accent-orange hover:bg-accent-orange/30 transition-all"
                    >
                      {category.emoji} {isJA ? category.name.ja : category.name.en}
                    </Link>
                  )}
                  {taxonomyTags.map((t) => (
                    <Link
                      key={t.id}
                      href={`/tag/${t.id}`}
                      className="text-xs tracking-widest px-2 py-0.5 rounded border border-accent-orange/30 bg-accent-orange/5 text-accent-orange hover:bg-accent-orange/15 transition-all"
                    >
                      #{isJA ? t.name.ja : t.name.en}
                    </Link>
                  ))}
                </div>
              );
            })()}

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

          {(() => {
            const embeds = getEmbedsForSlug(post.slug);
            if (embeds.length === 0) return null;
            return (
              <section className="mt-12 pt-8 border-t border-orange-900/20">
                <h2 className="font-bebas text-2xl tracking-widest text-accent-orange mb-2">
                  {isJA ? '関連楽曲' : 'Featured Tracks'}
                </h2>
                <div className="w-12 h-0.5 bg-gradient-to-r from-accent-red to-accent-orange mb-5" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {embeds.map((e, i) => (
                    <MusicEmbed key={i} {...e} />
                  ))}
                </div>
              </section>
            );
          })()}

          {/* Amazon affiliate gear cards — locale-aware. JA visitors
              get amazon.co.jp + the JP associate tag; EN visitors get
              amazon.com + the US tag. Each language has its own product
              array in data/blog/products.js, so a slug with only a JA
              array simply renders nothing on English pages. */}
          {(() => {
            const products = getProductsForSlug(post.slug, language);
            if (products.length === 0) return null;
            return (
              <section className="mt-12 pt-8 border-t border-orange-900/20">
                <h2 className="font-bebas text-2xl tracking-widest text-accent-orange mb-2">
                  {isJA ? '関連商品' : 'Recommended Gear'}
                </h2>
                <div className="w-12 h-0.5 bg-gradient-to-r from-accent-red to-accent-orange mb-5" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {products.map((p, i) => (
                    <AmazonLink key={p.asin || i} {...p} />
                  ))}
                </div>
              </section>
            );
          })()}

          {/* Article-end affiliate disclosure — only when this post
              actually carried Amazon products in the current locale.
              Required by Amazon Associates program ToS in both regions
              and by Japanese display-rules guidance (景品表示法 /
              ステマ規制) on the JA side. */}
          {(() => {
            if (getProductsForSlug(post.slug, language).length === 0) return null;
            return (
              <aside
                role="note"
                aria-label={isJA ? 'アフィリエイトに関する注記' : 'Affiliate disclosure'}
                className="mt-10 px-4 py-3 rounded border border-orange-900/30 bg-dark-bg2/60 text-xs text-text-muted leading-relaxed"
              >
                {isJA
                  ? '※ 本記事にはアフィリエイトリンクが含まれています。リンク経由でご購入いただくと、当サイトの運営費の一部となる紹介料を受け取ることがあります。商品の選定は編集判断によるもので、紹介料の有無で内容を変えることはありません。'
                  : 'Disclosure: this article contains affiliate links. We may earn a referral fee on qualifying purchases made through these links — at no extra cost to you. Product picks are editorial; the presence or absence of a referral fee does not influence what we recommend.'}
              </aside>
            );
          })()}

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

          <section className="mt-12 pt-8 border-t border-orange-900/20">
            <NewsletterForm variant="cta" />
          </section>

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

import { notFound } from 'next/navigation';
import BlogPost from '@/components/BlogPost';
import { posts } from '@/data/blog/index';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const ogImage = { url: `/og/blog/${slug}.png`, width: 1200, height: 630, alt: post.en.title };
  return {
    title: `${post.en.title} | TRANCE NEXUS`,
    description: post.en.description,
    openGraph: {
      title: post.en.title,
      description: post.en.description,
      type: 'article',
      publishedTime: post.date,
      locale: 'en_US',
      alternateLocale: ['ja_JP'],
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.en.title,
      description: post.en.description,
      images: [`/og/blog/${slug}.png`],
    },
    alternates: {
      canonical: `/blog/${slug}`,
      types: {
        'application/rss+xml': [
          { url: '/rss.xml', title: 'TRANCE NEXUS — Blog' },
          { url: '/rss.en.xml', title: 'TRANCE NEXUS — Blog (English)' },
          { url: '/rss.ja.xml', title: 'TRANCE NEXUS — Blog (日本語)' },
        ],
        'application/atom+xml': [
          { url: '/atom.xml', title: 'TRANCE NEXUS — Blog (Atom)' },
        ],
      },
    },
  };
}

// Lightweight shape passed to client component (no full body content for siblings)
function slim(p) {
  return {
    slug: p.slug,
    date: p.date,
    readTime: p.readTime,
    tags: p.tags,
    en: { title: p.en.title, excerpt: p.en.excerpt },
    ja: { title: p.ja.title, excerpt: p.ja.excerpt },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === slug);

  // Prev / Next by array order (posts are in chronological order, oldest first)
  const prevPost = idx > 0 ? slim(posts[idx - 1]) : null;
  const nextPost = idx < posts.length - 1 ? slim(posts[idx + 1]) : null;

  // Related: same tags first, then fill from others, exclude current, limit 3
  const sameTag = posts.filter(
    (p) => p.slug !== slug && p.tags.some((t) => post.tags.includes(t))
  );
  const others = posts.filter(
    (p) => p.slug !== slug && !sameTag.find((r) => r.slug === p.slug)
  );
  const related = [...sameTag, ...others].slice(0, 3).map(slim);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.en.title,
    description: post.en.description,
    keywords: post.tags.join(', '),
    url: `https://trance-nexus.com/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: ['en', 'ja'],
    author: {
      '@type': 'Organization',
      name: 'TRANCE NEXUS',
      url: 'https://trance-nexus.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TRANCE NEXUS',
      url: 'https://trance-nexus.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://trance-nexus.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPost
        post={post}
        prevPost={prevPost}
        nextPost={nextPost}
        related={related}
      />
    </>
  );
}

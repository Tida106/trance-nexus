import BlogListing from '@/components/BlogListing';
import { posts } from '@/data/blog/posts';

export const metadata = {
  title: 'Blog | TRANCE NEXUS',
  description: 'In-depth articles about trance music: history, subgenres, artists, festivals, and cultural analysis.',
  openGraph: {
    title: 'TRANCE NEXUS Blog',
    description: 'In-depth articles about trance music: history, subgenres, artists, festivals, and cultural analysis.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ja_JP'],
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'TRANCE NEXUS Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRANCE NEXUS Blog',
    description: 'In-depth articles about trance music.',
    images: ['/og-default.png'],
  },
};

export default function BlogPage() {
  const listings = posts.map(({ slug, date, readTime, tags, en, ja }) => ({
    slug,
    date,
    readTime,
    tags,
    en: { title: en.title, description: en.description, excerpt: en.excerpt },
    ja: { title: ja.title, description: ja.description, excerpt: ja.excerpt },
  }));

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'TRANCE NEXUS Blog',
    description: 'In-depth articles about trance music: history, subgenres, artists, festivals, and cultural analysis',
    url: 'https://trance-nexus.com/blog',
    inLanguage: ['en', 'ja'],
    publisher: {
      '@type': 'Organization',
      name: 'TRANCE NEXUS',
      url: 'https://trance-nexus.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogListing listings={listings} />
    </>
  );
}

import BlogListing from '@/components/BlogListing';
import { posts } from '@/data/blog/posts';

export const metadata = {
  title: 'Blog | TRANCE NEXUS',
  description: 'In-depth articles about trance music: history, subgenres, artists, festivals, and cultural analysis.',
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

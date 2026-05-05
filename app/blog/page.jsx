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

  return <BlogListing listings={listings} />;
}

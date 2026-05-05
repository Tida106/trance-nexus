import { notFound } from 'next/navigation';
import BlogPost from '@/components/BlogPost';
import { posts } from '@/data/blog/posts';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.en.title} | TRANCE NEXUS`,
    description: post.en.description,
    openGraph: {
      title: post.en.title,
      description: post.en.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogPost post={post} />;
}

import { notFound } from 'next/navigation';
import TaxonomyListing from '@/components/TaxonomyListing';
import { categories, getCategoryById } from '@/data/blog/categories';
import { getPostsInCategory } from '@/data/blog/classification';

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cat = getCategoryById(slug);
  if (!cat) return {};
  return {
    title: `${cat.name.en} | TRANCE NEXUS`,
    description: cat.description.en,
    openGraph: {
      title: `${cat.name.en} | TRANCE NEXUS`,
      description: cat.description.en,
      type: 'website',
      locale: 'en_US',
      alternateLocale: ['ja_JP'],
    },
    twitter: { card: 'summary', title: cat.name.en, description: cat.description.en },
    alternates: { canonical: `https://trance-nexus.com/category/${cat.id}` },
  };
}

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

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const cat = getCategoryById(slug);
  if (!cat) notFound();

  const posts = getPostsInCategory(slug).map(slim);
  const related = categories.filter((c) => c.id !== slug);

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `https://trance-nexus.com/category/${cat.id}`,
    name: cat.name.en,
    alternateName: cat.name.ja,
    description: cat.description.en,
    url: `https://trance-nexus.com/category/${cat.id}`,
    inLanguage: ['en', 'ja'],
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://trance-nexus.com/blog/${p.slug}`,
        name: p.en.title,
      })),
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'TRANCE NEXUS',
      url: 'https://trance-nexus.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <TaxonomyListing type="category" item={cat} posts={posts} related={related} />
    </>
  );
}

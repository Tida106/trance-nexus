import { notFound } from 'next/navigation';
import TaxonomyListing from '@/components/TaxonomyListing';
import { tags, getTagById } from '@/data/blog/tags';
import { getPostsWithTag } from '@/data/blog/classification';

export function generateStaticParams() {
  return tags.map((t) => ({ slug: t.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const tag = getTagById(slug);
  if (!tag) return {};
  return {
    title: `${tag.name.en} — Tag | TRANCE NEXUS`,
    description: tag.description.en,
    openGraph: {
      title: `${tag.name.en} | TRANCE NEXUS`,
      description: tag.description.en,
      type: 'website',
      locale: 'en_US',
      alternateLocale: ['ja_JP'],
    },
    twitter: { card: 'summary', title: tag.name.en, description: tag.description.en },
    alternates: { canonical: `https://trance-nexus.com/tag/${tag.id}` },
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

export default async function TagPage({ params }) {
  const { slug } = await params;
  const tag = getTagById(slug);
  if (!tag) notFound();

  const posts = getPostsWithTag(slug).map(slim);

  // Related: other tags in the same group, then a sprinkle from other groups.
  const sameGroup = tags.filter((t) => t.group === tag.group && t.id !== slug);
  const otherGroups = tags.filter(
    (t) => t.group !== tag.group && !sameGroup.find((s) => s.id === t.id)
  );
  const related = [...sameGroup, ...otherGroups].slice(0, 8);

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `https://trance-nexus.com/tag/${tag.id}`,
    name: `${tag.name.en} — TRANCE NEXUS Tag`,
    alternateName: tag.name.ja,
    description: tag.description.en,
    url: `https://trance-nexus.com/tag/${tag.id}`,
    inLanguage: ['en', 'ja'],
    keywords: tag.id,
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
      <TaxonomyListing type="tag" item={tag} posts={posts} related={related} />
    </>
  );
}

import { notFound } from 'next/navigation';
import GlossaryDetail from '@/components/GlossaryDetail';
import { glossary, getTermBySlug, getRelatedTerms } from '@/data/glossary/index';
import { artists as allArtists } from '@/data/artists/index';
import { listing } from '@/data/blog/listing';

export function generateStaticParams() {
  return glossary.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) return {};
  const desc = term.short.en;
  return {
    title: `${term.term.en} (${term.term.ja}) | TRANCE NEXUS Glossary`,
    description: desc,
    openGraph: {
      title: `${term.term.en} — Trance Glossary`,
      description: desc,
      type: 'article',
      locale: 'en_US',
      alternateLocale: ['ja_JP'],
    },
    twitter: { card: 'summary', title: term.term.en, description: desc },
    alternates: {
      canonical: `https://trance-nexus.com/glossary/${term.slug}`,
    },
  };
}

function slimPost(p) {
  return {
    slug: p.slug,
    en: { title: p.en.title },
    ja: { title: p.ja.title },
  };
}

export default async function GlossaryTermPage({ params }) {
  const { slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) notFound();

  const related = getRelatedTerms(term.slug, 6);
  const artists = (term.artists || [])
    .map((s) => allArtists.find((a) => a.slug === s))
    .filter(Boolean)
    .slice(0, 6);
  const posts = (term.posts || [])
    .map((s) => listing.find((p) => p.slug === s))
    .filter(Boolean)
    .slice(0, 4)
    .map(slimPost);

  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `https://trance-nexus.com/glossary/${term.slug}`,
    name: term.term.en,
    alternateName: term.term.ja,
    description: term.short.en,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'TRANCE NEXUS Glossary',
      url: 'https://trance-nexus.com/glossary',
    },
    inLanguage: ['en', 'ja'],
    url: `https://trance-nexus.com/glossary/${term.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }}
      />
      <GlossaryDetail term={term} related={related} artists={artists} posts={posts} />
    </>
  );
}

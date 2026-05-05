import { notFound } from 'next/navigation';
import ArtistDetail from '@/components/ArtistDetail';
import { artists, getArtistBySlug, getRelatedArtists } from '@/data/artists/index';
import { listing } from '@/data/blog/listing';

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) return {};
  const desc = artist.short?.en || `${artist.name} — trance artist profile.`;
  return {
    title: `${artist.name} — Artist Profile | TRANCE NEXUS`,
    description: desc,
    openGraph: {
      title: `${artist.name} | TRANCE NEXUS`,
      description: desc,
      type: 'profile',
      locale: 'en_US',
      alternateLocale: ['ja_JP'],
    },
    twitter: {
      card: 'summary_large_image',
      title: artist.name,
      description: desc,
    },
    alternates: {
      canonical: `https://trance-nexus.com/artists/${artist.slug}`,
    },
  };
}

function slimPost(p) {
  return {
    slug: p.slug,
    date: p.date,
    readTime: p.readTime,
    tags: p.tags,
    en: { title: p.en.title, excerpt: p.en.excerpt },
    ja: { title: p.ja.title, excerpt: p.ja.excerpt },
  };
}

export default async function ArtistPage({ params }) {
  const { slug } = await params;
  const artist = getArtistBySlug(slug);
  if (!artist) notFound();

  const related = getRelatedArtists(artist.slug, 4);
  const mentionSlugs = artist.mentionedIn || [];
  const mentioned = listing
    .filter((p) => mentionSlugs.includes(p.slug))
    .slice(0, 4)
    .map(slimPost);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: artist.name,
    alternateName: artist.realName !== artist.name ? artist.realName : undefined,
    description: artist.short?.en,
    birthPlace: artist.origin,
    nationality: artist.origin?.split(',').pop()?.trim(),
    jobTitle: 'DJ / Music Producer',
    knowsAbout: ['Trance music', ...(artist.tags || [])],
    sameAs: Object.values(artist.links || {}).filter(Boolean),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://trance-nexus.com/artists/${artist.slug}`,
    },
    url: `https://trance-nexus.com/artists/${artist.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <ArtistDetail artist={artist} related={related} mentioned={mentioned} />
    </>
  );
}

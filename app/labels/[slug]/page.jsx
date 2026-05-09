import { notFound } from 'next/navigation';
import LabelDetail from '@/components/LabelDetail';
import {
  labels,
  getLabelBySlug,
  getRelatedLabels,
  getArtistsForLabel,
} from '@/data/labels/index';
import { listing } from '@/data/blog/listing';

export function generateStaticParams() {
  return labels.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const label = getLabelBySlug(slug);
  if (!label) return {};
  const desc = label.short?.en || `${label.name} — record label profile.`;
  return {
    title: `${label.name} — Label Profile | TRANCE NEXUS`,
    description: desc,
    openGraph: {
      title: `${label.name} | TRANCE NEXUS`,
      description: desc,
      type: 'profile',
      locale: 'en_US',
      alternateLocale: ['ja_JP'],
    },
    twitter: {
      card: 'summary_large_image',
      title: label.name,
      description: desc,
    },
    alternates: {
      canonical: `https://trance-nexus.com/labels/${label.slug}`,
      languages: {
        'en':        `https://trance-nexus.com/labels/${label.slug}`,
        'ja':        `https://trance-nexus.com/labels/${label.slug}`,
        'x-default': `https://trance-nexus.com/labels/${label.slug}`,
      },
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

export default async function LabelPage({ params }) {
  const { slug } = await params;
  const label = getLabelBySlug(slug);
  if (!label) notFound();

  const related = getRelatedLabels(label.slug, 5);
  const signedArtists = getArtistsForLabel(label);
  const postSlugs = label.posts || [];
  const posts = listing
    .filter((p) => postSlugs.includes(p.slug))
    .slice(0, 4)
    .map(slimPost);

  // Roster member JSON-LD — each signed artist resolves to a real
  // /artists/<slug> URL via getArtistsForLabel reverse-lookup, so
  // every member entry in the structured data has a discoverable
  // target. The schema.org Organization type accepts `member` as
  // an array of Person entities; we mirror it as `employee` for
  // older crawler compatibility.
  const memberSchema = (signedArtists || []).map((a) => ({
    '@type': 'Person',
    name: a.name,
    url: `https://trance-nexus.com/artists/${a.slug}`,
    alternateName: a.realName !== a.name ? a.realName : undefined,
  }));

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `https://trance-nexus.com/labels/${label.slug}`,
    name: label.name,
    description: label.short?.en,
    foundingDate: label.founded,
    foundingLocation: label.hq,
    address: {
      '@type': 'PostalAddress',
      addressLocality: label.hq,
    },
    founders: (label.founders || []).map((n) => ({
      '@type': 'Person',
      name: n,
    })),
    member: memberSchema.length ? memberSchema : undefined,
    employee: memberSchema.length ? memberSchema : undefined,
    // sameAs excludes Spotify for the same reason as the artist
    // schema: stored Spotify IDs across the catalogue weren't
    // reliable enough to assert as identity claims in structured
    // data.
    sameAs: Object.entries(label.links || {})
      .filter(([k, v]) => Boolean(v) && k !== 'spotify')
      .map(([, v]) => v),
    knowsAbout: ['Trance music', ...(label.subgenres || [])],
    url: `https://trance-nexus.com/labels/${label.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <LabelDetail
        label={label}
        related={related}
        signedArtists={signedArtists}
        posts={posts}
      />
    </>
  );
}

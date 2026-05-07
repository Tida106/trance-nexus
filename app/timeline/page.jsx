import TimelineClient from '@/components/TimelineClient';
import { events, eras } from '@/data/timeline';

export const metadata = {
  title: 'Trance Timeline (1988–2026) | TRANCE NEXUS',
  description:
    'An interactive bilingual timeline of trance music history — from Frankfurt clubs and the Goa scene to A State of Trance, the Anjuna empire, and Anyma at the Las Vegas Sphere. 30 moments across five eras.',
  alternates: {
    canonical: '/timeline',
  },
  openGraph: {
    title: 'Trance Timeline (1988–2026)',
    description:
      'An interactive bilingual timeline of trance music history — five eras, thirty defining moments.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ja_JP'],
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TRANCE NEXUS Timeline' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trance Timeline (1988–2026)',
    description:
      'An interactive bilingual timeline of trance music history — five eras, thirty defining moments.',
    images: ['/og-image.png'],
  },
};

export default function TimelinePage() {
  // ItemList JSON-LD: every event becomes a list item, ordered chronologically.
  const sorted = [...events].sort((a, b) => (a.year - b.year) || a.id.localeCompare(b.id));
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Trance Music Timeline',
    description: 'Chronological list of defining moments in trance music history (1988–2026).',
    numberOfItems: sorted.length,
    itemListOrder: 'http://schema.org/ItemListOrderAscending',
    itemListElement: sorted.map((ev, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: ev.title.en,
      description: ev.description.en,
      url: `https://trance-nexus.com/timeline#event-${ev.id}`,
    })),
  };

  // Also a CollectionPage wrapper so the timeline page itself is structured.
  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    headline: 'Trance Music Timeline (1988–2026)',
    description:
      'An interactive bilingual timeline of trance music history covering five chronological eras and thirty defining moments.',
    inLanguage: ['en', 'ja'],
    isPartOf: {
      '@type': 'WebSite',
      name: 'TRANCE NEXUS',
      url: 'https://trance-nexus.com',
    },
    about: eras.map((era) => ({
      '@type': 'Thing',
      name: `${era.title.en} (${era.range})`,
      description: era.description.en,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <TimelineClient />
    </>
  );
}

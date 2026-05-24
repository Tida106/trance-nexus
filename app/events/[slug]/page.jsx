import { notFound } from 'next/navigation';
import EventDetail from '@/components/EventDetail';
import { events, getEventBySlug, getRelatedEvents } from '@/data/events/index';
import { getArtistBySlug } from '@/data/artists/index';

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const e = getEventBySlug(slug);
  if (!e) return {};

  const desc = (e.en?.description || '').slice(0, 160);
  // Title pattern: "<Name> <Year> — Lineup, Dates & Tickets"
  const yr =
    e.dates?.next?.start
      ? new Date(e.dates.next.start).getFullYear()
      : e.editions?.[0]?.year || new Date().getFullYear();
  const title = `${e.name} ${yr} — Lineup, Dates & Tickets`;

  const ogImage = { url: e.og_image || `/og/events/${slug}.png`, width: 1200, height: 630, alt: e.name };

  const metadata = {
    title: `${title} | TRANCE NEXUS`,
    description: desc,
    openGraph: {
      title,
      description: desc,
      type: 'article',
      locale: 'en_US',
      alternateLocale: ['ja_JP'],
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [e.og_image || `/og/events/${slug}.png`],
    },
    alternates: {
      canonical: `https://trance-nexus.com/events/${e.slug}`,
      languages: {
        'en':        `https://trance-nexus.com/events/${e.slug}`,
        'ja':        `https://trance-nexus.com/events/${e.slug}`,
        'x-default': `https://trance-nexus.com/events/${e.slug}`,
      },
    },
  };

  // Events with `mergedInto` are intentional stub pages that redirect
  // editorial weight to a canonical artist profile (e.g. subculture-events
  // → john-ocallaghan, pure-trance-events → solarstone). They exist for
  // historical breadcrumb purposes but should not be indexed independently
  // to avoid thin-content duplicates with the merged target.
  if (e.mergedInto) {
    metadata.robots = { index: false, follow: true };
  }

  return metadata;
}

function eventJsonLd(e) {
  // schema.org Event — only emit fields we have. Use the next-edition
  // dates if available; otherwise fall back to the most-recent past
  // edition as the canonical date so the JSON-LD remains valid (an
  // Event without startDate would be schema-invalid).
  let startDate = e.dates?.next?.start;
  let endDate = e.dates?.next?.end || startDate;
  if (!startDate && e.editions?.length) {
    // Try to pull a year from the first edition entry
    const yr = e.editions[0].year;
    if (yr) startDate = `${yr}-01-01`;
  }
  if (!startDate) return null;

  const performers = (e.headliners || [])
    .map((slug) => getArtistBySlug(slug))
    .filter(Boolean)
    .map((a) => ({ '@type': 'PerformingGroup', name: a.name }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': e.dates?.next?.start ? 'Event' : 'EventSeries',
    name: e.name,
    description: e.en?.description,
    startDate,
    endDate,
    eventStatus: e.status === 'past' ? 'https://schema.org/EventPostponed' : 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    image: e.og_image ? `https://trance-nexus.com${e.og_image}` : undefined,
    url: `https://trance-nexus.com/events/${e.slug}`,
    location: e.venue
      ? {
          '@type': 'Place',
          name: e.venue.name,
          address: {
            '@type': 'PostalAddress',
            streetAddress: e.venue.address,
            addressCountry: e.venue.country,
          },
          geo: e.venue.lat != null && e.venue.lng != null ? {
            '@type': 'GeoCoordinates',
            latitude: e.venue.lat,
            longitude: e.venue.lng,
          } : undefined,
        }
      : undefined,
    organizer: {
      '@type': 'Organization',
      name: 'TRANCE NEXUS',
      url: 'https://trance-nexus.com',
    },
    performer: performers.length ? performers : undefined,
    offers: e.ticket_url
      ? {
          '@type': 'Offer',
          url: e.ticket_url,
          availability: 'https://schema.org/InStock',
        }
      : undefined,
  };
  return schema;
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const related = getRelatedEvents(slug, 4);
  const headliners = (event.headliners || [])
    .map((s) => getArtistBySlug(s))
    .filter(Boolean);

  const schema = eventJsonLd(event);

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <EventDetail event={event} headliners={headliners} related={related} />
    </>
  );
}

import { ogImagePath } from '@/lib/seo';
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
  // Title pattern: "<Name> <Year> — Lineup, Dates & Tickets" for events with
  // an upcoming date. Events without one get a year-less guide title so the
  // search result never advertises a past edition (e.g. "2024 — Tickets").
  // The year is not repeated when the name already contains it.
  const today = process.env.NEXT_PUBLIC_BUILD_DATE || new Date().toISOString().slice(0, 10);
  const nextEnd = e.dates?.next?.end || e.dates?.next?.start;
  const upcoming = nextEnd && String(nextEnd).slice(0, 10) >= today;
  const yr = upcoming ? new Date(e.dates.next.start).getFullYear() : null;
  const title = yr
    ? `${String(e.name).includes(String(yr)) ? e.name : `${e.name} ${yr}`} — Lineup, Dates & Tickets`
    : `${e.name} — Trance Festival Guide`;

  const ogUrl = ogImagePath(e.og_image || `/og/events/${slug}.png`);
  const ogImage = { url: ogUrl, width: 1200, height: 630, alt: e.name };

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
      images: [ogUrl],
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

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const related = getRelatedEvents(slug, 4);
  const headliners = (event.headliners || [])
    .map((s) => getArtistBySlug(s))
    .filter(Boolean);

  return <EventDetail event={event} headliners={headliners} related={related} />;
}

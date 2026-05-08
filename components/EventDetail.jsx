'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import EventCard from './EventCard';
import { useTranslation } from '@/lib/useTranslation';

const COUNTRY_FLAG = {
  BE: '🇧🇪', NL: '🇳🇱', CZ: '🇨🇿', US: '🇺🇸', PT: '🇵🇹', HU: '🇭🇺',
  BR: '🇧🇷', IT: '🇮🇹', IN: '🇮🇳', GB: '🇬🇧', UK: '🇬🇧', RO: '🇷🇴',
  ES: '🇪🇸', FR: '🇫🇷', DE: '🇩🇪', MX: '🇲🇽', TH: '🇹🇭', JP: '🇯🇵',
  multi: '🌐',
};

function osmEmbedUrl(lat, lng) {
  if (lat == null || lng == null) return null;
  const d = 0.05;
  const bbox = [lng - d, lat - d, lng + d, lat + d].join(',');
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
}

function osmExternalUrl(lat, lng) {
  if (lat == null || lng == null) return null;
  return `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=14/${lat}/${lng}`;
}

function statusLabel(s, isJA) {
  if (isJA) return s === 'upcoming' ? '開催予定' : s === 'annual' ? '毎年開催' : '終了';
  return s === 'upcoming' ? 'UPCOMING' : s === 'annual' ? 'ANNUAL' : 'PAST';
}

export default function EventDetail({ event, headliners, related }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const flag = COUNTRY_FLAG[event.country] || '🏳';
  const desc = isJA ? event.ja?.description : event.en?.description;
  const mapEmbed = osmEmbedUrl(event.venue?.lat, event.venue?.lng);
  const mapExternal = osmExternalUrl(event.venue?.lat, event.venue?.lng);

  const breadcrumb = [
    { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
    { label: { en: 'Events', ja: 'イベント' }, href: '/events' },
    { label: { en: event.name, ja: event.name }, href: `/events/${event.slug}` },
  ];

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-5xl mx-auto">
          <div className="py-8">
            <div className="mb-4">
              <Breadcrumb items={breadcrumb} />
            </div>

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
              <h1 className="font-bebas text-5xl tracking-wider text-white">
                <span className="mr-3">{flag}</span>
                {event.name}
              </h1>
              <span className="font-bebas text-xs tracking-widest px-3 py-1 rounded border border-accent-orange/40 text-accent-orange bg-accent-orange/10">
                {statusLabel(event.status, isJA)}
              </span>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />

            {/* Top facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {event.dates && (
                <div className="bg-dark-bg2/60 border border-orange-900/20 rounded-sm p-4">
                  <div className="font-bebas text-xs tracking-widest text-accent-orange mb-1">
                    {isJA ? '日程' : 'DATES'}
                  </div>
                  {event.dates.next?.start ? (
                    <div className="text-text-light text-sm">
                      {event.dates.next.start}
                      {event.dates.next.end && event.dates.next.end !== event.dates.next.start
                        ? ` → ${event.dates.next.end}`
                        : ''}
                    </div>
                  ) : event.dates.typicalMonth ? (
                    <div className="text-text-light text-sm">
                      {isJA ? `毎年 ${event.dates.typicalMonth}` : `Annually in ${event.dates.typicalMonth}`}
                    </div>
                  ) : (
                    <div className="text-text-muted text-sm">{isJA ? '日程未定' : 'TBA'}</div>
                  )}
                  {event.dates.note && (
                    <div className="text-text-muted text-xs mt-1">{event.dates.note}</div>
                  )}
                </div>
              )}

              {event.venue && (
                <div className="bg-dark-bg2/60 border border-orange-900/20 rounded-sm p-4">
                  <div className="font-bebas text-xs tracking-widest text-accent-orange mb-1">
                    {isJA ? '会場' : 'VENUE'}
                  </div>
                  <div className="text-text-light text-sm">{event.venue.name}</div>
                  <div className="text-text-muted text-xs mt-1">{event.venue.address}</div>
                  {event.venue.capacity && (
                    <div className="text-text-muted text-xs mt-1">
                      {isJA ? '収容人数' : 'Capacity'}: ~{event.venue.capacity.toLocaleString()}
                    </div>
                  )}
                </div>
              )}

              <div className="bg-dark-bg2/60 border border-orange-900/20 rounded-sm p-4">
                <div className="font-bebas text-xs tracking-widest text-accent-orange mb-1">
                  {isJA ? 'チケット／公式' : 'TICKETS / OFFICIAL'}
                </div>
                {event.ticket_url && (
                  <a
                    href={event.ticket_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent-orange hover:underline text-sm mb-1"
                  >
                    {isJA ? 'チケット →' : 'Tickets →'}
                  </a>
                )}
                {event.official_url && (
                  <a
                    href={event.official_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-accent-orange/80 hover:underline text-sm"
                  >
                    {isJA ? '公式サイト →' : 'Official site →'}
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            {desc && (
              <div className="bg-dark-bg2/40 border-l-4 border-accent-orange rounded-sm p-5 mb-8">
                <p className="text-text-light leading-relaxed text-base">{desc}</p>
              </div>
            )}

            {/* Headliners with internal links */}
            {headliners && headliners.length > 0 && (
              <section className="mb-8">
                <h2 className="font-bebas text-2xl tracking-widest text-white mb-3">
                  {isJA ? 'ヘッドライナー' : 'Headliners'}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {headliners.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/artists/${a.slug}`}
                      className="bg-dark-bg2/60 border border-orange-900/20 rounded-sm p-3 hover:border-accent-orange/50 transition-all"
                    >
                      <div className="font-bebas text-base tracking-widest text-white">{a.name}</div>
                      {a.country && (
                        <div className="text-xs text-text-muted">{a.country}</div>
                      )}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Genres + labels */}
            {(event.genres?.length > 0 || event.labels?.length > 0) && (
              <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {event.genres?.length > 0 && (
                  <div>
                    <h3 className="font-bebas text-base tracking-widest text-accent-orange mb-2">
                      {isJA ? 'ジャンル' : 'GENRES'}
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {event.genres.map((g) => (
                        <Link
                          key={g}
                          href={`/glossary/${g}`}
                          className="text-xs tracking-widest font-bebas px-3 py-1 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                        >
                          {g.replace(/-/g, ' ').toUpperCase()}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {event.labels?.length > 0 && (
                  <div>
                    <h3 className="font-bebas text-base tracking-widest text-accent-orange mb-2">
                      {isJA ? '関連レーベル' : 'ASSOCIATED LABELS'}
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {event.labels.map((l, i) => (
                        <span
                          key={i}
                          className="text-xs tracking-widest px-3 py-1 rounded bg-dark-bg2/60 border border-orange-900/30 text-text-light"
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* Map */}
            {mapEmbed && (
              <section className="mb-8">
                <h2 className="font-bebas text-2xl tracking-widest text-white mb-3">
                  {isJA ? '地図' : 'Map'}
                </h2>
                <div className="border border-orange-900/30 rounded-sm overflow-hidden">
                  <iframe
                    src={mapEmbed}
                    title={`Map of ${event.venue.name}`}
                    width="100%"
                    height="320"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                </div>
                {mapExternal && (
                  <a
                    href={mapExternal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-accent-orange hover:underline"
                  >
                    {isJA ? 'OpenStreetMapで開く →' : 'View larger on OpenStreetMap →'}
                  </a>
                )}
              </section>
            )}

            {/* Editions history */}
            {event.editions?.length > 0 && (
              <section className="mb-8">
                <h2 className="font-bebas text-2xl tracking-widest text-white mb-3">
                  {isJA ? '過去の開催' : 'Past Editions'}
                </h2>
                <div className="bg-dark-bg2/40 border border-orange-900/20 rounded-sm divide-y divide-orange-900/15">
                  {event.editions.map((ed, i) => (
                    <div key={i} className="px-4 py-3 flex items-baseline gap-4 text-sm">
                      <div className="font-bebas text-accent-orange w-16 shrink-0">{ed.year}</div>
                      <div className="text-text-light">
                        {ed.dates && <span className="text-text-light/80">{ed.dates}</span>}
                        {ed.dates && ed.note && <span className="mx-2 text-text-muted">·</span>}
                        {ed.note && <span className="text-text-muted">{ed.note}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related events */}
            {related && related.length > 0 && (
              <section className="mb-8">
                <h2 className="font-bebas text-2xl tracking-widest text-white mb-3">
                  {isJA ? '関連イベント' : 'Related Events'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {related.map((e) => (
                    <EventCard key={e.slug} event={e} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

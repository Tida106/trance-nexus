'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

const COUNTRY_FLAG = {
  BE: '🇧🇪', NL: '🇳🇱', CZ: '🇨🇿', US: '🇺🇸', PT: '🇵🇹', HU: '🇭🇺',
  BR: '🇧🇷', IT: '🇮🇹', IN: '🇮🇳', GB: '🇬🇧', UK: '🇬🇧', RO: '🇷🇴',
  ES: '🇪🇸', FR: '🇫🇷', DE: '🇩🇪', MX: '🇲🇽', TH: '🇹🇭', JP: '🇯🇵',
  multi: '🌐',
};

function statusStyle(s) {
  switch (s) {
    case 'upcoming':
      return { bg: 'bg-accent-orange/15', border: 'border-accent-orange/40', text: 'text-accent-orange' };
    case 'annual':
    case 'biennial':
      return { bg: 'bg-accent-amber/10', border: 'border-accent-amber/30', text: 'text-accent-amber' };
    case 'past':
    default:
      return { bg: 'bg-gray-900/10', border: 'border-gray-700/20', text: 'text-gray-500' };
  }
}

function statusLabel(s, isJA) {
  if (isJA) {
    if (s === 'upcoming') return '開催予定';
    if (s === 'annual') return '毎年開催';
    if (s === 'biennial') return '隔年開催';
    return '終了';
  }
  if (s === 'upcoming') return 'UPCOMING';
  if (s === 'annual') return 'ANNUAL';
  if (s === 'biennial') return 'BIENNIAL';
  return 'PAST';
}

function formatDates(dates, isJA) {
  if (!dates) return null;
  if (dates.next?.start) {
    const s = dates.next.start;
    const e = dates.next.end;
    return e && e !== s ? `${s} → ${e}` : s;
  }
  if (dates.typicalMonth) {
    return isJA ? `毎年 ${dates.typicalMonth}` : `Annually in ${dates.typicalMonth}`;
  }
  return null;
}

export default function EventCard({ event }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const sty = statusStyle(event.status);
  const flag = COUNTRY_FLAG[event.country] || '🏳';
  const venueLine = event.venue
    ? `${event.venue.name} — ${event.venue.address}`
    : '';
  const dateLine = formatDates(event.dates, isJA);
  const desc = isJA ? event.ja?.description : event.en?.description;

  return (
    <Link
      href={`/events/${event.slug}`}
      className={`relative block ${sty.bg} border ${sty.border} rounded-sm p-6 hover:shadow-lg hover:translate-y-[-2px] transition-all overflow-hidden`}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-red via-accent-orange to-transparent" />
      <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
        <div>
          <div className="font-bebas text-2xl tracking-widest text-white mb-1">
            <span className="mr-2">{flag}</span>
            {event.name}
          </div>
          {dateLine && (
            <div className="text-accent-orange text-sm tracking-widest">{dateLine}</div>
          )}
        </div>
        <span
          className={`font-bebas text-xs tracking-widest px-3 py-1 rounded ${sty.bg} ${sty.text} border border-current shrink-0`}
        >
          {statusLabel(event.status, isJA)}
        </span>
      </div>

      {venueLine && (
        <div className="text-xs text-text-muted mb-3 truncate">📍 {venueLine}</div>
      )}

      {desc && (
        <p className="text-xs text-text-light/70 leading-relaxed line-clamp-3 mb-3">
          {desc}
        </p>
      )}

      {event.headliners?.length > 0 && (
        <div className="flex gap-1.5 flex-wrap">
          {event.headliners.slice(0, 5).map((h) => (
            <span
              key={h}
              className="text-[10px] tracking-widest px-2 py-0.5 rounded bg-accent-orange/10 border border-accent-orange/25 text-accent-orange/90 font-bebas"
            >
              {h.replace(/-/g, ' ').toUpperCase()}
            </span>
          ))}
          {event.headliners.length > 5 && (
            <span className="text-[10px] tracking-widest px-2 py-0.5 text-text-muted font-bebas">
              +{event.headliners.length - 5}
            </span>
          )}
        </div>
      )}
    </Link>
  );
}

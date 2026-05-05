'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslation } from '@/lib/useTranslation';
import events from '@/data/events.json';

export default function EventsPage() {
  const { t } = useTranslation();

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(`${a.yr}-${new Date(`${a.mon} 1`).getMonth() + 1}-${a.day}`);
    const dateB = new Date(`${b.yr}-${new Date(`${b.mon} 1`).getMonth() + 1}-${b.day}`);
    return dateA - dateB;
  });

  const getRALink = (eventName) =>
    `https://www.residentadvisor.net/events?q=${encodeURIComponent(eventName)}&type=event`;

  const getStatusInfo = (status) => {
    const statusMap = {
      'on-sale': { bg: 'bg-accent-orange/15', border: 'border-accent-orange/40', text: 'text-accent-orange', label: t('events.onSale') },
      'soon': { bg: 'bg-accent-amber/10', border: 'border-accent-amber/30', text: 'text-accent-amber', label: t('events.coming') },
      'past': { bg: 'bg-gray-900/10', border: 'border-gray-700/20', text: 'text-gray-600', label: t('events.ended') },
    };
    return statusMap[status] || statusMap['past'];
  };

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[60px] pb-20 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="py-12">
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {t('events.title')}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
          </div>

          {/* AdSense ad slot 3 */}
          <div className="mb-8 p-4 bg-dark-bg2/50 border border-orange-900/20 rounded text-center">
            <div id="ad-slot-3" className="min-h-[90px] flex items-center justify-center">
              <p className="text-text-muted text-sm">Advertisement</p>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-4">
            {sortedEvents.map((event, i) => {
              const statusInfo = getStatusInfo(event.status);
              return (
                <div
                  key={i}
                  className={`${statusInfo.bg} border ${statusInfo.border} rounded-sm p-6 grid grid-cols-[100px_1fr_auto] gap-7 items-center hover:shadow-lg hover:translate-x-1 transition-all relative overflow-hidden`}
                >
                  {/* Left border accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-red via-accent-orange to-transparent" />

                  {/* Date */}
                  <div className="text-center">
                    <div className="font-bebas text-4xl text-accent-orange leading-none">
                      {event.day}
                    </div>
                    <div className="font-bebas text-sm tracking-widest text-accent-red mt-1">
                      {event.mon}
                    </div>
                    <div className="text-xs text-text-muted tracking-widest">
                      {event.yr}
                    </div>
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="font-bebas text-2xl tracking-widest text-white mb-1">
                      {event.name}
                    </h3>
                    <div className="text-accent-orange text-sm tracking-widest mb-2">
                      {event.venue}
                    </div>
                    <div className="flex gap-4 flex-wrap text-xs text-text-muted mb-2">
                      <div>🕐 {event.time}</div>
                      <div>👥 {t('events.capacity')}: {event.capacity}</div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {event.artists.map((artist, j) => (
                        <span
                          key={j}
                          className="text-xs tracking-widest px-2 py-1 rounded bg-accent-orange/10 border border-accent-orange/25 text-accent-orange"
                        >
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="text-right">
                    <div className={`font-bebas text-xs tracking-widest px-3 py-1 rounded inline-block border ${statusInfo.text} ${statusInfo.bg} border-current mb-2`}>
                      {statusInfo.label}
                    </div>
                    {event.status !== 'past' && (
                      <div>
                        <a
                          href={getRALink(event.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block font-bebas text-xs tracking-widest px-4 py-2 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all rounded"
                        >
                          {t('events.tickets')}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

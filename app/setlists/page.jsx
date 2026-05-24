'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/useTranslation';
import setlists from '@/data/setlists.json';

export default function SetlistsPage() {
  const { t } = useTranslation();
  const [filteredSetlists, setFilteredSetlists] = useState(setlists);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTracks, setExpandedTracks] = useState({});

  useEffect(() => {
    if (!searchQuery) {
      setFilteredSetlists(setlists);
    } else {
      setFilteredSetlists(
        setlists.filter(
          s =>
            s.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.dj.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  const toggleExpand = (index) => {
    setExpandedTracks(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="py-12">
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {t('setlists.title')}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
            <p className="mt-5 max-w-3xl text-sm md:text-base text-text-light/70 font-barlow leading-relaxed">
              {t('setlists.subtitle')}
            </p>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="flex border border-orange-900/30 rounded overflow-hidden max-w-sm">
              <input
                type="text"
                placeholder={t('setlists.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-dark-bg2/80 border-none px-4 py-2 text-text-light font-barlow text-sm placeholder-text-muted outline-none"
              />
              <button className="bg-accent-orange text-black px-4 py-2 font-bebas text-sm tracking-widest hover:bg-accent-amber transition-colors">
                SEARCH
              </button>
            </div>
          </div>

          {/* Setlist Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredSetlists.map((setlist, i) => (
              <div
                key={i}
                className="bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:border-accent-orange/45 hover:shadow-lg hover:translate-y-[-4px] transition-all"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-red-900/15 to-orange-900/8 p-5 border-b border-orange-900/20 flex justify-between items-start">
                  <div>
                    <h3 className="font-bebas text-lg tracking-widest text-white">
                      {setlist.event}
                    </h3>
                    <div className="text-accent-orange text-sm tracking-widest mt-1">
                      {setlist.dj}
                    </div>
                  </div>
                  <span
                    className={`text-xs tracking-widest px-2 py-1 rounded border whitespace-nowrap ${
                      setlist.type === 'live'
                        ? 'bg-accent-red/20 border-accent-red/50 text-accent-red'
                        : 'bg-accent-orange/10 border-accent-orange/30 text-accent-orange'
                    }`}
                  >
                    {setlist.type === 'live' ? t('setlists.live') : t('setlists.recorded')}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex gap-3 flex-wrap text-xs text-text-muted mb-4">
                    <div>📅 {setlist.date}</div>
                    <div>📍 {setlist.venue}</div>
                    <div>⏱ {setlist.duration}</div>
                  </div>

                  {/* Tracklist */}
                  <div className="space-y-1 mb-3">
                    {setlist.tracks.map((track, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-3 p-2 hover:bg-accent-orange/5 rounded transition-colors text-xs"
                      >
                        <span className="text-text-muted font-bebas min-w-[20px]">
                          {track.n}
                        </span>
                        <span className="flex-1 text-text-light/80">
                          {track.t}
                        </span>
                        <span className="text-text-muted font-mono">
                          {track.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* More button */}
                  <button
                    onClick={() => toggleExpand(i)}
                    className="text-xs text-text-muted hover:text-accent-orange transition-colors cursor-pointer flex items-center gap-2 mt-2"
                  >
                    {expandedTracks[i] ? '▲' : '▼'} {t('setlists.showMore')} {setlist.more} {t('setlists.tracks')}
                  </button>

                  {expandedTracks[i] && (
                    <div className="mt-3 pt-3 border-t border-orange-900/10 text-xs text-text-muted">
                      <p>（{t('setlists.expandedNote')} {setlist.more}）</p>
                      <p>{t('setlists.viewFull')}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredSetlists.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted text-lg">{t('setlists.noResults')}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

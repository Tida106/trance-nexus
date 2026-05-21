'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useTranslation } from '@/lib/useTranslation';
import radio from '@/data/radio.json';

const CARD_THEMES = [
  '210, 170, 70',   // gold
  '60, 160, 120',   // emerald
  '130, 90, 180',   // amethyst
  '60, 150, 160',   // teal
  '185, 70, 90',    // ruby
  '80, 110, 200',   // sapphire
  '175, 110, 60',   // bronze
  '200, 95, 55',    // copper
  '130, 145, 165',  // steel
  '80, 165, 110',   // jade
];

export default function RadioPage() {
  const { t, language } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('all');

  const filteredRadio = selectedTab === 'all'
    ? radio
    : radio.filter(r => r.freq === selectedTab);

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="py-12">
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {t('radio.title')}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
          </div>

          {/* Hero Card - ASOT */}
          <div className="featured-rainbow border border-accent-orange/25 rounded-sm p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-gradient-radial from-accent-orange/10 to-transparent rounded-full pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-2 font-bebas text-xs tracking-widest text-accent-amber mb-3">
                <span>★</span> {t('radio.featured')}
              </div>
              <h2 className="font-bebas text-4xl tracking-widest text-white mb-2">
                A State of <span className="text-accent-orange">Trance</span>
              </h2>
              <p className="text-text-light/55 text-sm leading-relaxed mb-4">
                {t('radio.asotDesc')}
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                {['border-accent-orange/30 bg-accent-orange/5 text-accent-orange',
                  'border-accent-amber/30 bg-accent-amber/5 text-accent-amber',
                  'border-accent-red/30 bg-accent-red/5 text-accent-red',
                ].map((cls, idx) => (
                  <span key={idx} className={`text-xs tracking-widest px-3 py-1 rounded border ${cls}`}>
                    {t('radio.asotTags')[idx]}
                  </span>
                ))}
              </div>
              <a
                href="https://www.astateoftrance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bebas text-xs tracking-widest px-4 py-2 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all rounded"
              >
                ▶ {t('radio.officialSite')}
              </a>
            </div>

            <div className="flex items-end justify-end h-20 gap-1">
              {[35, 75, 50, 90, 60, 40, 80, 55, 70, 45].map((height, i) => (
                <div
                  key={i}
                  className="w-2 rounded-t bg-gradient-to-t from-accent-fire via-accent-orange to-accent-amber opacity-85 animate-pulse"
                  style={{
                    height: `${height}%`,
                    animationDelay: `${i * 0.08}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* AdSense ad slot 2 */}
          <div className="mb-8 p-4 bg-dark-bg2/50 border border-orange-900/20 rounded text-center">
            <div id="ad-slot-2" className="min-h-[90px] flex items-center justify-center">
              <p className="text-text-muted text-sm">Advertisement</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-orange-900/20 mb-8">
            {['all', 'weekly', 'biweekly', 'monthly'].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`font-bebas text-sm tracking-widest px-6 py-2 relative transition-colors ${
                  selectedTab === tab
                    ? 'text-accent-orange'
                    : 'text-text-muted hover:text-text-light'
                }`}
              >
                {t(`radio.tabs.${tab}`)}
                {selectedTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-orange" />
                )}
              </button>
            ))}
          </div>

          {/* Radio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredRadio.map((show, i) => {
              const themeColor = CARD_THEMES[radio.indexOf(show) % CARD_THEMES.length];
              return (
              <div
                key={i}
                style={{
                  '--c': themeColor,
                  background: `linear-gradient(135deg, rgba(15,12,9,0.92) 0%, rgba(${themeColor},0.10) 50%, rgba(8,8,10,0.95) 100%)`,
                }}
                className="border border-[rgba(var(--c),0.22)] rounded-sm p-5 relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(var(--c),0.35)] hover:border-[rgba(var(--c),0.55)]"
              >
                <div
                  className="absolute -right-12 -top-12 w-44 h-44 rounded-full pointer-events-none"
                  style={{ background: `radial-gradient(circle, rgba(${themeColor},0.18) 0%, transparent 70%)` }}
                />
                {show.live && (
                  <div className="absolute top-3 right-3 flex items-center gap-2 bg-accent-red/20 border border-accent-red/50 text-accent-red px-2 py-1 rounded text-xs tracking-widest font-bebas">
                    <div className="w-1 h-1 rounded-full bg-accent-red animate-pulse" />
                    {t('radio.live')}
                  </div>
                )}

                <div className="font-bebas text-xs tracking-widest text-accent-red mb-1">
                  {show.num}
                </div>
                <h3 className="font-bebas text-2xl tracking-widest text-white mb-1">
                  {show.name}
                </h3>
                <div className="text-accent-orange text-sm tracking-widest mb-3">
                  by {show.dj}
                </div>

                <div className="flex gap-3 flex-wrap text-xs text-text-muted mb-3">
                  <div>🎵 {show.genre}</div>
                  {show.listeners && (
                    <div>👥 {show.listeners} {t('radio.listeners')}</div>
                  )}
                  <div>📅 {t(`radio.tabs.${show.freq}`)}</div>
                </div>

                <p className="text-sm text-text-light/50 leading-relaxed mb-3">
                  {language === 'ja' ? show.descJa : show.descEn}
                </p>

                <div className="border-t border-white/5 pt-3 flex flex-col gap-1 text-xs">
                  {show.sched.map((s, j) => (
                    <div key={j} className="flex justify-between items-center gap-3">
                      <span className="font-bebas text-accent-orange tracking-widest">{s.day}</span>
                      {s.time && (
                        <span className="text-text-light/65 font-mono">{s.time}</span>
                      )}
                      <span className="text-text-muted">
                        {language === 'ja' ? (s.epJa || s.ep) : (s.epEn || s.ep)}
                      </span>
                    </div>
                  ))}
                </div>

                {show.url && (
                  <a
                    href={show.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block font-bebas text-xs tracking-widest mt-3 px-4 py-2 border rounded transition-all duration-300 border-[rgba(var(--c),0.45)] text-[rgba(var(--c),1)] hover:bg-[rgba(var(--c),0.10)] hover:border-[rgba(var(--c),0.75)] hover:shadow-[0_0_18px_rgba(var(--c),0.35)]"
                  >
                    ▶ {t('radio.listen')}
                  </a>
                )}
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

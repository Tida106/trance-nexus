'use client';

import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import EventCard from '@/components/EventCard';
import { useTranslation } from '@/lib/useTranslation';
import { events } from '@/data/events/index';

const EVENTS_BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'Events', ja: 'イベント' }, href: '/events' },
];

const TABS = [
  { id: 'upcoming', en: 'UPCOMING / ANNUAL', ja: '開催予定／毎年' },
  { id: 'past',     en: 'PAST',                ja: '終了' },
  { id: 'all',      en: 'ALL',                 ja: 'すべて' },
];

const REGIONS = [
  { id: 'ALL',    en: 'ALL REGIONS',  ja: 'すべての地域' },
  { id: 'EU',     en: 'EUROPE',       ja: 'ヨーロッパ' },
  { id: 'NA',     en: 'NORTH AMERICA',ja: '北米' },
  { id: 'LATAM',  en: 'LATAM',        ja: 'ラテンアメリカ' },
  { id: 'ASIA',   en: 'ASIA',         ja: 'アジア' },
  { id: 'OCE',    en: 'OCEANIA',      ja: 'オセアニア' },
  { id: 'global', en: 'GLOBAL/MULTI', ja: 'グローバル' },
];

const MONTHS = [
  'All', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

function eventMatchesMonth(e, month) {
  if (month === 'All') return true;
  const monthIdx = MONTHS.indexOf(month); // 1..12
  if (e.dates?.next?.start) {
    const m = new Date(e.dates.next.start).getMonth() + 1;
    if (m === monthIdx) return true;
  }
  if (e.dates?.typicalMonth) {
    const tm = e.dates.typicalMonth.toLowerCase();
    const lm = month.toLowerCase();
    if (tm.includes(lm)) return true;
  }
  return false;
}

function eventGenres() {
  const set = new Set();
  for (const e of events) (e.genres || []).forEach((g) => set.add(g));
  return ['ALL', ...Array.from(set).sort()];
}

export default function EventsPage() {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const [tab, setTab] = useState('upcoming');
  const [region, setRegion] = useState('ALL');
  const [genre, setGenre] = useState('ALL');
  const [month, setMonth] = useState('All');
  const [search, setSearch] = useState('');

  const allGenres = useMemo(() => eventGenres(), []);

  const filtered = useMemo(() => {
    let out = events;

    if (tab === 'upcoming') out = out.filter((e) => e.status !== 'past');
    else if (tab === 'past') out = out.filter((e) => e.status === 'past');

    if (region !== 'ALL') out = out.filter((e) => e.region === region);
    if (genre !== 'ALL') out = out.filter((e) => (e.genres || []).includes(genre));
    if (month !== 'All') out = out.filter((e) => eventMatchesMonth(e, month));

    if (search) {
      const q = search.toLowerCase();
      out = out.filter((e) => {
        const hay = [
          e.name,
          e.venue?.name,
          e.venue?.address,
          e.country,
          ...(e.headliners || []),
          e.en?.description,
          e.ja?.description,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return hay.includes(q);
      });
    }

    // Sort: items with confirmed next.start ascending, then annuals
    // (no confirmed next), then past (most-recent edition first).
    return [...out].sort((a, b) => {
      const av = a.dates?.next?.start ? new Date(a.dates.next.start).getTime() : Infinity;
      const bv = b.dates?.next?.start ? new Date(b.dates.next.start).getTime() : Infinity;
      if (av !== bv) return av - bv;
      // Tie-break by name
      return (a.name || '').localeCompare(b.name || '');
    });
  }, [tab, region, genre, month, search]);

  // Group filtered by typicalMonth for a calendar-style month grouping.
  const grouped = useMemo(() => {
    const map = new Map();
    for (const e of filtered) {
      const key =
        e.dates?.next?.start
          ? new Date(e.dates.next.start).toLocaleString('en-US', { month: 'long', year: 'numeric' })
          : e.dates?.typicalMonth
            ? (isJA ? `毎年 ${e.dates.typicalMonth}` : `Annually — ${e.dates.typicalMonth}`)
            : (isJA ? '日程未定' : 'TBA');
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(e);
    }
    return Array.from(map.entries());
  }, [filtered, isJA]);

  const upcomingCount = events.filter((e) => e.status !== 'past').length;
  const pastCount = events.filter((e) => e.status === 'past').length;

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-6xl mx-auto">
          <div className="py-12">
            <div className="mb-4">
              <Breadcrumb items={EVENTS_BREADCRUMB} />
            </div>
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {isJA ? 'イベント・カレンダー' : 'Events Calendar'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-3" />
            <p className="text-text-light/60 text-sm font-barlow max-w-2xl">
              {isJA
                ? 'トランス・イベントの世界カタログ——フェスティバル、レーベル・ナイト、マイルストーン・ショー。'
                : 'A worldwide catalogue of trance events — festivals, label nights, and milestone shows.'}
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-4 flex gap-2 flex-wrap">
            {TABS.map((tg) => (
              <button
                key={tg.id}
                onClick={() => setTab(tg.id)}
                className={`font-bebas text-xs tracking-widest px-4 py-2 rounded transition-all ${
                  tab === tg.id
                    ? 'bg-accent-orange/20 border border-accent-orange text-accent-orange'
                    : 'bg-transparent border border-orange-900/30 text-text-muted hover:border-accent-orange hover:text-accent-orange'
                }`}
              >
                {isJA ? tg.ja : tg.en}
                {tg.id === 'upcoming' && (
                  <span className="ml-2 opacity-60">{upcomingCount}</span>
                )}
                {tg.id === 'past' && (
                  <span className="ml-2 opacity-60">{pastCount}</span>
                )}
              </button>
            ))}
          </div>

          {/* Filter row */}
          <div className="mb-6 flex gap-3 flex-wrap items-center">
            <div className="flex border border-orange-900/30 rounded overflow-hidden">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isJA ? 'イベントを検索...' : 'Search events...'}
                className="flex-1 bg-dark-bg2/80 border-none px-4 py-2 text-text-light font-barlow text-sm placeholder-text-muted outline-none min-w-[180px]"
              />
              <span className="bg-accent-orange text-black px-4 py-2 font-bebas text-sm tracking-widest">
                {filtered.length}
              </span>
            </div>

            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="bg-dark-bg2/80 border border-orange-900/30 rounded px-3 py-2 text-text-light font-bebas text-xs tracking-widest"
            >
              {REGIONS.map((r) => (
                <option key={r.id} value={r.id}>{isJA ? r.ja : r.en}</option>
              ))}
            </select>

            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="bg-dark-bg2/80 border border-orange-900/30 rounded px-3 py-2 text-text-light font-bebas text-xs tracking-widest"
            >
              {allGenres.map((g) => (
                <option key={g} value={g}>{g.replace(/-/g, ' ').toUpperCase()}</option>
              ))}
            </select>

            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="bg-dark-bg2/80 border border-orange-900/30 rounded px-3 py-2 text-text-light font-bebas text-xs tracking-widest"
            >
              {MONTHS.map((m) => (
                <option key={m} value={m}>{m === 'All' ? (isJA ? 'すべての月' : 'ALL MONTHS') : m.toUpperCase()}</option>
              ))}
            </select>
          </div>

          {/* Calendar / month-grouped list */}
          {grouped.length === 0 && (
            <p className="text-center text-text-muted py-12">
              {isJA ? '該当するイベントが見つかりません' : 'No events match these filters'}
            </p>
          )}

          {grouped.map(([groupKey, items]) => (
            <section key={groupKey} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="font-bebas text-xl tracking-widest text-accent-orange">
                  {groupKey}
                </div>
                <div className="flex-1 h-px bg-orange-900/30" />
                <div className="text-xs text-text-muted font-bebas tracking-widest">
                  {items.length}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((e) => (
                  <EventCard key={e.slug} event={e} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

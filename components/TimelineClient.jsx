'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import MusicEmbed from './MusicEmbed';
import { useTranslation } from '@/lib/useTranslation';
import { eras, events } from '@/data/timeline';
import { artists } from '@/data/artists/index';
import { labels } from '@/data/labels/index';
import { listing as blogListing } from '@/data/blog/listing';

// Cross-reference resolvers — guard against stale slugs.
const artistBySlug = new Map(artists.map((a) => [a.slug, a]));
const labelBySlug  = new Map(labels.map((l)  => [l.slug,  l]));
const blogBySlug   = new Map(blogListing.map((p) => [p.slug, p]));

const TYPE_BADGES = {
  release:  { en: 'RELEASE',   ja: 'リリース',   icon: '🎵' },
  artist:   { en: 'ARTIST',    ja: 'アーティスト', icon: '🎤' },
  label:    { en: 'LABEL',     ja: 'レーベル',   icon: '💿' },
  event:    { en: 'MOMENT',    ja: 'イベント',   icon: '✦' },
  subgenre: { en: 'SUBGENRE',  ja: 'サブジャンル', icon: '🌀' },
};

const breadcrumbItems = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'Timeline', ja: 'タイムライン' }, href: '/timeline' },
];

export default function TimelineClient() {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const [activeEraId, setActiveEraId] = useState(eras[0].id);
  const [openEvent, setOpenEvent] = useState(null); // event id
  const [reducedMotion, setReducedMotion] = useState(false);
  const eraRefs = useRef({});

  // Honour OS-level reduced-motion preference.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setReducedMotion(mq.matches);
    handler();
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);

  // Sticky era indicator — track which era's top is most recently above the
  // viewport's middle. Cheap IntersectionObserver hook on the era headings.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const opts = { rootMargin: '-30% 0px -60% 0px', threshold: 0 };
    const obs = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveEraId(visible[0].target.dataset.eraId);
    }, opts);
    Object.values(eraRefs.current).forEach((node) => node && obs.observe(node));
    return () => obs.disconnect();
  }, []);

  const eventsByEra = useMemo(() => {
    const m = {};
    for (const ev of events) {
      (m[ev.eraId] = m[ev.eraId] || []).push(ev);
    }
    for (const arr of Object.values(m)) {
      arr.sort((a, b) => (a.year - b.year) || a.id.localeCompare(b.id));
    }
    return m;
  }, []);

  return (
    <>
      <Navigation />
      <a
        href={`#era-${eras[0].id}`}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-3 focus:py-2 focus:rounded focus:border focus:border-accent-orange focus:bg-dark-bg focus:text-accent-orange focus:font-bebas focus:text-xs focus:tracking-widest"
      >
        {isJA ? 'タイムライン本文へスキップ' : 'Skip to timeline content'}
      </a>
      <main
        className="relative z-10 min-h-screen pt-[60px] pb-20"
        data-tl-reduced={reducedMotion ? '1' : '0'}
      >
        {/* Hero */}
        <section className="relative px-6 md:px-12 pt-10 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent-red/10 via-accent-orange/5 to-transparent pointer-events-none" />
          <svg
            aria-hidden="true"
            className="tl-hero-wave absolute inset-x-0 top-0 w-full opacity-20 pointer-events-none"
            viewBox="0 0 1200 120" preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="tlhero" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%"   stopColor="#dc2626" />
                <stop offset="50%"  stopColor="#f97316" />
                <stop offset="100%" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
            <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z" fill="url(#tlhero)" />
          </svg>

          <div className="relative max-w-4xl mx-auto">
            <div className="pb-4">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <span className="inline-block text-xs tracking-widest text-accent-orange font-bebas mb-3 px-2 py-1 rounded border border-accent-orange/30 bg-accent-orange/5">
              {isJA ? '1988 — 2026' : '1988 — 2026'}
            </span>
            <h1 className="font-bebas text-5xl md:text-7xl tracking-wider text-white drop-shadow-lg leading-none mb-4">
              {isJA ? 'トランスの歴史' : 'TRANCE TIMELINE'}
            </h1>
            <p className="text-text-light/75 text-base md:text-lg max-w-2xl leading-relaxed">
              {isJA
                ? 'フランクフルトのクラブから、ラスベガスのSphereまで——ジャンルを定義した30の瞬間。'
                : 'From Frankfurt clubs to the Las Vegas Sphere — thirty moments that defined the genre.'}
            </p>
          </div>
        </section>

        {/* Sticky era nav (jump links) */}
        <nav
          aria-label={isJA ? '年代ナビゲーション' : 'Era navigation'}
          className="sticky top-[60px] z-20 backdrop-blur bg-dark-bg/85 border-y border-orange-900/30"
        >
          <div className="max-w-5xl mx-auto px-3 py-2 flex gap-1.5 overflow-x-auto no-scrollbar">
            {eras.map((era) => {
              const isActive = era.id === activeEraId;
              return (
                <a
                  key={era.id}
                  href={`#era-${era.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`shrink-0 px-3 py-1.5 rounded text-xs tracking-widest font-bebas border transition-colors ${
                    isActive
                      ? 'border-accent-orange bg-accent-orange/15 text-accent-orange'
                      : 'border-orange-900/30 text-text-muted hover:text-accent-orange hover:border-accent-orange/50'
                  }`}
                  style={isActive ? { boxShadow: `0 0 0 1px ${era.accent}40 inset` } : undefined}
                >
                  <span className="mr-1.5 opacity-70">{era.range}</span>
                  {isJA ? era.title.ja : era.title.en}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Eras */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 mt-14">
          {eras.map((era) => (
            <Era
              key={era.id}
              era={era}
              isJA={isJA}
              events={eventsByEra[era.id] || []}
              eraRef={(node) => { eraRefs.current[era.id] = node; }}
              openEventId={openEvent}
              onToggleEvent={setOpenEvent}
              reducedMotion={reducedMotion}
            />
          ))}

          <div className="mt-20 pt-8 border-t border-orange-900/20 text-center">
            <p className="text-sm text-text-light/60 mb-4">
              {isJA
                ? 'タイムラインは継続して更新されます。新しい記事・アーティスト・レーベルが追加されると自動で反映されます。'
                : 'The timeline is continuously updated as new articles, artists, and labels are added.'}
            </p>
            <Link
              href="/blog"
              className="inline-block font-bebas text-sm tracking-widest px-5 py-2 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all rounded"
            >
              {isJA ? 'ブログで深く読む →' : 'READ THE BLOG →'}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Era({ era, events, isJA, eraRef, openEventId, onToggleEvent, reducedMotion }) {
  return (
    <section
      id={`era-${era.id}`}
      data-era-id={era.id}
      ref={eraRef}
      className="relative scroll-mt-32 mb-20"
      aria-labelledby={`era-title-${era.id}`}
    >
      <div className={`absolute inset-x-0 top-0 h-64 bg-gradient-to-b ${era.gradient} pointer-events-none rounded-sm`} />

      <header className="relative pt-10 pb-8">
        <div
          className="text-xs tracking-widest font-bebas mb-2"
          style={{ color: era.accent }}
        >
          {era.range}
        </div>
        <h2
          id={`era-title-${era.id}`}
          className="font-bebas text-4xl md:text-5xl tracking-wider text-white leading-none mb-3"
        >
          {isJA ? era.title.ja : era.title.en}
        </h2>
        <p className="text-accent-orange/85 text-sm tracking-widest mb-3 font-bebas">
          {isJA ? era.headline.ja : era.headline.en}
        </p>
        <p className="text-text-light/70 text-sm md:text-base leading-relaxed max-w-2xl">
          {isJA ? era.description.ja : era.description.en}
        </p>
        <div
          className="h-0.5 mt-5 max-w-xs"
          style={{ background: `linear-gradient(90deg, ${era.accent}, transparent)` }}
        />
      </header>

      <ol
        className="tl-rail relative pl-6 md:pl-8 border-l-2"
        style={{ borderColor: `${era.accent}60`, color: `${era.accent}50` }}
      >
        {events.map((ev, i) => (
          <TimelineEvent
            key={ev.id}
            event={ev}
            isJA={isJA}
            accent={era.accent}
            isOpen={openEventId === ev.id}
            onToggle={() => onToggleEvent(openEventId === ev.id ? null : ev.id)}
            reducedMotion={reducedMotion}
            index={i}
          />
        ))}
      </ol>
    </section>
  );
}

function TimelineEvent({ event, isJA, accent, isOpen, onToggle, reducedMotion, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) { setVisible(true); return; }
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [reducedMotion]);

  const badge = TYPE_BADGES[event.type] || TYPE_BADGES.event;
  const title = isJA ? event.title.ja : event.title.en;
  const description = isJA ? event.description.ja : event.description.en;

  // Resolve cross-references to live entities.
  const artist = event.artistSlug ? artistBySlug.get(event.artistSlug) : null;
  const label  = event.labelSlug  ? labelBySlug.get(event.labelSlug)   : null;
  const post   = event.blogSlug   ? blogBySlug.get(event.blogSlug)     : null;

  return (
    <li
      ref={ref}
      className={`relative mb-8 transition-all ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
      style={{ transitionDuration: reducedMotion ? '0ms' : '600ms', transitionDelay: reducedMotion ? '0ms' : `${Math.min(index * 40, 240)}ms` }}
    >
      {/* Pin — pulses on the active card; ::after ring expands then fades */}
      <span
        aria-hidden="true"
        className={`tl-pin absolute -left-[34px] md:-left-[42px] top-3 w-3.5 h-3.5 rounded-full ring-4 ring-dark-bg ${
          isOpen ? 'scale-125' : ''
        }`}
        style={{ background: accent, color: accent }}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`event-detail-${event.id}`}
        className="w-full text-left bg-dark-bg2/80 border border-orange-900/25 rounded-sm overflow-hidden hover:border-accent-orange/50 hover:shadow-lg transition-all focus:outline-none focus:border-accent-orange focus-visible:ring-2 focus-visible:ring-accent-orange/40"
      >
        <div className="px-4 py-3 flex items-baseline gap-3 border-b border-orange-900/15">
          <span
            className="font-bebas text-2xl tracking-widest shrink-0"
            style={{ color: accent }}
          >
            {event.year}
          </span>
          <span className="text-xs tracking-widest px-2 py-0.5 rounded border border-accent-orange/30 bg-accent-orange/5 text-accent-orange shrink-0">
            <span className="mr-1" aria-hidden="true">{badge.icon}</span>
            {isJA ? badge.ja : badge.en}
          </span>
          <span className="ml-auto text-text-muted text-xs">
            {isOpen ? (isJA ? '閉じる ▲' : 'CLOSE ▲') : (isJA ? '詳細 ▼' : 'DETAILS ▼')}
          </span>
        </div>
        <div className="px-4 py-3">
          <h3 className="font-bebas text-lg md:text-xl tracking-widest text-white leading-tight">
            {title}
          </h3>
          {!isOpen && (
            <p className="text-sm text-text-light/70 leading-relaxed mt-2 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </button>

      {isOpen && (
        <div
          id={`event-detail-${event.id}`}
          className="bg-dark-bg2/40 border-x border-b border-orange-900/25 rounded-b-sm px-4 py-4 -mt-px"
        >
          <p className="text-sm text-text-light/85 leading-relaxed mb-4">
            {description}
          </p>

          {event.embed && (
            <div className="mb-4">
              <MusicEmbed {...event.embed} compact />
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {artist && (
              <Link
                href={`/artists/${artist.slug}`}
                className="text-xs tracking-widest font-bebas px-3 py-1.5 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
              >
                🎤 {artist.name}
              </Link>
            )}
            {label && (
              <Link
                href={`/labels/${label.slug}`}
                className="text-xs tracking-widest font-bebas px-3 py-1.5 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
              >
                💿 {label.name}
              </Link>
            )}
            {post && (
              <Link
                href={`/blog/${post.slug}`}
                className="text-xs tracking-widest font-bebas px-3 py-1.5 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
              >
                ✍ {isJA ? post.ja.title : post.en.title}
              </Link>
            )}
          </div>
        </div>
      )}
    </li>
  );
}

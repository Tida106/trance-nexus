'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useTranslation } from '@/lib/useTranslation';
import { glossary } from '@/data/glossary/index';

const GLOSSARY_BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'Glossary', ja: '用語集' }, href: '/glossary' },
];

const CATEGORIES = [
  { id: 'ALL', en: 'ALL', ja: 'すべて' },
  { id: 'genre', en: 'GENRE', ja: 'ジャンル' },
  { id: 'production', en: 'PRODUCTION', ja: 'プロダクション' },
  { id: 'dj', en: 'DJ', ja: 'DJ' },
  { id: 'culture', en: 'CULTURE', ja: 'カルチャー' },
];

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function firstLetter(t) {
  return (t.term.en || '').trim().charAt(0).toUpperCase();
}

export default function GlossaryPage() {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('ALL');

  const filtered = useMemo(() => {
    let result = glossary;
    if (category !== 'ALL') {
      result = result.filter((t) => t.category === category);
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((t) => {
        const haystack = [
          t.term.en,
          t.term.ja,
          t.short.en,
          t.short.ja,
          ...(t.aliases || []),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(q);
      });
    }
    return result;
  }, [search, category]);

  // Group by first letter (English)
  const groups = useMemo(() => {
    const map = new Map();
    for (const t of filtered) {
      const letter = firstLetter(t);
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter).push(t);
    }
    for (const arr of map.values()) {
      arr.sort((a, b) => a.term.en.localeCompare(b.term.en));
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const presentLetters = useMemo(() => new Set(groups.map(([k]) => k)), [groups]);

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[60px] pb-20 px-12">
        <div className="max-w-5xl mx-auto">
          <div className="py-12">
            <div className="mb-4">
              <Breadcrumb items={GLOSSARY_BREADCRUMB} />
            </div>
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {isJA ? 'トランス用語集' : 'Trance Glossary'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-3" />
            <p className="text-text-light/60 text-sm font-barlow max-w-2xl">
              {isJA
                ? 'ジャンル、プロダクション、DJパフォーマンス、シーン用語まで——トランス・ミュージックを理解するための語彙。'
                : 'From genres and production to DJ performance and scene jargon — the vocabulary for understanding trance music.'}
            </p>
          </div>

          {/* Toolbar */}
          <div className="mb-6 flex gap-3 flex-wrap items-center">
            <div className="flex border border-orange-900/30 rounded overflow-hidden">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isJA ? '用語を検索...' : 'Search terms...'}
                className="flex-1 bg-dark-bg2/80 border-none px-4 py-2 text-text-light font-barlow text-sm placeholder-text-muted outline-none min-w-[180px]"
              />
              <span className="bg-accent-orange text-black px-4 py-2 font-bebas text-sm tracking-widest">
                {filtered.length}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={`font-bebas text-xs tracking-widest px-4 py-2 rounded transition-all ${
                    category === c.id
                      ? 'bg-accent-orange/20 border border-accent-orange text-accent-orange'
                      : 'bg-transparent border border-orange-900/30 text-text-muted hover:border-accent-orange hover:text-accent-orange'
                  }`}
                >
                  {isJA ? c.ja : c.en}
                </button>
              ))}
            </div>
          </div>

          {/* A-Z index */}
          <nav
            aria-label={isJA ? '索引' : 'Alphabet index'}
            className="mb-10 p-3 bg-dark-bg2/60 border border-orange-900/20 rounded-sm flex flex-wrap gap-1 justify-center"
          >
            {ALPHABET.map((letter) => {
              const present = presentLetters.has(letter);
              return present ? (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="font-bebas text-sm tracking-widest w-8 h-8 flex items-center justify-center rounded text-accent-orange hover:bg-accent-orange/10 transition-all"
                >
                  {letter}
                </a>
              ) : (
                <span
                  key={letter}
                  className="font-bebas text-sm tracking-widest w-8 h-8 flex items-center justify-center rounded text-text-muted/40 cursor-default select-none"
                >
                  {letter}
                </span>
              );
            })}
          </nav>

          {/* Term groups */}
          {groups.length === 0 && (
            <p className="text-center text-text-muted py-12">
              {isJA ? '該当する用語が見つかりません' : 'No terms found'}
            </p>
          )}

          {groups.map(([letter, items]) => (
            <section key={letter} id={`letter-${letter}`} className="mb-10 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="font-bebas text-3xl tracking-widest text-accent-orange w-12">
                  {letter}
                </div>
                <div className="flex-1 h-px bg-orange-900/30" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {items.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/glossary/${t.slug}`}
                    className="group bg-dark-bg2/80 border border-orange-900/20 rounded-sm p-4 hover:border-accent-orange/50 hover:translate-y-[-2px] transition-all"
                  >
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <h3 className="font-bebas text-lg tracking-widest text-white group-hover:text-accent-orange transition-colors">
                        {isJA ? t.term.ja : t.term.en}
                      </h3>
                      <span className="text-xs tracking-widest text-text-muted shrink-0">
                        {isJA ? t.term.en : t.term.ja}
                      </span>
                    </div>
                    <p className="text-xs text-text-light/60 leading-relaxed line-clamp-2">
                      {isJA ? t.short.ja : t.short.en}
                    </p>
                  </Link>
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

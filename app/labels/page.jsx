'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import LabelCard from '@/components/LabelCard';
import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from '@/lib/useTranslation';
import { labels } from '@/data/labels/index';

const LABELS_BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'Labels', ja: 'レーベル' }, href: '/labels' },
];

const CATEGORIES = [
  { id: 'ALL', en: 'ALL', ja: 'すべて' },
  { id: 'major', en: 'MAJORS', ja: 'メジャー' },
  { id: 'classic', en: 'CLASSIC', ja: 'クラシック' },
  { id: 'modern', en: 'MODERN', ja: 'モダン' },
  { id: 'psy', en: 'PSY', ja: 'サイケ' },
];

export default function LabelsPage() {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('ALL');

  const subgenreOptions = useMemo(() => {
    const set = new Set();
    labels.forEach((l) => (l.subgenres || []).forEach((g) => set.add(g)));
    return Array.from(set).sort();
  }, []);

  const [subgenre, setSubgenre] = useState('ALL');

  const filtered = useMemo(() => {
    let result = labels;
    if (category !== 'ALL') {
      result = result.filter((l) => l.category === category);
    }
    if (subgenre !== 'ALL') {
      result = result.filter((l) => (l.subgenres || []).includes(subgenre));
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((l) => {
        const haystack = [
          l.name,
          l.hq,
          l.short?.en,
          l.short?.ja,
          ...(l.aliases || []),
          ...(l.subgenres || []),
          ...(l.founders || []),
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(q);
      });
    }
    return result;
  }, [search, category, subgenre]);

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="py-12">
            <div className="mb-4">
              <Breadcrumb items={LABELS_BREADCRUMB} />
            </div>
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {isJA ? 'レーベル・ディレクトリ' : 'Label Directory'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-3" />
            <p className="text-text-light/60 text-sm font-barlow max-w-2xl">
              {isJA
                ? 'トランスシーンを支えるレコードレーベル。設立年、所属アーティスト、サブジャンル、主要リリースを網羅。'
                : 'The record labels that power the trance scene. Founding history, signed artists, subgenres, and notable releases.'}
            </p>
          </div>

          {/* Toolbar */}
          <div className="mb-6 flex gap-3 flex-wrap items-center">
            <div className="flex border border-orange-900/30 rounded overflow-hidden">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isJA ? 'レーベルを検索...' : 'Search labels...'}
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

          {/* Subgenre filter */}
          {subgenreOptions.length > 0 && (
            <div className="mb-8 flex gap-2 flex-wrap items-center">
              <span className="text-xs tracking-widest text-text-muted font-bebas">
                {isJA ? 'サブジャンル:' : 'Subgenre:'}
              </span>
              <button
                onClick={() => setSubgenre('ALL')}
                className={`text-xs tracking-widest font-bebas px-3 py-1 rounded transition-all ${
                  subgenre === 'ALL'
                    ? 'bg-accent-orange/20 border border-accent-orange text-accent-orange'
                    : 'border border-orange-900/30 text-text-muted hover:border-accent-orange hover:text-accent-orange'
                }`}
              >
                {isJA ? 'すべて' : 'ALL'}
              </button>
              {subgenreOptions.map((g) => (
                <button
                  key={g}
                  onClick={() => setSubgenre(g)}
                  className={`text-xs tracking-widest font-bebas px-3 py-1 rounded transition-all ${
                    subgenre === g
                      ? 'bg-accent-orange/20 border border-accent-orange text-accent-orange'
                      : 'border border-orange-900/30 text-text-muted hover:border-accent-orange hover:text-accent-orange'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((l) => (
              <LabelCard key={l.slug} label={l} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted text-lg">
                {isJA ? '該当するレーベルが見つかりません' : 'No labels found'}
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

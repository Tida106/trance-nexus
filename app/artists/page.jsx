'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ArtistCard from '@/components/ArtistCard';
import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from '@/lib/useTranslation';
import { artists } from '@/data/artists/index';

const ARTISTS_BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'Artists', ja: 'アーティスト' }, href: '/artists' },
];

export default function ArtistsPage() {
  const { t, language } = useTranslation();
  const isJA = language === 'ja';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('ALL');

  const genres = useMemo(() => {
    const set = new Set();
    artists.forEach((a) => a.genre && set.add(a.genre));
    return ['ALL', ...Array.from(set).sort()];
  }, []);

  // Sort by display name: digits → A-Z → symbols, then alphabetic.
  const sortedArtists = useMemo(() => {
    const bucket = (name) => {
      const c = (name || '').trim().charAt(0).toUpperCase();
      if (/[0-9]/.test(c)) return 0;
      if (/[A-Z]/.test(c)) return 1;
      return 2;
    };
    return [...artists].sort((a, b) => {
      const ba = bucket(a.name);
      const bb = bucket(b.name);
      if (ba !== bb) return ba - bb;
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase(), 'en');
    });
  }, []);

  const [filteredArtists, setFilteredArtists] = useState(sortedArtists);

  useEffect(() => {
    let result = sortedArtists;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((a) => {
        const subEn = a.sub?.en?.toLowerCase() || '';
        const subJa = a.sub?.ja || '';
        return (
          a.name.toLowerCase().includes(q) ||
          subEn.includes(q) ||
          subJa.includes(searchQuery) ||
          (a.realName || '').toLowerCase().includes(q)
        );
      });
    }
    if (selectedGenre !== 'ALL') {
      result = result.filter((a) => a.genre === selectedGenre);
    }
    setFilteredArtists(result);
  }, [searchQuery, selectedGenre, sortedArtists]);

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="py-12">
            <div className="mb-4">
              <Breadcrumb items={ARTISTS_BREADCRUMB} />
            </div>
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {t('artists.title')}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-3" />
            <p className="text-text-light/55 text-sm font-barlow max-w-2xl">
              {isJA
                ? '世界のトランスシーンを定義してきたアーティストたち。バイオグラフィ、代表作、サウンドスタイル、関連リンクを網羅。'
                : 'The artists who have defined the global trance scene. Biographies, key works, sound profiles, and listening links.'}
            </p>
          </div>

          {/* Toolbar */}
          <div className="mb-8 flex gap-3 flex-wrap items-center">
            <div className="flex border border-orange-900/30 rounded overflow-hidden">
              <input
                type="text"
                placeholder={t('artists.search')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-dark-bg2/80 border-none px-4 py-2 text-text-light font-barlow text-sm placeholder-text-muted outline-none"
              />
              <span className="bg-accent-orange text-black px-4 py-2 font-bebas text-sm tracking-widest">
                {filteredArtists.length}
              </span>
            </div>

            <div className="flex gap-2 flex-wrap">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`font-bebas text-xs tracking-widest px-4 py-2 rounded transition-all ${
                    selectedGenre === genre
                      ? 'bg-accent-orange/20 border border-accent-orange text-accent-orange'
                      : 'bg-transparent border border-orange-900/30 text-text-muted hover:border-accent-orange hover:text-accent-orange'
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          {/* Artist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.slug} artist={artist} />
            ))}
          </div>

          {filteredArtists.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted text-lg">{t('artists.noResults')}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

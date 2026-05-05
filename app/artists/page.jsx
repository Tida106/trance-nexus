'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/useTranslation';
import artists from '@/data/artists.json';

export default function ArtistsPage() {
  const { t } = useTranslation();
  const [filteredArtists, setFilteredArtists] = useState(artists);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('ALL');

  useEffect(() => {
    let result = artists;

    // Filter by search
    if (searchQuery) {
      result = result.filter(a =>
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.sub.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by genre
    if (selectedGenre !== 'ALL') {
      result = result.filter(a => a.genre === selectedGenre);
    }

    setFilteredArtists(result);
  }, [searchQuery, selectedGenre]);

  const genres = ['ALL', 'UPLIFTING', 'PROGRESSIVE', 'PSYTRANCE', 'TECH', 'VOCAL', 'EPIC'];

  const getBeatportLink = (artistName) =>
    `https://www.beatport.com/search?q=${encodeURIComponent(artistName)}`;

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[60px] pb-20 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="py-12">
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {t('artists.title')}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
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
              <button className="bg-accent-orange text-black px-4 py-2 font-bebas text-sm tracking-widest hover:bg-accent-amber transition-colors">
                SEARCH
              </button>
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

          {/* AdSense ad slot 1 */}
          <div className="mb-8 p-4 bg-dark-bg2/50 border border-orange-900/20 rounded text-center">
            <div id="ad-slot-1" className="min-h-[90px] flex items-center justify-center">
              {/* Google AdSense will be inserted here */}
              <p className="text-text-muted text-sm">Advertisement</p>
            </div>
          </div>

          {/* Artist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredArtists.map((artist, i) => (
              <div
                key={i}
                className="bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:translate-y-[-5px] hover:shadow-xl hover:border-accent-orange/50 transition-all"
              >
                {/* Banner */}
                <div
                  className={`h-24 relative flex items-end p-4 ${artist.banner}`}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
                  <div className="absolute top-3 right-3 text-xl">{artist.flag}</div>
                </div>

                {/* Body */}
                <div className="p-4">
                  <div className="flex items-end mb-4">
                    <div className="w-14 h-14 rounded-full border-2 border-accent-orange bg-dark-bg flex items-center justify-center text-2xl shadow-lg -mt-8 -mb-2">
                      {artist.emoji}
                    </div>
                  </div>

                  <h3 className="font-bebas text-xl tracking-widest text-white mb-1">
                    {artist.name}
                  </h3>
                  <div className="text-xs tracking-widest text-accent-orange mb-2">
                    {artist.sub}
                  </div>
                  <p className="text-sm text-text-light/55 leading-relaxed mb-3">
                    {artist.bio}
                  </p>

                  <div className="flex gap-2 flex-wrap mb-3">
                    {artist.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs tracking-widest px-2 py-1 rounded border border-accent-orange/30 bg-accent-orange/5 text-accent-orange"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={getBeatportLink(artist.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-widest px-3 py-1 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                    >
                      🎵 BEATPORT
                    </a>
                    {artist.links.map((link, j) => (
                      <a
                        key={j}
                        href="#"
                        className="text-xs tracking-widest px-3 py-1 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
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

'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from '@/lib/useTranslation';
import SearchIcon from './SearchIcon';

// SearchModal already powers the navbar Cmd+K trigger; we re-mount it
// here for the in-hero "always-visible" entry point. Using the same
// component (rather than a parallel implementation) means the
// minisearch index, fuzzy-match config, result rendering, and result-
// click handlers stay perfectly consistent across both entry points.
//
// The modal is dynamic-imported with ssr:false because:
//   - it pulls in minisearch + the search-index fetch flow (~80 KB
//     post-gzip) which we don't want on the home-page first paint
//   - it depends on `window` for keyboard handling and focus mgmt
//
// `armed` only flips to true after the user actually clicks/keys, so
// the modal chunk download is deferred until first interaction even
// on the home page.
const SearchModal = dynamic(() => import('./SearchModal'), { ssr: false });

export default function HeroSearchBar() {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const [open, setOpen] = useState(false);
  const [armed, setArmed] = useState(false);

  const placeholder = isJA
    ? 'アーティスト、トラック、レーベル、用語を検索…'
    : 'Search artists, tracks, labels, glossary…';

  return (
    <>
      <button
        type="button"
        onClick={() => { setArmed(true); setOpen(true); }}
        aria-label={isJA ? 'サイト内検索を開く' : 'Open site search'}
        className="group w-full max-w-2xl mx-auto flex items-center gap-3 px-5 py-4 rounded-md bg-dark-bg2/80 border gold-metallic-search text-left shadow-lg"
      >
        <SearchIcon className="w-6 h-6 shrink-0" />
        <span className="flex-1 text-[rgba(212,175,55,0.7)] group-hover:text-[rgba(244,229,168,0.9)] font-barlow text-sm md:text-base truncate transition-colors">
          {placeholder}
        </span>
        <kbd className="hidden sm:inline-block font-bebas text-[11px] tracking-widest px-2 py-1 rounded border border-[rgba(212,175,55,0.35)] text-[rgba(244,229,168,0.75)] bg-dark-bg/40 shrink-0">
          ⌘K
        </kbd>
      </button>
      {armed && <SearchModal open={open} onClose={() => setOpen(false)} />}
    </>
  );
}

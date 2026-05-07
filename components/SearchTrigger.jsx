'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from '@/lib/useTranslation';

// SearchModal pulls in minisearch + the full search-index fetch flow.
// Defer the JS until the user actually requests search — first paint
// of every page that includes the nav stays lean.
const SearchModal = dynamic(() => import('./SearchModal'), { ssr: false });

export default function SearchTrigger() {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const [open, setOpen] = useState(false);
  // Track whether the modal has ever been requested. Once true we keep
  // mounting it so reopen is instant; before that, the chunk is never
  // fetched.
  const [armed, setArmed] = useState(false);

  // Cmd+K (mac) / Ctrl+K (everywhere else) toggles the modal globally.
  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setArmed(true);
        setOpen((o) => !o);
      } else if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        // Convenience: lone "/" opens search if not typing in a field.
        e.preventDefault();
        setArmed(true);
        setOpen(true);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <button
        onClick={() => { setArmed(true); setOpen(true); }}
        aria-label={isJA ? 'サイト内検索を開く' : 'Open site search'}
        className="font-bebas text-sm tracking-widest text-text-muted hover:text-accent-orange px-4 h-[84px] border-l border-orange-900/20 flex items-center gap-2 transition-colors"
      >
        <span className="text-base" aria-hidden="true">🔎</span>
        <span className="hidden md:inline">{isJA ? '検索' : 'SEARCH'}</span>
        <span className="hidden lg:inline-block ml-1 px-1.5 py-0.5 rounded border border-orange-900/30 text-[10px] tracking-widest text-text-muted/70">
          ⌘K
        </span>
      </button>
      {armed && <SearchModal open={open} onClose={() => setOpen(false)} />}
    </>
  );
}

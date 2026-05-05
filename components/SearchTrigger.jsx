'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from '@/lib/useTranslation';
import SearchModal from './SearchModal';

export default function SearchTrigger() {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const [open, setOpen] = useState(false);

  // Cmd+K (mac) / Ctrl+K (everywhere else) toggles the modal globally.
  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        // Convenience: lone "/" opens search if not typing in a field.
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={isJA ? 'サイト内検索を開く' : 'Open site search'}
        className="font-bebas text-sm tracking-widest text-text-muted hover:text-accent-orange px-4 h-[60px] border-l border-orange-900/20 flex items-center gap-2 transition-colors"
      >
        <span className="text-base" aria-hidden="true">🔎</span>
        <span className="hidden md:inline">{isJA ? '検索' : 'SEARCH'}</span>
        <span className="hidden lg:inline-block ml-1 px-1.5 py-0.5 rounded border border-orange-900/30 text-[10px] tracking-widest text-text-muted/70">
          ⌘K
        </span>
      </button>
      <SearchModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

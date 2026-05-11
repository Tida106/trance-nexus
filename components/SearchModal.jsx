'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/useTranslation';
import {
  performSearch,
  groupByType,
  TYPE_ORDER,
  TYPE_LABELS,
} from '@/lib/search';
import SearchIcon from './SearchIcon';

export default function SearchModal({ open, onClose }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Debounced query → results (150ms)
  useEffect(() => {
    if (!open) return;
    const trimmed = query.trim();
    if (!trimmed) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const t = setTimeout(() => {
      performSearch(trimmed, { limit: 30 })
        .then((r) => {
          setResults(r);
          setActiveIdx(0);
          setLoading(false);
        })
        .catch(() => {
          setResults([]);
          setLoading(false);
        });
    }, 150);
    return () => clearTimeout(t);
  }, [query, open]);

  // Open/close lifecycle: focus, scroll-lock, reset
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout(t);
        document.body.style.overflow = original;
      };
    }
    setQuery('');
    setResults([]);
    setActiveIdx(0);
  }, [open]);

  // Keep active item visible during keyboard nav
  useEffect(() => {
    if (!listRef.current) return;
    const el = listRef.current.querySelector(`[data-idx="${activeIdx}"]`);
    if (el) el.scrollIntoView({ block: 'nearest' });
  }, [activeIdx, results]);

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, Math.max(0, results.length - 1)));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIdx((i) => Math.max(0, i - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const target = results[activeIdx];
        if (target) {
          router.push(target.url);
          onClose();
        } else if (query.trim()) {
          router.push(`/search?q=${encodeURIComponent(query.trim())}`);
          onClose();
        }
      }
    },
    [activeIdx, results, query, router, onClose]
  );

  if (!open) return null;
  const grouped = groupByType(results);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={isJA ? 'サイト内検索' : 'Site search'}
      className="fixed inset-0 z-[300] flex items-start justify-center pt-[10vh] px-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-dark-bg2 border gold-metallic-search rounded-sm shadow-2xl max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        {/* Input */}
        <div className="flex items-center gap-3 p-4 border-b border-[rgba(212,175,55,0.25)]">
          <SearchIcon className="w-6 h-6 shrink-0" />
          <input
            ref={inputRef}
            type="search"
            role="searchbox"
            aria-label={isJA ? '検索キーワード' : 'Search query'}
            aria-controls="search-results"
            aria-activedescendant={
              results[activeIdx] ? `search-result-${results[activeIdx].id}` : undefined
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              isJA
                ? '記事・アーティスト・レーベル・用語を検索...'
                : 'Search articles, artists, labels, glossary...'
            }
            className="flex-1 bg-transparent border-none text-text-light text-base font-barlow outline-none gold-metallic-placeholder"
          />
          <button
            onClick={onClose}
            aria-label={isJA ? '検索を閉じる' : 'Close search'}
            className="text-text-muted hover:text-text-light transition-colors text-xs font-bebas tracking-widest px-2 py-1 border border-orange-900/30 rounded"
          >
            ESC
          </button>
        </div>

        {/* Hint row */}
        <div className="px-4 py-2 border-b border-orange-900/15 text-xs tracking-widest text-text-muted/70 flex gap-4 flex-wrap">
          <span>↑↓ {isJA ? '選択' : 'navigate'}</span>
          <span>↵ {isJA ? '移動' : 'open'}</span>
          <span>ESC {isJA ? '閉じる' : 'close'}</span>
        </div>

        {/* Results */}
        <div
          id="search-results"
          ref={listRef}
          role="listbox"
          aria-label={isJA ? '検索結果' : 'Search results'}
          className="flex-1 overflow-y-auto"
        >
          {loading && (
            <div className="p-4 text-center text-text-muted text-sm" aria-live="polite">
              {isJA ? '検索中...' : 'Searching...'}
            </div>
          )}
          {!loading && query.trim() && results.length === 0 && (
            <div className="p-6 text-center text-text-muted text-sm" aria-live="polite">
              {isJA
                ? `「${query}」に該当する結果が見つかりませんでした。`
                : `No results for "${query}".`}
            </div>
          )}
          {!loading && !query.trim() && (
            <div className="p-6 text-center text-text-muted text-sm">
              {isJA ? '検索キーワードを入力してください' : 'Type to search the site'}
            </div>
          )}
          {!loading &&
            results.length > 0 &&
            TYPE_ORDER.map((t) => {
              const items = grouped[t];
              if (!items || items.length === 0) return null;
              return (
                <div key={t}>
                  <div className="px-4 pt-3 pb-1 font-bebas text-xs tracking-widest text-accent-orange/70 sticky top-0 bg-dark-bg2 z-10">
                    {isJA ? TYPE_LABELS[t].ja : TYPE_LABELS[t].en} ({items.length})
                  </div>
                  {items.map((r) => {
                    const idx = results.indexOf(r);
                    const active = idx === activeIdx;
                    const title = isJA
                      ? r.titleJa || r.titleEn
                      : r.titleEn || r.titleJa;
                    const excerpt = isJA
                      ? r.excerptJa || r.excerptEn
                      : r.excerptEn || r.excerptJa;
                    return (
                      <Link
                        key={r.id}
                        id={`search-result-${r.id}`}
                        data-idx={idx}
                        href={r.url}
                        onClick={onClose}
                        onMouseEnter={() => setActiveIdx(idx)}
                        role="option"
                        aria-selected={active}
                        className={`flex gap-3 items-start px-4 py-3 border-b border-orange-900/15 transition-colors ${
                          active
                            ? 'bg-accent-orange/15 text-text-light'
                            : 'hover:bg-accent-orange/5 text-text-light/85'
                        }`}
                      >
                        <span className="text-2xl shrink-0" aria-hidden="true">
                          {r.icon || '·'}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="flex items-baseline gap-2">
                            <span className="font-bebas text-sm tracking-widest text-white truncate">
                              {title}
                            </span>
                            {r.flag && <span className="text-xs">{r.flag}</span>}
                          </span>
                          {excerpt && (
                            <span className="block text-xs text-text-light/60 line-clamp-2 mt-1">
                              {excerpt}
                            </span>
                          )}
                        </span>
                        <span className="font-bebas text-xs tracking-widest text-accent-orange/60 shrink-0 self-start mt-1">
                          {isJA ? TYPE_LABELS[r.type].ja : TYPE_LABELS[r.type].en}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
        </div>

        {/* Footer link to full search */}
        {query.trim() && results.length > 0 && (
          <div className="border-t border-orange-900/30 p-3 text-center">
            <Link
              href={`/search?q=${encodeURIComponent(query.trim())}`}
              onClick={onClose}
              className="text-xs tracking-widest font-bebas text-accent-orange hover:underline"
            >
              {isJA
                ? `「${query}」のすべての結果を見る →`
                : `View all results for "${query}" →`}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

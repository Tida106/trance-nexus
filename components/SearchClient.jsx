'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { useTranslation } from '@/lib/useTranslation';
import {
  performSearch,
  groupByType,
  TYPE_ORDER,
  TYPE_LABELS,
} from '@/lib/search';

const SEARCH_BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'Search', ja: '検索' }, href: '/search' },
];

const FILTER_LABELS = {
  ALL: { en: 'ALL', ja: 'すべて' },
  blog: TYPE_LABELS.blog,
  artist: TYPE_LABELS.artist,
  label: TYPE_LABELS.label,
  glossary: TYPE_LABELS.glossary,
};

export default function SearchClient() {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('ALL');

  // Run search whenever the query changes (debounced 150ms).
  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const t = setTimeout(() => {
      performSearch(trimmed, { limit: 200 })
        .then((r) => {
          setResults(r);
          setLoading(false);
        })
        .catch(() => {
          setResults([]);
          setLoading(false);
        });
    }, 150);
    return () => clearTimeout(t);
  }, [query]);

  // Sync URL ?q=... to current query without scrolling.
  useEffect(() => {
    const trimmed = query.trim();
    const url = trimmed
      ? `/search?q=${encodeURIComponent(trimmed)}`
      : '/search';
    // Only push if different from current to avoid history spam.
    const current = `/search${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    if (url !== current) {
      router.replace(url, { scroll: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const grouped = useMemo(() => groupByType(results), [results]);

  const filtered = useMemo(() => {
    if (filter === 'ALL') return results;
    return results.filter((r) => r.type === filter);
  }, [results, filter]);

  const counts = useMemo(() => {
    const out = { ALL: results.length };
    for (const t of TYPE_ORDER) out[t] = grouped[t].length;
    return out;
  }, [results, grouped]);

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-4xl mx-auto">
          <div className="py-8">
            <div className="mb-4">
              <Breadcrumb items={SEARCH_BREADCRUMB} />
            </div>
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {isJA ? 'サイト内検索' : 'Search'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />

            {/* Search input */}
            <div className="flex border border-orange-900/30 rounded overflow-hidden mb-4">
              <span className="text-accent-orange text-xl flex items-center px-4 bg-dark-bg2/80" aria-hidden="true">🔎</span>
              <input
                type="search"
                role="searchbox"
                aria-label={isJA ? '検索キーワード' : 'Search query'}
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  isJA
                    ? '記事・アーティスト・レーベル・用語を検索...'
                    : 'Search articles, artists, labels, glossary...'
                }
                className="flex-1 bg-dark-bg2/80 border-none px-4 py-3 text-text-light font-barlow text-base placeholder-text-muted outline-none"
              />
            </div>

            {/* Type filters */}
            {results.length > 0 && (
              <div className="flex gap-2 flex-wrap mb-4">
                {['ALL', ...TYPE_ORDER].map((id) => {
                  const count = counts[id] || 0;
                  const labels = FILTER_LABELS[id];
                  const isActive = filter === id;
                  return (
                    <button
                      key={id}
                      onClick={() => setFilter(id)}
                      disabled={count === 0 && id !== 'ALL'}
                      className={`font-bebas text-xs tracking-widest px-3 py-1.5 rounded transition-all ${
                        isActive
                          ? 'bg-accent-orange/20 border border-accent-orange text-accent-orange'
                          : count === 0 && id !== 'ALL'
                          ? 'border border-orange-900/15 text-text-muted/40 cursor-not-allowed'
                          : 'border border-orange-900/30 text-text-muted hover:border-accent-orange hover:text-accent-orange'
                      }`}
                    >
                      {isJA ? labels.ja : labels.en}{' '}
                      <span className="opacity-60">({count})</span>
                    </button>
                  );
                })}
              </div>
            )}

            <p className="text-xs text-text-muted tracking-widest" aria-live="polite">
              {loading
                ? isJA
                  ? '検索中...'
                  : 'Searching...'
                : query.trim()
                ? isJA
                  ? `「${query.trim()}」: ${results.length} 件`
                  : `"${query.trim()}": ${results.length} ${results.length === 1 ? 'result' : 'results'}`
                : ''}
            </p>
          </div>

          {/* Empty / placeholder states */}
          {!query.trim() && (
            <div className="bg-dark-bg2/60 border border-orange-900/20 rounded-sm p-8 text-center">
              <p className="text-text-light/65 mb-4">
                {isJA
                  ? '検索キーワードを入力してください。記事25本、アーティスト20名、レーベル20、用語集40を横断検索します。'
                  : 'Enter a search term. We search across 25 articles, 20 artists, 20 labels, and 40 glossary terms.'}
              </p>
              <p className="text-xs text-text-muted tracking-widest">
                {isJA ? 'ヒント: ' : 'Tip: '}
                <span>⌘K / Ctrl+K {isJA ? 'でいつでも検索を起動' : 'opens search anywhere on the site'}</span>
              </p>
            </div>
          )}

          {!loading && query.trim() && results.length === 0 && (
            <div className="bg-dark-bg2/60 border border-orange-900/20 rounded-sm p-8">
              <p className="text-text-light/85 mb-4">
                {isJA
                  ? `「${query}」に該当する結果が見つかりませんでした。`
                  : `We couldn't find anything matching "${query}".`}
              </p>
              <p className="text-text-muted text-sm mb-5">
                {isJA
                  ? '別のキーワードをお試しください。以下のページから興味のあるテーマを探すこともできます：'
                  : 'Try a different keyword, or browse by topic:'}
              </p>
              <div className="flex gap-2 flex-wrap">
                <Link href="/blog" className="text-xs tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all">
                  {isJA ? 'ブログ' : 'BLOG'}
                </Link>
                <Link href="/artists" className="text-xs tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all">
                  {isJA ? 'アーティスト' : 'ARTISTS'}
                </Link>
                <Link href="/labels" className="text-xs tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all">
                  {isJA ? 'レーベル' : 'LABELS'}
                </Link>
                <Link href="/glossary" className="text-xs tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all">
                  {isJA ? '用語集' : 'GLOSSARY'}
                </Link>
                <Link href="/category" className="text-xs tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all">
                  {isJA ? 'カテゴリ' : 'CATEGORIES'}
                </Link>
              </div>
            </div>
          )}

          {/* Results list (filtered) */}
          {filtered.length > 0 && (
            <div className="space-y-3" role="list">
              {filtered.map((r) => {
                const title = isJA ? r.titleJa || r.titleEn : r.titleEn || r.titleJa;
                const excerpt = isJA
                  ? r.excerptJa || r.excerptEn
                  : r.excerptEn || r.excerptJa;
                return (
                  <Link
                    key={r.id}
                    href={r.url}
                    role="listitem"
                    className="group flex gap-4 bg-dark-bg2/60 border border-orange-900/20 rounded-sm p-4 hover:border-accent-orange/50 hover:translate-y-[-2px] transition-all"
                  >
                    <div className="text-3xl shrink-0">{r.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-3 mb-1 flex-wrap">
                        <h3 className="font-bebas text-base tracking-widest text-white group-hover:text-accent-orange transition-colors">
                          {title}
                          {r.flag && <span className="ml-2 text-sm">{r.flag}</span>}
                        </h3>
                        <span className="font-bebas text-xs tracking-widest text-accent-orange/70 shrink-0">
                          {isJA ? TYPE_LABELS[r.type].ja : TYPE_LABELS[r.type].en}
                          {r.date && <span className="ml-2 text-text-muted">· {r.date}</span>}
                        </span>
                      </div>
                      {excerpt && (
                        <p className="text-xs text-text-light/65 leading-relaxed line-clamp-2">
                          {excerpt}
                        </p>
                      )}
                      <div className="text-xs text-text-muted/70 tracking-widest mt-2">
                        {r.url}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

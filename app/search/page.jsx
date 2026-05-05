import { Suspense } from 'react';
import SearchClient from '@/components/SearchClient';

export const metadata = {
  title: 'Search | TRANCE NEXUS',
  description:
    'Search articles, artists, labels, and glossary terms across TRANCE NEXUS.',
  // Search-result pages are not indexed, but we still let crawlers follow
  // links from the page to discover content.
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://trance-nexus.com/search' },
};

// useSearchParams() requires a Suspense boundary in Next 15. Wrapping here
// keeps the page prerenderable as a static shell while the client portion
// hydrates and reads the query string.
function SearchFallback() {
  return (
    <div className="relative z-10 min-h-screen pt-[60px] pb-20 px-12 flex items-center justify-center">
      <div className="text-text-muted text-sm tracking-widest">Loading search…</div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchClient />
    </Suspense>
  );
}

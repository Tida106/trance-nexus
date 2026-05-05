'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

// items: [{ label: { en, ja }, href: string }]
// The last item is the current page — render as plain text, but include href in JSON-LD.
export default function Breadcrumb({ items }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: isJA ? item.label.ja : item.label.en,
      item: `https://trance-nexus.com${item.href}`,
    })),
  };

  const isLast = (i) => i === items.length - 1;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label={isJA ? 'パンくずリスト' : 'Breadcrumb'}>
        <ol className="flex items-center gap-1.5 text-xs text-text-muted tracking-widest font-barlow flex-wrap">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5 min-w-0">
              {i > 0 && (
                <span className="text-orange-900/40 select-none shrink-0">›</span>
              )}
              {isLast(i) ? (
                <span
                  className="text-text-light/45 truncate"
                  aria-current="page"
                >
                  {isJA ? item.label.ja : item.label.en}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-accent-orange transition-colors whitespace-nowrap"
                >
                  {isJA ? item.label.ja : item.label.en}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

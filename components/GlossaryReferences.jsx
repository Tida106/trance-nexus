'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';
import { detectTerms } from '@/data/glossary/index';

// Lightweight auto-linking: scans the post's combined EN+JA text for any
// glossary term name (en, ja, or alias) and renders a list of links to the
// matching glossary entries. Runs on the client because the post body is
// already passed in as plain strings.
export default function GlossaryReferences({ text }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const hits = detectTerms(text);
  if (!hits.length) return null;

  return (
    <section className="mt-12 mb-8 p-5 bg-dark-bg2/60 border border-orange-900/20 rounded-sm">
      <h3 className="font-bebas text-base tracking-widest text-accent-orange mb-3">
        {isJA ? '記事内の用語' : 'Glossary terms in this article'}
      </h3>
      <div className="flex gap-2 flex-wrap">
        {hits.map((t) => (
          <Link
            key={t.slug}
            href={`/glossary/${t.slug}`}
            className="text-xs tracking-widest font-bebas px-2.5 py-1 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
          >
            {isJA ? t.term.ja : t.term.en}
          </Link>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useTranslation } from '@/lib/useTranslation';

// Amazon Associates (Amazon.co.jp) Store ID. Sourced from
// NEXT_PUBLIC_AMAZON_ASSOCIATE_ID; falls back to the production tag so
// the static export still emits a working affiliate URL even if the
// build environment forgot to set the env var.
const ASSOCIATE_ID =
  process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_ID || 'sacredjapan-22';

// Build the canonical /dp/ URL — short, stable, and the form Amazon
// recommends for affiliate deep-links. We avoid the SiteStripe-style
// extras (`linkCode`, `creativeASIN`, `linkId`) because they don't
// affect attribution but add cruft that some ad-blockers strip.
function buildHref(asin) {
  return `https://www.amazon.co.jp/dp/${encodeURIComponent(asin)}?tag=${encodeURIComponent(ASSOCIATE_ID)}`;
}

// Per Google's affiliate-link guidance the rel attribute should include
// `sponsored`. We add `nofollow` for belt-and-braces and the standard
// `noopener noreferrer` for security on target=_blank.
const REL = 'sponsored nofollow noopener noreferrer';

// Props:
//   asin     — 10-char Amazon ASIN (required)
//   title    — visible product title (required)
//   caption  — short editorial line below the title (optional)
//   category — one-word tag rendered as a pill: e.g. 'CDJ', 'Headphones'
//   price    — pre-formatted price string ("¥24,800〜"); shown only as
//              a hint, not a guarantee — Amazon prices change constantly
//              so we never auto-fetch them.
//   compact  — render a single-line variant (used inline in body copy)
//
// Behaviour:
//   - JA-only. Returns null on English pages so we don't ship a JP store
//     link to readers we can't actually monetise yet (Amazon.com support
//     will be added later).
//   - Returns null if asin is missing — protects against half-filled
//     products.js entries during development.
export default function AmazonLink({
  asin,
  title,
  caption,
  category,
  price,
  compact = false,
}) {
  const { language } = useTranslation();

  if (language !== 'ja') return null;
  if (!asin || !title) return null;

  const href = buildHref(asin);

  if (compact) {
    return (
      <a
        href={href}
        target="_blank"
        rel={REL}
        aria-label={`Amazon.co.jpで「${title}」を見る`}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-accent-orange/40 bg-accent-orange/5 text-xs tracking-widest text-accent-orange hover:bg-accent-orange/15 hover:shadow-md transition-all"
      >
        <span aria-hidden="true">🛒</span>
        <span className="font-bebas">{title}</span>
        <span className="text-text-muted">→ Amazon</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel={REL}
      aria-label={`Amazon.co.jpで「${title}」を見る（アフィリエイトリンク）`}
      className="group block bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:border-accent-orange/50 hover:translate-y-[-3px] hover:shadow-xl transition-all"
    >
      {/* Top accent bar — matches the existing card aesthetic across the site. */}
      <div className="h-1.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />

      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          {category && (
            <span className="font-bebas text-[10px] tracking-widest px-2 py-0.5 rounded border border-accent-orange/30 bg-accent-orange/5 text-accent-orange">
              {category}
            </span>
          )}
          <span className="font-bebas text-[10px] tracking-widest text-text-muted shrink-0 ml-auto">
            Amazon.co.jp
          </span>
        </div>

        <h3 className="font-bebas text-lg tracking-widest text-white leading-tight group-hover:text-accent-orange transition-colors">
          {title}
        </h3>

        {caption && (
          <p className="text-xs text-text-light/65 leading-relaxed line-clamp-3">
            {caption}
          </p>
        )}

        <div className="flex items-center justify-between gap-3 mt-1 pt-2 border-t border-orange-900/15">
          {price ? (
            <span className="text-xs tracking-widest text-text-light/70">
              {price}
            </span>
          ) : (
            <span className="text-xs tracking-widest text-text-muted">
              価格をAmazonで確認
            </span>
          )}
          <span className="font-bebas text-xs tracking-widest text-accent-orange group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            <span aria-hidden="true">🛒</span>
            購入を見る →
          </span>
        </div>
      </div>
    </a>
  );
}

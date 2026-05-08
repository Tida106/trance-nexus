'use client';

import { useTranslation } from '@/lib/useTranslation';

// Amazon Associates configuration. The site routes ALL affiliate links
// through amazon.co.jp + the sacredjapan-22 tag, regardless of the
// visitor's UI language — the operator has consolidated affiliate
// activity to a single Japan-store program. The US (.com / -20) tag
// previously used for EN visitors has been retired.
//
// The component still consults useTranslation() — but only to choose
// the display language of the card chrome (labels, aria text). The
// destination URL is the same Japan-store /dp/<ASIN>?tag=sacredjapan-22
// for every visitor.
//
// EN visitors will land on Japanese product pages. That is the
// deliberate UX trade-off of consolidating to a single store program.
const ASSOCIATE_ID =
  process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_ID || 'sacredjapan-22';

const STORE = {
  domain: 'www.amazon.co.jp',
  tag: ASSOCIATE_ID,
  label: 'Amazon.co.jp',
};

// Build the canonical /dp/ URL — short, stable, and the form Amazon
// recommends for affiliate deep-links. We avoid the SiteStripe-style
// extras (`linkCode`, `creativeASIN`, `linkId`) because they don't
// affect attribution but add cruft that some ad-blockers strip.
function buildHref(asin) {
  return `https://${STORE.domain}/dp/${encodeURIComponent(asin)}?tag=${encodeURIComponent(STORE.tag)}`;
}

// Per Google's affiliate-link guidance the rel attribute should include
// `sponsored`. We add `nofollow` for belt-and-braces and the standard
// `noopener noreferrer` for security on target=_blank.
const REL = 'sponsored nofollow noopener noreferrer';

// Props:
//   asin     — 10-char Amazon ASIN (required, must be a JP-store ASIN)
//   title    — visible product title (optional; falls back to a
//              language-specific generic label if omitted)
//   image    — product thumbnail URL (optional). Rendered above the
//              title, 4:3 contained on black.
//   caption  — short editorial line below the title (optional)
//   category — one-word tag rendered as a pill: 'Controller', etc.
//   price    — pre-formatted price hint ('¥24,800〜'). Editorial only.
//   compact  — single-line inline variant for use inside body copy
//
// Behaviour:
//   - All visitors are routed to amazon.co.jp + sacredjapan-22.
//   - UI labels follow useTranslation().language (JA chrome for JA
//     visitors, EN chrome for EN visitors), but both link to the
//     same JP-store URL.
//   - Returns null if asin is missing — protects against half-filled
//     products.js entries during development.
//   - target=_blank with rel="sponsored nofollow noopener noreferrer"
//     per Google's affiliate-link guidance.
export default function AmazonLink({
  asin,
  title,
  image,
  caption,
  category,
  price,
  compact = false,
}) {
  const { language } = useTranslation();

  if (!asin) return null;

  const isJA = language === 'ja';

  const fallbackTitle = isJA ? 'Amazon.co.jpで見る' : 'See on Amazon Japan';
  const displayTitle = title || fallbackTitle;
  const href = buildHref(asin);

  const ariaLabel = isJA
    ? `Amazon.co.jpで「${displayTitle}」を見る（アフィリエイトリンク）`
    : `See ${displayTitle} on Amazon Japan (affiliate link)`;
  const compactAriaLabel = isJA
    ? `Amazon.co.jpで「${displayTitle}」を見る`
    : `See ${displayTitle} on Amazon Japan`;
  const ctaLabel = isJA ? '購入を見る →' : 'View on Amazon →';
  const noPriceLabel = isJA ? '価格をAmazonで確認' : 'Check price on Amazon';

  if (compact) {
    return (
      <a
        href={href}
        target="_blank"
        rel={REL}
        aria-label={compactAriaLabel}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-accent-orange/40 bg-accent-orange/5 text-xs tracking-widest text-accent-orange hover:bg-accent-orange/15 hover:shadow-md transition-all"
      >
        <span aria-hidden="true">🛒</span>
        <span className="font-bebas">{displayTitle}</span>
        <span className="text-text-muted">→ {STORE.label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel={REL}
      aria-label={ariaLabel}
      className="group block bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:border-accent-orange/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent-orange/10 transition-all duration-200"
    >
      {/* Top accent bar — matches the existing card aesthetic across the site. */}
      <div className="h-1.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />

      {image && (
        <div className="aspect-[4/3] bg-black flex items-center justify-center overflow-hidden border-b border-orange-900/15">
          {/* Native <img> here, not next/image: this is a static export with
              images.unoptimized=true, so next/image would buy us nothing.
              loading=lazy because product cards usually sit below the fold. */}
          <img
            src={image}
            alt={displayTitle}
            loading="lazy"
            decoding="async"
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          {category && (
            <span className="font-bebas text-[10px] tracking-widest px-2 py-0.5 rounded border border-accent-orange/30 bg-accent-orange/5 text-accent-orange">
              {category}
            </span>
          )}
          <span className="font-bebas text-[10px] tracking-widest text-text-muted shrink-0 ml-auto">
            {STORE.label}
          </span>
        </div>

        <h3 className="font-bebas text-lg tracking-widest text-white leading-tight group-hover:text-accent-orange transition-colors">
          {displayTitle}
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
              {noPriceLabel}
            </span>
          )}
          <span className="font-bebas text-xs tracking-widest text-accent-orange group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            <span aria-hidden="true">🛒</span>
            {ctaLabel}
          </span>
        </div>
      </div>
    </a>
  );
}

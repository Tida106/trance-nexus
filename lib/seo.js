// Shared SEO helpers for route metadata.
import fs from 'fs';
import path from 'path';

const SITE = 'https://trance-nexus.com';
export const DEFAULT_OG = '/og-image.png';

// Use a page-specific OG image only when the file actually exists in
// /public; otherwise fall back to the site-wide image so shares never
// point at a 404.
export function ogImagePath(relPath) {
  if (!relPath) return DEFAULT_OG;
  if (/^https?:\/\//.test(relPath)) return relPath;
  const file = path.join(process.cwd(), 'public', relPath.replace(/^\//, ''));
  return fs.existsSync(file) ? relPath : DEFAULT_OG;
}

export function defaultOgImages(alt = 'TRANCE NEXUS — Trance Music Portal') {
  return [{ url: DEFAULT_OG, width: 1200, height: 630, alt }];
}

// Metadata for top-level hub pages. Each hub gets its own title,
// description, canonical and hreflang (all pointing at itself).
export function hubMeta({ path: p, title, description, ogTitle }) {
  const url = `${SITE}${p}`;
  const t = ogTitle || title.replace(/ \| TRANCE NEXUS$/, '');
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { en: url, ja: url, 'x-default': url },
    },
    openGraph: {
      title: t,
      description,
      url,
      type: 'website',
      siteName: 'TRANCE NEXUS',
      locale: 'en_US',
      alternateLocale: ['ja_JP'],
      images: defaultOgImages(t),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@trance_nexus',
      title: t,
      description,
      images: [DEFAULT_OG],
    },
  };
}

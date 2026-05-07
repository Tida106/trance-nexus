import './globals.css';
import { LanguageProvider } from '@/lib/useTranslation';
import Script from 'next/script';
import DeferredChrome from '@/components/DeferredChrome';
import { Bebas_Neue, Barlow_Condensed, Noto_Sans_JP } from 'next/font/google';

// Self-hosted via next/font: eliminates the render-blocking @import to
// fonts.googleapis.com and the follow-on hop to fonts.gstatic.com. Fonts
// are inlined into a same-origin CSS file, automatically preloaded, and
// emit zero CLS thanks to the size-adjust fallback metrics.
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
});
const barlow = Barlow_Condensed({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
});
// Noto Sans JP is large; never preload it. Browsers fetch it only on pages
// that actually render Japanese characters, falling back to system JP fonts
// (Hiragino / Yu Gothic / Meiryo) until then. This keeps the first paint
// fast on English pages without hurting Japanese readability.
const notoJP = Noto_Sans_JP({
  weight: ['400', '700'],
  preload: false,
  display: 'swap',
  variable: '--font-noto-jp',
});

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata = {
  title: 'TRANCE NEXUS — Trance Music Portal',
  description: 'Comprehensive trance music portal covering artists, radio shows, setlists, and events worldwide — 日本最大のトランスミュージックポータル',
  metadataBase: new URL('https://trance-nexus.com'),
  manifest: `${BASE_PATH}/manifest.webmanifest`,
  applicationName: 'TRANCE NEXUS',
  appleWebApp: {
    capable: true,
    title: 'TRANCE NEXUS',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.ico`, sizes: 'any' },
      { url: `${BASE_PATH}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${BASE_PATH}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${BASE_PATH}/icon-192.png`, sizes: '192x192', type: 'image/png' },
      { url: `${BASE_PATH}/icon-512.png`, sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: `${BASE_PATH}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    siteName: 'TRANCE NEXUS',
    locale: 'en_US',
    alternateLocale: ['ja_JP'],
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TRANCE NEXUS — Trance Music Portal' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@trancenexus',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'ja': '/',
      'x-default': '/',
    },
    types: {
      'application/rss+xml': [
        { url: '/rss.xml', title: 'TRANCE NEXUS — Blog' },
        { url: '/rss.en.xml', title: 'TRANCE NEXUS — Blog (English)' },
        { url: '/rss.ja.xml', title: 'TRANCE NEXUS — Blog (日本語)' },
      ],
      'application/atom+xml': [
        { url: '/atom.xml', title: 'TRANCE NEXUS — Blog (Atom)' },
      ],
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#0d0d0d' },
    { media: '(prefers-color-scheme: light)', color: '#f97316' },
  ],
};

export default function RootLayout({ children }) {
  const fontVars = `${bebas.variable} ${barlow.variable} ${notoJP.variable}`;
  // Initial render uses lang="en" to match LanguageProvider's initial state.
  // Once the client hydrates and reads the saved preference from
  // localStorage, useTranslation flips document.documentElement.lang. The
  // suppressHydrationWarning silences the false-positive React would log
  // if the user previously chose Japanese (the post-hydration update is
  // intentional — we serve the same static HTML to every visitor).
  return (
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <head>
        {/* Logo is the brand mark in the fixed header on every page — it
            is part of the LCP candidate set on most routes, so we preload
            it from the document head. fetchpriority=high beats the default
            "low" assigned to lazy-painted images. */}
        <link
          rel="preload"
          as="image"
          href={`${BASE_PATH}/logo.png`}
          fetchPriority="high"
        />

        {/* Open early TCP/TLS to embed origins so the first iframe paint is
            not gated on a fresh handshake. dns-prefetch is the cheap fallback
            for browsers that ignore preconnect. */}
        <link rel="preconnect" href="https://open.spotify.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.youtube-nocookie.com" crossOrigin="" />
        <link rel="preconnect" href="https://w.soundcloud.com" crossOrigin="" />
        <link rel="preconnect" href="https://embed.music.apple.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://open.spotify.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://w.soundcloud.com" />
        <link rel="dns-prefetch" href="https://embed.music.apple.com" />

        {/* Google Search Console — replace content value after verifying ownership */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" /> */}

        <meta name="impact-site-verification" value="81c79ac4-9a92-4da2-bebe-deaaf84fac7a" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'TRANCE NEXUS',
              url: 'https://trance-nexus.com',
              description: 'Trance Music Information Portal covering artists, radio shows, setlists, and events worldwide',
              email: 'hello.sacredjapan@gmail.com',
              inLanguage: ['en', 'ja'],
            }),
          }}
        />

        {/* AdSense — lazyOnload defers until after the load event so it does
            not contend with first paint or hydration. */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4224563062633828"
          data-ad-client="ca-pub-4224563062633828"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className="bg-dark-bg text-text-light">
        <a href="#main" className="skip-link">Skip to content</a>
        <LanguageProvider>
          <div id="main" tabIndex={-1}>
            {children}
          </div>
          <DeferredChrome />
        </LanguageProvider>
      </body>
    </html>
  );
}

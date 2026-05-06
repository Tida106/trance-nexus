import './globals.css';
import { LanguageProvider } from '@/lib/useTranslation';
import Script from 'next/script';
import CookieBanner from '@/components/CookieBanner';
import PWARegister from '@/components/PWARegister';

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
      { url: `${BASE_PATH}/icons/favicon-32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${BASE_PATH}/icons/favicon-16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${BASE_PATH}/icons/icon-192.png`, sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: `${BASE_PATH}/icons/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    siteName: 'TRANCE NEXUS',
    locale: 'en_US',
    alternateLocale: ['ja_JP'],
    images: [{ url: '/og-default.png', width: 1200, height: 630, alt: 'TRANCE NEXUS — Trance Music Portal' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@trancenexus',
    images: ['/og-default.png'],
  },
  alternates: {
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
  return (
    <html lang="ja">
      <head>
        {/* Google Search Console — replace content value after verifying ownership */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" /> */}

        <meta name="impact-site-verification" value="93a31d8c-4695-4c90-a524-505fd48b6968" />

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

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4224563062633828"
          data-ad-client="ca-pub-4224563062633828"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="bg-dark-bg text-text-light">
        <LanguageProvider>
          {children}
          <CookieBanner />
          <PWARegister />
        </LanguageProvider>
      </body>
    </html>
  );
}

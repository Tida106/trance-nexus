import './globals.css';
import { LanguageProvider } from '@/lib/useTranslation';
import Script from 'next/script';

export const metadata = {
  title: 'TRANCE NEXUS — Trance Music Portal',
  description: 'Comprehensive trance music portal covering artists, radio shows, setlists, and events worldwide — 日本最大のトランスミュージックポータル',
  metadataBase: new URL('https://trance-nexus.com'),
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
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
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
        </LanguageProvider>
      </body>
    </html>
  );
}

import './globals.css';
import { LanguageProvider } from '@/lib/useTranslation';
import Script from 'next/script';

export const metadata = {
  title: 'TRANCE NEXUS — Trance Music Portal',
  description: 'アーティスト・ラジオ番組・セットリスト・フェス情報を網羅した日本最大のトランスミュージックポータル',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID"
          data-ad-client="ca-pub-YOUR_ADSENSE_ID"
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

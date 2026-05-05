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
        <meta name="impact-site-verification" value="b4ca228b-ba5d-49e0-8cc4-dce3ddc1a7d9" />
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

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
        <meta name="impact-site-verification" value="93a31d8c-4695-4c90-a524-505fd48b6968" />
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

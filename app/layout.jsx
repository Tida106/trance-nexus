import './globals.css';

export const metadata = {
  title: 'TRANCE NEXUS — Trance Music Portal',
  description: 'アーティスト・ラジオ番組・セットリスト・フェス情報を網羅した日本最大のトランスミュージックポータル',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-dark-bg text-text-light">
        {children}
      </body>
    </html>
  );
}

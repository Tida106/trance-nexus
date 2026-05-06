'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  const { t, language } = useTranslation();
  const isJA = language === 'ja';

  return (
    <footer className="relative z-10 bg-black/98 border-t-2 border-accent-orange py-10 px-12 flex flex-col items-center gap-3">
      <div className="font-bebas text-2xl tracking-widest text-accent-orange drop-shadow-lg">
        TRANCE NEXUS
      </div>
      <div className="w-full max-w-md mt-1 mb-2">
        <p className="text-xs tracking-widest text-text-muted text-center mb-2">
          {isJA ? '月1回の最新トランス情報をメールで' : 'MONTHLY TRANCE DIGEST IN YOUR INBOX'}
        </p>
        <NewsletterForm variant="compact" />
      </div>
      <p className="text-xs text-text-muted tracking-widest text-center">
        {t('footer.copyright')}<br />
        {t('footer.affiliates')}
      </p>
      <div className="flex gap-6 mt-1 flex-wrap justify-center">
        <Link
          href="/artists"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? 'アーティスト' : 'Artists'}
        </Link>
        <Link
          href="/labels"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? 'レーベル' : 'Labels'}
        </Link>
        <Link
          href="/blog"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? 'ブログ' : 'Blog'}
        </Link>
        <Link
          href="/category"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? 'カテゴリ' : 'Categories'}
        </Link>
        <Link
          href="/tag"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? 'タグ' : 'Tags'}
        </Link>
        <Link
          href="/glossary"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? '用語集' : 'Glossary'}
        </Link>
        <Link
          href="/timeline"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? 'タイムライン' : 'Timeline'}
        </Link>
        <Link
          href="/about"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? '運営者情報' : 'About'}
        </Link>
        <Link
          href="/privacy"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? 'プライバシーポリシー' : 'Privacy Policy'}
        </Link>
        <Link
          href="/cookies"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? 'Cookieポリシー' : 'Cookies'}
        </Link>
        <Link
          href="/dmca"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          DMCA
        </Link>
        <Link
          href="/terms"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? '利用規約' : 'Terms'}
        </Link>
        <Link
          href="/contact"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? 'お問い合わせ' : 'Contact'}
        </Link>
      </div>
      <div className="flex gap-4 mt-2 items-center">
        <a
          href={isJA ? '/rss.ja.xml' : '/rss.en.xml'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isJA ? `RSSフィード（${isJA ? '日本語' : '英語'}）` : `RSS feed (${isJA ? 'Japanese' : 'English'})`}
          className="inline-flex items-center gap-1.5 text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
          title={isJA ? '日本語RSSフィード' : 'English RSS feed'}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3.43 5.4c0-.78.62-1.4 1.4-1.4C13.46 4 21 11.54 21 19.97c0 .78-.62 1.4-1.4 1.4-.78 0-1.4-.62-1.4-1.4 0-7.15-5.85-13-13-13-.78 0-1.4-.62-1.4-1.4zm0 6.34c0-.78.62-1.4 1.4-1.4C9.99 10.34 14 14.36 14 19.97c0 .78-.62 1.4-1.4 1.4-.78 0-1.4-.62-1.4-1.4 0-3.93-2.69-6.83-6.36-6.83-.78 0-1.4-.62-1.4-1.4zm2.31 6.31c0-1.05.85-1.9 1.9-1.9s1.9.85 1.9 1.9-.85 1.91-1.9 1.91-1.9-.86-1.9-1.91z" />
          </svg>
          {isJA ? 'RSS（日本語）' : 'RSS (English)'}
        </a>
        <a
          href={isJA ? '/rss.en.xml' : '/rss.ja.xml'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isJA ? 'RSSフィード（英語）' : 'RSS feed (Japanese)'}
          className="text-xs tracking-widest text-text-muted/70 hover:text-accent-orange transition-colors"
        >
          {isJA ? '/ EN' : '/ JA'}
        </a>
        <a
          href="/atom.xml"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Atom feed"
          className="text-xs tracking-widest text-text-muted/70 hover:text-accent-orange transition-colors"
        >
          / ATOM
        </a>
      </div>
    </footer>
  );
}

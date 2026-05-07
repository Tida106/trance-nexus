'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';
import SearchTrigger from './SearchTrigger';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Navigation() {
  const { t, language, switchLanguage } = useTranslation();

  return (
    <nav
      aria-label={t('nav.artists') === 'アーティスト' ? 'グローバルナビゲーション' : 'Primary navigation'}
      className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-black/96 backdrop-blur-xl border-b-2 border-accent-orange flex items-center justify-between px-12"
    >
      {/* Brand logo. The link doubles as a "back to home" affordance, which
          users have come to expect from a header logo. width/height are
          declared so the row reserves space and avoids CLS while the PNG
          decodes; sharpe-rendered logo.png is 1024×1024 (1:1). */}
      <Link
        href="/"
        aria-label="TRANCE NEXUS — home"
        className="flex items-center"
      >
        <img
          src={`${BASE_PATH}/logo.png`}
          alt="TRANCE NEXUS"
          width={48}
          height={48}
          decoding="async"
          fetchPriority="high"
          className="h-12 w-auto block"
        />
      </Link>
      <div className="flex gap-0 items-center">
        {[
          { label: t('nav.artists'), href: '#artist' },
          { label: t('nav.radio'), href: '#radio' },
          { label: t('nav.setlists'), href: '#setlist' },
          { label: t('nav.events'), href: '#events' },
        ].map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="font-bebas text-sm tracking-widest text-text-muted px-5 h-[60px] leading-[60px] block border-l border-orange-900/20 hover:text-accent-orange hover:bg-orange-900/10 transition-all relative group"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        ))}
        <SearchTrigger />
        <div className="border-l border-orange-900/20 px-5 h-[60px] leading-[60px] flex gap-2">
          <button
            type="button"
            onClick={() => switchLanguage('en')}
            aria-label="Switch to English"
            aria-pressed={language === 'en'}
            className={`font-bebas text-sm tracking-widest transition-all ${
              language === 'en'
                ? 'text-accent-orange drop-shadow-lg'
                : 'text-text-muted hover:text-accent-orange'
            }`}
          >
            EN
          </button>
          <span aria-hidden="true" className="text-text-muted/30">|</span>
          <button
            type="button"
            onClick={() => switchLanguage('ja')}
            aria-label="日本語に切り替え"
            aria-pressed={language === 'ja'}
            className={`font-bebas text-sm tracking-widest transition-all ${
              language === 'ja'
                ? 'text-accent-orange drop-shadow-lg'
                : 'text-text-muted hover:text-accent-orange'
            }`}
          >
            JA
          </button>
        </div>
      </div>
    </nav>
  );
}

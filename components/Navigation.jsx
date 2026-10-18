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
      className="fixed top-0 left-0 right-0 z-50 h-[64px] md:h-[84px] bg-dark-header/96 backdrop-blur-xl border-b-2 border-accent-orange flex items-center justify-between gap-2 px-3 md:px-12"
    >
      {/* Brand logo. The link doubles as a "back to home" affordance, which
          users have come to expect from a header logo. width/height are
          declared so the row reserves space and avoids CLS while the PNG
          decodes; sharpe-rendered logo.png is 1024×1024 (1:1). */}
      <Link
        href="/"
        aria-label="TRANCE NEXUS — home"
        className="flex items-center justify-center shrink-0 h-[56px] md:h-[84px] px-3 md:px-4 rounded-xl border border-[rgba(212,175,55,0.6)]"
        style={{ background: 'linear-gradient(145deg,#FFFFFF 0%,#F0F2F7 40%,#E2E6F0 100%)', boxShadow: '0 2px 12px rgba(180,186,200,0.4), inset 0 1px 0 rgba(255,255,255,0.9)' }}
      >
        <img
          src={`${BASE_PATH}/logo.svg`}
          alt="TRANCE NEXUS"
          width={300}
          height={84}
          decoding="async"
          fetchPriority="high"
          style={{ height: '100%', width: 'auto', display: 'block', objectFit: 'contain' }}
        />
      </Link>
      <div className="flex gap-0 items-center min-w-0 overflow-x-auto nav-scroll">
        {/* All primary nav items point at real Next.js routes (not
            in-page #hashes) so the bar works from every page, not just
            the homepage. The child <span> carries the gold gradient so
            the parent <Link>'s hover-bg utility doesn't conflict with
            the background-clip:text on the label. */}
        {[
          { label: t('nav.artists'), href: '/artists' },
          { label: t('nav.radio'), href: '/radio' },
          { label: t('nav.events'), href: '/events' },
          { label: t('nav.about'), href: '/about' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 px-2 sm:px-2.5 md:px-5 h-[64px] leading-[64px] md:h-[84px] md:leading-[84px] block border-l border-[rgba(212,175,55,0.3)] hover:bg-[rgba(212,175,55,0.06)] transition-colors relative group"
          >
            <span className="font-bebas text-xs md:text-sm tracking-wider md:tracking-widest gold-metallic-nav">
              {link.label}
            </span>
            <span className="absolute bottom-0 left-0 right-0 h-0.5 gold-metallic-underline scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        ))}
        <SearchTrigger />
        <div className="shrink-0 border-l border-[rgba(212,175,55,0.3)] px-2 sm:px-2.5 md:px-5 h-[64px] leading-[64px] md:h-[84px] md:leading-[84px] flex gap-1.5 md:gap-2">
          <button
            type="button"
            onClick={() => switchLanguage('en')}
            aria-label="Switch to English"
            aria-pressed={language === 'en'}
            className={`font-bebas text-sm tracking-widest transition-all ${
              language === 'en' ? 'gold-metallic-nav gold-metallic-nav-active' : 'gold-metallic-nav'
            }`}
          >
            EN
          </button>
          <span aria-hidden="true" className="text-[rgba(212,175,55,0.4)]">|</span>
          <button
            type="button"
            onClick={() => switchLanguage('ja')}
            aria-label="日本語に切り替え"
            aria-pressed={language === 'ja'}
            className={`font-bebas text-sm tracking-widest transition-all ${
              language === 'ja' ? 'gold-metallic-nav gold-metallic-nav-active' : 'gold-metallic-nav'
            }`}
          >
            JP
          </button>
        </div>
      </div>
    </nav>
  );
}

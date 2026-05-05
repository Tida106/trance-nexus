'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function Navigation() {
  const { t, language, switchLanguage } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-black/96 backdrop-blur-xl border-b-2 border-accent-orange flex items-center justify-between px-12">
      <div className="font-bebas text-2xl tracking-widest text-accent-orange drop-shadow-lg">
        TRANCE<span className="text-accent-red">NEXUS</span>
      </div>
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
        <div className="border-l border-orange-900/20 px-5 h-[60px] leading-[60px] flex gap-2">
          <button
            onClick={() => switchLanguage('en')}
            className={`font-bebas text-sm tracking-widest transition-all ${
              language === 'en'
                ? 'text-accent-orange drop-shadow-lg'
                : 'text-text-muted hover:text-accent-orange'
            }`}
          >
            EN
          </button>
          <span className="text-text-muted/30">|</span>
          <button
            onClick={() => switchLanguage('ja')}
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

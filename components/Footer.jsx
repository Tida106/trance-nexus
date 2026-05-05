'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

export default function Footer() {
  const { t, language } = useTranslation();
  const isJA = language === 'ja';

  return (
    <footer className="relative z-10 bg-black/98 border-t-2 border-accent-orange py-10 px-12 flex flex-col items-center gap-3">
      <div className="font-bebas text-2xl tracking-widest text-accent-orange drop-shadow-lg">
        TRANCE NEXUS
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
          href="/glossary"
          className="text-xs tracking-widest text-text-muted hover:text-accent-orange transition-colors"
        >
          {isJA ? '用語集' : 'Glossary'}
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
    </footer>
  );
}

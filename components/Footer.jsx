'use client';

import { useTranslation } from '@/lib/useTranslation';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 bg-black/98 border-t-2 border-accent-orange py-10 px-12 flex flex-col items-center gap-3">
      <div className="font-bebas text-2xl tracking-widest text-accent-orange drop-shadow-lg">
        TRANCE NEXUS
      </div>
      <p className="text-xs text-text-muted tracking-widest text-center">
        {t('footer.copyright')}<br />
        {t('footer.affiliates')}
      </p>
    </footer>
  );
}

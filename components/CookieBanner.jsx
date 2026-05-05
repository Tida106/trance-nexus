'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

const STORAGE_KEY = 'tn-cookie-consent';

function loadGA(gaId) {
  if (!gaId || typeof window === 'undefined') return;
  if (document.getElementById('tn-ga-script')) return;

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', gaId, { anonymize_ip: true });

  // Dynamically inject gtag.js
  const s = document.createElement('script');
  s.id = 'tn-ga-script';
  s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  s.async = true;
  document.head.appendChild(s);
}

export default function CookieBanner() {
  const { t, language } = useTranslation();
  const isJA = language === 'ja';
  // null = not yet determined (hide banner until localStorage checked)
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'accepted') {
      setConsent('accepted');
      loadGA(process.env.NEXT_PUBLIC_GA_ID);
    } else if (saved === 'declined') {
      setConsent('declined');
    } else {
      setConsent('pending'); // show banner
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
    loadGA(process.env.NEXT_PUBLIC_GA_ID);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setConsent('declined');
  }

  // Don't render until client-side check completes, or if already decided
  if (consent !== 'pending') return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={isJA ? 'Cookie同意確認' : 'Cookie consent'}
      className="fixed bottom-0 left-0 right-0 z-[200] bg-black/97 border-t-2 border-accent-orange/40 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        {/* Text */}
        <p className="flex-1 text-sm text-text-muted leading-relaxed">
          {isJA ? (
            <>
              当サイトはGoogle Analytics（アクセス解析）およびGoogle AdSense（広告配信）のためにCookieを使用しています。
              詳しくは{' '}
              <Link href="/privacy" className="text-accent-orange hover:underline">
                プライバシーポリシー
              </Link>
              {' '}をご確認ください。
            </>
          ) : (
            <>
              This site uses cookies for Google Analytics (analytics) and Google AdSense (advertising).
              See our{' '}
              <Link href="/privacy" className="text-accent-orange hover:underline">
                Privacy Policy
              </Link>
              {' '}for details.
            </>
          )}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 shrink-0">
          <button
            onClick={accept}
            className="font-bebas text-sm tracking-widest px-6 py-2 bg-accent-orange text-black hover:bg-accent-amber transition-colors rounded"
          >
            {isJA ? '同意する' : 'Accept'}
          </button>
          <button
            onClick={decline}
            className="font-bebas text-sm tracking-widest px-6 py-2 border border-orange-900/40 text-text-muted hover:text-text-light hover:border-text-muted transition-colors rounded"
          >
            {isJA ? '拒否する' : 'Decline'}
          </button>
        </div>
      </div>
    </div>
  );
}

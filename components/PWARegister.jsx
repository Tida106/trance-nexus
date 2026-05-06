'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from '@/lib/useTranslation';

// Registers the service worker on mount and renders an unobtrusive
// "Install app" prompt when the browser fires beforeinstallprompt.
//
// Implementation notes:
// - The SW path includes BASE_PATH so it works under both / and /trance-nexus.
// - The install prompt is not auto-shown (Chrome/Edge dispatch it once and
//   then suppress for ~90 days). We capture the deferred event and show our
//   own button so the user can install on demand. Dismissing the button
//   stores a flag in localStorage so it does not reappear for 30 days.
// - In standalone mode (already installed) we render nothing.

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
const DISMISS_KEY = 'tn_install_dismiss_until';

export default function PWARegister() {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!('serviceWorker' in navigator)) return;

    // Register on load to avoid contending with first-paint.
    const onLoad = () => {
      const swUrl = `${BASE_PATH}/sw.js`;
      navigator.serviceWorker.register(swUrl, { scope: `${BASE_PATH}/` }).catch((err) => {
        // SW failure is non-fatal — site works without it. Log so we notice
        // in the dev console without blowing up the page for users.
        console.warn('[pwa] service worker registration failed', err);
      });
    };
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad, { once: true });
    return () => window.removeEventListener('load', onLoad);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Already in standalone (added to home screen) → nothing to prompt.
    const standalone =
      window.matchMedia?.('(display-mode: standalone)').matches ||
      window.navigator.standalone === true;
    if (standalone) {
      setInstalled(true);
      return;
    }

    // Honour user's prior dismissal.
    const until = Number(localStorage.getItem(DISMISS_KEY) || '0');
    if (until && Date.now() < until) return;

    function onBeforeInstallPrompt(e) {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowButton(true);
    }
    function onAppInstalled() {
      setShowButton(false);
      setInstalled(true);
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.addEventListener('appinstalled', onAppInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  async function handleInstall() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    try {
      await deferredPrompt.userChoice;
    } catch {
      /* user dismissed — fall through */
    }
    setDeferredPrompt(null);
    setShowButton(false);
  }

  function handleDismiss() {
    // Hide for 30 days.
    const thirtyDays = 30 * 24 * 60 * 60 * 1000;
    localStorage.setItem(DISMISS_KEY, String(Date.now() + thirtyDays));
    setShowButton(false);
  }

  if (installed || !showButton) return null;

  return (
    <div
      role="dialog"
      aria-label={isJA ? 'アプリとしてインストール' : 'Install as app'}
      className="fixed bottom-4 right-4 z-50 max-w-xs bg-dark-bg2/95 backdrop-blur border border-accent-orange/40 rounded-sm shadow-2xl p-4 flex flex-col gap-2"
    >
      <div className="font-bebas text-sm tracking-widest text-accent-orange">
        {isJA ? 'アプリとして追加' : 'INSTALL TRANCE NEXUS'}
      </div>
      <p className="text-xs text-text-light/75 leading-relaxed">
        {isJA
          ? 'ホーム画面に追加してオフラインでも記事を読めるようにします。'
          : 'Add to your home screen to read articles offline and launch faster.'}
      </p>
      <div className="flex gap-2 mt-1">
        <button
          type="button"
          onClick={handleInstall}
          className="font-bebas text-xs tracking-widest px-3 py-2 rounded border border-accent-orange bg-accent-orange/15 text-accent-orange hover:bg-accent-orange/25 transition-all"
        >
          {isJA ? 'インストール' : 'INSTALL'}
        </button>
        <button
          type="button"
          onClick={handleDismiss}
          className="font-bebas text-xs tracking-widest px-3 py-2 rounded border border-orange-900/30 text-text-muted hover:text-text-light transition-all"
          aria-label={isJA ? '閉じる' : 'Dismiss'}
        >
          {isJA ? 'あとで' : 'NOT NOW'}
        </button>
      </div>
    </div>
  );
}

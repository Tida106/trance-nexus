'use client';

import dynamic from 'next/dynamic';

// Both components render nothing on the first paint (CookieBanner waits
// for a localStorage check; PWARegister waits for beforeinstallprompt).
// Keeping them in their own chunk means the main bundle is smaller and
// they only ship to clients that actually exercise the features.
const CookieBanner = dynamic(() => import('./CookieBanner'), { ssr: false });
const PWARegister  = dynamic(() => import('./PWARegister'),  { ssr: false });

export default function DeferredChrome() {
  return (
    <>
      <CookieBanner />
      <PWARegister />
    </>
  );
}

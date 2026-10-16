'use client';

// Time-limited ADE 2026 promo banner for the homepage. Hidden at build time
// once ADE has ended (build date > END_DATE) and also client-side after the
// end timestamp, so it disappears on its own without a code change.

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from '@/lib/useTranslation';

const START = Date.parse('2026-10-21T00:00:00+02:00');
const END = Date.parse('2026-10-26T06:00:00+01:00');
const END_DATE = '2026-10-25';

const DAYS = [
  { en: 'WED 21', ja: '10/21 水', items: [
    { label: 'Armin van Buuren & Benwal', href: '/blog/armin-van-buuren-ade-2026-gashouder' },
    { label: 'In Trance We Trust', href: '/blog/in-trance-we-trust-ade-2026' },
  ] },
  { en: 'THU 22', ja: '10/22 木', items: [
    { label: 'AVA Recordings 20 Years', href: '/blog/ava-recordings-20-years-ade-2026' },
  ] },
  { en: 'FRI 23', ja: '10/23 金', items: [
    { label: 'Luminosity · This Is Trance!', href: '/blog/luminosity-ade-2026' },
  ] },
  { en: 'SAT 24', ja: '10/24 土', items: [
    { label: 'Paul van Dyk · Melkweg', href: '/blog/paul-van-dyk-ade-2026-melkweg' },
    { label: 'Find Your Harmony 500', href: '/blog/find-your-harmony-500-ade-2026' },
    { label: 'Luminosity ADE Rave', href: '/blog/luminosity-ade-2026' },
  ] },
];


// Fireworks: deterministic layout (seeded) so prerender and hydration match.
function rng(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
const FW_COLORS = ['#FF6FB5', '#3FD6E8', '#F4D35E', '#FF9A3C', '#B28DFF', '#5EE6A8', '#FFFFFF'];
const FW_SPOTS = [[12, 30], [34, 18], [58, 28], [80, 16], [92, 42], [24, 62], [70, 58]];
const FIREWORKS = (() => {
  const r = rng(2026102);
  return FW_SPOTS.map(([x, y], k) => {
    const t = `${(3.4 + r() * 2).toFixed(2)}s`;
    const dl = `${(k * 0.7 + r() * 0.5).toFixed(2)}s`;
    const c1 = FW_COLORS[Math.floor(r() * FW_COLORS.length)];
    const c2 = FW_COLORS[Math.floor(r() * FW_COLORS.length)];
    const rad = 62 + r() * 36;
    const n = 26;
    const parts = Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2;
      const rr = rad * (0.75 + r() * 0.3);
      return { c: i % 2 ? c1 : c2, x: `${(Math.cos(a) * rr).toFixed(1)}px`, y: `${(Math.sin(a) * rr + 12).toFixed(1)}px` };
    });
    return { x: `${x}%`, y: `${y}%`, t, dl, parts };
  });
})();

function Fireworks() {
  return (
    <div className="ade-fireworks" aria-hidden="true">
      {FIREWORKS.map((f, k) => (
        <div key={k}>
          <div className="ade-trail" style={{ left: f.x, top: f.y, '--t': f.t, '--dl': f.dl }} />
          <div className="ade-fw" style={{ left: f.x, top: f.y }}>
            {f.parts.map((p, i) => (
              <i key={i} style={{ '--c': p.c, '--x': p.x, '--y': p.y, '--t': f.t, '--dl': f.dl }} />
            ))}
            <b style={{ '--t': f.t, '--dl': f.dl }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function parts(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60) };
}
const pad = (n) => String(n).padStart(2, '0');

export default function AdeBanner() {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(id);
  }, []);

  const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE || '';
  if (buildDate && buildDate > END_DATE) return null;
  if (now !== null && now > END) return null;

  const live = now !== null && now >= START;
  const c = now !== null ? parts(START - now) : null;

  return (
    <section aria-label="Amsterdam Dance Event 2026" className="ade-band relative z-10 px-4 md:px-10 pt-2 pb-14">
      <div className="ade-banner max-w-7xl mx-auto">
        <Fireworks />
        <div className="ade-sweep" aria-hidden="true" />
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="ade-tag">AMSTERDAM DANCE EVENT · 21–25 OCT 2026</span>
            <h2 className="font-bebas text-4xl md:text-5xl tracking-wider leading-none mt-2 mb-1 text-[#F4E5A8]">
              YEAH!! {live ? <>IT&rsquo;S <span className="text-[#FDBA74]">ADE</span> WEEK</> : <>READY FOR <span className="text-[#FDBA74]">ADE?</span></>}
            </h2>
            <p className="text-base text-white/90">
              {isJA
                ? '30周年のADE、トランスの見どころを日別にチェック。'
                : 'The trance side of ADE, day by day — 30 years of Amsterdam Dance Event.'}
            </p>
          </div>
          {!live && c && (
            <div className="flex gap-2" aria-label={isJA ? '開幕までのカウントダウン' : 'Countdown to ADE'}>
              {[[c.d, isJA ? '日' : 'DAYS'], [c.h, isJA ? '時間' : 'HOURS'], [c.m, isJA ? '分' : 'MIN']].map(([v, l]) => (
                <div key={l} className="ade-cd">
                  <b>{pad(v)}</b>
                  <small>{l}</small>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
          {DAYS.map((d) => (
            <div key={d.en} className="ade-day">
              <div className="font-bebas text-xl tracking-wide text-[#FDBA74]">{isJA ? d.ja : d.en}</div>
              {d.items.map((it) => (
                <Link key={it.label} href={it.href} className="block text-sm text-white hover:text-[#F4E5A8] hover:underline leading-snug">
                  {it.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <Link href="/blog/ade-2026-trance-guide" className="ade-cta">
          {isJA ? 'ADE トランス・ガイドを見る →' : 'FULL ADE TRANCE GUIDE →'}
        </Link>
      </div>
    </section>
  );
}

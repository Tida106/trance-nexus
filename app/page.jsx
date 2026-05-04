'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [stats] = useState([
    { value: '140+', label: 'Artists' },
    { value: '52', label: 'Radio Shows' },
    { value: '800+', label: 'Setlists' },
    { value: '30', label: 'Events' },
  ]);

  return (
    <>
      <Navigation />
      
      {/* HERO */}
      <section id="top" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-[60px]">
        <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent opacity-70 pointer-events-none" />
        
        <div className="relative z-10 px-10">
          <div className="font-bebas text-sm tracking-widest text-accent-orange mb-4 animate-in fade-in duration-700">
            {/* TRANCE MUSIC PORTAL — JAPAN & WORLDWIDE */}
            TRANCE MUSIC PORTAL — JAPAN &amp; WORLDWIDE
          </div>
          
          <h1 className="font-bebas text-8xl tracking-wider mb-2 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
            <span className="bg-gradient-to-b from-white via-accent-amber to-accent-orange bg-clip-text text-transparent drop-shadow-xl">
              TRANCE NEXUS
            </span>
            <div className="text-4xl tracking-widest text-accent-red drop-shadow-lg mt-2">
              トランスミュージック情報局
            </div>
          </h1>
          
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-orange to-transparent mx-auto my-6" />
          
          <p className="text-xl tracking-wide text-text-light/60 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
            アーティスト・ラジオ番組・セットリスト・フェス情報を網羅した日本最大のトランスミュージックポータル
          </p>
          
          <div className="flex gap-12 justify-center mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-bebas text-4xl text-accent-orange drop-shadow-lg mb-2">
                  {stat.value}
                </div>
                <div className="text-sm tracking-widest text-text-muted uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs tracking-widest animate-bounce">
            SCROLL
            <div className="text-lg text-accent-orange">▼</div>
          </div>
        </div>
      </section>

      {/* ARTISTS SECTION */}
      <section id="artist" className="relative z-10 py-24 px-12 bg-dark-bg2/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-bebas text-xs tracking-widest text-accent-red block mb-2">
              {/* 01 — ARTISTS DATABASE */}
            </span>
            <h2 className="font-bebas text-5xl tracking-wider text-white mb-2">
              アーティスト <span className="text-accent-orange">一覧</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
          </div>

          <div className="mb-8">
            <Link
              href="/artists"
              className="inline-block font-bebas text-sm tracking-widest px-6 py-3 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 hover:shadow-lg transition-all rounded"
            >
              🎯 ALL ARTISTS →
            </Link>
          </div>
        </div>
      </section>

      {/* RADIO SECTION */}
      <section id="radio" className="relative z-10 py-24 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-bebas text-xs tracking-widest text-accent-red block mb-2">
              {/* 02 — RADIO SHOWS */}
            </span>
            <h2 className="font-bebas text-5xl tracking-wider text-white mb-2">
              ラジオ番組 <span className="text-accent-orange">スケジュール</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
          </div>

          <div className="mb-8">
            <Link
              href="/radio"
              className="inline-block font-bebas text-sm tracking-widest px-6 py-3 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 hover:shadow-lg transition-all rounded"
            >
              📻 ALL SHOWS →
            </Link>
          </div>
        </div>
      </section>

      {/* SETLISTS SECTION */}
      <section id="setlist" className="relative z-10 py-24 px-12 bg-dark-bg2/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-bebas text-xs tracking-widest text-accent-red block mb-2">
              {/* 03 — SETLISTS & MIXES */}
            </span>
            <h2 className="font-bebas text-5xl tracking-wider text-white mb-2">
              セットリスト <span className="text-accent-orange">・ミックス</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
          </div>

          <div className="mb-8">
            <Link
              href="/setlists"
              className="inline-block font-bebas text-sm tracking-widest px-6 py-3 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 hover:shadow-lg transition-all rounded"
            >
              🎵 ALL SETLISTS →
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section id="events" className="relative z-10 py-24 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="font-bebas text-xs tracking-widest text-accent-red block mb-2">
              {/* 04 — EVENTS & FESTIVALS */}
            </span>
            <h2 className="font-bebas text-5xl tracking-wider text-white mb-2">
              イベント <span className="text-accent-orange">・フェス情報</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
          </div>

          <div className="mb-8">
            <Link
              href="/events"
              className="inline-block font-bebas text-sm tracking-widest px-6 py-3 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 hover:shadow-lg transition-all rounded"
            >
              🎉 ALL EVENTS →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

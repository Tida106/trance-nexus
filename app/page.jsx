'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';
import { listing } from '@/data/blog/listing';
import { artists } from '@/data/artists/index';
import ArtistCard from '@/components/ArtistCard';

export default function Home() {
  const { t } = useTranslation();

  const stats = [
    { value: '140+', label: t('home.stats.artists') },
    { value: '52', label: t('home.stats.radio') },
    { value: '800+', label: t('home.stats.setlists') },
    { value: '30', label: t('home.stats.events') },
  ];

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TRANCE NEXUS',
    alternateName: 'トランスネクサス',
    url: 'https://trance-nexus.com',
    description: 'Comprehensive trance music portal covering artists, radio shows, setlists, and events worldwide',
    inLanguage: ['en', 'ja'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://trance-nexus.com/artists?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Navigation />
      
      {/* HERO */}
      <section id="top" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-[60px]">
        <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent opacity-70 pointer-events-none" />
        
        <div className="relative z-10 px-10">
          <div className="font-bebas text-sm tracking-widest text-accent-orange mb-4 animate-in fade-in duration-700">
            {t('home.tagline')}
          </div>
          
          <h1 className="font-bebas text-8xl tracking-wider mb-2 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
            <span className="bg-gradient-to-b from-white via-accent-amber to-accent-orange bg-clip-text text-transparent drop-shadow-xl">
              TRANCE NEXUS
            </span>
            <div className="text-4xl tracking-widest text-accent-red drop-shadow-lg mt-2">
              {t('home.subtitle')}
            </div>
          </h1>
          
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-orange to-transparent mx-auto my-6" />
          
          <p className="text-xl tracking-wide text-text-light/60 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
            {t('home.description')}
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
            {t('home.scroll')}
            <div className="text-lg text-accent-orange">▼</div>
          </div>
        </div>
      </section>

      {/* ARTISTS SECTION — Featured Artists (5) */}
      <section id="artist" className="relative z-10 py-24 px-12 bg-dark-bg2/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {t('artists.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
          </div>

          {artists.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {artists.slice(0, 5).map((a) => (
                <ArtistCard key={a.slug} artist={a} />
              ))}
            </div>
          )}

          <div className="mb-8">
            <Link
              href="/artists"
              className="inline-block font-bebas text-sm tracking-widest px-6 py-3 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 hover:shadow-lg transition-all rounded"
            >
              🎯 {t('home.sections.artists')} →
            </Link>
          </div>
        </div>
      </section>

      {/* RADIO SECTION */}
      <section id="radio" className="relative z-10 py-24 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {t('radio.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
          </div>

          <div className="mb-8">
            <Link
              href="/radio"
              className="inline-block font-bebas text-sm tracking-widest px-6 py-3 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 hover:shadow-lg transition-all rounded"
            >
              📻 {t('home.sections.radio')} →
            </Link>
          </div>
        </div>
      </section>

      {/* SETLISTS SECTION */}
      <section id="setlist" className="relative z-10 py-24 px-12 bg-dark-bg2/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {t('setlists.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
          </div>

          <div className="mb-8">
            <Link
              href="/setlists"
              className="inline-block font-bebas text-sm tracking-widest px-6 py-3 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 hover:shadow-lg transition-all rounded"
            >
              🎵 {t('home.sections.setlists')} →
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section id="events" className="relative z-10 py-24 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {t('events.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
          </div>

          <div className="mb-8">
            <Link
              href="/events"
              className="inline-block font-bebas text-sm tracking-widest px-6 py-3 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 hover:shadow-lg transition-all rounded"
            >
              🎉 {t('home.sections.events')} →
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG SECTION — latest 5 articles */}
      <section id="blog" className="relative z-10 py-24 px-12 bg-dark-bg2/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {t('blog.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
          </div>

          {/* Latest 5 article cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {listing.slice(0, 5).map((post) => {
              const isJA = t('nav.artists') === 'アーティスト';
              const c = isJA ? post.ja : post.en;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:border-accent-orange/50 hover:translate-y-[-4px] hover:shadow-xl transition-all block"
                >
                  <div className="h-1.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
                  <div className="p-5">
                    <div className="flex gap-1.5 flex-wrap mb-2">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs tracking-widest px-1.5 py-0.5 rounded border border-accent-orange/25 bg-accent-orange/5 text-accent-orange">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bebas text-lg tracking-widest text-white mb-2 leading-tight group-hover:text-accent-orange transition-colors line-clamp-2">
                      {c.title}
                    </h3>
                    <p className="text-xs text-text-light/50 leading-relaxed mb-3 line-clamp-2">
                      {c.excerpt}
                    </p>
                    <div className="text-xs text-text-muted tracking-widest">
                      {post.date} · {post.readTime} {isJA ? '分' : 'min read'}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <Link
            href="/blog"
            className="inline-block font-bebas text-sm tracking-widest px-6 py-3 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 hover:shadow-lg transition-all rounded"
          >
            ✍️ {t('blog.cta')} →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

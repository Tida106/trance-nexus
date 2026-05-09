'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useTranslation } from '@/lib/useTranslation';
import { listing } from '@/data/blog/listing';
import { artists } from '@/data/artists/index';
import { labels } from '@/data/labels/index';
import { glossary } from '@/data/glossary/index';
import radioData from '@/data/radio.json';
import setlistsData from '@/data/setlists.json';
import { events as eventsData } from '@/data/events/index';
import ArtistCard from '@/components/ArtistCard';
import HeroSearchBar from '@/components/HeroSearchBar';

// Robust array length for the JSON feeds — radio/setlists/events JSON
// files have alternated between bare arrays and object-wrapped exports
// across scrapes, so coerce both shapes to a number rather than blow up
// the home build if the next scrape lands as an object.
const sizeOf = (data) => {
  if (Array.isArray(data)) return data.length;
  if (data && typeof data === 'object') return Object.keys(data).length;
  return 0;
};

const NewsletterForm = dynamic(() => import('@/components/NewsletterForm'), { ssr: false });

// ---------- inline ad slot --------------------------------------------------
//
// AdSense auto-ads inject into the page on their own based on the ad
// script in app/layout.jsx, but explicit slots give us control over
// where ads land in the long content flow. Each slot renders a
// minimal placeholder; AdSense's ad.googletagmanager script is
// already responsible for filling them once approved. The placeholder
// height keeps CLS budget under control (the slot reserves space
// before the ad renders).
//
// `format`:
//   - 'banner'      90 px tall, full-width
//   - 'inline'     250 px tall, full-width  (mid-content rectangle)

function AdSlot({ id, format = 'banner', label = 'Advertisement', className = '' }) {
  const minH = format === 'inline' ? 'min-h-[250px]' : 'min-h-[90px]';
  return (
    <aside
      aria-label={label}
      className={`relative z-10 px-12 py-6 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] tracking-widest text-text-muted/50 font-bebas mb-1.5 text-center">
          {label.toUpperCase()}
        </div>
        <div
          id={id}
          data-ad-slot={format}
          className={`border border-orange-900/15 bg-dark-bg2/30 rounded-sm ${minH} flex items-center justify-center`}
        >
          <span className="text-text-muted/30 text-xs tracking-widest font-bebas">
            ad slot · {format}
          </span>
        </div>
      </div>
    </aside>
  );
}

// ---------- component ------------------------------------------------------

export default function Home() {
  const { t, language } = useTranslation();
  const isJA = language === 'ja';

  // ---- derived data ------------------------------------------------------

  const stats = [
    { value: artists.length,         label: t('home.stats.artists') },
    { value: sizeOf(radioData),      label: t('home.stats.radio') },
    { value: sizeOf(setlistsData),   label: t('home.stats.setlists') },
    { value: sizeOf(eventsData),     label: t('home.stats.events') },
  ].filter((s) => s.value > 0);

  // Editor's Pick: prefer the most recent "all-time-best" canon
  // article (those are the highest-effort editorial pieces), fall
  // back to the most recent monthly-charts entry, fall back to the
  // newest article overall. Always selects something deterministic
  // so the hero card never goes empty.
  const editorsPick =
    listing.find((p) => p.tags?.includes('all-time-best')) ||
    listing.find((p) => p.tags?.includes('monthly-charts')) ||
    listing[0];

  // Latest Posts (6) — straightforward newest-first.
  const latestPosts = listing.slice(0, 6);

  // Trending This Week (4) — without analytics, the editorial
  // fallback is the next four articles after Latest Posts, with
  // the canon / genre-guide / monthly-chart tags filtered out
  // (each of those has its own dedicated home-page section, so
  // including them here would just duplicate cards). The result
  // is the long-tail editorial pieces — artist profiles, history
  // pieces, technique guides, opinion essays.
  const trendingExcluded = new Set(['all-time-best', 'what-is', 'monthly-charts']);
  const trending = listing
    .slice(6)
    .filter((p) => !(p.tags || []).some((t) => trendingExcluded.has(t)))
    .slice(0, 4);

  // Latest Monthly Chart — newest by listing order. Used as the
  // big hero-banner section between Trending and All-Time Best.
  const latestChart = listing.find((p) => p.tags?.includes('monthly-charts'));

  // All-Time Best canon (5).
  const allTimeBest = listing
    .filter((p) => p.tags?.includes('all-time-best'))
    .slice(0, 5);

  // Featured artists (6).
  const featuredArtists = artists.slice(0, 6);

  // Browse by Genre — pull the "What is X" articles. They each carry
  // a tag matching their subgenre, so a `what-is` tag filter surfaces
  // them all in one pass.
  const genreGuides = listing
    .filter((p) => p.tags?.includes('what-is'))
    .slice(0, 10);

  // Upcoming events (3) — same logic as before: confirmed-next-date
  // first, annuals (no confirmed next-edition date) sorted to the
  // end. Past events filtered out.
  const upcomingEvents = [...eventsData]
    .filter((e) => e.status !== 'past')
    .sort((a, b) => {
      const av = a.dates?.next?.start ? new Date(a.dates.next.start).getTime() : Infinity;
      const bv = b.dates?.next?.start ? new Date(b.dates.next.start).getTime() : Infinity;
      if (av !== bv) return av - bv;
      return (a.name || '').localeCompare(b.name || '');
    })
    .slice(0, 3);

  // From the Glossary (4) — pick across categories so the row reads
  // as a tour of the glossary rather than four entries from one
  // category. Take the first entry from each non-genre category
  // (production / dj / culture) plus one genre, capped at 4.
  const glossaryPicks = (() => {
    const out = [];
    const wantedOrder = ['genre', 'production', 'dj', 'culture'];
    for (const cat of wantedOrder) {
      const e = glossary.find((g) => g.category === cat);
      if (e && !out.includes(e)) out.push(e);
    }
    return out.slice(0, 4);
  })();

  // ---- schema ------------------------------------------------------------

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

  // ---- render ------------------------------------------------------------

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Navigation />

      {/* ─────────────────────────────────────────────────────────────
          HERO — tagline, h1, description, stats, prominent search
          bar, and Editor's Pick card. Layout still uses min-h-screen
          + justify-center for the centred composition; SCROLL
          indicator is anchored to the section bottom (sibling, not
          child of inner div) so it can never overlap the stats row.
          ───────────────────────────────────────────────────────── */}
      <section
        id="top"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-[84px] pb-28"
      >
        <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-transparent to-transparent opacity-70 pointer-events-none" />

        <div className="relative z-10 px-6 md:px-10 w-full">
          <div className="font-bebas text-sm tracking-widest text-accent-orange mb-6 animate-in fade-in duration-700">
            {t('home.tagline')}
          </div>

          <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wider mb-2 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
            <span className="bg-gradient-to-b from-white via-accent-amber to-accent-orange bg-clip-text text-transparent drop-shadow-xl">
              {t('home.subtitle')}
            </span>
          </h1>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-orange to-transparent mx-auto my-6" />

          <p className="text-lg md:text-xl tracking-wide text-text-light/60 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
            {t('home.description')}
          </p>

          {/* Prominent search — replaces the subtle Cmd+K-only entry
              with a visible bar everyone can see. Powers the same
              SearchModal as the navbar trigger; the modal chunk is
              dynamic-imported so it doesn't ship in the home-page
              first paint. */}
          <div className="mb-10 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-[250ms]">
            <HeroSearchBar />
          </div>

          {/* Stats counter — already real, never fabricated. Stat
              entries with a count of zero are filtered upstream so
              a half-built surface can't accidentally land in the
              hero. */}
          <div className="flex flex-wrap gap-8 md:gap-12 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-bebas text-3xl md:text-4xl text-accent-orange drop-shadow-lg mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm tracking-widest text-text-muted uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-text-muted text-xs tracking-widest animate-bounce"
        >
          {t('home.scroll')}
          <span className="text-lg text-accent-orange">▼</span>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          NEWSLETTER CTA — under the hero. Conversion priority #1; the
          full form handles email + subgenre interests + consent and
          submits to whatever provider env vars are set to (Buttondown
          by default). The CTA-variant styling matches the orange/red
          theme.
          ───────────────────────────────────────────────────────── */}
      <section
        id="newsletter-top"
        className="cv-auto relative z-10 py-12 px-6 md:px-12 bg-gradient-to-b from-accent-orange/10 via-dark-bg/40 to-transparent border-y border-orange-900/20"
        aria-label="Subscribe to the newsletter"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="font-bebas text-3xl md:text-4xl tracking-widest text-white mb-2">
              {isJA ? '月次トランス・ダイジェスト' : 'Get the Monthly Trance Digest'}
            </h2>
            <p className="text-sm md:text-base text-text-light/70 leading-relaxed">
              {isJA
                ? 'ASOT、Group Therapy、FSOEの月次まとめ、新譜キュレーション、フェスティバル情報を毎月メールで。スパムなし、いつでも解除可能。'
                : 'A monthly digest of ASOT, Group Therapy, and FSOE rotation; new-release picks; festival news. No spam, unsubscribe anytime.'}
            </p>
          </div>
          <NewsletterForm variant="compact" />
        </div>
      </section>

      {/* Ad slot 1 — between the hero/CTA cluster and the content
          flow. AdSense auto-ads will fill once the placement passes
          policy review. */}
      <AdSlot id="home-ad-top" format="banner" />

      {/* ─────────────────────────────────────────────────────────────
          a) LATEST POSTS (6) — moved to lead the content flow under
          the Hero. On mobile we present
          as a horizontal-scroll snap row to keep the section compact
          (one card visible at a time, swipe horizontally for more).
          From md: it becomes a 2/3-column grid.
          ───────────────────────────────────────────────────────── */}
      <section id="latest-posts" className="cv-auto relative z-10 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl tracking-wider text-white mb-2">
                {isJA ? '最新記事' : 'Latest Posts'}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
            </div>
            <Link
              href="/blog"
              className="inline-block font-bebas text-sm tracking-widest px-5 py-2.5 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all rounded"
            >
              ✍️ {isJA ? 'すべての記事' : 'All Posts'} →
            </Link>
          </div>

          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 flex md:block gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-6 md:mx-0 px-6 md:px-0">
            {latestPosts.map((post, i) => {
              const c = isJA ? post.ja : post.en;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  prefetch={i < 3 ? undefined : false}
                  className="group bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:border-accent-orange/50 hover:translate-y-[-4px] hover:shadow-xl transition-all block snap-start shrink-0 w-[80vw] sm:w-[60vw] md:w-auto"
                >
                  <div className="h-1.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
                  <div className="p-5">
                    <div className="flex gap-1.5 flex-wrap mb-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-widest px-1.5 py-0.5 rounded border border-accent-orange/25 bg-accent-orange/5 text-accent-orange/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-bebas text-lg tracking-widest text-white mb-2 leading-tight group-hover:text-accent-orange transition-colors line-clamp-2 min-h-[3rem]">
                      {c.title}
                    </h3>
                    <p className="text-xs text-text-light/55 leading-relaxed mb-3 line-clamp-2">
                      {c.excerpt}
                    </p>
                    <div className="text-[11px] text-text-muted tracking-widest">
                      {post.date} · {post.readTime} {isJA ? '分' : 'min read'}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          b) FEATURED ARTISTS (6) — moved up under Latest Posts so the
          most actionable directory surface shows above the long
          editorial sections. Mobile horizontal-scroll snap row,
          desktop 3-column grid. Reuses ArtistCard.
          ───────────────────────────────────────────────────────── */}
      <section id="artist" className="cv-auto relative z-10 py-20 px-6 md:px-12 bg-dark-bg2/50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl tracking-wider text-white mb-2 flex items-center gap-3 flex-wrap">
                <span>{t('artists.title')}</span>
                <span className="font-bebas text-xl tracking-widest px-2.5 py-0.5 rounded-md bg-accent-orange text-black">
                  {artists.length}
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
            </div>
            <Link
              href="/artists"
              className="inline-flex items-center gap-2 font-bebas text-sm tracking-widest px-5 py-2.5 rounded bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber text-black shadow-lg hover:shadow-xl hover:shadow-accent-orange/40 hover:scale-105 transition-all"
            >
              <span>🎯</span>
              <span>
                {isJA
                  ? `${artists.length}名のアーティストを全て見る`
                  : `View all ${artists.length} artists`}
              </span>
              <span>→</span>
            </Link>
          </div>

          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 flex md:block gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-6 md:mx-0 px-6 md:px-0">
            {featuredArtists.map((a) => (
              <div key={a.slug} className="snap-start shrink-0 w-[80vw] sm:w-[60vw] md:w-auto">
                <ArtistCard artist={a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad slot 2 — mid-content rectangle. */}
      <AdSlot id="home-ad-mid-1" format="inline" />

      {/* ─────────────────────────────────────────────────────────────
          c) LATEST MONTHLY CHART — single big banner. The most
          recent monthly chart is a high-effort editorial piece and
          deserves real visual weight. Renders as one large card
          spanning the full content width.
          ───────────────────────────────────────────────────────── */}
      {latestChart && (
        <section id="latest-chart" className="cv-auto relative z-10 py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <Link
              href={`/blog/${latestChart.slug}`}
              className="group block bg-gradient-to-br from-accent-red/15 via-dark-bg2/80 to-accent-orange/10 border border-accent-orange/40 hover:border-accent-orange rounded-sm overflow-hidden transition-all hover:translate-y-[-3px] hover:shadow-2xl hover:shadow-accent-orange/15"
            >
              <div className="h-2 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="font-bebas text-xs tracking-widest px-3 py-1 rounded border border-accent-orange bg-accent-orange/15 text-accent-orange">
                    📈 {isJA ? '最新月間チャート' : 'Latest Monthly Chart'}
                  </span>
                  <span className="text-xs text-text-muted tracking-widest">
                    {latestChart.date} · {latestChart.readTime} {isJA ? '分' : 'min read'}
                  </span>
                </div>
                <h2 className="font-bebas text-2xl md:text-4xl tracking-wider text-white group-hover:text-accent-orange transition-colors mb-4 leading-tight">
                  {(isJA ? latestChart.ja.title : latestChart.en.title)}
                </h2>
                <p className="text-sm md:text-base text-text-light/70 leading-relaxed mb-5 max-w-3xl">
                  {(isJA ? latestChart.ja.excerpt : latestChart.en.excerpt)}
                </p>
                <span className="inline-flex items-center gap-2 font-bebas text-sm tracking-widest text-accent-orange group-hover:translate-x-1 transition-transform">
                  {isJA ? 'チャート全文を読む' : 'Read the full chart'}
                  <span>→</span>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          d) TRENDING THIS WEEK — without runtime analytics this is a
          curated long-tail row picked from articles after Latest Posts,
          excluding the all-time-best canon and other dedicated sections.
          Card badge is "Popular Now" so the framing reads as audience
          activity rather than editor preference.
          ───────────────────────────────────────────────────────── */}
      {trending.length > 0 && (
        <section id="trending" className="cv-auto relative z-10 py-20 px-6 md:px-12 bg-dark-bg2/40 border-y border-orange-900/15">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2 className="font-bebas text-4xl md:text-5xl tracking-wider text-white mb-2 flex items-center gap-3 flex-wrap">
                  <span>{isJA ? '今週の注目' : 'Trending This Week'}</span>
                  <span className="text-xl">🔥</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trending.map((post) => {
                const c = isJA ? post.ja : post.en;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    prefetch={false}
                    className="group bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:border-accent-orange/50 hover:translate-y-[-3px] hover:shadow-lg transition-all block"
                  >
                    <div className="h-1 bg-gradient-to-r from-accent-amber to-accent-orange" />
                    <div className="p-4">
                      <span className="font-bebas text-[10px] tracking-widest px-1.5 py-0.5 rounded border border-accent-amber/40 bg-accent-amber/10 text-accent-amber inline-block mb-2">
                        🔥 {isJA ? '注目記事' : 'Popular Now'}
                      </span>
                      <h3 className="font-bebas text-base tracking-widest text-white mb-2 leading-tight group-hover:text-accent-orange transition-colors line-clamp-3 min-h-[3.5rem]">
                        {c.title}
                      </h3>
                      <div className="text-[11px] text-text-muted tracking-widest">
                        {post.date} · {post.readTime} {isJA ? '分' : 'min read'}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          e) TOP PICK THIS WEEK — relocated from the Hero card. Single
          highlighted article (the same `editorsPick` selection logic:
          most recent all-time-best > monthly-charts > newest). Renamed
          to "Top Pick This Week" so the framing is reader-facing rather
          than editor-voice.
          ───────────────────────────────────────────────────────── */}
      {editorsPick && (
        <section id="top-pick" className="cv-auto relative z-10 py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <h2 className="font-bebas text-4xl md:text-5xl tracking-wider text-white mb-2 flex items-center gap-3 flex-wrap">
                <span>{isJA ? '今週のトップ・ピック' : 'Top Pick This Week'}</span>
                <span className="text-2xl">⭐</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
            </div>
            <Link
              href={`/blog/${editorsPick.slug}`}
              className="group block text-left bg-dark-bg2/70 border border-accent-orange/40 hover:border-accent-orange rounded-sm p-5 md:p-8 transition-all hover:shadow-xl hover:shadow-accent-orange/10 hover:translate-y-[-2px]"
            >
              <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                <span className="font-bebas text-[11px] tracking-widest px-2 py-0.5 rounded border border-accent-orange bg-accent-orange/15 text-accent-orange">
                  ⭐ {isJA ? '今週のトップ・ピック' : 'Top Pick This Week'}
                </span>
                <span className="text-xs text-text-muted tracking-widest">
                  {editorsPick.date} · {editorsPick.readTime} {isJA ? '分' : 'min read'}
                </span>
              </div>
              <h3 className="font-bebas text-xl md:text-3xl tracking-widest text-white group-hover:text-accent-orange transition-colors leading-tight mb-3">
                {(isJA ? editorsPick.ja.title : editorsPick.en.title)}
              </h3>
              <p className="text-sm md:text-base text-text-light/70 leading-relaxed line-clamp-3">
                {(isJA ? editorsPick.ja.excerpt : editorsPick.en.excerpt)}
              </p>
            </Link>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          f) ALL-TIME BEST canon (5) — the highest-effort articles in
          the catalogue. Featured first card spans 2 columns at md+
          for visual hierarchy.
          ───────────────────────────────────────────────────────── */}
      {allTimeBest.length > 0 && (
        <section
          id="all-time-best"
          className="cv-auto relative z-10 py-20 px-6 md:px-12 bg-gradient-to-b from-transparent via-accent-orange/5 to-transparent"
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="font-bebas text-4xl md:text-5xl tracking-wider text-white mb-2 flex items-center gap-3 flex-wrap">
                <span>{isJA ? '決定版ランキング' : 'The Definitive Lists'}</span>
                <span className="text-2xl">🏆</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
              <p className="text-sm text-text-light/60 mt-3 max-w-2xl">
                {isJA
                  ? 'ジャンルの30年史を横断する史上最高のトランス・トラック ― ランク付き、検証済み、クロス・チェック済みのカノン。'
                  : "The all-time best trance tracks across the genre's 30-year history — ranked, verified, and cross-checked against the historical canon."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              {allTimeBest.map((post, idx) => {
                const c = isJA ? post.ja : post.en;
                const featured = idx === 0;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    prefetch={featured ? undefined : false}
                    className={`group bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:border-accent-orange/60 hover:translate-y-[-4px] hover:shadow-2xl hover:shadow-accent-orange/10 transition-all block ${featured ? 'md:col-span-2' : ''}`}
                  >
                    <div className="h-1.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
                    <div className="p-5 md:p-6">
                      <div className="flex gap-1.5 flex-wrap mb-3">
                        <span className="text-[10px] tracking-widest px-1.5 py-0.5 rounded border border-accent-orange/40 bg-accent-orange/10 text-accent-orange font-bebas">
                          🏆 {isJA ? '決定版' : 'Definitive'}
                        </span>
                        {featured && (
                          <span className="text-[10px] tracking-widest px-1.5 py-0.5 rounded border border-accent-amber/40 bg-accent-amber/10 text-accent-amber font-bebas">
                            {isJA ? '注目' : 'Featured'}
                          </span>
                        )}
                      </div>
                      <h3 className={`font-bebas tracking-widest text-white leading-tight group-hover:text-accent-orange transition-colors mb-3 ${featured ? 'text-xl md:text-2xl' : 'text-lg line-clamp-2 min-h-[3rem]'}`}>
                        {c.title}
                      </h3>
                      <p className={`text-text-light/65 leading-relaxed ${featured ? 'text-sm mb-4' : 'text-xs mb-3 line-clamp-3'}`}>
                        {c.excerpt}
                      </p>
                      <div className="text-[11px] text-text-muted tracking-widest">
                        {post.date} · {post.readTime} {isJA ? '分' : 'min read'}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <Link
              href="/category/all-time-best"
              className="inline-block font-bebas text-sm tracking-widest px-6 py-3 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all rounded"
            >
              🏆 {isJA ? 'すべての決定版' : 'All Definitive Lists'} →
            </Link>
          </div>
        </section>
      )}

      {/* Ad slot 3 — between All-Time Best canon and the genre browser. */}
      <AdSlot id="home-ad-mid-2" format="banner" />

      {/* ─────────────────────────────────────────────────────────────
          g) BROWSE BY GENRE — entry points into the "What is X"
          definitive guide series. Each tile links into the long-form
          guide; genre pages live at /blog/what-is-<slug>. Ten tiles
          cover the canonical genre map.
          ───────────────────────────────────────────────────────── */}
      {genreGuides.length > 0 && (
        <section id="browse-genre" className="cv-auto relative z-10 py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="font-bebas text-4xl md:text-5xl tracking-wider text-white mb-2">
                {isJA ? 'ジャンル別に見る' : 'Browse by Genre'}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
              <p className="text-sm text-text-light/60 mt-3 max-w-2xl">
                {isJA
                  ? '各サブジャンルの定義、起源、主要アーティスト、おすすめトラックを網羅した完全ガイド。'
                  : "Definitive guides covering each subgenre's definition, origins, key artists, and starter tracks."}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {genreGuides.map((post) => {
                const c = isJA ? post.ja : post.en;
                // Strip the leading "What is " (or Japanese equivalent) so
                // each tile shows just the genre name.
                const genreName = (c.title || '')
                  .replace(/^What is\s+/i, '')
                  .replace(/とは何か？.*/, '')
                  .replace(/\s+\?.*$/, '')
                  .replace(/\s+—.*$/, '')
                  .trim();
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    prefetch={false}
                    className="group bg-dark-bg2/60 border border-orange-900/20 rounded-sm p-4 text-center hover:border-accent-orange/60 hover:bg-accent-orange/5 hover:translate-y-[-2px] transition-all"
                  >
                    <div className="font-bebas text-base md:text-lg tracking-widest text-white group-hover:text-accent-orange transition-colors leading-tight">
                      {genreName || c.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          h) UPCOMING EVENTS — three featured upcoming events from the
          curated catalogue. Same logic as the previous events
          section: confirmed-next-date events first, annuals trailing.
          ───────────────────────────────────────────────────────── */}
      {upcomingEvents.length > 0 && (
        <section id="events" className="cv-auto relative z-10 py-20 px-6 md:px-12 bg-dark-bg2/40">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2 className="font-bebas text-4xl md:text-5xl tracking-wider text-white mb-2">
                  {t('events.title')}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
              </div>
              <Link
                href="/events"
                className="inline-block font-bebas text-sm tracking-widest px-5 py-2.5 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all rounded"
              >
                🎉 {t('home.sections.events')} →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upcomingEvents.map((e) => {
                const dateLine = e.dates?.next?.start
                  ? (e.dates.next.end && e.dates.next.end !== e.dates.next.start
                      ? `${e.dates.next.start} → ${e.dates.next.end}`
                      : e.dates.next.start)
                  : e.dates?.typicalMonth
                    ? (isJA ? `毎年 ${e.dates.typicalMonth}` : `Annually in ${e.dates.typicalMonth}`)
                    : null;
                return (
                  <Link
                    key={e.slug}
                    href={`/events/${e.slug}`}
                    prefetch={false}
                    className="group block bg-dark-bg2/70 border border-orange-900/20 rounded-sm p-5 hover:border-accent-orange/50 hover:translate-y-[-2px] hover:shadow-lg transition-all"
                  >
                    <div className="font-bebas text-lg md:text-xl tracking-widest text-white mb-1 truncate group-hover:text-accent-orange transition-colors">
                      {e.name}
                    </div>
                    {dateLine && (
                      <div className="text-accent-orange text-xs tracking-widest mb-2">{dateLine}</div>
                    )}
                    {e.venue?.name && (
                      <div className="text-xs text-text-muted truncate">📍 {e.venue.name}</div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          i) FROM THE GLOSSARY (4) — a four-pick tour of the glossary
          balanced across category (genre / production / dj / culture)
          so the row reads as a sample of the whole, not four entries
          from one bucket. Encourages drilling into the long-tail
          glossary catalogue.
          ───────────────────────────────────────────────────────── */}
      {glossaryPicks.length > 0 && (
        <section id="glossary-picks" className="cv-auto relative z-10 py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2 className="font-bebas text-4xl md:text-5xl tracking-wider text-white mb-2">
                  {isJA ? '用語集から' : 'From the Glossary'}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
              </div>
              <Link
                href="/glossary"
                className="inline-block font-bebas text-sm tracking-widest px-5 py-2.5 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all rounded"
              >
                📖 {isJA ? '用語集全体を見る' : 'Browse the glossary'} →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {glossaryPicks.map((g) => {
                const term = isJA ? g.term.ja : g.term.en;
                const short = isJA ? g.short.ja : g.short.en;
                return (
                  <Link
                    key={g.slug}
                    href={`/glossary/${g.slug}`}
                    prefetch={false}
                    className="group bg-dark-bg2/60 border border-orange-900/20 rounded-sm p-4 hover:border-accent-orange/50 hover:translate-y-[-2px] transition-all"
                  >
                    <div className="font-bebas text-[10px] tracking-widest text-accent-orange/80 mb-1 uppercase">
                      {g.category}
                    </div>
                    <div className="font-bebas text-lg tracking-widest text-white mb-2 group-hover:text-accent-orange transition-colors">
                      {term}
                    </div>
                    <p className="text-xs text-text-light/55 leading-relaxed line-clamp-3">
                      {short}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          DISCOVER — compact tile row pointing at the remaining
          surfaces (Labels, Setlists, Radio) the prescribed home
          layout doesn't dedicate sections to. Keeps those areas
          discoverable from the home without dedicating full vertical
          space to each.
          ───────────────────────────────────────────────────────── */}
      <section id="discover" className="cv-auto relative z-10 py-16 px-6 md:px-12 bg-dark-bg2/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 text-center">
            <h2 className="font-bebas text-3xl md:text-4xl tracking-wider text-white mb-2">
              {isJA ? 'もっと探す' : 'Discover More'}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/labels"
              className="group bg-dark-bg2/70 border border-orange-900/20 rounded-sm p-5 text-center hover:border-accent-orange/50 hover:translate-y-[-2px] transition-all"
            >
              <div className="text-3xl mb-2">💿</div>
              <div className="font-bebas text-base tracking-widest text-white group-hover:text-accent-orange transition-colors">
                {labels.length} {isJA ? 'レーベル' : 'Labels'}
              </div>
              <div className="text-xs text-text-muted mt-1">
                {isJA ? 'Anjunabeats、FSOE、Black Hole 他' : 'Anjunabeats, FSOE, Black Hole & more'}
              </div>
            </Link>
            <Link
              href="/setlists"
              className="group bg-dark-bg2/70 border border-orange-900/20 rounded-sm p-5 text-center hover:border-accent-orange/50 hover:translate-y-[-2px] transition-all"
            >
              <div className="text-3xl mb-2">🎵</div>
              <div className="font-bebas text-base tracking-widest text-white group-hover:text-accent-orange transition-colors">
                {isJA ? 'セットリスト' : 'Setlists'}
              </div>
              <div className="text-xs text-text-muted mt-1">
                {isJA ? '最新のDJセット' : 'Latest DJ sets'}
              </div>
            </Link>
            <Link
              href="/radio"
              className="group bg-dark-bg2/70 border border-orange-900/20 rounded-sm p-5 text-center hover:border-accent-orange/50 hover:translate-y-[-2px] transition-all"
            >
              <div className="text-3xl mb-2">📻</div>
              <div className="font-bebas text-base tracking-widest text-white group-hover:text-accent-orange transition-colors">
                {isJA ? 'ラジオ番組' : 'Radio Shows'}
              </div>
              <div className="text-xs text-text-muted mt-1">
                ASOT, Group Therapy, FSOE
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          EXPLORE TRANCE HISTORY — kept from the previous layout. The
          timeline is one of the highest-effort surfaces on the site
          and deserves a banner CTA.
          ───────────────────────────────────────────────────────── */}
      <section
        className="cv-auto relative z-10 py-16 px-6 md:px-12 overflow-hidden"
        aria-label="Explore Trance History"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent-red/10 via-accent-orange/15 to-amber-500/10 pointer-events-none" />
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 w-full h-24 opacity-25 pointer-events-none"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="home-tl-wave" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C150,20 300,90 450,55 C600,20 750,90 900,55 C1050,20 1200,80 1200,80 L1200,100 L0,100 Z"
            fill="url(#home-tl-wave)"
          />
        </svg>

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs tracking-widest text-accent-orange font-bebas mb-3 px-2 py-1 rounded border border-accent-orange/30 bg-accent-orange/5">
            1988 — 2026
          </span>
          <h2 className="font-bebas text-3xl md:text-5xl tracking-wider text-white mb-3 leading-tight">
            EXPLORE TRANCE HISTORY
          </h2>
          <p className="text-text-light/75 text-base md:text-lg leading-relaxed mb-6">
            {isJA
              ? '5つの時代、30の決定的瞬間 ― フランクフルトのクラブとゴア・シーンから、ASOT、Anjuna帝国、ラスベガス・スフィアでのAnymaまで。'
              : 'Five eras, thirty defining moments — from Frankfurt clubs and the Goa scene to ASOT, the Anjuna empire, and Anyma at the Las Vegas Sphere.'}
          </p>
          <Link
            href="/timeline"
            className="inline-block font-bebas text-base tracking-widest px-7 py-3 border border-accent-orange bg-accent-orange/15 text-accent-orange hover:bg-accent-orange/25 hover:shadow-lg transition-all rounded"
          >
            🔥 {isJA ? 'タイムラインを開く' : 'OPEN THE TIMELINE'} →
          </Link>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          NEWSLETTER (full form) — bottom-of-page CTA. Variant 'cta'
          uses the larger card layout with subgenre interest checkboxes
          and the privacy-consent line.
          ───────────────────────────────────────────────────────── */}
      <section className="cv-auto relative z-10 py-16 px-6 md:px-12 bg-gradient-to-b from-transparent via-accent-orange/5 to-transparent">
        <div className="max-w-2xl mx-auto">
          <NewsletterForm variant="cta" />
        </div>
      </section>

      <Footer />
    </>
  );
}

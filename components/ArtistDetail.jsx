'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { useTranslation } from '@/lib/useTranslation';
import { findLabelByName } from '@/data/labels/index';
import MusicEmbed from './MusicEmbed';
import { spotifyArtistIdFromUrl, featuredTracksForArtist } from '@/lib/embeds';

function LabelLinks({ labels }) {
  if (!labels || labels.length === 0) return null;
  return (
    <span>
      {labels.map((entry, i) => {
        const match = findLabelByName(entry);
        return (
          <span key={i}>
            {i > 0 && ', '}
            {match ? (
              <Link
                href={`/labels/${match.slug}`}
                className="text-accent-orange hover:underline"
              >
                {entry}
              </Link>
            ) : (
              entry
            )}
          </span>
        );
      })}
    </span>
  );
}

function buildAffiliateLinks(artist) {
  const enc = encodeURIComponent(artist.name);
  return {
    beatport: artist.links?.beatport || `https://www.beatport.com/search?q=${enc}`,
    spotify:
      artist.links?.spotify || `https://open.spotify.com/search/${enc}/artists`,
    soundcloud:
      artist.links?.soundcloud || `https://soundcloud.com/search/people?q=${enc}`,
    ra: artist.links?.ra || `https://ra.co/search?searchTerm=${enc}&searchType=artist`,
    website: artist.links?.website || null,
  };
}

function FactRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-baseline gap-3 py-2 border-b border-orange-900/15">
      <div className="font-bebas text-xs tracking-widest text-text-muted w-32 shrink-0">
        {label}
      </div>
      <div className="text-sm text-text-light/85 font-barlow">{value}</div>
    </div>
  );
}

export default function ArtistDetail({ artist, related, mentioned }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const links = buildAffiliateLinks(artist);

  const breadcrumbItems = [
    { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
    { label: { en: 'Artists', ja: 'アーティスト' }, href: '/artists' },
    { label: { en: artist.name, ja: artist.name }, href: `/artists/${artist.slug}` },
  ];

  const sub = artist.sub?.[language] || artist.sub?.en;
  const bio = artist.bio?.[language] || artist.bio?.en;
  const style = artist.style?.[language] || artist.style?.en;
  const short = artist.short?.[language] || artist.short?.en;

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[60px] pb-20 px-12">
        <div className="max-w-4xl mx-auto">
          <div className="pt-8 pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero banner */}
          <section className={`${artist.banner} relative rounded-sm overflow-hidden p-8 md:p-12 mb-10`}>
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-end">
              <div className="w-24 h-24 rounded-full border-2 border-accent-orange bg-dark-bg flex items-center justify-center text-5xl shadow-lg shrink-0">
                {artist.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{artist.flag}</span>
                  <span className="text-xs tracking-widest text-accent-orange font-bebas">
                    {sub}
                  </span>
                </div>
                <h1 className="font-bebas text-5xl md:text-6xl tracking-wider text-white mb-2 drop-shadow-lg">
                  {artist.name}
                </h1>
                <p className="text-text-light/85 text-base leading-relaxed max-w-2xl">{short}</p>
                <div className="flex gap-2 flex-wrap mt-4">
                  {artist.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs tracking-widest px-2.5 py-1 rounded border border-accent-orange/40 bg-accent-orange/10 text-accent-orange"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
          </section>

          {/* Facts panel + Listen panel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            <div className="md:col-span-2 bg-dark-bg2/80 border border-orange-900/20 rounded-sm p-6">
              <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">
                {isJA ? 'プロフィール' : 'At a Glance'}
              </h2>
              <FactRow label={isJA ? '本名' : 'Real name'} value={artist.realName} />
              <FactRow label={isJA ? '出身' : 'Origin'} value={artist.origin} />
              <FactRow label={isJA ? '生年' : 'Born'} value={artist.born} />
              <FactRow
                label={isJA ? '活動開始' : 'Active from'}
                value={artist.activeFrom}
              />
              <FactRow
                label={isJA ? 'レーベル' : 'Labels'}
                value={<LabelLinks labels={artist.labels} />}
              />
            </div>

            <div className="bg-dark-bg2/80 border border-orange-900/20 rounded-sm p-6">
              <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">
                {isJA ? '聴く / フォロー' : 'Listen / Follow'}
              </h2>
              <div className="flex flex-col gap-2">
                {links.website && (
                  <a
                    href={links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                  >
                    🌐 {isJA ? '公式サイト' : 'OFFICIAL SITE'}
                  </a>
                )}
                <a
                  href={links.beatport}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                >
                  🎵 BEATPORT
                </a>
                <a
                  href={links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                >
                  🎧 SPOTIFY
                </a>
                <a
                  href={links.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                >
                  ☁️ SOUNDCLOUD
                </a>
                <a
                  href={links.ra}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                >
                  📅 RESIDENT ADVISOR
                </a>
              </div>
            </div>
          </div>

          {/* Biography */}
          <section className="mb-12">
            <h2 className="font-bebas text-3xl tracking-widest text-white mb-4">
              {isJA ? 'バイオグラフィ' : 'Biography'}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />
            <div className="text-text-light/80 text-base leading-loose font-barlow whitespace-pre-line">
              {bio}
            </div>
          </section>

          {/* Sound style */}
          <section className="mb-12">
            <h2 className="font-bebas text-3xl tracking-widest text-white mb-4">
              {isJA ? 'サウンドスタイル' : 'Sound Style'}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />
            <div className="bg-dark-bg2/60 border-l-2 border-accent-orange p-5 italic text-text-light/85 text-base leading-relaxed font-barlow">
              {style}
            </div>
          </section>

          {/* Listen — Spotify artist embed (top tracks selected by Spotify) +
              5 hand-curated signature tracks rendered as Spotify search cards.
              Either an explicit `artist.embeds` or a fallback to topWorks. */}
          {(() => {
            const spArtistId = spotifyArtistIdFromUrl(artist.links?.spotify);
            const featured =
              (Array.isArray(artist.embeds) && artist.embeds.length > 0)
                ? artist.embeds
                : featuredTracksForArtist(artist, 5);
            if (!spArtistId && featured.length === 0) return null;
            return (
              <section className="mb-12">
                <h2 className="font-bebas text-3xl tracking-widest text-white mb-4">
                  {isJA ? '聴く' : 'Listen'}
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />
                {spArtistId && (
                  <MusicEmbed
                    platform="spotify"
                    id={`artist:${spArtistId}`}
                    label={
                      isJA
                        ? `${artist.name} — Spotify人気曲`
                        : `${artist.name} — top tracks on Spotify`
                    }
                    title={`Spotify player for ${artist.name}`}
                  />
                )}
                <div className="mt-3 flex gap-2 flex-wrap">
                  <a
                    href={links.beatport}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-xs tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                  >
                    🛒 {isJA ? 'Beatportで購入' : 'Buy on Beatport'}
                  </a>
                  <a
                    href={`https://music.apple.com/search?term=${encodeURIComponent(artist.name)}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="text-xs tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                  >
                    🍎 Apple Music
                  </a>
                  <a
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(artist.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all"
                  >
                    ▶ YouTube
                  </a>
                </div>

                {featured.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-bebas text-lg tracking-widest text-accent-orange mb-3">
                      {isJA ? 'シグネチャー楽曲' : 'Signature Tracks'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {featured.map((e, i) => (
                        <MusicEmbed key={i} {...e} />
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })()}

          {/* Top works */}
          {artist.topWorks?.length > 0 && (
            <section className="mb-12">
              <h2 className="font-bebas text-3xl tracking-widest text-white mb-4">
                {isJA ? '代表作' : 'Notable Works'}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {artist.topWorks.map((w, i) => (
                  <li
                    key={i}
                    className="bg-dark-bg2/60 border border-orange-900/20 rounded-sm p-3 flex items-baseline justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div className="text-text-light text-sm font-barlow truncate">
                        {w.title}
                      </div>
                      <div className="text-xs tracking-widest text-text-muted uppercase">
                        {w.type}
                      </div>
                    </div>
                    <div className="font-bebas text-accent-orange tracking-widest shrink-0">
                      {w.year}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Related blog articles */}
          {mentioned?.length > 0 && (
            <section className="mb-12">
              <h2 className="font-bebas text-3xl tracking-widest text-white mb-4">
                {isJA ? '関連記事' : 'Related Articles'}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mentioned.map((post) => {
                  const c = isJA ? post.ja : post.en;
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block bg-dark-bg2/80 border border-orange-900/20 rounded-sm overflow-hidden hover:border-accent-orange/50 hover:translate-y-[-3px] hover:shadow-lg transition-all"
                    >
                      <div className="h-1.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
                      <div className="p-4">
                        <h3 className="font-bebas text-base tracking-widest text-white mb-2 leading-tight group-hover:text-accent-orange transition-colors">
                          {c.title}
                        </h3>
                        <p className="text-xs text-text-light/55 line-clamp-2 mb-2">
                          {c.excerpt}
                        </p>
                        <div className="text-xs text-text-muted tracking-widest">
                          {post.date} · {post.readTime} {isJA ? '分' : 'min'}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Related artists */}
          {related?.length > 0 && (
            <section className="mb-12">
              <h2 className="font-bebas text-3xl tracking-widest text-white mb-4">
                {isJA ? '関連アーティスト' : 'Related Artists'}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/artists/${r.slug}`}
                    className="group bg-dark-bg2/80 border border-orange-900/20 rounded-sm p-4 text-center hover:border-accent-orange/50 hover:translate-y-[-3px] transition-all"
                  >
                    <div className="text-3xl mb-2">{r.emoji}</div>
                    <div className="font-bebas text-sm tracking-widest text-white group-hover:text-accent-orange transition-colors">
                      {r.name}
                    </div>
                    <div className="text-xs text-text-muted tracking-widest mt-1">
                      {r.flag}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="border-t border-orange-900/20 pt-6">
            <Link
              href="/artists"
              className="inline-block font-bebas text-sm tracking-widest px-5 py-2 border border-accent-orange/30 text-accent-orange hover:bg-accent-orange/10 transition-all rounded"
            >
              ← {isJA ? 'アーティスト一覧へ' : 'Back to all artists'}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

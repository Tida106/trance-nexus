'use client';

import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import Breadcrumb from './Breadcrumb';
import { useTranslation } from '@/lib/useTranslation';
import MusicEmbed from './MusicEmbed';
import { featuredTracksForLabel } from '@/lib/embeds';

// Build the outbound platform links for the label sidebar. Spotify
// is intentionally always a search URL — the artist-side audit found
// that stored Spotify IDs were unreliable enough that we no longer
// rely on them anywhere in the catalogue. YouTube and Apple Music
// follow the same pattern. Bandcamp / SoundCloud / website still
// honour their stored canonical URLs.
function buildLinks(label) {
  const enc = encodeURIComponent(label.name);
  return {
    website: label.links?.website || null,
    beatport: label.links?.beatport || `https://www.beatport.com/search?q=${enc}`,
    spotify: `https://open.spotify.com/search/${enc}`,
    youtube:
      label.links?.youtube ||
      `https://www.youtube.com/results?search_query=${enc}+label`,
    appleMusic: `https://music.apple.com/search?term=${enc}`,
    bandcamp: label.links?.bandcamp || null,
    soundcloud:
      label.links?.soundcloud || `https://soundcloud.com/search/people?q=${enc}`,
  };
}

function FactRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-baseline gap-3 py-2 border-b border-[rgba(212,175,55,0.3)]">
      <div className="font-bebas text-xs tracking-widest text-text-muted w-32 shrink-0">
        {label}
      </div>
      <div className="text-sm text-text-light font-barlow">{value}</div>
    </div>
  );
}

export default function LabelDetail({ label, related, signedArtists, posts }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';
  const links = buildLinks(label);
  const short = label.short?.[language] || label.short?.en;
  const bio = label.bio?.[language] || label.bio?.en;

  const breadcrumbItems = [
    { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
    { label: { en: 'Labels', ja: 'レーベル' }, href: '/labels' },
    { label: { en: label.name, ja: label.name }, href: `/labels/${label.slug}` },
  ];

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-4xl mx-auto">
          <div className="pt-8 pb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Hero */}
          <section className={`${label.banner} relative rounded-sm overflow-hidden p-8 md:p-12 mb-10`}>
            <div className="absolute inset-0 bg-dark-header/55" />
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-end">
              <div className="w-24 h-24 rounded-full border-2 border-accent-orange bg-white/[0.08] flex items-center justify-center text-5xl shadow-lg shrink-0">
                {label.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{label.flag}</span>
                  <span className="text-xs tracking-widest text-accent-peach font-bebas">
                    EST {label.founded} · {label.hq}
                  </span>
                </div>
                <h1 className="font-bebas text-5xl md:text-6xl tracking-wider text-[#F4E5A8] mb-2 drop-shadow-lg">
                  {label.name}
                </h1>
                <p className="text-text-light text-base leading-relaxed max-w-2xl">{short}</p>
                <div className="flex gap-2 flex-wrap mt-4">
                  {(label.subgenres || []).map((g) => (
                    <span
                      key={g}
                      className="text-xs tracking-widest px-2.5 py-1 rounded border border-accent-orange/40 bg-accent-orange/10 text-accent-peach"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
          </section>

          {/* Facts + Listen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            <div className="md:col-span-2 bg-white/[0.08] border border-[rgba(212,175,55,0.3)] rounded-sm p-6">
              <h2 className="font-bebas text-xl tracking-widest text-[#F4E5A8] mb-3">
                {isJA ? 'プロフィール' : 'At a Glance'}
              </h2>
              <FactRow label={isJA ? '本拠地' : 'Headquarters'} value={label.hq} />
              <FactRow label={isJA ? '設立' : 'Founded'} value={label.founded} />
              <FactRow
                label={isJA ? '創設者' : 'Founders'}
                value={(label.founders || []).join(', ')}
              />
              <FactRow
                label={isJA ? 'サブジャンル' : 'Subgenres'}
                value={(label.subgenres || []).join(', ')}
              />
            </div>

            <div className="bg-white/[0.08] border border-[rgba(212,175,55,0.3)] rounded-sm p-6">
              <h2 className="font-bebas text-xl tracking-widest text-[#F4E5A8] mb-3">
                {isJA ? '配信プラットフォーム' : 'Platforms'}
              </h2>
              <div className="flex flex-col gap-2">
                {links.website && (
                  <a
                    href={links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-peach hover:bg-accent-orange/10 transition-all"
                  >
                    🌐 {isJA ? '公式サイト' : 'OFFICIAL SITE'}
                  </a>
                )}
                <a
                  href={links.spotify}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-peach hover:bg-accent-orange/10 transition-all"
                >
                  🎧 {isJA ? 'SPOTIFYで検索' : 'SPOTIFY SEARCH'}
                </a>
                <a
                  href={links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-peach hover:bg-accent-orange/10 transition-all"
                >
                  ▶ YOUTUBE
                </a>
                <a
                  href={links.appleMusic}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-peach hover:bg-accent-orange/10 transition-all"
                >
                  🍎 APPLE MUSIC
                </a>
                <a
                  href={links.beatport}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-peach hover:bg-accent-orange/10 transition-all"
                >
                  🛒 BEATPORT
                </a>
                {links.bandcamp && (
                  <a
                    href={links.bandcamp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-peach hover:bg-accent-orange/10 transition-all"
                  >
                    💿 BANDCAMP
                  </a>
                )}
                <a
                  href={links.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tracking-widest font-bebas px-3 py-2 rounded border border-accent-orange/30 text-accent-peach hover:bg-accent-orange/10 transition-all"
                >
                  ☁️ SOUNDCLOUD
                </a>
              </div>
            </div>
          </div>

          {/* Bio */}
          <section className="mb-12">
            <h2 className="font-bebas text-3xl tracking-widest text-[#F4E5A8] mb-4">
              {isJA ? 'バイオグラフィ' : 'Biography'}
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />
            <div className="text-text-light text-base leading-loose font-barlow whitespace-pre-line">
              {bio}
            </div>
          </section>

          {/* Listen — search-URL hand-off only.
              Same rationale as the artist Listen section: stored
              Spotify IDs across the catalogue proved unreliable, and
              labels' /user/<name> URLs are unembeddable anyway. The
              section now exposes search-URL buttons across Spotify,
              YouTube, Apple Music and Beatport for the label as a
              whole, plus a Label Highlights grid emitting the same
              per-release. */}
          {(() => {
            const cards =
              (Array.isArray(label.embeds) && label.embeds.length > 0)
                ? label.embeds
                : featuredTracksForLabel(label, 5);
            return (
              <section className="mb-12">
                <h2 className="font-bebas text-3xl tracking-widest text-[#F4E5A8] mb-4">
                  {isJA ? '聴く' : 'Listen'}
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />
                <MusicEmbed
                  query={label.name}
                  label={
                    isJA
                      ? `${label.name} を各プラットフォームで検索`
                      : `Search "${label.name}" across platforms`
                  }
                />

                {cards.length > 0 && (
                  <div className="mt-8">
                    <h3 className="font-bebas text-lg tracking-widest text-[#F4E5A8] mb-3">
                      {isJA ? 'レーベルの代表作' : 'Label Highlights'}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {cards.map((e, i) => (
                        <MusicEmbed key={i} {...e} />
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })()}

          {/* Notable releases */}
          {label.topReleases?.length > 0 && (
            <section className="mb-12">
              <h2 className="font-bebas text-3xl tracking-widest text-[#F4E5A8] mb-4">
                {isJA ? '主要リリース' : 'Notable Releases'}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />
              <ul className="space-y-2">
                {label.topReleases.map((r, i) => (
                  <li
                    key={i}
                    className="bg-white/[0.08] border border-[rgba(212,175,55,0.3)] rounded-sm p-3 flex items-baseline justify-between gap-3"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-text-light text-sm font-barlow truncate">
                        <span className="font-semibold">{r.title}</span>
                        {r.artist && (
                          <span className="text-text-muted"> — {r.artist}</span>
                        )}
                      </div>
                      <div className="text-xs tracking-widest text-text-muted uppercase">
                        {r.type}
                      </div>
                    </div>
                    <div className="font-bebas text-accent-peach tracking-widest shrink-0">
                      {r.year}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Roster / Key Artists — auto-derived from the artists
              catalogue via getArtistsForLabel reverse-lookup. Each
              tile links into /artists/<slug> for the bidirectional
              artist↔label network. The list is capped at 15 to
              keep the section readable on labels with very large
              rosters; the full set continues to back the JSON-LD
              `member` array on the page. */}
          {signedArtists?.length > 0 && (
            <section className="mb-12">
              <h2 className="font-bebas text-3xl tracking-widest text-[#F4E5A8] mb-4">
                {isJA ? '所属アーティスト' : 'Roster / Key Artists'}
                {signedArtists.length > 0 && (
                  <span className="ml-3 text-base text-text-muted tracking-widest">
                    {signedArtists.length}
                  </span>
                )}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {signedArtists.slice(0, 15).map((a) => (
                  <Link
                    key={a.slug}
                    href={`/artists/${a.slug}`}
                    className="group bg-white/[0.08] border border-[rgba(212,175,55,0.3)] rounded-sm p-4 text-center hover:border-accent-orange/50 hover:translate-y-[-3px] transition-all"
                  >
                    <div className="text-3xl mb-2">{a.emoji}</div>
                    <div className="font-bebas text-sm tracking-widest text-white group-hover:text-accent-peach transition-colors">
                      {a.name}
                    </div>
                    <div className="text-xs text-text-muted tracking-widest mt-1">
                      {a.flag}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related labels */}
          {related?.length > 0 && (
            <section className="mb-12">
              <h2 className="font-bebas text-3xl tracking-widest text-[#F4E5A8] mb-4">
                {isJA ? '関連レーベル' : 'Related Labels'}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/labels/${r.slug}`}
                    className="group bg-white/[0.08] border border-[rgba(212,175,55,0.3)] rounded-sm p-4 hover:border-accent-orange/50 hover:translate-y-[-3px] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{r.emoji}</div>
                      <div className="min-w-0">
                        <div className="font-bebas text-sm tracking-widest text-white group-hover:text-accent-peach transition-colors truncate">
                          {r.name}
                        </div>
                        <div className="text-xs text-text-muted tracking-widest">
                          {r.flag} · {r.founded}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related blog posts */}
          {posts?.length > 0 && (
            <section className="mb-12">
              <h2 className="font-bebas text-3xl tracking-widest text-[#F4E5A8] mb-4">
                {isJA ? '関連記事' : 'Related Articles'}
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts.map((post) => {
                  const c = isJA ? post.ja : post.en;
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group block bg-white/[0.08] border border-[rgba(212,175,55,0.3)] rounded-sm overflow-hidden hover:border-accent-orange/50 hover:translate-y-[-3px] hover:shadow-lg transition-all"
                    >
                      <div className="h-1.5 bg-gradient-to-r from-accent-red via-accent-orange to-accent-amber" />
                      <div className="p-4">
                        <h3 className="font-bebas text-base tracking-widest text-[#F4E5A8] mb-2 leading-tight group-hover:text-accent-peach transition-colors">
                          {c.title}
                        </h3>
                        <p className="text-xs text-text-light line-clamp-2 mb-2">
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

          <div className="border-t border-[rgba(212,175,55,0.3)] pt-6">
            <Link
              href="/labels"
              className="inline-block font-bebas text-sm tracking-widest px-5 py-2 border border-accent-orange/30 text-accent-peach hover:bg-accent-orange/10 transition-all rounded"
            >
              ← {isJA ? 'レーベル一覧へ' : 'Back to all labels'}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useTranslation } from '@/lib/useTranslation';

const ABOUT_BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'About', ja: '運営者情報' }, href: '/about' },
];

const CONTACT_EMAIL = 'hello.sacredjapan@gmail.com';
const LAST_UPDATED = '2026-05-20';

function AboutEN() {
  return (
    <div className="space-y-8 text-text-light/90 text-sm leading-relaxed font-barlow">
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">1. Our Mission</h2>
        <p>
          TRANCE NEXUS exists to broadcast trance music culture to the world. From the euphoric
          uplifting anthems of A State of Trance to the cosmic frequencies of psytrance forests,
          we believe trance is more than a genre — it&apos;s a global movement of energy, emotion,
          and connection. Our mission is to be the most reliable, up-to-date hub for trance fans
          and DJs alike, in both English and Japanese.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">2. About</h2>
        <p className="mb-2">
          TRANCE NEXUS is an independent portal documenting trance music&apos;s history and present.
        </p>
        <p className="mb-2">
          The site is run by an independent trance fan. The operator started listening to trance
          and listens to A State of Trance every week.
        </p>
        <p>
          The goal of this site is to serve as an entry point for those new to the genre, and a
          place to revisit for longtime fans. Artists, labels, tracks, terminology, and three
          decades of scene history — all documented as accurately and respectfully as possible.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">3. What We Cover</h2>
        <ul className="list-disc list-inside space-y-1.5 ml-2">
          <li><strong className="text-text-light">Releases</strong> — new tracks, EPs, and album drops from the global trance scene</li>
          <li><strong className="text-text-light">Events</strong> — festivals, club nights, and trance-focused parties worldwide and in Japan</li>
          <li><strong className="text-text-light">Artists</strong> — profiles of legendary and emerging trance DJs and producers</li>
          <li><strong className="text-text-light">Labels</strong> — coverage of Armada, Anjunabeats, Black Hole, FSOE, Iboga, and other key imprints</li>
          <li><strong className="text-text-light">Radio Shows</strong> — schedules for ASOT, Group Therapy, Future Sound of Egypt, and more</li>
          <li><strong className="text-text-light">Setlists</strong> — tracklists pulled from the world&apos;s biggest trance sets</li>
          <li><strong className="text-text-light">Editorial</strong> — long-form articles on subgenres, history, production, and culture</li>
        </ul>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">4. Editorial Policy</h2>
        <p className="mb-3">
          TRANCE NEXUS is committed to maintaining trust with our readers through the following principles:
        </p>
        <ul className="list-disc list-inside space-y-1.5 ml-2">
          <li>
            <strong className="text-text-light">Accuracy</strong> — we cross-reference information from official artist channels,
            label sites, and trusted databases (1001Tracklists, Resident Advisor, di.fm). When data
            is uncertain, we say so.
          </li>
          <li>
            <strong className="text-text-light">Independence</strong> — our editorial coverage is not influenced by labels,
            promoters, or sponsors. Artists and labels are featured on merit and relevance to the
            scene, not paid placement.
          </li>
          <li>
            <strong className="text-text-light">Affiliate Disclosure</strong> — TRANCE NEXUS participates in affiliate programmes
            (Impact, Awin) and may earn a commission on qualifying purchases. Affiliate links are
            never promoted in a way that compromises editorial honesty. See our{' '}
            <Link href="/privacy" className="text-accent-orange hover:underline">
              Privacy Policy
            </Link>{' '}
            for full details.
          </li>
          <li>
            <strong className="text-text-light">Corrections</strong> — if we get something wrong, we fix it promptly and
            transparently. Please let us know.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">5. Contact</h2>
        <p>
          For listing requests, corrections, partnership enquiries, or just to say hi — please use
          our{' '}
          <Link href="/contact" className="text-accent-orange hover:underline">
            Contact page
          </Link>{' '}
          or email us directly at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">6. About the Operator</h2>
        <p>
          TRANCE NEXUS is independently operated by a single trance fan. It is not
          affiliated with any label, promoter, festival, or radio station. All editorial decisions,
          design, code, and data curation are handled in-house. If you&apos;d like to support the
          site, the best things you can do are: share an article, follow on social, or use our
          affiliate links when buying tracks or tickets.
        </p>
      </section>
    </div>
  );
}

function AboutJA() {
  return (
    <div className="space-y-8 text-text-light/90 text-sm leading-relaxed font-barlow">
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">1. ミッション</h2>
        <p>
          TRANCE NEXUS は、トランスミュージックカルチャーを世界に発信することを使命としています。
          A State of Trance の高揚感あふれるアンセムから、サイケデリック・トランスの宇宙的な周波数まで、
          トランスは単なる音楽ジャンルではなく、エネルギー・感情・つながりが交差するグローバルなムーブメントです。
          英語と日本語の両言語で、トランスファンと DJ にとって最も信頼でき、最新の情報が集まるハブを目指しています。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">2. 運営について</h2>
        <p className="mb-2">
          TRANCE NEXUS は、トランスミュージックの歴史と現在を記録する独立ポータルサイトです。
        </p>
        <p className="mb-2">
          運営者は一人のトランスファンです。トランスを聴き始め、現在は A State of Trance を
          毎週視聴しています。
        </p>
        <p>
          このサイトは、トランスというジャンルをまだ知らない人にとっての入り口になり、
          長年のファンにとっては記憶を辿る場所になることを目指しています。
          アーティスト、レーベル、楽曲、用語、そして30年以上にわたるシーンの軌跡を、
          できるだけ正確に、敬意を持って記録していきます。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">3. 取り扱うコンテンツ</h2>
        <ul className="list-disc list-inside space-y-1.5 ml-2">
          <li><strong className="text-text-light">リリース情報</strong> — 世界中のトランスシーンからの新譜・EP・アルバム情報</li>
          <li><strong className="text-text-light">イベント情報</strong> — フェス・クラブナイト・トランス特化型パーティー（海外・日本）</li>
          <li><strong className="text-text-light">アーティスト</strong> — 伝説的および新進気鋭のトランス DJ・プロデューサーのプロフィール</li>
          <li><strong className="text-text-light">レーベル</strong> — Armada, Anjunabeats, Black Hole, FSOE, Iboga など主要レーベルの動向</li>
          <li><strong className="text-text-light">ラジオ番組</strong> — ASOT, Group Therapy, Future Sound of Egypt などの番組スケジュール</li>
          <li><strong className="text-text-light">セットリスト</strong> — 世界の主要トランスセットからのトラックリスト</li>
          <li><strong className="text-text-light">エディトリアル</strong> — サブジャンル・歴史・制作・カルチャーを掘り下げる長文記事</li>
        </ul>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">4. 編集ポリシー</h2>
        <p className="mb-3">
          TRANCE NEXUS は、読者との信頼関係を保つために以下の方針を遵守しています：
        </p>
        <ul className="list-disc list-inside space-y-1.5 ml-2">
          <li>
            <strong className="text-text-light">情報の正確性</strong> — アーティスト公式・レーベル公式・信頼できるデータベース
            （1001Tracklists, Resident Advisor, di.fm 等）と照合した情報のみを掲載しています。
            不確実な情報については、その旨を明記します。
          </li>
          <li>
            <strong className="text-text-light">編集の独立性</strong> — 当サイトの編集内容は、レーベル・プロモーター・スポンサーから影響を受けません。
            アーティストやレーベルの掲載は、シーンへの貢献度と関連性に基づくもので、対価を受けた掲載ではありません。
          </li>
          <li>
            <strong className="text-text-light">アフィリエイト開示</strong> — TRANCE NEXUS はアフィリエイトプログラム（Impact, Awin）に参加しており、
            該当リンク経由でのご購入により報酬を受け取ることがあります。
            アフィリエイトリンクは、編集の誠実性を損なう形では掲載しません。詳細は
            <Link href="/privacy" className="text-accent-orange hover:underline mx-1">
              プライバシーポリシー
            </Link>
            をご参照ください。
          </li>
          <li>
            <strong className="text-text-light">訂正対応</strong> — 誤りがあった場合は、迅速かつ透明性をもって訂正します。
            お気づきの点があればぜひお知らせください。
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">5. お問い合わせ</h2>
        <p>
          掲載依頼・訂正依頼・パートナーシップのご相談など、お気軽に
          <Link href="/contact" className="text-accent-orange hover:underline mx-1">
            お問い合わせページ
          </Link>
          からご連絡ください。直接メールでも受け付けています：{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">6. 運営者について</h2>
        <p>
          TRANCE NEXUS は、一人のトランスファンによって個人運営されています。
          特定のレーベル・プロモーター・フェス・ラジオ局とは一切提携していません。
          編集判断・デザイン・コード・データキュレーションのすべてを内製で行っています。
          サイトを応援していただける方は、記事のシェア・SNSでのフォロー・楽曲やチケット購入時の
          アフィリエイトリンクのご利用が最大の支援となります。
        </p>
      </section>
    </div>
  );
}

export default function AboutPage() {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: isJA ? '運営者情報 | TRANCE NEXUS' : 'About | TRANCE NEXUS',
    description: isJA
      ? 'TRANCE NEXUS のミッション・編集ポリシー・運営者情報。トランスミュージックカルチャーを世界に発信する独立系バイリンガルポータルです。'
      : 'TRANCE NEXUS mission, editorial policy, and operator info. An independent bilingual portal broadcasting trance music culture worldwide.',
    url: 'https://trance-nexus.com/about',
    inLanguage: ['en', 'ja'],
    mainEntity: {
      '@type': 'Organization',
      name: 'TRANCE NEXUS',
      url: 'https://trance-nexus.com',
      email: CONTACT_EMAIL,
      description: isJA
        ? 'トランスミュージック情報ポータル — リリース、イベント、アーティスト、ラジオ番組、セットリストを網羅。'
        : 'Trance music information portal — releases, events, artists, radio shows, and setlists.',
      sameAs: [],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-3xl mx-auto">
          <div className="py-12">
            <div className="mb-4">
              <Breadcrumb items={ABOUT_BREADCRUMB} />
            </div>
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {isJA ? '運営者情報' : 'About TRANCE NEXUS'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-4" />
            <p className="text-xs text-text-muted tracking-widest">
              {isJA ? `最終更新日: ${LAST_UPDATED}` : `Last updated: ${LAST_UPDATED}`}
            </p>
          </div>

          {isJA ? <AboutJA /> : <AboutEN />}
        </div>
      </main>
      <Footer />
    </>
  );
}

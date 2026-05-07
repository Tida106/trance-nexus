'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

const COOKIES_BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'Cookie Policy', ja: 'Cookieポリシー' }, href: '/cookies' },
];

const CONTACT_EMAIL = 'hello.sacredjapan@gmail.com';
const LAST_UPDATED = '2026-05-05';

// Single source of truth for the third-party cookie table — rendered in both languages.
const THIRD_PARTY = [
  {
    name: 'Google Analytics',
    purpose: { en: 'Anonymised site analytics (page views, sessions, referrals)', ja: '匿名のサイト分析（ページビュー、セッション、参照元）' },
    type: { en: 'Analytics', ja: '分析' },
    policy: 'https://policies.google.com/privacy',
  },
  {
    name: 'Google AdSense',
    purpose: { en: 'Personalised and contextual advertisements', ja: 'パーソナライズおよびコンテキスト広告の配信' },
    type: { en: 'Advertising', ja: '広告' },
    policy: 'https://policies.google.com/technologies/ads',
  },
  {
    name: 'Awin',
    purpose: { en: 'Affiliate-link attribution (Resident Advisor and others)', ja: 'アフィリエイトリンク計測（Resident Advisor等）' },
    type: { en: 'Affiliate', ja: 'アフィリエイト' },
    policy: 'https://www.awin.com/gb/legal/privacy-policy',
  },
  {
    name: 'Impact',
    purpose: { en: 'Affiliate-link attribution (Beatport and others)', ja: 'アフィリエイトリンク計測（Beatport等）' },
    type: { en: 'Affiliate', ja: 'アフィリエイト' },
    policy: 'https://impact.com/privacy-policy/',
  },
];

function CookieTypeCard({ title, body }) {
  return (
    <div className="bg-dark-bg2/60 border border-orange-900/20 rounded-sm p-5">
      <h3 className="font-bebas text-base tracking-widest text-accent-orange mb-2">{title}</h3>
      <p className="text-text-light/75 text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function ThirdPartyTable({ isJA }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-orange-900/20">
        <thead>
          <tr className="bg-dark-bg2/60 text-left">
            <th className="font-bebas text-xs tracking-widest text-accent-orange p-3 border-b border-orange-900/20">
              {isJA ? 'サービス' : 'Service'}
            </th>
            <th className="font-bebas text-xs tracking-widest text-accent-orange p-3 border-b border-orange-900/20">
              {isJA ? '種類' : 'Type'}
            </th>
            <th className="font-bebas text-xs tracking-widest text-accent-orange p-3 border-b border-orange-900/20">
              {isJA ? '目的' : 'Purpose'}
            </th>
            <th className="font-bebas text-xs tracking-widest text-accent-orange p-3 border-b border-orange-900/20">
              {isJA ? 'プライバシーポリシー' : 'Privacy Policy'}
            </th>
          </tr>
        </thead>
        <tbody>
          {THIRD_PARTY.map((p) => (
            <tr key={p.name} className="border-b border-orange-900/15">
              <td className="p-3 text-text-light font-barlow font-semibold align-top">{p.name}</td>
              <td className="p-3 text-text-light/75 font-barlow align-top">
                {isJA ? p.type.ja : p.type.en}
              </td>
              <td className="p-3 text-text-light/75 font-barlow align-top">
                {isJA ? p.purpose.ja : p.purpose.en}
              </td>
              <td className="p-3 align-top">
                <a
                  href={p.policy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-orange hover:underline text-xs tracking-widest"
                >
                  {isJA ? 'リンク' : 'Link'} ↗
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CookiesEN() {
  return (
    <div className="space-y-8 text-text-light/75 text-sm leading-relaxed font-barlow">
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files that a website places on your browser or device when you
          visit. They are widely used to make websites work, to make them work more efficiently, and
          to provide information to the site owner. Some cookies are essential to the site&apos;s
          basic functionality; others are optional and only used with your consent.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">2. Types of Cookies We Use</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <CookieTypeCard
            title="Essential Cookies"
            body="These are first-party cookies and localStorage entries set directly by TRANCE NEXUS — for example, the language preference toggle (en/ja) and the cookie-consent state. The site cannot function correctly without them, and they do not require consent."
          />
          <CookieTypeCard
            title="Analytics Cookies"
            body="If you accept the cookie banner, Google Analytics is loaded and sets cookies that count anonymous page views and aggregate session data. IP addresses are anonymised. We use this only to understand which articles and features are most useful to readers."
          />
          <CookieTypeCard
            title="Advertising Cookies"
            body="Google AdSense may set cookies to serve relevant advertisements based on your browsing history across sites that participate in Google's network. You can opt out of personalised advertising at adssettings.google.com without affecting your access to the site."
          />
          <CookieTypeCard
            title="Affiliate Cookies"
            body="When you click an affiliate link (e.g. to Beatport via Impact, or Resident Advisor via Awin), the destination network sets a cookie to attribute any subsequent purchase to TRANCE NEXUS. No personal information is shared with us; we only see aggregate commission reports."
          />
        </div>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">3. Third-Party Cookies</h2>
        <p className="mb-4">
          The following third-party services may set cookies through the Site. Each service operates
          under its own privacy policy. We do not control these cookies — they are governed by the
          respective providers.
        </p>
        <ThirdPartyTable isJA={false} />
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">4. Managing & Disabling Cookies</h2>
        <p className="mb-3">
          You can control cookies through your browser settings. Most browsers let you block all
          cookies, block only third-party cookies, or delete existing cookies. Refer to your
          browser&apos;s help pages for instructions:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer"
               className="text-accent-orange hover:underline">Chrome</a>
          </li>
          <li>
            <a href="https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer"
               className="text-accent-orange hover:underline">Firefox</a>
          </li>
          <li>
            <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer"
               className="text-accent-orange hover:underline">Safari</a>
          </li>
          <li>
            <a href="https://support.microsoft.com/microsoft-edge/cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer"
               className="text-accent-orange hover:underline">Edge</a>
          </li>
        </ul>
        <p className="mt-3">
          Blocking essential cookies will prevent the language toggle and cookie-consent state from
          persisting across visits. Blocking analytics or advertising cookies will not affect your
          ability to read the Site, but may affect the relevance of advertisements you see.
        </p>
        <p className="mt-3">
          To opt out of personalised Google advertising specifically, visit{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"
             className="text-accent-orange hover:underline">Google Ads Settings</a>.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">5. The Cookie Consent Banner</h2>
        <p>
          When you first visit TRANCE NEXUS, a banner appears at the bottom of the page asking you
          to <strong className="text-text-light">Accept</strong> or{' '}
          <strong className="text-text-light">Decline</strong> non-essential cookies. Your choice is
          stored locally in your browser (under the key{' '}
          <code className="text-accent-orange">tn-cookie-consent</code>) and remembered on subsequent
          visits. If you decline, Google Analytics will not be loaded. If you accept, Google
          Analytics is loaded with IP anonymisation enabled. You can clear the choice at any time by
          clearing your browser&apos;s site data for trance-nexus.com — the banner will reappear on
          your next visit.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">6. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes in the third-party
          services we use or in applicable law. The revision date at the top of this page reflects
          the most recent change. Material changes will be announced via the cookie consent banner
          where appropriate.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">7. Contact</h2>
        <p>
          For questions about this Cookie Policy, contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>
          . See also our{' '}
          <Link href="/privacy" className="text-accent-orange hover:underline">Privacy Policy</Link>
          {' '}and{' '}
          <Link href="/terms" className="text-accent-orange hover:underline">Terms of Service</Link>.
        </p>
      </section>
    </div>
  );
}

function CookiesJA() {
  return (
    <div className="space-y-8 text-text-light/75 text-sm leading-relaxed font-barlow">
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">1. Cookieとは</h2>
        <p>
          Cookieは、ウェブサイトを訪問した際にお使いのブラウザまたはデバイスに保存される小さなテキストファイルです。サイトを動作させたり、効率的に機能させたり、サイト運営者に情報を提供したりする目的で広く使われています。一部のCookieはサイトの基本機能に不可欠であり、その他のCookieは任意であり、ご同意いただいた場合にのみ使用されます。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">2. 当サイトで使用するCookieの種類</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <CookieTypeCard
            title="必須Cookie"
            body="TRANCE NEXUS が直接設定するファーストパーティCookieおよびlocalStorageエントリーです。例として、言語設定（en/ja）とCookie同意状態の保存があります。これらがないとサイトは正常に動作せず、同意は不要です。"
          />
          <CookieTypeCard
            title="分析Cookie"
            body="Cookie同意バナーで「同意する」を選択された場合、Google Analyticsが読み込まれ、匿名のページビューとセッション集計データを計測するCookieが設定されます。IPアドレスは匿名化されます。記事や機能の有用性を把握するためだけに使用します。"
          />
          <CookieTypeCard
            title="広告Cookie"
            body="Google AdSenseは、Googleのネットワークに参加しているサイトを通じた閲覧履歴に基づき関連広告を配信するためのCookieを設定する場合があります。サイトへのアクセスに影響することなく、adssettings.google.com にてパーソナライズ広告をオフにできます。"
          />
          <CookieTypeCard
            title="アフィリエイトCookie"
            body="アフィリエイトリンク（例：Impact経由のBeatport、Awin経由のResident Advisor）をクリックされると、リンク先ネットワークが当サイトに購入を計測するためのCookieを設定します。当方に個人情報は共有されず、集計された報酬レポートのみ受け取ります。"
          />
        </div>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">3. 第三者Cookieの一覧</h2>
        <p className="mb-4">
          以下の第三者サービスが当サイトを通じてCookieを設定する場合があります。各サービスはそれぞれのプライバシーポリシーに基づき運営されています。当方はこれらのCookieを管理しておらず、各提供者の管理下にあります。
        </p>
        <ThirdPartyTable isJA={true} />
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">4. Cookieの管理・無効化方法</h2>
        <p className="mb-3">
          Cookieはブラウザの設定で管理できます。多くのブラウザでは、すべてのCookieのブロック、第三者Cookieのみのブロック、既存のCookieの削除が可能です。ブラウザのヘルプをご参照ください：
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>
            <a href="https://support.google.com/chrome/answer/95647?hl=ja" target="_blank" rel="noopener noreferrer"
               className="text-accent-orange hover:underline">Chrome</a>
          </li>
          <li>
            <a href="https://support.mozilla.org/ja/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer"
               className="text-accent-orange hover:underline">Firefox</a>
          </li>
          <li>
            <a href="https://support.apple.com/ja-jp/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer"
               className="text-accent-orange hover:underline">Safari</a>
          </li>
          <li>
            <a href="https://support.microsoft.com/ja-jp/microsoft-edge/microsoft-edge-%E3%81%A7-cookie-%E3%82%92%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer"
               className="text-accent-orange hover:underline">Edge</a>
          </li>
        </ul>
        <p className="mt-3">
          必須Cookieをブロックされた場合、言語設定とCookie同意状態が訪問間で保持されません。分析・広告Cookieをブロックされても閲覧自体には影響ありませんが、表示される広告の関連性に影響する場合があります。
        </p>
        <p className="mt-3">
          Googleパーソナライズ広告のオプトアウトは
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"
             className="text-accent-orange hover:underline mx-1">Google広告設定</a>
          から行えます。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">5. Cookie同意バナーについて</h2>
        <p>
          初めてTRANCE NEXUSをご訪問いただくと、ページ下部に
          <strong className="text-text-light">「同意する」</strong>または
          <strong className="text-text-light">「拒否する」</strong>
          を選択するバナーが表示されます。お選びいただいた状態はブラウザにローカル保存され（キー名：
          <code className="text-accent-orange">tn-cookie-consent</code>
          ）、次回以降の訪問でも記憶されます。「拒否する」を選択された場合、Google Analyticsは読み込まれません。「同意する」を選択された場合、IPアドレス匿名化を有効にした上でGoogle Analyticsが読み込まれます。お選びいただいた内容は、ブラウザのサイト・データ（trance-nexus.com）をクリアすることでいつでもリセットでき、次回訪問時にバナーが再表示されます。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">6. ポリシーの更新</h2>
        <p>
          利用する第三者サービスや適用される法令の変更を反映するため、本Cookieポリシーを随時更新する場合があります。本ページ冒頭の更新日が直近の変更を反映します。重要な変更があった場合、必要に応じてCookie同意バナーで通知します。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">7. お問い合わせ</h2>
        <p>
          本Cookieポリシーに関するご質問は{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>
          までご連絡ください。あわせて
          <Link href="/privacy" className="text-accent-orange hover:underline mx-1">プライバシーポリシー</Link>
          および
          <Link href="/terms" className="text-accent-orange hover:underline mx-1">利用規約</Link>
          もご確認ください。
        </p>
      </section>
    </div>
  );
}

export default function CookiesPage() {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://trance-nexus.com/cookies',
    name: isJA ? 'Cookieポリシー | TRANCE NEXUS' : 'Cookie Policy | TRANCE NEXUS',
    description: isJA
      ? 'TRANCE NEXUSが使用するCookieの種類、第三者サービス、管理方法、同意バナーの説明。'
      : 'Cookie types used by TRANCE NEXUS, third-party services, management instructions, and cookie consent banner details.',
    url: 'https://trance-nexus.com/cookies',
    inLanguage: ['en', 'ja'],
    isPartOf: {
      '@type': 'WebSite',
      name: 'TRANCE NEXUS',
      url: 'https://trance-nexus.com',
    },
    dateModified: LAST_UPDATED,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-3xl mx-auto">
          <div className="py-12">
            <div className="mb-4">
              <Breadcrumb items={COOKIES_BREADCRUMB} />
            </div>
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {isJA ? 'Cookieポリシー' : 'Cookie Policy'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-4" />
            <p className="text-xs text-text-muted tracking-widest">
              {isJA ? `最終更新日: ${LAST_UPDATED}` : `Last updated: ${LAST_UPDATED}`}
            </p>
          </div>

          {isJA ? <CookiesJA /> : <CookiesEN />}
        </div>
      </main>
      <Footer />
    </>
  );
}

'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslation } from '@/lib/useTranslation';

const CONTACT_EMAIL = 'hello.sacredjapan@gmail.com';
const LAST_UPDATED = '2026-05-05';

function PrivacyEN() {
  return (
    <div className="space-y-8 text-text-light/75 text-sm leading-relaxed font-barlow">
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">1. Overview</h2>
        <p>
          TRANCE NEXUS (&ldquo;this site&rdquo;) is a fan-made trance music information portal providing
          artist profiles, radio show schedules, setlists, and event information. This Privacy
          Policy explains how we handle information collected through your use of the site.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">2. Cookies &amp; Advertising</h2>
        <p className="mb-2">
          This site uses <strong className="text-text-light">Google AdSense</strong> to display
          advertisements. Google AdSense uses cookies to serve ads based on your prior visits to
          this and other websites. You can opt out of personalised advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"
             className="text-accent-orange hover:underline">
            Google Ads Settings
          </a>.
        </p>
        <p>
          Cookies set by Google AdSense may collect information such as your IP address, browser
          type, pages visited, and device identifiers. This information is used by Google to
          serve relevant advertisements and is subject to{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
             className="text-accent-orange hover:underline">
            Google&apos;s Privacy Policy
          </a>.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">3. Affiliate Links</h2>
        <p className="mb-2">
          This site participates in affiliate programmes and may earn a commission when you click
          certain links and make a purchase or sign up. Current affiliate networks include:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong className="text-text-light">Impact</strong> — Beatport and other music services</li>
          <li><strong className="text-text-light">Awin</strong> — Resident Advisor ticketing</li>
        </ul>
        <p className="mt-2">
          Affiliate links are tracked via cookies placed by these networks. No personally
          identifiable information is shared with us as a result of your clicks.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">4. Access Analytics</h2>
        <p>
          This site may use <strong className="text-text-light">Google Analytics</strong> to
          analyse site traffic and improve content. Google Analytics collects anonymised data
          such as page views, session duration, and referral sources via cookies. This data does
          not identify you personally and is processed in accordance with Google&apos;s Privacy Policy.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">5. Personal Information</h2>
        <p>
          This site does not operate user registration, login, or purchase functionality, and
          therefore does not directly collect personally identifiable information such as names,
          addresses, or payment details. Any personal data processed by third-party services
          (Google, Impact, Awin) is governed by their respective privacy policies.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">6. Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or transfer your personal information to outside parties except
          as described in this policy (i.e., through the third-party services listed above).
          Each third party operates under its own privacy policy and security standards.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on
          this page with an updated revision date.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">8. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </div>
  );
}

function PrivacyJA() {
  return (
    <div className="space-y-8 text-text-light/75 text-sm leading-relaxed font-barlow">
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">1. 概要</h2>
        <p>
          TRANCE NEXUS（以下「当サイト」）は、トランスミュージックに関するアーティスト情報・ラジオ番組スケジュール・セットリスト・イベント情報を提供するファンメイドのポータルサイトです。本プライバシーポリシーは、当サイトのご利用を通じて収集される情報の取り扱いについて説明します。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">2. Cookie・広告について</h2>
        <p className="mb-2">
          当サイトでは、<strong className="text-text-light">Google AdSense</strong> を利用して広告を配信しています。
          Google AdSense は、ユーザーが当サイトおよび他のウェブサイトを訪問した履歴に基づいて、関連性の高い広告を表示するために Cookie を使用します。
          パーソナライズ広告を無効にするには、
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"
             className="text-accent-orange hover:underline mx-1">
            Google 広告設定
          </a>
          をご確認ください。
        </p>
        <p>
          Google AdSense が設定する Cookie には、IPアドレス・ブラウザの種類・閲覧ページ・端末識別子などの情報が含まれる場合があります。これらの情報は Googleの
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
             className="text-accent-orange hover:underline mx-1">
            プライバシーポリシー
          </a>
          に従って処理されます。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">3. アフィリエイトリンクについて</h2>
        <p className="mb-2">
          当サイトはアフィリエイトプログラムに参加しており、掲載リンク経由でご購入・ご登録いただいた場合に報酬を受け取ることがあります。利用中のアフィリエイトネットワークは以下のとおりです：
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li><strong className="text-text-light">Impact</strong> — Beatport 等の音楽サービス</li>
          <li><strong className="text-text-light">Awin</strong> — Resident Advisor のチケット販売</li>
        </ul>
        <p className="mt-2">
          アフィリエイトリンクは各ネットワークが設置する Cookie によってトラッキングされます。クリックによって当サイトが個人を特定できる情報を取得することはありません。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">4. アクセス解析について</h2>
        <p>
          当サイトでは、サイト改善を目的として <strong className="text-text-light">Google Analytics</strong> を使用する場合があります。
          Google Analytics はページビュー・滞在時間・参照元などの匿名データを Cookie 経由で収集します。個人を特定する情報は収集されません。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">5. 個人情報の取り扱い</h2>
        <p>
          当サイトは会員登録・ログイン・購入機能を提供していないため、氏名・住所・決済情報などの個人情報を直接収集することはありません。
          第三者サービス（Google・Impact・Awin）が処理する個人データは、各サービスのプライバシーポリシーに従って取り扱われます。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">6. 第三者への提供</h2>
        <p>
          当サイトは、本ポリシーに記載された第三者サービスへの提供を除き、ユーザーの個人情報を販売・交換・移転することはありません。
          各第三者は独自のプライバシーポリシーおよびセキュリティ基準のもとで運営されています。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">7. ポリシーの変更</h2>
        <p>
          本プライバシーポリシーは随時更新されることがあります。変更があった場合は、このページに更新日とともに掲載します。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">8. お問い合わせ</h2>
        <p>
          本プライバシーポリシーに関するお問い合わせは、以下のメールアドレスまでご連絡ください：{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </div>
  );
}

export default function PrivacyPage() {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[60px] pb-20 px-12">
        <div className="max-w-3xl mx-auto">
          <div className="py-12">
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {isJA ? 'プライバシーポリシー' : 'Privacy Policy'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-4" />
            <p className="text-xs text-text-muted tracking-widest">
              {isJA ? `最終更新日: ${LAST_UPDATED}` : `Last updated: ${LAST_UPDATED}`}
            </p>
          </div>

          {isJA ? <PrivacyJA /> : <PrivacyEN />}
        </div>
      </main>
      <Footer />
    </>
  );
}

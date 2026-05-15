'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

const TERMS_BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'Terms of Service', ja: '利用規約' }, href: '/terms' },
];

const CONTACT_EMAIL = 'hello.sacredjapan@gmail.com';
const LAST_UPDATED = '2026-05-05';

function TermsEN() {
  return (
    <div className="space-y-8 text-text-light/90 text-sm leading-relaxed font-barlow">
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">1. Introduction</h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of TRANCE NEXUS
          (the &ldquo;Site&rdquo;), a fan-made trance music information portal operated independently
          from Japan. By accessing or using the Site you agree to be bound by these Terms. If you do
          not agree, please do not use the Site.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">2. Nature of the Site</h2>
        <p>
          TRANCE NEXUS is a non-commercial, fan-operated information portal. It is not affiliated
          with any artist, record label, festival promoter, radio station, or other entity referenced
          on the Site. All artist, label, event, radio show, and tracklist information is collected
          and curated for educational and editorial purposes.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">3. Use of the Site</h2>
        <p className="mb-2">
          You may access and read the Site for personal, non-commercial use. You agree not to:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Use automated systems (scrapers, bots, crawlers) that violate our robots.txt or impose
              an unreasonable load on our infrastructure</li>
          <li>Republish substantial portions of our editorial content without permission</li>
          <li>Use the Site or its content in any way that infringes the rights of artists, labels,
              or other third parties</li>
          <li>Attempt to disrupt, deface, or compromise the Site&apos;s availability or security</li>
        </ul>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">4. Intellectual Property</h2>
        <p className="mb-2">
          The editorial text, layout, design, original artwork, and source code of the Site are the
          property of TRANCE NEXUS and protected by applicable copyright laws. You may quote short
          excerpts of editorial content with attribution and a link back to the Site.
        </p>
        <p>
          Artist names, label names, track titles, album titles, event names, and related trademarks
          are the property of their respective owners. Their inclusion on the Site is for
          identification and editorial reference only and does not imply endorsement or affiliation.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">5. Affiliate Links</h2>
        <p>
          The Site participates in affiliate programmes (including Impact for Beatport and Awin for
          Resident Advisor) and may earn a commission when you click certain links and complete a
          qualifying purchase or signup. Affiliate participation does not influence editorial
          coverage. See our{' '}
          <Link href="/privacy" className="text-accent-orange hover:underline">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/about" className="text-accent-orange hover:underline">
            About page
          </Link>{' '}
          for full disclosure.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">6. Third-Party Services & Links</h2>
        <p>
          The Site links to and embeds content from third-party services including Beatport, Resident
          Advisor, Spotify, Apple Music, SoundCloud, YouTube, 1001Tracklists, Google AdSense, and
          Google Analytics. We are not responsible for the content, availability, accuracy, or
          practices of any third-party site or service. Your use of those services is governed by
          their respective terms.
        </p>
        <p className="mt-2">
          <strong className="text-text-light">Embedded media.</strong> The Site uses official iframe
          embeds provided by music platforms to surface tracks, artist pages, and playlists. All
          rights to the embedded recordings and underlying compositions remain with the artists,
          rights-holders, and the platforms that host them. The Site does not host, mirror, or
          re-upload any audio or video content; embeds stream directly from the originating
          platform. Playback availability, content windows, and DRM are determined by the platform.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">7. Accuracy & No Warranties</h2>
        <p>
          The Site&apos;s information is provided &ldquo;as is&rdquo; for general informational
          purposes. While we make reasonable efforts to keep schedules, tracklists, releases, and
          artist data accurate and up to date, we make no warranty as to completeness, timeliness,
          or reliability. Event dates, ticket prices, radio show times, and similar details may
          change without notice. Always verify time-sensitive information with the official source
          before acting on it.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, TRANCE NEXUS and its operator shall not be liable
          for any direct, indirect, incidental, consequential, or special damages arising from your
          use of, or inability to use, the Site — including but not limited to damages relating to
          missed events, incorrect tracklists, broken affiliate links, or third-party service
          failures.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">9. Removal Requests</h2>
        <p>
          If you are an artist, label, or rights holder and believe content on the Site infringes
          your rights, or you would prefer not to be listed, please contact us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>{' '}
          and we will review and respond promptly.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">10. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Material changes will be reflected by an
          updated revision date at the top of this page. Continued use of the Site after such
          changes constitutes acceptance of the updated Terms.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">11. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of Japan. Any
          disputes arising out of or in connection with these Terms shall be subject to the exclusive
          jurisdiction of the courts of Japan.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">12. Contact</h2>
        <p>
          For any questions regarding these Terms, please contact us at:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </div>
  );
}

function TermsJA() {
  return (
    <div className="space-y-8 text-text-light/90 text-sm leading-relaxed font-barlow">
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">1. はじめに</h2>
        <p>
          本利用規約（以下「本規約」）は、日本から独立して運営されるファンメイドのトランスミュージック情報ポータル「TRANCE NEXUS」（以下「当サイト」）へのアクセスおよび利用に適用されます。当サイトを利用された時点で、本規約に同意いただいたものとみなします。同意いただけない場合は、当サイトの利用をお控えください。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">2. サイトの性質</h2>
        <p>
          TRANCE NEXUSは非商業的な、ファンによって運営される情報ポータルです。当サイトに掲載される一切のアーティスト、レーベル、フェス主催者、ラジオ局、その他の組織と提携関係はありません。アーティスト、レーベル、イベント、ラジオ番組、トラックリストの情報は、教育・編集目的で収集・キュレーションされたものです。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">3. 利用条件</h2>
        <p className="mb-2">
          当サイトは個人的・非商業的な閲覧目的に限り利用できます。利用者は以下の行為を行わないものとします：
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>当サイトのrobots.txtに違反する、またはインフラに過大な負荷を与える自動化システム（スクレイパー、ボット、クローラ等）の利用</li>
          <li>当サイトの編集コンテンツを許可なく大量に転載する行為</li>
          <li>アーティスト、レーベル、その他第三者の権利を侵害する形で当サイトまたはその内容を利用する行為</li>
          <li>当サイトの可用性またはセキュリティを妨害・損壊・侵害しようとする行為</li>
        </ul>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">4. 知的財産権</h2>
        <p className="mb-2">
          当サイトの編集テキスト、レイアウト、デザイン、オリジナル・アートワーク、ソースコードはTRANCE NEXUSに帰属し、適用される著作権法により保護されます。編集コンテンツを引用される場合は、出典明記と当サイトへのリンクを伴って短い抜粋に限り認められます。
        </p>
        <p>
          アーティスト名、レーベル名、楽曲名、アルバム名、イベント名およびこれに付随する商標は、それぞれの権利者に帰属します。当サイトでの掲載は識別および編集上の参照を目的とするものであり、いかなる推薦・提携を意味するものではありません。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">5. アフィリエイトリンク</h2>
        <p>
          当サイトはアフィリエイトプログラム（Beatport向けのImpact、Resident Advisor向けのAwin等）に参加しており、特定のリンクを経由して条件を満たすご購入・ご登録をいただいた場合に報酬を受け取ることがあります。アフィリエイト参加が編集内容に影響することはありません。詳細は
          <Link href="/privacy" className="text-accent-orange hover:underline mx-1">
            プライバシーポリシー
          </Link>
          および
          <Link href="/about" className="text-accent-orange hover:underline mx-1">
            運営者情報
          </Link>
          をご参照ください。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">6. 第三者サービス・リンク</h2>
        <p>
          当サイトはBeatport、Resident Advisor、Spotify、Apple Music、SoundCloud、YouTube、1001Tracklists、Google AdSense、Google Analyticsなど第三者サービスへのリンクおよびそれらのコンテンツの埋め込みを行います。第三者サイト・サービスのコンテンツ、可用性、正確性、運用について当サイトは一切の責任を負いません。利用者によるそれらの利用は、各サービスの規約に従います。
        </p>
        <p className="mt-2">
          <strong className="text-text-light">埋め込みコンテンツについて。</strong>当サイトは音楽プラットフォーム公式のiframe埋め込み機能を用いて、楽曲・アーティストページ・プレイリストを表示します。埋め込まれた録音物および原著作物に関する一切の権利は、各アーティスト、権利者、ホストプラットフォームに帰属します。当サイトは音声・映像コンテンツのホスティング、ミラーリング、再アップロードを行いません。埋め込みコンテンツは元のプラットフォームから直接ストリーミング再生されます。再生可否、配信期間、DRMは各プラットフォームが決定します。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">7. 情報の正確性・無保証</h2>
        <p>
          当サイトの情報は一般的な情報提供を目的として「現状有姿」で提供されます。スケジュール、トラックリスト、リリース、アーティスト情報を可能な限り正確かつ最新に保つよう合理的な努力を払いますが、完全性、適時性、信頼性について保証するものではありません。イベントの日程、チケット価格、ラジオ番組の放送時刻などは予告なく変更される場合があります。時間に依存する情報については、行動を起こす前に必ず公式情報源をご確認ください。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">8. 免責・責任の制限</h2>
        <p>
          法令により認められる最大限の範囲で、TRANCE NEXUSおよび運営者は、当サイトの利用または利用不能から生じるいかなる直接的・間接的・付随的・派生的・特別損害（イベント参加機会の損失、不正確なトラックリスト、機能しないアフィリエイトリンク、第三者サービスの障害に関するものを含むがこれに限らない）についても責任を負いません。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">9. 削除依頼</h2>
        <p>
          アーティスト、レーベル、または権利者の方で、当サイトのコンテンツが権利を侵害している、または掲載をご希望されない場合は、
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline mx-1">
            {CONTACT_EMAIL}
          </a>
          までご連絡ください。確認の上、速やかに対応いたします。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">10. 規約の変更</h2>
        <p>
          本規約は随時更新されることがあります。重要な変更は、本ページ冒頭の更新日に反映されます。変更後も当サイトの利用を継続される場合、更新後の規約に同意いただいたものとみなします。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">11. 準拠法・管轄</h2>
        <p>
          本規約は日本法に準拠し、これに従って解釈されます。本規約に起因または関連して生じる一切の紛争については、日本の裁判所を専属的合意管轄とします。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">12. お問い合わせ</h2>
        <p>
          本規約に関するご質問は、以下のメールアドレスまでご連絡ください：{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </div>
  );
}

export default function TermsPage() {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  return (
    <>
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-3xl mx-auto">
          <div className="py-12">
            <div className="mb-4">
              <Breadcrumb items={TERMS_BREADCRUMB} />
            </div>
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {isJA ? '利用規約' : 'Terms of Service'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-4" />
            <p className="text-xs text-text-muted tracking-widest">
              {isJA ? `最終更新日: ${LAST_UPDATED}` : `Last updated: ${LAST_UPDATED}`}
            </p>
          </div>

          {isJA ? <TermsJA /> : <TermsEN />}
        </div>
      </main>
      <Footer />
    </>
  );
}

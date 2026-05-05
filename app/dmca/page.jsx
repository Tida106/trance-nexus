'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import Link from 'next/link';
import { useTranslation } from '@/lib/useTranslation';

const DMCA_BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'DMCA / Copyright', ja: 'DMCA・著作権ポリシー' }, href: '/dmca' },
];

const CONTACT_EMAIL = 'hello.sacredjapan@gmail.com';
const LAST_UPDATED = '2026-05-05';

function DmcaEN() {
  return (
    <div className="space-y-8 text-text-light/75 text-sm leading-relaxed font-barlow">
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">1. DMCA Compliance Statement</h2>
        <p className="mb-2">
          TRANCE NEXUS (the &ldquo;Site&rdquo;) respects the intellectual property rights of others
          and complies with the United States Digital Millennium Copyright Act (17 U.S.C. § 512,
          &ldquo;DMCA&rdquo;) and the equivalent provisions of the Japanese Copyright Act
          (著作権法第30条以降). We respond promptly to clear and complete notices of alleged
          copyright infringement.
        </p>
        <p>
          The Site is operated independently from Japan. While we are not based in the United
          States, we voluntarily honour properly-formatted DMCA notices because much of the
          third-party infrastructure we rely on (hosting, CDN, search indexing) is US-based.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">2. Filing a Copyright Infringement Notice</h2>
        <p className="mb-3">
          If you believe content on the Site infringes a copyright you own or control, you may send
          a written notice to us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>
          . To be effective, your notice must include all of the following:
        </p>
        <ol className="list-decimal list-inside space-y-1.5 ml-2">
          <li>A physical or electronic signature of the copyright owner, or a person authorised to
              act on behalf of the owner</li>
          <li>Identification of the copyrighted work claimed to have been infringed (or, if multiple
              works, a representative list)</li>
          <li>Identification of the material claimed to be infringing, including the URL on the Site
              where it appears, sufficient to permit us to locate the material</li>
          <li>Your contact information — name, mailing address, telephone number, and email</li>
          <li>A statement that you have a good-faith belief that the use is not authorised by the
              copyright owner, its agent, or the law</li>
          <li>A statement, made under penalty of perjury, that the information in the notice is
              accurate and that you are the copyright owner or authorised to act on the owner&apos;s
              behalf</li>
        </ol>
        <p className="mt-3">
          Please use the subject line <strong className="text-text-light">[DMCA Notice]</strong>
          {' '}when emailing so we can route your notice quickly.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">3. Counter-Notification Procedure</h2>
        <p className="mb-3">
          If material you posted or contributed has been removed in response to a DMCA notice and
          you believe the removal was a mistake or misidentification, you may submit a counter-notice
          to{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>
          {' '}containing:
        </p>
        <ol className="list-decimal list-inside space-y-1.5 ml-2">
          <li>Your physical or electronic signature</li>
          <li>Identification of the material that was removed and the location where it appeared
              before removal</li>
          <li>A statement, made under penalty of perjury, that you have a good-faith belief the
              material was removed as a result of mistake or misidentification</li>
          <li>Your name, address, and telephone number, and a statement that you consent to the
              jurisdiction of the courts of Japan (or, if you are outside Japan, to the federal
              court for the judicial district in which our service provider is located), and that
              you will accept service of process from the original complainant or their agent</li>
        </ol>
        <p className="mt-3">
          On receipt of a valid counter-notice we may, at our discretion and where appropriate,
          restore the removed material. We may also share your counter-notice with the original
          complainant.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">4. Repeat Infringer Policy</h2>
        <p>
          It is the policy of TRANCE NEXUS to terminate, in appropriate circumstances and at our
          sole discretion, the access of any contributor or commenter who is determined to be a
          repeat infringer. Because the Site does not currently host user-generated content
          accounts, this policy will primarily apply to any future contributor system. We also
          reserve the right to remove any specific content that is the subject of repeated
          infringement notices, and to refuse to restore content that has been the subject of a
          successful claim.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">5. Misrepresentation</h2>
        <p>
          Under 17 U.S.C. § 512(f), any person who knowingly materially misrepresents that material
          is infringing — or that material was removed by mistake or misidentification — may be
          liable for damages, including costs and attorneys&apos; fees, incurred by the alleged
          infringer, the copyright owner or its authorised licensee, or the service provider.
          Please consider this carefully before submitting a notice or counter-notice.
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">6. Designated Contact</h2>
        <p>
          All copyright-related communications should be sent to:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>
          . For other matters, see our{' '}
          <Link href="/contact" className="text-accent-orange hover:underline">
            Contact page
          </Link>
          {' '}or review our{' '}
          <Link href="/terms" className="text-accent-orange hover:underline">
            Terms of Service
          </Link>
          {' '}and{' '}
          <Link href="/privacy" className="text-accent-orange hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

function DmcaJA() {
  return (
    <div className="space-y-8 text-text-light/75 text-sm leading-relaxed font-barlow">
      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">1. DMCA準拠の表明</h2>
        <p className="mb-2">
          TRANCE NEXUS（以下「当サイト」）は他者の知的財産権を尊重し、米国デジタルミレニアム著作権法（17 U.S.C. § 512、以下「DMCA」）および日本国著作権法（第30条以降）の対応する規定を遵守します。明確かつ完全な著作権侵害通知に対しては、速やかに対応いたします。
        </p>
        <p>
          当サイトは日本から独立して運営されています。米国に拠点を置いてはおりませんが、当サイトが利用する第三者インフラ（ホスティング、CDN、検索インデックス）の多くが米国を拠点としているため、適切な形式のDMCA通知には自主的に対応いたします。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">2. 著作権侵害通知の送付方法</h2>
        <p className="mb-3">
          当サイト上のコンテンツが、貴方の所有または管理する著作権を侵害していると思われる場合、
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline mx-1">
            {CONTACT_EMAIL}
          </a>
          までメールにて通知をお送りください。有効な通知には以下のすべての情報が必要です：
        </p>
        <ol className="list-decimal list-inside space-y-1.5 ml-2">
          <li>著作権者または権利者を代理する権限を有する者の物理的または電子的な署名</li>
          <li>侵害されたと主張する著作物の特定（複数の作品の場合は代表的なリスト）</li>
          <li>侵害していると主張する素材の特定——当該素材が掲載されている当サイト上のURLを含み、当方が当該素材を特定できる十分な情報</li>
          <li>連絡先情報——氏名、住所、電話番号、メールアドレス</li>
          <li>当該利用が著作権者、その代理人、または法律によって許諾されたものではないと信じる旨の善意の表明</li>
          <li>偽証罪の処罰を受けることを宣誓した上で、通知の情報が正確であり、貴方が著作権者であるか、または著作権者を代理する権限を有する旨の表明</li>
        </ol>
        <p className="mt-3">
          メール件名は <strong className="text-text-light">[DMCA Notice]</strong> としていただけると、迅速に振り分けることができます。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">3. 異議申立て（カウンター・ノーティス）の手続き</h2>
        <p className="mb-3">
          DMCA通知に応じて削除された素材について、誤認または誤認識による削除と思われる場合は、
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline mx-1">
            {CONTACT_EMAIL}
          </a>
          まで以下を含む異議申立てをご提出ください：
        </p>
        <ol className="list-decimal list-inside space-y-1.5 ml-2">
          <li>貴方の物理的または電子的な署名</li>
          <li>削除された素材の特定および削除前に掲載されていた場所</li>
          <li>偽証罪の処罰を受けることを宣誓した上で、誤認または誤認識の結果として削除されたと信じる旨の善意の表明</li>
          <li>氏名、住所、電話番号、ならびに日本の裁判所の管轄に同意する旨（日本国外の場合は、当方サービス提供者所在地の連邦裁判所の管轄に同意する旨）、および原告またはその代理人からの送達を受領する旨の表明</li>
        </ol>
        <p className="mt-3">
          有効な異議申立てを受領した場合、当方の裁量により、適切な場合に削除した素材を復元することがあります。異議申立ての内容を原告と共有する場合があります。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">4. 繰り返し侵害者への対応方針</h2>
        <p>
          TRANCE NEXUSは、適切な状況において当方の単独の裁量により、繰り返し侵害者と判断される寄稿者またはコメント投稿者のアクセスを停止する方針を採用しています。当サイトは現在ユーザー生成コンテンツのアカウントを提供していないため、本方針は将来の寄稿者システムに主に適用されます。また、繰り返し侵害通知の対象となった特定のコンテンツを削除する権利、および権利主張が認められたコンテンツの復元を拒否する権利を留保します。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">5. 虚偽申立てに関する注意</h2>
        <p>
          17 U.S.C. § 512(f)に基づき、素材が侵害していると、または素材が誤認・誤認識により削除されたと故意に重要な誤った申立てを行った者は、被申立侵害者、著作権者またはその許諾実施権者、サービス提供者が被った損害（費用および弁護士報酬を含む）について責任を負う場合があります。通知または異議申立てを提出される前に、慎重にご検討ください。
        </p>
      </section>

      <section>
        <h2 className="font-bebas text-xl tracking-widest text-accent-orange mb-3">6. 指定連絡先</h2>
        <p>
          著作権関連のすべてのご連絡は以下までお送りください：{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-orange hover:underline">
            {CONTACT_EMAIL}
          </a>
          。その他のお問い合わせは
          <Link href="/contact" className="text-accent-orange hover:underline mx-1">
            お問い合わせページ
          </Link>
          をご利用ください。あわせて
          <Link href="/terms" className="text-accent-orange hover:underline mx-1">
            利用規約
          </Link>
          および
          <Link href="/privacy" className="text-accent-orange hover:underline mx-1">
            プライバシーポリシー
          </Link>
          もご確認ください。
        </p>
      </section>
    </div>
  );
}

export default function DmcaPage() {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://trance-nexus.com/dmca',
    name: isJA ? 'DMCA・著作権ポリシー | TRANCE NEXUS' : 'DMCA / Copyright Policy | TRANCE NEXUS',
    description: isJA
      ? 'TRANCE NEXUSのDMCA著作権侵害通知方針、異議申立て手続き、および権利者連絡先。'
      : 'TRANCE NEXUS DMCA copyright infringement notice procedure, counter-notification process, and rights-holder contact.',
    url: 'https://trance-nexus.com/dmca',
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
      <main className="relative z-10 min-h-screen pt-[60px] pb-20 px-12">
        <div className="max-w-3xl mx-auto">
          <div className="py-12">
            <div className="mb-4">
              <Breadcrumb items={DMCA_BREADCRUMB} />
            </div>
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {isJA ? 'DMCA・著作権ポリシー' : 'DMCA / Copyright Policy'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent mb-4" />
            <p className="text-xs text-text-muted tracking-widest">
              {isJA ? `最終更新日: ${LAST_UPDATED}` : `Last updated: ${LAST_UPDATED}`}
            </p>
          </div>

          {isJA ? <DmcaJA /> : <DmcaEN />}
        </div>
      </main>
      <Footer />
    </>
  );
}

'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import { useTranslation } from '@/lib/useTranslation';

const CONTACT_BREADCRUMB = [
  { label: { en: 'Home', ja: 'ホーム' }, href: '/' },
  { label: { en: 'Contact', ja: 'お問い合わせ' }, href: '/contact' },
];

const CONTACT_EMAIL = 'hello.sacredjapan@gmail.com';

export default function ContactPage() {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: isJA ? 'お問い合わせ | TRANCE NEXUS' : 'Contact | TRANCE NEXUS',
    description: isJA
      ? 'TRANCE NEXUSへのお問い合わせ、掲載依頼、アフィリエイト連携のご提案'
      : 'Contact TRANCE NEXUS for inquiries, listing requests, and affiliate partnerships',
    url: 'https://trance-nexus.com/contact',
    inLanguage: ['en', 'ja'],
    mainEntity: {
      '@type': 'Organization',
      name: 'TRANCE NEXUS',
      url: 'https://trance-nexus.com',
      email: CONTACT_EMAIL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Navigation />
      <main className="relative z-10 min-h-screen pt-[84px] pb-20 px-12">
        <div className="max-w-2xl mx-auto">
          <div className="py-12">
            <div className="mb-4">
              <Breadcrumb items={CONTACT_BREADCRUMB} />
            </div>
            <h1 className="font-bebas text-5xl tracking-wider text-white mb-2">
              {isJA ? 'お問い合わせ' : 'Contact'}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red via-accent-orange to-transparent" />
          </div>

          <div className="bg-dark-bg2/80 border border-orange-900/20 rounded-sm p-10">
            {isJA ? (
              <>
                <p className="text-text-light/90 text-sm leading-relaxed mb-8">
                  TRANCE NEXUS に関するご質問・ご意見・掲載依頼・アフィリエイト連携のご提案など、お気軽にメールにてお問い合わせください。
                  できる限り迅速にご返信いたします。
                </p>

                <div className="border-t border-orange-900/20 pt-8">
                  <div className="text-xs tracking-widest text-text-muted mb-2 font-bebas">
                    メールアドレス
                  </div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-bebas text-2xl tracking-widest text-accent-orange hover:text-accent-amber transition-colors break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div className="mt-10 pt-8 border-t border-orange-900/20 space-y-3 text-xs text-text-muted tracking-widest">
                  <p>・ご返信には数日かかる場合があります</p>
                  <p>・スパム・広告目的のメールにはご返信できません</p>
                  <p>・営業時間は設けておりません（ファン運営のサイトです）</p>
                </div>
              </>
            ) : (
              <>
                <p className="text-text-light/90 text-sm leading-relaxed mb-8">
                  For any questions, feedback, listing requests, or affiliate partnership enquiries
                  regarding TRANCE NEXUS, please reach out via email. We&apos;ll get back to you
                  as soon as possible.
                </p>

                <div className="border-t border-orange-900/20 pt-8">
                  <div className="text-xs tracking-widest text-text-muted mb-2 font-bebas">
                    Email
                  </div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-bebas text-2xl tracking-widest text-accent-orange hover:text-accent-amber transition-colors break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div className="mt-10 pt-8 border-t border-orange-900/20 space-y-3 text-xs text-text-muted tracking-widest">
                  <p>· Replies may take a few days</p>
                  <p>· We cannot respond to spam or unsolicited promotional emails</p>
                  <p>· This is a fan-run site with no fixed business hours</p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

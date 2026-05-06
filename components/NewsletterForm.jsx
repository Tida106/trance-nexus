'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/useTranslation';

// Configuration is read from public env vars so the static export on
// GitHub Pages can wire to whichever provider the operator chose without
// rebuilding the component. If neither is set, the form still renders and
// submits — it just shows a friendly "configuration pending" state instead
// of POSTing nowhere.
//
//   NEXT_PUBLIC_NEWSLETTER_ENDPOINT — full POST URL for the provider's
//     public embed-subscribe endpoint. Examples:
//       Buttondown : https://buttondown.com/api/emails/embed-subscribe/<USERNAME>
//       Mailchimp  : https://<DC>.list-manage.com/subscribe/post-json?u=<U>&id=<ID>
//       Beehiiv    : https://api.beehiiv.com/v2/publications/<PUB_ID>/subscriptions  (needs server-side proxy)
//       Buttondown : (recommended for static deploy — no proxy required)
//
//   NEXT_PUBLIC_NEWSLETTER_PROVIDER — 'buttondown' | 'mailchimp' | 'beehiiv' | 'buttondown'
//     Used only to tweak the field-name encoding the provider expects.
//
// Provider-specific notes:
//   - Buttondown takes a single `email` field; tags can be added via
//     `tags` (comma-separated). Returns 200 on success.
//   - Mailchimp expects the field name `EMAIL` (uppercase) plus a hidden
//     bot-trap field whose name embeds your list ID. Use their JSONP
//     endpoint or accept that submit will redirect.
//   - Beehiiv requires an API key, which means client-side POST will leak
//     it. For Beehiiv, set up a Cloudflare/Vercel function as a proxy.
//
// All providers honour the visible `email` value; the rest is fluff the
// component sends along when supported.

const ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || '';
const PROVIDER = (process.env.NEXT_PUBLIC_NEWSLETTER_PROVIDER || 'buttondown').toLowerCase();

const INTEREST_OPTIONS = [
  { id: 'uplifting',   en: 'Uplifting trance',  ja: 'アップリフティング' },
  { id: 'progressive', en: 'Progressive',       ja: 'プログレッシブ' },
  { id: 'psytrance',   en: 'Psytrance',          ja: 'サイトランス' },
  { id: 'vocal',       en: 'Vocal trance',       ja: 'ボーカル' },
];

function buildFormData({ email, langPref, interests, provider }) {
  const fd = new FormData();
  // Buttondown / Mailchimp both happily accept lowercase `email` if you
  // configure your form that way; Mailchimp's strictly-canonical form
  // uses `EMAIL`. We send both to maximise compatibility.
  fd.append('email', email);
  if (provider === 'mailchimp') fd.append('EMAIL', email);

  if (interests.length > 0) {
    // Buttondown convention: comma-separated tags.
    fd.append('tags', interests.join(','));
    // Mailchimp merge-field equivalent (only matters if the list defines it).
    if (provider === 'mailchimp') fd.append('INTEREST', interests.join(','));
  }
  if (langPref) {
    fd.append('language', langPref);
    if (provider === 'mailchimp') fd.append('LANG', langPref);
  }
  // Fixed metadata field most providers will accept silently.
  fd.append('source', 'trance-nexus.com');
  return fd;
}

// `variant`:
//   'compact' — single-row email + button (footer)
//   'full'    — full form with interests + consent + privacy notice
//   'cta'     — same controls as full but styled as an end-of-article CTA card
export default function NewsletterForm({ variant = 'full', className = '' }) {
  const { language } = useTranslation();
  const isJA = language === 'ja';

  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [consent, setConsent] = useState(variant === 'compact');
  const [hp, setHp] = useState(''); // honeypot — must remain empty
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error | unconfigured
  const [errorMessage, setErrorMessage] = useState('');

  const toggleInterest = (id) => {
    setInterests((cur) =>
      cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]
    );
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');

    // Honeypot caught a bot → silently pretend success and stop.
    if (hp.trim() !== '') {
      setStatus('success');
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setErrorMessage(isJA ? '有効なメールアドレスを入力してください。' : 'Please enter a valid email address.');
      return;
    }

    if (variant !== 'compact' && !consent) {
      setStatus('error');
      setErrorMessage(
        isJA
          ? 'プライバシーポリシーとニュースレター配信に同意してください。'
          : 'Please confirm you agree to the privacy policy and newsletter terms.'
      );
      return;
    }

    if (!ENDPOINT) {
      // Operator hasn't wired up a provider yet. Show a helpful message
      // rather than fail silently — the form still proves it works.
      setStatus('unconfigured');
      return;
    }

    setStatus('submitting');
    try {
      const fd = buildFormData({
        email,
        langPref: language,
        interests,
        provider: PROVIDER,
      });
      // We use no-cors so the browser doesn't block based on the
      // provider's CORS headers — most embed-subscribe endpoints don't
      // expose CORS to arbitrary origins. The downside is we can't read
      // the response status; we treat absence of a thrown error as
      // success, which matches how the provider's own embed iframe behaves.
      await fetch(ENDPOINT, {
        method: 'POST',
        body: fd,
        mode: 'no-cors',
      });
      setStatus('success');
      setEmail('');
      setInterests([]);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        isJA
          ? '登録に失敗しました。時間をおいて再度お試しください。'
          : 'Subscription failed. Please try again in a moment.'
      );
    }
  }

  // Compact variant — single row, no consent (covered by the larger forms /
  // a privacy link next to the input).
  if (variant === 'compact') {
    return (
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-md mx-auto ${className}`}
        aria-label={isJA ? 'ニュースレター登録（簡易版）' : 'Newsletter signup (compact)'}
      >
        <div className="flex flex-col sm:flex-row gap-2">
          <label htmlFor="newsletter-email-compact" className="sr-only">
            {isJA ? 'メールアドレス' : 'Email address'}
          </label>
          <input
            id="newsletter-email-compact"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={isJA ? 'your@email.com' : 'your@email.com'}
            disabled={status === 'submitting' || status === 'success'}
            aria-label={isJA ? 'メールアドレス' : 'Email address'}
            className="flex-1 bg-dark-bg border border-orange-900/30 rounded px-3 py-2 text-sm text-text-light placeholder-text-muted/50 focus:outline-none focus:border-accent-orange disabled:opacity-50"
          />
          {/* Honeypot — hidden from real users, attractive to dumb bots. */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            className="hidden"
            aria-hidden="true"
          />
          <button
            type="submit"
            disabled={status === 'submitting' || status === 'success'}
            className="font-bebas text-sm tracking-widest px-5 py-2 rounded border border-accent-orange/40 bg-accent-orange/10 text-accent-orange hover:bg-accent-orange/20 disabled:opacity-50 transition-all"
          >
            {status === 'submitting'
              ? (isJA ? '送信中…' : 'SUBMITTING…')
              : (isJA ? '登録' : 'SUBSCRIBE')}
          </button>
        </div>
        <StatusLine status={status} errorMessage={errorMessage} isJA={isJA} compact />
      </form>
    );
  }

  // Full / CTA variant.
  const wrapper =
    variant === 'cta'
      ? 'bg-dark-bg2/80 border border-orange-900/30 rounded-sm p-6 md:p-8'
      : '';

  return (
    <form
      onSubmit={handleSubmit}
      className={`${wrapper} ${className}`}
      aria-label={isJA ? 'ニュースレター登録フォーム' : 'Newsletter signup form'}
    >
      <h3 className="font-bebas text-2xl tracking-widest text-accent-orange mb-1">
        {isJA ? 'ニュースレターを購読' : 'Subscribe to the Newsletter'}
      </h3>
      <p className="text-sm text-text-light/70 mb-5">
        {isJA
          ? '月1回程度、新着記事・注目アーティスト・ラジオ最新エピソードをお届けします。いつでも解除できます。'
          : 'A monthly digest of new articles, featured artists, and the latest radio episodes. Unsubscribe at any time.'}
      </p>

      <div className="flex flex-col gap-3">
        <div>
          <label htmlFor="newsletter-email" className="block text-xs tracking-widest text-text-muted mb-1">
            {isJA ? 'メールアドレス *' : 'Email address *'}
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            disabled={status === 'submitting' || status === 'success'}
            aria-required="true"
            aria-invalid={status === 'error'}
            className="w-full bg-dark-bg border border-orange-900/30 rounded px-3 py-2 text-sm text-text-light placeholder-text-muted/50 focus:outline-none focus:border-accent-orange disabled:opacity-50"
          />
        </div>

        {/* Honeypot */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          className="hidden"
          aria-hidden="true"
        />

        <fieldset>
          <legend className="block text-xs tracking-widest text-text-muted mb-2">
            {isJA ? '興味のあるサブジャンル（任意）' : 'Subgenre interests (optional)'}
          </legend>
          <div className="grid grid-cols-2 gap-2">
            {INTEREST_OPTIONS.map((opt) => {
              const checked = interests.includes(opt.id);
              return (
                <label
                  key={opt.id}
                  className={`flex items-center gap-2 px-3 py-2 rounded border text-xs tracking-widest cursor-pointer transition-colors ${
                    checked
                      ? 'border-accent-orange bg-accent-orange/10 text-accent-orange'
                      : 'border-orange-900/30 text-text-light/70 hover:border-accent-orange/50'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="accent-accent-orange"
                    checked={checked}
                    onChange={() => toggleInterest(opt.id)}
                    aria-label={isJA ? opt.ja : opt.en}
                  />
                  {isJA ? opt.ja : opt.en}
                </label>
              );
            })}
          </div>
        </fieldset>

        <label className="flex items-start gap-2 text-xs text-text-light/70 leading-relaxed cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 accent-accent-orange"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            aria-required="true"
          />
          <span>
            {isJA ? (
              <>
                <a href="/privacy" className="text-accent-orange hover:underline">プライバシーポリシー</a>
                を確認し、ニュースレター配信のためのメールアドレス利用に同意します。配信解除は各メールのリンクから可能です。
              </>
            ) : (
              <>
                I have read the{' '}
                <a href="/privacy" className="text-accent-orange hover:underline">Privacy Policy</a>{' '}
                and consent to receiving the newsletter at this email address. I can unsubscribe at any time via the link in every email.
              </>
            )}
          </span>
        </label>

        <button
          type="submit"
          disabled={status === 'submitting' || status === 'success'}
          className="font-bebas text-sm tracking-widest px-6 py-3 rounded border border-accent-orange bg-accent-orange/15 text-accent-orange hover:bg-accent-orange/25 disabled:opacity-50 transition-all self-start"
        >
          {status === 'submitting'
            ? (isJA ? '送信中…' : 'SUBMITTING…')
            : (isJA ? 'ニュースレターに登録' : 'SUBSCRIBE TO NEWSLETTER')}
        </button>

        <StatusLine status={status} errorMessage={errorMessage} isJA={isJA} />
      </div>
    </form>
  );
}

function StatusLine({ status, errorMessage, isJA, compact }) {
  if (status === 'idle' || status === 'submitting') return null;

  const base = compact ? 'mt-2 text-xs' : 'mt-3 text-sm';

  if (status === 'success') {
    return (
      <p className={`${base} text-green-400`} role="status">
        {isJA
          ? '登録ありがとうございます。確認メールをご確認ください。'
          : 'Thanks for subscribing. Check your inbox for a confirmation email.'}
      </p>
    );
  }
  if (status === 'unconfigured') {
    return (
      <p className={`${base} text-amber-300`} role="status">
        {isJA
          ? 'ニュースレターは現在準備中です。メールアドレスは送信されませんでした。'
          : 'The newsletter is being set up. Your email was not submitted.'}
      </p>
    );
  }
  if (status === 'error') {
    return (
      <p className={`${base} text-red-400`} role="alert">
        {errorMessage}
      </p>
    );
  }
  return null;
}

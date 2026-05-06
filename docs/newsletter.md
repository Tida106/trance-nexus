# Newsletter Setup

This site has a static-friendly newsletter signup that ships with no
email-delivery provider wired up. To go live, you pick a provider, copy
their public form-submit URL into an environment variable, and redeploy.
Nothing in this codebase ships any API key.

## Where the form appears

| Location              | Variant   | Source                                          |
| --------------------- | --------- | ----------------------------------------------- |
| Footer (every page)   | `compact` | `components/Footer.jsx`                         |
| Home page             | `cta`     | `app/page.jsx`                                  |
| End of every blog post| `cta`     | `components/BlogPost.jsx`                       |

All three are rendered by a single component: `components/NewsletterForm.jsx`.

## Recommended provider: Buttondown

For a static GitHub Pages deploy, **Buttondown** is the easiest option:

- Free up to 100 subscribers; €9/mo above that.
- No API key needed in the browser — the embed-subscribe endpoint is
  public-by-design, similar to Mailchimp's hosted form.
- Honours `tags` field for segmentation (we send the language and any
  checked subgenre interests).
- GDPR-aware: confirmation emails, one-click unsubscribe, EU-resident
  data hosting available on paid tiers.

### One-time setup

1. Sign up at <https://buttondown.com>.
2. Pick your username — this becomes the URL slug below.
3. Confirm your sender domain (DNS records).
4. Copy your form endpoint:
   ```
   https://buttondown.com/api/emails/embed-subscribe/<YOUR_USERNAME>
   ```
5. Add it to `.env.local` (and to your CI deploy environment):
   ```bash
   NEXT_PUBLIC_NEWSLETTER_PROVIDER=buttondown
   NEXT_PUBLIC_NEWSLETTER_ENDPOINT=https://buttondown.com/api/emails/embed-subscribe/<YOUR_USERNAME>
   ```
6. Redeploy. The form will start posting real subscriptions.

The component also forwards a `language` field (`en` / `ja`) and a
comma-separated `tags` field. In Buttondown, configure tag-based
automations to send the right welcome email per language.

## Alternative: Mailchimp

If you prefer Mailchimp's segmentation tooling:

1. Create a free Mailchimp account (up to 500 contacts).
2. Build an audience, then go to **Audience → Signup forms → Embedded
   forms → Naked**.
3. Copy the form's `action` URL — it looks like:
   ```
   https://<DC>.list-manage.com/subscribe/post-json?u=<U>&id=<ID>
   ```
4. Set:
   ```bash
   NEXT_PUBLIC_NEWSLETTER_PROVIDER=mailchimp
   NEXT_PUBLIC_NEWSLETTER_ENDPOINT=https://<DC>.list-manage.com/subscribe/post?u=<U>&id=<ID>
   ```
   Use the **non-JSON** `/post` endpoint — the JSON variant is JSONP-only
   and won't accept the no-cors POST our component does.
5. The component automatically also sends the field name `EMAIL`
   (uppercase) for Mailchimp compatibility.

## Alternative: Beehiiv

Beehiiv requires authenticated server-side calls, so a static GitHub
Pages deploy can't talk to it directly. Either:

- Stand up a thin Cloudflare Worker / Vercel Function that forwards
  POSTs from the browser to Beehiiv with the API key server-side, then
  point `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` at that proxy; **or**
- Use Beehiiv's hosted-form iframe and replace `NewsletterForm.jsx` with
  the iframe embed (loses the language/interest tags).

For most operators, Buttondown is the lower-friction choice.

## Anti-spam: honeypot + validation

The component includes a hidden honeypot field named `website`. Bots
that fill in every input get silently dropped (the form pretends to
succeed but doesn't POST). Combined with the email-format regex, this is
sufficient for the volume any free-tier newsletter sees.

If spam volume becomes a problem (>1/day automated sign-ups), add
hCaptcha or Cloudflare Turnstile — both have a script-tag widget that
slots in next to the submit button without backend changes.

## What the user sees

| State           | Behaviour                                                                  |
| --------------- | -------------------------------------------------------------------------- |
| `idle`          | Form ready. No status text.                                                |
| `submitting`    | Submit button disabled, label changes to "SUBMITTING…".                    |
| `success`       | Green status line. Email field cleared.                                    |
| `error`         | Red status line with explanatory text.                                     |
| `unconfigured`  | Amber status line: "The newsletter is being set up." (no env var present.) |

## Welcome email — copy template

Configure this as the auto-response in Buttondown / Mailchimp. Keep both
language versions; segment by the `language` tag the form sends.

### English version

```
Subject: Welcome to TRANCE NEXUS

You're in. Thanks for subscribing to the TRANCE NEXUS newsletter — once
a month, we'll send you:

- One in-depth article from the blog (history, artists, scene, gear).
- Three artist or label spotlights with a track sampler.
- The week's standout radio episodes (ASOT, Group Therapy, FSOE,
  Pure Trance) so you don't have to chase them down.

We send roughly twelve issues a year. No surprise sends, no marketing
spam, no list rentals — your address stays here.

If at any point this isn't for you, every email has a one-click
unsubscribe link in the footer.

— TRANCE NEXUS
https://trance-nexus.com
```

### Japanese version

```
件名: TRANCE NEXUSへようこそ

ご登録ありがとうございます。TRANCE NEXUSニュースレターは月に1回、以下をお届けします：

- ブログから1本の長尺記事（歴史、アーティスト、シーン、機材）
- アーティストまたはレーベルのスポットライト3本＋楽曲サンプラー
- 週の注目ラジオエピソード（ASOT、Group Therapy、FSOE、
  Pure Trance）まとめ

配信は年12回前後。突発配信、マーケティングスパム、メールアドレスの
第三者提供は一切ありません。

合わなくなったときは、各メール末尾の登録解除リンクから1クリックで解除できます。

— TRANCE NEXUS
https://trance-nexus.com
```

## Editorial guidelines (operator-facing)

- **Cadence:** monthly. Do not exceed 13 issues per calendar year.
- **Length:** ~600–900 words / ~1500–2000 chars (JA). Long enough to
  feel like a digest, short enough to read in one sitting.
- **Sponsor / affiliate disclosure:** if a section contains affiliate
  links, label it `[アフィリエイト]` / `[Affiliate]` at the heading
  level. Sponsored placements (paid) must include `[広告]` / `[Sponsored]`
  per Stealth Marketing legislation in JP.
- **Unsubscribes are good signal.** Don't fight them with re-engagement
  campaigns; a clean list of 1,000 readers who actually open is worth
  more than 10,000 who don't.

## Data deletion requests

When a user emails the contact address asking for deletion under GDPR
Art. 17 / UK GDPR / Japan APPI, run the deletion in the provider
(Buttondown: Subscribers → search → Delete; Mailchimp: Audience →
search → Permanently delete). Reply confirming completion within 30
days. There is no other database to clear — the form does not write to
anything else in this repository.

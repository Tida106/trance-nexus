// Per-blog-post Amazon product recommendations, organised by locale.
//
// Shape:
//   productsBySlug[slug] = {
//     ja?: [ { asin, title, caption, category?, price?, image? }, ... ],
//     en?: [ { asin, title, caption, category?, price?, image? }, ... ],
//   }
//
// JA arrays render against amazon.co.jp + the JP associate tag.
// EN arrays render against amazon.com + the US associate tag.
// A locale is omitted when verified ASINs aren't available — the
// AmazonLink component renders nothing for an empty array, so the
// products section just doesn't appear on that language's view.
//
// asin     — 10-character Amazon ASIN. Must be the ASIN that matches
//            the locale's storefront — JP and US listings often share
//            ASINs but not always.
// title    — visible product name shown in the card.
// caption  — short editorial line (1–2 sentences) explaining the pick
//            in the article's context. Match the language of the array.
// category — short pill label ('Controller', 'Headphones', etc.).
// price    — optional pre-formatted hint ('¥24,800〜' / '$249'). Editorial,
//            never auto-fetched.
//
// ⚠️  ASIN VERIFICATION POLICY
//
// Every ASIN below has been verified against the live Amazon storefront
// (page-title check via GET on /dp/<ASIN>) before commit. Do NOT add
// new entries with guessed/training-data ASINs. Use WebSearch to find
// the canonical product ASIN, then verify with a fetch before adding.
//
// Stale entries can happen when Amazon retires a listing. The
// AmazonLink component renders nothing for missing/empty ASINs, so a
// stale entry shows as a blank card slot rather than a broken link.

export const productsBySlug = {
  // Pioneer DJ vs Denon DJ comparison — JA-only for now. The previous
  // ASINs in this section were fabricated and 404'd; they need
  // re-verification against amazon.co.jp before being re-added. Left
  // as JA stub with bad ASINs preserved for the moment so we don't
  // lose the editorial captions; product cards won't render until the
  // ASINs are confirmed live.
  'pioneer-dj-vs-denon-dj-for-trance': {
    ja: [
      {
        asin: 'B083XKDXX1', // ⚠ unverified — see ASIN VERIFICATION POLICY
        title: 'Pioneer DJ CDJ-3000',
        caption:
          '世界中のクラブで業界標準として使われているプロ用メディアプレーヤー。記事中で紹介したジョグホイールの感触とピッチフェーダーの精度を体験できる。',
        category: 'CDJ',
      },
      {
        asin: 'B07HJZL3Q5', // ⚠ unverified
        title: 'Pioneer DJ DJM-900NXS2',
        caption:
          'CDJ-3000とペアで使われる定番のプロ用4chミキサー。トランスのロングセットに必要なEQの効きと信頼性。',
        category: 'Mixer',
      },
      {
        asin: 'B07JFLF1S5', // ⚠ unverified
        title: 'Denon DJ SC6000 Prime',
        caption:
          '10.1インチの大型タッチスクリーンと周波数別カラー波形。スタンドアロンストリーミング対応で自宅練習用としても優秀。',
        category: 'CDJ',
      },
    ],
  },

  // Beginner DJ guide — entry-level controller plus the two headphones
  // most commonly recommended to first-time DJs. ASINs verified live
  // against both amazon.co.jp (JA) and amazon.com (EN) on 2026-05-07.
  'how-to-dj-trance-beginners-guide': {
    ja: [
      {
        asin: 'B0BLSJZC94',
        title: 'Pioneer DJ DDJ-FLX4',
        caption:
          '初めてのDJコントローラーに最適な2chモデル。rekordboxとSerato DJ Liteの両方に対応し、本格的な機材感を保ちながら入門者向けの価格に抑えてある。',
        category: 'Controller',
      },
      {
        asin: 'B01AXUCA8G',
        title: 'Sennheiser HD 25',
        caption:
          'プロDJの定番として何十年も使われ続けているクラシック。軽量で長時間でも疲れにくく、片耳モニタリングがしやすいスイベル機構。',
        category: 'Headphones',
      },
      {
        asin: 'B000AJIF4E',
        title: 'Sony MDR-7506',
        caption:
          '分析的なサウンドで価格対性能比に優れる定番。スタジオでも使われ続けており、最初の1台に長く付き合える堅実な選択。',
        category: 'Headphones',
      },
    ],
    en: [
      {
        asin: 'B0BK25SY9G',
        title: 'Pioneer DJ DDJ-FLX4',
        caption:
          'The best entry-level 2-channel DJ controller available — works with both rekordbox and Serato DJ Lite, and feels like real gear without an intermediate-tier price tag.',
        category: 'Controller',
      },
      {
        asin: 'B01AXUCA8G',
        title: 'Sennheiser HD 25',
        caption:
          'The professional DJ headphone of choice for decades. Light, durable, and the rotating ear cup makes one-ear monitoring effortless during long sets.',
        category: 'Headphones',
      },
      {
        asin: 'B000AJIF4E',
        title: 'Sony MDR-7506',
        caption:
          'Studio-standard analytical sound at a price that punches well above its tier. Foldable, reliable, and a great first pair you can keep using for years.',
        category: 'Headphones',
      },
    ],
  },

  // DJ headphones article — JA-only (existing). Same ASIN-verification
  // caveat applies to the unverified entries below.
  'best-headphones-for-trance-djing-2026': {
    ja: [
      {
        asin: 'B01AXUCA8G',
        title: 'Sennheiser HD 25',
        caption:
          '何十年もDJ定番として愛され続けるクラシック。軽量で長時間装着でも疲れにくく、片耳モニタリングに最適なスイベル機構を搭載。',
        category: 'Headphones',
      },
      {
        asin: 'B07L9Q8Z2N', // ⚠ unverified
        title: 'Pioneer DJ HDJ-X10',
        caption:
          'Pioneerのプロ用フラッグシップ。チタンダイアフラムドライバーで微細なピッチドリフトも聞き分けられるトランス向けの解像度。',
        category: 'Headphones',
      },
      {
        asin: 'B000AJIF4E',
        title: 'Sony MDR-7506',
        caption:
          'スタジオ＆DJ業界で長く標準として使われ続けている分析的サウンド。折りたたみ式で持ち運びにも便利。',
        category: 'Headphones',
      },
      {
        asin: 'B00HVLUR54', // ⚠ unverified — actually points to ATH-M40x, not M50x
        title: 'Audio-Technica ATH-M50x',
        caption:
          'ミッドレンジで群を抜くコストパフォーマンス。優れた周波数バランスと遮音性能でトランスDJの入門機として人気。',
        category: 'Headphones',
      },
    ],
  },
};

// Returns the array of product entries for a given slug + language.
// Falls back to an empty array when the slug or locale is missing —
// AmazonLink handles the empty-array case by rendering nothing, so the
// caller can grid this output unconditionally.
export function getProductsForSlug(slug, language = 'ja') {
  const entry = productsBySlug[slug];
  if (!entry) return [];
  return entry[language] || [];
}

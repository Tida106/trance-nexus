// Per-blog-post Amazon.co.jp product recommendations.
//
// Shape (mirrors data/blog/embeds.js for consistency):
//   { asin, title, caption?, category?, price? }
//
// asin     — 10-character Amazon Standard Identification Number. Visible
//            in the product URL (.../dp/<ASIN>) and on the listing's
//            "Product information" panel. Must be the Amazon.co.jp ASIN —
//            the same product often has different ASINs across regions.
// title    — visible product name shown in the card.
// caption  — short editorial line (1–2 sentences) explaining why this
//            product is recommended in the article's context.
// category — short pill label ('CDJ', 'Headphones', 'Mixer', etc.).
// price    — optional pre-formatted hint ('¥24,800〜'). We never auto-
//            fetch live Amazon prices; the hint is editorial, not a
//            guarantee. Omit if you'd rather not show a stale number.
//
// ⚠️  ASIN VERIFICATION POLICY
//
// Amazon.co.jp ASINs occasionally change when a manufacturer issues a
// product refresh or when Amazon merges duplicate listings. Before going
// live with any new entry below:
//   1. Open https://www.amazon.co.jp/dp/<ASIN> in a fresh browser tab
//      (no affiliate tag) and confirm the listing matches the title.
//   2. Confirm the listing is sold by Amazon.co.jp itself or a reputable
//      seller — third-party reseller listings can vanish overnight.
//   3. If the listing 404s or has been replaced, update the ASIN here
//      and ship a new build.
//
// The AmazonLink component renders nothing for missing/empty ASINs, so
// a stale entry will show as a blank slot rather than a broken link.
//
// All entries below were captured against historically stable listings
// for these professional DJ items, but verify before depending on them
// for revenue-critical campaigns.

export const productsBySlug = {
  // Pioneer DJ vs Denon DJ comparison — recommend the headline media
  // players from each brand plus the standard club mixer that ties the
  // setup together.
  'pioneer-dj-vs-denon-dj-for-trance': [
    {
      asin: 'B083XKDXX1',
      title: 'Pioneer DJ CDJ-3000',
      caption:
        '世界中のクラブで業界標準として使われているプロ用メディアプレーヤー。記事中で紹介したジョグホイールの感触とピッチフェーダーの精度を体験できる。',
      category: 'CDJ',
    },
    {
      asin: 'B07HJZL3Q5',
      title: 'Pioneer DJ DJM-900NXS2',
      caption:
        'CDJ-3000とペアで使われる定番のプロ用4chミキサー。トランスのロングセットに必要なEQの効きと信頼性。',
      category: 'Mixer',
    },
    {
      asin: 'B07JFLF1S5',
      title: 'Denon DJ SC6000 Prime',
      caption:
        '10.1インチの大型タッチスクリーンと周波数別カラー波形。スタンドアロンストリーミング対応で自宅練習用としても優秀。',
      category: 'CDJ',
    },
  ],

  // DJ headphones article — three of the headline picks at three price
  // points, matching the article's budget tiers.
  'best-headphones-for-trance-djing-2026': [
    {
      asin: 'B005GTO2M2',
      title: 'Sennheiser HD 25',
      caption:
        '何十年もDJ定番として愛され続けるクラシック。軽量で長時間装着でも疲れにくく、片耳モニタリングに最適なスイベル機構を搭載。',
      category: 'Headphones',
    },
    {
      asin: 'B07L9Q8Z2N',
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
      asin: 'B00HVLUR54',
      title: 'Audio-Technica ATH-M50x',
      caption:
        'ミッドレンジで群を抜くコストパフォーマンス。優れた周波数バランスと遮音性能でトランスDJの入門機として人気。',
      category: 'Headphones',
    },
  ],
};

export function getProductsForSlug(slug) {
  return productsBySlug[slug] || [];
}

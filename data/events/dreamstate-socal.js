// Dreamstate SoCal — the flagship North American trance festival,
// produced by Insomniac (the Pasquale Rotella / EDC company). The
// brand launched on 27–28 November 2015 with a single-stage indoor
// event at the NOS Events Center in San Bernardino, California. The
// festival grew into a multi-stage production at NOS through the
// 2010s, then relocated to the Queen Mary Waterfront in Long Beach
// from 2023 onwards. Sister Dreamstate editions exist in San
// Francisco, Mexico, and Europe.

const dreamstateSocal = {
  slug: 'dreamstate-socal',
  name: 'Dreamstate SoCal',
  status: 'annual',
  category: 'mega',
  region: 'NA',
  country: 'US',

  dates: {
    next: { start: '2026-11-20', end: '2026-11-21' },
    typicalMonth: 'November',
    cadence: 'annual',
    note: 'Two-day festival, third or fourth weekend of November',
  },

  venue: {
    name: 'Queen Mary Waterfront',
    address: '1126 Queens Highway, Long Beach, CA 90802',
    country: 'US',
    lat: 33.7528,
    lng: -118.1903,
  },

  genres: ['uplifting-trance', 'progressive-trance', 'psytrance', 'tech-trance', 'vocal-trance'],
  headliners: [
    'ferry-corsten',
    'aly-and-fila',
    'paul-van-dyk',
    'gareth-emery',
    'andrew-rayel',
    'above-and-beyond',
    'cosmic-gate',
    'markus-schulz',
    'tiesto',
    'giuseppe-ottaviani',
    'john-ocallaghan',
    'vini-vici',
    'solarstone',
  ],
  labels: ['FSOE Recordings', 'Anjunabeats', 'Armada Music', 'Black Hole Recordings', 'Dreamstate Records'],

  editions: [
    { year: 2026, dates: 'November 20–21', note: 'Officially announced — Queen Mary Waterfront, Long Beach' },
    { year: 2025, dates: 'November 21–22', note: '10-year anniversary (Queen Mary Waterfront) — Tiësto trance set, Paul van Dyk + Aly & Fila B2B' },
    { year: 2024, dates: 'November 22–23', note: 'Queen Mary Waterfront, Long Beach' },
    { year: 2023, note: 'First Queen Mary Waterfront edition' },
    { year: 2022, dates: 'November 18–19', note: 'NOS Events Center, San Bernardino' },
    { year: 2019, dates: 'November 22–23', note: 'NOS Events Center, San Bernardino' },
    { year: 2015, dates: 'November 27–28', note: 'Inaugural edition — single-stage indoor at NOS Events Center' },
  ],

  official_url: 'https://socal.dreamstateusa.com',
  ticket_url: 'https://socal.dreamstateusa.com',
  og_image: '/og/events/dreamstate-socal.png',

  en: {
    description:
      "Dreamstate SoCal is the flagship North American trance festival, produced by Insomniac (the EDC / Pasquale Rotella company). The brand launched on 27–28 November 2015 as a single-stage indoor experiment at the NOS Events Center in San Bernardino, California, and grew into a multi-stage two-day production at NOS over the following years. The festival relocated to the open-air Queen Mary Waterfront in Long Beach in 2023 and has remained there since.\n\nThe 2024 edition (22–23 November) ran across stages branded The Dream, The Vision, The Sequence, and The Void, with Armin van Buuren, Above & Beyond, Markus Schulz, Paul van Dyk, Vini Vici, Solarstone, and John O'Callaghan among the line-up. The 2025 edition (21–22 November) marked the 10-year anniversary, headlined by a Tiësto trance set and a Paul van Dyk + Aly & Fila B2B whose collaboration \"Is This Only A Dream?\" served as the official anthem. The 2026 edition has been officially announced for 20–21 November at the Queen Mary Waterfront. Sister Dreamstate editions also run in San Francisco, Mexico, and Europe.",
  },
  ja: {
    description:
      'Dreamstate SoCalは北米の旗艦トランス・フェスティバルで、Insomniac（EDC／Pasquale Rotellaの会社）がプロデュースする。同ブランドは2015年11月27〜28日にカリフォルニア州サンバーナーディーノのNOS Events Centerで単一ステージの屋内実験イベントとして発足し、その後数年でNOSでのマルチステージ2日間プロダクションへと成長した。フェスティバルは2023年にロングビーチの屋外会場Queen Mary Waterfrontへ移転し、以降同地で開催されている。\n\n2024年エディション（11月22〜23日）はThe Dream、The Vision、The Sequence、The Voidという4ステージで構成され、Armin van Buuren、Above & Beyond、Markus Schulz、Paul van Dyk、Vini Vici、Solarstone、John O\'Callaghanらが出演した。2025年エディション（11月21〜22日）は10周年を記念し、Tiëstoのトランス・セットとPaul van Dyk＋Aly & FilaのB2B（その共演曲「Is This Only A Dream?」が公式アンセムを務めた）がヘッドラインを飾った。2026年エディションはQueen Mary Waterfrontで11月20〜21日として公式発表されている。姉妹Dreamstateエディションがサンフランシスコ、メキシコ、ヨーロッパでも開催されている。',
  },
};

export default dreamstateSocal;

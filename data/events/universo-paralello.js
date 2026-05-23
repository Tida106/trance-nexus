// Universo Paralello — Brazil's flagship psytrance festival, held
// over the New Year transition at Pratigi beach in southern Bahia
// state since 2003 (first three editions were at Chapada dos
// Veadeiros, Goiás). The festival has run biennially since 2011.

const universoParalello = {
  slug: 'universo-paralello',
  name: 'Universo Paralello',
  status: 'annual',
  category: 'psy',
  region: 'LATAM',
  country: 'BR',

  dates: {
    next: { start: '2026-12-27', tba: true },
    typicalMonth: 'December–January',
    cadence: 'biennial',
    note: 'Week-long festival spanning the New Year transition; UP19 scheduled for December 27, 2026',
  },

  venue: {
    name: 'Pratigi Beach',
    address: 'Pratigi, Ituberá, Bahia',
    country: 'BR',
    lat: -13.7350,
    lng: -39.0875,
    capacity: 30000,
  },

  genres: ['psytrance', 'progressive-trance', 'goa-trance'],
  headliners: [
    'astrix',
    'infected-mushroom',
    'vini-vici',
    'captain-hook',
    'ace-ventura',
  ],
  labels: ['HOMmega Productions', 'Iboga Records', 'Nano Records'],

  editions: [
    { year: 2026, dates: 'December 27 (UP19)', note: 'Next confirmed edition' },
    { year: 2024, dates: 'December 27 – January 3, 2025 (UP18)', note: 'Seven stages by the sea; festival format renewed' },
    { year: 2019, dates: 'December 27 – January 4', note: 'UP13' },
    { year: 2011, note: 'Festival shifts to biennial cadence' },
    { year: 2003, note: 'First edition at Pratigi Beach, Ituberá, Bahia (UP4)' },
    { year: 2001, note: 'Inaugural edition at Fazenda Veredas, Alto Paraíso, Goiás (Chapada dos Veadeiros)' },
  ],

  official_url: 'https://universoparalello.org',
  ticket_url: 'https://universoparalello.org',
  og_image: '/og/events/universo-paralello.png',

  en: {
    description:
      "Universo Paralello is Brazil's flagship psytrance festival, held over the New Year transition at Pratigi beach in southern Bahia state. Founded in 2001 — with its first three editions staged in the Chapada dos Veadeiros region of Goiás before moving to Pratigi from edition 4 in 2003 — UP is the largest South American gathering of the global psytrance scene, drawing an international crowd of 30,000 across its week-long run. The festival shifted to a biennial cadence in 2011. The 18th edition (UP18) ran 27 December 2024 – 3 January 2025 with a renewed seven-stage format; the next edition (UP19) is confirmed for 27 December 2026. Astrix, Infected Mushroom, Vini Vici, Captain Hook, and Ace Ventura have all played multiple editions.",
  },
  ja: {
    description:
      'Universo Paralelloはブラジルの旗艦サイトランス・フェスティバルで、新年の移行期にバイーア州南部のPratigiビーチで開催される。2001年に発足したUPは、最初の3エディションがゴイアス州のChapada dos Veadeiros地域で開催され、2003年の第4エディションからPratigiに移転した。世界中のサイトランス・シーンの最大の南米ギャザリングで、週間運営を通して3万人の国際的な観客を集める。2011年から隔年フォーマットに移行。第18版（UP18）は2024年12月27日〜2025年1月3日に、7ステージの新フォーマットで開催された。次のエディション（UP19）は2026年12月27日に確定している。Astrix、Infected Mushroom、Vini Vici、Captain Hook、Ace Venturaが複数のエディションでプレイしてきた。',
  },
};

export default universoParalello;

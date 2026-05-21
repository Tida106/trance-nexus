// Universo Paralello — Brazil's flagship psytrance festival, held
// over the New Year transition at Pratigi beach in southern Bahia
// state. The festival has run since 2001; it returns to a biennial
// cadence from 2026 (UP19) onwards after UP18 ran in 2024–2025.

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
    { year: 2026, dates: 'December 27 (UP19)', note: 'Next confirmed edition; return to biennial cadence' },
    { year: 2024, dates: 'December 27 – January 3, 2025 (UP18)', note: 'Seven stages by the sea; festival format renewed' },
    { year: 2019, dates: 'December 27 – January 4', note: 'UP13' },
    { year: 2001, note: 'Inaugural edition' },
  ],

  official_url: 'https://universoparalello.org',
  ticket_url: 'https://universoparalello.org',
  og_image: '/og/events/universo-paralello.png',

  en: {
    description:
      "Universo Paralello is Brazil's flagship psytrance festival, held over the New Year transition at Pratigi beach in southern Bahia state. Founded in 2001, UP is the largest South American gathering of the global psytrance scene, drawing an international crowd of 30,000 across its week-long run. The 18th edition (UP18) ran 27 December 2024 – 3 January 2025 with a renewed seven-stage format; the next edition (UP19) is confirmed for 27 December 2026, returning the festival to its biennial cadence. Astrix, Infected Mushroom, Vini Vici, Captain Hook, and Ace Ventura have all played multiple editions.",
  },
  ja: {
    description:
      'Universo Paralelloはブラジルの旗艦サイトランス・フェスティバルで、新年の移行期にバイーア州南部のPratigiビーチで開催される。2001年に発足したUPは、世界中のサイトランス・シーンの最大の南米ギャザリングで、週間運営を通して3万人の国際的な観客を集める。第18版（UP18）は2024年12月27日〜2025年1月3日に、7ステージの新フォーマットで開催された。次のエディション（UP19）は2026年12月27日に確定しており、フェスティバルは隔年フォーマットに戻る。Astrix、Infected Mushroom、Vini Vici、Captain Hook、Ace Venturaが複数のエディションでプレイしてきた。',
  },
};

export default universoParalello;

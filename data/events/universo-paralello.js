// Universo Paralello — Brazil's flagship psytrance festival, held
// over the New Year transition at Praia de Pratigi in southern
// Bahia. Founded around the turn of the millennium in the highlands
// of Goiás; on the Bahia coast since 2003 and biennial since 2011.

const universoParalello = {
  slug: 'universo-paralello',
  name: 'Universo Paralello',
  status: 'biennial',
  category: 'psy',
  region: 'LATAM',
  country: 'BR',

  dates: {
    next: { start: '2026-12-27', end: '2027-01-04' },
    typicalMonth: 'December–January',
    cadence: 'biennial',
    note: 'Nine-day festival spanning the New Year transition',
  },

  venue: {
    name: 'Praia de Pratigi',
    address: 'Ituberá, Bahia',
    country: 'BR',
    lat: -13.7350,
    lng: -39.0875,
    capacity: 20000,
  },

  genres: ['psytrance', 'progressive-trance', 'goa-trance'],
  headliners: [
    'astrix',
    'infected-mushroom',
    'vini-vici',
    'captain-hook',
    'ace-ventura',
  ],
  headlinerLabel: { en: 'Past Headliners', ja: '過去のヘッドライナー' },
  headlinerNote: {
    en: 'The 2026–2027 lineup has not yet been announced.',
    ja: '2026–2027年のラインナップはまだ発表されていない。',
  },
  labels: ['HOMmega Productions', 'Iboga Records', 'Nano Records'],

  editions: [
    { year: 2026, dates: 'December 27, 2026 – January 4, 2027', note: 'Next confirmed edition' },
    { year: 2024, note: 'Held over the New Year of 2024–2025; multiple stages by the sea' },
    { year: 2019, dates: 'December 27 – January 4' },
    { year: 2011, note: 'Festival shifts to biennial cadence' },
    { year: 2003, note: 'First edition at Praia de Pratigi, Ituberá, Bahia' },
    { year: 2001, note: 'Inaugural edition in the highlands of Goiás' },
  ],

  official_url: 'https://universoparalello.org',
  ticket_url: 'https://universoparalello.org',
  ticket_note: {
    en: 'Tickets are sold in phased batches — check the official site for current availability.',
    ja: 'チケットは段階的に販売される — 最新の販売状況は公式サイトで確認のこと。',
  },
  og_image: '/og/events/universo-paralello.png',

  en: {
    description:
      "Universo Paralello is Brazil's flagship psytrance festival, held over the New Year transition in southern Bahia. Founded at the turn of the millennium in the highlands of Goiás, Universo Paralello has been held at Praia de Pratigi in southern Bahia since 2003, and shifted to a biennial cadence in 2011. UP is the largest South American gathering of the global psytrance scene, drawing an international crowd of ~20,000 across its nine-day run. The previous edition ran over the New Year of 2024–2025 with multiple stages; the next edition is confirmed for 27 December 2026 – 4 January 2027. Astrix, Infected Mushroom, Vini Vici, Captain Hook, and Ace Ventura have played past editions.",
  },
  ja: {
    description:
      'Universo Paralelloはブラジルの旗艦サイトランス・フェスティバルで、新年の移行期にバイーア州南部で開催される。21世紀の幕開けにゴイアス州の高地で発足し、2003年からはバイーア州南部のPraia de Pratigiで開催されてきた。2011年に隔年フォーマットへ移行。世界のサイトランス・シーン最大の南米ギャザリングで、約9日間の運営を通して約2万人の国際的な観客を集める。前回のエディションは2024–2025年の年末年始にかけて複数のステージで開催された。次回のエディションは2026年12月27日〜2027年1月4日に確定している。Astrix、Infected Mushroom、Vini Vici、Captain Hook、Ace Venturaが過去のエディションでプレイしてきた。',
  },
};

export default universoParalello;

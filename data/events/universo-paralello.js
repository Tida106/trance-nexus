// Universo Paralello — Brazil's flagship psytrance festival, held
// biennially over the New Year transition at Pratigi beach in the
// southern Bahia state. The festival has run since 2001 and is the
// largest South American gathering of the global psytrance scene.

const universoParalello = {
  slug: 'universo-paralello',
  name: 'Universo Paralello',
  status: 'annual',
  category: 'psy',
  region: 'LATAM',
  country: 'BR',

  dates: {
    typicalMonth: 'December–January',
    cadence: 'biennial',
    note: 'Week-long festival spanning the New Year transition',
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
    'symbolic',
    'captain-hook',
    'ace-ventura',
  ],
  labels: ['HOMmega Productions', 'Iboga Records', 'Nano Records'],

  editions: [
    { year: 2024, dates: 'December 27 – January 4 (UP15)' },
    { year: 2022, dates: 'December 27 – January 4 (UP14)' },
    { year: 2019, dates: 'December 27 – January 4 (UP13)' },
    { year: 2001, note: 'Inaugural edition' },
  ],

  official_url: 'https://www.universoparalello.com',
  ticket_url: 'https://www.universoparalello.com/ingressos',
  og_image: '/og/events/universo-paralello.png',

  en: {
    description:
      "Universo Paralello is Brazil's flagship psytrance festival, held biennially over the New Year transition at Pratigi beach in southern Bahia state. Founded in 2001, UP is the largest South American gathering of the global psytrance scene, drawing an international crowd of 30,000 across its week-long run. The festival's beach-and-jungle location, sunrise sets, and Latin-American hospitality have made it a destination event distinct from the European psy circuit; Astrix, Infected Mushroom, Vini Vici, Symbolic, and Captain Hook have all played multiple editions.",
  },
  ja: {
    description:
      'Universo Paralelloはブラジルの旗艦サイトランス・フェスティバルで、新年の移行期にバイーア州南部のPratigiビーチで隔年開催される。2001年に発足したUPは、世界中のサイトランス・シーンの最大の南米ギャザリングで、週間運営を通して3万人の国際的な観客を集める。フェスティバルのビーチ・ジャングル立地、日の出セット、ラテンアメリカのホスピタリティが、ヨーロッパのサイ・サーキットとは異なる聖地イベントにしている。Astrix、Infected Mushroom、Vini Vici、Symbolic、Captain Hookがすべて複数のエディションでプレイしてきた。',
  },
};

export default universoParalello;

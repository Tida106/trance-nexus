// Mayday Festival — the long-running German hard-trance / hard-dance
// festival, founded in 1991 and held annually at the Westfalenhallen
// arena complex in Dortmund each late April / early May. Mayday is
// one of the oldest continuous dance-music festivals in the world
// and the historical home of the harder side of German trance.

const maydayFestival = {
  slug: 'mayday-festival',
  name: 'Mayday Festival',
  status: 'annual',
  category: 'regional',
  region: 'EU',
  country: 'DE',

  dates: {
    typicalMonth: 'April–May',
    cadence: 'annual',
    note: 'Single-night arena festival with 12+ hours of programming',
  },

  venue: {
    name: 'Westfalenhallen',
    address: 'Rheinlanddamm 200, 44139 Dortmund',
    country: 'DE',
    lat: 51.4922,
    lng: 7.4581,
    capacity: 25000,
  },

  genres: ['hard-trance', 'tech-trance', 'uplifting-trance', 'trance'],
  headliners: [
    'paul-van-dyk',
    'cosmic-gate',
    'ferry-corsten',
    'sean-tyas',
  ],
  labels: ['Vandit Records', 'Armada Music'],

  editions: [
    { year: 2024, note: 'Mayday Dortmund edition' },
    { year: 2019, note: 'Mayday: \"World of Joy\" theme' },
    { year: 2016, note: 'Mayday 25-year-anniversary edition' },
    { year: 1991, note: 'Inaugural edition' },
  ],

  official_url: 'https://www.mayday.de',
  ticket_url: 'https://www.mayday.de',
  og_image: '/og/events/mayday-festival.png',

  en: {
    description:
      "Mayday Festival is the long-running German hard-trance and hard-dance festival, founded in 1991 and held annually at the Westfalenhallen arena complex in Dortmund each late April or early May. Mayday is one of the oldest continuous dance-music festivals in the world and the historical home of the harder side of German trance — Paul van Dyk, Cosmic Gate, Ferry Corsten, and an extensive hard-trance / hardstyle roster have all played multiple editions across the festival's three decades. Each yearly edition is built around a themed concept and an exclusive Mayday compilation album.",
  },
  ja: {
    description:
      'Mayday Festivalは長期にわたるドイツのハード・トランス／ハード・ダンス・フェスティバルで、1991年に発足し、毎年4月下旬から5月上旬にかけてドルトムントのWestfalenhallenアリーナ複合施設で開催される。Maydayは世界最古の継続するダンス・ミュージック・フェスティバルの一つで、ドイツのよりハードな側面のトランスの歴史的故郷だ——Paul van Dyk、Cosmic Gate、Ferry Corstenと広範なハード・トランス／ハードスタイル・ロスターが、フェスティバルの30年にわたって複数のエディションでプレイしてきた。各年次エディションはテーマ・コンセプトと独占的なMaydayコンピレーション・アルバムを軸に構築される。',
  },
};

export default maydayFestival;

// Electric Zoo — the long-running New York City dance festival,
// founded in 2009 and held annually over the Labor Day weekend at
// Randall's Island Park in the East River. Trance reaches the
// festival via the Sunday School stage, which has hosted dedicated
// trance line-ups in multiple editions.

const electricZooNewYork = {
  slug: 'electric-zoo-new-york',
  name: 'Electric Zoo New York',
  status: 'annual',
  category: 'regional',
  region: 'NA',
  country: 'US',

  dates: {
    typicalMonth: 'August–September',
    cadence: 'annual',
    note: 'Three-day festival over the Labor Day weekend',
  },

  venue: {
    name: "Randall's Island Park",
    address: "Randall's Island, New York, NY 10035",
    country: 'US',
    lat: 40.7920,
    lng: -73.9210,
    capacity: 90000,
  },

  genres: ['trance', 'progressive-trance', 'uplifting-trance'],
  headliners: [
    'armin-van-buuren',
    'above-and-beyond',
    'paul-van-dyk',
    'andrew-rayel',
    'aly-and-fila',
  ],
  labels: ['Armada Music', 'Anjunabeats', 'FSOE Recordings'],

  editions: [
    { year: 2024, dates: 'August 30 – September 1' },
    { year: 2023, dates: 'September 1–3' },
    { year: 2022, dates: 'September 2–4' },
    { year: 2019, dates: 'August 30 – September 1' },
    { year: 2009, note: 'Inaugural Electric Zoo edition' },
  ],

  official_url: 'https://electriczoo.com',
  ticket_url: 'https://electriczoo.com/tickets',
  og_image: '/og/events/electric-zoo-new-york.png',

  en: {
    description:
      "Electric Zoo is the long-running New York City dance festival, founded in 2009 and held annually over the Labor Day weekend at Randall's Island Park in the East River. Trance reaches the festival via the Sunday School stage, which has hosted dedicated trance line-ups in multiple editions, with Armin van Buuren, Above & Beyond, Paul van Dyk, Andrew Rayel, and Aly & Fila across the festival's run. Sunday School has been an A State of Trance partnership in select years, broadcast as part of ASOT's tour calendar.",
  },
  ja: {
    description:
      'Electric Zooは長期にわたるニューヨーク市のダンス・フェスティバルで、2009年に発足し、毎年レイバー・デイ週末にイースト・リバーのRandall\'s Island Parkで開催される。トランスはSunday Schoolステージを通じてフェスティバルに到達し、フェスティバルの運営を通じてArmin van Buuren、Above & Beyond、Paul van Dyk、Andrew Rayel、Aly & Filaを擁する複数のエディションで専用トランス・ラインアップをホストしてきた。Sunday Schoolは選択的な年でA State of Tranceパートナーシップとなり、ASOTツアー・カレンダーの一部としてブロードキャストされてきた。',
  },
};

export default electricZooNewYork;

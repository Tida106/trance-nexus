// Transmission — the long-running Czech trance festival now spread
// across Prague (the original/anchor edition), Bangkok, Beijing,
// Sao Paulo, and other touring stops. The Prague edition is the
// canonical one and the focus of this entry.

const transmissionPrague = {
  slug: 'transmission-prague',
  name: 'Transmission Prague',
  status: 'annual',
  category: 'mega',
  region: 'EU',
  country: 'CZ',

  dates: {
    typicalMonth: 'October–November',
    cadence: 'annual',
    note: 'Single-day arena event tied to a yearly themed concept',
  },

  venue: {
    name: 'O2 Arena Prague',
    address: 'Českomoravská 2345/17a, 190 00 Praha 9',
    country: 'CZ',
    lat: 50.1058,
    lng: 14.4912,
    capacity: 17000,
  },

  genres: ['trance', 'uplifting-trance', 'tech-trance', 'progressive-trance'],
  headliners: [
    'paul-van-dyk',
    'aly-and-fila',
    'simon-patterson',
    'andrew-rayel',
    'giuseppe-ottaviani',
    'ferry-corsten',
  ],
  labels: ['Vandit Records', 'FSOE Recordings', 'VII Records'],

  editions: [
    { year: 2024, dates: 'October 26', note: 'Theme: "Beyond the Senses"' },
    { year: 2023, dates: 'October 28', note: 'Theme: "Mystica"' },
    { year: 2022, dates: 'October 29', note: 'Theme: "Behind the Mask"' },
    { year: 2019, dates: 'October 26', note: 'Theme: "The Spark"' },
    { year: 2018, dates: 'October 27', note: 'Theme: "Be Who You Are"' },
  ],

  official_url: 'https://www.transmissionfestival.com',
  ticket_url: 'https://www.transmissionfestival.com/prague',
  og_image: '/og/events/transmission-prague.png',

  en: {
    description:
      "Transmission is one of trance's flagship festival brands, with the original and most-cited edition staged annually at the O2 Arena in Prague each autumn. Each edition is built around a yearly themed concept (Mystica, Behind the Mask, Beyond the Senses, The Spark) that drives the stage design, narrative video content, and choreographed lighting. The line-up axis is uplifting and tech-trance: Paul van Dyk, Aly & Fila, Simon Patterson, Andrew Rayel, and Giuseppe Ottaviani are recurring headliners. Transmission has expanded internationally to Bangkok, Beijing, Sao Paulo, and other touring editions.",
  },
  ja: {
    description:
      'Transmissionはトランスの旗艦フェスティバル・ブランドの一つで、オリジナルかつ最も引用されるエディションが毎年秋プラハのO2 Arenaで開催される。各エディションは年次テーマ・コンセプト（Mystica、Behind the Mask、Beyond the Senses、The Spark）を軸に構築され、それがステージ・デザイン、ナラティブな映像コンテンツ、振付された照明を駆動する。ラインアップ軸はアップリフティングとテック・トランス：Paul van Dyk、Aly & Fila、Simon Patterson、Andrew Rayel、Giuseppe Ottavianiが反復のヘッドライナーだ。Transmissionはバンコク、北京、サンパウロ、その他の巡回エディションへと国際的に拡張している。',
  },
};

export default transmissionPrague;

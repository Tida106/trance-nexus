// Dreamstate SoCal — the flagship North American trance festival,
// produced by Insomniac (the Pasquale Rotella / EDC company). Held
// annually at the NOS Events Center in San Bernardino, California
// each November since 2015, it is the largest dedicated trance event
// staged on the US West Coast.

const dreamstateSocal = {
  slug: 'dreamstate-socal',
  name: 'Dreamstate SoCal',
  status: 'annual',
  category: 'mega',
  region: 'NA',
  country: 'US',

  dates: {
    typicalMonth: 'November',
    cadence: 'annual',
    note: 'Two-day festival, third or fourth weekend of November',
  },

  venue: {
    name: 'NOS Events Center',
    address: '689 South E Street, San Bernardino, CA 92408',
    country: 'US',
    lat: 34.0884,
    lng: -117.2865,
    capacity: 30000,
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
  ],
  labels: ['FSOE Recordings', 'Anjunabeats', 'Armada Music', 'Black Hole Recordings'],

  editions: [
    { year: 2024, dates: 'November 22–23' },
    { year: 2023, dates: 'November 17–18' },
    { year: 2022, dates: 'November 18–19' },
    { year: 2019, dates: 'November 22–23' },
    { year: 2015, dates: 'November 27–28', note: 'Inaugural edition' },
  ],

  official_url: 'https://dreamstateusa.com',
  ticket_url: 'https://dreamstateusa.com/socal',
  og_image: '/og/events/dreamstate-socal.png',

  en: {
    description:
      "Dreamstate SoCal is the flagship North American trance festival, produced by Insomniac (the EDC / Pasquale Rotella company) and held each November at the NOS Events Center in San Bernardino, California. Launched in 2015 as a single-stage event and rapidly expanded into a multi-stage two-day production, Dreamstate has become the largest dedicated trance event in the United States. Line-ups typically span the full uplifting / progressive / psytrance / tech axis, with Ferry Corsten, Aly & Fila, Paul van Dyk, and Gareth Emery as recurring headliners. Sister editions have run in San Francisco, Mexico, and Europe.",
  },
  ja: {
    description:
      'Dreamstate SoCalは北米の旗艦トランス・フェスティバルで、Insomniac（EDC／Pasquale Rotellaの会社）がプロデュースし、毎年11月にカリフォルニア州サンバーナーディーノのNOS Events Centerで開催される。2015年に単一ステージのイベントとして発足し、急速にマルチステージ2日間プロダクションへと拡大したDreamstateは、米国最大の専門トランス・イベントとなった。ラインアップは典型的にアップリフティング／プログレッシブ／サイトランス／テックの全軸に及び、Ferry Corsten、Aly & Fila、Paul van Dyk、Gareth Emeryが反復のヘッドライナーだ。姉妹エディションがサンフランシスコ、メキシコ、ヨーロッパで開催されている。',
  },
};

export default dreamstateSocal;

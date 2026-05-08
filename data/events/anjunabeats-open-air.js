// Anjunabeats Open Air — Above & Beyond's outdoor London edition,
// programmed around the Anjunabeats label roster and held at
// Victoria Park in the East End. The Anjuna Open Air template has
// expanded internationally with editions in New York, Buenos Aires,
// Sydney, and elsewhere, but the London edition remains the brand's
// flagship outdoor production.

const anjunabeatsOpenAir = {
  slug: 'anjunabeats-open-air',
  name: 'Anjunabeats Open Air London',
  status: 'annual',
  category: 'label',
  region: 'EU',
  country: 'GB',

  dates: {
    typicalMonth: 'August–September',
    cadence: 'annual',
    note: 'Single-day outdoor festival in Victoria Park',
  },

  venue: {
    name: 'Victoria Park',
    address: 'Grove Rd, Bow, London E3 5TB',
    country: 'GB',
    lat: 51.5359,
    lng: -0.0356,
    capacity: 35000,
  },

  genres: ['progressive-trance', 'vocal-trance', 'uplifting-trance', 'melodic-techno'],
  headliners: [
    'above-and-beyond',
    'andrew-bayer',
    'ilan-bluestone',
    'genix',
    'yotto',
    'tinlicker',
  ],
  labels: ['Anjunabeats', 'Anjunadeep'],

  editions: [
    { year: 2024, dates: 'August 31', note: 'Above & Beyond + full Anjuna roster' },
    { year: 2023, dates: 'September 2', note: 'Anjunabeats 25-year-anniversary touring' },
    { year: 2019, dates: 'August 31', note: 'Victoria Park outdoor edition' },
    { year: 2017, note: 'Inaugural Anjuna Open Air London' },
  ],

  official_url: 'https://anjuna.com',
  ticket_url: 'https://anjuna.com/events',
  og_image: '/og/events/anjunabeats-open-air.png',

  en: {
    description:
      "Anjunabeats Open Air London is Above & Beyond's outdoor London edition, programmed around the full Anjunabeats label roster and held at Victoria Park in the East End. The brand has expanded internationally with editions in New York, Buenos Aires, Sydney, and the Gorge / Red Rocks (in the form of ABGT milestone arena shows), but London remains the flagship outdoor production. Above & Beyond, Andrew Bayer, ilan Bluestone, Genix, Yotto, and Tinlicker headline a line-up that spans the full Anjunabeats / Anjunadeep editorial axis.",
  },
  ja: {
    description:
      'Anjunabeats Open Air LondonはAbove & Beyondの野外ロンドン版で、Anjunabeatsレーベル・ロスター全体を中心にプログラムされ、イーストエンドのVictoria Parkで開催される。ブランドはニューヨーク、ブエノスアイレス、シドニー、The Gorge／Red Rocks（ABGTマイルストーン・アリーナ・ショーの形で）にエディションを擁して国際的に拡張しているが、ロンドンが旗艦の野外プロダクションのままだ。Above & Beyond、Andrew Bayer、ilan Bluestone、Genix、Yotto、TinlickerがAnjunabeats／Anjunadeepの編集軸全体に及ぶラインアップでヘッドラインを務める。',
  },
};

export default anjunabeatsOpenAir;

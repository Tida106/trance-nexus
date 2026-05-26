// Sunburn Festival — India's flagship dance festival, founded in
// 2007. The first edition ran at Candolim Beach, Goa; the festival
// moved to Vagator (also in Goa) from the 2008 edition through 2015,
// shifted to Pune (Maharashtra) for the 2016–2018 editions, then
// returned to Vagator in 2019. The 2024 edition relocated to a
// new venue at Dhargalim in North Goa (Pernem taluka), 15 km from
// the newly opened Mopa International Airport.

const sunburnFestival = {
  slug: 'sunburn-festival',
  name: 'Sunburn Festival',
  status: 'annual',
  category: 'regional',
  region: 'ASIA',
  country: 'IN',

  dates: {
    typicalMonth: 'December',
    cadence: 'annual',
    note: 'Three-day festival around the New Year transition',
  },

  venue: {
    name: 'Dhargalim, North Goa (current host)',
    address: 'Dhargalim, Pernem, North Goa 403512',
    country: 'IN',
    lat: 15.7330,
    lng: 73.8650,
    capacity: 150000,
  },

  genres: ['trance', 'progressive-trance', 'psytrance', 'uplifting-trance'],
  headliners: [
    'armin-van-buuren',
    'above-and-beyond',
    'aly-and-fila',
    'andrew-rayel',
    'vini-vici',
  ],
  labels: ['Armada Music', 'Anjunabeats'],

  editions: [
    { year: 2024, dates: 'December 28–30', note: '18th edition; first at Dhargalim (theme: "Underwater Paradise")' },
    { year: 2019, note: 'Festival returns to Vagator, Goa (after three Pune editions)' },
    { year: 2016, note: 'Festival relocates to Pune, Maharashtra (held in Pune through 2018)' },
    { year: 2008, note: 'Festival moves to Vagator, Goa (held there annually through 2015)' },
    { year: 2007, dates: 'December 28–29', note: 'Inaugural edition at Candolim Beach, Goa' },
  ],

  official_url: 'https://www.sunburn.in',
  ticket_url: 'https://www.sunburn.in/tickets',
  og_image: '/og/events/sunburn-festival.png',

  en: {
    description:
      "Sunburn Festival is India's flagship dance festival, founded in 2007 with its first edition staged on the beach at Candolim in Goa. Early editions were the formative document of the modern Indian dance-music scene, drawing both the established Goa psy-and-trance audience and a new mainstream Indian electronic audience. The festival ran at Vagator, Goa from 2008 through 2015, then relocated to Pune, Maharashtra for the 2016–2018 editions, before returning to Vagator in 2019. The 2024 edition (18th overall) ran 28&ndash;30 December at a new venue in Dhargalim, North Goa (Pernem taluka), 15 km from the newly opened Mopa International Airport. Trance has been a constant — Armin van Buuren, Above & Beyond, Aly & Fila, Andrew Rayel, and Vini Vici have all played multiple editions across the festival's run.",
  },
  ja: {
    description:
      'Sunburn Festivalはインドの旗艦ダンス・フェスティバルで、2007年に発足し、最初のエディションがゴアのCandolimビーチで開催された。初期エディションは現代インドのダンス・ミュージック・シーンの形成的ドキュメントで、確立されたゴアのサイ・アンド・トランス観客と新しいメインストリームのインド電子音楽観客の両方を集めた。フェスティバルは2008年から2015年までゴアのVagatorで開催され、2016〜2018年エディションはマハーラーシュトラ州プネに移転、2019年にVagatorへ復帰した。2024年エディション（通算第18回）は12月28〜30日、北ゴアのPernem地区Dhargalimの新会場で開催（新Mopa国際空港から15km）。トランスは一定の存在で、Armin van Buuren、Above & Beyond、Aly & Fila、Andrew Rayel、Vini Viciが複数のエディションでプレイしてきた。',
  },
};

export default sunburnFestival;

// Sunburn Festival — India's flagship dance festival, founded in
// 2007. The early editions were staged on the beach at Candolim and
// Vagator in Goa during the New Year season; later editions have
// rotated between Goa, Pune, and Delhi as the festival's scale grew
// and as logistics shifted. Sunburn pioneered the modern Indian
// dance-festival circuit and remains a key Asian dance event.

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
    name: 'Vagator (historical home) / rotating Indian sites',
    address: 'Vagator, Bardez, North Goa (early editions)',
    country: 'IN',
    lat: 15.5980,
    lng: 73.7400,
    capacity: 100000,
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
    { year: 2024, dates: 'December 28–30', note: 'Goa edition' },
    { year: 2019, note: '13th edition; venue rotation continued' },
    { year: 2014, note: 'Festival relocated from Goa to Vagator-Anjuna corridor' },
    { year: 2007, note: 'Inaugural edition (Candolim Beach, Goa)' },
  ],

  official_url: 'https://www.sunburn.in',
  ticket_url: 'https://www.sunburn.in/tickets',
  og_image: '/og/events/sunburn-festival.png',

  en: {
    description:
      "Sunburn Festival is India's flagship dance festival, founded in 2007 with its first edition staged on the beach at Candolim in Goa. Early editions were the formative document of the modern Indian dance-music scene, drawing both the established Goa psy-and-trance audience and a new mainstream Indian electronic audience. Later editions have rotated between Goa, Pune, and Delhi as the festival's scale grew and logistics shifted. Trance has been a constant — Armin van Buuren, Above & Beyond, Aly & Fila, Andrew Rayel, and Vini Vici have all played multiple editions across the festival's two-decade run.",
  },
  ja: {
    description:
      'Sunburn Festivalはインドの旗艦ダンス・フェスティバルで、2007年に発足し、最初のエディションがゴアのCandolimビーチで開催された。初期エディションは現代インドのダンス・ミュージック・シーンの形成的ドキュメントで、確立されたゴアのサイ・アンド・トランス観客と新しいメインストリームのインド電子音楽観客の両方を集めた。後のエディションは、フェスティバルの規模が拡大しロジスティクスが変化するにつれて、ゴア、プネー、デリーの間でローテーションしてきた。トランスは一定の存在だった——Armin van Buuren、Above & Beyond、Aly & Fila、Andrew Rayel、Vini Viciがフェスティバルの20年の運営を通じて複数のエディションでプレイしてきた。',
  },
};

export default sunburnFestival;

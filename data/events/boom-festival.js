// Boom Festival — the canonical psytrance / transformational
// festival, held biennially on the shores of Idanha-a-Nova lake in
// inland Portugal. Founded in 1997, Boom is widely regarded as the
// spiritual home of the global psytrance scene and a UNESCO-cited
// reference for sustainable festival production. Editions normally
// occur every two years (even-numbered years pre-covid); after the
// 2020 cancellation, the organisation ran consecutive 2022 and 2023
// editions before returning to the biennial cadence with the next
// edition confirmed for 2027.

const boomFestival = {
  slug: 'boom-festival',
  name: 'Boom Festival',
  status: 'annual',
  category: 'psy',
  region: 'EU',
  country: 'PT',

  dates: {
    next: { start: '2027-07-18', end: '2027-07-25' },
    typicalMonth: 'July',
    cadence: 'biennial',
    note: 'Week-long festival in late July; next confirmed edition July 18–25, 2027',
  },

  venue: {
    name: 'Boomland (Idanha-a-Nova lakeside)',
    address: 'Herdade da Granja, Idanha-a-Nova, Castelo Branco District',
    country: 'PT',
    lat: 39.9806,
    lng: -7.1644,
    capacity: 40000,
  },

  genres: ['psytrance', 'goa-trance', 'progressive-trance'],
  headliners: [
    'astrix',
    'infected-mushroom',
    'vini-vici',
    'captain-hook',
    'ace-ventura',
    'liquid-soul',
    'astral-projection',
  ],
  labels: ['Iboga Records', 'HOMmega Productions', 'Nano Records'],

  editions: [
    { year: 2027, dates: 'July 18–25', note: 'Next confirmed edition (New Moon)' },
    { year: 2023, dates: 'July 20–27', note: 'Consecutive post-covid edition; 39,452 attendees from 169 countries' },
    { year: 2022, dates: 'July 22–29', note: 'First post-covid edition' },
    { year: 2018, dates: 'July 22–29' },
    { year: 2016, dates: 'August 11–18' },
    { year: 1997, note: 'Inaugural edition' },
  ],

  official_url: 'https://www.boomfestival.org',
  ticket_url: 'https://www.boomfestival.org/tickets',
  og_image: '/og/events/boom-festival.png',

  en: {
    description:
      "Boom Festival is the canonical psytrance and transformational festival, held biennially on the shores of Idanha-a-Nova lake in inland Portugal. Founded in 1997, Boom is widely regarded as the spiritual home of the global psytrance scene, with the Dance Temple stage as its flagship — Astrix, Infected Mushroom, Vini Vici, Captain Hook, Ace Ventura, Liquid Soul, and Astral Projection have all played multiple editions. Following the 2020 covid cancellation, the organisation ran consecutive 2022 and 2023 editions before returning to the biennial cadence with the next edition confirmed for 18–25 July 2027. Boom is also a UNESCO-cited reference for sustainable festival production.",
  },
  ja: {
    description:
      'Boom Festivalはカノニカルなサイトランス／トランスフォーメーショナル・フェスティバルで、ポルトガル内陸のIdanha-a-Nova湖畔で隔年開催される。1997年に発足したBoomは、世界中のサイトランス・シーンの精神的故郷として広く認識されており、Dance Templeステージがその旗艦だ——Astrix、Infected Mushroom、Vini Vici、Captain Hook、Ace Ventura、Liquid Soul、Astral Projectionがすべて複数のエディションでプレイしてきた。2020年のコロナ中止を経て、2022年と2023年に連続エディションを開催した後、隔年フォーマットに戻り次のエディションは2027年7月18〜25日に確定している。Boomはまた持続可能なフェスティバル・プロダクションのUNESCO引用参照でもある。',
  },
};

export default boomFestival;

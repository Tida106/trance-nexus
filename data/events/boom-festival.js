// Boom Festival — the canonical psytrance / transformational
// festival, held biennially on the shores of Idanha-a-Nova lake in
// inland Portugal. Founded in 1997, Boom is widely regarded as the
// spiritual home of the global psytrance scene and a UNESCO-cited
// reference for sustainable festival production.

const boomFestival = {
  slug: 'boom-festival',
  name: 'Boom Festival',
  status: 'annual',
  category: 'psy',
  region: 'EU',
  country: 'PT',

  dates: {
    typicalMonth: 'July',
    cadence: 'biennial',
    note: 'Week-long festival, late July of even-numbered years',
  },

  venue: {
    name: 'Boomland (Idanha-a-Nova lakeside)',
    address: 'Idanha-a-Nova, Castelo Branco District',
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
    { year: 2024, dates: 'July 22–29' },
    { year: 2022, dates: 'July 22–29' },
    { year: 2018, dates: 'July 22–29' },
    { year: 2016, dates: 'August 11–18' },
    { year: 1997, note: 'Inaugural edition' },
  ],

  official_url: 'https://www.boomfestival.org',
  ticket_url: 'https://www.boomfestival.org/tickets',
  og_image: '/og/events/boom-festival.png',

  en: {
    description:
      "Boom Festival is the canonical psytrance and transformational festival, held biennially on the shores of Idanha-a-Nova lake in inland Portugal. Founded in 1997, Boom is widely regarded as the spiritual home of the global psytrance scene, with the Dance Temple stage as its flagship — Astrix, Infected Mushroom, Vini Vici, Captain Hook, Ace Ventura, Liquid Soul, and Astral Projection have all played multiple editions. Boom is also a UNESCO-cited reference for sustainable festival production, with composting toilets, on-site renewable power, and a permanent year-round permaculture installation.",
  },
  ja: {
    description:
      'Boom Festivalはカノニカルなサイトランス／トランスフォーメーショナル・フェスティバルで、ポルトガル内陸のIdanha-a-Nova湖畔で隔年開催される。1997年に発足したBoomは、世界中のサイトランス・シーンの精神的故郷として広く認識されており、Dance Templeステージがその旗艦だ——Astrix、Infected Mushroom、Vini Vici、Captain Hook、Ace Ventura、Liquid Soul、Astral Projectionがすべて複数のエディションでプレイしてきた。Boomはまた、コンポストトイレ、オンサイトの再生可能エネルギー、通年のパーマカルチャー恒久設備を擁する、持続可能なフェスティバル・プロダクションのUNESCO引用参照でもある。',
  },
};

export default boomFestival;

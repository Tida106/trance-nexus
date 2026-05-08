// Sonica Festival — the Italian psytrance festival held annually
// in early August in the central Italian region of Marche. Sonica
// has been a fixture of the European psy circuit since the early
// 2000s and runs alongside Boom and Ozora as one of the canonical
// EU psy festival destinations.

const sonicaFestival = {
  slug: 'sonica-festival',
  name: 'Sonica Festival',
  status: 'annual',
  category: 'psy',
  region: 'EU',
  country: 'IT',

  dates: {
    typicalMonth: 'August',
    cadence: 'annual',
    note: 'Multi-day open-air festival in early August',
  },

  venue: {
    name: 'Sonica Festival site, Marche',
    address: 'Province of Macerata, Marche region',
    country: 'IT',
    lat: 43.3000,
    lng: 13.2000,
    capacity: 12000,
  },

  genres: ['psytrance', 'progressive-trance', 'goa-trance'],
  headliners: [
    'astrix',
    'captain-hook',
    'ace-ventura',
    'liquid-soul',
    'ranji',
    'symbolic',
  ],
  labels: ['Iboga Records', 'HOMmega Productions', 'Nano Records'],

  editions: [
    { year: 2024, dates: 'Early August (multi-day)' },
    { year: 2023, dates: 'Early August (multi-day)' },
    { year: 2019, dates: 'Early August (multi-day)' },
  ],

  official_url: 'https://sonicafestival.com',
  ticket_url: 'https://sonicafestival.com/tickets',
  og_image: '/og/events/sonica-festival.png',

  en: {
    description:
      "Sonica Festival is the Italian psytrance festival held annually in early August in the central Italian Marche region. Sonica has been a fixture of the European psytrance circuit since the early 2000s and is widely regarded as Italy's primary psy gathering, running alongside Boom (Portugal) and Ozora (Hungary) as one of the canonical EU psy festival destinations. The festival's Italian-rural location, Mediterranean weather, and continental psy lineup (Astrix, Captain Hook, Ace Ventura, Liquid Soul) draw an audience from across Italy and the wider European psy community.",
  },
  ja: {
    description:
      'Sonica Festivalはイタリアのサイトランス・フェスティバルで、毎年8月上旬にイタリア中部マルケ州で開催される。Sonicaは2000年代初頭からヨーロッパのサイトランス・サーキットの定番で、Boom（ポルトガル）、Ozora（ハンガリー）と並ぶイタリアの主要サイ・ギャザリングとして広く認識されている。フェスティバルのイタリアの田園立地、地中海性気候、大陸サイのラインアップ（Astrix、Captain Hook、Ace Ventura、Liquid Soul）が、イタリア全土とより広いヨーロッパのサイ・コミュニティから観客を集めている。',
  },
};

export default sonicaFestival;

// Luminosity Beach Festival — the canonical Dutch outdoor uplifting-
// and-tech-trance festival, held annually at Bernie's Beachclub on
// the beach in Zandvoort, North Holland. Operated by Luminosity
// Events, the festival has run yearly since 2010 and is widely
// regarded as the spiritual home of contemporary uplifting trance.

const luminosityBeachFestival = {
  slug: 'luminosity-beach-festival',
  name: 'Luminosity Beach Festival',
  status: 'annual',
  category: 'specialty',
  region: 'EU',
  country: 'NL',

  dates: {
    next: { start: '2025-06-26', end: '2025-06-29' },
    typicalMonth: 'June',
    cadence: 'annual',
    note: 'Four-day beach festival in late June',
  },

  venue: {
    name: "Bernie's Beachclub",
    address: 'Boulevard Barnaart 65, 2041 JA Zandvoort',
    country: 'NL',
    lat: 52.3927,
    lng: 4.5374,
    capacity: 7500,
  },

  genres: ['uplifting-trance', 'tech-trance', 'vocal-trance', 'progressive-trance', 'psytrance'],
  headliners: [
    'aly-and-fila',
    'john-ocallaghan',
    'bryan-kearney',
    'simon-patterson',
    'allen-watts',
    'paul-van-dyk',
    'markus-schulz',
  ],
  labels: ['FSOE Recordings', 'Subculture', 'Pure Trance Recordings', 'VII Records'],

  editions: [
    { year: 2025, dates: 'June 26–29' },
    { year: 2024, dates: 'June 27–30' },
    { year: 2019, dates: 'June 27–30', note: '10th anniversary edition' },
  ],

  official_url: 'https://luminosity-events.nl',
  ticket_url: 'https://luminosity-events.nl/luminosity-beach-festival-2025/',
  og_image: '/og/events/luminosity-beach-festival.png',

  en: {
    description:
      "Luminosity Beach Festival is the canonical Dutch outdoor trance festival, staged each late June at Bernie's Beachclub on the beach in Zandvoort, North Holland. Run since 2010 by Luminosity Events, it has become the spiritual home of contemporary uplifting and tech-trance — Aly & Fila, John O'Callaghan, Bryan Kearney, Simon Patterson, Allen Watts, Paul van Dyk, and Markus Schulz have all played multiple editions, with FSOE, Subculture, Pure Trance, and VII Records running stages. The 2025 edition runs 26–29 June.",
  },
  ja: {
    description:
      'Luminosity Beach Festivalはオランダのカノニカルな野外トランス・フェスティバルで、毎年6月下旬にザントフォールトのビーチにあるBernie\'s Beachclubで開催される。2010年以来Luminosity Eventsが運営しており、現代アップリフティング＆テック・トランスの精神的故郷となっている——Aly & Fila、John O\'Callaghan、Bryan Kearney、Simon Patterson、Allen Watts、Paul van Dyk、Markus Schulzが複数のエディションでプレイしてきた。FSOE、Subculture、Pure Trance、VII Recordsがすべてステージを運営する。2025年エディションは6月26〜29日。',
  },
};

export default luminosityBeachFestival;

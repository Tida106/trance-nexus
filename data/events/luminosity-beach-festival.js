// Luminosity Beach Festival — the canonical Dutch outdoor uplifting-
// and-tech-trance festival, held annually on the beach at Bloemendaal
// aan Zee just north of Zandvoort. Operated by Luminosity Events,
// the festival has run yearly since 2010 and is widely regarded as
// the spiritual home of contemporary uplifting trance.

const luminosityBeachFestival = {
  slug: 'luminosity-beach-festival',
  name: 'Luminosity Beach Festival',
  status: 'annual',
  category: 'specialty',
  region: 'EU',
  country: 'NL',

  dates: {
    typicalMonth: 'June–July',
    cadence: 'annual',
    note: 'Multi-day beach festival on the last weekend of June',
  },

  venue: {
    name: 'Beachclub Riche / Bloemendaal aan Zee',
    address: 'Strandweg 1, 2051 EG Bloemendaal',
    country: 'NL',
    lat: 52.4044,
    lng: 4.5731,
    capacity: 7500,
  },

  genres: ['uplifting-trance', 'tech-trance', 'vocal-trance', 'progressive-trance', 'psytrance'],
  headliners: [
    'aly-and-fila',
    'john-ocallaghan',
    'bryan-kearney',
    'simon-patterson',
    'allen-watts',
    'sean-tyas',
    'andrew-rayel',
  ],
  labels: ['FSOE Recordings', 'Subculture', 'Pure Trance Recordings', 'VII Records'],

  editions: [
    { year: 2024, dates: 'June 27–30' },
    { year: 2023, dates: 'June 22–25' },
    { year: 2022, dates: 'June 23–26' },
    { year: 2019, dates: 'June 27–30', note: '10th anniversary edition' },
  ],

  official_url: 'https://www.luminosity-events.nl',
  ticket_url: 'https://www.luminosity-events.nl/luminosity-beach-festival',
  og_image: '/og/events/luminosity-beach-festival.png',

  en: {
    description:
      "Luminosity Beach Festival is the canonical Dutch outdoor trance festival, staged on the beach at Bloemendaal aan Zee just north of Zandvoort each late June. Run since 2010 by Luminosity Events, it has become the spiritual home of contemporary uplifting and tech-trance — Aly & Fila, John O'Callaghan, Bryan Kearney, Simon Patterson, and Allen Watts are recurring fixtures, with FSOE, Subculture, Pure Trance, and VII Records all running stages. The festival is the closest thing the modern 138 BPM scene has to a flagship outdoor home.",
  },
  ja: {
    description:
      'Luminosity Beach Festivalはオランダのカノニカルな野外トランス・フェスティバルで、毎年6月下旬にZandvoort北のBloemendaal aan Zeeのビーチで開催される。2010年以来Luminosity Eventsが運営しており、現代アップリフティング＆テック・トランスの精神的故郷となっている——Aly & Fila、John O\'Callaghan、Bryan Kearney、Simon Patterson、Allen Wattsが反復の常連で、FSOE、Subculture、Pure Trance、VII Recordsがすべてステージを運営する。現代138 BPMシーンが旗艦野外拠点として持つ最も近い存在だ。',
  },
};

export default luminosityBeachFestival;

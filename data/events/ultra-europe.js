// Ultra Europe — the European edition of the Miami-rooted Ultra
// Music Festival brand, held annually in mid-July in Split, Croatia
// (with associated beach-and-island events around Hvar and Brač).
// The festival relocated from Poljud Stadium to the larger Park
// Mladeži stadium for the 2024 edition. Trance reaches the festival
// via the Resistance and (in years it has run) A State of Trance
// stages.

const ultraEurope = {
  slug: 'ultra-europe',
  name: 'Ultra Europe',
  status: 'annual',
  category: 'mega',
  region: 'EU',
  country: 'HR',

  dates: {
    next: { start: '2026-07-10', end: '2026-07-12' },
    typicalMonth: 'July',
    cadence: 'annual',
    note: 'Three-night festival followed by Destination Ultra island events',
  },

  venue: {
    name: 'Park Mladeži',
    address: 'Ul. Hrvatske Mornarice 10, 21000 Split',
    country: 'HR',
    lat: 43.5108,
    lng: 16.4574,
    capacity: 150000, // approximate three-night aggregate
  },

  genres: ['trance', 'progressive-trance', 'uplifting-trance'],
  headliners: [
    'armin-van-buuren',
    'above-and-beyond',
    'paul-van-dyk',
    'andrew-rayel',
    'aly-and-fila',
  ],
  labels: ['Armada Music', 'A State of Trance', 'Anjunabeats'],

  editions: [
    { year: 2026, dates: 'July 10–12' },
    { year: 2024, dates: 'July 12–14', note: 'First edition at Park Mladeži (relocated from Poljud Stadium)' },
    { year: 2023, dates: 'July 7–9', note: 'Final Poljud Stadium edition' },
    { year: 2022, dates: 'July 8–10', note: 'Poljud Stadium' },
    { year: 2019, dates: 'July 12–14', note: 'Poljud Stadium' },
    { year: 2013, note: 'Inaugural edition (first European Ultra)' },
  ],

  official_url: 'https://ultraeurope.com',
  ticket_url: 'https://ultraeurope.com/tickets',
  og_image: '/og/events/ultra-europe.png',

  en: {
    description:
      "Ultra Europe is the European edition of the Ultra Music Festival brand, held annually in mid-July in Split, Croatia, since the inaugural 2013 edition. The festival relocated from Poljud Stadium to the larger Park Mladeži for 2024. The three-night main festival is followed by the Destination Ultra island events at Hvar and Brač, extending the run into a week-long Adriatic dance experience. Trance reaches Ultra Europe via the Resistance stage and (in years it has been programmed) the A State of Trance stage, with Armin van Buuren, Above & Beyond, and Paul van Dyk as recurring closers.",
  },
  ja: {
    description:
      'Ultra EuropeはUltra Music Festivalブランドのヨーロッパ版で、2013年の創設エディション以来毎年7月中旬にクロアチアのスプリトで開催される。2024年からはより広いPark Mladežiへ会場移転（Poljud Stadiumから）。3夜のメイン・フェスティバルの後にHvarとBračでのDestination Ultra島イベントが続く。トランスはResistanceステージと（プログラムされている年は）A State of Tranceステージを通じてUltra Europeに到達し、Armin van Buuren、Above & Beyond、Paul van Dykが反復のクローザーだ。',
  },
};

export default ultraEurope;

// Subculture Events — John O'Callaghan's touring brand. This page is
// a short stub; full Subculture context (label, radio show, tour
// concept) is covered on the John O'Callaghan artist page.

const subcultureEvents = {
  slug: 'subculture-events',
  name: 'Subculture Events',
  status: 'annual',
  category: 'label',
  region: 'EU',
  country: 'GB',
  mergedInto: 'john-ocallaghan',

  dates: {
    typicalMonth: 'varies',
    cadence: 'series',
    note: 'Recurring one-night events; multiple editions per year',
  },

  venue: {
    // Anchor on Ministry of Sound, London — documented host venue for
    // Subculture episodes (e.g. Subculture 078 live, June 2013).
    name: 'Ministry of Sound (recurring host venue)',
    address: '103 Gaunt St, London SE1 6DP',
    country: 'GB',
    lat: 51.4972,
    lng: -0.0997,
    capacity: 1500,
  },

  genres: ['uplifting-trance', 'tech-trance'],
  headliners: [
    'john-ocallaghan',
    'bryan-kearney',
    'will-atkinson',
    'sneijder',
    'simon-patterson',
    'standerwick',
  ],
  labels: ['Subculture'],

  editions: [
    { year: 2024, note: 'Multiple touring editions across UK / Ireland / mainland EU' },
    { year: 2020, note: '10-year anniversary of Subculture imprint' },
    { year: 2010, note: 'Subculture Recordings founded (Black Hole Recordings sublabel) — first Subculture-branded events follow' },
  ],

  official_url: 'https://subcultureevents.com',
  ticket_url: 'https://subcultureevents.com',
  og_image: '/og/events/subculture-events.png',

  en: {
    description:
      "Subculture is a touring trance brand led by John O'Callaghan, not a fixed annual festival. For the full Subculture story — label history, radio show, tour residencies — see the John O'Callaghan artist page.\n\nThe Subculture Recordings imprint was founded in January 2010 as a Black Hole Recordings sublabel, and the brand's touring events run as recurring one-night shows primarily across the UK and Ireland, with documented London editions at The Gallery, Ministry of Sound.",
  },
  ja: {
    description:
      "SubcultureはJohn O'Callaghanが率いるトランスのツアー・ブランドで、固定の年次フェスティバルではない。Subcultureの全容——レーベル史、ラジオ番組、ツアー・レジデンシー——についてはJohn O'Callaghanアーティスト・ページを参照。\n\nSubculture Recordingsレーベルは2010年1月にBlack Hole Recordingsのサブレーベルとして設立され、ブランドのツアー・イベントは英国とアイルランドを中心とする反復の一夜公演として運営されている。ロンドンではMinistry of SoundのThe Galleryで開催された記録がある。",
  },
};

export default subcultureEvents;

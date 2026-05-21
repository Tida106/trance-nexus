// Subculture Events — John O'Callaghan's Subculture brand party
// series. Recurring one-night events held primarily in the UK and
// Ireland (the duo's home territory), with select international
// editions in the Netherlands, Germany, and the US.

const subcultureEvents = {
  slug: 'subculture-events',
  name: 'Subculture Events',
  status: 'annual',
  category: 'label',
  region: 'EU',
  country: 'GB',

  dates: {
    typicalMonth: 'varies',
    cadence: 'series',
    note: 'Recurring one-night events; multiple editions per year',
  },

  venue: {
    // Anchor on Ministry of Sound, London — long-running Subculture
    // residency host venue.
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
      "Subculture is John O'Callaghan's uplifting-and-tech-trance brand, originally established as a sublabel on Black Hole Recordings in 2010 with O'Callaghan as resident. The brand has since expanded into recurring one-night events held primarily in the UK and Ireland with select international editions in the Netherlands, Germany, and the US. A recurring artist roster of Bryan Kearney, Will Atkinson, Sneijder, Simon Patterson, and Standerwick joins O'Callaghan as resident headliners. Subculture remains a fixture of the contemporary 138 BPM scene's club-night calendar.",
  },
  ja: {
    description:
      'SubcultureはJohn O\'Callaghanのアップリフティング＆テック・トランス・ブランドで、もともと2010年にBlack Hole Recordingsのサブレーベルとして設立された（O\'Callaghanがレジデント）。その後、英国とアイルランドを中心に反復の一夜イベントへと拡張し、オランダ、ドイツ、米国に選択的な国際エディションを擁する。Bryan Kearney、Will Atkinson、Sneijder、Simon Patterson、Standerwickの反復アーティスト・ロスターがO\'Callaghanとともにレジデント・ヘッドライナーとして加わる。Subcultureは現代138 BPMシーンのクラブ・ナイト・カレンダーの定番として残っている。',
  },
};

export default subcultureEvents;

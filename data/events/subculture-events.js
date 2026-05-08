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
    { year: 2024, note: 'Multiple editions across UK / Ireland / mainland EU' },
    { year: 2023, note: 'Subculture XX — 20-year-anniversary celebration' },
    { year: 2019, note: 'Subculture 15-year-anniversary edition (UK tour)' },
    { year: 2003, note: 'First Subculture-branded event (John O\'Callaghan resident)' },
  ],

  official_url: 'https://subcultureevents.com',
  ticket_url: 'https://subcultureevents.com',
  og_image: '/og/events/subculture-events.png',

  en: {
    description:
      "Subculture is John O'Callaghan's UK-rooted party brand, running recurring one-night events primarily in the UK and Ireland with select international editions in the Netherlands, Germany, and the US. Founded in 2003 with O'Callaghan as resident, the brand has built a tightly-defined uplifting-and-tech-trance identity over more than two decades, with a recurring artist roster of Bryan Kearney, Will Atkinson, Sneijder, Simon Patterson, and Standerwick joining O'Callaghan as resident headliners. Subculture is the backbone of the contemporary 138 BPM scene's club-night calendar.",
  },
  ja: {
    description:
      'SubcultureはJohn O\'Callaghanの英国に根ざしたパーティ・ブランドで、英国とアイルランドを中心に反復の一夜イベントを運営し、オランダ、ドイツ、米国に選択的な国際エディションを擁する。O\'Callaghanをレジデントに2003年に設立されたブランドは、20年以上にわたって緊密に定義されたアップリフティング＆テック・トランスのアイデンティティを築いており、Bryan Kearney、Will Atkinson、Sneijder、Simon Patterson、Standerwickの反復アーティスト・ロスターがO\'Callaghanとともにレジデント・ヘッドライナーとして加わる。Subcultureは現代138 BPMシーンのクラブ・ナイト・カレンダーのバックボーンだ。',
  },
};

export default subcultureEvents;

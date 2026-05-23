// Ozora Festival — the Hungarian psytrance festival held annually
// at Dádpuszta, near the village of Ozora in central Hungary. The
// festival traces its lineage to the 1999 Solipse total-eclipse
// gathering at the same site, with the modern festival running
// continuously since 2004.

const ozoraFestival = {
  slug: 'ozora-festival',
  name: 'Ozora Festival',
  status: 'annual',
  category: 'psy',
  region: 'EU',
  country: 'HU',

  dates: {
    next: { start: '2026-07-27', end: '2026-08-04' },
    typicalMonth: 'July–August',
    cadence: 'annual',
    note: 'Week-long festival, last week of July into early August',
  },

  venue: {
    name: 'Dádpuszta',
    address: 'Dádpuszta, near Ozora, Tolna County',
    country: 'HU',
    lat: 46.7700,
    lng: 18.4700,
    capacity: 60000,
  },

  genres: ['psytrance', 'goa-trance', 'progressive-trance'],
  headliners: [
    'astrix',
    'captain-hook',
    'ace-ventura',
    'liquid-soul',
    'ranji',
    'vini-vici',
    'infected-mushroom',
    'symbolic',
    'atmos',
  ],
  labels: ['Iboga Records', 'HOMmega Productions', 'Nano Records', 'Solstice Music'],

  editions: [
    { year: 2026, dates: 'July 27 – August 4', note: 'Gates open July 24; opening ceremony July 27' },
    { year: 2024, dates: 'July 26 – August 6', note: 'Full festival window including warm-up days' },
    { year: 2022, dates: 'August 1–7' },
    { year: 2019, dates: 'July 29 – August 4' },
    { year: 2004, note: 'Inaugural Ozora Festival edition (succeeding Solipse 1999; site dormant 1999-2004)' },
    { year: 2001, note: 'Solipse 2001 Zambia sequel (June 18-25, total eclipse 21 June) — original Hungarian site dormant until 2004' },
    { year: 1999, note: 'Solipse Festival at Dádpuszta tied to the total solar eclipse of 11 August 1999' },
  ],

  official_url: 'https://ozorafestival.eu',
  ticket_url: 'https://ozorafestival.eu/tickets',
  og_image: '/og/events/ozora-festival.png',

  en: {
    description:
      "Ozora Festival is the Hungarian psytrance festival held annually at Dádpuszta in central Hungary, and described by Trax Magazine as the principal hub of psytrance culture in Europe. The site's psytrance lineage traces to the 1999 Solipse Festival, a gathering organised around the total solar eclipse of 11 August 1999 that drew roughly 15,000-20,000 attendees. Solipse had a sequel in Zambia in 2001 (timed to the 21 June total eclipse), but the Hungarian site lay dormant until the first Ozora Festival in 2004, after which it has run annually.\n\nThe 2026 edition runs July 27 to August 4 (gates open July 24). Ozora is staged across multiple thematic areas: the main Ozora Stage for psytrance and progressive, the Dome for chill-out and psybient, Pumpui for techno and house, Dragon Nest for live and world-music programming, and Ambyss for deep atmospheric soundscapes. Permanent clay-and-wood structures on site include the Mirador lookout-and-visionary-art tower, the Chambok House lecture hall, and the Artisans workshop area. Astrix, Captain Hook, Ace Ventura, Liquid Soul, Ranji, Vini Vici, and Infected Mushroom are recurring headliners.",
  },
  ja: {
    description:
      "Ozora Festivalはハンガリーのサイトランス・フェスティバルで、毎年ハンガリー中部のDádpusztaで開催される。Trax Magazineはこのフェスティバルを「ヨーロッパのサイトランス文化の主要なハブ」と評する。サイトのサイトランス系譜は、1999年8月11日の皆既日食を中心に組織されたSolipse Festivalに遡り、約15,000-20,000人の参加者を集めた。Solipseは2001年にザンビア（6月21日の皆既日食に合わせて）で続編が開催されたが、ハンガリーのサイトは2004年の最初のOzora Festivalまで休眠し、以来毎年開催されている。\n\n2026年エディションは7月27日から8月4日まで（ゲート開放は7月24日）。Ozoraは複数のテーマ別エリアで展開される——サイトランスとプログレッシブのメインOzora Stage、チルアウトとサイビエントのDome、テクノとハウスのPumpui、ライヴとワールドミュージックのDragon Nest、深いアトモスフェリック・サウンドスケープのAmbyss。サイトには恒久的な粘土と木の構造物として、展望台兼ヴィジョナリー・アート・タワーのMirador、講義ホールのChambok House、ワークショップ・エリアのArtisansがある。Astrix、Captain Hook、Ace Ventura、Liquid Soul、Ranji、Vini Vici、Infected Mushroomが反復のヘッドライナーだ。",
  },
};

export default ozoraFestival;

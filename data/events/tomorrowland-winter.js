// Tomorrowland Winter — the ski-resort sister event to the main
// Belgian summer festival, held annually at Alpe d'Huez in the
// French Alps each March since 2019 (with covid-era pauses).

const tomorrowlandWinter = {
  slug: 'tomorrowland-winter',
  name: 'Tomorrowland Winter',
  status: 'annual',
  category: 'mega',
  region: 'EU',
  country: 'FR',

  dates: {
    next: { start: '2026-03-21', end: '2026-03-28' },
    typicalMonth: 'March',
    cadence: 'annual',
    note: 'Week-long festival on the slopes of Alpe d\'Huez',
  },

  venue: {
    name: 'Alpe d\'Huez Ski Resort',
    address: '38750 Huez, Isère',
    country: 'FR',
    lat: 45.0904,
    lng: 6.0686,
    capacity: 35000, // weekly attendance
  },

  genres: ['trance', 'progressive-trance', 'uplifting-trance'],
  headliners: [
    'armin-van-buuren',
    'above-and-beyond',
    'tiesto',
    'cosmic-gate',
  ],
  labels: ['Armada Music', 'Anjunabeats'],

  editions: [
    { year: 2026, dates: 'March 21–28', note: 'Confirmed next edition' },
    { year: 2025, dates: 'March 15–22' },
    { year: 2024, dates: 'March 16–23', note: '4th edition, ~22,000 attendees' },
    { year: 2023, dates: 'March 18–24' },
    { year: 2022, dates: 'March 19–25', note: 'First post-covid edition' },
    { year: 2019, dates: 'March 9–16', note: 'Inaugural edition' },
  ],

  official_url: 'https://www.tomorrowland.com/en/winter',
  ticket_url: 'https://www.tomorrowland.com/en/winter/tickets',
  og_image: '/og/events/tomorrowland-winter.png',

  en: {
    description:
      "Tomorrowland Winter is the ski-resort sister event to the main Belgian summer festival, held annually at Alpe d'Huez in the French Alps each March since 2019. The week-long festival combines daytime skiing on the resort's slopes with evening stage productions in the same elaborate Tomorrowland aesthetic, with mainstage and dedicated stages for trance, progressive, and house. Armin van Buuren, Above & Beyond, and Tiësto have headlined recurring editions.",
  },
  ja: {
    description:
      'Tomorrowland Winterはベルギーの夏のメイン・フェスティバルのスキーリゾート版姉妹イベントで、2019年以来毎年3月にフランス・アルプスのAlpe d\'Huezで開催される。週間フェスティバルは、リゾートのゲレンデでの日中のスキーと、Tomorrowland特有の手の込んだ美学の同じスタイルでの夜のステージ・プロダクションを組み合わせる。メインステージとトランス、プログレッシブ、ハウス用の専用ステージを擁する。Armin van Buuren、Above & Beyond、Tiëstoが反復のヘッドライナーを務めてきた。',
  },
};

export default tomorrowlandWinter;

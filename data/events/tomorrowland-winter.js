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
    { year: 2019, dates: 'March 13–15', note: 'Inaugural edition (music programme; full 7-day package March 9–16)' },
  ],

  official_url: 'https://www.tomorrowland.com/en/winter',
  ticket_url: 'https://www.tomorrowland.com/en/winter/tickets',
  og_image: '/og/events/tomorrowland-winter.png',

  en: {
    description:
      "Tomorrowland Winter is the ski-resort sister event to the main Belgian summer festival, held at Alpe d'Huez in the French Alps. The week-long festival combines daytime skiing on the resort's slopes with evening stage productions in the same elaborate Tomorrowland aesthetic, with a mainstage and several themed stages distributed between mid-mountain locations (reached by gondola) and the resort town itself. The inaugural edition ran 13–15 March 2019 under the theme 'Hymn of the Frozen Lotus' and sold roughly 30,000 tickets across the music programme.\n\nThe 2020 edition was cancelled by the French government on 5 March 2020 due to COVID-19, and the 2021 edition was cancelled on 6 October 2020 for the same reason. The festival returned in 2022 (19–26 March) with a scaled-back indoor mainstage configuration, then 2023 (18–25 March, ~18,000 visitors) and 2024 (16–23 March, ~18,000 ticket allocation). In November 2023 the Alpe d'Huez municipal council authorised renewal of the partnership for a further five editions through 2030, including provisions for an enlarged outdoor mainstage. Armin van Buuren, Above &amp; Beyond, Tiësto, and Cosmic Gate have headlined recurring editions; see the broader <a href=\"/events/tomorrowland\">Tomorrowland</a> summer entry for the parent festival.",
  },
  ja: {
    description:
      'Tomorrowland Winterはベルギーの夏のメイン・フェスティバルのスキーリゾート版姉妹イベントで、フランス・アルプスのAlpe d\'Huezで開催される。週間フェスティバルは、リゾートのゲレンデでの日中のスキーと、Tomorrowland特有の手の込んだ美学の夜のステージ・プロダクションを組み合わせ、メインステージといくつかのテーマ別ステージが山中ロケーション（ゴンドラでアクセス）とリゾート町の間に配置される。創設エディションは2019年3月13〜15日に「Hymn of the Frozen Lotus」のテーマで開催され、音楽プログラム全体で約30,000枚のチケットが販売された。\n\n2020年版は2020年3月5日にCOVID-19の影響でフランス政府により中止され、2021年版も同じ理由で2020年10月6日に中止された。フェスティバルは2022年（3月19〜26日、インドア・メインステージに縮小された構成）で復活、その後2023年（3月18〜25日、約18,000人来場）、2024年（3月16〜23日、約18,000枚チケット配分）と続いた。2023年11月、Alpe d\'Huez市議会は2030年までの5回分のパートナーシップ更新を承認し、屋外メインステージの拡張も含まれている。Armin van Buuren、Above &amp; Beyond、Tiësto、Cosmic Gateが反復のヘッドライナーを務めてきた；親フェスティバルについては<a href="/events/tomorrowland">Tomorrowland</a>の夏のエントリを参照。',
  },
};

export default tomorrowlandWinter;

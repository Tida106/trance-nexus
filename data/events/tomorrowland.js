// Tomorrowland — annual mega-festival, De Schorre, Boom, Belgium.
// Trance reaches the festival via the mainstage (Vini Vici, Armin van
// Buuren, Tiësto sets) and via the dedicated A State of Trance stage
// that has been part of the line-up since 2008.
//
// Coordinates verified against the De Schorre municipal park entrance.
// Editions intentionally omit specific 2026 dates because they shift
// year-to-year — `dates.typicalMonth` carries the recurring pattern.

const tomorrowland = {
  slug: 'tomorrowland',
  name: 'Tomorrowland',
  status: 'annual',
  category: 'mega',
  region: 'EU',
  country: 'BE',

  dates: {
    typicalMonth: 'July',
    cadence: 'annual',
    note: 'Two consecutive weekends in late July',
  },

  venue: {
    name: 'De Schorre',
    address: 'Schommelei 1, 2850 Boom',
    country: 'BE',
    lat: 51.0830,
    lng: 4.3700,
    capacity: 400000, // approximate per-edition aggregate over both weekends
  },

  genres: ['trance', 'uplifting-trance', 'psytrance', 'progressive-trance'],
  headliners: [
    'armin-van-buuren',
    'tiesto',
    'above-and-beyond',
    'vini-vici',
    'paul-van-dyk',
  ],
  labels: ['Armada Music', 'Anjunabeats'],

  editions: [
    { year: 2024, dates: 'July 19–21 + 26–28' },
    { year: 2023, dates: 'July 21–23 + 28–30' },
    { year: 2022, dates: 'July 15–17 + 22–24' },
    { year: 2019, dates: 'July 19–21 + 26–28' },
  ],

  official_url: 'https://www.tomorrowland.com',
  ticket_url: 'https://www.tomorrowland.com/en/festival/welcome',
  og_image: '/og/events/tomorrowland.png',

  en: {
    description:
      "Tomorrowland is the world's largest electronic dance festival, held every late July at De Schorre municipal park in Boom, Belgium across two consecutive weekends. The festival has been the single most prominent platform for trance since 2008, when Armin van Buuren's A State of Trance was given a dedicated stage that has run every year since. Tiësto, Above & Beyond, Paul van Dyk, and Vini Vici have all played mainstage sets, and the festival's elaborate stage productions and global broadcast reach (millions of livestream viewers per weekend) have made it the most-watched trance event on Earth.",
  },
  ja: {
    description:
      'Tomorrowlandは世界最大の電子ダンス・フェスティバルで、毎年7月下旬にベルギー・ブームのDe Schorre市立公園で2週末連続で開催される。2008年以降、Armin van BuurenのA State of Tranceが専用ステージを与えられ毎年続いていることから、トランスの最も顕著なプラットフォームとなってきた。Tiësto、Above & Beyond、Paul van Dyk、Vini Viciらがメインステージ・セットを演奏してきた。手の込んだステージ・プロダクションと世界配信のリーチ（週末ごとに数百万人のライブストリーム視聴者）が、地球上で最も視聴されるトランス・イベントにしている。',
  },
};

export default tomorrowland;

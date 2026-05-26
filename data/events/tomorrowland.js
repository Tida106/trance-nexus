// Tomorrowland — annual mega-festival, De Schorre, Boom, Belgium.
// Founded in 2005 by brothers Manu and Michiel Beers (ID&T). Trance
// reaches the festival via the mainstage and via the dedicated A State
// of Trance stage, which debuted in 2017 (not earlier — verified via
// the official A State of Trance announcement).
//
// Coordinates verified against the De Schorre municipal park entrance.

const tomorrowland = {
  slug: 'tomorrowland',
  name: 'Tomorrowland',
  status: 'annual',
  category: 'mega',
  region: 'EU',
  country: 'BE',

  dates: {
    next: { start: '2026-07-17', end: '2026-07-26' },
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
    capacity: 200000, // approximately 200,000 per weekend / ~70,000 per day
  },

  genres: ['trance', 'uplifting-trance', 'psytrance', 'progressive-trance'],
  headliners: [
    'armin-van-buuren',
    'tiesto',
    'above-and-beyond',
    'vini-vici',
    'paul-van-dyk',
    'ferry-corsten',
    'andrew-rayel',
    'aly-and-fila',
    'orjan-nilsen',
    'marlo',
  ],
  labels: ['Armada Music', 'Anjunabeats'],

  editions: [
    { year: 2026, dates: 'July 17–19 + 24–26', note: 'Officially announced dates' },
    { year: 2024, dates: 'July 19–21 + 26–28' },
    { year: 2023, dates: 'July 21–23 + 28–30' },
    { year: 2022, dates: 'July 15–17 + 22–24' },
    { year: 2019, dates: 'July 19–21 + 26–28' },
    { year: 2017, note: 'Inaugural A State of Trance stage (Friday July 28, Weekend 2) — Armin van Buuren, Ruben de Ronde b2b Rodg, Ben Gold, David Gravell, Orjan Nilsen, MaRLo, Andrew Rayel, NWYR' },
    { year: 2005, dates: 'August 15', note: 'First edition — one-day event, ~9,000 attendees' },
  ],

  official_url: 'https://www.tomorrowland.com',
  ticket_url: 'https://www.tomorrowland.com/en/festival/welcome',
  og_image: '/og/events/tomorrowland.png',

  en: {
    description:
      "Tomorrowland is the world's largest electronic dance festival, held every late July at De Schorre municipal park in Boom, Belgium across two consecutive weekends. Founded in 2005 by brothers Manu and Michiel Beers (originally an ID&amp;T production), the festival's first edition was a single-day event on 15 August 2005 that drew roughly 9,000 attendees; today it draws approximately 200,000 visitors per weekend (around 70,000 per day) across some fifteen stages, including the Mainstage, Freedom, Atmosphere, Core, and Q-Dance.\n\nThe dedicated A State of Trance stage debuted on Friday 28 July 2017 (Weekend 2), hosted by Armin van Buuren with the bill including Ruben de Ronde b2b Rodg, Ben Gold, David Gravell, Orjan Nilsen, MaRLo, Andrew Rayel and NWYR, and has returned in subsequent editions. Armin van Buuren has been a recurring Tomorrowland headliner since the inaugural 2005 edition. The 2026 festival is officially announced for July 17&ndash;19 and 24&ndash;26.",
  },
  ja: {
    description:
      'Tomorrowlandは世界最大の電子ダンス・フェスティバルで、毎年7月下旬にベルギー・ブームのDe Schorre市立公園で2週末連続で開催される。2005年にManuとMichiel Beers兄弟（当初はID&amp;Tのプロダクション）によって創設され、初回エディションは2005年8月15日の1日限りのイベントで約9,000人を集めた。現在は約15のステージ（メインステージ、Freedom、Atmosphere、Core、Q-Danceなど）にわたって週末ごとに約20万人（1日約7万人）の来場者を集める。\n\nA State of Trance専用ステージは2017年7月28日（金、Weekend 2）にデビューし、Armin van Buurenがホストを務め、Ruben de Ronde b2b Rodg、Ben Gold、David Gravell、Orjan Nilsen、MaRLo、Andrew Rayel、NWYRがビルに名を連ねた。それ以降のエディションでも継続している。Armin van Buurenは2005年の初回エディション以来Tomorrowlandの常連ヘッドライナーである。2026年フェスティバルは7月17〜19日と24〜26日として公式発表されている。',
  },
};

export default tomorrowland;

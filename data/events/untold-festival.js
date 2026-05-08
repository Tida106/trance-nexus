// Untold Festival — Romania's flagship dance festival, held annually
// in early August at Cluj Arena and the surrounding city of
// Cluj-Napoca. Trance is anchored by the Galaxy stage, which has
// hosted Armin van Buuren, Above & Beyond, and the FSOE roster across
// multiple editions.

const untoldFestival = {
  slug: 'untold-festival',
  name: 'Untold Festival',
  status: 'annual',
  category: 'mega',
  region: 'EU',
  country: 'RO',

  dates: {
    typicalMonth: 'August',
    cadence: 'annual',
    note: 'Four-night festival, first weekend of August',
  },

  venue: {
    name: 'Cluj Arena',
    address: 'Aleea Stadionului 2, 400000 Cluj-Napoca',
    country: 'RO',
    lat: 46.7681,
    lng: 23.5740,
    capacity: 360000, // approximate four-night aggregate
  },

  genres: ['trance', 'uplifting-trance', 'progressive-trance', 'psytrance'],
  headliners: [
    'armin-van-buuren',
    'above-and-beyond',
    'aly-and-fila',
    'andrew-rayel',
    'vini-vici',
  ],
  labels: ['Armada Music', 'Anjunabeats', 'FSOE Recordings'],

  editions: [
    { year: 2024, dates: 'August 8–11' },
    { year: 2023, dates: 'August 3–6' },
    { year: 2022, dates: 'August 4–7' },
    { year: 2019, dates: 'August 1–4' },
    { year: 2015, note: 'Inaugural edition (won European Festival Awards Best Major Festival)' },
  ],

  official_url: 'https://untold.com',
  ticket_url: 'https://untold.com/tickets',
  og_image: '/og/events/untold-festival.png',

  en: {
    description:
      "Untold Festival is Romania's flagship dance festival, held annually in early August at Cluj Arena and the surrounding streets of Cluj-Napoca. Launched in 2015, it won the European Festival Award for Best Major Festival in its inaugural year and has scaled to four-night editions drawing more than 350,000 attendees. Trance is anchored by the Galaxy stage, which has hosted Armin van Buuren, Above & Beyond, Aly & Fila, Andrew Rayel, and Vini Vici across multiple editions.",
  },
  ja: {
    description:
      'Untold Festivalはルーマニアの旗艦ダンス・フェスティバルで、毎年8月上旬にクルージュ・ナポカのCluj Arenaと周辺の街路で開催される。2015年に発足し、初年度にEuropean Festival AwardのBest Major Festivalを受賞、35万人を超える来場者を集める4夜エディションへとスケールした。トランスはGalaxyステージを軸とし、複数のエディションでArmin van Buuren、Above & Beyond、Aly & Fila、Andrew Rayel、Vini Viciをホストしてきた。',
  },
};

export default untoldFestival;

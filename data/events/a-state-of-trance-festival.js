// A State of Trance Festival — the live festival edition of Armin van
// Buuren's flagship radio show, traditionally held at Jaarbeurs Utrecht
// each February or March to mark a milestone episode number. The
// festival has run uninterrupted (with covid-era online editions) since
// the 500-episode broadcast in 2011.

const aStateOfTranceFestival = {
  slug: 'a-state-of-trance-festival',
  name: 'A State of Trance Festival',
  status: 'annual',
  category: 'specialty',
  region: 'EU',
  country: 'NL',

  dates: {
    typicalMonth: 'February–March',
    cadence: 'annual',
    note: 'Traditionally tied to a milestone ASOT episode number',
  },

  venue: {
    name: 'Jaarbeurs Utrecht',
    address: 'Jaarbeursplein, 3521 AL Utrecht',
    country: 'NL',
    lat: 52.0890,
    lng: 5.1097,
    capacity: 25000,
  },

  genres: ['trance', 'uplifting-trance', 'progressive-trance', 'tech-trance', 'vocal-trance', 'psytrance'],
  headliners: [
    'armin-van-buuren',
    'andrew-rayel',
    'aly-and-fila',
    'cosmic-gate',
    'ferry-corsten',
    'paul-van-dyk',
  ],
  labels: ['Armada Music', 'A State of Trance'],

  editions: [
    { year: 2025, dates: 'March 1', note: 'ASOT 1200 (Utrecht)' },
    { year: 2024, dates: 'March 2', note: 'ASOT 1150 (Utrecht)' },
    { year: 2023, dates: 'February 18', note: 'ASOT 1100 (Utrecht)' },
    { year: 2020, dates: 'February 15', note: 'ASOT 950 (Utrecht)' },
    { year: 2019, dates: 'February 16', note: 'ASOT 900 (Utrecht)' },
    { year: 2017, dates: 'February 18', note: 'ASOT 800 (Utrecht)' },
  ],

  official_url: 'https://www.astateoftrance.com',
  ticket_url: 'https://www.astateoftrance.com/events',
  og_image: '/og/events/a-state-of-trance-festival.png',

  en: {
    description:
      "A State of Trance Festival is the live festival edition of Armin van Buuren's weekly ASOT radio show, traditionally held each February or March at Jaarbeurs Utrecht in the Netherlands to mark a milestone radio episode number. The all-day, multi-stage event has run yearly since the ASOT 500 weekend in 2011, with successive editions tied to ASOT 600, 700, 800, 900, 1000, 1100, 1150, and 1200. Line-ups span the full uplifting / progressive / tech / vocal / psy axis of the trance genre, with Armin himself closing.",
  },
  ja: {
    description:
      'A State of Trance Festivalは、Armin van Buurenの週刊ASOTラジオ番組のライヴ・フェスティバル版で、伝統的にラジオ記念エピソード番号を記すべく毎年2月または3月にオランダのユトレヒトJaarbeursで開催される。2011年のASOT 500週末以来毎年運営されており、ASOT 600、700、800、900、1000、1100、1150、1200と連続するエディションが続いている。ラインアップはトランス・ジャンルのアップリフティング／プログレッシブ／テック／ボーカル／サイの全軸に及び、Armin自身がクロージングを務める。',
  },
};

export default aStateOfTranceFestival;

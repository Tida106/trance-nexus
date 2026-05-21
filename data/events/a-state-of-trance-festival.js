// A State of Trance Festival — the live festival edition of Armin van
// Buuren's flagship radio show. The festival relocated from Jaarbeurs
// Utrecht (its 2011–2023 home, demolished after 2023) to Rotterdam
// Ahoy starting February 2024. The 2026 edition celebrates 25 years
// of A State of Trance.

const aStateOfTranceFestival = {
  slug: 'a-state-of-trance-festival',
  name: 'A State of Trance Festival',
  status: 'annual',
  category: 'specialty',
  region: 'EU',
  country: 'NL',

  dates: {
    next: { start: '2026-02-27', end: '2026-02-28' },
    typicalMonth: 'February–March',
    cadence: 'annual',
    note: '25-year celebration in 2026 — two-day event at Rotterdam Ahoy',
  },

  venue: {
    name: 'Rotterdam Ahoy',
    address: 'Ahoyweg 10, 3084 BA Rotterdam',
    country: 'NL',
    lat: 51.8854,
    lng: 4.4863,
    capacity: 40000,
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
    { year: 2026, dates: 'February 27–28', note: '25 years of A State of Trance (Rotterdam Ahoy)' },
    { year: 2025, dates: 'February 21–22', note: 'Rotterdam Ahoy' },
    { year: 2024, dates: 'February 2024', note: 'Inaugural Rotterdam Ahoy edition (after Jaarbeurs Utrecht closure)' },
    { year: 2020, note: 'ASOT 950 (Jaarbeurs Utrecht — final Utrecht edition before covid)' },
    { year: 2019, dates: 'February 16', note: 'ASOT 900 (Jaarbeurs Utrecht)' },
    { year: 2017, dates: 'February 18', note: 'ASOT 800 (Jaarbeurs Utrecht)' },
  ],

  official_url: 'https://festival.astateoftrance.com',
  ticket_url: 'https://festival.astateoftrance.com',
  og_image: '/og/events/a-state-of-trance-festival.png',

  en: {
    description:
      "A State of Trance Festival is the live festival edition of Armin van Buuren's weekly ASOT radio show. Originally held annually at Jaarbeurs Utrecht from 2011 through 2023, the festival relocated to Rotterdam Ahoy from February 2024 onwards following the demolition of Jaarbeurs. The 2026 edition (27–28 February) celebrates 25 years of A State of Trance with a two-day event across five stages. Line-ups span the full uplifting / progressive / tech / vocal / psy axis of the trance genre, with Armin himself closing.",
  },
  ja: {
    description:
      'A State of Trance Festivalは、Armin van Buurenの週刊ASOTラジオ番組のライヴ・フェスティバル版だ。2011年から2023年までユトレヒトのJaarbeursで毎年開催されていたが、Jaarbeurs閉鎖・取り壊しに伴い2024年2月からロッテルダムのAhoyへ移転した。2026年エディション（2月27〜28日）はA State of Trance 25周年を記念する2日間のイベントとなる。ラインアップはトランス・ジャンルのアップリフティング／プログレッシブ／テック／ボーカル／サイの全軸に及び、Armin自身がクロージングを務める。',
  },
};

export default aStateOfTranceFestival;

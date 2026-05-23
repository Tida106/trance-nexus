// A State of Trance Festival — the live festival edition of Armin van
// Buuren's flagship radio show (which began 1 June 2001). The festival
// has cycled through Dutch venues: Brabanthallen Den Bosch hosted the
// landmark ASOT 500 (April 2011) and ASOT 600 (April 2013) editions;
// Jaarbeurs Utrecht hosted ASOT 800 (Feb 2017), 900 (Feb 2019), 950
// (Feb 2020) and ASOT 1000 (Sept 2021). The festival relocated to
// Rotterdam Ahoy starting in February 2024, where the 2026 edition
// celebrates 25 years of A State of Trance.

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
    'markus-schulz',
    'above-and-beyond',
    'dash-berlin',
    'orjan-nilsen',
    'maddix',
    'hi-lo',
  ],
  labels: ['Armada Music', 'A State of Trance'],

  editions: [
    { year: 2026, dates: 'February 27–28', note: '25 years of A State of Trance (Rotterdam Ahoy)' },
    { year: 2025, dates: 'February 21–22', note: 'Rotterdam Ahoy' },
    { year: 2024, dates: 'February 23–24', note: 'Inaugural Rotterdam Ahoy edition' },
    { year: 2021, dates: 'September 3–4', note: 'ASOT 1000 (Jaarbeurs Utrecht — five areas)' },
    { year: 2020, note: 'ASOT 950 (Jaarbeurs Utrecht)' },
    { year: 2019, dates: 'February 16', note: 'ASOT 900 (Jaarbeurs Utrecht)' },
    { year: 2017, dates: 'February 18', note: 'ASOT 800 (Jaarbeurs Utrecht)' },
    { year: 2013, dates: 'April 6', note: 'ASOT 600 — The Expedition (Brabanthallen, Den Bosch)' },
    { year: 2011, dates: 'April 9', note: 'ASOT 500 (Brabanthallen, Den Bosch)' },
  ],

  official_url: 'https://festival.astateoftrance.com',
  ticket_url: 'https://festival.astateoftrance.com',
  og_image: '/og/events/a-state-of-trance-festival.png',

  en: {
    description:
      "A State of Trance Festival is the live festival edition of Armin van Buuren's weekly ASOT radio show, which first aired on 1 June 2001. The festival has cycled through Dutch venues: Brabanthallen in Den Bosch hosted the landmark milestone editions ASOT 500 (9 April 2011) and ASOT 600 \"The Expedition\" (6 April 2013, drawing about 30,000 attendees across four stages including the Main Stage and \"Who's Afraid of 138?!\"). Jaarbeurs Utrecht then hosted ASOT 800 (2017), ASOT 900 (2019), ASOT 950 (2020), and the 1000th-episode celebration ASOT 1000 across two nights on 3–4 September 2021 with five areas.\n\nThe festival relocated to Rotterdam Ahoy starting with the inaugural edition there on 23–24 February 2024. The 2026 edition (27–28 February at Rotterdam Ahoy) celebrates 25 years of A State of Trance. Line-ups span the full uplifting, progressive, tech, vocal, and psy-trance spectrum, with Armin himself closing.",
  },
  ja: {
    description:
      'A State of Trance Festivalは、Armin van Buurenの週刊ASOTラジオ番組（2001年6月1日初放送）のライヴ・フェスティバル版だ。フェスティバルはオランダ国内の複数の会場を巡回してきた——Den BoschのBrabanthallenはASOT 500（2011年4月9日）とASOT 600「The Expedition」（2013年4月6日、約3万人を集めMain Stageや「Who\'s Afraid of 138?!」を含む4ステージで開催）といった節目のエディションを開催。続いてJaarbeurs UtrechtがASOT 800（2017年）、ASOT 900（2019年）、ASOT 950（2020年）、そして第1000回放送記念のASOT 1000を2021年9月3〜4日に5エリアで2夜にわたり開催した。\n\n2024年2月23〜24日のロッテルダム初開催を機にRotterdam Ahoyへ移転。2026年エディション（2月27〜28日／Rotterdam Ahoy）はA State of Trance 25周年を記念する。ラインアップはアップリフティング、プログレッシブ、テック、ボーカル、サイトランスの全域に及び、Armin自身がクロージングを務める。',
  },
};

export default aStateOfTranceFestival;

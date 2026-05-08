// FSOE Milestone Events — Aly & Fila's Future Sound of Egypt
// milestone shows. Like the ABGT series, FSOE milestones are not a
// single annual festival but a recurring set of one-off arena
// productions tied to round-number FSOE radio episodes (500, 600,
// 700, 800). The most-cited modern milestone is FSOE 600, broadcast
// from the Pyramids of Giza in 2019.

const fsoeMilestoneEvents = {
  slug: 'fsoe-milestone-events',
  name: 'FSOE Milestone Events',
  status: 'annual',
  category: 'label',
  region: 'global',
  country: 'multi',

  dates: {
    typicalMonth: 'varies',
    cadence: 'milestone',
    note: 'One-off productions tied to round-number FSOE episodes',
  },

  venue: {
    // Anchor on the Pyramids of Giza — site of the FSOE 600 broadcast
    // (2019), the most-cited single FSOE event production.
    name: 'Pyramids of Giza (FSOE 600 site)',
    address: 'Al Haram, Giza Governorate',
    country: 'EG',
    lat: 29.9792,
    lng: 31.1342,
    capacity: 10000,
  },

  genres: ['uplifting-trance', 'tech-trance', 'psytrance'],
  headliners: [
    'aly-and-fila',
    'paul-van-dyk',
    'ferry-corsten',
    'andrew-rayel',
    'bryan-kearney',
    'standerwick',
  ],
  labels: ['FSOE Recordings', 'FSOE Excelsior'],

  editions: [
    { year: 2024, note: 'FSOE 850 — venue announced via FSOE social channels' },
    { year: 2023, note: 'FSOE 800 — multi-city celebration' },
    { year: 2021, note: 'FSOE 700 — online streaming due to covid' },
    { year: 2019, note: 'FSOE 600 — Pyramids of Giza, Cairo (broadcast live)' },
    { year: 2017, note: 'FSOE 500 — London' },
  ],

  official_url: 'https://www.fsoe-recordings.com',
  ticket_url: 'https://www.fsoe-recordings.com',
  og_image: '/og/events/fsoe-milestone-events.png',

  en: {
    description:
      "Aly & Fila's Future Sound of Egypt milestone shows are the FSOE-equivalent of the ABGT series — recurring one-off arena productions tied to round-number FSOE radio episodes (500, 600, 700, 800). The most-cited modern milestone is FSOE 600, broadcast in 2019 from the Pyramids of Giza, with the duo's home country playing host to a global online and on-site audience. The FSOE label umbrella (FSOE Recordings, FSOE Excelsior) anchors the line-ups, with Aly & Fila plus a rotating roster of Bryan Kearney, Standerwick, Andrew Rayel, and other FSOE-affiliated artists.",
  },
  ja: {
    description:
      'Aly & FilaのFuture Sound of Egyptマイルストーン・ショーは、ABGTシリーズのFSOE版だ——FSOEラジオの記念エピソード番号（500、600、700、800）に紐づく反復の一夜限りのアリーナ・プロダクション。最も引用される現代のマイルストーンはFSOE 600で、2019年にギザのピラミッドからブロードキャストされ、デュオの母国がグローバル・オンラインおよびオンサイト観客のホストを務めた。FSOEレーベル傘下（FSOE Recordings、FSOE Excelsior）がラインアップを支え、Aly & Filaに加えてBryan Kearney、Standerwick、Andrew Rayel、その他FSOE関連アーティストのローテーション・ロスターが揃う。',
  },
};

export default fsoeMilestoneEvents;

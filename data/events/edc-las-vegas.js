// EDC Las Vegas — Insomniac's flagship US festival, held annually
// at the Las Vegas Motor Speedway each May (relocated from Los
// Angeles in 2011). EDC was founded by Pasquale Rotella in 1997
// at the Shrine Expo Hall in Los Angeles. Trance is hosted on the
// quantumVALLEY stage, programmed in partnership with Insomniac's
// Dreamstate brand.

const edcLasVegas = {
  slug: 'edc-las-vegas',
  name: 'EDC Las Vegas',
  status: 'annual',
  category: 'mega',
  region: 'NA',
  country: 'US',

  dates: {
    next: { start: '2027-05-14', end: '2027-05-23' },
    typicalMonth: 'May',
    cadence: 'annual',
    note: 'Three-night festival in mid-to-late May; 2027 runs as two weekends (May 14–16 and May 21–23)',
  },

  venue: {
    name: 'Las Vegas Motor Speedway',
    address: '7000 N Las Vegas Blvd, Las Vegas, NV 89115',
    country: 'US',
    lat: 36.2727,
    lng: -115.0098,
    capacity: 525000, // approximate three-night aggregate attendance (500,000+ in 2024)
  },

  genres: ['trance', 'uplifting-trance', 'progressive-trance', 'psytrance'],
  headliners: [
    'armin-van-buuren',
    'above-and-beyond',
    'tiesto',
    'paul-van-dyk',
    'gareth-emery',
    'aly-and-fila',
    'andrew-rayel',
  ],
  labels: ['Armada Music', 'Anjunabeats', 'FSOE Recordings'],

  editions: [
    { year: 2027, dates: 'May 14–16 + 21–23', note: 'Officially announced — first-ever two-weekend format' },
    { year: 2026, dates: 'May 15–17', note: '30th-anniversary edition' },
    { year: 2025, dates: 'May 16–18' },
    { year: 2024, dates: 'May 17–19', note: 'Over 500,000 attendees across three nights' },
    { year: 2023, dates: 'May 19–21' },
    { year: 2022, dates: 'May 20–22' },
    { year: 2019, dates: 'May 17–19' },
    { year: 2017, note: 'quantumVALLEY trance stage debuts (programmed with Dreamstate)' },
    { year: 2011, note: 'First Las Vegas edition (relocated from Los Angeles)' },
    { year: 1997, note: 'EDC debut at Shrine Expo Hall, Los Angeles (Insomniac / Pasquale Rotella)' },
  ],

  official_url: 'https://lasvegas.edc.com',
  ticket_url: 'https://lasvegas.edc.com',
  og_image: '/og/events/edc-las-vegas.png',

  en: {
    description:
      "EDC Las Vegas is Insomniac's flagship US festival — three nights at the Las Vegas Motor Speedway each May, drawing more than 500,000 attendees across the weekend in 2024 (it is the largest electronic dance music festival in North America). EDC was founded in 1997 by Pasquale Rotella at the Shrine Expo Hall in Los Angeles and relocated to the Las Vegas Motor Speedway in 2011.\n\nThe festival is organised around themed stages including the kineticFIELD main stage and circuitGROUNDS. The dedicated trance stage, quantumVALLEY, debuted in 2017 and is presented in partnership with Insomniac's Dreamstate brand, programmed across the uplifting, progressive, tech, and psy-trance spectrum. Aly & Fila have played quantumVALLEY repeatedly (including 2017, 2019, 2021, 2022) and Andrew Rayel has appeared in recent editions; Armin van Buuren and Above & Beyond have appeared on the kineticFIELD main stage. The 2027 edition has been officially announced as the festival's first two-weekend format (14–16 + 21–23 May) at the Las Vegas Motor Speedway.",
  },
  ja: {
    description:
      'EDC Las VegasはInsomniacの旗艦米国フェスティバルで、毎年5月にLas Vegas Motor Speedwayで3夜開催される。2024年は週末を通して50万人を超える来場者を集め、北米最大の電子ダンス・ミュージック・フェスティバルとなっている。EDCは1997年にPasquale RotellaがロサンゼルスのShrine Expo Hallで創設し、2011年にLas Vegas Motor Speedwayへ移転した。\n\nフェスティバルはテーマ別のステージで構成されており、メインステージのkineticFIELDとcircuitGROUNDSなどがある。専用トランス・ステージのquantumVALLEYは2017年にデビューし、InsomniacのDreamstateブランドとのパートナーシップで運営され、アップリフティング、プログレッシブ、テック、サイトランスの全域でプログラムされる。Aly & FilaはquantumVALLEYに繰り返し出演（2017、2019、2021、2022年など）し、Andrew Rayelも近年のエディションに登場している。Armin van BuurenとAbove & BeyondはkineticFIELDメインステージに出演してきた。2027年エディションはフェスティバル初の2週末フォーマット（5月14〜16日＋21〜23日／Las Vegas Motor Speedway）として公式発表されている。',
  },
};

export default edcLasVegas;

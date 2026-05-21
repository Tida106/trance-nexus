// Anjunadeep Open Air — the Anjunadeep counterpart to Anjunabeats
// arena/touring shows, programmed around the deeper / progressive /
// melodic-techno-adjacent Anjunadeep roster (Lane 8, Yotto, Ben
// Böhmer, Tinlicker, James Grant & Jody Wisternoff). The London
// edition launched at The Drumsheds in 2021 and has subsequently
// rotated outdoor venues — Finsbury Park (2023, 2024) and the Old
// Royal Naval College Greenwich (2025).

const anjunadeepOpenAir = {
  slug: 'anjunadeep-open-air',
  name: 'Anjunadeep Open Air',
  status: 'annual',
  category: 'label',
  region: 'EU',
  country: 'GB',

  dates: {
    typicalMonth: 'August',
    cadence: 'annual',
    note: 'Single-day outdoor festival; London edition is the flagship',
  },

  venue: {
    name: 'Finsbury Park (recent host) / rotating London venues',
    address: 'Finsbury Park, London N4',
    country: 'GB',
    lat: 51.5640,
    lng: -0.1066,
    capacity: 25000,
  },

  genres: ['progressive-trance', 'melodic-techno'],
  headliners: [
    'yotto',
    'tinlicker',
    'andrew-bayer',
    'above-and-beyond',
  ],
  labels: ['Anjunadeep'],

  editions: [
    { year: 2025, note: 'Old Royal Naval College, Greenwich' },
    { year: 2024, dates: 'August 4', note: 'Finsbury Park — Above & Beyond, CRi, Eli & Fur, James Grant & Jody Wisternoff' },
    { year: 2023, dates: 'August 13', note: 'Finsbury Park' },
    { year: 2021, note: 'The Drumsheds — post-covid restart edition' },
    { year: 2018, note: 'First Anjunadeep Open Air London' },
  ],

  official_url: 'https://anjunadeep.com/events/open-air-london',
  ticket_url: 'https://anjunadeep.com/events/open-air-london',
  og_image: '/og/events/anjunadeep-open-air.png',

  en: {
    description:
      "Anjunadeep Open Air is the Anjunadeep label's flagship outdoor event series, programmed around the deeper / progressive / melodic-techno-adjacent Anjunadeep roster — Lane 8, Yotto, Ben Böhmer, Tinlicker, James Grant & Jody Wisternoff. The London edition launched at The Drumsheds in 2021 and has since rotated outdoor venues — Finsbury Park in 2023 and 2024 (Above & Beyond, CRi, Eli & Fur, JGJW), then the Old Royal Naval College in Greenwich for the 2025 edition. New York and other international editions are staged at outdoor amphitheatre and pier locations. The events sit at the intersection of progressive trance and melodic techno that defines the modern Anjunadeep sound.",
  },
  ja: {
    description:
      'Anjunadeep Open AirはAnjunadeepレーベルの旗艦野外イベント・シリーズで、よりディープ／プログレッシブ／メロディック・テクノ隣接のAnjunadeepロスター——Lane 8、Yotto、Ben Böhmer、Tinlicker、James Grant & Jody Wisternoff——を中心にプログラムされる。ロンドン版は2021年にThe Drumshedsで始動し、その後野外会場をローテーション——2023年と2024年はFinsbury Park（Above & Beyond、CRi、Eli & Fur、JGJW）、2025年はGreenwichのOld Royal Naval Collegeへ。ニューヨーク版その他国際エディションは野外アンフィシアターとピア立地で開催される。イベントは現代Anjunadeepサウンドを定義するプログレッシブ・トランスとメロディック・テクノの交差点に位置する。',
  },
};

export default anjunadeepOpenAir;

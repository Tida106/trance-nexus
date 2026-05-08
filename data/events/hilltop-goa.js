// Hilltop Goa — the long-running open-air psytrance venue at
// Vagator beach in north Goa, India. More accurately a permanent
// venue / season than a single festival, Hilltop hosts the canonical
// Goan psytrance and trance party series each season from October
// through April, including the New Year's Eve and Christmas / New
// Year's Day editions that are scene fixtures.

const hilltopGoa = {
  slug: 'hilltop-goa',
  name: 'Hilltop Goa',
  status: 'annual',
  category: 'psy',
  region: 'ASIA',
  country: 'IN',

  dates: {
    typicalMonth: 'October–April (season)',
    cadence: 'series',
    note: 'Permanent venue running a season of parties; New Year\'s Eve is the canonical date',
  },

  venue: {
    name: 'Hilltop Vagator',
    address: 'Vagator, Bardez, North Goa',
    country: 'IN',
    lat: 15.5980,
    lng: 73.7400,
    capacity: 5000,
  },

  genres: ['goa-trance', 'psytrance', 'progressive-trance'],
  headliners: [
    'astrix',
    'captain-hook',
    'vini-vici',
    'astral-projection',
    'infected-mushroom',
    'ace-ventura',
    'liquid-soul',
  ],
  labels: ['HOMmega Productions', 'Iboga Records', 'Nano Records', 'TIP Records'],

  editions: [
    { year: 2024, note: '2024–25 season runs October–April with weekly parties' },
    { year: 2019, note: 'Pre-covid full season, including 20th-anniversary New Year edition' },
    { year: 2000, note: 'New Year\'s Day 2000 — site of the millennium Goa party that re-anchored the global Goa scene' },
  ],

  official_url: 'https://www.hilltopgoa.in',
  ticket_url: 'https://www.hilltopgoa.in',
  og_image: '/og/events/hilltop-goa.png',

  en: {
    description:
      "Hilltop is the long-running open-air psytrance venue at Vagator beach in north Goa, India — the geographical and cultural epicentre of the original 1990s Goa trance scene. More a permanent venue than a single festival, Hilltop runs a season of weekly outdoor parties each October through April, with the New Year's Eve and Christmas / New Year's Day editions widely regarded as scene fixtures. Astrix, Captain Hook, Vini Vici, Astral Projection, and Infected Mushroom have all played the venue, often returning year after year as part of the canonical Goan trance pilgrimage.",
  },
  ja: {
    description:
      'Hilltopはインド・北ゴアのVagatorビーチにある長期オープンエア・サイトランス・ベニューで——1990年代のオリジナル・ゴア・トランス・シーンの地理的および文化的震央だ。単一のフェスティバルというより常設のベニューで、Hilltopは毎年10月から4月にかけて週次のアウトドア・パーティのシーズンを運営する。年越し（New Year\'s Eve）と元旦（New Year\'s Day）のエディションがシーンの定番として広く認識されている。Astrix、Captain Hook、Vini Vici、Astral Projection、Infected Mushroomがすべてこのベニューでプレイしており、カノニカルなゴア・トランス巡礼の一部として毎年戻ってくることがしばしばある。',
  },
};

export default hilltopGoa;

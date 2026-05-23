// Hilltop Goa — the long-running open-air psytrance venue at
// Vagator beach in north Goa, India, and the host of the annual
// HillTop NYE Festival each late December. The venue runs a wider
// season of parties from October through April, but the NYE Festival
// (three days from around December 30) is the canonical headline
// event.

const hilltopGoa = {
  slug: 'hilltop-goa',
  name: 'Hilltop Goa',
  status: 'annual',
  category: 'psy',
  region: 'ASIA',
  country: 'IN',

  dates: {
    typicalMonth: 'October–April (season); NYE Festival late December',
    cadence: 'series',
    note: "Permanent venue running an October-April season; HillTop NYE Festival opens around December 30 each year",
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
    'ace-ventura',
    'liquid-soul',
    'astral-projection',
    'infected-mushroom',
  ],
  labels: ['HOMmega Productions', 'Iboga Records', 'Nano Records', 'TIP Records'],

  editions: [
    { year: 2026, dates: 'February 5–8', note: 'HillTop Goa 2026 festival edition' },
    { year: 2025, dates: 'December 30, 2025 onwards', note: 'HillTop NYE Festival opening December 30, 2025' },
    { year: 2024, note: '2024–25 season runs October–April with weekly parties' },
    { year: 2019, note: 'Pre-covid full season' },
  ],

  official_url: 'https://www.hilltopgoa.in',
  ticket_url: 'https://www.hilltopgoa.in',
  og_image: '/og/events/hilltop-goa.png',

  en: {
    description:
      "Hilltop is a long-running open-air psytrance venue at Vagator in north Goa, India, and the host of the annual HillTop NYE Festival each late December — a three-day event that opens around December 30 and welcomes around 5,000 local and international attendees across three stages. Outside of NYE, the venue runs a wider season of parties from October through April, with frequent 24-hour 31-December and 24-December events.\n\nVagator is the geographical and cultural epicentre of the original 1990s Goa trance scene, and the venue is known for distinctive psychedelic decor — neon and blacklight installations spiralling palm trees, glow-in-the-dark mushroom and star shapes, 3D mapping, laser shows, and fire performances. Recurring headliners include Astrix, Captain Hook, Vini Vici, Ace Ventura, and Liquid Soul, often returning year after year as part of the canonical Goan trance pilgrimage.",
  },
  ja: {
    description:
      "Hilltopはインド・北ゴアのVagatorにある長期オープンエア・サイトランス・ベニューであり、毎年12月下旬に開催される年次HillTop NYE Festivalのホストである——12月30日頃に開幕する3日間のイベントで、3つのステージにわたって約5,000人の地元・海外参加者を迎える。NYE以外も、ベニューは10月から4月にかけてのより広いシーズンのパーティを運営し、12月31日と12月24日には24時間のイベントが頻繁に開催される。\n\nVagatorは1990年代のオリジナル・ゴア・トランス・シーンの地理的および文化的震央であり、ベニューは特徴的なサイケデリック装飾で知られる——ヤシの木を螺旋状に囲むネオンとブラックライトのインスタレーション、暗闇で光るキノコや星形のオブジェ、3Dマッピング、レーザーショー、火の演出。反復のヘッドライナーにはAstrix、Captain Hook、Vini Vici、Ace Ventura、Liquid Soulが含まれ、カノニカルなゴア・トランス巡礼の一部として毎年戻ってくる。",
  },
};

export default hilltopGoa;

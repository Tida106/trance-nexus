// Pure Trance Events — Solarstone's Pure Trance touring brand. This
// page is a short stub; full Pure Trance context (label, radio show,
// tour concept, compilations) is covered on the Solarstone artist page.

const pureTranceEvents = {
  slug: 'pure-trance-events',
  name: 'Pure Trance Events',
  status: 'annual',
  category: 'label',
  region: 'EU',
  country: 'GB',
  mergedInto: 'solarstone',

  dates: {
    typicalMonth: 'varies',
    cadence: 'series',
    note: 'Recurring touring nights; UK, EU, and US editions',
  },

  venue: {
    // The Steel Yard, London — recurring Pure Trance host
    name: 'The Steel Yard (recurring host venue)',
    address: '15 Allhallows Ln, London EC4R 3UJ',
    country: 'GB',
    lat: 51.5103,
    lng: -0.0892,
    capacity: 2200,
  },

  genres: ['uplifting-trance', 'progressive-trance', 'tech-trance'],
  headliners: [
    'solarstone',
    'allen-watts',
    'standerwick',
    'bryan-kearney',
    'simon-patterson',
  ],
  labels: ['Pure Trance Recordings', 'Black Hole Recordings'],

  editions: [
    { year: 2024, note: 'Pure Trance multi-city tour (UK / NL / US)' },
    { year: 2023, note: 'Pure Trance Vol. 10 tenth-volume anniversary edition' },
    { year: 2019, note: 'Pure Trance V album launch tour' },
    { year: 2012, note: 'Launch of Pure Trance Recordings and Vol. 1 compilation with Orkidea (November 19, 2012)' },
  ],

  official_url: 'https://puretrance.com',
  ticket_url: 'https://puretrance.com',
  og_image: '/og/events/pure-trance-events.png',

  en: {
    description:
      "Pure Trance is Solarstone's brand-and-event series, not a fixed annual festival. For the full Pure Trance story — label history (founded 2012 with Orkidea in partnership with Black Hole Recordings), weekly Pure Trance Radio show, and compilation series — see the Solarstone artist page.\n\nThe touring events run as recurring extended-set nights across the UK and continental Europe with select US editions, curated around the open-to-close pure-trance ethos and a roster of Solarstone, Allen Watts, Standerwick, and rotating uplifting-and-tech guests.",
  },
  ja: {
    description:
      "Pure TranceはSolarstoneのブランド兼イベント・シリーズで、固定の年次フェスティバルではない。Pure Tranceの全容——レーベル史（2012年にBlack Hole Recordingsと提携してOrkideaとともに設立）、週刊Pure Tranceラジオ番組、コンピレーション・シリーズ——についてはSolarstoneアーティスト・ページを参照。\n\nツアー・イベントは英国と大陸ヨーロッパを中心とする延長セット・ナイトとして反復運営され、米国にも選択的エディションを擁する。オープン・トゥ・クローズのピュア・トランス精神を中心にキュレーションされ、ロスターはSolarstone、Allen Watts、Standerwick、ローテーションのアップリフティング＆テック・ゲスト。",
  },
};

export default pureTranceEvents;

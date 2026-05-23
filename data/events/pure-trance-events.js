// Pure Trance Events — Solarstone's Pure Trance brand party series.
// Curated around the "back-to-classics" pure trance ethos that
// Solarstone codified through the Pure Trance Recordings imprint and
// his weekly Pure Trance radio show.

const pureTranceEvents = {
  slug: 'pure-trance-events',
  name: 'Pure Trance Events',
  status: 'annual',
  category: 'label',
  region: 'EU',
  country: 'GB',

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
    { year: 2023, note: 'Pure Trance 10-year-anniversary edition / Vol. 10 launch' },
    { year: 2019, note: 'Pure Trance V album launch tour' },
    { year: 2012, note: 'Launch of Pure Trance Recordings and first compilation (with Orkidea, November)' },
  ],

  official_url: 'https://puretrance.com',
  ticket_url: 'https://puretrance.com',
  og_image: '/og/events/pure-trance-events.png',

  en: {
    description:
      "Pure Trance is Solarstone's brand-and-event series, curated around the back-to-classics pure-trance ethos he codified through the Pure Trance Recordings label and his weekly Pure Trance radio show. The events run as recurring touring nights — UK and continental Europe primarily, with US editions — and are line-up'd around the Pure Trance roster of Solarstone, Allen Watts, Standerwick, and rotating uplifting-and-tech guests. The Pure Trance ethos rejects the EDM-adjacent compression of the genre and centres long-form mixing, classic 138 BPM tempo, and the original trance-arrangement structural template.",
  },
  ja: {
    description:
      'Pure TranceはSolarstoneのブランド兼イベント・シリーズで、彼がPure Trance Recordingsレーベルと週刊Pure Tranceラジオ番組を通じて成文化した「back-to-classics」ピュア・トランス精神を中心にキュレーションされる。イベントは反復のツアー・ナイトとして運営される——英国と大陸ヨーロッパが中心で、米国エディションも擁する——Solarstone、Allen Watts、Standerwickのピュア・トランス・ロスターと、ローテーションのアップリフティング＆テック・ゲストでラインアップされる。Pure Trance精神はジャンルのEDM隣接的圧縮を拒否し、長尺ミキシング、クラシックな138 BPMテンポ、オリジナルのトランス・アレンジメント構造的テンプレートを中心化する。',
  },
};

export default pureTranceEvents;

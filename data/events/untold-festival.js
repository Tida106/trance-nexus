// Untold Festival — Romania's flagship dance festival, held annually
// in early August at Cluj Arena and the surrounding city of
// Cluj-Napoca. Trance is anchored by the Fortune stage, which has
// hosted Armin van Buuren, Markus Schulz, ATB, Richard Durand, and
// the FSOE roster across multiple editions.

const untoldFestival = {
  slug: 'untold-festival',
  name: 'Untold Festival',
  status: 'annual',
  category: 'mega',
  region: 'EU',
  country: 'RO',

  dates: {
    typicalMonth: 'August',
    cadence: 'annual',
    note: 'Four-night festival, first weekend of August',
  },

  venue: {
    name: 'Cluj Arena',
    address: 'Aleea Stadionului 2, 400000 Cluj-Napoca',
    country: 'RO',
    lat: 46.7681,
    lng: 23.5740,
    capacity: 360000, // approximate four-night aggregate
  },

  genres: ['trance', 'uplifting-trance', 'progressive-trance', 'psytrance'],
  headliners: [
    'armin-van-buuren',
    'above-and-beyond',
    'aly-and-fila',
    'andrew-rayel',
    'vini-vici',
    'markus-schulz',
  ],
  labels: ['Armada Music', 'Anjunabeats', 'FSOE Recordings'],

  editions: [
    { year: 2024, dates: 'August 8–11', note: 'Ranked #3 in DJ Mag Top 100 Festivals 2024' },
    { year: 2023, dates: 'August 3–6', note: '420,000+ attendees across four days' },
    { year: 2022, dates: 'August 4–7' },
    { year: 2019, dates: 'August 1–4' },
    { year: 2015, note: 'Inaugural edition tied to Cluj-Napoca European Youth Capital designation; 240,000+ attendees; European Festival Awards Best Major Festival' },
  ],

  official_url: 'https://untold.com',
  ticket_url: 'https://untold.com/tickets',
  og_image: '/og/events/untold-festival.png',

  en: {
    description:
      "Untold Festival is Romania's flagship dance festival, held annually in early August at Cluj Arena and the surrounding streets of Cluj-Napoca. The inaugural 2015 edition was tied to Cluj-Napoca's European Youth Capital designation and drew more than 240,000 attendees across four days, winning the European Festival Awards Best Major Festival in its first year. By the 2023 edition the four-day attendance had grown past 420,000, and UNTOLD ranked #3 in DJ Mag's Top 100 Festivals 2024.\n\nTrance at UNTOLD is anchored by the Fortune stage &mdash; staged on the fa&ccedil;ade of a renovated 1800s former casino designed like a Roman pavilion &mdash; which programmes trance, progressive house, melodic techno, psy, and euphoric hardstyle. Recurring trance headliners at Fortune and the Main Stage include Armin van Buuren (whose 2019 "Armin Untold" custom show ran for roughly seven and a half hours and opened with the Romanian anthem performed by members of the Romanian National Opera Orchestra from Cluj-Napoca), Above &amp; Beyond, Aly &amp; Fila, Andrew Rayel, Markus Schulz, ATB, Richard Durand, and Vini Vici on the psy side.",
  },
  ja: {
    description:
      "Untold Festivalはルーマニアの旗艦ダンス・フェスティバルで、毎年8月上旬にクルージュ・ナポカのCluj Arenaと周辺の街路で開催される。2015年の創設エディションはクルージュ・ナポカのEuropean Youth Capital指定と連動し、4日間で24万人を超える来場者を集め、初年度にEuropean Festival AwardsのBest Major Festivalを受賞した。2023年エディションでは4日間の来場者数が42万人を超え、DJ Mag Top 100 Festivals 2024で第3位にランクインした。\n\nUNTOLDでのトランスはFortuneステージを軸とし——ローマのパビリオン風にデザインされた1800年代の旧カジノを改装したファサードに設置される——トランス、プログレッシブ・ハウス、メロディック・テクノ、サイ、ユーフォリック・ハードスタイルをプログラムする。FortuneとMain Stageの反復するトランス・ヘッドライナーには、Armin van Buuren（2019年の本フェスティバル専用カスタム公演「Armin Untold」は約7時間半に及び、クルージュ・ナポカのRomanian National Opera Orchestraのメンバーによるルーマニア国歌の演奏で幕を開けた）、Above &amp; Beyond、Aly &amp; Fila、Andrew Rayel、Markus Schulz、ATB、Richard Durand、サイ側のVini Viciなどが含まれる。",
  },
};

export default untoldFestival;

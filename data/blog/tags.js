// Blog tags — multiple per post. Grouped by purpose for the tag-cloud display.
// Schema: id (used as slug), name:{en,ja}, group, description:{en,ja}

export const tags = [
  // Subgenre tags
  {
    id: 'uplifting',
    group: 'subgenre',
    name: { en: 'Uplifting', ja: 'アップリフティング' },
    description: {
      en: 'Articles about uplifting trance — the euphoric 138 BPM sound built on soaring leads and emotional breakdowns.',
      ja: '舞い上がるリードと情緒的なブレイクダウンを軸とする138 BPMのユーフォリックなアップリフティング・トランスに関する記事。',
    },
  },
  {
    id: 'progressive',
    group: 'subgenre',
    name: { en: 'Progressive', ja: 'プログレッシブ' },
    description: {
      en: 'Articles covering progressive trance — the slower, deeper, more atmospheric end of the genre.',
      ja: 'よりスローで深く大気的なプログレッシブ・トランスに関する記事。',
    },
  },
  {
    id: 'psytrance',
    group: 'subgenre',
    name: { en: 'Psytrance', ja: 'サイトランス' },
    description: {
      en: 'Articles on psytrance — the high-tempo psychedelic family from Goa to modern full-on.',
      ja: 'ゴアから現代のフルオンまで、高テンポなサイケデリック系サイトランス・ファミリーに関する記事。',
    },
  },
  {
    id: 'vocal',
    group: 'subgenre',
    name: { en: 'Vocal Trance', ja: 'ヴォーカル・トランス' },
    description: {
      en: 'Articles about trance built around full sung vocal performances — anthems, songwriters, and singers.',
      ja: '歌唱されたヴォーカルを軸とするトランス——アンセム、ソングライター、シンガーに関する記事。',
    },
  },
  {
    id: 'hard-trance',
    group: 'subgenre',
    name: { en: 'Hard Trance', ja: 'ハード・トランス' },
    description: {
      en: 'Articles on the harder, faster, more aggressive end of the trance spectrum.',
      ja: 'トランス・スペクトラムのよりハードで速く、攻撃的な側面に関する記事。',
    },
  },
  {
    id: 'goa',
    group: 'subgenre',
    name: { en: 'Goa Trance', ja: 'ゴア・トランス' },
    description: {
      en: 'Articles on Goa trance — the original psychedelic-trance sound and its descendants.',
      ja: 'オリジナルのサイケデリック・トランス・サウンド「ゴア・トランス」とその子孫に関する記事。',
    },
  },

  // Artist tags
  {
    id: 'armin-van-buuren',
    group: 'artist',
    name: { en: 'Armin van Buuren', ja: 'アーミン・ヴァン・ビューレン' },
    description: {
      en: 'Articles featuring Armin van Buuren — the king of trance, host of A State of Trance, founder of Armada Music.',
      ja: 'トランスの王、A State of Tranceホスト、Armada Music創設者であるArmin van Buurenを特集する記事。',
    },
  },
  {
    id: 'tiesto',
    group: 'artist',
    name: { en: 'Tiësto', ja: 'ティエスト' },
    description: {
      en: 'Articles featuring Tiësto — Dutch progressive trance pioneer turned global EDM superstar.',
      ja: 'オランダのプログレッシブ・トランスのパイオニアからグローバルEDMスーパースターへと進化したTiëstoを特集する記事。',
    },
  },
  {
    id: 'paul-van-dyk',
    group: 'artist',
    name: { en: 'Paul van Dyk', ja: 'ポール・ヴァン・ダイク' },
    description: {
      en: 'Articles featuring Paul van Dyk — East Berlin trance pioneer and Vandit Records founder.',
      ja: '東ベルリン出身のトランス・パイオニア、Vandit Records創設者であるPaul van Dykを特集する記事。',
    },
  },
  {
    id: 'above-and-beyond',
    group: 'artist',
    name: { en: 'Above & Beyond', ja: 'Above & Beyond' },
    description: {
      en: 'Articles featuring Above & Beyond — the British trio behind Anjunabeats and Group Therapy.',
      ja: 'AnjunabeatsとGroup Therapyを擁する英国のトリオ、Above & Beyondを特集する記事。',
    },
  },
  {
    id: 'ferry-corsten',
    group: 'artist',
    name: { en: 'Ferry Corsten', ja: 'フェリー・コルステン' },
    description: {
      en: 'Articles featuring Ferry Corsten — three decades of Dutch trance innovation under multiple aliases.',
      ja: '複数のエイリアスを通じて30年にわたるオランダ・トランス革新を体現するFerry Corstenを特集する記事。',
    },
  },

  // Place / event tags
  {
    id: 'ibiza',
    group: 'place',
    name: { en: 'Ibiza', ja: 'イビサ' },
    description: {
      en: 'Articles on Ibiza — the Balearic island that has shaped trance culture for three decades.',
      ja: '30年にわたりトランス文化を形作ってきたバレアレス諸島の島、イビサに関する記事。',
    },
  },
  {
    id: 'tomorrowland',
    group: 'place',
    name: { en: 'Tomorrowland', ja: 'トゥモローランド' },
    description: {
      en: 'Articles on Tomorrowland — the world\'s biggest dance festival and its long relationship with trance.',
      ja: '世界最大のダンスフェス「Tomorrowland」とトランスとの長年の関係を扱う記事。',
    },
  },
  {
    id: 'asot',
    group: 'place',
    name: { en: 'A State of Trance', ja: 'A State of Trance' },
    description: {
      en: 'Articles on A State of Trance — Armin van Buuren\'s weekly radio show and global event brand.',
      ja: 'Armin van Buurenの週次ラジオ番組兼グローバルイベントブランド「A State of Trance」に関する記事。',
    },
  },

  // Tools / production
  {
    id: 'dj-equipment',
    group: 'tool',
    name: { en: 'DJ Equipment', ja: 'DJ機材' },
    description: {
      en: 'Articles on DJ hardware — controllers, CDJs, mixers, headphones, and the tools of the booth.',
      ja: 'コントローラー、CDJ、ミキサー、ヘッドフォン、その他ブースの道具——DJハードウェアに関する記事。',
    },
  },
  {
    id: 'production-tips',
    group: 'tool',
    name: { en: 'Production Tips', ja: '制作テクニック' },
    description: {
      en: 'Articles with practical production techniques, arrangement advice, and studio workflow tips.',
      ja: '実践的な制作テクニック、アレンジ・アドバイス、スタジオ・ワークフローの記事。',
    },
  },
  {
    id: 'vst',
    group: 'tool',
    name: { en: 'VST', ja: 'VST' },
    description: {
      en: 'Articles on VST plugins, soft synths, and the digital instruments behind modern trance production.',
      ja: 'VSTプラグイン、ソフトシンセ、現代トランス制作を支えるデジタル楽器に関する記事。',
    },
  },

  // Format tags
  {
    id: 'monthly-charts',
    group: 'format',
    name: { en: 'Monthly Charts', ja: '月間チャート' },
    description: {
      en: 'Monthly editorial roundups of the trance tracks driving ASOT, Group Therapy, FSOE, Coldharbour, and Pure Trance rotation.',
      ja: 'ASOT、Group Therapy、FSOE、Coldharbour、Pure Tranceのローテーションを駆動するトランス・トラックの月次編集ラウンドアップ。',
    },
  },
  {
    id: 'all-time-best',
    group: 'format',
    name: { en: 'All-Time Best', ja: '史上最高' },
    description: {
      en: 'Definitive ranked-list canon articles — the trance tracks earning permanent place across the genre\'s 30-year history.',
      ja: 'ジャンルの30年史を横断して永続的地位を獲得するトランス・トラックの決定版ランク付きカノン記事。',
    },
  },

  // Era tags
  {
    id: '90s',
    group: 'era',
    name: { en: '1990s', ja: '90年代' },
    description: {
      en: 'Articles covering trance music in the 1990s — the founding decade of the genre.',
      ja: '1990年代のトランスミュージック——ジャンルの黎明期——を扱う記事。',
    },
  },
  {
    id: '2000s',
    group: 'era',
    name: { en: '2000s', ja: '2000年代' },
    description: {
      en: 'Articles covering trance music in the 2000s — the global breakthrough era.',
      ja: '2000年代のトランスミュージック——グローバルなブレイクスルー期——を扱う記事。',
    },
  },
  {
    id: '2010s',
    group: 'era',
    name: { en: '2010s', ja: '2010年代' },
    description: {
      en: 'Articles covering trance music in the 2010s — the EDM era and the genre\'s reinvention.',
      ja: '2010年代のトランスミュージック——EDM時代とジャンルの再発明——を扱う記事。',
    },
  },
  {
    id: '2020s',
    group: 'era',
    name: { en: '2020s', ja: '2020年代' },
    description: {
      en: 'Articles covering trance music in the 2020s — the current scene, from underground revival to Sphere shows.',
      ja: '2020年代のトランスミュージック——アンダーグラウンドの復活からSphere公演まで、現在のシーン——を扱う記事。',
    },
  },
];

export const tagSlugs = tags.map((t) => t.id);

export function getTagById(id) {
  return tags.find((t) => t.id === id);
}

export const TAG_GROUPS = [
  { id: 'subgenre', en: 'Subgenres', ja: 'サブジャンル' },
  { id: 'artist', en: 'Artists', ja: 'アーティスト' },
  { id: 'place', en: 'Places & Events', ja: 'プレイス・イベント' },
  { id: 'tool', en: 'Production & DJing', ja: '制作・DJ' },
  { id: 'format', en: 'Formats', ja: 'フォーマット' },
  { id: 'era', en: 'Eras', ja: '年代' },
];

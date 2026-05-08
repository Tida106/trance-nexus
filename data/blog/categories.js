// Blog categories — one category per post.
// Schema: id (used as slug), name:{en,ja}, emoji, description:{en,ja}

export const categories = [
  {
    id: 'history',
    emoji: '📜',
    name: { en: 'History & Culture', ja: '歴史・カルチャー' },
    description: {
      en: 'Long-form essays on trance music history, cultural analysis, and the moments that shaped the genre across three decades.',
      ja: 'トランスミュージックの歴史、文化的考察、そして30年にわたるシーンを形作った瞬間を扱う長尺エッセイ。',
    },
  },
  {
    id: 'subgenres',
    emoji: '🎚',
    name: { en: 'Subgenres', ja: 'サブジャンル' },
    description: {
      en: 'Deep dives into the styles that make up the trance family — uplifting, progressive, psytrance, vocal, and beyond.',
      ja: 'アップリフティング、プログレッシブ、サイトランス、ヴォーカルなど、トランス・ファミリーを構成する各スタイルの深掘り解説。',
    },
  },
  {
    id: 'artists',
    emoji: '🎤',
    name: { en: 'Artists', ja: 'アーティスト' },
    description: {
      en: 'In-depth profiles of the producers, DJs, and live acts who built the trance scene from the ground up.',
      ja: 'トランスシーンを根底から築き上げてきたプロデューサー、DJ、ライブアクトの徹底プロフィール。',
    },
  },
  {
    id: 'production',
    emoji: '🎛',
    name: { en: 'Production & DJing', ja: '制作・DJ技術' },
    description: {
      en: 'DJ tutorials, production techniques, gear comparisons, and software guides for working trance producers and DJs.',
      ja: '現役のトランス・プロデューサーとDJのためのDJチュートリアル、制作テクニック、機材比較、ソフトウェア・ガイド。',
    },
  },
  {
    id: 'events',
    emoji: '🎉',
    name: { en: 'Festivals & Events', ja: 'フェス・イベント' },
    description: {
      en: 'Festival reports, club histories, and coverage of the live experiences that define trance culture.',
      ja: 'フェスレポート、クラブの歴史、トランス文化を定義するライブ体験の取材記事。',
    },
  },
  {
    id: 'labels',
    emoji: '💿',
    name: { en: 'Labels & Industry', ja: 'レーベル・業界' },
    description: {
      en: 'The labels releasing the music, the industry forces shaping the scene, and the business of dance music.',
      ja: '音楽をリリースするレーベル、シーンを形作る業界の力学、ダンスミュージック・ビジネス。',
    },
  },
  {
    id: 'monthly-charts',
    emoji: '📈',
    name: { en: 'Monthly Charts', ja: '月間チャート' },
    description: {
      en: 'TRANCE NEXUS editorial picks for each month — the trance tracks driving ASOT, Group Therapy, FSOE, Coldharbour, and Pure Trance rotation across uplifting, progressive, tech, and psy.',
      ja: 'TRANCE NEXUS編集部が選ぶ月ごとのトランス・トラック ― ASOT、Group Therapy、FSOE、Coldharbour、Pure Tranceのローテーションを横断するアップリフティング、プログレッシブ、テック、サイの注目曲。',
    },
  },
];

export const categorySlugs = categories.map((c) => c.id);

export function getCategoryById(id) {
  return categories.find((c) => c.id === id);
}

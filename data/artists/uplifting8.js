// Batch 14 — Argentine Armada / German Euphonic uplifting tier (added 2026-05-10)
// Adds Heatbeat (AR, Aerys Records via Armada), DJ T.H. (DE, multi-label
// melodic uplifting), and Stoneface & Terminal (DE duo, Euphonic / FSOE
// remixers). Schema mirrors uplifting7.js — verifiable career facts only,
// bios shorten where the public record is thin. The user's brief named
// "Aerolab Records" for Heatbeat; the verified label name is Aerys
// Records (founded 2017 with Armada Music) and the entry uses the
// verified name. The brief also described DJ T.H. as the head of
// Always Alive Recordings; that label was founded by Daniel Kandi, so
// DJ T.H. is described here as a contributing artist on AAR rather
// than its founder.

export const uplifting8 = [
  {
    slug: 'heatbeat',
    name: 'Heatbeat',
    flag: '🇦🇷',
    emoji: '🔥',
    genre: 'UPLIFTING',
    banner: 'b-uplifting',
    tags: ['TECH UPLIFTING', 'ENERGETIC TRANCE', 'ARGENTINIAN', 'ARMADA', 'AERYS RECORDS'],
    members: ['Agustin Servente', 'Matias Faint (Matias Chavez)'],
    origin: 'Argentina',
    activeFrom: '2006',
    labels: ['Aerys Records', 'Armada Music', 'A State of Trance'],
    topWorks: [
      { title: 'Paradise Garage', type: 'track' },
      { title: 'Aerys', type: 'track' },
      { title: 'Game Over', type: 'track' },
      { title: 'Trance World, Vol. 17 (mix compilation)', type: 'compilation' },
    ],
    related: ['armin-van-buuren', 'markus-schulz', 'w-and-w', 'omnia'],
    links: {
      beatport: 'https://www.beatport.com/artist/heatbeat/28545',
      armada: 'https://www.armadamusic.com/news/team-argentina-alpha-omega-out-now',
      wikipedia: 'https://en.wikipedia.org/wiki/Heatbeat',
    },
    sub: { en: 'Tech Uplifting / Energetic Trance', ja: 'テック・アップリフティング / エネルジェティック・トランス' },
    short: {
      en: 'Argentinian trance project formed in 2006 by Agustin Servente and Matias Faint, signed long-term to Armada Music and operating their own Armada-affiliated imprint Aerys Records since 2017.',
      ja: '2006年にAgustin ServenteとMatias Faintによって結成されたアルゼンチンのトランス・プロジェクト。Armada Musicに長期所属し、2017年以降は自身のArmada関連レーベルAerys Recordsを運営。',
    },
    style: {
      en: 'Energetic, peak-time trance with Latin-American melodic motifs woven into the lead lines — driving 138 BPM arrangements, big-room-leaning drop architecture, and the Armada-aligned production polish that has placed the catalogue on A State of Trance and the wider mainstage circuit since the late 2000s.',
      ja: 'リード・ラインに織り込まれたラテン・アメリカ的メロディック・モチーフを伴うエネルギッシュなピークタイム・トランス——ドライヴィングな138 BPMアレンジメント、ビッグルーム寄りのドロップ建築、2000年代末以降カタログをA State of Tranceおよびより広いメインステージ・サーキットに位置づけてきたArmada系のプロダクション洗練。',
    },
    bio: {
      en: `Heatbeat is an Argentinian trance project formed in 2006 by Agustin Servente and Matias Faint (real name Matias Chavez), based in Buenos Aires. The duo signed to Armin van Buuren's Armada Music and built a catalogue across the late 2000s and 2010s anchored by tracks including "Paradise Garage", "Ask the Angels", "Aerys", and "Game Over", with continued support from the A State of Trance editorial circuit and the Armada mainstage roster.

In 2017 the project launched its own Armada-affiliated imprint Aerys Records as a platform for Argentinian and Latin American producers, and the catalogue extended through compilation and mix-CD work including "Trance World, Vol. 17" mixed for Armada. Following the duo's separation in 2018, Heatbeat continues as Matias Faint's solo project and remains active on the Armada release schedule.`,
      ja: `Heatbeatは2006年にAgustin ServenteとMatias Faint（本名Matias Chavez）によって結成されたアルゼンチンのトランス・プロジェクト。ブエノスアイレスを拠点とする。デュオはArmin van BuurenのArmada Musicと契約し、2000年代末〜2010年代にかけて「Paradise Garage」、「Ask the Angels」、「Aerys」、「Game Over」を軸にカタログを構築。A State of Trance編集サーキットおよびArmadaメインステージ陣営から継続的なサポートを得てきた。

2017年にはアルゼンチンおよびラテン・アメリカのプロデューサーのためのプラットフォームとして自身のArmada関連レーベルAerys Recordsを設立し、カタログはArmadaのためにミックスした「Trance World, Vol. 17」を含むコンピレーションおよびミックスCD作品へと拡張された。2018年のデュオ解散後、HeatbeatはMatias Faintのソロ・プロジェクトとして継続し、Armadaリリース・スケジュール上で活動を続けている。`,
    },
    mentionedIn: [],
  },

  {
    slug: 'dj-t-h',
    name: 'DJ T.H.',
    flag: '🇩🇪',
    emoji: '✨',
    genre: 'UPLIFTING',
    banner: 'b-uplifting',
    tags: ['UPLIFTING', 'MELODIC TRANCE', 'GERMAN', 'MULTI-LABEL'],
    realName: 'Thomas Gatzka',
    origin: 'Düsseldorf, Germany',
    activeFrom: '2011',
    labels: [
      'Armada Music',
      'Black Hole Recordings',
      'AVA Recordings',
      'HeavensGate',
      'Universal Nation',
      'Euphonic',
      'Entrancing Music',
      'Suanda Music',
      'Abora Recordings',
      'Find Your Harmony',
    ],
    topWorks: [
      { title: 'More Nights In Neverland', year: 2012, type: 'track' },
      { title: 'A Morning at the Sea (with DJ Ives M)', year: 2011, type: 'track' },
      { title: 'Shapes in the Darkness', year: 2014, type: 'track' },
      { title: 'Into the Ocean', year: 2015, type: 'track' },
      { title: 'See You Again', year: 2018, type: 'track' },
    ],
    related: ['ronski-speed', 'allen-watts', 'ben-gold', 'daxson', 'dim3nsion', 'stoneface-and-terminal'],
    links: {
      beatport: 'https://www.beatport.com/artist/dj-t-h/168845',
      facebook: 'https://www.facebook.com/DeejayT.H.Trance/',
    },
    sub: { en: 'Uplifting / Melodic Trance', ja: 'アップリフティング / メロディック・トランス' },
    short: {
      en: 'German DJ and producer Thomas Gatzka, based in Düsseldorf, with releases across a wide spread of trance imprints including Armada, Black Hole, AVA, HeavensGate, Euphonic, Suanda, and Abora Recordings.',
      ja: 'デュッセルドルフを拠点とするドイツのDJ／プロデューサー、トーマス・ガツカ。Armada、Black Hole、AVA、HeavensGate、Euphonic、Suanda、Abora Recordingsなど幅広いトランス・インプリントにわたるリリースを持つ。',
    },
    style: {
      en: 'Melodic uplifting trance with progressive arrangement leanings — the kind of harmonic-emphasis breakdown architecture and 138 BPM peak-time structure that the German trance scene has refined across the 2010s and 2020s, with releases tracking through both the AVA / Black Hole editorial line and the Euphonic / Suanda / Abora uplifting circuit.',
      ja: 'プログレッシブ的なアレンジメント傾向を持つメロディック・アップリフティング・トランス——ドイツ・トランス・シーンが2010年代〜2020年代に洗練してきたタイプの調和的重点を置くブレイクダウン建築と138 BPMピークタイム構造。リリースはAVA／Black Hole編集ラインとEuphonic／Suanda／Aboraアップリフティング・サーキットの両方を経由する。',
    },
    bio: {
      en: `DJ T.H., real name Thomas Gatzka, is a German DJ and producer based in Düsseldorf, working in the uplifting and melodic-progressive trance register. He grew up in the era of electronic music, took piano lessons for eight years, and entered the international trance scene at the start of the 2010s. A career marker came in 2012 when his track "More Nights In Neverland" received its first support from Armin van Buuren on A State of Trance, opening the editorial channels that have anchored his catalogue ever since.

His releases are spread across a notably wide range of trance imprints — Armada Music, Black Hole Recordings, Aly & Fila's AVA Recordings, Woody van Eyden's HeavensGate, Universal Nation, Euphonic, Entrancing Music, Suanda Music, Abora Recordings, and Find Your Harmony — making him one of the more visibly multi-label contributors to the modern uplifting circuit. Catalogue highlights include "A Morning at the Sea" (2011, with DJ Ives M), "Shapes in the Darkness" (2014), "Into the Ocean" (2015), "See You Again" (2018), and a steady run of vocal collaborations with Sharon Valerona, Nadi Sunrise and others through the late 2010s and into the 2020s. Tunes have been supported by Armin van Buuren, Ferry Corsten, Paul van Dyk, Markus Schulz, Aly & Fila, Andrew Rayel, Giuseppe Ottaviani, and Solarstone.

Within the trance ecosystem DJ T.H. sits in the German uplifting-melodic wing — the lane defined by Euphonic's editorial direction, the Suanda / Abora vocal-uplifting school, and the HeavensGate live circuit. His live programme has placed him on European trance event circuits including AWAKE Festival, Nature One, Essen Original Festival, We Love Trance, Euphonic Night, and Trance.Mission across the 2010s and 2020s. He is not a chart headline name but rather one of the steady multi-label engines that keeps the modern uplifting scene's release flow moving week to week.`,
      ja: `DJ T.H.（本名トーマス・ガツカ）はデュッセルドルフを拠点とするドイツのDJ／プロデューサーで、アップリフティングおよびメロディック・プログレッシブ・トランス・レジスターで活動する。エレクトロニック・ミュージックの時代に育ち、8年間ピアノを学び、2010年代初頭に国際的なトランス・シーンに参入した。キャリアのマーカーとなったのは2012年——トラック「More Nights In Neverland」がArmin van BuurenによるA State of Tranceで初サポートを受け、以来カタログを支えてきた編集チャンネルが開かれた。

リリースは特に広範なトランス・インプリント——Armada Music、Black Hole Recordings、Aly & FilaのAVA Recordings、Woody van EydenのHeavensGate、Universal Nation、Euphonic、Entrancing Music、Suanda Music、Abora Recordings、Find Your Harmony——に広がり、現代アップリフティング・サーキットにおいて目に見えてマルチレーベルな寄稿者の一人となっている。カタログのハイライトには「A Morning at the Sea」（2011、DJ Ives Mとの共作）、「Shapes in the Darkness」（2014）、「Into the Ocean」（2015）、「See You Again」（2018）、そして2010年代後半から2020年代にかけてのSharon Valerona、Nadi Sunriseらとの安定したヴォーカル・コラボレーション群が含まれる。楽曲はArmin van Buuren、Ferry Corsten、Paul van Dyk、Markus Schulz、Aly & Fila、Andrew Rayel、Giuseppe Ottaviani、Solarstoneらからサポートを受けてきた。

トランス・エコシステム内において、DJ T.H.はドイツのアップリフティング・メロディック側面——Euphonicの編集方針、Suanda／Aboraヴォーカル・アップリフティング派、HeavensGateライブ・サーキットが定義するレーン——に位置する。ライブ・プログラムは2010年代〜2020年代を通じてAWAKE Festival、Nature One、Essen Original Festival、We Love Trance、Euphonic Night、Trance.Missionなどヨーロッパのトランス・イベント・サーキットに彼を位置づけてきた。チャート見出し級の名前ではなく、現代アップリフティング・シーンのリリース・フローを週ごとに動かし続ける安定したマルチレーベル・エンジンの一人である。`,
    },
    mentionedIn: ['anatomy-of-uplifting-trance-anthem', 'what-is-uplifting-trance', 'essential-trance-labels-2026', 'best-uplifting-trance-tracks-of-all-time-50'],
  },

  {
    slug: 'stoneface-and-terminal',
    name: 'Stoneface & Terminal',
    flag: '🇩🇪',
    emoji: '🪨',
    genre: 'UPLIFTING',
    banner: 'b-uplifting',
    tags: ['UPLIFTING', 'BIG ROOM', 'GERMAN', 'DUO', 'EUPHONIC', 'FSOE'],
    members: ['Matthias Gierth', 'Henry Nix'],
    origin: 'Germany',
    activeFrom: '2004',
    labels: [
      'Electric Department Records',
      'Euphonic',
      'Perfecto Records',
      'Flashover Recordings',
      'Future Sound of Egypt (FSOE)',
    ],
    topWorks: [
      { title: 'Wide Range', year: 2007, type: 'album' },
      { title: 'Be Different', year: 2014, type: 'album' },
      { title: 'Hypogean', type: 'track' },
    ],
    related: ['ronski-speed', 'aly-and-fila', 'cosmic-gate', 'paul-van-dyk'],
    links: {
      beatport: 'https://www.beatport.com/artist/stoneface-terminal/8824',
      website: 'http://www.stoneface-terminal.de/',
      bandcamp: 'https://stonefaceandterminal.bandcamp.com/',
    },
    sub: { en: 'Big Room / Uplifting Trance', ja: 'ビッグルーム / アップリフティング・トランス' },
    short: {
      en: 'German DJ and production duo (Matthias Gierth and Henry Nix) on Euphonic, with album-length and remix work that has placed the catalogue across Perfecto, Flashover, and FSOE — including the Beatport Trance #1 single "Hypogean".',
      ja: 'Euphonic所属のドイツのDJ／プロダクション・デュオ（Matthias GierthとHenry Nix）。アルバム尺およびリミックス作品をPerfecto、Flashover、FSOE全域に展開し、Beatport Trance 1位を獲得したシングル「Hypogean」も含む。',
    },
    style: {
      en: 'Big-room uplifting with progressive arrangement DNA — full-length album craft, the polished melodic content the Euphonic editorial direction has defined across the 2000s and 2010s, and the kind of remixer technique that has put the duo on Armin van Buuren, Above & Beyond, and Cosmic Gate productions across multiple labels.',
      ja: 'プログレッシブなアレンジメントDNAを持つビッグルーム・アップリフティング——フル尺アルバム・クラフト、Euphonic編集方針が2000年代〜2010年代に定義してきた洗練されたメロディック・コンテンツ、そして複数レーベルにわたってデュオをArmin van Buuren、Above & Beyond、Cosmic Gateのプロダクションに位置づけてきたリミキサー技術。',
    },
    bio: {
      en: `Stoneface & Terminal are a German DJ and production duo composed of Matthias Gierth and Henry Nix, working together since the mid-2000s. The duo founded their own label Electric Department Records in 2004 and subsequently signed to Euphonic, where they teamed with label-mate Ronski Speed for the joint release "Incognition / Drowning Sunlight".

Their catalogue extends across two artist albums on Euphonic — "Wide Range" (2007) and "Be Different" (2014) — and through release runs on Perfecto Records, Flashover Recordings, and Aly & Fila's Future Sound of Egypt, where the single "Hypogean" reached #1 on the Beatport Trance chart. The duo have also worked as in-demand remixers, with credits on productions by Armin van Buuren, Above & Beyond, and Cosmic Gate.`,
      ja: `Stoneface & TerminalはMatthias GierthとHenry NixからなるドイツのDJ／プロダクション・デュオ。2000年代半ばから共同制作を行っている。デュオは2004年に自身のレーベルElectric Department Recordsを設立し、その後Euphonicに移籍。レーベル・メイトのRonski Speedと共同リリース「Incognition / Drowning Sunlight」を手掛けた。

カタログはEuphonicからの2枚のアーティスト・アルバム「Wide Range」（2007）および「Be Different」（2014）にまたがり、Perfecto Records、Flashover Recordings、Aly & FilaのFuture Sound of Egyptを経由するリリース・ランへと拡張される。FSOEからのシングル「Hypogean」はBeatport Trance チャート1位に到達した。デュオはまた需要の高いリミキサーとしても活動し、Armin van Buuren、Above & Beyond、Cosmic Gateのプロダクションに対するクレジットを持つ。`,
    },
    mentionedIn: [],
  },
];

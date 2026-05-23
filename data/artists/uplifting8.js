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
    members: ['Matthias Gierth (Stoneface)', 'Henry Nix (Terminal)'],
    origin: 'Görlitz, Germany',
    activeFrom: '2004',
    labels: [
      'Electric Department Records (own label, founded 2004)',
      'Euphonic',
      'Perfecto Records',
      'Flashover Recordings',
      'Future Sound of Egypt (FSOE)',
      'Armada Music',
    ],
    topWorks: [
      { title: 'Wide Range', year: 2007, type: 'album (Euphonic)' },
      { title: 'Be Different', year: 2014, type: 'album (Euphonic)' },
      { title: 'Universelab (with Aly & Fila)', year: 2014, type: 'track (FSOE)' },
      { title: '10 Years', year: 2015, type: 'best-of compilation (Euphonic)' },
      { title: 'Hypogean', year: 2016, type: 'track (FSOE, Beatport Trance #1)' },
      { title: 'Altered Floors', year: 2018, type: 'album (FSOE)' },
    ],
    related: ['ronski-speed', 'aly-and-fila', 'cosmic-gate', 'paul-van-dyk', 'dj-t-h', 'darren-porter'],
    links: {
      beatport: 'https://www.beatport.com/artist/stoneface-terminal/8824',
      website: 'http://www.stoneface-terminal.de/',
      bandcamp: 'https://stonefaceandterminal.bandcamp.com/',
    },
    sub: { en: 'Big Room / Uplifting Trance', ja: 'ビッグルーム / アップリフティング・トランス' },
    short: {
      en: 'German DJ and production duo from Görlitz (Matthias Gierth and Henry Nix) — schoolmates since the early 2000s, founders of Electric Department Records (2004), long-running Euphonic core artists, and FSOE collaborators on "Universelab" (with Aly & Fila) and the Beatport Trance #1 "Hypogean".',
      ja: 'ゲルリッツ出身のドイツのDJ／プロダクション・デュオ（Matthias GierthとHenry Nix）。2000年代初頭からの学友で、Electric Department Records（2004年設立）の創設者、Euphonic長期中核アーティスト、FSOEで「Universelab」（Aly & Fila共作）とBeatport Trance 1位の「Hypogean」を手掛けた。',
    },
    style: {
      en: 'Big-room uplifting with progressive arrangement DNA — full-length album craft, the polished melodic content the Euphonic editorial direction has defined across the 2000s and 2010s, and the kind of remixer technique that has put the duo on Armin van Buuren, Above & Beyond, Paul van Dyk, Tiësto and Cosmic Gate productions across multiple labels.',
      ja: 'プログレッシブなアレンジメントDNAを持つビッグルーム・アップリフティング——フル尺アルバム・クラフト、Euphonic編集方針が2000年代〜2010年代に定義してきた洗練されたメロディック・コンテンツ、そして複数レーベルにわたってデュオをArmin van Buuren、Above & Beyond、Paul van Dyk、Tiësto、Cosmic Gateのプロダクションに位置づけてきたリミキサー技術。',
    },
    bio: {
      en: `Stoneface & Terminal are a German DJ and production duo composed of Matthias Gierth (Stoneface) and Henry Nix (Terminal), schoolmates from Görlitz on the Polish border who began producing together in the early 2000s. The duo founded their own label Electric Department Records in 2004 and released early tracks "Merkur", "Sidewinder" and "Summerscape / Miami" before signing to Euphonic — at that point already one of the leading German trance labels — and teaming with label-mate Ronski Speed for the joint release "Incognition / Drowning Sunlight" that opened the long Euphonic run.

The Euphonic catalogue is anchored by two artist albums — the 2007 debut "Wide Range" and 2014's "Be Different" — and bookended by the 2015 "10 Years" best-of compilation. From the mid-2010s the duo extended visibly into Aly & Fila's Future Sound of Egypt: the December 2014 collaboration with Aly & Fila, "Universelab", was lifted from Aly & Fila's "The Other Shore" album and supported across A State of Trance, and the 2016 solo single "Hypogean" reached #1 on the Beatport Trance chart, which led directly to the duo's 2018 FSOE album "Altered Floors". Across the catalogue they have also issued material on Perfecto Records and Paul Oakenfold's broader editorial channels, on Ferry Corsten's Flashover Recordings, and on Armada Music, and they have built one of the most cited remixer credit-lists of the modern trance era — productions for Armin van Buuren, Paul van Dyk, Tiësto, Above & Beyond, Cosmic Gate and Markus Schulz among many others.

Within the trance ecosystem Stoneface & Terminal sit in the German big-room uplifting wing — the lane that runs through Euphonic's editorial direction and connects to the FSOE 138 mainline via the Aly & Fila friendship. They are not a chart-headline name in the Armin / Above & Beyond sense, but they are one of the steadiest two-decade engines of the modern trance album format and one of the few duos to hold a top-tier place on both the Euphonic and FSOE rosters simultaneously.

Operator's note. For a listener who came up on weekly ASOT and the 2018 Tomorrowland Armin mainstage, Stoneface & Terminal are the duo that explains how the album-length statement still works inside a singles-driven genre. "Be Different" and "Altered Floors" are long-form arrangement craft — patient builds, layered breakdowns, the same Sun & Moon emotional vocabulary stretched across a full-length running order. "Hypogean" then collapses the same craft into a single Beatport-#1 drop, which is the test the rest of the catalogue passes too.`,
      ja: `Stoneface & TerminalはMatthias Gierth（Stoneface）とHenry Nix（Terminal）からなるドイツのDJ／プロダクション・デュオ。ポーランド国境のゲルリッツ出身の学友で、2000年代初頭から共同制作を行っている。デュオは2004年に自身のレーベルElectric Department Recordsを設立し、初期トラック「Merkur」「Sidewinder」「Summerscape / Miami」をリリースした後、当時すでにドイツを代表するトランス・レーベルの一つだったEuphonicに移籍。レーベル・メイトのRonski Speedと共同リリース「Incognition / Drowning Sunlight」で長きにわたるEuphonicランの幕を開けた。

Euphonicカタログは2枚のアーティスト・アルバム——2007年のデビュー作「Wide Range」と2014年の「Be Different」——を軸とし、2015年のベスト・コンピレーション「10 Years」で両端が締めくくられる。2010年代半ばからはデュオは目に見えてAly & FilaのFuture Sound of Egyptへと拡張した：2014年12月のAly & Filaとの共作「Universelab」はAly & Filaのアルバム『The Other Shore』からのリフトとなりA State of Tranceでサポートされ、2016年のソロ・シングル「Hypogean」はBeatport Trance チャート1位に到達——これが2018年のFSOEアルバム「Altered Floors」へと直接つながった。カタログ全体ではPerfecto RecordsおよびPaul Oakenfoldの広範な編集チャネル、Ferry CorstenのFlashover Recordings、Armada Musicからもリリースを行い、現代トランス時代の最も引用されるリミキサー・クレジット・リストの一つを構築してきた——Armin van Buuren、Paul van Dyk、Tiësto、Above & Beyond、Cosmic Gate、Markus Schulzなど多数のプロダクションを担当。

トランス・エコシステム内において、Stoneface & Terminalはドイツのビッグルーム・アップリフティング側面——Euphonicの編集方針を貫き、Aly & Filaとの友情を通じてFSOEの138メインラインに接続するレーン——に位置する。Armin／Above & Beyondの意味でのチャート見出し級の名前ではないが、現代トランス・アルバム・フォーマットの最も安定した20年エンジンの一つであり、EuphonicおよびFSOEロースターの最上層を同時に保持する数少ないデュオの一つである。

オペレーター・ノート：毎週ASOTおよび2018年Tomorrowland Arminメインステージで育ったリスナーにとって、Stoneface & Terminalはアルバム尺のステートメントがシングル駆動のジャンル内でいかに今も機能するかを説明するデュオである。「Be Different」と「Altered Floors」は長尺アレンジメント・クラフトだ——忍耐強いビルド、層をなすブレイクダウン、Sun & Moonと同じ情緒的語彙がフル尺の構成全体に引き伸ばされている。「Hypogean」はその同じクラフトをBeatport 1位のシングル・ドロップに圧縮し、カタログの残りも同じ試験を通過する。`,
    },
    mentionedIn: ['what-is-uplifting-trance', 'best-uplifting-trance-tracks-of-all-time-50', 'anatomy-of-uplifting-trance-anthem', 'essential-trance-labels-2026', 'art-of-trance-buildup-production-secrets'],
  },
];

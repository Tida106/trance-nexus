// Batch 5 — Classic / Pioneer tier (added 2026-05)
//
// These are the elder-statesman names that shaped the 90s and early-2000s
// trance scene before the modern uplifting / progressive split. Schema
// matches legends.js exactly — see that file's header for the full
// field list. New `related` slugs that point at artists added in later
// batches will resolve once those artists ship; getArtistBySlug filters
// nulls, so an unresolved slug just disappears from the related list
// rather than throwing.

export const legends2 = [
  {
    slug: 'bt',
    name: 'BT',
    flag: '🇺🇸',
    emoji: '🌐',
    genre: 'PROGRESSIVE',
    banner: 'b-progressive',
    tags: ['PROGRESSIVE', 'IDM', 'LEGEND'],
    realName: 'Brian Wayne Transeau',
    origin: 'Rockville, Maryland, USA',
    born: '1971',
    activeFrom: '1995',
    labels: ['Perfecto Records', 'Black Hole Recordings', 'Reflective Records'],
    topWorks: [
      { title: 'IMA', year: 1995, type: 'album' },
      { title: 'ESCM', year: 1997, type: 'album' },
      { title: 'Movement in Still Life', year: 1999, type: 'album' },
      { title: 'Emotional Technology', year: 2003, type: 'album' },
      { title: 'These Hopeful Machines', year: 2010, type: 'album' },
    ],
    related: ['sasha', 'paul-van-dyk', 'andrew-bayer', 'tiesto'],
    links: {
      website: 'https://www.btmusic.com',
      soundcloud: 'https://soundcloud.com/bt',
      beatport: 'https://www.beatport.com/search?q=BT',
    },
    sub: { en: 'Progressive Trance / IDM', ja: 'プログレッシブ・トランス / IDM' },
    short: {
      en: 'American progressive innovator who invented the "stutter edit" and helped define late-90s emotional trance.',
      ja: '「スタッター・エディット」を発明したアメリカのプログレッシブ革新者。90年代後半の情緒的トランスを定義した。',
    },
    style: {
      en: 'Cinematic progressive trance with intricate vocal chops, complex programming, and a singular emotional palette. Crosses freely between trance, IDM, breakbeat, and orchestral electronica.',
      ja: '映画的なプログレッシブ・トランスに、緻密なボーカル・チョップと複雑なプログラミング、そして唯一無二の情緒的パレット。トランス・IDM・ブレイクビーツ・オーケストラ電子音楽の間を自在に行き来する。',
    },
    bio: {
      en: `Brian Transeau — known professionally as BT — is among the most musically literate producers in electronic music history. Born in Maryland in 1971 and trained at the Berklee College of Music, he emerged in the mid-90s through Sasha and John Digweed's North American DJ tours and Paul Oakenfold's Perfecto label. His debut IMA (1995) introduced the lush, classically-inflected sound that would define his career; ESCM (1997) and Movement in Still Life (1999) cemented him as the era's premier progressive producer.

He invented and named the "stutter edit," a granular vocal-chop technique now standard in pop and dance production, and built the Stutter Edit and BreakTweaker software plugins that made the technique accessible to other producers. Beyond electronic music, BT has scored Hollywood films, produced for Madonna, Sting, and NSYNC, and continues to release across club tracks, ambient longform, and orchestral works.`,
      ja: `ブライアン・トランソー——アーティスト名BT——は電子音楽史で最も音楽的に教養あるプロデューサーの一人。1971年メリーランド州生まれ、バークリー音楽大学で訓練を受け、90年代半ばにSashaとJohn DigweedのDJツアーとPaul OakenfoldのPerfectoレーベル経由で登場。デビュー作『IMA』（1995）で、彼のキャリアを定義することになる豊潤でクラシカルなサウンドを世に問い、『ESCM』（1997）と『Movement in Still Life』（1999）で当時のプログレッシブの第一人者としての地位を確立した。

「スタッター・エディット」を発明・命名し、現代のポップ／ダンス音楽で標準となった同技法を他のプロデューサーが使えるよう同名プラグインを開発。電子音楽の枠を超え、ハリウッド映画の音楽を手がけ、Madonna、Sting、NSYNCらをプロデュース。クラブトラックからアンビエント、オーケストラ作品まで幅広く発表し続けている。`,
    },
    mentionedIn: [],
  },

  {
    slug: 'robert-miles',
    name: 'Robert Miles',
    flag: '🇮🇹',
    emoji: '🌙',
    genre: 'PROGRESSIVE',
    banner: 'b-progressive',
    tags: ['DREAM TRANCE', 'CLASSIC', 'LEGEND'],
    realName: 'Roberto Concina',
    origin: 'Fleurier, Switzerland (raised in Friuli, Italy)',
    born: '1969',
    activeFrom: '1994',
    labels: ['DBX Records', 'Deconstruction', 'Salt Records'],
    topWorks: [
      { title: 'Children', year: 1995, type: 'track' },
      { title: 'Dreamland', year: 1996, type: 'album' },
      { title: 'Fable', year: 1996, type: 'track' },
      { title: '23am', year: 1997, type: 'album' },
      { title: 'Organik', year: 2001, type: 'album' },
    ],
    related: ['atb', 'paul-van-dyk', 'tiesto', 'ferry-corsten'],
    links: {
      soundcloud: 'https://soundcloud.com/search?q=Robert%20Miles',
      beatport: 'https://www.beatport.com/search?q=Robert%20Miles',
    },
    sub: { en: 'Dream Trance / Ambient Progressive', ja: 'ドリーム・トランス / アンビエント・プログレッシブ' },
    short: {
      en: 'Italian-Swiss producer whose 1995 anthem "Children" defined dream trance and sold over five million copies worldwide.',
      ja: 'イタリア系スイス人プロデューサー。1995年のアンセム「Children」がドリーム・トランスを定義し、世界で500万枚以上を売り上げた。',
    },
    style: {
      en: 'Melancholic piano leads over warm 4/4 grooves — the foundational dream-trance template. Later work moved toward ambient, world music, and electronica.',
      ja: 'メランコリックなピアノ・リードを暖かい4つ打ちグルーヴに乗せた——ドリーム・トランスの原型的テンプレート。後年はアンビエント、ワールドミュージック、エレクトロニカへと移行した。',
    },
    bio: {
      en: `Roberto Concina — born in Switzerland in 1969 and raised in Friuli, northern Italy — created one of the most recognisable instrumental records in electronic music history with "Children" in 1995. The track was reportedly written as a "calming" mix to slow down crowds at the end of nights at Italian raves, where car accidents on the drive home had become a serious concern. It became a global #1, sold over five million copies, and effectively invented the "dream trance" subgenre.

His debut album Dreamland (1996) sold over twelve million copies; the follow-up 23am (1997) and the more experimental Organik (2001) showed an artist increasingly interested in ambient, world, and live-instrument production. Miles spent his later years running the OpenLab radio station in Ibiza and championing experimental electronic music. He died in 2017, but "Children" remains a permanent fixture of trance retrospectives.`,
      ja: `ロベルト・コンチーナ——1969年スイス生まれ、イタリア北部フリウリ育ち——は1995年の「Children」で電子音楽史上最も認知度の高いインストゥルメンタル作品の一つを生み出した。同曲はイタリアのレイブで夜明けの帰宅時の事故が深刻化していたことを受け、聴衆を鎮める目的で書かれたと言われる。世界1位を獲得、500万枚以上を売り上げ、事実上「ドリーム・トランス」というサブジャンルを発明した。

デビューアルバム『Dreamland』（1996）は1200万枚以上を売り上げ、続く『23am』（1997）と実験色の強い『Organik』（2001）はアンビエント、ワールド、生楽器演奏への関心の深まりを示した。後年はイビザでラジオ局OpenLabを運営し実験的電子音楽を支援。2017年に逝去したが「Children」は今もトランス回顧展の不動の名曲である。`,
    },
    mentionedIn: ['iconic-trance-anthems-that-defined-an-era', 'history-of-trance-music'],
  },

  {
    slug: 'atb',
    name: 'ATB',
    flag: '🇩🇪',
    emoji: '🎸',
    genre: 'UPLIFTING',
    banner: 'b-uplifting',
    tags: ['UPLIFTING', 'CLASSIC', 'GUITAR TRANCE'],
    realName: 'André Tanneberger',
    origin: 'Freiberg, Saxony, Germany',
    born: '1973',
    activeFrom: '1996',
    labels: ['Kontor Records', 'Sony Music', 'Black Hole Recordings'],
    topWorks: [
      { title: '9 PM (Till I Come)', year: 1998, type: 'track' },
      { title: 'Movin\' Melodies', year: 1999, type: 'album' },
      { title: 'Dedicated', year: 2002, type: 'album' },
      { title: 'No Silence', year: 2004, type: 'album' },
      { title: 'Trilogy', year: 2007, type: 'album' },
      { title: 'Your Love (9 PM)', year: 2021, type: 'track' },
    ],
    related: ['paul-van-dyk', 'robert-miles', 'tiesto', 'ferry-corsten'],
    links: {
      website: 'https://www.atb-music.com',
      soundcloud: 'https://soundcloud.com/atb',
      beatport: 'https://www.beatport.com/artist/atb/3499',
    },
    sub: { en: 'Melodic / Guitar Trance', ja: 'メロディック / ギター・トランス' },
    short: {
      en: 'German producer whose 1998 hit "9 PM (Till I Come)" introduced acoustic-guitar leads to mainstream trance.',
      ja: '1998年のヒット「9 PM (Till I Come)」でアコースティック・ギター・リードをメインストリーム・トランスに持ち込んだドイツのプロデューサー。',
    },
    style: {
      en: 'Warm, emotional melodic trance built around plucked acoustic-guitar leads, vocal hooks, and pop-leaning structures — accessible to mainstream radio without abandoning club energy.',
      ja: 'プラックト・アコースティック・ギターのリード、ボーカルフック、ポップ寄りの構成を軸とした暖かく情緒的なメロディック・トランス——クラブのエネルギーを失わずメインストリーム・ラジオでも受け入れられる音楽性。',
    },
    bio: {
      en: `André Tanneberger — known as ATB — was born in Freiberg, East Germany in 1973 and grew up listening to electronic music smuggled across the Berlin Wall. He started producing in the early 90s and broke through in 1998 with "9 PM (Till I Come)," whose iconic plucked-guitar lead became one of the most-played trance tracks ever and reached #1 in the UK and across Europe.

His albums Movin' Melodies (1999), Dedicated (2002), and No Silence (2004) made him one of the genre's most consistent hitmakers, and the seven-album Trilogy run cemented his reputation as a producer who could deliver both club energy and radio-friendly melody. ATB has consistently appeared in DJ Mag's Top 100 since 1999 and continues to release new material — the 2021 reworking "Your Love (9 PM)" with Topic and A7S returned him to global charts twenty-three years after the original.`,
      ja: `アンドレ・タンネベルガー——ATBの名で知られる——は1973年東ドイツ・フライベルク生まれ。ベルリンの壁を越えて密輸された電子音楽を聴いて育ち、90年代初頭に制作を開始。1998年の「9 PM (Till I Come)」のアイコニックなプラックト・ギターのリードはトランス史上最も再生されたトラックの一つとなり、英国と欧州各地でチャート1位を獲得した。

『Movin' Melodies』（1999）、『Dedicated』（2002）、『No Silence』（2004）はジャンル屈指の安定したヒットメーカーとしての地位を確立し、7枚のアルバムからなるTrilogy企画はクラブのエネルギーとラジオ向けメロディの両立を証明。1999年以降DJ Mag Top 100常連で、2021年にはTopic & A7Sとの「Your Love (9 PM)」リワークで原曲から23年後のグローバル・チャート復帰を果たした。`,
    },
    mentionedIn: ['history-of-trance-music', 'iconic-trance-anthems-that-defined-an-era'],
  },

  {
    slug: 'rank-1',
    name: 'Rank 1',
    flag: '🇳🇱',
    emoji: '⚡',
    genre: 'UPLIFTING',
    banner: 'b-uplifting',
    tags: ['UPLIFTING', 'BIG ROOM', 'DUTCH TRANCE'],
    realName: 'Benno de Goeij & Piet Bervoets',
    origin: 'Netherlands',
    born: '—',
    activeFrom: '1998',
    labels: ['Magik Muzik', 'Anjunabeats', 'High Contrast Recordings'],
    topWorks: [
      { title: 'Airwave', year: 1999, type: 'track' },
      { title: 'Awakening', year: 2001, type: 'track' },
      { title: 'And Then', year: 2004, type: 'track' },
      { title: 'L.E.D. There Be Light', year: 2008, type: 'track' },
      { title: 'Symfo', year: 2010, type: 'track' },
    ],
    related: ['armin-van-buuren', 'tiesto', 'ferry-corsten', 'atb'],
    links: {
      website: 'https://www.rank1.nl',
      soundcloud: 'https://soundcloud.com/rank1',
      beatport: 'https://www.beatport.com/artist/rank-1/2731',
    },
    sub: { en: 'Dutch Uplifting / Big-room Trance', ja: 'ダッチ・アップリフティング / ビッグルーム・トランス' },
    short: {
      en: 'Dutch duo behind "Airwave" — one of the defining anthems of late-90s mainstage trance.',
      ja: '90年代末メインステージ・トランスを定義したアンセム「Airwave」を生んだオランダのデュオ。',
    },
    style: {
      en: 'Clean, melodic uplifting trance with peak-time energy, signature plucked synths, and the kind of euphoric breakdowns that anchored A State of Trance Year Mixes for over a decade.',
      ja: 'クリーンでメロディックなアップリフティング・トランス。ピークタイムのエネルギー、シグネチャーのプラック・シンセ、そしてA State of Trance年間ミックスを10年以上支えた高揚感あるブレイクダウン。',
    },
    bio: {
      en: `Rank 1 is the Dutch production duo of Benno de Goeij and Piet Bervoets, formed in 1998. Their second single "Airwave" (1999) became one of the defining trance anthems of the era — a clean, plucked melodic build that influenced nearly every Dutch uplifting track that followed. They followed it with a string of similarly anthemic productions including "Awakening," "And Then," "Symsonic," and "L.E.D. There Be Light," the last of which Tiësto used as the opening track for his Olympics-spec Tour of Lights stage production.

Closely associated with Tiësto's Black Hole Recordings and the early Magik Muzik catalogue, Rank 1 helped define the muscular, mainstage Dutch trance sound that dominated festivals through the mid-2000s. They continue to perform and release sporadically — usually around major Trance Energy / A State of Trance milestones — and remain a cornerstone reference for any conversation about Dutch trance history.`,
      ja: `Rank 1は1998年結成のオランダ人プロデューサー・デュオ、Benno de GoeijとPiet Bervoetsによるユニット。2作目シングル「Airwave」（1999）は同時代を代表するトランス・アンセムとなり、その後のほぼ全てのダッチ・アップリフティング作品に影響を与えたクリーンでプラック主体のメロディック・ビルドを確立した。続く「Awakening」「And Then」「Symsonic」「L.E.D. There Be Light」も同様にアンセム化し、最後の作品はTiëstoがオリンピック規模の「Tour of Lights」ステージのオープニングに採用した。

TiëstoのBlack Hole Recordings、初期のMagik Muzikカタログと深く結びつき、2000年代半ばのフェス・シーンを席巻したマッシブなメインステージ・ダッチ・トランス・サウンドの定義に貢献した。Trance Energy / A State of Tranceの節目にあわせて散発的にライブとリリースを続けており、ダッチ・トランス史を語る際の基準点であり続けている。`,
    },
    mentionedIn: ['history-of-trance-music', 'iconic-trance-anthems-that-defined-an-era'],
  },

  {
    slug: 'push',
    name: 'Push',
    flag: '🇧🇪',
    emoji: '🔥',
    genre: 'UPLIFTING',
    banner: 'b-uplifting',
    tags: ['UPLIFTING', 'HARD TRANCE', 'BELGIAN'],
    realName: 'Mike Dierickx',
    origin: 'Antwerp, Belgium',
    born: '1973',
    activeFrom: '1995',
    labels: ['Bonzai Records', 'Black Hole Recordings', 'Armada Music'],
    topWorks: [
      { title: 'Universal Nation', year: 1998, type: 'track' },
      { title: 'Strange World', year: 1999, type: 'track' },
      { title: 'Tranceformation', year: 1999, type: 'track' },
      { title: 'The Legacy', year: 2003, type: 'track' },
      { title: 'Universal Nation 2020', year: 2020, type: 'track' },
    ],
    related: ['rank-1', 'paul-van-dyk', 'ferry-corsten', 'armin-van-buuren'],
    links: {
      soundcloud: 'https://soundcloud.com/m-i-k-e-push',
      beatport: 'https://www.beatport.com/search?q=M.I.K.E.%20Push',
    },
    sub: { en: 'Hard / Energy Trance', ja: 'ハード / エナジー・トランス' },
    short: {
      en: 'Belgian producer behind "Universal Nation" — one of trance\'s most enduring anthems and a peak-time staple for 25+ years.',
      ja: '「Universal Nation」を生んだベルギーのプロデューサー。25年以上ピークタイム定番として愛され続けるトランス史最重要アンセムの一つ。',
    },
    style: {
      en: 'Hard, anthemic uplifting trance — driving 140+ BPM grooves, soaring leads, and the kind of cathartic breakdowns built for the loudest hour of a long set. Also operates as M.I.K.E. Push and Plastic Boy.',
      ja: 'ハードでアンセミックなアップリフティング・トランス——140 BPM超のドライヴィングなグルーヴ、舞い上がるリード、長尺セットの最大音量タイムに向けたカタルシスあるブレイクダウン。M.I.K.E. PushおよびPlastic Boy名義でも活動。',
    },
    bio: {
      en: `Mike Dierickx — best known as Push and M.I.K.E. Push — is one of Belgium's most prolific trance producers. Born in 1973, he started releasing on Bonzai Records in the mid-90s and broke through in 1998 with "Universal Nation," whose unmistakable 138-BPM melodic build made it one of the most-played trance records of all time. The track has been a peak-time fixture for over twenty-five years and has been re-released, remixed, and reworked countless times — including a 2020 version that returned it to A State of Trance year-end charts.

Beyond Push, Dierickx has released over 200 records under aliases including M.I.K.E., Plastic Boy, DJ Solar Stone (no relation to Solarstone), and others. He is closely associated with Bonzai Trance Progressive and Armada and has remained an active producer and DJ for nearly three decades. Among Belgian trance acts, only Yves Deruyter rivals him for catalogue depth.`,
      ja: `マイク・ディエリックス——Push、M.I.K.E. Pushの名で知られる——はベルギーで最も多作なトランス・プロデューサーの一人。1973年生まれ、90年代半ばにBonzai Recordsからリリースを開始し、1998年の「Universal Nation」で大ブレイク。その特徴的な138 BPMのメロディック・ビルドは史上最も再生されたトランス・トラックの一つとなった。同曲は25年以上ピークタイムの定番であり続け、2020年版がA State of Trance年間チャートに復帰するなど、再リリース・リミックスを繰り返し続けている。

Pushに加え、M.I.K.E.、Plastic Boy、DJ Solar Stone（Solarstoneとは別人）など複数の名義で200作以上をリリース。Bonzai Trance ProgressiveとArmadaと深く結びつき、約30年にわたり現役プロデューサー／DJとして活動を続けている。ベルギーのトランス・アクトの中でカタログの深さで彼に肩を並べるのはYves Deruyterのみである。`,
    },
    mentionedIn: ['history-of-trance-music', 'iconic-trance-anthems-that-defined-an-era'],
  },

  {
    slug: 'mauro-picotto',
    name: 'Mauro Picotto',
    flag: '🇮🇹',
    emoji: '🦎',
    genre: 'UPLIFTING',
    banner: 'b-uplifting',
    tags: ['HARD TRANCE', 'ITALIAN', 'CLASSIC'],
    realName: 'Mauro Picotto',
    origin: 'Cavour, Italy',
    born: '1966',
    activeFrom: '1991',
    labels: ['BXR', 'Media Records', 'Bakerloo Records', 'Alchemy'],
    topWorks: [
      { title: 'Lizard', year: 1998, type: 'track' },
      { title: 'Komodo (Save a Soul)', year: 1999, type: 'track' },
      { title: 'Iguana', year: 2000, type: 'track' },
      { title: 'Pulsar', year: 2001, type: 'track' },
      { title: 'Like This Like That', year: 2003, type: 'track' },
    ],
    related: ['gigi-dagostino', 'push', 'paul-van-dyk', 'tiesto'],
    links: {
      website: 'https://www.mauropicotto.com',
      soundcloud: 'https://soundcloud.com/search?q=Mauro%20Picotto',
      beatport: 'https://www.beatport.com/search?q=Mauro%20Picotto',
    },
    sub: { en: 'Italian Hard Trance', ja: 'イタリアン・ハード・トランス' },
    short: {
      en: 'Italian hard-trance icon whose "lizard sound" defined turn-of-millennium club anthems.',
      ja: '「リザード・サウンド」で世紀の変わり目のクラブ・アンセムを定義したイタリアのハード・トランスの象徴。',
    },
    style: {
      en: 'Driving, percussive Italian hard trance with sliding-arpeggio lead synths — the "lizard" signature he turned into an entire trilogy of related tracks (Lizard, Komodo, Iguana, Pulsar).',
      ja: 'ドライヴィングでパーカッシヴなイタリアン・ハード・トランスに、スライドするアルペジオのリード・シンセ——彼が「リザード」シグネチャー・サウンドとして展開した一連の関連トラック（Lizard、Komodo、Iguana、Pulsar）の核。',
    },
    bio: {
      en: `Mauro Picotto, born in Cavour in northern Italy in 1966, is one of the most internationally successful Italian trance producers in history. Coming up through Gianfranco Bortolotti's Media Records / BXR stable in the early 90s, he broke through globally with "Lizard" in 1998 — a track whose unforgettable sliding-arpeggio lead became the template for Italian hard trance. He extended the idea into a loose "lizard family" trilogy with Komodo, Iguana, and Pulsar, all of which charted across Europe and became staples of trance Year Mixes.

Beyond his own productions Picotto was a sought-after remixer and a fixture at Italian super-clubs Cocoricò and Insomnia, and his Meganite events ran for years across Ibiza and Italy. He continues to release on Bakerloo and Alchemy.`,
      ja: `マウロ・ピコット、1966年北イタリア・カヴール生まれ。Gianfranco BortolottiのMedia Records／BXRから90年代初頭に登場し、1998年の「Lizard」で世界的にブレイク——スライドするアルペジオのリードはイタリアン・ハード・トランスの定型となった。Komodo、Iguana、Pulsarへと続く「リザード・ファミリー」三部作は欧州各地でチャート入りし、トランス年間ミックスの定番に。

自身のプロダクションに加え、リミキサーとしても引っ張りだことなり、イタリアのスーパークラブCocoricòとInsomniaのレジデント、Meganiteイベントもイビザとイタリアで長期間展開した。現在もBakerlooとAlchemyからリリースを続けている。`,
    },
    mentionedIn: ['history-of-trance-music'],
  },

  {
    slug: 'gigi-dagostino',
    name: "Gigi D'Agostino",
    flag: '🇮🇹',
    emoji: '🍷',
    genre: 'PROGRESSIVE',
    banner: 'b-progressive',
    tags: ['ITALODANCE', 'MEDITERRANEAN PROGRESSIVE', 'CLASSIC'],
    realName: 'Luigino Celestino Di Agostino',
    origin: 'Turin, Italy',
    born: '1967',
    activeFrom: '1986',
    labels: ['Media Records', 'BXR', 'ZYX Music', 'Gigi D\'Agostino Planet'],
    topWorks: [
      { title: "L'Amour Toujours", year: 1999, type: 'track' },
      { title: 'Bla Bla Bla', year: 1999, type: 'track' },
      { title: 'The Riddle', year: 1999, type: 'track' },
      { title: 'La Passion', year: 2000, type: 'track' },
      { title: 'I\'ll Fly with You', year: 1999, type: 'track' },
    ],
    related: ['mauro-picotto', 'robert-miles', 'atb', 'paul-van-dyk'],
    links: {
      website: 'https://www.gigidagostino.com',
      soundcloud: 'https://soundcloud.com/gigi-d-agostino-official',
      beatport: 'https://www.beatport.com/search?q=Gigi%20D%27Agostino',
    },
    sub: { en: 'Italodance / Mediterranean Progressive', ja: 'イタロダンス / メディタレニアン・プログレッシブ' },
    short: {
      en: 'Italian icon whose "L\'Amour Toujours" and "Bla Bla Bla" became inescapable global hits and defined Mediterranean Progressive.',
      ja: '「L\'Amour Toujours」「Bla Bla Bla」で世界的な大ヒットを生み、メディタレニアン・プログレッシブを定義したイタリアの象徴。',
    },
    style: {
      en: 'Warm Mediterranean Progressive — slow-tempo emotional builds, plucked melodic leads, often with French- or English-language vocal samples. Later pioneered the "Lento Violento" slow-hard subgenre.',
      ja: '暖かなメディタレニアン・プログレッシブ——スロー・テンポの情緒的なビルド、プラックされたメロディック・リード、しばしばフランス語・英語のボーカル・サンプルを伴う。後年は「Lento Violento」というスロー・ハード・サブジャンルを開拓した。',
    },
    bio: {
      en: `Luigino Di Agostino — known to the world as Gigi D'Agostino — is one of the most commercially successful Italian electronic artists of all time. Born in Turin in 1967, he started DJing in the late 80s and emerged as a producer in the mid-90s through Media Records. His 1999 single "Bla Bla Bla" hit #1 across Europe; "L'Amour Toujours" the same year became a generational anthem and remains one of the most-streamed dance tracks ever produced in Italy.

D'Agostino is the architect of what he calls "Mediterranean Progressive" — slow-tempo, emotionally direct, melodic dance music — and later developed the "Lento Violento" subgenre (literally "slow violent") that paired half-tempo grooves with hard-trance attitude. His Il Programmino di Gigi mix CDs were essential listening across Italy in the late 90s and early 2000s.`,
      ja: `ルイジーノ・ディ・アゴスティーノ——通称ジジ・ダゴスティーノ——はイタリア電子音楽史上最も商業的に成功したアーティストの一人。1967年トリノ生まれ、80年代後半からDJを始め、90年代半ばにMedia Records経由でプロデューサーとして登場。1999年シングル「Bla Bla Bla」は欧州各地で1位、同年の「L\'Amour Toujours」は世代的アンセムとなり、イタリア発のダンス・トラックとして史上最も再生された作品の一つで在り続けている。

彼が「メディタレニアン・プログレッシブ」と呼ぶ——スロー・テンポで情緒的、メロディックなダンス音楽——を開拓し、後年は半テンポのグルーヴにハード・トランスの姿勢を組み合わせた「Lento Violento（直訳：スロー・バイオレント）」サブジャンルを展開。ミックスCD『Il Programmino di Gigi』は90年代末〜2000年代初頭のイタリアで必聴盤だった。`,
    },
    mentionedIn: ['history-of-trance-music', 'iconic-trance-anthems-that-defined-an-era'],
  },
];

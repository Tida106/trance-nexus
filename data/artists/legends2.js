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
    labels: ['Perfecto Records', 'Black Hole Recordings', 'Reflective Records', 'Nettwerk'],
    topWorks: [
      { title: 'IMA', year: 1995, type: 'album' },
      { title: 'ESCM', year: 1997, type: 'album' },
      { title: 'Flaming June (with Paul van Dyk)', year: 1997, type: 'track' },
      { title: 'Movement in Still Life', year: 1999, type: 'album' },
      { title: 'These Hopeful Machines (Grammy-nominated)', year: 2010, type: 'album' },
      { title: 'All Hail the Silence — Daggers (with Christian Burns)', year: 2019, type: 'album' },
    ],
    related: ['sasha', 'paul-van-dyk', 'andrew-bayer', 'tiesto', 'john-digweed', 'ferry-corsten'],
    links: {
      soundcloud: 'https://soundcloud.com/BT',
      spotify: 'https://open.spotify.com/artist/64MoFdq8ORI3V98AR5SPWL',
      beatport: 'https://www.beatport.com/search?q=BT',
    },
    sub: { en: 'Progressive Trance / IDM', ja: 'プログレッシブ・トランス / IDM' },
    short: {
      en: 'American progressive innovator who patented the stutter-edit technique and helped define late-90s emotional trance.',
      ja: 'スタッター・エディット技法の特許を保有するアメリカのプログレッシブ革新者。90年代後半の情緒的トランスを定義した。',
    },
    style: {
      en: 'Cinematic progressive trance with intricate vocal chops, complex programming, and a singular emotional palette. Crosses freely between trance, IDM, breakbeat, and orchestral electronica.',
      ja: '映画的なプログレッシブ・トランスに、緻密なボーカル・チョップと複雑なプログラミング、そして唯一無二の情緒的パレット。トランス・IDM・ブレイクビーツ・オーケストラ電子音楽の間を自在に行き来する。',
    },
    bio: {
      en: `Brian Wayne Transeau — known professionally as BT — was born in Rockville, Maryland on 4 October 1971 and trained at the Berklee College of Music in synthesis and composition. He came up through the mid-90s North American club circuit via Sasha and John Digweed's tours and Paul Oakenfold's Perfecto label, and his debut IMA (1995, released on Perfecto / Reflective) introduced the classically-inflected, sample-dense production style — long-form arrangement, layered synth pads, gospel-choir vocal samples — that placed him a step away from European trance's chord-and-lead template from the start.

The catalogue runs through ESCM (1997, with the BT-and-Paul-van-Dyk co-produced single "Flaming June" — UK #19, often miscited as a PvD remix), Movement in Still Life (1999), Emotional Technology (2003), and These Hopeful Machines (2010 — Grammy-nominated for Best Electronic/Dance Album). Outside the artist albums, BT has scored Hollywood films, produced for Madonna, Sting, and *NSYNC, and released Daggers (18 Jan 2019) with Christian Burns as the All Hail the Silence project — a synth-pop record cut entirely to tape from modular synths with no computer in the signal chain.

The technique most often associated with him — the "stutter edit," the granular gated-repeat vocal-chop trick now standard across pop and EDM — is more precisely sourced than the usual "BT invented it" framing suggests. BT holds patents on the underlying real-time digital-audio manipulation method and built the technique into a commercial plugin via his company Sonik Architects; iZotope acquired Sonik Architects in December 2010, and the Stutter Edit plugin shipped at Winter NAMM 2011 as an iZotope / BT product (Stutter Edit 2 followed in 2020). The technique as audible artifact predates the plugin name across ESCM and Movement in Still Life.

Operator's note. Most producer's-producer reputations are abstract — you have to take it on faith that the engineering matters. With BT it's directly audible: drop any track from ESCM or Movement in Still Life into a 2026 mainstage trance set and the orchestral layering, the granular vocal chops, and the sample density across the stereo field feel like a different lineage to anything programmed by Armin or Andrew Rayel. What the operator hears in BT and doesn't hear elsewhere is the pre-trance-mainstream integration of orchestral and electronic textures — the same instinct running through Andrew Bayer's catalogue, but BT was doing it in 1997 from a Berklee composition background. The Stutter Edit lineage is the secondary story; the primary one is that the modern Anjuna composer-led aesthetic has a Maryland-by-way-of-Boston source code.`,
      ja: `ブライアン・ウェイン・トランソー——アーティスト名BT——は1971年10月4日メリーランド州ロックヴィル生まれ。バークリー音楽大学でシンセシスと作曲の訓練を受けた。1990年代半ばにSashaおよびJohn Digweedの北米ツアーとPaul OakenfoldのPerfectoレーベル経由で北米クラブ・サーキットに登場。デビュー作『IMA』（1995年、Perfecto／Reflectiveからリリース）は、クラシカルなインフレクションとサンプル密度の高いプロダクション・スタイル——長尺のアレンジメント、レイヤードなシンセ・パッド、ゴスペル・クワイヤのボーカル・サンプル——を導入し、当初から欧州トランスのコード＋リード型テンプレートから一歩離れた立ち位置を取った。

カタログは『ESCM』（1997、BT＆Paul van Dyk共同制作のシングル「Flaming June」——UK #19、PvDリミックスとして誤伝されることが多い——を収録）、『Movement in Still Life』（1999）、『Emotional Technology』（2003）、『These Hopeful Machines』（2010——第53回グラミー賞Best Electronic/Dance Album部門にノミネート）と続く。アーティスト・アルバム以外でも、ハリウッド映画（『The Fast and the Furious』『Stealth』『Monster』）のスコアを手がけ、Madonna、Sting、*NSYNC（「Pop」）のプロデュースを担当、2019年1月18日にはChristian BurnsとのAll Hail the Silenceプロジェクトでアルバム『Daggers』をリリース——信号系統にコンピュータを介さず、モジュラー・シンセからテープに直接録音されたシンセポップ作品である。

彼に最も結び付けられる技法——「スタッター・エディット」、現代のポップおよびEDMプロダクションで標準化された粒状ゲート反復のボーカル・チョップ・トリック——は、通常の「BTが発明した」というフレーミングが示唆するより精密にソース確認される必要がある。BTはリアルタイム・デジタル・オーディオ操作の基盤手法について複数の特許を保有し、自身のソフトウェア会社Sonik Architectsを通じて完成商用プラグインとして実装。iZotopeは2010年12月にSonik Architectsを買収し、Stutter Editプラグインは2011年Winter NAMMでiZotope／BT製品として公開出荷、Stutter Edit 2は2020年に続いた。技法自体は可聴な痕跡として、プラグイン名称以前にBT自身の『ESCM』および『Movement in Still Life』のプロダクションに既に存在していた。

オペレーター・ノート：多くの「プロデューサーズ・プロデューサー」評価は抽象的だ——エンジニアリングが重要だという話を信頼ベースで受け取る必要がある。BTの場合それは直接可聴だ：『ESCM』や『Movement in Still Life』からどのトラックでも取り出して2026年のメインステージ・トランス・セットに置けば、オーケストラ・レイヤリング、粒状ボーカル・チョップ、ステレオ・フィールド全体のサンプル密度が、ArminやAndrew Rayelのプログラミングとは別系譜のように響く。オペレーターがBTに聴き取れて他では聴き取れないのは、トランス・メインストリーム以前のオーケストラと電子テクスチャの統合——Andrew Bayerのカタログを貫くのと同じ本能だが、BTは1997年にバークリーの作曲背景からそれをやっていた、「メロディック・プログレッシブ」というラベルが存在する前に。スタッター・エディット系譜は副次的な物語であり、主要な物語は、現代のAnjunaの作曲家主導美学全体がメリーランド経由ボストン発のソース・コードを持っているということだ。`,
    },
    mentionedIn: ['bt-stutter-edit-changed-music-tech', 'history-of-trance-music', 'art-of-trance-buildup-production-secrets', 'essential-vst-plugins-trance-production', 'iconic-trance-anthems-that-defined-an-era'],
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
    origin: 'Fleurier, Switzerland (raised in Fagagna, Italy)',
    born: '1969',
    activeFrom: '1994',
    labels: ['DBX Records', 'Platipus Records', 'Deconstruction', 'S:alt Records'],
    topWorks: [
      { title: 'Children', year: 1995, type: 'track' },
      { title: 'Dreamland', year: 1996, type: 'album' },
      { title: 'Fable', year: 1996, type: 'track' },
      { title: 'One and One (with Maria Nayler)', year: 1996, type: 'track' },
      { title: '23am', year: 1997, type: 'album' },
      { title: 'Organik', year: 2001, type: 'album' },
      { title: 'Thirteen', year: 2011, type: 'album' },
    ],
    related: ['atb', 'paul-van-dyk', 'tiesto', 'ferry-corsten', 'gigi-dagostino', 'bt'],
    links: {
      spotify: 'https://open.spotify.com/artist/2YVF0Ou5zIc4mpgtLIlGN0',
      beatport: 'https://www.beatport.com/search?q=Robert+Miles',
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
      en: `Roberto Concina — known to the world as Robert Miles — was born on 3 November 1969 in Fleurier, Switzerland to Italian parents, and moved as a young boy to Fagagna, a small town in the Friuli region of northern Italy roughly 100 km from Venice. He worked the late-1980s Italian club circuit as a DJ before turning to production, and the track that defined his career began life in 1993 in his home studio: a piano-led, slow-tempo instrumental designed for the very specific job of ending DJ sets.

"Children" was first released in January 1995 in Italy on Joe T. Vanelli's DBX label as part of the four-track Soundtracks EP — an initial pressing that moved only around 3,000 copies. Through Vanelli, Simon Berry of UK label Platipus Records heard the track in Miami and picked it up; Platipus issued the international 12-inch in November 1995, and the licence then passed to Deconstruction for the major-label release that hit #1 across more than a dozen countries in early 1996 and sold over five million copies worldwide. The debut album Dreamland (1996) — including "Fable" and the Maria Nayler vocal "One and One" — went on to global platinum status, and effectively founded the "dream trance" subgenre.

Miles was explicit in interviews about the origin story. He pointed to two inspirations: photographs of child victims of the Balkans war his father brought back from an aid mission in Yugoslavia, and what Italian press called the strage di sabato sera — the regular weekend death toll of young clubbers driving home from Italian raves. "Children" was designed as a closing record to bring crowds down before the drive home. After Dreamland he moved away from the chart-pop frame: 23am (1997) opened the catalogue toward live instruments and worldier textures, Organik (2001) was an ambient/world-influenced album with Bill Laswell among the collaborators, and his final solo record Thirteen (2011) came out on his own S:alt imprint as a blend of ambient electronics, alternative rock, and progressive-rock instrumentation. From 2013 he ran OpenLab.fm, an Ibiza-based radio station and arts platform dedicated to ambient, IDM, and experimental electronic music. He died of stage-four metastatic cancer in Ibiza on 9 May 2017, aged 47.

Operator's note. The operator came into trance via Armin's Tomorrowland 2018 mainstage, so the dream-trance lineage gets approached backwards — through later uplifting that quietly cites it. What "Children" still does in 2026 that almost nothing else in the catalogue does is hand the entire emotional weight of the track to a single melancholic piano line over a slow 4/4, with no drop in the modern sense and no vocal. Drop it into a Sun & Moon-era ASOT rebroadcast and the piano-as-lead instinct that runs through twenty years of trance breakdowns suddenly has a single visible source. Miles' later move to S:alt and OpenLab makes more sense from this end too — once the trick has been done, repeating it would have cheapened it, so he stopped.`,
      ja: `ロベルト・コンチーナ——世界中でロバート・マイルズの名で知られる——は1969年11月3日、スイスのフルーリエでイタリア人の両親のもとに生まれ、幼少期に北イタリア・フリウリ地方の小さな町ファガーニャ（ヴェネツィアから約100km）に移住した。1980年代後半からイタリアのクラブ・サーキットでDJとして活動した後プロダクションへ移行。彼のキャリアを定義することになるトラックは1993年に自宅スタジオで生まれた——ピアノを主軸とするスロー・テンポのインストゥルメンタル、DJセットを締めくくるという極めて具体的な目的のために設計された曲である。

「Children」はまず1995年1月、Joe T. VanelliのDBXレーベルから4曲入りEP『Soundtracks』の一部としてイタリアでリリースされた——初回プレスはおよそ3,000枚に留まる地味なスタートだった。Vanelli経由でUKレーベルPlatipus RecordsのSimon Berryがマイアミでこの曲を耳にし買い付け、Platipusは1995年11月にインターナショナル12インチを発売、その後ライセンスがDeconstructionに渡り1996年初頭のメジャー・リリースで12カ国以上の1位を獲得、全世界で500万枚以上を売り上げた。デビュー・アルバム『Dreamland』（1996）——「Fable」とMaria Nayler参加の「One and One」を含む——はワールドワイドでプラチナ級の成功を収め、「ドリーム・トランス」というサブジャンルを事実上創設した。

マイルズは曲の起源についてインタビューで明確に語っている。インスピレーション源は二つ——父親がユーゴスラビアの人道支援ミッションから持ち帰ったバルカン戦争の児童被害者の写真、そしてイタリアの新聞が strage di sabato sera と呼んだ問題——イタリア・レイブから帰宅する若者の週末の交通事故死である。「Children」はセットを締めくくり、運転前に観客のテンションを落とすためのクロージング・レコードとして設計された。『Dreamland』以降は彼はチャート・ポップの枠組みから離れる：『23am』（1997）はカタログを生楽器とよりワールドな質感へ開き、『Organik』（2001）はBill Laswellをはじめとする共演陣を迎えたアンビエント／ワールド色の濃いアルバム、そして最後のソロ作『Thirteen』（2011）は彼自身のS:altインプリントからアンビエント・エレクトロニクス、オルタナティブ・ロック、プログレッシブ・ロック楽器の混合作としてリリースされた。2013年からはイビザを拠点にアンビエント、IDM、実験的電子音楽専門のラジオ局兼アート・プラットフォームOpenLab.fmを運営。2017年5月9日、イビザでステージ4の転移性がんにより47歳で死去した。

オペレーター・ノート：オペレーターはArminの2018年Tomorrowlandメインステージからトランスに入っているため、ドリーム・トランス系譜は逆向きに——それを密かに引用する後のアップリフティングを通じて——接近されることになる。「Children」が2026年現在も他のほぼあらゆるカタログでは出来ない仕事をしているのは、トラックの感情的重量の全てを、スロー4/4の上のメランコリックなピアノ・ライン一本に委ねている点だ——現代的な意味のドロップもボーカルもない。Sun & Moon時代のASOT再放送に投下すれば、20年分のトランス・ブレイクダウンを貫く「リードとしてのピアノ」の本能に唯一の可視的なソースが現れる。マイルズが後年S:altとOpenLabに移ったことも、この側から見るとより筋が通る——あのトリックは既に完遂されていて、繰り返せば安く見えるから、彼は止めたのだ。`,
    },
    mentionedIn: ['iconic-trance-anthems-that-defined-an-era', 'history-of-trance-music', 'best-trance-tracks-1990s', 'what-is-dream-trance', 'best-trance-tracks-of-all-time-100'],
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
      website: 'https://atb-music.com/',
      soundcloud: 'https://soundcloud.com/atb-music',
      spotify: 'https://open.spotify.com/artist/7jZM5w05mGhw6wTB1okhD9',
      beatport: 'https://www.beatport.com/search?q=ATB',
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
    labels: ['Magik Muzik', 'High Contrast Recordings'],
    topWorks: [
      { title: 'Airwave', year: 1999, type: 'track' },
      { title: 'Awakening', year: 2001, type: 'track' },
      { title: 'And Then', year: 2008, type: 'track' },
      { title: 'L.E.D. There Be Light', year: 2008, type: 'track' },
      { title: 'Symfo', year: 2009, type: 'track' },
    ],
    related: ['armin-van-buuren', 'tiesto', 'ferry-corsten', 'atb'],
    links: {
      soundcloud: 'https://soundcloud.com/rank1official',
      spotify: 'https://open.spotify.com/artist/1eQe86RbDKRIiGZk08r9YJ',
      beatport: 'https://www.beatport.com/search?q=Rank+1',
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
      { title: 'The Legacy', year: 2001, type: 'track' },
      { title: 'Tranceformation', year: 2003, type: 'track' },
    ],
    related: ['rank-1', 'paul-van-dyk', 'ferry-corsten', 'armin-van-buuren'],
    links: {
      spotify: 'https://open.spotify.com/artist/2Xy6YLSsHR6TdBUFm5bnLR',
      beatport: 'https://www.beatport.com/search?q=Push',
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
      en: `Mike Dierickx — best known as Push and M.I.K.E. Push — is one of Belgium's most prolific trance producers. Born in 1973, he started releasing on Bonzai Records in the mid-90s and broke through in 1998 with "Universal Nation," whose unmistakable 138-BPM melodic build made it one of the most-played trance records of all time. The track has been a peak-time fixture for over twenty-five years and has been re-released, remixed, and reworked countless times.

Beyond Push, Dierickx has released over 200 records under aliases including M.I.K.E., Plastic Boy, DJ Solar Stone (no relation to Solarstone), and others. He is closely associated with Bonzai Trance Progressive and Armada and has remained an active producer and DJ for nearly three decades. Among Belgian trance acts, only Yves Deruyter rivals him for catalogue depth.`,
      ja: `マイク・ディエリックス——Push、M.I.K.E. Pushの名で知られる——はベルギーで最も多作なトランス・プロデューサーの一人。1973年生まれ、90年代半ばにBonzai Recordsからリリースを開始し、1998年の「Universal Nation」で大ブレイク。その特徴的な138 BPMのメロディック・ビルドは史上最も再生されたトランス・トラックの一つとなった。同曲は25年以上ピークタイムの定番であり続け、再リリース・リミックスを繰り返し続けている。

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
    activeFrom: '1984',
    labels: ['BXR', 'Media Records', 'Bakerloo Music', 'Alchemy Records'],
    topWorks: [
      { title: 'Lizard (Gonna Get You)', year: 1998, type: 'track' },
      { title: 'Iguana', year: 1999, type: 'track' },
      { title: 'Komodo (Save a Soul)', year: 2000, type: 'track' },
      { title: 'Pulsar', year: 2000, type: 'track' },
      { title: 'Like This Like That', year: 2001, type: 'track' },
      { title: 'Meganite (event series)', year: '2003–', type: 'event' },
    ],
    related: ['gigi-dagostino', 'push', 'paul-van-dyk', 'tiesto', 'rank-1', 'armin-van-buuren'],
    links: {
      soundcloud: 'https://soundcloud.com/mauro_picotto',
      spotify: 'https://open.spotify.com/artist/0MNSDAOCHF7f2ZfAYxZ9bp',
      beatport: 'https://www.beatport.com/search?q=Mauro+Picotto',
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
      en: `Mauro Picotto was born on 25 December 1966 in Cavour, near Turin in northern Italy, into a family of stonemasons and dancers — his father's CRW mason's yard later gave him a trance-side alias. He started DJing in 1984 and came up through the Italian Euro-house group R.A.F. before joining Gianfranco Bortolotti's Media Records as a producer. In 1996 Bortolotti made him a Media partner, and "Bakerloo Symphony" hit #1 in Italy for eight consecutive weeks — the breakthrough that set up the BXR sub-label run.

The "reptilian trilogy" is the spine of the catalogue. "Lizard (Gonna Get You)" came first, released on BXR (cat. 1048) in 1998 — Picotto has said he first dropped it on acetate at Ultimo Impero on 7 December 1997, and the released version hit the UK top 30, anchored that year's Gatecrasher rotation, and turned the sliding-arpeggio synth into a permanent fixture of Italian hard trance. "Iguana" followed on BXR 1078 in 1999 (UK #39), and "Komodo (Save a Soul)" landed on BXR 1094 on 16 May 2000 — the UK #13 placing remains his highest solo chart position. "Pulsar" (2000) and "Like This Like That" (2001) extended the run into the early 2000s. He left Media Records in 2002 to launch Bakerloo Music and the Alchemy Records imprint (founded with Riccardo Ferri in 2003) and started the Meganite event brand the same year — a club-party platform that ran for years across Cocoricò Riccione, Ibiza, Miami, and across the global super-club circuit.

Picotto continues to release through Alchemy and Bakerloo in 2026 and is regularly booked across the techno-revival mainstage that has rediscovered the percussive hard-trance / techno bridge his late-90s catalogue helped engineer.

Operator's note. The operator came into trance through Armin's mainstage at Tomorrowland 2018, so Picotto is a backwards discovery — the kind of name you hit when you start asking why the kick on certain late-90s ASOT classics has that specific Italian-club thump rather than the cleaner Dutch attack. "Komodo" lives next to Push's "Universal Nation" in the operator's playlists, and what makes it land in 2026 is that the sliding-arpeggio lead has nothing to do with the chord-pad-and-vocal palette that dominates modern trance — it's pure percussive, mainstage-Italian energy, and hearing it back-to-back with a contemporary uplifting set is the cleanest reminder of what the genre lost (and is now selectively recovering through the techno-revival crossover) when the late-2000s vocal-uplifting wave took over.`,
      ja: `マウロ・ピコットは1966年12月25日、北イタリア・トリノ近郊カヴール生まれ。石工とダンサーの家系で、父が経営した石工所CRWの名は後にピコットのトランス・サイドプロジェクトのエイリアスとなった。1984年からDJを開始し、イタリアのユーロハウス・グループR.A.F.（「Self Control」やマドンナ作と紐づく「Like a Prayer」リワーク群）を経てGianfranco BortolottiのMedia Recordsにプロデューサーとして加入。1996年にはBortolottiが彼をMedia Recordsグループのパートナーに迎え、同年「Bakerloo Symphony」が8週連続イタリア1位を記録——これがその後のBXRサブレーベル展開の起点となった。

「レプタイル三部作」はこのカタログの背骨だ。「Lizard (Gonna Get You)」はBXR（cat. 1048）から1998年にリリース——ピコット本人によれば1997年12月7日にUltimo Imperoでアセテートを初投下、UKトップ30入りし、同年Gatecrasherのローテーションを牽引、スライドするアルペジオ・シンセをイタリアン・ハード・トランスの定型として定着させた。「Iguana」がBXR 1078で1999年に続き（UK #39）、「Komodo (Save a Soul)」はBXR 1094で2000年5月16日にリリース——UK #13は彼のソロ・キャリア最高位として残っている。「Pulsar」（2000）、「Like This Like That」（2001）でこの流れは2000年代初頭まで延長された。2002年にMedia Recordsを離脱、Bakerloo Musicを立ち上げ、2003年にはRiccardo Ferriと共にAlchemy Recordsを設立、同年Meganiteイベント・ブランドも開始——Cocoricò Riccione、Ibiza、Miamiをはじめ世界のスーパークラブ・サーキットで長期展開した。

2026年現在もAlchemyおよびBakerlooからリリースを継続しており、ピコットの90年代末カタログが構築に貢献したパーカッシブなハード・トランス／テクノ橋脚を再発見しつつあるテクノ・リバイバル・メインステージで定常的にブッキングされている。同世代のイタリア電子音楽輸出においてトランス主流時代のチャート規模で彼に肩を並べるのはRobert Miles、Gigi D'Agostino、そしてMedia同僚のGigiのみである。

オペレーター・ノート：オペレーターは2018年TomorrowlandのArminメインステージからトランスに入っているため、ピコットは後付けの発見だ——90年代末のASOTクラシックの一部に乗るキックの「特定のイタリアン・クラブ的なドン」が、なぜクリーンなダッチ・アタックではないのかを問い始めた時にぶつかる名前。「Komodo」はオペレーターのプレイリストでPushの「Universal Nation」やBXR Mediaカタログの隣に位置し、2026年に響くのは、スライドするアルペジオ・リードが現代トランスを支配するコード・パッド＋ボーカルのメロディック・パレットと一切関係ない、純粋にパーカッシブなメインステージ・イタリアン・エナジーだから——現代のアップリフティング・セットと交互に聴くことが、ジャンルが2000年代末ボーカル・アップリフティング波で失った（そして今テクノ・リバイバル・クロスオーバーを通じて選択的に回復しつつある）ものへの最もクリアなリマインダーとなる。`,
    },
    mentionedIn: ['history-of-trance-music', 'iconic-trance-anthems-that-defined-an-era', 'best-trance-tracks-1990s', 'defining-trance-anthems-2000s', 'why-trance-music-endures'],
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
      spotify: 'https://open.spotify.com/artist/1OAjDaKgg00KCUYqDe68un',
      beatport: 'https://www.beatport.com/search?q=Gigi+D%27Agostino',
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

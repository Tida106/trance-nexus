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

The technique most often associated with him — the "stutter edit," the granular gated-repeat vocal-chop trick now standard across pop and EDM — is more precisely sourced than the usual "BT invented it" framing suggests. BT holds patents on the underlying real-time digital-audio manipulation method and built the technique into a commercial plugin via his company Sonik Architects; iZotope acquired Sonik Architects in December 2010, and the Stutter Edit plugin shipped at Winter NAMM 2011 as an iZotope / BT product (Stutter Edit 2 followed in 2020). The technique as audible artifact predates the plugin name across ESCM and Movement in Still Life.`,
      ja: `ブライアン・ウェイン・トランソー——アーティスト名BT——は1971年10月4日メリーランド州ロックヴィル生まれ。バークリー音楽大学でシンセシスと作曲の訓練を受けた。1990年代半ばにSashaおよびJohn Digweedの北米ツアーとPaul OakenfoldのPerfectoレーベル経由で北米クラブ・サーキットに登場。デビュー作『IMA』（1995年、Perfecto／Reflectiveからリリース）は、クラシカルなインフレクションとサンプル密度の高いプロダクション・スタイル——長尺のアレンジメント、レイヤードなシンセ・パッド、ゴスペル・クワイヤのボーカル・サンプル——を導入し、当初から欧州トランスのコード＋リード型テンプレートから一歩離れた立ち位置を取った。

カタログは『ESCM』（1997、BT＆Paul van Dyk共同制作のシングル「Flaming June」——UK #19、PvDリミックスとして誤伝されることが多い——を収録）、『Movement in Still Life』（1999）、『Emotional Technology』（2003）、『These Hopeful Machines』（2010——第53回グラミー賞Best Electronic/Dance Album部門にノミネート）と続く。アーティスト・アルバム以外でも、ハリウッド映画（『The Fast and the Furious』『Stealth』『Monster』）のスコアを手がけ、Madonna、Sting、*NSYNC（「Pop」）のプロデュースを担当、2019年1月18日にはChristian BurnsとのAll Hail the Silenceプロジェクトでアルバム『Daggers』をリリース——信号系統にコンピュータを介さず、モジュラー・シンセからテープに直接録音されたシンセポップ作品である。

彼に最も結び付けられる技法——「スタッター・エディット」、現代のポップおよびEDMプロダクションで標準化された粒状ゲート反復のボーカル・チョップ・トリック——は、通常の「BTが発明した」というフレーミングが示唆するより精密にソース確認される必要がある。BTはリアルタイム・デジタル・オーディオ操作の基盤手法について複数の特許を保有し、自身のソフトウェア会社Sonik Architectsを通じて完成商用プラグインとして実装。iZotopeは2010年12月にSonik Architectsを買収し、Stutter Editプラグインは2011年Winter NAMMでiZotope／BT製品として公開出荷、Stutter Edit 2は2020年に続いた。技法自体は可聴な痕跡として、プラグイン名称以前にBT自身の『ESCM』および『Movement in Still Life』のプロダクションに既に存在していた。`,
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

Miles was explicit in interviews about the origin story. He pointed to two inspirations: photographs of child victims of the Balkans war his father brought back from an aid mission in Yugoslavia, and what Italian press called the strage di sabato sera — the regular weekend death toll of young clubbers driving home from Italian raves. "Children" was designed as a closing record to bring crowds down before the drive home. After Dreamland he moved away from the chart-pop frame: 23am (1997) opened the catalogue toward live instruments and worldier textures, Organik (2001) was an ambient/world-influenced album with Bill Laswell among the collaborators, and his final solo record Thirteen (2011) came out on his own S:alt imprint as a blend of ambient electronics, alternative rock, and progressive-rock instrumentation. From 2013 he ran OpenLab.fm, an Ibiza-based radio station and arts platform dedicated to ambient, IDM, and experimental electronic music. He died of stage-four metastatic cancer in Ibiza on 9 May 2017, aged 47.`,
      ja: `ロベルト・コンチーナ——世界中でロバート・マイルズの名で知られる——は1969年11月3日、スイスのフルーリエでイタリア人の両親のもとに生まれ、幼少期に北イタリア・フリウリ地方の小さな町ファガーニャ（ヴェネツィアから約100km）に移住した。1980年代後半からイタリアのクラブ・サーキットでDJとして活動した後プロダクションへ移行。彼のキャリアを定義することになるトラックは1993年に自宅スタジオで生まれた——ピアノを主軸とするスロー・テンポのインストゥルメンタル、DJセットを締めくくるという極めて具体的な目的のために設計された曲である。

「Children」はまず1995年1月、Joe T. VanelliのDBXレーベルから4曲入りEP『Soundtracks』の一部としてイタリアでリリースされた——初回プレスはおよそ3,000枚に留まる地味なスタートだった。Vanelli経由でUKレーベルPlatipus RecordsのSimon Berryがマイアミでこの曲を耳にし買い付け、Platipusは1995年11月にインターナショナル12インチを発売、その後ライセンスがDeconstructionに渡り1996年初頭のメジャー・リリースで12カ国以上の1位を獲得、全世界で500万枚以上を売り上げた。デビュー・アルバム『Dreamland』（1996）——「Fable」とMaria Nayler参加の「One and One」を含む——はワールドワイドでプラチナ級の成功を収め、「ドリーム・トランス」というサブジャンルを事実上創設した。

マイルズは曲の起源についてインタビューで明確に語っている。インスピレーション源は二つ——父親がユーゴスラビアの人道支援ミッションから持ち帰ったバルカン戦争の児童被害者の写真、そしてイタリアの新聞が strage di sabato sera と呼んだ問題——イタリア・レイブから帰宅する若者の週末の交通事故死である。「Children」はセットを締めくくり、運転前に観客のテンションを落とすためのクロージング・レコードとして設計された。『Dreamland』以降は彼はチャート・ポップの枠組みから離れる：『23am』（1997）はカタログを生楽器とよりワールドな質感へ開き、『Organik』（2001）はBill Laswellをはじめとする共演陣を迎えたアンビエント／ワールド色の濃いアルバム、そして最後のソロ作『Thirteen』（2011）は彼自身のS:altインプリントからアンビエント・エレクトロニクス、オルタナティブ・ロック、プログレッシブ・ロック楽器の混合作としてリリースされた。2013年からはイビザを拠点にアンビエント、IDM、実験的電子音楽専門のラジオ局兼アート・プラットフォームOpenLab.fmを運営。2017年5月9日、イビザでステージ4の転移性がんにより47歳で死去した。`,
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
    activeFrom: '1993',
    labels: ['Kontor Records', 'Radikal Records', 'Sony Music', 'Black Hole Recordings'],
    topWorks: [
      { title: '9 PM (Till I Come)', year: 1998, type: 'track' },
      { title: 'Movin\' Melodies', year: 1999, type: 'album' },
      { title: 'Killer (Adamski/Seal cover)', year: 1999, type: 'track' },
      { title: 'Two Worlds', year: 2000, type: 'album' },
      { title: 'Dedicated', year: 2002, type: 'album' },
      { title: 'No Silence', year: 2004, type: 'album' },
      { title: 'Trilogy', year: 2007, type: 'album' },
      { title: 'Your Love (9PM) (with Topic & A7S)', year: 2021, type: 'track' },
    ],
    related: ['paul-van-dyk', 'robert-miles', 'tiesto', 'ferry-corsten', 'armin-van-buuren', 'gigi-dagostino'],
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
      en: `André Tanneberger — better known by the initials ATB — was born on 26 February 1973 in Freiberg, in what was then East Germany. His parents moved the family west in 1984, and in the late 1980s the teenage Tanneberger began frequenting the Tarm Center club in Bochum, where DJ Thomas Kukula (General Base) was an early influence. His first production project, Sequential One — named after the Sequential Pro One synth he was working on — released the debut single "Let Me Hear You" in February 1993 and ran across two albums through 1998 before the lineup dissolved.

The solo ATB project launched at the very end of 1998 with "9 PM (Till I Come)," released by Kontor Records in Germany on 26 October 1998 (and through Radikal Records in North America). The lead synth — an unmistakable rapid-pluck riff that pop history tends to remember as an acoustic guitar — went to #1 on the UK Singles Chart and the Irish Singles Chart and into the top ten across Australia, Italy, Norway, Denmark and Greece. It established the post-"Children" template for melodic-trance crossover: warm, mid-tempo, instantly hummable, and engineered to live on daytime radio as comfortably as a club closing slot. The debut album Movin' Melodies (1999) extended it with "Don't Stop!" and a trance reworking of Adamski & Seal's "Killer."

ATB's catalogue is unusually deep for a producer most casual listeners know through one track. Two Worlds (2000) used a double-CD club / chillout split that became a personal format; Dedicated (2002), Addicted to Music (2003), No Silence (2004), and the seven-album Trilogy / Future Memories arc carried him through the 2000s as a fixture of DJ Mag's Top 100. He runs his own ATB Studio operation and Sony / Kontor distribution; the 2021 collaboration "Your Love (9PM)" with Topic and A7S reactivated the original "9 PM" hook and entered the top ten in eighteen countries, returning him to global charts twenty-three years after the source single.`,
      ja: `アンドレ・タンネベルガー——ATBの頭文字で知られる——は1973年2月26日、当時の東ドイツ・フライベルクで生まれた。一家は1984年に西ドイツへ移住、80年代後半に十代のタンネベルガーはボーフムのクラブTarm Centerに通い始め、DJ Thomas Kukula（General Base）から早期の影響を受けた。最初のプロダクション・プロジェクト、Sequential One——彼が当時使用していたSequential Pro Oneシンセに因んで命名——は1993年2月にデビュー・シングル「Let Me Hear You」をリリース、2枚のアルバムを通じて1998年までラインナップを維持した後解散した。

ソロ名義のATBプロジェクトは1998年末に立ち上がり、「9 PM (Till I Come)」がドイツのKontor Recordsから1998年10月26日にリリースされた（北米はRadikal Records経由）。ポップ史が「アコースティック・ギター」として記憶しがちなあの誤認されやすい高速プラック・リードは、UKシングル・チャートおよびアイルランド・シングル・チャートで1位を獲得し、オーストラリア、イタリア、ノルウェー、デンマーク、ギリシャでトップ10入り。「Children」以後のメロディック・トランス・クロスオーバーの定型を確立した——暖かく、ミッド・テンポで、瞬時にハミングできて、クラブの締めくくり枠と同じくらい違和感なく昼間のラジオに居れるよう設計されている。デビュー・アルバム『Movin' Melodies』（1999）は「Don't Stop!」とAdamski & Seal「Killer」のトランス・リワークでこの方向性を拡張した。

ATBのカタログはカジュアルなリスナーが1曲だけ知るタイプのプロデューサーとしては異例に深い。『Two Worlds』（2000）はクラブ／チルアウトの2枚組という個人的フォーマットを採用、『Dedicated』（2002）、『Addicted to Music』（2003）、『No Silence』（2004）、そして7枚にわたる『Trilogy』／『Future Memories』のアーク全体を通じて、彼はDJ Mag Top 100の常連として2000年代を駆け抜けた。自身のATB Studioを運営しSony／Kontorの流通体制を持ち、2021年のTopicおよびA7Sとの共作「Your Love (9PM)」は原曲のフックを再起動して18カ国でトップ10入り、原曲リリースから23年後のグローバル・チャート復帰を果たした。`,
    },
    mentionedIn: ['history-of-trance-music', 'iconic-trance-anthems-that-defined-an-era', 'best-trance-tracks-1990s', 'defining-trance-anthems-2000s', 'iconic-trance-vocalists-voices-behind-anthems'],
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
    activeFrom: '1999',
    labels: ['Magik Muzik', 'High Contrast Recordings', 'Black Hole Recordings'],
    topWorks: [
      { title: 'Airwave', year: 1999, type: 'track' },
      { title: 'Sensation Anthem 2003', year: 2003, type: 'track' },
      { title: 'Beats At Rank-1 Dotcom (Trance Energy 2005 anthem)', year: 2004, type: 'track' },
      { title: 'And Then (with Jochen Miller)', year: 2008, type: 'track' },
      { title: 'L.E.D. There Be Light (Trance Energy 2009 anthem)', year: 2008, type: 'track' },
      { title: 'Symfo (Sunrise Festival 2009 anthem)', year: 2009, type: 'track' },
    ],
    related: ['armin-van-buuren', 'tiesto', 'ferry-corsten', 'atb', 'paul-van-dyk', 'push'],
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
      en: `Rank 1 is the Dutch production duo of Piet Bervoets and Benno de Goeij. The two had been working together since 1997, but the Rank 1 name was launched in 1999 — and "Airwave," released that year, is the track that defined them. Built around a clean, ascending plucked-synth lead over a euphoric four-bar build, "Airwave" became the first Dutch dance track to top the European Dance Chart, reached the UK top ten, and was licensed in over forty countries within twelve months. It has been re-voted as the all-time #1 track in multiple subsequent Trance Top 1000 community polls, and it remains the textbook example of the Dutch Anthem Trance template.

The rest of the catalogue sits in close orbit around festival event-anthem commissions. "Sensation Anthem 2003" was the official theme for ID&T's flagship event that year; "Beats At Rank-1 Dotcom" — a deliberate move toward a harder, more tech-trance register — was picked up as Trance Energy's 2005 theme; "L.E.D. There Be Light" became the Trance Energy 2009 anthem and was used in EDC's 2009 advertising; "Symfo" followed five months later as the Sunrise Festival 2009 theme. The duo released across Tiësto's Black Hole catalogue and the Magik Muzik / High Contrast imprints throughout the 2000s, and they were a recurring booking on A State of Trance Year-Mix tours and ASOT festival editions.

Benno de Goeij's parallel career adds another layer of context. From the late 2000s onward he became Armin van Buuren's principal in-studio co-producer, and from 2012 he was the second half of Armin's Gaia alias — a partnership that ran through the 2019 Moons of Jupiter album and continued until roughly 2023-24 (after which de Goeij stops appearing in the Armin singles credits). That means Rank 1's productions and Armin's mid-period studio output share half a brain, which goes a long way toward explaining the family resemblance between the two catalogues' melodic instinct.`,
      ja: `Rank 1はオランダのプロデューサー・デュオ、Piet BervoetsとBenno de Goeijによるユニット。二人は1997年から共同作業を続けていたが、Rank 1名義は1999年に立ち上がり——同年リリースの「Airwave」が彼らを定義した。ユーフォリックな4小節ビルドの上に立ち上がるクリーンなプラック・シンセ・リードを軸にした「Airwave」は欧州ダンス・チャートのトップに上り詰めた史上初のダッチ・ダンス・トラックとなり、UKトップ10入りを果たし、12ヶ月以内に40カ国以上でライセンスされた。その後のTrance Top 1000コミュニティ投票でも繰り返し1位に再選されており、ダッチ・アンセム・トランス・テンプレートの教科書事例として残っている。

カタログの残りはフェスティバル・イベント・アンセム委託の周囲を密接に周回する。「Sensation Anthem 2003」はその年のID&Tフラッグシップ・イベントの公式テーマとなり、「Beats At Rank-1 Dotcom」——よりハードでテック・トランス寄りのレジスターへ意図的に移動した作品——はTrance Energy 2005テーマに採用、「L.E.D. There Be Light」はTrance Energy 2009アンセム兼EDC 2009広告音源、「Symfo」は5ヶ月後にSunrise Festival 2009テーマとして続いた。2000年代を通じてTiëstoのBlack Holeカタログ、およびMagik Muzik／High Contrastインプリントからリリースし、A State of Trance Year-MixツアーとASOTフェスティバル版に定期的にブッキングされた。

Benno de Goeijの並行キャリアがさらにコンテキストを加える。2000年代末以降、彼はArmin van Buurenの主要なスタジオ共同プロデューサーとなり、2012年からはArminのGaia名義の片翼を担った——2019年アルバム『Moons of Jupiter』を経て、おおむね2023〜24年まで続いたパートナーシップである（その後de Goeijの名はArminのシングルのクレジットから消える）。つまりRank 1のプロダクションとArminの中期スタジオ作品は半分の脳を共有しており、両カタログのメロディック本能の家族的類似はこれで大方説明がつく。`,
    },
    mentionedIn: ['history-of-trance-music', 'iconic-trance-anthems-that-defined-an-era', 'a-state-of-trance-show-that-changed-everything', 'best-trance-tracks-1990s', 'defining-trance-anthems-2000s'],
  },

  {
    slug: 'push',
    name: 'Push',
    flag: '🇧🇪',
    emoji: '🔥',
    genre: 'UPLIFTING',
    banner: 'b-uplifting',
    tags: ['UPLIFTING', 'HARD TRANCE', 'BELGIAN', 'BONZAI', 'PURE TRANCE NEON'],
    realName: 'Mike Dierickx (born Dirk Dierickx; legally renamed 2000)',
    origin: 'Antwerp, Belgium',
    born: '1973',
    activeFrom: '1996',
    labels: ['Bonzai Records', 'Lightning Records (Bonzai)', 'Push Forward (own label)', 'Pure Trance NEON', 'FSOE', 'Filth on Acid', 'Armada Music', "ID&amp;T - High Contrast Recordings", 'Avex Records (Japan)'],
    topWorks: [
      { title: 'Universal Nation', year: 1998, type: 'track (Bonzai)' },
      { title: 'Strange World', year: 2000, type: 'track (Bonzai)' },
      { title: 'The Legacy', year: 2001, type: 'track (UK #22)' },
      { title: 'Tranceformation (vs. Globe)', year: 2003, type: 'track' },
      { title: 'Neon Life', year: 2020, type: 'album (Push Forward)' },
      { title: 'Scope', year: 2022, type: 'album' },
      { title: 'Back When We Believed', year: 2026, type: 'track (Pure Trance NEON)' },
    ],
    related: ['rank-1', 'paul-van-dyk', 'ferry-corsten', 'armin-van-buuren', 'solarstone'],
    links: {
      spotify: 'https://open.spotify.com/artist/2Xy6YLSsHR6TdBUFm5bnLR',
      beatport: 'https://www.beatport.com/search?q=Push',
    },
    sub: { en: 'Hard / Energy Trance', ja: 'ハード / エナジー・トランス' },
    short: {
      en: 'Antwerp-born Belgian producer (b. 1973) behind "Universal Nation" (Bonzai, 1998) — one of trance\'s most enduring anthems — operating across 85+ aliases including Push, M.I.K.E., M.I.K.E. Push, and Plastic Boy. Returned in March 2026 with "Back When We Believed" on Solarstone\'s Pure Trance NEON sub-label.',
      ja: '1973年アントワープ生まれのベルギー人プロデューサー。「Universal Nation」（Bonzai、1998）でトランス史上最も持続力のあるアンセムの一つを生み出した。Push、M.I.K.E.、M.I.K.E. Push、Plastic Boyなど85以上のエイリアスを使い分け、2026年3月にSolarstoneのPure Trance NEONサブレーベルから「Back When We Believed」で復帰した。',
    },
    style: {
      en: 'Hard, anthemic uplifting trance — driving 138-140 BPM grooves, soaring plucked-synth leads, and the kind of cathartic breakdowns built for the loudest hour of a long set. The Push alias is reserved for the most anthemic uplifting work; M.I.K.E. for darker, more techno-leaning material.',
      ja: 'ハードでアンセミックなアップリフティング・トランス——138〜140 BPMのドライヴィングなグルーヴ、舞い上がるプラック・シンセ・リード、長尺セットの最大音量タイムに向けたカタルシスあるブレイクダウン。Push名義は最もアンセミックなアップリフティング作品に取っておかれ、M.I.K.E.名義はよりダークでテクノ寄りの素材用となる。',
    },
    bio: {
      en: `Mike Dierickx — best known as Push and M.I.K.E. Push, born Dirk Dierickx in Antwerp on 20 February 1973 and legally renamed Mike Dierickx in 2000 — is one of the most prolific producers in Belgian trance history. He has released under more than eighty-five aliases across three decades, including Push, M.I.K.E., Plastic Boy, Absolute, Solar Factor, Return of the Native, and Cosmo Kid, with the Push alias reserved for his most anthemic uplifting work and M.I.K.E. for darker, more techno-leaning material.

His career changed in 1998 with "Universal Nation" on Bonzai Records — a 138 BPM melodic-build trance record whose plucked-lead motif became one of the most-played peak-time anthems in the genre's history and earned multiple dance music awards plus platinum status for 25,000+ vinyl units sold. "Strange World" followed on Bonzai in 2000, "The Legacy" charted at #22 in the UK in 2001, and "Tranceformation" with Globe in 2003 closed out his early canonical period. He has remixed Sinéad O'Connor, Moby, Armin van Buuren, Bomfunk MC's and Ayumi Hamasaki across the catalogue, sat as a key figure in the Bonzai Trance Progressive editorial line through the 2000s, and released across labels including ID&amp;T-High Contrast, Avex (Japan), Atom, Filth on Acid, FSOE, and Armada Music.

The 2020s have been productive rather than nostalgic. The Push Forward imprint became his primary label home, releasing the Neon Life album (2020), the Scope album (2022), and the Mark Sherry collaboration "Big Things Have Small Beginnings" (2022). His March 2026 single "Back When We Believed" on Solarstone's Pure Trance NEON sub-label marked a return to the long-form melodic-build template that defined the Universal Nation era, and is the lead single for the Known Universe album scheduled for summer 2026.`,
      ja: `マイク・ディエリックス——Push、M.I.K.E. Pushの名で知られ、本名Dirk Dierickxとして1973年2月20日アントワープに生まれ、2000年に法的にMike Dierickxへ改名——はベルギーのトランス史で最も多作なプロデューサーの一人。30年間にわたって85以上のエイリアスでリリースを行ってきた——Push、M.I.K.E.、Plastic Boy、Absolute、Solar Factor、Return of the Native、Cosmo Kidなど——Push名義は最もアンセミックなアップリフティング作品用、M.I.K.E.名義はよりダークでテクノ寄りの素材用に取っておかれる。

キャリアは1998年のBonzai Recordsからの「Universal Nation」で一変した——138 BPMのメロディック・ビルドのトランス・レコードで、そのプラック・リードのモチーフはジャンル史上最もプレイされたピークタイム・アンセムの一つとなり、複数のダンス・ミュージック・アワードを受賞、25,000枚以上のヴァイナル販売でプラチナ・ステータスを獲得した。2000年にBonzaiから「Strange World」が続き、「The Legacy」が2001年に英国チャート22位、「Tranceformation」（vs. Globe）が2003年に登場して初期の正典期を締めくくった。カタログを通じてSinéad O'Connor、Moby、Armin van Buuren、Bomfunk MC's、浜崎あゆみらのリミックスを手掛け、2000年代のBonzai Trance Progressive編集ラインのキー人物として位置し、ID&amp;T-High Contrast、Avex（日本）、Atom、Filth on Acid、FSOE、Armada Musicなどのレーベルからリリースした。

2020年代はノスタルジックではなく生産的な期間となった。Push Forwardインプリントが主要レーベル本拠地となり、アルバム『Neon Life』（2020）、『Scope』（2022）、Mark Sherryとの共作「Big Things Have Small Beginnings」（2022）をリリースした。2026年3月のシングル「Back When We Believed」はSolarstoneのPure Trance NEONサブレーベルから登場し、Universal Nation期を定義した長尺メロディック・ビルド・テンプレートへの回帰を印し、2026年夏予定のアルバム『Known Universe』のリード・シングルとなる。`,
    },
    mentionedIn: ['history-of-trance-music', 'iconic-trance-anthems-that-defined-an-era', 'best-trance-tracks-1990s', 'best-trance-tracks-march-2026', 'what-is-hard-trance'],
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

Picotto continues to release through Alchemy and Bakerloo in 2026 and is regularly booked across the techno-revival mainstage that has rediscovered the percussive hard-trance / techno bridge his late-90s catalogue helped engineer.`,
      ja: `マウロ・ピコットは1966年12月25日、北イタリア・トリノ近郊カヴール生まれ。石工とダンサーの家系で、父が経営した石工所CRWの名は後にピコットのトランス・サイドプロジェクトのエイリアスとなった。1984年からDJを開始し、イタリアのユーロハウス・グループR.A.F.（「Self Control」やマドンナ作と紐づく「Like a Prayer」リワーク群）を経てGianfranco BortolottiのMedia Recordsにプロデューサーとして加入。1996年にはBortolottiが彼をMedia Recordsグループのパートナーに迎え、同年「Bakerloo Symphony」が8週連続イタリア1位を記録——これがその後のBXRサブレーベル展開の起点となった。

「レプタイル三部作」はこのカタログの背骨だ。「Lizard (Gonna Get You)」はBXR（cat. 1048）から1998年にリリース——ピコット本人によれば1997年12月7日にUltimo Imperoでアセテートを初投下、UKトップ30入りし、同年Gatecrasherのローテーションを牽引、スライドするアルペジオ・シンセをイタリアン・ハード・トランスの定型として定着させた。「Iguana」がBXR 1078で1999年に続き（UK #39）、「Komodo (Save a Soul)」はBXR 1094で2000年5月16日にリリース——UK #13は彼のソロ・キャリア最高位として残っている。「Pulsar」（2000）、「Like This Like That」（2001）でこの流れは2000年代初頭まで延長された。2002年にMedia Recordsを離脱、Bakerloo Musicを立ち上げ、2003年にはRiccardo Ferriと共にAlchemy Recordsを設立、同年Meganiteイベント・ブランドも開始——Cocoricò Riccione、Ibiza、Miamiをはじめ世界のスーパークラブ・サーキットで長期展開した。

2026年現在もAlchemyおよびBakerlooからリリースを継続しており、ピコットの90年代末カタログが構築に貢献したパーカッシブなハード・トランス／テクノ橋脚を再発見しつつあるテクノ・リバイバル・メインステージで定常的にブッキングされている。同世代のイタリア電子音楽輸出においてトランス主流時代のチャート規模で彼に肩を並べるのはRobert Miles、Gigi D'Agostino、そしてMedia同僚のGigiのみである。`,
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
    tags: ['ITALODANCE', 'MEDITERRANEAN PROGRESSIVE', 'LENTO VIOLENTO', 'CLASSIC'],
    realName: 'Luigino Celestino Di Agostino',
    origin: 'Turin, Italy',
    born: '1967',
    activeFrom: '1986',
    labels: ['Media Records', 'BXR (Media Records)', 'Noise Maker (own label)', 'Noisemaker Hard (own label, founded 2006)', 'Time Records', 'Popron Music'],
    topWorks: [
      { title: 'Bla Bla Bla', year: 1999, type: 'track' },
      { title: 'Another Way', year: 1999, type: 'track' },
      { title: "L'Amour Toujours (I'll Fly with You)", year: 1999, type: 'track (1999 album; 2000 single)' },
      { title: 'The Riddle', year: 2000, type: 'track' },
      { title: 'La Passion', year: 2000, type: 'track' },
      { title: 'Super', year: 2001, type: 'track' },
      { title: 'Ripassa', year: 2003, type: 'track (Lento Violento)' },
      { title: 'In My Mind (with Dynoro)', year: 2018, type: 'track' },
      { title: 'Shadows of the Night (with Boostedkids)', year: 2024, type: 'track (Time Records)' },
    ],
    related: ['mauro-picotto', 'robert-miles', 'atb', 'paul-van-dyk'],
    links: {
      spotify: 'https://open.spotify.com/artist/1OAjDaKgg00KCUYqDe68un',
      beatport: 'https://www.beatport.com/search?q=Gigi+D%27Agostino',
    },
    sub: { en: 'Italodance / Mediterranean Progressive / Lento Violento', ja: 'イタロダンス / メディタレニアン・プログレッシブ / レント・ヴィオレント' },
    short: {
      en: "Italian icon whose 1999 album L'Amour Toujours and 1999 single \"Bla Bla Bla\" defined Mediterranean Progressive — and whose 2018 hook on Dynoro's \"In My Mind\" returned him to global streaming charts more than two decades after the original.",
      ja: '1999年のアルバム『L\'Amour Toujours』とシングル「Bla Bla Bla」でメディタレニアン・プログレッシブを定義したイタリアの象徴。オリジナルから20年以上を経て、2018年のDynoroによる「In My Mind」のフックとしてグローバル・ストリーミング・チャートに戻った。',
    },
    style: {
      en: 'Warm Mediterranean Progressive — slow-tempo emotional builds, plucked melodic leads, often with French- or English-language vocal samples. Later pioneered the "Lento Violento" slow-hard subgenre via "Ripassa" (2003) and his own Noisemaker Hard imprint (2006).',
      ja: '暖かなメディタレニアン・プログレッシブ——スロー・テンポの情緒的なビルド、プラックされたメロディック・リード、しばしばフランス語・英語のボーカル・サンプルを伴う。後年は「Ripassa」（2003）と自身のNoisemaker Hardインプリント（2006）を通じて「Lento Violento」スロー・ハード・サブジャンルを開拓した。',
    },
    bio: {
      en: `Gigi D'Agostino, born Luigino Celestino Di Agostino on 17 December 1967 in Turin to a Salernitan family, is one of the most commercially successful Italian electronic artists of all time and the architect of what he calls "Mediterranean Progressive" — slow-tempo, emotionally direct, melodic dance music descended from the Italian 1990s scene. He started DJing in the late 1980s and emerged as a producer through Media Records and its hard-trance sub-label BXR in the mid-1990s.

His commercial peak arrived at the turn of the millennium. "Bla Bla Bla" (1999) hit number one across continental Europe, and "L'Amour Toujours" (released on the 1999 album of the same name and as the "I'll Fly with You" single in 2000) became a generational anthem that has continued to surface in streaming charts more than a quarter-century after release — most recently as the sampled hook of Dynoro &amp; Gigi D'Agostino's "In My Mind" (2018), itself an international Spotify hit. Adjacent signatures from the same period — "Another Way" (1999), "The Riddle" (2000), "La Passion" (2000), "Super" (2001) — gave the catalogue an unusually high anthem density for a single producer.

D'Agostino is also credited with codifying "Lento Violento" (literally "slow violent"), a half-tempo subgenre that paired Mediterranean melodic instincts with hard-trance attitude, which he developed via tracks like "Ripassa" (2003) and his own Noisemaker Hard imprint (founded 2006).

A serious health issue removed him from public performance for over two years from roughly 2021. His return at the Sanremo Music Festival on 9 February 2024 — on the Costa Smeralda floating stage — was a national news event in Italy, followed by the Boostedkids collaboration "Shadows of the Night" (Time Records, 5 April 2024) and a return to the European touring circuit through the rest of the year.`,
      ja: `ジジ・ダゴスティーノ、本名Luigino Celestino Di Agostino、1967年12月17日トリノでサレルニターノ家庭に生まれる。イタリア電子音楽史上最も商業的に成功したアーティストの一人であり、彼が「メディタレニアン・プログレッシブ」と呼ぶ——スロー・テンポで情緒的、メロディックなダンス音楽、イタリア1990年代シーンから派生したスタイル——の建築家である。1980年代末にDJを始め、1990年代半ばにMedia Recordsおよびそのハード・トランス・サブレーベルBXRを通じてプロデューサーとして登場した。

商業的ピークは世紀の変わり目に訪れた。「Bla Bla Bla」（1999）は欧州大陸全域で1位に上り詰め、「L'Amour Toujours」（1999年の同名アルバムに収録、2000年に「I'll Fly with You」シングルとしてリリース）は世代的アンセムとなり、リリースから四半世紀以上を経てストリーミング・チャートに登場し続けている——直近では2018年のDynoro &amp; Gigi D'Agostino「In My Mind」（自体が国際的Spotifyヒット）のサンプリング・フックとして。同時期の隣接シグネチャー——「Another Way」（1999）、「The Riddle」（2000）、「La Passion」（2000）、「Super」（2001）——は単独プロデューサーとして異常に高いアンセム密度をカタログに与えた。

D'Agostinoはまた「Lento Violento」（直訳：スロー・バイオレント）——メディタレニアンなメロディック本能をハード・トランスの姿勢と組み合わせた半テンポのサブジャンル——の成文化者としてもクレジットされており、「Ripassa」（2003）のようなトラックと自身のNoisemaker Hardインプリント（2006年設立）を通じて発展させた。

深刻な健康問題が彼を2021年頃から2年以上にわたって公的パフォーマンスから引き離した。2024年2月9日のSanremo Music Festivalへの復帰——Costa Smeralda浮上ステージで——はイタリアでの全国ニュースとなり、続いてBoostedkidsとの共作「Shadows of the Night」（Time Records、2024年4月5日）、そして同年の残りを通じた欧州ツーリング・サーキットへの復帰が続いた。`,
    },
    mentionedIn: ['history-of-trance-music', 'iconic-trance-anthems-that-defined-an-era', 'best-trance-tracks-1990s', 'defining-trance-anthems-2000s'],
  },
];

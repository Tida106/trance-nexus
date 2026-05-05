// Batch 1 — Major labels
// Schema:
//   slug, name, flag, emoji, category, banner,
//   founded, hq, founders[], aliases[],
//   subgenres[], topReleases[{title, artist, year, type}],
//   related[label-slug], links{}, posts[blog-slug],
//   short:{en,ja}, bio:{en,ja}

export const majors = [
  {
    slug: 'armada-music',
    name: 'Armada Music',
    flag: '🇳🇱',
    emoji: '⚓',
    category: 'major',
    banner: 'b-uplifting',
    founded: '2003',
    hq: 'Amsterdam, Netherlands',
    founders: ['Armin van Buuren', 'Maykel Piron', 'David Lewis'],
    aliases: ['armada', 'armada records', 'armada digital'],
    subgenres: ['Uplifting', 'Progressive', 'Vocal Trance', 'Future House'],
    topReleases: [
      { title: 'A State of Trance compilations', artist: 'Armin van Buuren', year: '2004+', type: 'series' },
      { title: 'Sunny Days', artist: 'Armin van Buuren ft. Josh Cumbee', year: 2017, type: 'single' },
      { title: 'EIFORYA', artist: 'Armin van Buuren & Andrew Rayel', year: 2014, type: 'single' },
      { title: 'Find Your Harmony', artist: 'Andrew Rayel', year: 2014, type: 'album' },
      { title: 'In My Memory', artist: 'Tiësto', year: 2001, type: 'album' },
    ],
    related: ['anjunabeats', 'spinnin-records', 'black-hole-recordings', 'wao138', 'fsoe'],
    links: {
      website: 'https://www.armadamusic.com',
      beatport: 'https://www.beatport.com/label/armada-music/2393',
      spotify: 'https://open.spotify.com/user/armadamusicofficial',
      soundcloud: 'https://soundcloud.com/armadamusic',
    },
    short: {
      en: 'The world\'s largest independent dance music label — Armin van Buuren\'s home base and the parent organisation behind dozens of trance imprints.',
      ja: '世界最大の独立系ダンスミュージック・レーベル——Armin van Buurenの本拠地で、数十のトランス・サブレーベルを擁する親会社。',
    },
    bio: {
      en: `Armada Music was founded in 2003 by Armin van Buuren together with Maykel Piron and David Lewis — the name is an acronym of their first names (Armin, Maykel, David). Headquartered in Amsterdam, the label has grown over two decades into the world's largest independent dance music label, with a catalogue spanning trance, progressive, future house, deep house, and beyond. It distributes its own family of imprints (Armind, Armada Captivating, Armada Trice, WAO138?!, and many more) as well as serving as label and distribution partner for top trance brands.

Armada is the home of A State of Trance — both the radio show and the compilation series that has documented the genre quarter by quarter since 2004. Major artists who have called Armada home include Armin van Buuren himself, Andrew Rayel, Aly & Fila, Dash Berlin, Markus Schulz (via Coldharbour), Andrew Bayer, BT, and many more across the trance and electronic spectrum. The label has won the IDMA Best Global Label award multiple times and continues to be the genre's central commercial institution, processing thousands of releases annually across its imprint network.`,
      ja: `Armada Musicは2003年、Armin van Buurenが Maykel Piron、David Lewisと共に設立した——名称は3人のファーストネーム（Armin、Maykel、David）の頭文字を組み合わせた略語である。アムステルダムに本拠を置く同レーベルは、20年で世界最大の独立系ダンスミュージック・レーベルへと成長し、トランス、プログレッシブ、フューチャーハウス、ディープハウスまで広範なジャンルにわたるカタログを擁する。自社のサブレーベル群（Armind、Armada Captivating、Armada Trice、WAO138?! など多数）の配給を担うほか、主要トランス・ブランドのレーベル兼配給パートナーとしても機能している。

Armadaは「A State of Trance」——ラジオ番組と、2004年以降四半期ごとにジャンルを記録してきたコンピレーション・シリーズ——の本拠地でもある。Armin van Buuren本人、Andrew Rayel、Aly & Fila、Dash Berlin、Markus Schulz（Coldharbour経由）、Andrew Bayer、BTなど、トランスと電子音楽の各領域にわたる主要アーティストを抱えてきた。IDMA Best Global Label賞を複数回受賞し、サブレーベル・ネットワーク全体で年間数千件のリリースを処理する、ジャンルの中心的商業機関として今も機能している。`,
    },
    posts: ['armin-van-buuren-king-of-trance', 'a-state-of-trance-show-that-changed-everything', 'essential-trance-labels-2026'],
  },

  {
    slug: 'anjunabeats',
    name: 'Anjunabeats',
    flag: '🇬🇧',
    emoji: '🎼',
    category: 'major',
    banner: 'b-vocal',
    founded: '2000',
    hq: 'London, United Kingdom',
    founders: ['Above & Beyond (Jono Grant, Tony McGuinness, Paavo Siljamäki)'],
    aliases: ['anjuna', 'anjunabeats records'],
    subgenres: ['Vocal Trance', 'Progressive Trance', 'Melodic'],
    topReleases: [
      { title: 'Tri-State', artist: 'Above & Beyond', year: 2006, type: 'album' },
      { title: 'Group Therapy', artist: 'Above & Beyond', year: 2011, type: 'album' },
      { title: 'Sun & Moon', artist: 'Above & Beyond ft. Richard Bedford', year: 2011, type: 'single' },
      { title: 'In These Arms', artist: 'Andrew Bayer & Alison May', year: 2017, type: 'single' },
      { title: 'Anjunabeats Volume series', artist: 'Various / mixed by Above & Beyond', year: '2003+', type: 'series' },
    ],
    related: ['anjunadeep', 'armada-music', 'enhanced-music', 'pure-trance-recordings'],
    links: {
      website: 'https://www.anjunabeats.com',
      beatport: 'https://www.beatport.com/label/anjunabeats/4',
      spotify: 'https://open.spotify.com/user/anjunabeats',
      soundcloud: 'https://soundcloud.com/anjunabeats',
    },
    short: {
      en: 'Above & Beyond\'s legendary London label — the home of vocal/progressive trance and one of the most respected artist-run imprints in dance music.',
      ja: 'Above & Beyondが主宰するロンドンの伝説的レーベル——ボーカル／プログレッシブ・トランスの本拠地にして、ダンスミュージックで最も尊敬されるアーティスト主導のインプリントの一つ。',
    },
    bio: {
      en: `Anjunabeats was founded in 2000 by Above & Beyond — Jono Grant, Tony McGuinness, and Paavo Siljamäki — to release the trio's own remix of Madonna's "What It Feels Like for a Girl." That single record set the tone for what would become one of the most distinctive labels in dance music: songwriter-driven, emotionally intelligent vocal and progressive trance with a clear curatorial voice.

Over more than two decades, Anjunabeats has released the bulk of Above & Beyond's catalogue — including the Tri-State (2006), Group Therapy (2011), We Are All We Need (2015), and Common Ground (2018) albums — and signed key artists including Andrew Bayer, Mat Zo, Genix, ilan Bluestone, and Grum. The Anjunabeats Volume mix-compilation series has run continuously since 2003 and is one of the genre's longest-running release series. The label's annual Group Therapy festivals at the Gorge in Washington and Red Rocks in Colorado, along with weekly Group Therapy radio show episodes, have built an extraordinarily devoted global community. In 2005 the label spawned the deeper Anjunadeep imprint as a sister label.`,
      ja: `Anjunabeatsは2000年、Above & Beyond——Jono Grant、Tony McGuinness、Paavo Siljamäki——が、マドンナの「What It Feels Like for a Girl」のトリオによるリミックスをリリースするために設立した。その1枚のレコードが、ダンスミュージックで最も特徴的なレーベルの一つの方向性を定めた：ソングライター主導の、情緒的に知的なボーカル／プログレッシブ・トランスを、明確なキュレーション的視点で送り出すレーベルである。

20年超にわたり、Anjunabeatsはアルバム『Tri-State』（2006）、『Group Therapy』（2011）、『We Are All We Need』（2015）、『Common Ground』（2018）を含むAbove & Beyondのカタログの大半をリリースし、Andrew Bayer、Mat Zo、Genix、ilan Bluestone、Grumなど主要アーティストを契約してきた。Anjunabeats Volumeミックス・コンピレーション・シリーズは2003年以来途切れず続いており、ジャンル屈指の長期シリーズの一つだ。ワシントン州The Gorge、コロラド州Red Rocksでの年次Group Therapyフェスと、週次ラジオ番組「Group Therapy」が、極めて熱心なグローバル・コミュニティを構築している。2005年には姉妹レーベルとしてより深いサウンドのAnjunadeepを派生させた。`,
    },
    posts: ['above-beyond-anjuna-empire', 'role-of-vocals-in-trance-music', 'essential-trance-labels-2026'],
  },

  {
    slug: 'black-hole-recordings',
    name: 'Black Hole Recordings',
    flag: '🇳🇱',
    emoji: '🕳️',
    category: 'major',
    banner: 'b-progressive',
    founded: '1997',
    hq: 'Breda, Netherlands',
    founders: ['Arny Bink', 'David Lewis'],
    aliases: ['black hole', 'blackhole recordings'],
    subgenres: ['Progressive Trance', 'Uplifting', 'Vocal Trance'],
    topReleases: [
      { title: 'Magik series', artist: 'Tiësto', year: '1997+', type: 'series' },
      { title: 'In Search of Sunrise series', artist: 'Tiësto / Richard Durand / Solarstone', year: '1999+', type: 'series' },
      { title: 'Just Be', artist: 'Tiësto', year: 2004, type: 'album' },
      { title: 'Sound Travels', artist: 'BT', year: '2000s', type: 'multiple' },
      { title: 'Pure Trance compilation series', artist: 'Solarstone', year: '2012+', type: 'series' },
    ],
    related: ['armada-music', 'pure-trance-recordings', 'anjunabeats', 'flashover-recordings'],
    links: {
      website: 'https://www.blackholerecordings.com',
      beatport: 'https://www.beatport.com/label/black-hole-recordings/176',
      spotify: 'https://open.spotify.com/user/blackholerecordings',
      soundcloud: 'https://soundcloud.com/black-hole-recordings',
    },
    short: {
      en: 'The Dutch label that launched Tiësto\'s career and built In Search of Sunrise — a foundational name in progressive and uplifting trance.',
      ja: 'Tiëstoのキャリアを始動させ、「In Search of Sunrise」を築いたオランダのレーベル——プログレッシブとアップリフティング・トランスの基礎的存在。',
    },
    bio: {
      en: `Black Hole Recordings was founded in 1997 in Breda, Netherlands by Arny Bink and David Lewis — the latter of whom would later co-found Armada Music. The label was Tiësto's home for his most celebrated work, including the Magik mix series, Just Be (2004), and the early In Search of Sunrise compilations that defined the modern long-form trance set. Long after Tiësto departed for his own Musical Freedom imprint, Black Hole has remained one of trance's most enduring labels.

The In Search of Sunrise series passed to Richard Durand and later to Solarstone, becoming a flagship through which Black Hole curates the deeper, more atmospheric end of progressive trance. The label has also been the home of BT, Cosmic Gate (early years), Markus Schulz (early years), Andy Moor, and dozens of other progressive and uplifting trance artists. In 2012 Solarstone launched the Pure Trance series under the Black Hole umbrella. After more than 25 years, the label remains a respected curator of the genre's more refined and patient material — a counterpoint to the more festival-oriented commercial mainstream.`,
      ja: `Black Hole Recordingsは1997年、オランダ・ブレダでArny BinkとDavid Lewisにより設立された——後者は後にArmada Musicの共同創設者となる。同レーベルはTiëstoの最も称賛された作品の本拠地であり、Magikミックス・シリーズ、『Just Be』（2004）、そして現代の長尺トランス・セットを定義した初期のIn Search of Sunriseコンピレーションを送り出した。Tiëstoが自身のMusical Freedomへ移った後も、Black Holeはトランスで最も持続力のあるレーベルの一つであり続けている。

In Search of SunriseシリーズはRichard Durandへ、そしてSolarstoneへと引き継がれ、より深く大気的なプログレッシブ・トランスをBlack Holeがキュレーションする旗艦シリーズとなった。BT、Cosmic Gate（初期）、Markus Schulz（初期）、Andy Moor、その他多数のプログレッシブ／アップリフティング・トランス・アーティストの本拠地でもある。2012年にはSolarstoneがBlack Holeの傘下でPure Tranceシリーズを開始した。25年以上を経て、フェスティバル志向の商業メインストリームへの対比として、より洗練され忍耐強いジャンルの素材の尊敬されるキュレーターとして残り続けている。`,
    },
    posts: ['tiesto-evolution-trance-to-edm', 'essential-trance-labels-2026', 'history-of-trance-music'],
  },

  {
    slug: 'spinnin-records',
    name: "Spinnin' Records",
    flag: '🇳🇱',
    emoji: '🌀',
    category: 'major',
    banner: 'b-progressive',
    founded: '1999',
    hq: 'Hilversum, Netherlands',
    founders: ['Eelko van Kooten', 'Roger de Graaf'],
    aliases: ['spinnin', 'spinnin records', 'spinnin\' records'],
    subgenres: ['EDM', 'Big Room', 'Progressive', 'Future House'],
    topReleases: [
      { title: 'Animals', artist: 'Martin Garrix', year: 2013, type: 'single' },
      { title: 'Ocarina', artist: 'Martin Garrix', year: 2014, type: 'single' },
      { title: 'In My Mind', artist: 'Ivan Gough & Feenixpawl ft. Georgi Kay', year: 2012, type: 'single' },
      { title: 'Spinnin Sessions', artist: 'Various', year: '2013+', type: 'series' },
      { title: 'Sandstorm (Darude reissues)', artist: 'Darude', year: '2010s', type: 'reissues' },
    ],
    related: ['armada-music', 'ultra-music', 'enhanced-music'],
    links: {
      website: 'https://www.spinninrecords.com',
      beatport: 'https://www.beatport.com/label/spinnin-records/166',
      spotify: 'https://open.spotify.com/user/spinninrecordsofficial',
      soundcloud: 'https://soundcloud.com/spinninrecords',
    },
    short: {
      en: 'Dutch dance powerhouse responsible for the EDM boom of the 2010s — the label that broke Martin Garrix and shaped global mainstream electronic music.',
      ja: '2010年代EDMブームを牽引したオランダのダンス強豪——Martin Garrixを世に出し、グローバル・メインストリーム電子音楽を形作ったレーベル。',
    },
    bio: {
      en: `Spinnin' Records was founded in 1999 in Hilversum, Netherlands by Eelko van Kooten and Roger de Graaf, initially as a Dutch trance and progressive house label. Over the following two decades it grew into one of the most commercially powerful dance labels in the world, particularly during the 2010s big-room and EDM era when its catalogue dominated global dance charts. Spinnin' is most famous for breaking Martin Garrix — releasing his 2013 mega-hit "Animals" when he was just 17, and shaping his career into the years that followed.

While Spinnin' is more closely associated with EDM, big-room, and future house than with classical trance, it has been an important platform for many trance-adjacent artists — including Sander van Doorn, Sebastian Ingrosso, Hardwell, and many vocal trance and progressive crossover acts. The label was acquired by Warner Music Group in 2017 in a landmark deal that signalled the major-label industry's full embrace of dance music. Today, Spinnin' continues to release music across the dance spectrum and operates Spinnin' Records, Spinnin' Deep, and many sub-imprints.`,
      ja: `Spinnin' Recordsは1999年、オランダ・ヒルフェルスムでEelko van KootenとRoger de Graafにより設立された。当初はオランダのトランスとプログレッシブ・ハウスのレーベルだった。続く20年で世界で最も商業的に強力なダンス・レーベルの一つへと成長し、特に2010年代のビッグルーム・EDM時代にはそのカタログがグローバル・ダンス・チャートを支配した。Spinnin'は当時17歳のMartin Garrixを発掘し、2013年のメガヒット「Animals」をリリース、その後のキャリアを形作ったことで最も有名である。

Spinnin'はクラシック・トランスよりもEDM、ビッグルーム、フューチャーハウスと密接に結びついているが、Sander van Doorn、Sebastian Ingrosso、Hardwell、そして多くのボーカル・トランスやプログレッシブのクロスオーバー・アクトなど、トランス隣接アーティストにとっても重要なプラットフォームであり続けてきた。2017年、Warner Music Groupによる買収はダンスミュージックがメジャー・レーベル業界に完全に受け入れられたことを示す画期的な取引となった。現在もSpinnin'はダンス全領域にわたる音楽をリリースし続け、Spinnin' Records、Spinnin' Deepほか多数のサブ・インプリントを運営している。`,
    },
    posts: ['essential-trance-labels-2026', 'history-of-trance-music'],
  },

  {
    slug: 'ultra-music',
    name: 'Ultra Music',
    flag: '🇺🇸',
    emoji: '🌐',
    category: 'major',
    banner: 'b-vocal',
    founded: '1995',
    hq: 'New York, USA',
    founders: ['Patrick Moxey'],
    aliases: ['ultra', 'ultra records', 'ultra music label'],
    subgenres: ['EDM', 'Progressive', 'Vocal Trance', 'House'],
    topReleases: [
      { title: 'Strobe', artist: 'deadmau5', year: 2009, type: 'single (US license)' },
      { title: 'Wake Me Up', artist: 'Avicii', year: 2013, type: 'single (US license)' },
      { title: 'Save the World', artist: 'Swedish House Mafia', year: 2011, type: 'single (US license)' },
      { title: 'Ultra Music Festival compilations', artist: 'Various', year: '2010s', type: 'series' },
      { title: 'Ultra Trance series', artist: 'Various', year: '2000s', type: 'series' },
    ],
    related: ['spinnin-records', 'armada-music', 'anjunabeats'],
    links: {
      website: 'https://www.ultramusic.com',
      beatport: 'https://www.beatport.com/label/ultra-records/188',
      spotify: 'https://open.spotify.com/user/ultraofficial',
      soundcloud: 'https://soundcloud.com/ultramusic',
    },
    short: {
      en: 'New York–based dance label that introduced European trance and EDM to the US market — and the namesake of Ultra Music Festival.',
      ja: 'ヨーロッパのトランスとEDMを米国市場に紹介したニューヨーク拠点のダンス・レーベル——「Ultra Music Festival」の名前の由来でもある。',
    },
    bio: {
      en: `Ultra Music was founded in 1995 in New York City by Patrick Moxey as a US-focused dance music label specialising in licensing European electronic releases for the American market. Throughout the late 1990s and 2000s, Ultra was the primary route by which European trance and progressive house reached US listeners, releasing American editions of records by Tiësto, Paul van Dyk, Sasha & John Digweed, ATB, Above & Beyond, BT, and many more. The Ultra Trance compilation series in the 2000s was a key gateway for a generation of American trance fans.

In the 2010s Ultra became the US release partner for the EDM era's biggest names, licensing or releasing material by deadmau5, Calvin Harris, Avicii, Kygo, Swedish House Mafia, and Steve Aoki. The label is closely associated with — though not formally affiliated with — Miami's Ultra Music Festival (Patrick Moxey was an early backer of the event). In 2021 Ultra was sold to Sony Music. The label continues to operate as a major commercial force in dance music, with a strong focus on US chart-friendly progressive and pop-electronic crossover material.`,
      ja: `Ultra Musicは1995年、Patrick Moxeyによりニューヨークで設立された。当初はヨーロッパの電子音楽リリースを米国市場向けにライセンスすることに特化した、米国中心のダンス・レーベルだった。1990年代後半から2000年代を通じて、Ultraはヨーロッパのトランスとプログレッシブ・ハウスが米国リスナーに届く主要なルートであり、Tiësto、Paul van Dyk、Sasha & John Digweed、ATB、Above & Beyond、BTなど多数の米国版レコードをリリースした。2000年代のUltra Tranceコンピレーション・シリーズは、米国のトランス・ファン世代にとって重要な入口となった。

2010年代になるとUltraはEDM時代の最大級のアーティストの米国リリース・パートナーとなり、deadmau5、Calvin Harris、Avicii、Kygo、Swedish House Mafia、Steve Aokiらの素材をライセンスまたはリリースした。同レーベルはマイアミの「Ultra Music Festival」と密接に結びついている（Patrick Moxeyはフェス初期の支援者）が、正式には別組織である。2021年、UltraはSony Musicに売却された。現在もダンスミュージックの主要な商業勢力として運営されており、米国チャート向けのプログレッシブとポップ・エレクトロニック・クロスオーバー素材に強く注力している。`,
    },
    posts: ['essential-trance-labels-2026', 'tiesto-evolution-trance-to-edm'],
  },
];

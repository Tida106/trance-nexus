// Batch 1 — Legendary tier
// Schema (per artist):
//   slug, name, flag, emoji, genre, banner, sub:{en,ja}, short:{en,ja},
//   tags, realName, origin, born, activeFrom, labels:[],
//   topWorks:[{title,year,type}], related:[slug], links:{},
//   bio:{en,ja}, style:{en,ja}, mentionedIn:[blog-slug]

export const legends = [
  {
    slug: 'armin-van-buuren',
    name: 'Armin van Buuren',
    flag: '🇳🇱',
    emoji: '🌊',
    genre: 'UPLIFTING',
    banner: 'b-uplifting',
    tags: ['UPLIFTING', 'PROGRESSIVE', 'LEGEND'],
    realName: 'Armin Jozef Jacobus Daniël van Buuren',
    origin: 'Leiden, Netherlands',
    born: '1976',
    activeFrom: '1995',
    labels: ['Armada Music', 'A State of Trance', 'Armind'],
    topWorks: [
      { title: 'Communication', year: 1999, type: 'track' },
      { title: 'Shivers', year: 2005, type: 'album' },
      { title: 'Imagine', year: 2008, type: 'album' },
      { title: 'This Is What It Feels Like', year: 2013, type: 'track' },
      { title: 'Blah Blah Blah', year: 2018, type: 'track' },
      { title: 'Balance', year: 2019, type: 'album' },
    ],
    related: ['ferry-corsten', 'tiesto', 'andrew-rayel', 'markus-schulz', 'gaia'],
    links: {
      website: 'https://www.arminvanbuuren.com',
      spotify: 'https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5',
      soundcloud: 'https://soundcloud.com/arminvanbuuren',
      beatport: 'https://www.beatport.com/search?q=Armin+van+Buuren',
    },
    sub: { en: 'Uplifting / Progressive', ja: 'アップリフティング / プログレッシブ' },
    short: {
      en: 'Five-time DJ Mag #1, host of A State of Trance, the most-listened-to dance radio show in history.',
      ja: 'DJ Mag #1を5度受賞。史上最も聴かれたダンスラジオ番組「A State of Trance」のホスト。',
    },
    style: {
      en: 'Soaring uplifting leads, anthemic vocal hooks, and emotional progressive grooves built around a 138 BPM signature pulse. Equally comfortable in stadium-scale euphoria and intimate club progressive.',
      ja: '舞い上がるアップリフティングなリード、アンセミックなボーカルフック、138 BPMを軸にした感情的なプログレッシブグルーヴ。スタジアム規模の高揚感から親密なクラブ・プログレッシブまで自在にこなす。',
    },
    bio: {
      en: `Armin van Buuren is the most decorated DJ in trance history. Born in Leiden in 1976, he started producing in his teens and broke through in 1999 with "Communication," a track that became a defining sound of the late-90s Dutch trance era. By 2001 he had launched A State of Trance, a weekly radio show that grew from a small Dutch broadcast into a global institution heard by an estimated 40 million listeners across more than 80 stations every week.

He was voted DJ Mag's #1 DJ in the world a record-tying five times (2007, 2008, 2009, 2010, 2012) and remained in the top ten for nearly two decades. As founder and CEO of Armada Music, the world's largest independent dance label, he built an empire that has signed and developed many of the genre's leading names. His ASOT brand also expanded into stadium events that fill venues like the Johan Cruijff ArenA and the Ahoy in Rotterdam, with editions hosted from Mexico City to Mumbai.

Musically, Armin is known for an emotional, melodic sensibility — soaring leads, breakdowns built for catharsis, and a pop sensibility that has produced crossover hits like "This Is What It Feels Like" with Trevor Guthrie. He has collaborated with artists ranging from BT and Above & Beyond to David Guetta, has produced six studio albums (Shivers, Imagine, Mirage, Intense, Embrace, Balance), and continues to deliver new music at a relentless pace.

Beyond the studio, his cultural impact is hard to overstate: he has performed for the King of the Netherlands, given a TEDx talk on creativity, and turned A State of Trance into an annual celebration that defines a generation of trance fans. For many, he is not simply a DJ — he is the figurehead of the entire genre.`,
      ja: `アーミン・ヴァン・ビューレンはトランス史上最も多くの栄誉を獲得したDJである。1976年オランダ・ライデン生まれ。10代でプロダクションを始め、1999年の「Communication」で90年代後半オランダ・トランスの代表的サウンドを確立。2001年に開始した週次ラジオ「A State of Trance」は、小さなオランダの番組から、世界80以上の局で毎週推定4000万人が聴くグローバルな制度へと成長した。

DJ Mag誌ワールドNo.1 DJに史上最多タイの5回（2007、2008、2009、2010、2012）選出され、約20年にわたってトップ10に君臨。世界最大の独立系ダンスレーベル「Armada Music」の創設者兼CEOとして、ジャンルの主要アーティストを多数発掘・育成。ASOTブランドはヨハン・クライフ・アレナやロッテルダム・アホイなどのスタジアムイベントへと拡大し、メキシコシティからムンバイまで世界各地で開催されている。

音楽的には、感情的でメロディックな感性で知られる——舞い上がるリード、カタルシスのために構築されたブレイクダウン、そしてTrevor Guthrieとの「This Is What It Feels Like」のようなクロスオーバーヒットを生み出すポップ・センス。BT、Above & Beyond、David Guettaらと幅広くコラボし、6枚のスタジオアルバム（Shivers、Imagine、Mirage、Intense、Embrace、Balance）を発表。今もなお驚異的なペースで新曲を届け続けている。

スタジオを超えた文化的影響力は計り知れない。オランダ国王の前で演奏し、創造性についてのTEDxトークを行い、A State of Tranceをトランスファン世代を定義する年次祝祭へと昇華させた。多くの人々にとって、彼は単なるDJではなく、ジャンルそのものの象徴である。`,
    },
    mentionedIn: [
      'armin-van-buuren-king-of-trance',
      'a-state-of-trance-show-that-changed-everything',
      'iconic-trance-anthems-that-defined-an-era',
      'history-of-trance-music',
      'essential-trance-labels-2026',
    ],
  },

  {
    slug: 'tiesto',
    name: 'Tiësto',
    flag: '🇳🇱',
    emoji: '🔮',
    genre: 'PROGRESSIVE',
    banner: 'b-progressive',
    tags: ['PROGRESSIVE', 'ICONIC', 'CROSSOVER'],
    realName: 'Tijs Michiel Verwest',
    origin: 'Breda, Netherlands',
    born: '1969',
    activeFrom: '1994',
    labels: ['Black Hole Recordings (former)', 'Musical Freedom', 'Atlantic Records'],
    topWorks: [
      { title: 'In My Memory', year: 2001, type: 'album' },
      { title: 'Adagio for Strings', year: 2005, type: 'track' },
      { title: 'Just Be', year: 2004, type: 'album' },
      { title: 'Elements of Life', year: 2007, type: 'album' },
      { title: 'The Business', year: 2020, type: 'track' },
      { title: '10:35 (with Tate McRae)', year: 2022, type: 'track' },
    ],
    related: ['armin-van-buuren', 'ferry-corsten', 'paul-van-dyk', 'dash-berlin'],
    links: {
      website: 'https://www.tiesto.com',
      spotify: 'https://open.spotify.com/artist/2o5jDhtHVPhrJdv3cEQ99Z',
      soundcloud: 'https://soundcloud.com/tiesto',
      beatport: 'https://www.beatport.com/search?q=Tiesto',
    },
    sub: { en: 'Progressive Trance / Open-format', ja: 'プログレッシブ・トランス / オープンフォーマット' },
    short: {
      en: 'The Greatest DJ of All Time according to Mixmag — and the artist who took trance from clubs to stadiums and the Olympics.',
      ja: 'Mixmag「史上最高のDJ」。トランスをクラブからスタジアムとオリンピックの舞台へと押し上げた立役者。',
    },
    style: {
      en: 'Cinematic progressive trance in his classical era; later evolved into a high-energy, festival-ready hybrid blending big-room, future house, and electro influences while retaining his signature melodic ear.',
      ja: 'クラシック期は映画的なプログレッシブ・トランス。後にビッグルーム、フューチャーハウス、エレクトロの要素を融合した高エネルギーのフェスティバル仕様ハイブリッドへと進化。シグネチャーのメロディアスな感性は健在。',
    },
    bio: {
      en: `Tijs Verwest, known to the world as Tiësto, is one of the most commercially successful electronic artists of all time. Born in Breda in 1969, he began DJing in local Dutch clubs in the early 90s and rose to global fame in the early 2000s with a sound now considered the blueprint for progressive trance. Albums like In My Memory (2001) and Just Be (2004) and tracks such as "Adagio for Strings" became defining anthems of an era.

His 2004 performance at the Athens Olympics opening ceremony — broadcast to a global audience of more than three billion — was the first time a DJ had played that role at the Games and a watershed moment for electronic music's mainstream legitimacy. He was voted DJ Mag's #1 DJ in 2002, 2003, and 2004, the first artist to win three years in a row.

Around 2009 Tiësto stepped away from trance, declaring the genre too restrictive. He pivoted into a more open-format sound, founding Musical Freedom and producing big-room, electro, and future-house records. While that move was controversial among trance purists, it propelled him to a level of crossover success — pop collaborations, residencies in Las Vegas, billboard hits — few electronic artists have matched. "The Business" (2020) became one of his biggest songs of the streaming era.

In 2022 he was voted "Greatest DJ of All Time" by Mixmag readers. Whatever genre he plays, his name is shorthand for the moment electronic music broke into the global mainstream, and the Dutch trance scene that produced him remains his foundation. Even today, his classical-era tracks fill the floors of trance festivals worldwide.`,
      ja: `世界に「ティエスト」として知られるTijs Verwestは、史上最も商業的に成功した電子音楽アーティストの一人である。1969年オランダ・ブレダ生まれ。90年代初頭からローカルのオランダのクラブでDJを始め、2000年代初頭にプログレッシブ・トランスの青写真とされるサウンドで世界的な名声を獲得。アルバム『In My Memory』（2001）、『Just Be』（2004）、そして「Adagio for Strings」のような楽曲は、ある時代を定義するアンセムとなった。

2004年アテネ五輪開会式での演奏——全世界30億人以上に放送された——は、五輪でDJがその役割を担った史上初の出来事であり、電子音楽がメインストリームでの正当性を獲得する分水嶺となった。DJ Mag誌ワールドNo.1 DJに2002、2003、2004年と3年連続で選出された史上初のアーティストでもある。

2009年頃、ティエストはトランスから一歩引き、ジャンルの制約が強すぎると宣言。Musical Freedomを設立し、ビッグルーム、エレクトロ、フューチャーハウスへと舵を切った。トランスの純粋主義者には賛否両論を呼んだものの、ポップコラボ、ラスベガスのレジデンシー、ビルボードヒットなど、電子音楽アーティストとしては稀有なクロスオーバーの成功へと繋がった。「The Business」（2020）はストリーミング時代の最大ヒットの一つとなった。

2022年にはMixmag読者投票で「史上最高のDJ」に選出。どのジャンルをプレイしようとも、その名は電子音楽がグローバル・メインストリームに突き抜けた瞬間の代名詞であり、彼を生んだオランダ・トランスシーンは今なお彼のルーツである。クラシック期の楽曲は今も世界中のトランスフェスのフロアを満たし続けている。`,
    },
    mentionedIn: [
      'tiesto-evolution-trance-to-edm',
      'iconic-trance-anthems-that-defined-an-era',
      'history-of-trance-music',
      'essential-trance-labels-2026',
    ],
  },

  {
    slug: 'paul-van-dyk',
    name: 'Paul van Dyk',
    flag: '🇩🇪',
    emoji: '🏛',
    genre: 'PROGRESSIVE',
    banner: 'b-progressive',
    tags: ['PROGRESSIVE', 'UPLIFTING', 'PIONEER'],
    realName: 'Matthias Paul',
    origin: 'East Berlin, Germany',
    born: '1971',
    activeFrom: '1991',
    labels: ['Vandit Records', 'Deviant', 'Mute'],
    topWorks: [
      { title: '45 RPM', year: 1994, type: 'album' },
      { title: 'For an Angel', year: 1998, type: 'track' },
      { title: 'Out There and Back', year: 2000, type: 'album' },
      { title: 'Reflections', year: 2003, type: 'album' },
      { title: 'In Between', year: 2007, type: 'album' },
      { title: 'From Then On', year: 2017, type: 'album' },
    ],
    related: ['armin-van-buuren', 'ferry-corsten', 'cosmic-gate', 'gareth-emery'],
    links: {
      website: 'https://www.paulvandyk.com',
      spotify: 'https://open.spotify.com/artist/1Bl6wpkWCQ4KVgnASpvzzA',
      soundcloud: 'https://soundcloud.com/paulvandyk',
      beatport: 'https://www.beatport.com/search?q=Paul+van+Dyk',
    },
    sub: { en: 'Progressive / Uplifting Trance', ja: 'プログレッシブ / アップリフティング・トランス' },
    short: {
      en: 'East Berlin trance pioneer who helped define the genre, and a two-time DJ Mag #1 known for cerebral, emotional sets.',
      ja: '東ベルリン出身のトランス・パイオニア。ジャンルの定義を担った一人で、DJ Mag #1を2度受賞。知的かつ感情的なセットで知られる。',
    },
    style: {
      en: 'Long-form, narrative DJ sets with cerebral progressive and uplifting trance tools. Clean, melodic production characterised by precise arrangements, emotive piano-and-string textures, and rolling 138-BPM grooves.',
      ja: '長尺で物語性のあるDJセット。知的なプログレッシブとアップリフティング・トランスを駆使する。精密なアレンジ、感情的なピアノとストリングスのテクスチャ、138 BPMの転がるようなグルーヴが特徴のクリーンでメロディックなプロダクション。',
    },
    bio: {
      en: `Paul van Dyk — born Matthias Paul in 1971 — grew up in East Berlin behind the Wall, where Western radio broadcasts and bootleg cassettes were his only connection to the music that would come to define his life. After reunification, he became a fixture in the explosive early-90s Berlin club scene, with residencies at the legendary Tresor and E-Werk.

His 1994 debut album 45 RPM helped define the long-form, narrative trance set, and the 1998 remix of Binary Finary's "1998" alongside his own "For an Angel" became cornerstones of the era. Out There and Back (2000) and Reflections (2003) cemented his status as one of the genre's leading album artists, and he was voted DJ Mag's #1 DJ in the world in both 2005 and 2006 — the first German artist to take the title.

Founder of the Vandit Records imprint, Paul van Dyk has long been an outspoken advocate for trance as a serious art form. He uses his platform for political and humanitarian causes, performing for the Dalai Lama, advocating for democracy in his native Germany, and earning honours from the German government for his cultural work.

In 2016 he survived a near-fatal fall from the stage at A State of Trance in Utrecht, suffering serious head and spinal injuries. His recovery and return to touring became one of the most moving stories in modern dance music. His 2017 comeback album From Then On addressed the experience directly, and his subsequent SHINE Ibiza residency reaffirmed his place at the heart of the trance community he helped build three decades earlier.`,
      ja: `ポール・ヴァン・ダイク——本名Matthias Paul、1971年生まれ——は東ベルリンの壁の向こう側で育った。西側のラジオ放送と海賊版カセットテープだけが、後に彼の人生を定義することになる音楽との唯一の接点だった。ドイツ再統一後、伝説的なTresorやE-Werkのレジデンシーを獲得し、爆発的な90年代初頭のベルリン・クラブシーンの中心人物となった。

1994年のデビューアルバム『45 RPM』は長尺で物語性のあるトランス・セットを定義する助けとなり、1998年のBinary Finary「1998」のリミックスと自身の「For an Angel」は時代の礎石となった。『Out There and Back』（2000）、『Reflections』（2003）はジャンルを代表するアルバム・アーティストとしての地位を確固たるものにし、2005年と2006年にDJ Mag誌ワールドNo.1 DJに選出——ドイツ人として初の快挙を成し遂げた。

レーベル「Vandit Records」の主宰者であるポール・ヴァン・ダイクは、トランスを真摯な芸術形式として擁護し続けてきた。プラットフォームを政治的・人道的活動にも活用し、ダライ・ラマの前で演奏したり、母国ドイツの民主主義を訴えたり、文化的功績によりドイツ政府から栄誉を受けたりしている。

2016年、ユトレヒトのA State of Tranceでステージから致命的に近い転落事故に遭い、頭部と脊椎に重傷を負った。その回復とツアー復帰は近年のダンスミュージックで最も感動的な物語の一つとなった。2017年のカムバックアルバム『From Then On』はその経験を直接扱い、続くイビサの「SHINE」レジデンシーは、彼が30年前に築いたトランスコミュニティの中心に再び位置づけた。`,
    },
    mentionedIn: [
      'paul-van-dyk-pioneer-of-trance',
      'iconic-trance-anthems-that-defined-an-era',
      'history-of-trance-music',
      'best-trance-clubs-in-europe',
    ],
  },

  {
    slug: 'ferry-corsten',
    name: 'Ferry Corsten',
    flag: '🇳🇱',
    emoji: '⚡',
    genre: 'TECH',
    banner: 'b-tech',
    tags: ['UPLIFTING', 'TECH', 'PIONEER'],
    realName: 'Ferry Corsten',
    origin: 'Rotterdam, Netherlands',
    born: '1973',
    activeFrom: '1990',
    labels: ['Flashover Recordings', 'Tsunami Records', 'Premier'],
    topWorks: [
      { title: 'Out of the Blue (as System F)', year: 1999, type: 'track' },
      { title: 'Right of Way', year: 2003, type: 'album' },
      { title: 'Twice in a Blue Moon', year: 2008, type: 'album' },
      { title: 'WKND', year: 2012, type: 'album' },
      { title: 'Blueprint', year: 2017, type: 'album' },
      { title: 'UNITY', year: 2018, type: 'collaboration series' },
    ],
    related: ['armin-van-buuren', 'tiesto', 'paul-van-dyk', 'cosmic-gate'],
    links: {
      website: 'https://www.ferrycorsten.com',
      spotify: 'https://open.spotify.com/artist/3vdkr8DbTu5fS3FhRKRZIz',
      soundcloud: 'https://soundcloud.com/ferrycorsten',
      beatport: 'https://www.beatport.com/search?q=Ferry+Corsten',
    },
    sub: { en: 'Uplifting / Tech Trance', ja: 'アップリフティング / テック・トランス' },
    short: {
      en: 'The producer behind System F\'s "Out of the Blue" and three decades of relentless trance innovation.',
      ja: 'System F「Out of the Blue」を生み出したプロデューサー。30年にわたるトランス革新の体現者。',
    },
    style: {
      en: 'A craftsman\'s approach to trance — meticulously layered synth work, driving tech-trance basslines, and uplifting breakdowns. Ranges from melodic anthems to harder, peak-time trance with equal authority.',
      ja: 'トランスへの職人的アプローチ——緻密に重ねられたシンセワーク、ドライヴィングなテック・トランスのベースライン、アップリフティングなブレイクダウン。メロディックなアンセムからハーダーなピークタイム・トランスまで自在に操る。',
    },
    bio: {
      en: `Ferry Corsten began producing in 1990 at the age of seventeen, releasing music under a series of aliases — Moonman, System F, Gouryella with Tiësto — that would define the late-90s Dutch trance explosion. His 1999 track "Out of the Blue," released under the System F alias, is widely regarded as one of the all-time-greatest trance records and a foundational document of the uplifting sound.

His Gouryella project with Tiësto produced the eponymous 1999 anthem and helped establish the duo template for trance production. As a solo artist under his own name, he has released eight studio albums spanning Right of Way (2003), L.E.F. (2006), Twice in a Blue Moon (2008), WKND (2012), and Blueprint (2017) — a concept album with an accompanying graphic novel that demonstrated his ambition to push trance beyond the dancefloor.

He founded Flashover Recordings in 2005 and has hosted Corsten's Countdown, his own weekly radio show, since 2007. The UNITY project, launched in 2018, is an ongoing collaboration series with friends and peers including Cosmic Gate, Saad Ayub, and Solis & Sean Truby — a celebration of trance community spirit.

Across three decades, Ferry Corsten has been one of the most consistently inventive producers in trance. He moves fluidly between uplifting, progressive, and hard tech-trance, carries Gouryella forward as a touring live show in its own right, and refuses to settle into any single sound. For producers studying the craft of trance arrangement, his catalogue is essential listening.`,
      ja: `フェリー・コルステンは17歳の1990年からプロダクションを開始。Moonman、System F、Tiëstoとの組Gouryellaなど複数のエイリアスでリリースし、90年代後半のオランダ・トランス爆発期を定義した。System F名義でリリースされた1999年の「Out of the Blue」は、トランス史上最高峰のレコードの一つにして、アップリフティング・サウンドの基礎文書として広く認識されている。

Tiëstoとの「Gouryella」プロジェクトでは1999年の同名アンセムを生み出し、トランスのプロダクション・デュオ形式を確立する助けとなった。本名でのソロ活動では8枚のスタジオアルバムを発表——『Right of Way』（2003）、『L.E.F.』（2006）、『Twice in a Blue Moon』（2008）、『WKND』（2012）、『Blueprint』（2017）はグラフィックノベルを伴うコンセプトアルバムで、トランスをダンスフロアの外へと押し広げる野心を示した。

2005年にFlashover Recordingsを設立、2007年からは自身の週次ラジオ番組「Corsten's Countdown」をホスト。2018年に開始した「UNITY」プロジェクトは、Cosmic Gate、Saad Ayub、Solis & Sean Trubyらとの継続的なコラボ・シリーズで、トランスコミュニティの精神を祝福する企画である。

30年にわたり、フェリー・コルステンはトランスで最も一貫して創造的なプロデューサーの一人であり続けている。アップリフティング、プログレッシブ、ハードなテック・トランスの間を流麗に行き来し、Gouryellaを単独のライブ・ショーとして継続させ、いかなる単一のサウンドにも安住しない。トランス・アレンジメントの工芸を学ぶプロデューサーにとって、彼のカタログは必聴である。`,
    },
    mentionedIn: [
      'ferry-corsten-three-decades-of-trance',
      'iconic-trance-anthems-that-defined-an-era',
      'history-of-trance-music',
      'essential-trance-labels-2026',
    ],
  },

  {
    slug: 'above-and-beyond',
    name: 'Above & Beyond',
    flag: '🇬🇧',
    emoji: '🌌',
    genre: 'VOCAL',
    banner: 'b-vocal',
    tags: ['VOCAL', 'PROGRESSIVE', 'TRIO'],
    realName: 'Jono Grant, Tony McGuinness, Paavo Siljamäki',
    origin: 'London, United Kingdom',
    born: '2000 (formed)',
    activeFrom: '2000',
    labels: ['Anjunabeats', 'Anjunadeep'],
    topWorks: [
      { title: 'Tri-State', year: 2006, type: 'album' },
      { title: 'Group Therapy', year: 2011, type: 'album' },
      { title: 'We Are All We Need', year: 2015, type: 'album' },
      { title: 'Common Ground', year: 2018, type: 'album' },
      { title: 'Sun & Moon', year: 2011, type: 'track' },
      { title: 'Thing Called Love', year: 2011, type: 'track' },
    ],
    related: ['armin-van-buuren', 'gareth-emery', 'andrew-rayel', 'cosmic-gate'],
    links: {
      website: 'https://aboveandbeyond.nu',
      spotify: 'https://open.spotify.com/artist/3pp2tmmXEYePnNjGiNa1Bs',
      soundcloud: 'https://soundcloud.com/aboveandbeyond',
      beatport: 'https://www.beatport.com/search?q=Above+%26+Beyond',
    },
    sub: { en: 'Vocal / Progressive Trance', ja: 'ボーカル / プログレッシブ・トランス' },
    short: {
      en: 'British trio behind Anjunabeats and Anjunadeep — architects of vocal trance and the most emotionally resonant brand in the genre.',
      ja: 'AnjunabeatsとAnjunadeepを主宰する英国のトリオ。ボーカル・トランスの設計者にして、ジャンルで最も感情に響くブランドの構築者。',
    },
    style: {
      en: 'Songwriter-driven vocal trance with melancholic chord progressions, intimate acoustic textures, and crowd-uniting vocal hooks. Their Group Therapy radio brand and acoustic albums extend the sound far beyond the dancefloor.',
      ja: 'ソングライター主導のボーカル・トランス。哀愁あるコード進行、親密なアコースティック・テクスチャ、観客を一つにするボーカルフック。「Group Therapy」ラジオブランドとアコースティック・アルバムが、サウンドをダンスフロアの遥か先へと拡張する。',
    },
    bio: {
      en: `Above & Beyond is the London-based trio of Jono Grant, Tony McGuinness, and Paavo Siljamäki. The group came together in 2000 after Grant and Siljamäki, then students at the Royal College of Music, were brought in to remix Madonna's "What It Feels Like for a Girl." That remix — credited to Above & Beyond — launched one of the most influential careers in trance.

In 2000 the trio also founded Anjunabeats, the label that would grow into a global brand encompassing the deeper, more atmospheric Anjunadeep imprint, sold-out Group Therapy festival editions at the Gorge in Washington, and a weekly radio show that consistently ranks among the most-listened-to in dance music. Their studio albums — Tri-State (2006), Group Therapy (2011), We Are All We Need (2015), and Common Ground (2018) — produced anthems including "Sun & Moon," "Thing Called Love," and "On a Good Day."

What sets Above & Beyond apart is their commitment to songcraft. Working with vocalists like Zoë Johnston and Richard Bedford, they have produced a body of vocal trance that doubles as proper songwriting — material strong enough to stand stripped down on their two acoustic albums, performed at the Royal Albert Hall and the Hollywood Bowl. Few electronic acts have crossed into that territory so successfully.

They are also among the most articulate voices for the emotional power of trance. Their Group Therapy concept — the idea that the dancefloor is a place of communal vulnerability and release — has shaped a generation of fans and given the genre a vocabulary for its emotional impact. To listen to Above & Beyond is to be reminded why this music matters.`,
      ja: `Above & Beyondは、Jono Grant、Tony McGuinness、Paavo Siljamäkiからなるロンドン拠点のトリオである。GrantとSiljamäkiが英国王立音楽大学の学生だった2000年、マドンナの「What It Feels Like for a Girl」のリミックス案件に呼ばれたことが結成の契機となった。Above & Beyond名義でクレジットされたそのリミックスが、トランス史上最も影響力のあるキャリアの一つの始まりだった。

同2000年、トリオは「Anjunabeats」レーベルを設立。これは後により深く大気的なサブレーベル「Anjunadeep」、ワシントン州The Gorgeでのソールドアウトの「Group Therapy」フェスティバル、そしてダンスミュージックで常に最も聴かれる週次ラジオ番組へと成長するグローバルブランドへと拡大した。スタジオアルバム『Tri-State』（2006）、『Group Therapy』（2011）、『We Are All We Need』（2015）、『Common Ground』（2018）からは「Sun & Moon」「Thing Called Love」「On a Good Day」などのアンセムを生み出した。

Above & Beyondを際立たせるのは、楽曲制作への徹底したこだわりである。Zoë JohnstonやRichard Bedfordらシンガーと組み、本格的なソングライティングとしても成立するボーカル・トランスを制作してきた——2枚のアコースティック・アルバムで生楽器のみで再構築し、ロイヤル・アルバート・ホールやハリウッド・ボウルで披露されるほどの強度を持つ素材だ。電子音楽の枠を超えて、これほど成功裏にその領域へ踏み込んだアクトはほとんどいない。

彼らはまた、トランスの感情的力について最も雄弁な代弁者でもある。「Group Therapy」のコンセプト——ダンスフロアは共同体的な脆弱性と解放の場である、という思想——は一世代のファンを形作り、ジャンルにその情緒的インパクトを語る語彙を与えた。Above & Beyondを聴くことは、なぜこの音楽が重要なのかを思い出すことである。`,
    },
    mentionedIn: [
      'above-beyond-anjuna-empire',
      'role-of-vocals-in-trance-music',
      'iconic-trance-anthems-that-defined-an-era',
      'essential-trance-labels-2026',
    ],
  },
];

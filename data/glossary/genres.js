// Batch 1 — Genre / Subgenre terms
// Schema:
//   slug, term:{en,ja}, category, short:{en,ja}, definition:{en,ja},
//   related:[slug], artists:[slug], posts:[blog-slug], aliases:[string]

export const genres = [
  {
    slug: 'trance',
    term: { en: 'Trance', ja: 'トランス' },
    category: 'genre',
    aliases: ['trance music', 'トランスミュージック'],
    short: {
      en: 'Hypnotic, melody-driven electronic dance music typically built around 130–145 BPM grooves and emotional breakdowns.',
      ja: 'メロディ主導の催眠的な電子ダンスミュージック。一般に130〜145 BPMのグルーヴと情緒的なブレイクダウンを軸に構築される。',
    },
    definition: {
      en: `Trance is a genre of electronic dance music that emerged in the late 1980s and early 1990s, principally from the Frankfurt techno scene in Germany and the wider Benelux region, as a melody-focused offshoot of acid house and techno. The defining traits are a steady four-on-the-floor pulse (typically 130–145 BPM), repetitive synth motifs that evolve over long arrangements, and an extended breakdown-and-buildup architecture designed to produce a state of euphoric release on the dancefloor — the "trance" the genre is named for. From the start the music has been organised around tension and release rather than groove alone.

The early sound was codified by Frankfurt clubs like Omen and Dorian Gray and by labels such as Eye Q and Harthouse, both co-founded by Sven Väth, alongside the Berlin label MFS. Jam & Spoon, Cosmic Baby, Hardfloor, and Paul van Dyk were among the producers who pushed the template through the mid 1990s, after which the centre of gravity shifted to the Netherlands and the UK. By the end of the decade Tiësto, Ferry Corsten, Armin van Buuren, and Paul Oakenfold had taken trance to mainstage scale, and the music began branching into the subgenres we recognise today: uplifting, progressive, vocal, psytrance, tech, and hard.

Shared production traits across the family are easy to hear once you know what to listen for. Tracks tend to be long — six to nine minutes is normal — to give the breakdown and buildup room to breathe. Lead synths sit in the upper-mid range and lean on supersaw or PWM sawtooth timbres. Pads underneath are heavily sidechained to the kick, creating the pumping bed that drives the emotional lift. The kick-bass relationship is foundational rather than ornamental; the song lives in the melodic layers above it.

I came to trance not as a producer or DJ but as a listener on the dancefloor at Tomorrowland 2018, watching Armin van Buuren's mainstage set. The moment the Sun & Moon breakdown landed I felt something I had not felt from house, techno, or any other electronic music — a specific kind of full-body lift that the genre's architecture seems engineered to produce. Seven years of weekly A State of Trance listening later, I have come to hear the family of subgenres below as different shapes of that same first feeling, and this glossary is built from that listener perspective rather than a producer's.`,
      ja: `トランスは1980年代後半から1990年代初頭にかけて、主にドイツ・フランクフルトのテクノシーンとより広いベネルクス地域から、アシッドハウスとテクノのメロディ重視の派生ジャンルとして登場した電子ダンスミュージックである。定義的な特徴は、一定の四つ打ちパルス（一般に130〜145 BPM）、長尺のアレンジメントを通じて発展する反復的なシンセモチーフ、そしてダンスフロアでユーフォリックな解放——ジャンル名の由来となった「トランス（恍惚状態）」——を生み出すよう設計された長いブレイクダウンとビルドアップの構造である。当初からこの音楽は、グルーヴだけでなく緊張と解放を中心に組み立てられてきた。

初期サウンドを成文化したのはフランクフルトのOmenやDorian Grayといったクラブ、そしてSven Väthが共同設立したEye QやHarthouse、ベルリンのMFSといったレーベルである。Jam & Spoon、Cosmic Baby、Hardfloor、Paul van Dykらが1990年代半ばまでにテンプレートを推し進め、その後重心はオランダと英国へ移った。10年が終わるころにはTiësto、Ferry Corsten、Armin van Buuren、Paul Oakenfoldがトランスをメインステージ規模へ引き上げ、音楽は今日認識されるサブジャンル群——アップリフティング、プログレッシブ、ボーカル、サイトランス、テック、ハード——へと分岐し始めた。

ファミリー全体に共通するプロダクションの特徴は、聴き方を知れば容易に聴き取れる。トラックは長尺で、6〜9分が標準であり、ブレイクダウンとビルドアップに息をする余地を与える。リードシンセは中高域に位置し、スーパーソウやPWMノコギリ波の音色に頼る。下のパッドはキックに強くサイドチェインされ、情緒的なリフトを駆動するパンプするベッドを生み出す。キックとベースの関係は装飾ではなく基礎であり、楽曲はその上のメロディック・レイヤーに宿る。

私はプロデューサーやDJとしてではなく、2018年のTomorrowlandでArmin van Buurenのメインステージ・セットを見るダンスフロアのリスナーとしてトランスに出会った。Sun & Moonのブレイクダウンが降りてきた瞬間、ハウスやテクノ、他のどんな電子音楽からも感じたことのないもの——ジャンルの構造が生み出すよう設計されているとしか思えない特定の全身的なリフト——を感じた。それから7年間、毎週A State of Tranceを聴き続けるうちに、以下のサブジャンル群はあの最初の感覚の異なる形だと聴き取れるようになった。この用語集はプロデューサーではなくその聴き手の視点から構築されている。`,
    },
    related: ['uplifting-trance', 'progressive-trance', 'psytrance', 'vocal-trance', 'goa-trance', 'bpm', 'asot'],
    artists: ['armin-van-buuren', 'tiesto', 'paul-van-dyk', 'ferry-corsten', 'above-and-beyond', 'robert-miles', 'atb'],
    posts: ['what-is-trance-music', 'history-of-trance-music', 'top-10-trance-subgenres-explained', 'why-trance-music-endures', 'iconic-trance-anthems-that-defined-an-era', 'a-state-of-trance-show-that-changed-everything'],
  },

  {
    slug: 'uplifting-trance',
    term: { en: 'Uplifting Trance', ja: 'アップリフティング・トランス' },
    category: 'genre',
    aliases: ['uplifting', 'アップリフティング'],
    short: {
      en: 'Euphoric trance subgenre built around 138 BPM grooves, soaring leads, and emotionally cathartic breakdowns.',
      ja: '138 BPMのグルーヴ、舞い上がるリード、情緒的にカタルシス的なブレイクダウンを軸とするユーフォリックなトランスのサブジャンル。',
    },
    definition: {
      en: `Uplifting trance is the most emotionally explicit subgenre of trance — designed to deliver moments of euphoric release through soaring lead synths, major-key chord progressions, and breakdowns that build to enormous, cathartic climaxes. The modern standard tempo sits around 138 BPM, fast enough to feel weightless but slow enough that the lead melodies remain singable. Where the early 1990s German sound was darker and more hypnotic, uplifting deliberately pushes everything toward light: bright supersaws, major-key harmony, and emotional rather than physical impact.

The style was forged in the late 1990s and early 2000s by Dutch producers — Ferry Corsten, Armin van Buuren, and Tiësto — building on the Frankfurt blueprint but writing toward bigger, more melodic peaks. Armin's A State of Trance radio show, launched in 2001, became the primary global broadcast channel for the sound, and the annual ASOT events anchored it as a live format. From roughly 2008 the Egyptian duo Aly & Fila and their Future Sound of Egypt label (founded 2009) carried the torch when the broader scene drifted toward electro-house, and producers like Andrew Rayel, Bryan Kearney, and Sean Tyas extended the template through the 2010s.

The production grammar is recognisable within seconds. A rolling 16th-note bassline locks under a four-on-the-floor kick. Sidechained pads create the pumping bed. The breakdown strips everything back to atmosphere and an emotional motif — often a piano, plucks, or a vocal line — then a long, escalating buildup adds layer after layer until the lead synth re-enters, often an octave higher than first heard. The drop is rarely a drop in the EDM sense; it is a re-entry, the return of motion.

For me as a listener, uplifting is the shape of trance closest to what I felt at Tomorrowland 2018 — the body lift, the involuntary arms-up moment when the lead returns from the breakdown. After seven years of weekly A State of Trance listening I have come to recognise this specific feeling as the genre's signature, and uplifting is the subgenre that most directly engineers it. It is also the most demanding to listen to in long sets: the emotional dynamic range is the whole point.`,
      ja: `アップリフティング・トランスは最も情緒的に明示的なトランスのサブジャンルであり、舞い上がるリードシンセ、長調のコード進行、巨大でカタルシス的なクライマックスへと構築されるブレイクダウンを通じてユーフォリックな解放の瞬間を届けるよう設計されている。現代の標準テンポは138 BPM前後で、無重力に感じるほど速く、しかしリードメロディが歌える程度には遅い。1990年代初頭のドイツのサウンドがより暗く催眠的だったのに対し、アップリフティングは意図的にすべてを光の方向へ押す——明るいスーパーソウ、長調のハーモニー、肉体的というより情緒的なインパクトへと。

スタイルは1990年代後半から2000年代初頭にかけて、Ferry Corsten、Armin van Buuren、Tiëstoというオランダのプロデューサーたちによって、フランクフルトの青写真を基にしながらより大きく、よりメロディックなピークを目指して書き上げられて鍛えられた。Arminが2001年に立ち上げたA State of Tranceラジオショウは、このサウンドの主要なグローバル放送チャンネルとなり、毎年のASOTイベントがそれをライブ形式として定着させた。およそ2008年以降、エジプトのデュオAly & Filaと彼らのFuture Sound of Egyptレーベル（2009年設立）は、より広いシーンがエレクトロハウスへ漂流したときに灯火を担い、Andrew Rayel、Bryan Kearney、Sean Tyasらのプロデューサーが2010年代を通してテンプレートを拡張した。

プロダクションの文法は数秒で識別できる。16分音符の転がるベースラインが四つ打ちキックの下でロックする。サイドチェインされたパッドがパンプするベッドを作り出す。ブレイクダウンはすべてを大気と情緒的モチーフ——多くはピアノ、プラック、ヴォーカルライン——に剥ぎ取り、その後長く昇り続けるビルドアップが層を重ね、リードシンセが最初に聴いたときよりしばしば1オクターブ高く再入場する。ドロップはEDM的な意味でのドロップではなく、再入場であり、運動の復帰である。

リスナーとしての私にとって、アップリフティングは2018年のTomorrowlandで感じたものに最も近いトランスの形だ——身体のリフト、ブレイクダウンからリードが戻ってくる瞬間の不随意な腕を上げる動き。A State of Tranceを毎週聴く7年を経て、この特定の感覚をジャンルのシグネチャとして認識するようになり、アップリフティングはそれを最も直接的に設計するサブジャンルだ。同時に長尺セットで聴くには最も要求の多いサブジャンルでもある——情緒的なダイナミックレンジこそが眼目なのだ。`,
    },
    related: ['trance', 'vocal-trance', 'progressive-trance', 'hard-trance', 'buildup', 'breakdown', 'asot'],
    artists: ['armin-van-buuren', 'aly-and-fila', 'andrew-rayel', 'ferry-corsten', 'bryan-kearney', 'sean-tyas', 'dash-berlin'],
    posts: ['what-is-uplifting-trance', 'top-10-trance-subgenres-explained', 'iconic-trance-anthems-that-defined-an-era', 'best-uplifting-trance-tracks-of-all-time-50', 'anatomy-of-uplifting-trance-anthem', 'a-state-of-trance-show-that-changed-everything'],
  },

  {
    slug: 'progressive-trance',
    term: { en: 'Progressive Trance', ja: 'プログレッシブ・トランス' },
    category: 'genre',
    aliases: ['progressive', 'プログレッシブ'],
    short: {
      en: 'Slower, deeper trance subgenre (124–132 BPM) emphasising mood, atmosphere, and gradual harmonic development.',
      ja: 'ムード、雰囲気、漸進的な和声展開を重視するスローでディープなトランスのサブジャンル（124〜132 BPM）。',
    },
    definition: {
      en: `Progressive trance is the patient, atmospheric counterpart to uplifting — slower (typically 124–132 BPM), deeper, and built on long-form arrangement principles in which mood and texture develop gradually over many bars rather than driving toward one euphoric peak. Where uplifting writes about a moment, progressive writes about a journey. The same melodic vocabulary is present, but its emotional release is distributed across the whole track instead of concentrated in a single drop.

The genre's roots are in early-1990s British and German progressive house — the long, evolving DJ sets associated with the Renaissance club nights and labels like Bedrock and Hooj Choons. Sasha and John Digweed's mix series Northern Exposure, released on Ministry of Sound from 1996, is generally treated as the document that codified the sound. Through the 2000s Tiësto's early albums, Solarstone's mix compilations, and Markus Schulz's Coldharbour Recordings pushed it further. In parallel Above & Beyond launched the Anjunadeep sublabel in 2005, which has since hosted Lane 8, Yotto, and Tinlicker, and become a primary modern home for the progressive lineage.

Production traits flip uplifting's priorities. The bassline is usually a long-tail synth rather than a 16th-note roll. Pads are wider and slower-moving, often with internal modulation. Breakdowns resolve into tension or a held atmospheric chord, not a peak lead. Lead synths, when they appear, are processed — heavy reverb, low-pass automation, off-axis stereo — to feel distant rather than soaring. The kick-bass relationship is closer to deep house than to mainstage trance.

For me as a listener, progressive is the trance I reach for at home rather than at festivals. The Tomorrowland 2018 moment that pulled me into the genre was a peak-time uplifting one, but in the seven years of weekly A State of Trance listening since, progressive is the sound I have ended up living with on long evenings — the same emotional vocabulary, but stretched out so it works at low volume and over hours rather than as a single arms-up moment.`,
      ja: `プログレッシブ・トランスは、アップリフティングの忍耐強く大気的な対極にあるサブジャンルだ——よりスロー（一般に124〜132 BPM）、よりディープ、そしてムードとテクスチャが一つのユーフォリックなピークへ向かうのではなく、多数の小節にわたって漸進的に展開する長尺アレンジメント原理の上に構築される。アップリフティングが一つの瞬間について書くなら、プログレッシブは旅について書く。同じメロディック語彙が存在するが、情緒的解放は単一のドロップに集中するのではなくトラック全体に分散される。

ジャンルのルーツは1990年代初頭の英国とドイツのプログレッシブ・ハウスにある——Renaissanceのクラブ・ナイトとBedrockやHooj Choonsといったレーベルに関連する長尺で展開するDJセットだ。Sasha & John Digweedが1996年にMinistry of Soundから発表したミックスシリーズNorthern Exposureは、一般にサウンドを成文化した文書として扱われる。2000年代を通じてTiëstoの初期アルバム、Solarstoneのミックス・コンピレーション、Markus SchulzのColdharbour Recordingsがさらに推し進めた。並行してAbove & Beyondは2005年にサブレーベルAnjunadeepを立ち上げ、以来Lane 8、Yotto、Tinlickerを抱え、プログレッシブ系譜の現代的な主要拠点となっている。

プロダクションの特徴はアップリフティングの優先順位を反転させる。ベースラインは通常16分音符のロールではなく、長い余韻を持つシンセだ。パッドはより広く、よりゆっくり動き、しばしば内部変調を伴う。ブレイクダウンはピークのリードではなく、緊張や保持された大気的なコードへと解決する。リードシンセが現れる場合、それらは処理されている——重いリバーブ、ローパス・オートメーション、軸を外したステレオ——舞い上がるよりも遠くに感じるように。キックとベースの関係はメインステージ・トランスよりディープ・ハウスに近い。

リスナーとしての私にとって、プログレッシブはフェスティバルではなく家で手を伸ばすトランスだ。私をジャンルに引き込んだ2018年のTomorrowlandの瞬間はピーク時のアップリフティングだったが、それ以降の毎週A State of Tranceを聴く7年間で、私が長い夕方を共に過ごすことになったのはプログレッシブのサウンド——同じ情緒的語彙だが、単一の腕を上げる瞬間ではなく、低音量で何時間にも渡って機能するよう引き伸ばされたサウンド——だった。`,
    },
    related: ['trance', 'uplifting-trance', 'tech-trance', 'melodic-techno', 'balearic-trance', 'bpm', 'pad'],
    artists: ['sasha', 'john-digweed', 'hernan-cattaneo', 'yotto', 'tinlicker', 'cosmic-gate', 'andrew-bayer'],
    posts: ['what-is-progressive-trance', 'top-10-trance-subgenres-explained', 'trance-vs-house-vs-techno', 'best-progressive-trance-tracks-of-all-time-50', 'modern-trance-classics-2020s-so-far', 'above-beyond-anjuna-empire'],
  },

  {
    slug: 'psytrance',
    term: { en: 'Psytrance', ja: 'サイケデリック・トランス' },
    category: 'genre',
    aliases: ['psy-trance', 'psychedelic trance', 'サイトランス'],
    short: {
      en: 'High-tempo (140–150 BPM) psychedelic offshoot of trance defined by rolling triplet basslines and surreal sound design.',
      ja: '転がるトリプレットのベースラインとシュールなサウンドデザインで定義される、トランスから派生した高テンポ（140〜150 BPM）のサイケデリックなジャンル。',
    },
    definition: {
      en: `Psytrance is a psychedelic offshoot of trance that emerged from the Goa beach party scene in early-1990s India, where European travellers, Israeli ex-military producers, and local sound systems built an outdoor-first style separate from the European club lineage. Its defining features are a rolling 16th-note bassline (the "psy bassline") that creates a galloping rhythm distinct from straight four-on-the-floor trance, tempos in the 140–150 BPM range, and densely layered surreal sound design that openly references altered states of consciousness. Where European trance is engineered for cathedrals of light and lasers, psy is engineered for sun, dust, and 14-hour outdoor sets.

The early-1990s Goa scene gave way to a wider international circuit through the late 1990s, when Israeli labels including HOMmega Productions (founded 1997 in Tel Aviv) industrialised the sound and exported it. Goa trance, the genre's direct ancestor, used long melodic motifs and 303-style acid lines; modern psytrance dropped the explicit Eastern-mode melodies and pushed the bassline forward. Subgenres include full-on (the most melodic, festival-oriented variant), progressive psy (slower, more groove-focused), darkpsy and forest (faster, more abstract), and hi-tech. Boom Festival in Portugal and Ozora in Hungary are the scene's main European anchors. Astrix, Vini Vici, and Infected Mushroom are among the producers who took the sound to global mainstream audiences from the 2010s onward.

Production traits are easy to identify. The kick and bass interlock in a tight 16th-note pattern with the bass on every off-step, producing the unmistakable "boom-tsk-boom-tsk" gallop. Lead synths are FM- or wavetable-based and modulated heavily, often with pitched-down spoken-word samples or filtered atmospheric textures sweeping across the stereo field. Breakdowns are shorter than in uplifting trance and tend to release into bassline rather than into a lead.

For me as a listener, psytrance is the part of the trance family I came to last. The Tomorrowland 2018 moment that pulled me in was uplifting, and most of my weekly A State of Trance listening over the seven years since has been in that lineage. Psy is the cousin I respect from a distance — physically more demanding, less obviously melodic, but on the right outdoor system it produces a different kind of trance state that the European stadium sound cannot quite reach.`,
      ja: `サイトランスは1990年代初頭のインド・ゴアのビーチ・パーティ・シーンから出現したトランスのサイケデリックな派生ジャンルである。そこではヨーロッパからの旅行者、イスラエルの元軍人プロデューサー、地元のサウンドシステムが、ヨーロッパのクラブ系譜とは別個の屋外優先のスタイルを構築した。定義的な特徴は、ストレートな四つ打ちトランスとは異なるギャロップのリズムを生み出す転がる16分音符のベースライン（「サイ・ベースライン」）、140〜150 BPMの範囲のテンポ、そして変性意識状態をあからさまに参照する密にレイヤーされたシュールなサウンドデザインである。ヨーロッパのトランスが光とレーザーの大聖堂のために設計されているのに対し、サイは太陽、砂塵、14時間の屋外セットのために設計されている。

1990年代初頭のゴア・シーンは1990年代後半に広い国際的サーキットへ道を譲り、その頃HOMmega Productions（1997年テルアビブ設立）を含むイスラエルのレーベルがサウンドを工業化し輸出した。ジャンルの直接の祖先であるゴア・トランスは長いメロディック・モチーフと303スタイルのアシッド・ラインを使ったが、現代のサイトランスは明示的な東洋旋法のメロディを落とし、ベースラインを前面に押し出した。サブジャンルにはフルオン（最もメロディックでフェスティバル志向のバリアント）、プログレッシブ・サイ（よりスローでグルーヴ重視）、ダークサイ・フォレスト（より速く、より抽象的）、ハイテックが含まれる。ポルトガルのBoom FestivalとハンガリーのキーOzoraがシーンの主要なヨーロッパの錨だ。Astrix、Vini Vici、Infected Mushroomらは2010年代以降サウンドをグローバル・メインストリームの観客へ届けたプロデューサーである。

プロダクションの特徴は識別が容易だ。キックとベースは16分音符のタイトなパターンで噛み合い、ベースは各オフ・ステップに置かれ、紛れもない「ブン・チャ・ブン・チャ」のギャロップを生み出す。リードシンセはFMまたはウェーブテーブル方式で重く変調され、しばしばピッチを落とした音声サンプルやステレオフィールドを横切るフィルター処理された大気的テクスチャを伴う。ブレイクダウンはアップリフティングより短く、リードではなくベースラインへ解放される傾向がある。

リスナーとしての私にとって、サイトランスはトランスファミリーで最後に出会った部分だ。私を引き込んだ2018年のTomorrowlandの瞬間はアップリフティングだったし、その後7年間の毎週のA State of Trance聴取の大部分はその系譜にあった。サイは距離をもって尊敬するいとこだ——肉体的により要求が多く、メロディックさは明白でないが、適切な屋外システムの上ではヨーロッパのスタジアム・サウンドが届かない別種のトランス状態を生み出す。`,
    },
    related: ['trance', 'goa-trance', 'tech-trance', 'hard-trance', 'bpm', 'mainstage', 'festival-anthem'],
    artists: ['astrix', 'vini-vici', 'infected-mushroom', 'ace-ventura', 'captain-hook', 'liquid-soul', 'ranji'],
    posts: ['what-is-psytrance', 'rise-of-psytrance-goa-to-modern-day', 'top-10-trance-subgenres-explained', 'best-psytrance-tracks-of-all-time-50', 'spirituality-of-trance-why-it-hits-different'],
  },

  {
    slug: 'vocal-trance',
    term: { en: 'Vocal Trance', ja: 'ヴォーカル・トランス' },
    category: 'genre',
    aliases: ['vocal', 'ヴォーカル・トランス', 'ボーカル・トランス'],
    short: {
      en: 'Trance built around full sung vocal performances — typically uplifting or progressive in tempo, with verse-chorus song structure.',
      ja: '完全に歌唱されたヴォーカル・パフォーマンスを軸に構築されるトランス——一般にアップリフティングまたはプログレッシブのテンポで、Aメロ・サビの楽曲構造を持つ。',
    },
    definition: {
      en: `Vocal trance integrates full-length sung vocal performances into the trance arrangement framework — verse, chorus, and often bridge sections — with the breakdown typically used to spotlight the vocal at its most emotionally exposed. It is not simply trance with vocal samples; the vocal is the structural backbone, and the production is written around the lyric rather than the other way around. Tempos vary because the song does: an arena-ready vocal anthem may sit at 138 BPM, while a progressive vocal piece may sit closer to 128 BPM.

The subgenre took shape in the late 1990s through tracks like Robert Miles' "Children" precursor era and Delerium's "Silence" featuring Sarah McLachlan, then crystallised in the 2000s. Above & Beyond's OceanLab project with vocalist Justine Suissa, formed in 2000, is widely treated as a defining act, releasing on Anjunabeats and Ultra; "Sky Falls Down" was remixed by Armin van Buuren, and "Satellite" reached the UK top 20 in 2004. In parallel Tiësto's vocal-led material, BT's songwriting-focused albums, and Markus Schulz on Coldharbour developed the wider template. Anjunabeats remains the most prolific modern home for the sound.

The production grammar typically inverts standard trance priorities. The breakdown is the song's emotional centre rather than a pause before the drop; the vocal is dry, close-mic'd, and pushed forward in the mix. Instrumental sections are written as response to vocal phrases rather than as autonomous melodic material. Reverbs and delays around the vocal are long and tail-cut to leave room for the next phrase. The chorus often arrives with a re-entry of the full drum bed rather than a synth lead.

For me as a listener, vocal trance is the doorway people come through when they first discover the genre. The Tomorrowland 2018 set that pulled me in had Sun & Moon at its centre — Above & Beyond's Richard Bedford vocal, exactly the kind of writing this subgenre is built on. Seven years of weekly A State of Trance listening later, I have come to value vocal trance specifically for being the part of the family that meets non-trance listeners halfway: the lyric gives the euphoria a name.`,
      ja: `ヴォーカル・トランスは、完全長の歌唱されたヴォーカル・パフォーマンスをトランスのアレンジメントの枠組み——Aメロ、サビ、しばしばブリッジ部分——に統合し、ブレイクダウンは一般にヴォーカルを情緒的に最も露出させてスポットライトを当てるために使用される。これは単にヴォーカル・サンプルを乗せたトランスではない——ヴォーカルが構造的な背骨であり、プロダクションは歌詞の周りに書かれ、その逆ではない。テンポは楽曲によって変動する：アリーナ向けのヴォーカル・アンセムは138 BPMに位置するかもしれないし、プログレッシブ寄りのヴォーカル曲は128 BPM近くに位置するかもしれない。

サブジャンルは1990年代後半にRobert Milesの「Children」前後の時代やSarah McLachlanをフィーチャーしたDeleriumの「Silence」などを通じて形を取り、2000年代に結晶化した。2000年に結成されたAbove & Beyondのヴォーカリスト・Justine Suissaとのプロジェクト・OceanLabは決定的な存在として広く扱われ、AnjunabeatsとUltraからリリースを重ねた——「Sky Falls Down」はArmin van Buurenによってリミックスされ、「Satellite」は2004年に英国トップ20入りした。並行してTiëstoのヴォーカル主導の素材、BTのソングライティング重視のアルバム、Coldharbour上のMarkus Schulzがより広いテンプレートを発展させた。Anjunabeatsは現代でも最も多産なサウンドの拠点である。

プロダクションの文法は標準的なトランスの優先順位を反転させることが多い。ブレイクダウンはドロップ前の一時停止ではなく、楽曲の情緒的中心である。ヴォーカルはドライで近接マイク、ミックスの前面に押し出される。インストゥルメンタル部分は自律的なメロディック素材ではなくヴォーカル・フレーズへの応答として書かれる。ヴォーカル周りのリバーブとディレイは長く、次のフレーズに余地を残すよう尾を切られる。サビはシンセ・リードではなくドラム・ベッド全体の再入場と共に到来することが多い。

リスナーとしての私にとって、ヴォーカル・トランスは人々がジャンルを最初に発見するときに通る扉だ。私を引き込んだ2018年のTomorrowlandのセットの中心にはSun & Moonがあった——Above & BeyondのRichard Bedfordのヴォーカル、まさにこのサブジャンルが構築されているような書法だ。それから毎週A State of Tranceを聴く7年間を経て、ヴォーカル・トランスをトランス非聴取者と中間で出会うファミリーの一部として特に高く評価するようになった——歌詞がユーフォリアに名前を与えてくれるからだ。`,
    },
    related: ['trance', 'uplifting-trance', 'progressive-trance', 'dream-trance', 'anthem', 'breakdown', 'anjunabeats-anjunadeep'],
    artists: ['above-and-beyond', 'dash-berlin', 'gareth-emery', 'emma-hewitt', 'christina-novelli', 'susana', 'haliene'],
    posts: ['role-of-vocals-in-trance-music', 'iconic-trance-anthems-that-defined-an-era', 'what-is-vocal-trance', 'best-vocal-trance-tracks-of-all-time-50', 'iconic-trance-vocalists-voices-behind-anthems', 'above-beyond-anjuna-empire'],
  },

  {
    slug: 'hard-trance',
    term: { en: 'Hard Trance', ja: 'ハード・トランス' },
    category: 'genre',
    aliases: ['hardtrance', 'ハードトランス'],
    short: {
      en: 'Aggressive, kick-driven trance variant (140–150+ BPM) with distorted basslines and peak-time energy.',
      ja: 'ディストーションのかかったベースラインとピークタイムのエネルギーを持つ、攻撃的でキック主導のトランスのバリアント（140〜150+ BPM）。',
    },
    definition: {
      en: `Hard trance is a faster, more aggressive variant of trance built around hard-hitting kicks, distorted basslines, and tempos that typically run 140–150 BPM and beyond. The style emerged from the late-1990s German and Dutch hard-house and rave scenes and was a fixture of clubs like Hamburg's Tunnel Club (opened 1993 on the Reeperbahn, whose programming explicitly shifted toward hardtrance, hardstyle, and hardcore through the late 1990s). Productions emphasise raw kick punch, hoover-style synth stabs, and unapologetic peak-time energy, with less concern for the harmonic patience of progressive or the polished melody of uplifting. While hard trance receded from the mainstream in the late 2000s, it remains alive through events and labels in Germany, the UK, and Australia, and its DNA can be heard in modern psy-tech and harder Subculture-aligned trance.`,
      ja: `ハード・トランスはハード・ヒッティングなキック、ディストーションのかかったベースライン、一般に140〜150 BPM以上のテンポを軸に構築される、より速くより攻撃的なトランスのバリアントである。スタイルは1990年代後半のドイツとオランダのハードハウス・レイヴシーンから登場し、ハンブルクのTunnel Club（1993年にReeperbahnでオープン、1990年代後半にかけてプログラムが明示的にハードトランス／ハードスタイル／ハードコアへとシフトしていった）などのクラブの定番となった。プロダクションは生のキックのパンチ、フーバー系のシンセ・スタブ、妥協なきピークタイム・エネルギーを強調し、プログレッシブの和声的忍耐やアップリフティングの洗練されたメロディへの関心は薄い。ハード・トランスは2000年代後半にメインストリームから後退したが、ドイツ、英国、オーストラリアのイベントとレーベルを通じて生き続けており、そのDNAは現代のサイ・テックやよりハードなSubculture寄りのトランスに聞き取ることができる。`,
    },
    related: ['trance', 'tech-trance', 'acid-trance', 'psytrance', 'bpm'],
    artists: ['ferry-corsten', 'simon-patterson', 'bryan-kearney'],
    posts: ['top-10-trance-subgenres-explained'],
  },

  {
    slug: 'goa-trance',
    term: { en: 'Goa Trance', ja: 'ゴア・トランス' },
    category: 'genre',
    aliases: ['goa', 'ゴアトランス'],
    short: {
      en: 'The original psychedelic-trance sound from the Goa beach party scene of the early 1990s — psytrance\'s direct ancestor.',
      ja: '1990年代初頭のゴアのビーチ・パーティ・シーンから生まれたオリジナルのサイケデリック・トランスサウンド——サイトランスの直接の祖先。',
    },
    definition: {
      en: `Goa trance is the original psychedelic-trance sound that developed in the Indian state of Goa during the early 1990s, when international travellers brought European acid house, EBM, and ambient records to all-night beach parties. Producers like Goa Gil, Hallucinogen, Astral Projection, and Man With No Name shaped a sound characterised by mid-tempo (around 135–145 BPM) grooves, heavily filtered Eastern-modal melodies, evolving polyphonic synth lines, and explicitly altered-states-of-consciousness aesthetics. By the late 1990s the sound had splintered: a faster, harder offshoot crystallised into modern psytrance, while purists continued recording in the original style under the "Goa trance" or "neo-Goa" labels. The sound remains a touchstone for the entire psytrance family.`,
      ja: `ゴア・トランスは、1990年代初頭にインド・ゴア州で発展したオリジナルのサイケデリック・トランスサウンドである。国際的な旅行者たちがヨーロッパのアシッドハウス、EBM、アンビエント・レコードを徹夜のビーチ・パーティに持ち込んだことで生まれた。Goa Gil、Hallucinogen、Astral Projection、Man With No Nameらプロデューサーが、中テンポ（およそ135〜145 BPM）のグルーヴ、強くフィルターされた東洋旋法的メロディ、展開するポリフォニックなシンセライン、そして変性意識状態を明示的に志向する美学を特徴とするサウンドを形作った。1990年代後半までにサウンドは分裂した——より速くハードな派生が現代サイトランスとして結晶化し、純粋主義者は「ゴアトランス」または「ネオゴア」のラベルでオリジナル・スタイルでの録音を続けた。サウンドはサイトランス全ファミリーの試金石として残っている。`,
    },
    related: ['psytrance', 'trance', 'acid-trance'],
    artists: ['astrix', 'infected-mushroom'],
    posts: ['rise-of-psytrance-goa-to-modern-day', 'history-of-trance-music'],
  },

  {
    slug: 'tech-trance',
    term: { en: 'Tech Trance', ja: 'テック・トランス' },
    category: 'genre',
    aliases: ['techtrance', 'テックトランス'],
    short: {
      en: 'Trance variant that incorporates techno-style drums, harder basslines, and minimal melodic content (138–142 BPM).',
      ja: 'テクノ風のドラム、ハードなベースライン、ミニマルなメロディック・コンテンツを取り入れたトランスのバリアント（138〜142 BPM）。',
    },
    definition: {
      en: `Tech trance sits at the intersection of trance and techno, taking the four-on-the-floor pulse and emotional architecture of trance and reinforcing them with the tougher kick design, modulated basslines, and reduced melodic content of techno. Tempos typically run 138–142 BPM. The sound was pioneered by artists including Sander van Doorn, Marco V, Sean Tyas, and Simon Patterson, and Coldharbour Recordings, Subculture, Tytanium, and VII have been important homes for it. The result is a peak-time tool that delivers trance's communal lift without the softer melodic flourishes — a darker, more mechanically driving listening experience that has become a key sound of modern festival main-room trance and has cross-pollinated heavily with psytrance to produce the psy-tech subgenre.`,
      ja: `テック・トランスはトランスとテクノの交差点に位置し、トランスの四つ打ちパルスと情緒的アーキテクチャを取り入れ、テクノのよりタフなキック・デザイン、変調されたベースライン、削減されたメロディック・コンテンツでそれらを強化する。テンポは一般に138〜142 BPM。サウンドはSander van Doorn、Marco V、Sean Tyas、Simon Pattersonらのアーティストにより開拓され、Coldharbour Recordings、Subculture、Tytanium、VIIが重要な本拠地となってきた。結果として、ソフトなメロディック・フローリッシュなしでトランスの共同体的高揚を届けるピークタイム・ツールが生まれた——よりダークで、より機械的にドライブするリスニング体験で、現代フェスのメインルーム・トランスの主要サウンドとなり、サイトランスとも大いに混交してサイ・テック・サブジャンルを生み出した。`,
    },
    related: ['trance', 'hard-trance', 'progressive-trance', 'psytrance', 'bpm'],
    artists: ['ferry-corsten', 'sean-tyas', 'simon-patterson', 'markus-schulz'],
    posts: ['top-10-trance-subgenres-explained', 'underground-trance-scene'],
  },

  {
    slug: 'acid-trance',
    term: { en: 'Acid Trance', ja: 'アシッド・トランス' },
    category: 'genre',
    aliases: ['acid', 'アシッドトランス'],
    short: {
      en: 'Trance variant built around the squelching, resonant TB-303 acid bassline.',
      ja: 'TB-303のスクェルシュ系で共鳴するアシッド・ベースラインを軸に構築されるトランスのバリアント。',
    },
    definition: {
      en: `Acid trance is a trance variant defined by the use of the Roland TB-303 (or its modern equivalents) to generate the squelching, resonant, modulated bassline that gives the style its name. The sound originated in the early 1990s as producers blended Chicago acid house with the emerging European trance template, with Hardfloor's "Acperience 1" (1992) often cited as a foundational document. Acid trance retains the steady four-on-the-floor pulse and breakdown-buildup architecture of trance while replacing the rolling 16th-note bassline with the 303's distinctive synthetic snake of cutoff and resonance modulation. The sound is closely related to acid techno and remains a niche but loyal sub-tradition within the wider trance world, with revivals appearing periodically through the 2000s and 2010s.`,
      ja: `アシッド・トランスは、Roland TB-303（またはその現代の同等品）を用いてスタイル名の由来となるスクェルシュ系の共鳴・変調されたベースラインを生成することで定義されるトランスのバリアントである。サウンドは1990年代初頭、プロデューサーたちがシカゴ・アシッドハウスと出現しつつあった欧州トランスの雛形を融合させたときに発生した。Hardfloorの「Acperience 1」（1992）は基礎的文書としてしばしば引用される。アシッド・トランスは一定の四つ打ちパルスとブレイクダウン・ビルドアップのアーキテクチャを保持しつつ、16分音符の転がるベースラインを303独特のカットオフと共鳴の変調による合成的な蛇体に置き換える。サウンドはアシッド・テクノと近接関係にあり、より広いトランス世界の中ではニッチだが忠実なサブ伝統として残っており、2000年代と2010年代を通じて定期的にリバイバルが現れる。`,
    },
    related: ['trance', 'goa-trance', 'tech-trance', 'hard-trance'],
    artists: ['ferry-corsten', 'paul-van-dyk'],
    posts: ['history-of-trance-music', 'top-10-trance-subgenres-explained'],
  },

  {
    slug: 'dream-trance',
    term: { en: 'Dream Trance', ja: 'ドリーム・トランス' },
    category: 'genre',
    aliases: ['dream', 'ドリームトランス', 'ドリームハウス'],
    short: {
      en: 'Italian-led 1990s style featuring slow, melodic piano hooks over trance grooves — also known as dream house.',
      ja: 'トランス・グルーヴ上にスロー・メロディックなピアノのフックを乗せる1990年代のイタリア発祥スタイル。「ドリームハウス」とも呼ばれる。',
    },
    definition: {
      en: `Dream trance — sometimes called dream house — is a 1990s subgenre that emerged largely from the Italian dance scene, with Robert Miles' "Children" (1995) and "Fable" (1996) as its breakthrough moments. The style is characterised by slow, melancholic piano hooks (often arpeggiated) carrying the main melody over trance-style four-on-the-floor grooves at moderate tempos (usually 130–135 BPM), with reduced bass aggression and a heavy emphasis on emotional resolution. Robert Miles famously composed "Children" as a gentler closing track to soothe ravers driving home in the small hours, and the style retained that introspective, almost cinematic quality. Dream trance had its commercial peak in the mid-90s but its DNA persists in the sentimental side of modern progressive and vocal trance.`,
      ja: `ドリーム・トランス——時に「ドリームハウス」とも呼ばれる——は1990年代のサブジャンルで、主にイタリアのダンスシーンから登場した。Robert Milesの「Children」（1995）と「Fable」（1996）がブレイクスルーの瞬間となった。スタイルは、スローで哀愁のあるピアノのフック（しばしばアルペジオ）が中庸のテンポ（通常130〜135 BPM）でトランス風の四つ打ちグルーヴ上にメイン・メロディを担い、ベースの攻撃性を抑え、情緒的解決を重く強調することを特徴とする。Robert Milesは早朝に運転して帰るレイバーを和ませるための優しいクロージング・トラックとして「Children」を作曲したと有名で、スタイルはその内省的でほぼ映画的な質を保持した。ドリーム・トランスは90年代半ばに商業的ピークを迎えたが、そのDNAは現代のプログレッシブとヴォーカル・トランスの感傷的な側面に存続している。`,
    },
    related: ['trance', 'progressive-trance', 'vocal-trance', 'balearic-trance', 'breakdown'],
    artists: [],
    posts: ['history-of-trance-music', 'top-10-trance-subgenres-explained', 'what-is-dream-trance'],
  },

  {
    slug: 'balearic-trance',
    term: { en: 'Balearic Trance', ja: 'バレアリック・トランス' },
    category: 'genre',
    aliases: ['balearic', 'バレアリック', 'バレアリックトランス', 'cafe del mar trance'],
    short: {
      en: 'Sun-soaked, slower-tempo trance form rooted in the Ibiza / Balearic Islands sunset-bar tradition — 120–130 BPM grooves with Mediterranean instrumentation.',
      ja: 'イビザ／バレアレス諸島のサンセット・バー伝統に根ざした、太陽を浴びたよりスロー・テンポのトランス形式——地中海楽器を伴う120〜130 BPMグルーヴ。',
    },
    definition: {
      en: `Balearic trance is the sun-soaked, slower end of the trance family, named for and rooted in the Ibiza / Balearic Islands sunset-bar tradition that José Padilla codified at Café del Mar through the early 1990s. The form runs 120–130 BPM (considerably slower than mainstream uplifting), uses Mediterranean / chillout-adjacent instrumentation — acoustic guitar samples, pan-flutes, washy reverb pads — and is engineered for late-evening and sunrise listening rather than peak-time festival rotation. The canonical record is Energy 52's "Café del Mar" (originally released 1993 on Eye Q Records, produced by Kid Paul and Cosmic Baby), which took the Padilla aesthetic and overlaid it onto the new Frankfurt-trance template; the form was extended through the late 1990s by Chicane (Nick Bracegirdle's "Offshore" 1996, "Saltwater" 1999), Solarstone's "Seven Cities" (1999), and the broader Hooj Choons output, and carried into the modern era by Roger Shah's Magic Island / Sunlounger catalogue.`,
      ja: `バレアリック・トランスはトランス・ファミリーの太陽を浴びたスローな端で、José Padillaが1990年代初頭にCafé del Marで成文化したイビザ／バレアレス諸島のサンセット・バー伝統に根ざし、その名を冠する。形式は120〜130 BPM（メインストリーム・アップリフティングよりかなり遅い）で走り、地中海／チルアウト隣接の楽器編成——アコースティック・ギター・サンプル、パンフルート、ウォッシーなリバーブ・パッド——を使用し、ピークタイム・フェスティバル・ローテーションではなく夕方後半と日の出のリスニング用に設計されている。カノニカルなレコードはEnergy 52「Café del Mar」（1993年、Eye Q Recordsからリリース、Kid PaulとCosmic Babyによるプロデュース）で、Padilla美学を新しいフランクフルト・トランス・テンプレートに重ねたものだ。形式は1990年代後半にChicane（Nick Bracegirdleの「Offshore」1996、「Saltwater」1999）、Solarstoneの「Seven Cities」（1999）、より広いHooj Choons出力によって延長され、Roger ShahのMagic Island／Sunloungerカタログによって現代に運ばれた。`,
    },
    related: ['trance', 'progressive-trance', 'dream-trance', 'breakdown', 'pad'],
    artists: ['roger-shah', 'solarstone'],
    posts: ['what-is-balearic-trance', 'history-of-trance-music', 'top-10-trance-subgenres-explained', 'ibiza-and-trance-love-story'],
  },

  {
    slug: 'melodic-techno',
    term: { en: 'Melodic Techno', ja: 'メロディック・テクノ' },
    category: 'genre',
    aliases: ['melodic', 'メロディックテクノ', 'melodic house and techno'],
    short: {
      en: 'Atmospheric, harmonically-rich techno that emerged in the 2010s and converged with progressive trance via the Afterlife and Anjunadeep axes.',
      ja: '2010年代に出現し、AfterlifeとAnjunadeep軸を介してプログレッシブ・トランスと収束した大気的で和声的に豊かなテクノ。',
    },
    definition: {
      en: `Melodic techno is an atmospheric, harmonically-rich variant of techno that emerged in the 2010s as a reaction to the harder, more functional techno of the time. The form runs 120–125 BPM, emphasises long-form arrangement and emotional development over peak-time pressure, and uses lush pads, evolving arpeggios, and cinematic textural layering rather than the metallic minimalism of older techno. Its centre of gravity is the Afterlife label (Tale of Us, founded 2016) and the broader Innervisions / Anjunadeep / Diynamic axis. The form has converged significantly with progressive trance — the boundary between modern progressive trance (Anjunadeep — Yotto, Tinlicker, Lane 8) and modern melodic techno (Afterlife — Anyma, Mind Against, Mathame) is genuinely blurred, with the same artists frequently appearing on both label families and the same listeners following both. Melodic techno's mainstage breakthrough came via Anyma's residency-scale productions, notably the historic <em>Afterlife presents Anyma: The End of Genesys</em> Sphere Las Vegas run that opened on 27 December 2024 — the first electronic-artist residency at the venue — and his 2025 Coachella appearance with Yeat.`,
      ja: `メロディック・テクノは2010年代に当時のよりハードで機能的なテクノへの反応として出現した、大気的で和声的に豊かなテクノのバリアントだ。形式は120〜125 BPMで走り、ピークタイム圧力よりも長尺アレンジメントと情緒的発展を強調し、古いテクノの金属的ミニマリズムではなく豊潤なパッド、展開するアルペジオ、映画的テクスチャ・レイヤリングを使用する。重心はAfterlifeレーベル（Tale of Us、2016年設立）とより広いInnervisions／Anjunadeep／Diynamic軸だ。形式はプログレッシブ・トランスと大幅に収束した——現代プログレッシブ・トランス（Anjunadeep——Yotto、Tinlicker、Lane 8）と現代メロディック・テクノ（Afterlife——Anyma、Mind Against、Mathame）の境界は真にあいまいで、同じアーティストが両方のレーベル・ファミリーに頻繁に現れ、同じリスナーが両方をフォローする。メロディック・テクノのメインステージ・ブレイクスルーは、Anymaのレジデンシー規模プロダクションを介して到来した——とりわけ2024年12月27日に開幕した歴史的な<em>Afterlife presents Anyma: The End of Genesys</em>のラスベガス・Sphereレジデンシー（同会場における電子音楽アーティスト初のレジデンシー）と、2025年Coachellaでのw/ Yeat共演がそれだ。`,
    },
    related: ['progressive-trance', 'trance', 'pad', 'breakdown'],
    artists: ['anyma', 'mind-against', 'tinlicker'],
    posts: ['what-is-progressive-trance', 'trance-vs-house-vs-techno', 'top-10-trance-subgenres-explained'],
  },
];

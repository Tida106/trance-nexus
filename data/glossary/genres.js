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

Shared production traits across the family are easy to hear once you know what to listen for. Tracks tend to be long — six to nine minutes is normal — to give the breakdown and buildup room to breathe. Lead synths sit in the upper-mid range and lean on supersaw or PWM sawtooth timbres. Pads underneath are heavily sidechained to the kick, creating the pumping bed that drives the emotional lift. The kick-bass relationship is foundational rather than ornamental; the song lives in the melodic layers above it.`,
      ja: `トランスは1980年代後半から1990年代初頭にかけて、主にドイツ・フランクフルトのテクノシーンとより広いベネルクス地域から、アシッドハウスとテクノのメロディ重視の派生ジャンルとして登場した電子ダンスミュージックである。定義的な特徴は、一定の四つ打ちパルス（一般に130〜145 BPM）、長尺のアレンジメントを通じて発展する反復的なシンセモチーフ、そしてダンスフロアでユーフォリックな解放——ジャンル名の由来となった「トランス（恍惚状態）」——を生み出すよう設計された長いブレイクダウンとビルドアップの構造である。当初からこの音楽は、グルーヴだけでなく緊張と解放を中心に組み立てられてきた。

初期サウンドを成文化したのはフランクフルトのOmenやDorian Grayといったクラブ、そしてSven Väthが共同設立したEye QやHarthouse、ベルリンのMFSといったレーベルである。Jam & Spoon、Cosmic Baby、Hardfloor、Paul van Dykらが1990年代半ばまでにテンプレートを推し進め、その後重心はオランダと英国へ移った。10年が終わるころにはTiësto、Ferry Corsten、Armin van Buuren、Paul Oakenfoldがトランスをメインステージ規模へ引き上げ、音楽は今日認識されるサブジャンル群——アップリフティング、プログレッシブ、ボーカル、サイトランス、テック、ハード——へと分岐し始めた。

ファミリー全体に共通するプロダクションの特徴は、聴き方を知れば容易に聴き取れる。トラックは長尺で、6〜9分が標準であり、ブレイクダウンとビルドアップに息をする余地を与える。リードシンセは中高域に位置し、スーパーソウやPWMノコギリ波の音色に頼る。下のパッドはキックに強くサイドチェインされ、情緒的なリフトを駆動するパンプするベッドを生み出す。キックとベースの関係は装飾ではなく基礎であり、楽曲はその上のメロディック・レイヤーに宿る。`,
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

The production grammar is recognisable within seconds. A rolling 16th-note bassline locks under a four-on-the-floor kick. Sidechained pads create the pumping bed. The breakdown strips everything back to atmosphere and an emotional motif — often a piano, plucks, or a vocal line — then a long, escalating buildup adds layer after layer until the lead synth re-enters, often an octave higher than first heard. The drop is rarely a drop in the EDM sense; it is a re-entry, the return of motion.`,
      ja: `アップリフティング・トランスは最も情緒的に明示的なトランスのサブジャンルであり、舞い上がるリードシンセ、長調のコード進行、巨大でカタルシス的なクライマックスへと構築されるブレイクダウンを通じてユーフォリックな解放の瞬間を届けるよう設計されている。現代の標準テンポは138 BPM前後で、無重力に感じるほど速く、しかしリードメロディが歌える程度には遅い。1990年代初頭のドイツのサウンドがより暗く催眠的だったのに対し、アップリフティングは意図的にすべてを光の方向へ押す——明るいスーパーソウ、長調のハーモニー、肉体的というより情緒的なインパクトへと。

スタイルは1990年代後半から2000年代初頭にかけて、Ferry Corsten、Armin van Buuren、Tiëstoというオランダのプロデューサーたちによって、フランクフルトの青写真を基にしながらより大きく、よりメロディックなピークを目指して書き上げられて鍛えられた。Arminが2001年に立ち上げたA State of Tranceラジオショウは、このサウンドの主要なグローバル放送チャンネルとなり、毎年のASOTイベントがそれをライブ形式として定着させた。およそ2008年以降、エジプトのデュオAly & Filaと彼らのFuture Sound of Egyptレーベル（2009年設立）は、より広いシーンがエレクトロハウスへ漂流したときに灯火を担い、Andrew Rayel、Bryan Kearney、Sean Tyasらのプロデューサーが2010年代を通してテンプレートを拡張した。

プロダクションの文法は数秒で識別できる。16分音符の転がるベースラインが四つ打ちキックの下でロックする。サイドチェインされたパッドがパンプするベッドを作り出す。ブレイクダウンはすべてを大気と情緒的モチーフ——多くはピアノ、プラック、ヴォーカルライン——に剥ぎ取り、その後長く昇り続けるビルドアップが層を重ね、リードシンセが最初に聴いたときよりしばしば1オクターブ高く再入場する。ドロップはEDM的な意味でのドロップではなく、再入場であり、運動の復帰である。`,
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

Production traits flip uplifting's priorities. The bassline is usually a long-tail synth rather than a 16th-note roll. Pads are wider and slower-moving, often with internal modulation. Breakdowns resolve into tension or a held atmospheric chord, not a peak lead. Lead synths, when they appear, are processed — heavy reverb, low-pass automation, off-axis stereo — to feel distant rather than soaring. The kick-bass relationship is closer to deep house than to mainstage trance.`,
      ja: `プログレッシブ・トランスは、アップリフティングの忍耐強く大気的な対極にあるサブジャンルだ——よりスロー（一般に124〜132 BPM）、よりディープ、そしてムードとテクスチャが一つのユーフォリックなピークへ向かうのではなく、多数の小節にわたって漸進的に展開する長尺アレンジメント原理の上に構築される。アップリフティングが一つの瞬間について書くなら、プログレッシブは旅について書く。同じメロディック語彙が存在するが、情緒的解放は単一のドロップに集中するのではなくトラック全体に分散される。

ジャンルのルーツは1990年代初頭の英国とドイツのプログレッシブ・ハウスにある——Renaissanceのクラブ・ナイトとBedrockやHooj Choonsといったレーベルに関連する長尺で展開するDJセットだ。Sasha & John Digweedが1996年にMinistry of Soundから発表したミックスシリーズNorthern Exposureは、一般にサウンドを成文化した文書として扱われる。2000年代を通じてTiëstoの初期アルバム、Solarstoneのミックス・コンピレーション、Markus SchulzのColdharbour Recordingsがさらに推し進めた。並行してAbove & Beyondは2005年にサブレーベルAnjunadeepを立ち上げ、以来Lane 8、Yotto、Tinlickerを抱え、プログレッシブ系譜の現代的な主要拠点となっている。

プロダクションの特徴はアップリフティングの優先順位を反転させる。ベースラインは通常16分音符のロールではなく、長い余韻を持つシンセだ。パッドはより広く、よりゆっくり動き、しばしば内部変調を伴う。ブレイクダウンはピークのリードではなく、緊張や保持された大気的なコードへと解決する。リードシンセが現れる場合、それらは処理されている——重いリバーブ、ローパス・オートメーション、軸を外したステレオ——舞い上がるよりも遠くに感じるように。キックとベースの関係はメインステージ・トランスよりディープ・ハウスに近い。`,
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

Production traits are easy to identify. The kick and bass interlock in a tight 16th-note pattern with the bass on every off-step, producing the unmistakable "boom-tsk-boom-tsk" gallop. Lead synths are FM- or wavetable-based and modulated heavily, often with pitched-down spoken-word samples or filtered atmospheric textures sweeping across the stereo field. Breakdowns are shorter than in uplifting trance and tend to release into bassline rather than into a lead.`,
      ja: `サイトランスは1990年代初頭のインド・ゴアのビーチ・パーティ・シーンから出現したトランスのサイケデリックな派生ジャンルである。そこではヨーロッパからの旅行者、イスラエルの元軍人プロデューサー、地元のサウンドシステムが、ヨーロッパのクラブ系譜とは別個の屋外優先のスタイルを構築した。定義的な特徴は、ストレートな四つ打ちトランスとは異なるギャロップのリズムを生み出す転がる16分音符のベースライン（「サイ・ベースライン」）、140〜150 BPMの範囲のテンポ、そして変性意識状態をあからさまに参照する密にレイヤーされたシュールなサウンドデザインである。ヨーロッパのトランスが光とレーザーの大聖堂のために設計されているのに対し、サイは太陽、砂塵、14時間の屋外セットのために設計されている。

1990年代初頭のゴア・シーンは1990年代後半に広い国際的サーキットへ道を譲り、その頃HOMmega Productions（1997年テルアビブ設立）を含むイスラエルのレーベルがサウンドを工業化し輸出した。ジャンルの直接の祖先であるゴア・トランスは長いメロディック・モチーフと303スタイルのアシッド・ラインを使ったが、現代のサイトランスは明示的な東洋旋法のメロディを落とし、ベースラインを前面に押し出した。サブジャンルにはフルオン（最もメロディックでフェスティバル志向のバリアント）、プログレッシブ・サイ（よりスローでグルーヴ重視）、ダークサイ・フォレスト（より速く、より抽象的）、ハイテックが含まれる。ポルトガルのBoom FestivalとハンガリーのキーOzoraがシーンの主要なヨーロッパの錨だ。Astrix、Vini Vici、Infected Mushroomらは2010年代以降サウンドをグローバル・メインストリームの観客へ届けたプロデューサーである。

プロダクションの特徴は識別が容易だ。キックとベースは16分音符のタイトなパターンで噛み合い、ベースは各オフ・ステップに置かれ、紛れもない「ブン・チャ・ブン・チャ」のギャロップを生み出す。リードシンセはFMまたはウェーブテーブル方式で重く変調され、しばしばピッチを落とした音声サンプルやステレオフィールドを横切るフィルター処理された大気的テクスチャを伴う。ブレイクダウンはアップリフティングより短く、リードではなくベースラインへ解放される傾向がある。`,
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

The production grammar typically inverts standard trance priorities. The breakdown is the song's emotional centre rather than a pause before the drop; the vocal is dry, close-mic'd, and pushed forward in the mix. Instrumental sections are written as response to vocal phrases rather than as autonomous melodic material. Reverbs and delays around the vocal are long and tail-cut to leave room for the next phrase. The chorus often arrives with a re-entry of the full drum bed rather than a synth lead.`,
      ja: `ヴォーカル・トランスは、完全長の歌唱されたヴォーカル・パフォーマンスをトランスのアレンジメントの枠組み——Aメロ、サビ、しばしばブリッジ部分——に統合し、ブレイクダウンは一般にヴォーカルを情緒的に最も露出させてスポットライトを当てるために使用される。これは単にヴォーカル・サンプルを乗せたトランスではない——ヴォーカルが構造的な背骨であり、プロダクションは歌詞の周りに書かれ、その逆ではない。テンポは楽曲によって変動する：アリーナ向けのヴォーカル・アンセムは138 BPMに位置するかもしれないし、プログレッシブ寄りのヴォーカル曲は128 BPM近くに位置するかもしれない。

サブジャンルは1990年代後半にRobert Milesの「Children」前後の時代やSarah McLachlanをフィーチャーしたDeleriumの「Silence」などを通じて形を取り、2000年代に結晶化した。2000年に結成されたAbove & Beyondのヴォーカリスト・Justine Suissaとのプロジェクト・OceanLabは決定的な存在として広く扱われ、AnjunabeatsとUltraからリリースを重ねた——「Sky Falls Down」はArmin van Buurenによってリミックスされ、「Satellite」は2004年に英国トップ20入りした。並行してTiëstoのヴォーカル主導の素材、BTのソングライティング重視のアルバム、Coldharbour上のMarkus Schulzがより広いテンプレートを発展させた。Anjunabeatsは現代でも最も多産なサウンドの拠点である。

プロダクションの文法は標準的なトランスの優先順位を反転させることが多い。ブレイクダウンはドロップ前の一時停止ではなく、楽曲の情緒的中心である。ヴォーカルはドライで近接マイク、ミックスの前面に押し出される。インストゥルメンタル部分は自律的なメロディック素材ではなくヴォーカル・フレーズへの応答として書かれる。ヴォーカル周りのリバーブとディレイは長く、次のフレーズに余地を残すよう尾を切られる。サビはシンセ・リードではなくドラム・ベッド全体の再入場と共に到来することが多い。`,
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
      en: `Hard trance is a faster, more aggressive variant of trance built around hard-hitting kick drums, distorted basslines, and tempos that typically run 140–150 BPM and beyond. The style emerged in the mid-to-late 1990s from the German and Dutch hard-house and rave scenes, taking the breakdown-buildup-drop architecture of trance and pushing every parameter in the direction of physical impact: louder kicks, dirtier bass tones, more compressed mixdowns, and shorter, more punishing arrangements engineered for peak-time room response rather than headphone listening. Where uplifting trance writes toward emotional release, hard trance writes toward physical assault. Where progressive trance writes for patience, hard trance writes for immediate effect.

The signature production palette is recognisable within seconds. The "hoover" synth stab — a thick, slightly detuned sawtooth chord patch popularised by the Roland Alpha Juno-2 / MKS-50 "What the?" preset and by rave-era acid records — appears across almost the entire subgenre. Kick drums are layered, heavily compressed, and tuned low for body but cut hard in the top end for click; basslines often use distorted square or saw waves running in an offbeat eighth-note pattern under the kick. Breakdowns are shorter than in uplifting trance and tend to release into bassline rather than into a soaring lead. Vocal samples, when they appear, are typically pitched-up shouts or rave-era stab phrases rather than full sung lines.

The German scene was the form's spiritual home. Hamburg's Tunnel Club — opened in November 1993, originally at Große Freiheit 10 in the St. Pauli district and later moving to other Reeperbahn / St. Pauli addresses — explicitly shifted its programming toward hardtrance, hardstyle, and hardcore through the late 1990s, hosting star DJs including Carl Cox, Westbam, and Sven Väth alongside the Dutch hardstyle collective (The Prophet, Zany, Isaac). Labels such as DJs @ Work / Tunnel Records, Bonzai Trance Progressive, and Tidy Trax in the UK formalised the catalogue, and producers including Scot Project, DuMonde, and Yoji Biomehanika became identifying names.

While hard trance receded from the international mainstream in the late 2000s as the broader trance scene moved toward Anjunabeats-style melodic production and EDM-aligned big-room sounds, it remains alive through events and labels in Germany, the UK, and Australia. Its DNA can be heard in modern psy-tech (which inherits the distorted offbeat bassline structure), harder Subculture-aligned trance, and the contemporary hardstyle scene that grew directly out of the same German/Dutch club circuit. Revival nights and dedicated hard-trance compilations continue to appear regularly, and many late-1990s anthems still hold their place in DJ sets at scene-specific events.`,
      ja: `ハード・トランスはハード・ヒッティングなキックドラム、ディストーションのかかったベースライン、一般に140〜150 BPM以上のテンポを軸に構築される、より速くより攻撃的なトランスのバリアントである。スタイルは1990年代半ばから後半にかけて、ドイツとオランダのハードハウス・レイヴシーンから登場し、トランスのブレイクダウン・ビルドアップ・ドロップのアーキテクチャを取り入れ、すべてのパラメーターを物理的インパクトの方向へ押し進めた：ヘッドフォン・リスニングではなくピークタイムの部屋の反応のために設計された、より大きなキック、より汚れたベース音色、より圧縮されたミックスダウン、そしてより短く厳しいアレンジメント。アップリフティング・トランスが情緒的解放へ向けて書かれるなら、ハード・トランスは物理的攻撃へ向けて書かれる。プログレッシブ・トランスが忍耐のために書かれるなら、ハード・トランスは即時の効果のために書かれる。

シグネチャーのプロダクション・パレットは数秒で識別できる。「フーバー（hoover）」シンセ・スタブ——Roland Alpha Juno-2／MKS-50の「What the?」プリセットとレイヴ時代のアシッド・レコードによって普及した、太く僅かにデチューンされたノコギリ波コード・パッチ——はほぼサブジャンル全体に現れる。キックドラムはレイヤーされ、強く圧縮され、ボディのために低くチューニングされる一方、クリックのために高域では強くカットされる；ベースラインはしばしば歪んだ矩形波またはノコギリ波を使い、キックの下でオフビートの8分音符パターンで走る。ブレイクダウンはアップリフティング・トランスより短く、舞い上がるリードではなくベースラインへ解放される傾向がある。ヴォーカル・サンプルが現れる場合、フルに歌唱されたラインではなく、ピッチを上げた叫び声やレイヴ時代のスタブ・フレーズが典型だ。

ドイツのシーンはこの形式の精神的本拠地だった。ハンブルクのTunnel Club——1993年11月にSt. Pauli地区のGroße Freiheit 10で開業し、後にReeperbahn／St. Pauliの他の住所へ移転した——は1990年代後半にかけてプログラミングを明示的にハードトランス、ハードスタイル、ハードコアへとシフトさせ、Carl Cox、Westbam、Sven Väthといったスター・DJのほか、オランダのハードスタイル集団（The Prophet、Zany、Isaac）をホストした。DJs @ Work／Tunnel Records、Bonzai Trance Progressive、英国のTidy Traxといったレーベルがカタログを形式化し、Scot Project、DuMonde、Yoji Biomehanikaなどのプロデューサーが識別可能な名前となった。

ハード・トランスは2000年代後半、より広いトランス・シーンがAnjunabeats風のメロディック・プロダクションとEDM寄りのビッグルーム・サウンドへ移行する中で国際的なメインストリームから後退したが、ドイツ、英国、オーストラリアのイベントとレーベルを通じて生き続けている。そのDNAは現代のサイ・テック（歪んだオフビート・ベースライン構造を受け継ぐ）、よりハードなSubculture寄りのトランス、そして同じドイツ／オランダのクラブ・サーキットから直接育った現代のハードスタイル・シーンに聞き取ることができる。リバイバル・ナイトや専用のハード・トランス・コンピレーションは定期的に登場し続けており、1990年代後半のアンセムの多くは、今もシーン固有のイベントのDJセットで位置を保持している。`,
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
      en: `Goa trance is the original psychedelic-trance sound that crystallised in the Indian state of Goa during the early 1990s, when an international community of travellers, expatriate hippies, and visiting DJs ran all-night outdoor parties on the beaches around Anjuna, Vagator, and Arambol. The musical raw material was European acid house, EBM, industrial, and ambient records that travelling DJs brought in through the late 1980s; by roughly 1991–1993 a distinct production style had emerged, defined by mid-tempo grooves in the 135–145 BPM range, long evolving synth lines built from filter automation, heavily modulated 303-style acid sequences, and Eastern-modal melodic motifs layered over a rolling four-on-the-floor pulse. The aesthetic was openly and unapologetically about altered states of consciousness, with track titles, artwork, and sound design all pointing the same direction.

The scene's earliest parties were held at Bamboo Forest at South Anjuna beach and Disco Valley at Vagator beach. Goa Gil — born Gilbert Levey in California in 1951 — is widely treated as the pivotal DJ figure, having lived in Goa from the early 1970s and helped engineer the transition from rock and dub to all-night electronic sets. From around 1993 onwards the sound diasporised: London-based Dragonfly Records released Hallucinogen's debut album Twisted (Simon Posford, 16 October 1995), a record whose opening track "LSD" is still treated as a defining statement of the form. The Infinity Project's Ron Rothfield (Raja Ram) and Graham Wood, with Ian St. Paul and Richard Bloor, founded TIP Records in London in 1994, and in Israel the label that became Trust In Trance Records grew up around Astral Projection's Avi Nissim and Lior Perlmutter from late 1993, releasing the genre-defining Trust In Trance compilation series.

Scene-specific traits separate Goa from the modern psy lineage. Full-moon parties on natural ground rather than club nights are the canonical setting; sets are long, hardware-driven, and built for sunrise rather than the strobe-lit drop architecture of festival main stages. The sound system culture is participatory rather than spectator-facing — no VIP areas, no LED walls. Modern descendants include "neo-Goa" producers who consciously preserve the long-form melodic style, plus the broader psytrance family that descended from this template and pushed the tempo and aggression upward through the late 1990s.`,
      ja: `ゴア・トランスは、1990年代初頭にインド・ゴア州で結晶化したオリジナルのサイケデリック・トランスサウンドである。国際的な旅行者、駐在ヒッピー、訪問DJのコミュニティがアンジュナ、ヴァガトール、アランボル周辺のビーチで徹夜の屋外パーティを運営していた。音楽的な原料は1980年代後半を通じて巡回DJが持ち込んだヨーロッパのアシッドハウス、EBM、インダストリアル、アンビエントのレコードであり、およそ1991〜1993年までに明確なプロダクション・スタイルが立ち上がった——135〜145 BPMの中テンポのグルーヴ、フィルター・オートメーションから構築される長く展開するシンセライン、強く変調された303スタイルのアシッド・シーケンス、転がる四つ打ちのパルスの上に重ねられた東洋旋法的なメロディック・モチーフによって定義される。美学は変性意識状態についてあからさまで妥協がなく、トラック・タイトル、アートワーク、サウンドデザインすべてが同じ方向を指していた。

シーン最初期のパーティは南アンジュナ・ビーチのBamboo ForestとヴァガトールのDisco Valleyで開催された。1951年にカリフォルニアでGilbert Leveyとして生まれたGoa Gilは決定的なDJの存在として広く扱われており、1970年代初頭からゴアに住み、ロックやダブから一晩中のエレクトロニック・セットへの移行を設計するのに貢献した。1993年頃からサウンドはディアスポラ化していった：ロンドン拠点のDragonfly RecordsがHallucinogenのデビュー・アルバムTwisted（Simon Posford、1995年10月16日）をリリースし、その冒頭曲「LSD」は今も形式の定義的表明として扱われる。The Infinity ProjectのRon Rothfield（Raja Ram）とGraham Wood、Ian St. PaulとRichard Bloorは1994年にロンドンでTIP Recordsを設立し、イスラエルではAstral ProjectionのAvi NissimとLior Perlmutterを中心に1993年末からTrust In Trance Recordsとなるレーベルが育ち、ジャンル定義的なTrust In Tranceコンピレーション・シリーズをリリースした。

シーン固有の特徴がゴアを現代のサイ系譜から分ける。クラブ・ナイトではなく自然の地面上のフルムーン・パーティが正典的な設定だ。セットは長く、ハードウェア駆動で、フェスのメインステージのストロボ照射のドロップ・アーキテクチャではなく日の出のために構築される。サウンドシステム文化は観客向けというより参加型——VIPエリアなし、LEDウォールなし。現代の後継には長尺メロディック・スタイルを意識的に保存する「ネオ・ゴア」プロデューサーや、このテンプレートから派生し1990年代後半を通じてテンポと攻撃性を押し上げたより広範なサイトランス・ファミリーが含まれる。`,
    },
    related: ['psytrance', 'trance', 'acid-trance', 'tech-trance', 'bpm', 'mainstage', 'festival-anthem'],
    artists: ['astrix', 'infected-mushroom', 'astral-projection', 'atmos', 'symbolic', 'solarstone'],
    posts: ['what-is-goa-trance', 'rise-of-psytrance-goa-to-modern-day', 'history-of-trance-music', 'what-is-psytrance', 'best-psytrance-tracks-of-all-time-50', 'top-10-trance-subgenres-explained'],
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
      en: `Tech trance sits at the intersection of trance and techno, taking the four-on-the-floor pulse and the breakdown-buildup-drop architecture of trance and reinforcing them with the tougher kick design, modulated basslines, and reduced melodic content of techno. Tempos typically run 138–142 BPM. The defining production move is the bass: instead of the rolling 16th-note line of uplifting, tech trance leans on an offbeat eighth-note bassline (a "rolling bass" punched on the off-beat between kicks) often built from distorted square or saw waves and routed through aggressive sidechain compression so it pumps as a single instrument with the kick. Lead synths exist but are typically shorter, more rhythmic stabs rather than the long melodic motifs of uplifting, and the breakdown tends to release into bassline rather than into a soaring lead.

The sound's centre of gravity sits in the Netherlands. Marco Verkuylen (Marco V) was active from the late 1990s with releases on In Trance We Trust, and his harder-edged productions through the early 2000s helped define the template. Sander van Doorn began his recording career in 2004 on Oxygen Recordings and became the most visible Dutch tech-trance figure of the mid-decade. The genre's commercial peak is widely identified with Marcel Woods' "Advanced," released on High Contrast Recordings on 14 October 2005 and adopted as the official Trance Energy 2006 anthem — a track whose distorted offbeat bassline and stripped melodic content became a model for how the rest of the subgenre wrote drops.

A second wave was carried by American producer Sean Tyas, who won Sander van Doorn's "Punk'd" remix contest in 2006 and broke through with his solo debut "Lift" the same year on Discover Records (Mixmag and Beatport named him Best New DJ / One To Watch on the strength of it). Ireland's John O'Callaghan moved his catalogue largely to Discover (the British label founded by John Askew) before launching Subculture Recordings in January 2010, which together with Markus Schulz's Coldharbour Recordings (founded 30 May 2005), Reorda's Tytanium, and Bryan Kearney's KARNAGE became the label-side infrastructure for the modern tech-trance ecosystem. Simon Patterson's VII Records, founded in 2014, anchored the harder UK end.

The result is a peak-time tool that delivers trance's communal lift without the softer melodic flourishes — a darker, more mechanically driving listening experience that became a key sound of festival main-room trance through the 2010s and has cross-pollinated heavily with psytrance to produce the psy-tech subgenre. Tech trance shares production DNA with the offbeat bass family of <a href="/glossary/hard-trance">hard trance</a> and the harder end of <a href="/glossary/uplifting-trance">uplifting trance</a>; it shares scene infrastructure with the broader <a href="/glossary/trance">trance</a> ecosystem and with <a href="/glossary/asot">A State of Trance</a>, where the harder productions still hold rotation slots in present-day broadcasts.`,
      ja: `テック・トランスはトランスとテクノの交差点に位置し、トランスの四つ打ちパルスとブレイクダウン・ビルドアップ・ドロップのアーキテクチャを取り入れ、テクノのよりタフなキック・デザイン、変調されたベースライン、削減されたメロディック・コンテンツでそれらを強化する。テンポは一般に138〜142 BPM。定義的なプロダクションの動きはベースだ：アップリフティングの転がる16分音符のラインの代わりに、テック・トランスはオフビートの8分音符のベースライン（キックの合間のオフビートに打ち込まれる「ローリング・ベース」）に依拠する——しばしば歪んだ矩形波またはノコギリ波で構築され、攻撃的なサイドチェイン・コンプレッションを通してキックと単一の楽器としてパンプするようルーティングされる。リード・シンセは存在するが、アップリフティングの長いメロディック・モチーフではなく、より短くリズミックなスタブが典型で、ブレイクダウンは舞い上がるリードよりもベースラインへ解放される傾向がある。

サウンドの重心はオランダにある。Marco Verkuylen（Marco V）は1990年代後半からIn Trance We Trustでのリリースで活動し、2000年代初頭を通じた彼のよりハードな作品がテンプレートの定義に貢献した。Sander van Doornは2004年にOxygen Recordingsでレコーディング・キャリアを始め、10年代半ばで最も目立つオランダのテック・トランス人物となった。ジャンルの商業的ピークは広くMarcel Woodsの「Advanced」と同一視される——2005年10月14日にHigh Contrast Recordingsからリリースされ、Trance Energy 2006公式アンセムに採用された——その歪んだオフビートのベースラインと削ぎ落とされたメロディック・コンテンツは、サブジャンルの残りがドロップをどう書くかのモデルとなった。

第二波はアメリカのプロデューサーSean Tyasによって運ばれた。彼は2006年にSander van Doornの「Punk'd」リミックス・コンテストを勝ち取り、同年にDiscover Recordsからソロ・デビュー「Lift」でブレイクスルーした（MixmagとBeatportは同曲を根拠に彼をBest New DJ／One To Watchに指名した）。アイルランドのJohn O'Callaghanは2010年1月にSubculture Recordingsを立ち上げる前にカタログの大部分をDiscover（John Askewが設立した英国レーベル）に移しており、Markus SchulzのColdharbour Recordings（2005年5月30日設立）、ReordaのTytanium、Bryan KearneyのKARNAGEとともに、現代テック・トランス・エコシステムのレーベル側インフラとなった。Simon PattersonのVII Records（2014年設立）が、よりハードな英国側を錨付けた。

結果として、ソフトなメロディック・フローリッシュなしでトランスの共同体的高揚を届けるピークタイム・ツールが生まれた——よりダークで、より機械的にドライブするリスニング体験で、2010年代を通してフェスのメインルーム・トランスの主要サウンドとなり、サイトランスとも大いに混交してサイ・テック・サブジャンルを生み出した。テック・トランスは<a href="/glossary/hard-trance">ハード・トランス</a>とアップリフティングのよりハードな端のオフビート・ベース・ファミリーとプロダクションDNAを共有し、より広い<a href="/glossary/trance">トランス</a>エコシステムと<a href="/glossary/asot">A State of Trance</a>とシーン・インフラを共有する——そこではよりハードな作品が現在の放送でもローテーション枠を保持し続けている。`,
    },
    related: ['trance', 'hard-trance', 'progressive-trance', 'psytrance', 'bpm', 'asot'],
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
      en: `Acid trance is a trance variant defined by the use of the Roland TB-303 (or its modern equivalents) to generate the squelching, resonant, modulated bassline that gives the style its name. The TB-303 Bass Line was a small silver box originally released by Roland in 1981–1982 as a bass-guitar accompaniment device for solo guitarists. It was a commercial failure and was discontinued by 1984, but cheap second-hand units found their way into Chicago house studios later in the decade, where producers — beginning with Phuture's "Acid Tracks" (1987) — discovered that aggressively automating the unit's cutoff and resonance controls produced a uniquely vocal, snake-like synthetic timbre that no other instrument could replicate. That sound became the foundation of acid house and later of acid trance.

The acid-trance subgenre crystallised in the early 1990s as Frankfurt and Düsseldorf producers blended the Chicago acid template with the emerging European trance architecture of steady four-on-the-floor pulses and breakdown-buildup-drop arrangements. Hardfloor — the German duo of Oliver Bondzio and Ramon Zenker, who became known for running up to six TB-303s simultaneously — released the Hardtrance Acperience EP on Sven Väth's Harthouse label (catalogue HH008) on 7 July 1992, and the EP's lead track "Acperience 1" is still treated as the foundational document of the subgenre. The Frankfurt scene around Harthouse and Eye Q Records carried the template through the mid-1990s, with Resistance D, Cygnus X, and others extending it.

Production-side, acid trance retains the steady four-on-the-floor kick and the breakdown-buildup-drop architecture of trance while replacing the rolling 16th-note bassline of uplifting with the 303's distinctive synthetic snake. Producers automate the TB-303's cutoff filter, resonance, accent, and slide controls continuously throughout a track — typically with the resonance pushed high enough that the filter self-oscillates and the bassline reads almost as a lead voice rather than a sub-supporting element. Modern hardware (Roland's TB-03, TB-3, and the recent TB-303 reissue) and software emulations (D16 Phoscyon, AudioRealism Bass Line, Roland Cloud TB-303) target this exact behaviour, and the workflow has not fundamentally changed in the thirty-plus years since "Acperience 1."

The sound is closely related to acid techno (the harder, faster sibling associated with London's Liberator collective and the Stay Up Forever label) and to goa trance, which inherited 303-style acid lines and laid them over Eastern-modal melodic motifs. Acid trance itself remains a niche but loyal sub-tradition within the wider trance world, with revivals appearing periodically through the 2000s and 2010s and a steady flow of new releases on small dedicated labels.`,
      ja: `アシッド・トランスは、Roland TB-303（またはその現代の同等品）を用いてスタイル名の由来となるスクェルシュ系の共鳴・変調されたベースラインを生成することで定義されるトランスのバリアントである。TB-303 Bass Lineは、Rolandが1981〜1982年にソロ・ギタリスト向けのベース・ギター伴奏装置として発売した小さな銀色の箱だった。商業的には失敗し1984年までに製造中止となったが、安価な中古品はその後シカゴ・ハウスのスタジオに流れ込み、プロデューサーたち——Phutureの「Acid Tracks」（1987）に始まる——が、カットオフと共鳴コントロールを攻撃的にオートメーションすると、他の楽器が再現できない独特に声楽的で蛇状の合成音色が生まれることを発見した。そのサウンドがアシッドハウス、そして後のアシッド・トランスの基礎となった。

アシッド・トランスのサブジャンルは1990年代初頭、フランクフルトとデュッセルドルフのプロデューサーたちがシカゴのアシッド・テンプレートを、出現しつつあった欧州トランスの一定の四つ打ちパルスとブレイクダウン・ビルドアップ・ドロップのアーキテクチャと融合させたときに結晶化した。Hardfloor——Oliver BondzioとRamon Zenkerによるドイツのデュオで、最大6台のTB-303を同時に走らせることで知られるようになった——は、Sven VäthのHarthouseレーベル（カタログ番号HH008）から1992年7月7日にHardtrance Acperience EPをリリースし、その先頭曲「Acperience 1」は今もサブジャンルの基礎的文書として扱われる。HarthouseとEye Q Recordsを中心とするフランクフルトのシーンが、Resistance D、Cygnus Xらと共にこのテンプレートを1990年代半ばまで運んだ。

プロダクション側では、アシッド・トランスはトランスの一定の四つ打ちキックとブレイクダウン・ビルドアップ・ドロップのアーキテクチャを保持しつつ、アップリフティングの16分音符の転がるベースラインを303独特の合成的な蛇体に置き換える。プロデューサーはトラック全体でTB-303のカットオフ・フィルター、共鳴、アクセント、スライドの各コントロールを継続的にオートメーションする——典型的には共鳴がフィルター自己発振を起こすほど高く押し上げられ、ベースラインはサブ・サポート要素というよりほとんどリード・ヴォイスのように読まれる。現代のハードウェア（RolandのTB-03、TB-3、最近のTB-303再発）とソフトウェア・エミュレーション（D16 Phoscyon、AudioRealism Bass Line、Roland Cloud TB-303）はまさにこの挙動を狙っており、ワークフローは「Acperience 1」から30年以上経った今も根本的には変わっていない。

サウンドはアシッド・テクノ（ロンドンのLiberator集団とStay Up Foreverレーベルに関連する、よりハードで速い兄弟ジャンル）およびゴア・トランス（303スタイルのアシッド・ラインを継承し、東洋旋法的なメロディック・モチーフの上に重ねた）と近接関係にある。アシッド・トランス自体は、より広いトランス世界の中ではニッチだが忠実なサブ伝統として残っており、2000年代と2010年代を通じて定期的にリバイバルが現れ、専用の小規模レーベル上で新作リリースが安定して流れ続けている。`,
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
      en: `Dream trance — sometimes called dream house — is a 1990s subgenre that emerged largely from the Italian dance scene and is most strongly associated with Robert Miles. The style is characterised by slow, melancholic piano hooks (often arpeggiated) carrying the main melody over trance-style four-on-the-floor grooves at moderate tempos (typically 130–135 BPM), with reduced bass aggression and a heavy emphasis on emotional resolution rather than peak-time intensity. Where uplifting trance writes toward a climactic drop, dream trance writes toward a held atmospheric moment — the piano motif is allowed to repeat almost as a lullaby, the chord progression resolves rather than tensions, and the listener is meant to feel sentiment rather than euphoria.

The genre's breakthrough moments are documented in unusual detail. Robert Miles' "Children" was first released in Italy in January 1995 on Joe T. Vannelli's DBX label as part of the Soundtracks EP, then issued internationally in late 1995 and through 1996 where it went to number one in more than a dozen countries; it became the lead single from his debut album Dreamland, released on 7 June 1996. "Fable," released the same year (appearing on Dreamland in both "Message Version" and "Dream Version"), confirmed the style as more than a one-off. Other Italian and continental producers — including Gigi D'Agostino's "Bla Bla Bla" lineage on the harder side and the BXR / Media Records ecosystem more broadly — extended the template through the late 1990s.

The form was created in response to a specific cultural moment. Italian rave culture in the early 1990s had become associated with high rates of fatal car accidents involving clubbers driving home from all-night parties — estimates run into the thousands across the decade — and Robert Miles has been widely cited as having composed "Children" specifically as a gentler closing track to soothe ravers during the dawn drive. The piano-led, lower-energy texture is therefore not just an aesthetic choice; it is a deliberate functional response to the role the music had to play in the room and immediately afterwards.

Dream trance had its commercial peak in the mid-1990s and largely receded as a labelled genre by the end of the decade, displaced by the harder Dutch uplifting template and by progressive house. Its DNA persists clearly in the sentimental side of modern progressive trance — the piano-led breakdown bed that appears in Above &amp; Beyond, Anjunadeep, and many Anjunabeats vocal releases is a direct continuation — and revival edits and remixes of "Children" appear in DJ sets at roughly regular intervals to this day.`,
      ja: `ドリーム・トランス——時に「ドリームハウス」とも呼ばれる——は1990年代のサブジャンルで、主にイタリアのダンスシーンから出現し、Robert Milesと最も強く結びついている。スタイルは、スローで哀愁のあるピアノのフック（しばしばアルペジオ）が中庸のテンポ（通常130〜135 BPM）でトランス風の四つ打ちグルーヴ上にメイン・メロディを担い、ベースの攻撃性を抑え、ピークタイムの強度よりも情緒的解決を重く強調することを特徴とする。アップリフティング・トランスがクライマックス的なドロップへ向けて書かれるなら、ドリーム・トランスは保持された大気的な瞬間へ向けて書かれる——ピアノのモチーフはほとんど子守歌のように繰り返されることが許され、コード進行は緊張を作るより解決し、リスナーはユーフォリアよりも感傷を感じることを意図されている。

このジャンルのブレイクスルーの瞬間は珍しいほど詳細に記録されている。Robert Milesの「Children」は1995年1月にJoe T. VannelliのDBXレーベルからSoundtracks EPの一部としてイタリアで初リリースされ、1995年後半から1996年にかけて国際リリースされて10カ国以上で1位を獲得した；1996年6月7日にリリースされたデビュー・アルバム『Dreamland』からの先行シングルとなった。同年リリースの「Fable」（『Dreamland』に「Message Version」と「Dream Version」の両方で収録）が、このスタイルが一過性ではないことを確認した。他のイタリアと大陸ヨーロッパのプロデューサーたち——ハード側のGigi D'Agostino「Bla Bla Bla」系譜やより広いBXR／Media Recordsエコシステム——も1990年代後半を通してテンプレートを拡張した。

この形式は特定の文化的瞬間への応答として作られた。1990年代初頭のイタリアのレイヴ文化は、徹夜のパーティから運転して帰るクラバーを巻き込む致命的な交通事故の高い発生率と関連付けられるようになっており——その十年を通じた推計は数千件に及ぶ——Robert Milesは特に夜明けの運転中のレイバーを和ませるための、より優しいクロージング・トラックとして「Children」を作曲したと広く引用される。ピアノ主導の低エネルギーなテクスチャは、したがって単なる美学的選択ではなく、音楽が部屋とその直後に果たすべき役割への意図的な機能的応答である。

ドリーム・トランスは1990年代半ばに商業的ピークを迎え、より硬いオランダのアップリフティング・テンプレートとプログレッシブ・ハウスに押されて、10年が終わるころにはラベル化されたジャンルとしては大幅に後退した。そのDNAは現代プログレッシブ・トランスの感傷的な側面に明確に存続している——Above &amp; Beyond、Anjunadeep、そして多くのAnjunabeatsヴォーカル・リリースに現れるピアノ主導のブレイクダウン・ベッドはその直接の継続である——そして「Children」のリバイバル・エディットやリミックスは、今日に至るまでほぼ定期的にDJセットに登場している。`,
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
      en: `Balearic trance is the sun-soaked, slower end of the trance family, named for and rooted in the Ibiza / Balearic Islands sunset-bar tradition that José Padilla codified at Café del Mar through the early 1990s. The form runs 120–130 BPM (considerably slower than mainstream uplifting), uses Mediterranean / chillout-adjacent instrumentation — acoustic guitar samples, pan-flutes, washy reverb pads — and is engineered for late-evening and sunrise listening rather than peak-time festival rotation. Where uplifting writes toward catharsis and progressive writes toward journey, balearic writes toward atmosphere and place. The form is defined less by tempo or production palette than by where and when it is intended to be heard: with the sun on the horizon and the dancefloor still hours away.

The geographic anchor is real. Café del Mar opened on Sant Antoni's western coast in 1980, with interiors designed by Catalan architect Lluis Güell, deliberately oriented for an unobstructed view of the Mediterranean sunset. José Padilla — born in Barcelona in 1955, resident in Ibiza from 1975, and DJ at Café del Mar from 1991 until his departure in 1999 — turned the sunset slot into a curated listening session, programming ambient, world, and slower electronic records timed so the most emotional moments coincided with the disappearance of the sun. His <em>Café del Mar Volumen 1</em> compilation, released on React Music in 1994 and selling internationally, exported the format worldwide; he curated the first six volumes from 1994 through 1999 before the venue launched its own Café del Mar Music label. Padilla died of colon cancer on 22 October 2020.

The canonical balearic trance record is Energy 52's "Café del Mar," released on Sven Väth's Eye Q Records in May 1993. The track was a collaboration between two Berlin producers — Paul Schmitz-Moormann (Kid Paul) and Harald Blüchel (Cosmic Baby) — who took the Padilla sunset aesthetic and overlaid it onto the new Frankfurt-trance breakdown architecture, with the original Kid Paul Mix on one 12-inch side and Cosmic Baby's Impression on the other. The record entered immediate scene-canonical status and has been remixed officially over a dozen times across the next three decades, including the 2024 Orbital and Michael Mayer reworks. The form was extended through the late 1990s by Chicane (Nick Bracegirdle's "Offshore," released 9 December 1996 on Xtravaganza, and "Saltwater" in 1999, built around a vocal sample of Máire Brennan from Clannad's "Theme from Harry's Game"), Solarstone's "Seven Cities" (1999, produced by Rich Mowatt and Andy Bury, sampling Miriam Stockley from Adiemus' "Tintinnabulum"), and the broader Hooj Choons output. The modern era is carried by Roger Shah's Magic Island Records and his Sunlounger project, which has effectively held the lineage in continuous output through the 2010s and 2020s.

Balearic trance overlaps significantly with the chillout, downtempo, and Café del Mar-style ambient lineages on its slower side, and with <a href="/glossary/progressive-trance">progressive trance</a>, <a href="/glossary/dream-trance">dream trance</a>, and the more atmospheric end of <a href="/glossary/trance">trance</a> proper on its faster side. It maintains a steady audience precisely because the function it serves — sunset listening, golden-hour DJ sets, the moment before the night actually starts — has not been displaced by any later genre. The geographic and temporal anchor it carries from Padilla's Café del Mar slot remains structurally intact.`,
      ja: `バレアリック・トランスはトランス・ファミリーの太陽を浴びたスローな端で、José Padillaが1990年代初頭にCafé del Marで成文化したイビザ／バレアレス諸島のサンセット・バー伝統に根ざし、その名を冠する。形式は120〜130 BPM（メインストリーム・アップリフティングよりかなり遅い）で走り、地中海／チルアウト隣接の楽器編成——アコースティック・ギター・サンプル、パンフルート、ウォッシーなリバーブ・パッド——を使用し、ピークタイム・フェスティバル・ローテーションではなく夕方後半と日の出のリスニング用に設計されている。アップリフティングがカタルシスへ向けて書かれ、プログレッシブが旅へ向けて書かれるなら、バレアリックは大気と場所へ向けて書かれる。形式はテンポやプロダクション・パレットによってより、どこでいつ聴かれることを意図しているか——地平線に太陽があり、ダンスフロアはまだ何時間も先である瞬間——によって定義される。

地理的アンカーは実在する。Café del Marは1980年にサン・アントニの西海岸にオープンし、カタルーニャ人建築家Lluis Güellによる内装で、地中海の夕日を遮るもののない眺望に意図的に向けられた。José Padilla——1955年バルセロナ生まれ、1975年からイビザ在住、1991年から1999年に去るまでCafé del MarのDJ——はサンセット・スロットをキュレーションされたリスニング・セッションに変え、最も情緒的な瞬間が太陽の消失と一致するよう、アンビエント、ワールド、よりスローな電子レコードをプログラミングした。彼の<em>Café del Mar Volumen 1</em>コンピレーションは1994年にReact Musicからリリースされ国際的に売れ、フォーマットを世界へ輸出した；彼は1994年から1999年まで最初の6巻をキュレーションし、その後会場が独自のCafé del Mar Musicレーベルを立ち上げた。Padillaは2020年10月22日、結腸がんで死去した。

カノニカルなバレアリック・トランスのレコードはEnergy 52「Café del Mar」で、1993年5月にSven VäthのEye Q Recordsからリリースされた。トラックは2人のベルリンのプロデューサー——Paul Schmitz-Moormann（Kid Paul）とHarald Blüchel（Cosmic Baby）——のコラボレーションで、Padillaのサンセット美学を新しいフランクフルト・トランスのブレイクダウン・アーキテクチャに重ねたものだ。12インチの一方の面にオリジナルのKid Paul Mix、もう一方の面にCosmic Baby's Impressionが収録された。レコードは即座にシーン正典の地位に入り、その後30年間で公式に十数回リミックスされており、2024年のOrbitalとMichael Mayerのリワークも含まれる。形式は1990年代後半にChicane（Nick Bracegirdleの「Offshore」、1996年12月9日Xtravaganzaリリース、そして1999年の「Saltwater」、Clannadの「Theme from Harry's Game」のMáire Brennanのヴォーカル・サンプルを軸に構築された）、Solarstoneの「Seven Cities」（1999、Rich MowattとAndy Buryによるプロデュース、Adiemus「Tintinnabulum」のMiriam Stockleyをサンプリング）、より広いHooj Choons出力によって延長された。現代はRoger ShahのMagic Island Recordsと彼のSunloungerプロジェクトによって運ばれ、2010年代と2020年代を通して系譜を実質的に連続出力で保持してきた。

バレアリック・トランスはスロー側でチルアウト、ダウンテンポ、Café del Mar系のアンビエント系譜と、より速い側で<a href="/glossary/progressive-trance">プログレッシブ・トランス</a>、<a href="/glossary/dream-trance">ドリーム・トランス</a>、そして<a href="/glossary/trance">トランス</a>本体のより大気的な端と大きく重なる。果たす機能——サンセット・リスニング、ゴールデン・アワーのDJセット、夜が実際に始まる前の瞬間——が後発のジャンルに置き換えられていないからこそ、それは安定した聴衆を保つ。PadillaのCafé del Marスロットから持ち越した地理的・時間的アンカーは構造的に無傷のままだ。`,
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

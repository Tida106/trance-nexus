// Batch 3 — DJ / Performance terms

export const djs = [
  {
    slug: 'beatmatching',
    term: { en: 'Beatmatching', ja: 'ビートマッチング' },
    category: 'dj',
    aliases: ['beat-matching', 'ビートマッチ'],
    short: {
      en: 'Aligning the tempos and beats of two tracks so they play in sync — the foundational DJ skill.',
      ja: '2つのトラックのテンポと拍を同期させて再生する技術——DJの基礎的スキル。',
    },
    definition: {
      en: `Beatmatching is the foundational technical skill of DJing: aligning the tempo (BPM) and the beat positions of two tracks so they play in perfect sync, allowing one to fade smoothly into the other without the listener perceiving the transition. Before beatmatching existed, DJs simply talked between records or accepted abrupt cuts. With it, the continuous DJ set became possible as a musical form rather than a sequence of separate songs — every long-form trance journey, every two-hour ASOT broadcast, every Markus Schulz open-to-close marathon rests on this single technique.

The invention is widely credited to Francis Grasso (1948–2001), an American DJ who worked at the New York clubs Salvation II, Tarots, and most famously the Sanctuary — a converted German Baptist church on West 43rd Street and 9th Avenue — between roughly 1969 and 1971. Grasso was the first DJ to combine three innovations in everyday practice: monitoring the cue record through headphones, using turntables with pitch controls to match the two records' speeds, and slip-cueing them in on the downbeat. The skills he passed to his protégés Michael Cappello and Steve D'Acquisto spread through New York clubland and became the foundation of every DJ technique that followed, from disco to Chicago house to Detroit techno to the long European trance set.

Manual beatmatching is performed by adjusting the pitch fader on a turntable or CDJ to match the BPMs of the two records, then nudging the platter or jog wheel by hand to align the downbeats. The DJ listens to the outgoing track through the main system and the incoming track through headphones, hunting for the moment the two kick drums lock together. Once locked, drift is corrected by tiny pitch-fader adjustments throughout the blend, because no two clocks run identically over time. On vinyl this is a tactile skill — fingertips on the platter edge, ears triangulating between cans and floor monitor — and learning it well takes months of repetition.

Modern DJ software — Rekordbox, Serato, Traktor — includes sync features that beatmatch automatically by analysing each track's grid and slaving one tempo to the other. The use of sync is controversial among purists, who argue that manual beatmatching is essential to crafting a musical mix and that an over-reliance on sync can paper over selection decisions a DJ should be making consciously. Many top trance DJs use sync as a safety net while still beatmatching the actual blend by ear. Either way, beatmatching alone is not enough for a quality mix: a perfectly beatmatched transition can still land at the wrong moment musically, which is the territory of phrasing.`,
      ja: `ビートマッチングはDJングの基礎的な技術スキルだ：2つのトラックのテンポ（BPM）と拍の位置を完璧に同期させて再生し、リスナーがトランジションを知覚することなく一方が他方へとスムーズにフェードできるようにする。ビートマッチングが存在する以前は、DJはレコード間で話すか、唐突なカットを受け入れるしかなかった。これによってはじめて、連続したDJセットは個別の楽曲の連続ではなく、ひとつの音楽形式として成立した——あらゆる長尺トランスの旅、毎週2時間のASOTの放送、Markus Schulzのオープン・トゥ・クローズのマラソンは、すべてこの単一のテクニックの上に立っている。

その発明は、アメリカのDJであるFrancis Grasso（1948–2001）に広く帰せられる。彼は1969年頃から1971年頃にかけて、ニューヨークのクラブSalvation II、Tarots、そして最も有名なSanctuary——West 43rd Streetと9th Avenue角のドイツ系バプテスト教会を改装したクラブ——で働いていた。Grassoは3つの革新を日常的な実践のなかで初めて組み合わせたDJだった：キュー・レコードをヘッドフォンでモニタリングすること、ピッチ・コントロール付きターンテーブルを使って2枚のレコードの速度を一致させること、そしてダウンビートでスリップ・キューを切ること。彼が弟子のMichael CappelloとSteve D'Acquistoに伝えたスキルは、ニューヨークのクラブランドを介して広がり、ディスコからシカゴ・ハウス、デトロイト・テクノ、長尺の欧州トランス・セットに至るまで、その後のあらゆるDJテクニックの基礎となった。

マニュアル・ビートマッチングは、ターンテーブルやCDJのピッチ・フェーダーを2枚のBPMが一致するまで調整し、その後プラッタまたはジョグ・ホイールを手でナッジしてダウンビートを揃えることで実行される。DJは出ていくトラックをメイン・システムで、入ってくるトラックをヘッドフォンで聴き、2つのキックドラムが噛み合う瞬間を探す。ロックされた後も、2つのクロックは時間とともにわずかに異なるため、ブレンド中ずっと微小なピッチ・フェーダー調整でドリフトを修正する。バイナルでは触覚的スキルだ——指先でプラッタの縁、耳でヘッドフォンとフロア・モニターの間を三角測量する——習得には何ヶ月もの反復が必要だ。

Rekordbox、Serato、Traktorといった現代のDJソフトウェアには、各トラックのグリッドを解析して一方のテンポをもう一方に従属させる、自動的にビートマッチするsync機能が含まれている。syncの使用は純粋主義者の間で議論を呼ぶ——マニュアル・ビートマッチングは音楽的なミックスを作る上で不可欠であり、syncに過度に依存すると、DJが意識的に行うべき選曲判断を覆い隠してしまうという主張だ。多くのトップ・トランスDJはsyncを安全網として使いつつ、実際のブレンドは耳でビートマッチしている。いずれにせよ、ビートマッチング単独では質の高いミックスには十分ではない：完全にビートマッチされたトランジションでも、音楽的に間違った瞬間に着地することはあり得る——それがフレージングの領域である。`,
    },
    related: ['phrasing', 'bpm', 'set', 'tracklist'],
    artists: ['markus-schulz', 'paul-van-dyk'],
    posts: ['how-to-mix-trance-beatmatching-phrasing', 'how-to-dj-trance-beginners-guide'],
  },

  {
    slug: 'phrasing',
    term: { en: 'Phrasing', ja: 'フレージング' },
    category: 'dj',
    aliases: ['phrase mixing', 'フレーズミックス'],
    short: {
      en: 'Aligning DJ transitions with the musical structure of tracks (typically every 16, 32, or 64 bars).',
      ja: 'DJトランジションをトラックの音楽的構造に揃えること（通常16、32、または64小節ごと）。',
    },
    definition: {
      en: `Phrasing is the practice of timing DJ transitions to match the musical structure of the tracks being mixed. Most dance music is composed in phrases of 16, 32, or 64 bars — a buildup might run 16 bars, a drop section might be 32 bars, a breakdown 32 or 64. A skilled DJ aligns transitions so that key structural moments line up: the new track's drop arrives exactly as the outgoing track's drop ends, or the buildup of the new track plays during the breakdown of the outgoing one. Beatmatching alone is not enough for a quality mix — phrase-level timing is what separates competent technical DJing from genuinely musical mixing. Phrase mixing is one of the harder skills to internalise but is what makes long-form trance sets feel coherent and narrative-driven.`,
      ja: `フレージングは、ミックスされるトラックの音楽的構造にマッチするようDJトランジションのタイミングを取る慣行である。ほとんどのダンスミュージックは16、32、または64小節のフレーズで作曲されている——ビルドアップは16小節、ドロップ・セクションは32小節、ブレイクダウンは32または64小節という具合だ。熟練したDJはキー構造的瞬間が並ぶようトランジションを揃える：新しいトラックのドロップは、出ていくトラックのドロップが終わるのと同時に到着する、あるいは新しいトラックのビルドアップは出ていくトラックのブレイクダウン中にプレイされる。ビートマッチングだけでは質の高いミックスには十分ではない——フレーズ・レベルのタイミングこそが、有能な技術的DJングと本当に音楽的なミキシングを分ける。フレーズミックスは内面化するのが難しいスキルの一つだが、長尺のトランス・セットを一貫した物語性のあるものに感じさせるのはこれだ。`,
    },
    related: ['beatmatching', 'set', 'bpm', 'buildup', 'breakdown'],
    artists: ['markus-schulz', 'paul-van-dyk', 'john-ocallaghan'],
    posts: ['how-to-mix-trance-beatmatching-phrasing', 'how-to-dj-trance-beginners-guide'],
  },

  {
    slug: 'mashup',
    term: { en: 'Mashup', ja: 'マッシュアップ' },
    category: 'dj',
    aliases: ['mash-up', 'マッシュ'],
    short: {
      en: 'A combination of two or more existing tracks layered together — typically a vocal from one over the instrumental of another.',
      ja: '2つ以上の既存トラックを重ね合わせた組み合わせ——典型的には一方のボーカルを他方のインストゥルメンタルに乗せる。',
    },
    definition: {
      en: `A mashup is a combination of two or more existing tracks layered together to form a new composition, performed live by a DJ or pre-produced as a studio bootleg. The most common form layers the vocal of one track over the instrumental of another, creating an unexpected and often emotionally striking pairing that neither original track could deliver alone. A great mashup feels inevitable on first listen — as if the two records had been waiting to meet — even though the producer or DJ has chosen them specifically for compatible key, tempo, and emotional register. The form descends from the early-2000s "bastard pop" mashup scene and from disco/hip-hop DJ blending traditions, and has been a fixture of dance-music sets ever since.

In trance, mashups are a celebrated and intentional DJ technique rather than a workaround. The longest-running example is Above &amp; Beyond's habit of layering their own OceanLab vocal stems — Justine Suissa's vocals from tracks like "Satellite," "Sirens of the Sea," and "On a Good Day" — over different Anjunabeats instrumentals during live sets, which creates new pairings each show. The OceanLab studio acapellas exist precisely because the group expects them to be re-used in this way, and the result is that a single vocal performance has lived across dozens of distinct DJ versions over the years. Numerous third-party mashups built on the same OceanLab stems are catalogued on 1001Tracklists.

Mashups can be created in real time or pre-built. A live mashup runs two decks simultaneously past the start of the next track — DJ holds the outgoing acapella in the air via cue points or hot cues while introducing the new instrumental beneath it, beatmatched and phrase-locked so the vocal lands on the correct chord. Modern Pioneer DJ effects (the DJM mixer's beat FX, slip-mode loops, hot-cue triggers) make the technique forgiving enough that competent DJs can attempt it inside a live festival set. A pre-built mashup is produced in a DAW like a studio bootleg, exported as a single audio file, and carried on the DJ's USB drive next to their other tracks; this approach gives more polish at the cost of spontaneity.

Mashups overlap conceptually with bootlegs (both are typically unauthorised), but the categories are not identical. A bootleg may simply be an unauthorised remix of a single track. A mashup specifically requires the combination of multiple source tracks — the layering itself is the creative gesture. A DJ might carry several pre-built mashups for high-impact moments alongside a stack of standard edits and the original commercial releases, and the choice of which to deploy at a given moment becomes part of the set's narrative arc.`,
      ja: `マッシュアップは、2つ以上の既存トラックを重ね合わせて新しい楽曲を形成する組み合わせで、DJがライブで実行するか、スタジオ・ブートレッグとして事前に制作される。最も一般的な形式は、あるトラックのヴォーカルを別のトラックのインストゥルメンタルに重ね、どちらのオリジナル単体でも届けられない予期しない、しばしば情緒的に印象的なペアリングを作り出すことだ。優れたマッシュアップは初聴時に必然的に感じられる——あたかも2枚のレコードが出会うのを待っていたかのように——プロデューサーやDJが互換性のあるキー、テンポ、情緒的レジスターのために特別に選んだのだが。形式は2000年代初頭の「バスタード・ポップ」マッシュアップ・シーンと、ディスコ／ヒップホップDJのブレンディング伝統に由来し、それ以来ダンスミュージック・セットの定番となっている。

トランスにおいてマッシュアップは応急処置ではなく、称賛され意図的に行われるDJテクニックである。最も長く続く例はAbove &amp; Beyondの慣行だ——OceanLabのヴォーカル・ステム（Justine Suissaによる「Satellite」「Sirens of the Sea」「On a Good Day」などのヴォーカル）を、ライブ・セット中に異なるAnjunabeatsのインストゥルメンタルに重ねて、ショウごとに新しいペアリングを作り出す。OceanLabのスタジオ・アカペラはまさにこの方法で再利用されることをグループが見込んでいるために存在しており、結果として1つのヴォーカル・パフォーマンスが何年にもわたって何十もの異なるDJバージョンを生きている。同じOceanLabステムに基づく第三者のマッシュアップも1001Tracklistsに多数カタログ化されている。

マッシュアップはリアルタイムでも事前構築でも作成できる。ライブ・マッシュアップは2つのデッキを次のトラックの開始を越えて同時に走らせる——DJは出ていくアカペラをキュー・ポイントやホット・キューで宙に保持しつつ、その下に新しいインストゥルメンタルを導入し、ビートマッチしフレーズ・ロックしてヴォーカルが正しいコードに着地するようにする。現代のPioneer DJエフェクト（DJMミキサーのBeat FX、スリップ・モード・ループ、ホット・キュー・トリガー）はこのテクニックを十分に許容的にしており、有能なDJはライブのフェスティバル・セット内でも試みることができる。事前構築のマッシュアップはスタジオ・ブートレッグのようにDAWで制作され、単一のオーディオ・ファイルとしてエクスポートされ、DJのUSBドライブで他のトラックと並べて持ち運ばれる；このアプローチは即興性を犠牲にして仕上がりの磨きを与える。

マッシュアップはブートレッグと概念的に重なる（両者ともしばしば認可されていない）が、カテゴリは同一ではない。ブートレッグは単に単一トラックの認可されていないリミックスである場合もある。マッシュアップは特に複数のソース・トラックの組み合わせを必要とする——重ね合わせ自体が創造的ジェスチャーである。DJは標準的なエディットとオリジナルの商業リリースのスタックと並んで、高インパクトの瞬間のために事前構築されたマッシュアップを数本持ち運ぶことがあり、特定の瞬間にどれを展開するかの選択はセットの物語的アークの一部となる。`,
    },
    related: ['edit-remix-bootleg', 'set', 'b2b', 'tracklist'],
    artists: ['above-and-beyond', 'armin-van-buuren'],
    posts: ['how-to-dj-trance-beginners-guide', 'underground-trance-scene'],
  },

  {
    slug: 'track-id',
    term: { en: 'Track ID', ja: 'トラックID' },
    category: 'dj',
    aliases: ['track identification', 'song id', 'トラック識別'],
    short: {
      en: 'The act of identifying an unknown track played in a DJ set.',
      ja: 'DJセットでプレイされた未知のトラックを特定する行為。',
    },
    definition: {
      en: `"Track ID?" is the question dance music fans most frequently ask after hearing an unfamiliar record in a DJ set. The answer — the track's title and artist — is the track ID. Communities have built elaborate systems for crowdsourcing IDs: 1001Tracklists is a database where users contribute tracklists for major DJ sets and discuss unknown records, Shazam works for many releases, and Discord servers and subreddits host real-time identification threads during livestreams. Some tracks released in DJ sets remain unidentified for months or years (see ID below). For DJs, having tracks that the audience desperately wants to ID — but cannot find on streaming services — is itself a form of distinction.`,
      ja: `「Track ID？」はダンスミュージックのファンが、DJセットで馴染みのないレコードを聞いた後に最も頻繁に尋ねる質問である。答え——トラックのタイトルとアーティスト——がトラックIDだ。コミュニティはIDのクラウドソーシングのために精巧なシステムを構築してきた：1001Tracklistsは主要DJセットのトラックリストにユーザーが貢献し未知のレコードを議論するデータベース、Shazamは多くのリリースで機能する、Discordサーバーとサブレディットはライブストリーム中にリアルタイム識別スレッドをホストする。DJセットでリリースされたトラックの中には、数ヶ月から数年にわたり未特定のまま残るものもある（下記「ID」参照）。DJにとって、観客が必死にIDしたいがストリーミング・サービスでは見つけられないトラックを持つこと自体が、ある種の区別の形である。`,
    },
    related: ['id', 'tracklist', 'set', 'beatport'],
    artists: ['armin-van-buuren'],
    posts: ['how-to-dj-trance-beginners-guide', 'a-state-of-trance-show-that-changed-everything'],
  },

  {
    slug: 'id',
    term: { en: 'ID (Unreleased Track)', ja: 'ID (未公開トラック)' },
    category: 'dj',
    aliases: ['unreleased', 'id track', '未公開', '新譜未発表'],
    short: {
      en: 'A track listed in a tracklist as "ID" because it is unreleased, unannounced, or unidentified.',
      ja: '未リリース、未公表、または未特定のため「ID」としてトラックリストに記載されるトラック。',
    },
    definition: {
      en: `"ID" is the placeholder used in published tracklists for any record that cannot yet be named — most commonly because the producer hasn't released it yet, hasn't yet announced an official release, or because the DJ playing it has been given an exclusive that they aren't allowed to identify. IDs are central to the trance ecosystem: producers send unreleased material to top DJs to test crowd response and build buzz before launch, sometimes for months or years. Famous IDs in DJ sets — when finally identified — often become major releases on the strength of their reputation. Listeners obsessively track IDs through 1001Tracklists threads and ASOT/Group Therapy radio shows. The "ID lifecycle" — debut → buzz → official release — is one of the trance scene's most distinctive promotional rhythms.`,
      ja: `「ID」は公開トラックリストで、まだ名前を付けられないあらゆるレコードに使われるプレースホルダーである——最も一般的には、プロデューサーがまだリリースしていない、公式リリースをまだ発表していない、またはプレイしているDJが識別を許可されていない独占を与えられているからだ。IDはトランス・エコシステムの中心にある：プロデューサーは未リリース素材をトップDJに送り、ローンチ前に観客の反応をテストしバズを構築する——時に数ヶ月から数年にわたって。DJセットの有名なID——最終的に識別された際に——はしばしばその評判の強さでメジャー・リリースになる。リスナーは1001TracklistsのスレッドやASOT・Group Therapyのラジオ番組を通じて執着的にIDを追跡する。「IDライフサイクル」——デビュー→バズ→公式リリース——はトランス・シーンの最も特徴的なプロモーションリズムの一つである。`,
    },
    related: ['track-id', 'tracklist', 'asot', 'set'],
    artists: ['armin-van-buuren', 'above-and-beyond'],
    posts: ['a-state-of-trance-show-that-changed-everything', 'underground-trance-scene'],
  },

  {
    slug: 'set',
    term: { en: 'Set / DJ Set', ja: 'セット / DJセット' },
    category: 'dj',
    aliases: ['dj set', 'live set', 'ライブセット'],
    short: {
      en: 'A continuous DJ performance — the curated, beatmatched journey through a sequence of tracks.',
      ja: '連続したDJパフォーマンス——一連のトラックを通じてキュレーションされ、ビートマッチされた旅。',
    },
    definition: {
      en: `A DJ set is a continuous performance in which a DJ mixes a sequence of tracks into a single coherent musical flow rather than playing them as separate songs. The set, not the individual track, is the unit of musical performance in dance-music culture: a song-by-song playlist is what a radio host does, while a DJ binds tracks together via beatmatching, phrasing, and selection so that the whole performance reads as one continuous piece of music.

Sets vary enormously in length and intent. A club opening (warmup) slot might be 60 to 90 minutes and is designed to ease the early crowd into the room; a peak-time festival headline is typically 90 minutes to 2 hours and is engineered around drops and anthems; a closing set, played after every other artist has finished, can run 90 minutes to several hours; and an open-to-close marathon — Markus Schulz's signature format, which he has run repeatedly at Avalon Hollywood including annual New Year's Eve performances — can extend across an entire night, frequently exceeding six hours and running until well after sunrise. Open-to-close sets demand a fundamentally different kind of energy management than a peak-time slot: the DJ has to build, deflate, and rebuild multiple times across the night rather than aiming at a single peak.

The art of the set lies not just in track selection but in narrative arc. A great DJ takes the crowd through emotional peaks and valleys, plants motifs early that pay off later, deploys anthems strategically rather than front-loading them, and reads the room in real time — watching where dancers are looking, how their bodies are moving, when they start to drift toward the bar — and adjusts selection accordingly. Two DJs playing the same record collection in the same room on the same night will produce dramatically different sets because the order and the timing carry as much weight as the records themselves.

Recorded sets have become a major secondary distribution channel for dance music. Weekly radio shows such as A State of Trance and Group Therapy publish each episode as a set; mix compilations capture studio-sequenced sets in album form; and video platforms have created entirely new set formats. Cercle, founded in 2016 by Derek Barbolla and best known for filming DJ sets in cultural-heritage venues — beginning with a Møme set at the Eiffel Tower in October 2016 — has produced over 240 events worldwide, including more than thirty at UNESCO World Heritage Sites. Together with festival livestreams and platform-native series (Beatport, Boiler Room), recorded sets now reach audiences that significantly exceed the live attendance at the original performance.`,
      ja: `DJセットは、DJが一連のトラックを別々の楽曲としてではなく、単一の一貫した音楽的流れへとミックスする連続パフォーマンスである。ダンスミュージック文化において音楽的パフォーマンスの単位は個々のトラックではなくセットだ——曲ごとに切り替わるプレイリストはラジオ・ホストの仕事であり、DJはビートマッチング、フレージング、選曲を通じてトラック同士を結びつけ、パフォーマンス全体が連続した1つの音楽として読まれるようにする。

セットは長さと意図において大きく異なる。クラブのオープニング（ウォームアップ）・スロットは典型的に60〜90分で、早めの観客を部屋に慣らすために設計される；ピークタイムのフェスティバル・ヘッドラインは通常90分から2時間で、ドロップとアンセムを中心に組み立てられる；他のすべてのアーティストが終わった後にプレイされるクロージング・セットは90分から数時間に及ぶ；そしてオープン・トゥ・クローズのマラソン——Markus Schulzのシグネチャー・フォーマットで、Avalon Hollywoodで毎年大晦日を含めて繰り返し行われている——は一晩全体に延長され、しばしば6時間を超えて日の出を過ぎて続く。オープン・トゥ・クローズのセットは、ピークタイム・スロットとは根本的に異なるエネルギー管理を要求する：DJは単一のピークを目指すのではなく、一晩のうちに複数回、構築し、しぼませ、再構築しなければならない。

セットの芸術はトラック選択だけでなく物語的アークにある。優れたDJは観客を情緒的なピークと谷を通じて連れ、後で報われるモチーフを早い段階で植え、アンセムを前倒しで投入せずに戦略的に展開し、リアルタイムで部屋を読む——ダンサーがどこを見ているか、どう体を動かしているか、いつバーへ流れ始めるかを観察し、選曲を調整する。同じレコード・コレクションを同じ部屋で同じ夜にプレイする2人のDJは、レコード自体と同じくらい順序とタイミングが重みを持つため、劇的に異なるセットを生み出すことになる。

録音されたセットはダンスミュージックの主要な二次配信チャネルとなった。A State of TranceやGroup Therapyのような週次ラジオ番組は各エピソードをセットとして公開し、ミックス・コンピレーションはスタジオで順序付けされたセットをアルバム形式で捉え、ビデオ・プラットフォームは全く新しいセット・フォーマットを生み出した。2016年にDerek Barbollaによって設立され、文化遺産的会場でDJセットを撮影することで最も知られるCercle——2016年10月のエッフェル塔でのMømeのセットに始まる——は世界中で240以上のイベントを制作しており、そのうち30以上はユネスコ世界遺産で行われている。フェスティバルのライブ配信とプラットフォーム独自のシリーズ（Beatport、Boiler Room）と並んで、録音されたセットは現在、元のパフォーマンスのライブ来場者数を大きく上回る観客に届いている。`,
    },
    related: ['tracklist', 'beatmatching', 'phrasing', 'closing-set', 'warmup'],
    artists: ['markus-schulz', 'armin-van-buuren', 'above-and-beyond'],
    posts: ['how-to-dj-trance-beginners-guide', 'best-trance-clubs-in-europe'],
  },

  {
    slug: 'tracklist',
    term: { en: 'Tracklist', ja: 'トラックリスト' },
    category: 'dj',
    aliases: ['track list', 'cuesheet', 'cue sheet', 'トラリス'],
    short: {
      en: 'The ordered list of tracks played in a DJ set or compilation, sometimes with timestamps.',
      ja: 'DJセットまたはコンピレーションでプレイされたトラックの順序付きリスト。タイムスタンプを伴うこともある。',
    },
    definition: {
      en: `A tracklist is the ordered list of tracks played in a DJ set, mix compilation, or radio show — usually published after the fact, sometimes with timestamps for each entry. Tracklists are essential for fans who want to identify tracks they heard in a set, for ID hunting, and for understanding a DJ's musical thinking and selection style. 1001Tracklists has become the central global database for crowdsourced tracklists, with users transcribing major sets and helping to identify unknown tracks (IDs). Many DJ radio shows publish official tracklists on their websites — A State of Trance, Group Therapy, Future Sound of Egypt all do — while festival sets are typically left to the community to transcribe.`,
      ja: `トラックリストは、DJセット、ミックス・コンピレーション、またはラジオ番組でプレイされたトラックの順序付きリストである——通常は事後に公開され、各エントリーにタイムスタンプを伴うこともある。トラックリストは、セットで聞いたトラックを識別したいファン、IDハンティング、そしてDJの音楽的思考と選曲スタイルを理解するために不可欠だ。1001Tracklistsはクラウドソースのトラックリストの中心的なグローバル・データベースとなり、ユーザーが主要なセットを書き起こし、未知のトラック（ID）の識別を助けている。多くのDJラジオ番組は公式トラックリストをウェブサイトで公開している——A State of Trance、Group Therapy、Future Sound of Egyptはすべてそうだ——フェスのセットは通常、コミュニティに書き起こしを任される。`,
    },
    related: ['set', 'track-id', 'id', 'asot'],
    artists: ['armin-van-buuren', 'above-and-beyond'],
    posts: ['a-state-of-trance-show-that-changed-everything', 'how-to-dj-trance-beginners-guide'],
  },

  {
    slug: 'b2b',
    term: { en: 'B2B (Back-to-Back)', ja: 'B2B (バック・トゥ・バック)' },
    category: 'dj',
    aliases: ['back-to-back', 'back to back', 'バックトゥバック'],
    short: {
      en: 'Two or more DJs alternating tracks within the same set, mixing into each other in real time.',
      ja: '2人以上のDJが同じセット内でトラックを交互にプレイし、リアルタイムで互いにミックスする形式。',
    },
    definition: {
      en: `A B2B (back-to-back) is a DJ format in which two or more DJs share a single slot, alternating tracks and mixing each other's selections in real time rather than playing separate sets in sequence. The unit of exchange is usually one or two records each — DJ A plays a track, DJ B beatmatches the next track in over it, DJ A then comes back over the top, and the conversation continues that way for the duration of the slot. The result is musically and structurally different from a solo set: the narrative arc is shared, the selection is unpredictable even to the performers themselves, and the energy is built collaboratively rather than dictated by a single curator.

The format originated in club culture, where resident DJs would informally swap records mid-set to keep the room fresh or to hand off to a guest, and migrated into festival programming as crowds responded to the visible chemistry of two trusted names sharing a booth. The new-millennium techno B2B partnerships — Carl Cox with Adam Beyer being one of the longest-running — established the modern festival B2B as a marquee format in its own right rather than a backup arrangement. Carl Cox's curated "Carl Cox &amp; Friends" programming at Ultra Music Festival, The BPM Festival, and Tomorrowland built B2B sets into a recurring stage identity, and Carl Cox B2B Charlotte de Witte at Ultra Europe 2022 went viral with over three million YouTube views within weeks, demonstrating how much current festival audiences value the format. In trance, the announcement of Armin van Buuren B2B Adam Beyer at A State of Trance Rotterdam (ASOT Festival 2025) is one prominent recent example of the format crossing into the trance mainstage.

A successful B2B requires more than shared musical taste. The DJs need overlapping but non-identical libraries (so the selection has both shared reference points and surprise), compatible mixing styles and key/BPM ranges, and the ability to read a partner's intent in real time — picking up the energy they are setting, deciding whether to extend it or pivot, and trusting them to do the same with your own selections. Friction over who is "winning" the set, or over whose track follows whose, is the most common reason B2Bs go wrong; the best partnerships feel like a conversation rather than a competition.

Three- or four-DJ B2Bs (sometimes written "B2B2B" or "B2B2B2B") are festival favourites for exactly this reason — they are inherently unpredictable, force the participants to listen rather than impose, and often produce moments no single DJ would have created alone. Some B2B partnerships have become recurring annual events in their own right, with the same pairing returning across multiple festival seasons and developing a shared musical vocabulary that regular fans actively follow.`,
      ja: `B2B（バック・トゥ・バック）は、2人以上のDJが単一のスロットを共有し、別々のセットを順番に行うのではなく、リアルタイムで互いの選曲を交互にミックスするDJフォーマットだ。交換の単位は通常それぞれ1〜2枚のレコードである——DJ Aがトラックをかけ、DJ Bがその上に次のトラックをビートマッチして入れ、DJ Aが上から戻ってきて、スロットの間その対話が続く。結果として生まれるのは、ソロ・セットとは音楽的にも構造的にも異なるものだ：物語的アークは共有され、選曲は演者自身にも予測不可能で、エネルギーは単一のキュレーターによって指示されるのではなく協調的に構築される。

このフォーマットはクラブ文化に起源を持つ。レジデントDJがセットの途中で非公式にレコードを交換し、部屋を新鮮に保ったりゲストへ引き継いだりしていたところ、2人の信頼できる名前がブースを共有する目に見えるケミストリーに観客が反応したのを受けて、フェスティバルのプログラミングへ移行した。新世紀のテクノB2Bパートナーシップ——Carl CoxとAdam Beyerは最も長く続いているものの1つ——は、現代のフェスティバルB2Bを代替手段ではなく、それ自体が看板フォーマットとして確立した。Carl CoxがキュレートするUltra Music Festival、The BPM Festival、TomorrowlandでのCarl Cox &amp; Friendsプログラミングは、B2Bセットを定例のステージ・アイデンティティに組み上げ、Ultra Europe 2022でのCarl Cox B2B Charlotte de WitteはYouTubeで数週間以内に300万回以上の再生を集めてバイラル化し、現在のフェス観客がこのフォーマットをどれほど評価しているかを示した。トランスでは、A State of Trance Rotterdam（ASOTフェスティバル2025）でのArmin van Buuren B2B Adam Beyerの発表が、このフォーマットがトランスのメインステージに渡った最近の顕著な例のひとつだ。

成功するB2Bは音楽的趣味の共有以上を必要とする。DJたちは重なりつつも同一ではないライブラリ（選曲に共有された参照点とサプライズの両方があるよう）、互換性のあるミキシング・スタイルとキー／BPMレンジ、そしてパートナーの意図をリアルタイムで読む能力——パートナーが設定しているエネルギーを拾い、それを延長するか方向転換するかを決め、自分の選曲についても同じことをしてくれるとパートナーを信じる能力——を必要とする。誰がセットを「勝っている」か、誰のトラックの後に誰のトラックが続くかをめぐる摩擦は、B2Bが失敗する最も一般的な理由だ；最高のパートナーシップは競争ではなく会話のように感じられる。

3人または4人のDJのB2B（「B2B2B」または「B2B2B2B」と書かれることもある）はフェスの定番だ——本質的に予測不可能で、参加者に押し付けではなく聴くことを強い、しばしば単独のDJでは生み出せなかった瞬間を生む。一部のB2Bパートナーシップはそれ自体が定例の年次イベントとなっており、同じペアが複数のフェスティバル・シーズンにわたって戻ってきて共有された音楽的ヴォキャブラリーを発展させ、それを常連ファンが積極的に追いかける。`,
    },
    related: ['set', 'closing-set', 'warmup', 'mainstage'],
    artists: ['armin-van-buuren', 'andrew-rayel', 'above-and-beyond'],
    posts: ['a-state-of-trance-show-that-changed-everything', 'tomorrowland-trance-stage'],
  },

  {
    slug: 'closing-set',
    term: { en: 'Closing Set', ja: 'クロージング・セット' },
    category: 'dj',
    aliases: ['closing slot', 'closer', 'クロージング'],
    short: {
      en: 'The final DJ set of a night or stage, traditionally given to the headline artist or a respected closer.',
      ja: '夜またはステージの最後のDJセット——伝統的にヘッドライン・アーティストまたは尊敬されるクローザーに与えられる。',
    },
    definition: {
      en: `The closing set is the final DJ slot of a night or stage at a club or festival. It is a position of significant prestige in dance music: the closer plays after every other artist has finished, has the longest sustained relationship with the audience, and is responsible for delivering both the night's emotional peak and its eventual resolution. Famous closers in trance include Paul van Dyk, long associated with late-night and closing slots at major festivals and his own VONYC events, and Markus Schulz, whose open-to-close residencies at Avalon Hollywood became legendary. A great closing set requires a different kind of energy management than a peak-time slot — building from where the previous DJ left off, knowing when to deploy classics, and reading a crowd that has been on the dancefloor for hours.`,
      ja: `クロージング・セットは、クラブまたはフェスにおける夜またはステージの最後のDJスロットだ。ダンスミュージックにおいてかなりの威信を持つポジションである：クローザーは他のすべてのアーティストが終わった後にプレイし、観客との最も長い持続的な関係を持ち、夜の情緒的ピークとその最終的な解決の両方を届ける責任を負う。トランスの有名なクローザーには、主要フェスティバルや自身のVONYC関連イベントで深夜帯／クロージング・スロットを長年担ってきたPaul van Dyk、Avalon Hollywoodでのオープン・トゥ・クローズのレジデンシーが伝説となったMarkus Schulzが含まれる。優れたクロージング・セットには、ピークタイム・スロットとは異なる種類のエネルギー管理が必要だ——前のDJが終えたところから構築し、クラシックをいつ展開するかを知り、何時間もダンスフロアにいた観客を読むこと。`,
    },
    related: ['warmup', 'set', 'mainstage', 'b2b'],
    artists: ['paul-van-dyk', 'markus-schulz'],
    posts: ['best-trance-clubs-in-europe', 'tomorrowland-trance-stage'],
  },

  {
    slug: 'warmup',
    term: { en: 'Warmup', ja: 'ウォームアップ' },
    category: 'dj',
    aliases: ['warm-up', 'warm up', 'opener', 'opening set', 'ウォームアップセット', 'オープナー'],
    short: {
      en: 'The opening DJ slot of a night, designed to ease the crowd into the energy that the headliner will deliver.',
      ja: '夜の最初のDJスロット——ヘッドライナーが届けるエネルギーへと観客を徐々に導入するよう設計されている。',
    },
    definition: {
      en: `A warmup set is the opening DJ slot of a night, played before the peak-time and headline artists. The warmup DJ's job is not to play their biggest tracks — that would steal the headline DJ's thunder — but to ease the early crowd into the room, build up gradually from lower-energy material, and leave the audience and the next DJ in the right place for the energy to climb further. A great warmup set is a craft skill in its own right and is widely respected in the DJ community: many headliners specifically thank their warmup DJs by name, knowing that a good warmup makes their own set significantly easier to land. The opposite — a warmup DJ who plays too aggressively or steals the moment — is one of the cardinal sins of the profession.`,
      ja: `ウォームアップ・セットは、ピークタイムおよびヘッドライン・アーティストの前にプレイされる夜の最初のDJスロットだ。ウォームアップDJの仕事は最大のトラックをプレイすることではない——それはヘッドライン・DJの見せ場を奪う——むしろ早めの観客を部屋に慣らし、よりローエネルギーの素材から徐々に構築し、観客と次のDJをエネルギーがさらに上昇する正しい場所に置くことだ。優れたウォームアップ・セットはそれ自体が工芸スキルであり、DJコミュニティで広く尊敬されている：多くのヘッドライナーは、良いウォームアップが自分のセットを大幅に着地しやすくすることを知って、特にウォームアップDJに名前で感謝する。その反対——アグレッシヴすぎるか瞬間を奪うウォームアップDJ——は職業の大罪の一つである。`,
    },
    related: ['closing-set', 'set', 'phrasing', 'b2b'],
    artists: ['paul-van-dyk', 'cosmic-gate'],
    posts: ['how-to-dj-trance-beginners-guide', 'best-trance-clubs-in-europe'],
  },
];

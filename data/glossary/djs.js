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
      en: `Phrasing is the practice of timing DJ transitions to match the musical structure of the tracks being mixed. A bar is a group of four beats; a phrase is a group of bars, and most modern dance music — house, techno, trance, drum &amp; bass — is organised in 8-bar phrases (32 beats) that combine into 16-, 32-, and 64-bar sections. A trance buildup might run 16 bars, a drop section 32 or 64 bars, a breakdown 32 or 64 bars, and major structural events (a new lead entering, the kick returning, a hook resolving) almost always land at the start of an 8- or 16-bar phrase boundary rather than in the middle of one.

A skilled DJ aligns transitions so that the key structural moments of the two records line up phrase-to-phrase rather than just beat-to-beat. The new track's drop arrives exactly as the outgoing track's drop ends; the buildup of the new track plays during the breakdown of the outgoing one; the second drop of the incoming track coincides with the moment the outgoing track has been faded fully out. Counting bars from a known reference point — usually the moment the kick first enters the mix — is how DJs locate where they are in the current track, and most modern DJ software (Rekordbox, Serato, Traktor) provides a visual phrase grid coloured to indicate intros, drops, breakdowns, and outros so this counting becomes visible rather than purely audible.

Beatmatching alone is not enough for a quality mix. Two records can be perfectly tempo-locked and bar-aligned and still produce a transition that feels musically wrong, because the section types do not match: introducing a buildup over an existing buildup produces a tension stack with no release, while dropping a new drop over an outgoing drop produces a wall of competing leads. Phrase-level timing is what separates competent technical DJing from genuinely musical mixing — what makes a long-form trance set feel coherent and narrative-driven rather than just continuous.

The technique is one of the harder skills to internalise. Trance is more forgiving than some genres because the form is consistent and predictable: nearly every track in the canon follows the same intro / breakdown / buildup / drop pattern at the same scale, so counting once tends to apply across many records. House and techno are similarly structured, with 8-bar phrases as the default unit and audible changes typically landing on phrase boundaries. Once a DJ has internalised the count, transitions stop being moments of risk and become deliberate compositional decisions — and the set begins to read as one piece of music rather than as a sequence.`,
      ja: `フレージングは、ミックスされるトラックの音楽的構造にマッチするようDJトランジションのタイミングを取る慣行である。小節（bar）は4拍のグループ；フレーズは小節のグループであり、ほとんどの現代ダンスミュージック——ハウス、テクノ、トランス、ドラムンベース——は8小節フレーズ（32拍）で組織され、それらが16小節、32小節、64小節のセクションへと結合される。トランスのビルドアップは16小節、ドロップ・セクションは32または64小節、ブレイクダウンは32または64小節というのが典型で、主要な構造的イベント（新しいリードの登場、キックの復帰、フックの解決）はほぼ常に8または16小節フレーズの境界の中央ではなく開始点に着地する。

熟練したDJは2枚のレコードの主要な構造的瞬間が拍ごとではなくフレーズごとに揃うようトランジションを合わせる。新しいトラックのドロップは、出ていくトラックのドロップが終わるのと同時に到着する；新しいトラックのビルドアップは、出ていくトラックのブレイクダウン中にプレイされる；入ってくるトラックの2回目のドロップは、出ていくトラックが完全にフェードアウトされた瞬間と一致する。既知の参照点——通常はキックが最初にミックスに入る瞬間——から小節を数えることが、DJが現在のトラックのどこにいるかを把握する方法であり、ほとんどの現代DJソフトウェア（Rekordbox、Serato、Traktor）は、イントロ、ドロップ、ブレイクダウン、アウトロを示す色付けされたヴィジュアル・フレーズ・グリッドを提供しており、この数えが純粋に聴覚的ではなく可視的になる。

ビートマッチングだけでは質の高いミックスには十分ではない。2枚のレコードが完全にテンポ・ロックされ小節揃えされていても、セクション・タイプが一致しなければ音楽的に間違ったトランジションを生む——既存のビルドアップに新しいビルドアップを重ねれば解放のない緊張のスタックが生まれ、出ていくドロップに新しいドロップをかぶせれば競合するリードの壁が生まれる。フレーズ・レベルのタイミングこそが、有能な技術的DJングと本当に音楽的なミキシングを分ける——長尺のトランス・セットが、ただ連続的というよりも一貫した物語性を持って感じられるようにするものだ。

このテクニックは内面化するのが難しいスキルのひとつだ。トランスはいくつかのジャンルよりも寛容で、形式が一貫して予測可能だからだ：カノンのほぼすべてのトラックが同じスケールで同じイントロ／ブレイクダウン／ビルドアップ／ドロップのパターンに従うため、一度数えれば多くのレコードに同じ感覚が適用される。ハウスとテクノも同様に構造化されており、8小節フレーズが既定の単位で、聴き取れる変化は典型的にフレーズ境界に着地する。DJが小節カウントを内面化したら、トランジションはリスクの瞬間ではなく意図的な構成的判断となり、セットは一連の楽曲というよりも一つの音楽として読まれ始める。`,
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
      en: `"ID" is the placeholder used in published tracklists for any record that cannot yet be named. The most common reasons are that the producer has not finished or released the track yet, the producer has finished it but has not yet announced an official release date, or the DJ playing it has been given an exclusive promo and is contractually not allowed to identify it on air. A tracklist that reads "Above &amp; Beyond — ID" or "Armin van Buuren feat. ID — ID" is therefore not an error or omission — it is the standard way the scene marks a track that exists in the wild but does not yet exist as a buyable commercial release.

IDs are central to the trance ecosystem in a way that does not have a clean parallel in most other genres. Producers routinely send unreleased material to top DJs months — sometimes more than a year — before any commercial release, both to test crowd response at festivals and weekly radio shows and to build anticipation. The same track may be played as an ID across dozens of sets and broadcasts, its progress tracked by listeners through 1001Tracklists threads and discussion communities, before the producer finally drops the official release announcement. This "ID lifecycle" — debut → buzz cycle → reveal → commercial release — is one of the scene's most distinctive promotional rhythms, and several of the genre's biggest singles spent significant time as buzz IDs before launching as numbered Beatport releases.

The ID-hunting community has built elaborate infrastructure around this lifecycle. 1001Tracklists hosts the central crowdsourced ID-discussion forum, where users post short audio rips of unknown tracks from DJ sets and try to identify them collaboratively. Shazam works for many releases but typically fails on IDs because the track is not yet in the commercial fingerprint database. Discord servers, subreddits, and Facebook groups host real-time identification threads during ASOT, Group Therapy, and Future Sound of Egypt broadcasts. Some IDs are solved within hours of a broadcast; others remain unsolved for months or years and acquire a near-legendary status, becoming objects of community speculation rather than mere unidentified tracks.

For DJs, carrying tracks the audience desperately wants to ID — but cannot yet find anywhere on streaming services — is itself a form of distinction. The DJ who routinely plays exclusive IDs from in-demand producers signals industry access that ordinary subscription music libraries cannot replicate. Conversely, for producers, being trusted by top DJs to send unreleased material to is one of the most useful career signals available short of an actual chart placement, because it folds them into the radio-show and festival ecosystems that distribute new trance music to the broadest possible audience.`,
      ja: `「ID」は公開トラックリストにおいて、まだ名前を付けられないあらゆるレコードに使われるプレースホルダーである。最も一般的な理由は、プロデューサーがまだトラックを完成・リリースしていない、完成はしているがまだ公式リリース日を発表していない、またはプレイしているDJが独占プロモを与えられて契約上オンエアで識別を許可されていないからだ。「Above &amp; Beyond — ID」や「Armin van Buuren feat. ID — ID」と書かれたトラックリストはエラーや省略ではない——シーンが、現場には存在するがまだ購入可能な商業リリースとしては存在しないトラックに付ける標準的なマーカーである。

IDはトランス・エコシステムの中心にあり、他のほとんどのジャンルには明確な並行物がない仕方で機能している。プロデューサーは商業リリースの数ヶ月——時には1年以上——前に未発表素材をトップDJに送り、フェスティバルや週次ラジオ番組で観客の反応を試すと同時に期待を構築する。同じトラックは公式リリース発表が出るまでに、数十のセットと放送でIDとしてプレイされ、その進捗は1001Tracklistsのスレッドやディスカッション・コミュニティを通じてリスナーに追跡される。この「IDライフサイクル」——デビュー→バズ・サイクル→公開→商業リリース——はシーン最も特徴的なプロモーション・リズムのひとつで、ジャンルの最大級のシングルのいくつかは、Beatportでのナンバリングされたリリースとしてローンチされる前に、相当な時間をバズIDとして過ごしている。

ID探偵コミュニティはこのライフサイクルの周りに精巧なインフラを構築してきた。1001TracklistsはクラウドソースのIDディスカッション・フォーラムの中心で、ユーザーがDJセットからの未知トラックの短いオーディオ・リップを投稿し、協力して特定を試みる。Shazamは多くのリリースで機能するが、トラックがまだ商業フィンガープリント・データベースに登録されていないため、IDではしばしば失敗する。Discordサーバー、サブレディット、Facebookグループは、ASOT、Group Therapy、Future Sound of Egyptの放送中にリアルタイムの識別スレッドをホストする。一部のIDは放送から数時間以内に解決されるが、他のIDは数ヶ月から数年にわたって未解決のままで、ほぼ伝説的な地位を獲得し、単なる未識別トラックではなくコミュニティの推測の対象となる。

DJにとって、観客が必死にIDしたい——しかしストリーミング・サービスではまだどこにも見つけられない——トラックを持ち運ぶこと自体が、ある種の区別の形である。需要の高いプロデューサーから独占IDを日常的にプレイするDJは、通常のサブスクリプション音楽ライブラリでは複製できない業界アクセスを示している。逆にプロデューサーにとって、トップDJに未発表素材を送って信頼されることは、実際のチャート入りに次いで利用可能な最も有用なキャリア・シグナルのひとつだ——なぜならそれは、新しいトランス音楽を可能な限り広い観客に配信するラジオ番組とフェスティバルのエコシステムに彼らを組み込むことになるからだ。`,
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
      en: `The closing set is the final DJ slot of a night or stage at a club or festival. It is a position of significant prestige in dance music: the closer plays after every other artist has finished, has the longest sustained relationship with the audience over the course of the slot, and is responsible for delivering both the night's emotional peak and its eventual resolution back down to a point where the crowd can leave the floor.

A great closing set requires a fundamentally different kind of energy management from a peak-time slot. The peak-time DJ inherits an already-warmed crowd, plays the biggest tracks of the night, and hands off to whoever follows. The closer inherits a crowd at full energy — the headliner has just spent ninety minutes or two hours pushing the room to its physical limit — and cannot simply lower the energy abruptly without emptying the floor. The standard closing technique is to start at roughly the same energy the headliner ended at, sustain it for one or two records so the transition is seamless, then descend gradually over the next hour or two through track selection (slower BPMs, deeper progressive material, atmospheric breakdown-heavy choices), letting the most dedicated dancers stay until the lights come up. The skill is in finding pieces of music that still feel meaningful at 5 or 6 in the morning to an audience that has been on the floor for six or eight hours.

Famous closers in trance include Paul van Dyk, who has been associated with late-night and closing slots at major festivals and across his Vandit label / VONYC Sessions broadcasting career, and Markus Schulz, whose open-to-close marathon residencies at Avalon Hollywood (including recurring New Year's Eve performances) effectively turned the entire night into one extended closing set. Above &amp; Beyond also routinely close their own Anjunabeats and Group Therapy events. In each case the closing slot is treated as the artistic centrepiece of the night rather than a trailing afterthought.

The closing slot is also where the most personal record selections tend to appear. Earlier in the night a DJ is playing to the broadest possible audience and is constrained by what will move a fresh crowd; the closing slot is played to a self-selected core that has chosen to stay, and the DJ can reach further into older material, longer-form progressive cuts, vocal records that would die at peak time, and the kind of selections that read as a personal statement rather than as crowd-pleasing. Many of the most fondly-remembered moments in a trance fan's listening life come from this part of the night.`,
      ja: `クロージング・セットは、クラブまたはフェスにおける夜またはステージの最後のDJスロットだ。ダンスミュージックにおいてかなりの威信を持つポジションである：クローザーは他のすべてのアーティストが終わった後にプレイし、スロットの間に観客との最も長い持続的な関係を持ち、夜の情緒的ピークと、観客がフロアを離れられる点まで戻すための最終的な解決の両方を届ける責任を負う。

優れたクロージング・セットには、ピークタイム・スロットとは根本的に異なる種類のエネルギー管理が必要だ。ピークタイムのDJは既に温まった観客を引き継ぎ、夜で最大のトラックをプレイし、続く者へバトンを渡す。クローザーはフル・エネルギーの観客を引き継ぐ——ヘッドライナーは90分または2時間をかけて部屋を物理的限界まで押し上げてきたばかり——そしてフロアを空にせずにエネルギーを唐突に下げることはできない。標準的なクロージング・テクニックは、ヘッドライナーが終えたのとほぼ同じエネルギーから始め、トランジションがシームレスになるよう1〜2レコードそれを持続させ、その後の1〜2時間を選曲（より遅いBPM、よりディープなプログレッシブ素材、大気的でブレイクダウンの多い選曲）を通じて徐々に降下し、最も熱心なダンサーが照明が点灯するまで残れるようにする。スキルは、6〜8時間フロアにいた観客にとって、朝の5時や6時にもなお意味深く感じられる音楽の断片を見つけることにある。

トランスの有名なクローザーには、主要フェスティバルおよび自身のVanditレーベル／VONYC Sessions放送キャリアを通じて深夜帯およびクロージング・スロットと結びつけられてきたPaul van Dyk、Avalon Hollywoodでのオープン・トゥ・クローズのマラソン・レジデンシー（毎年の大晦日パフォーマンスを含む）が事実上一晩全体を1つの拡張クロージング・セットに変えてきたMarkus Schulzが含まれる。Above &amp; Beyondも自身のAnjunabeatsおよびGroup Therapyイベントを定期的にクローズする。いずれのケースでもクロージング・スロットは、引きずるような後付けではなく、夜の芸術的中心として扱われる。

クロージング・スロットは、また最も個人的な選曲が現れる場所でもある。夜の早い時間にDJは可能な限り広い観客にプレイし、新鮮な観客を動かすものに制約される；クロージング・スロットは残ることを選んだ自己選別されたコアにプレイされ、DJはより古い素材、より長尺のプログレッシブ・カット、ピーク・タイムでは死ぬであろうヴォーカル・レコード、そして観客への迎合ではなく個人的な声明として読まれるたぐいの選曲へとさらに手を伸ばすことができる。トランス・ファンのリスニング人生で最も愛おしく記憶される瞬間の多くは、夜のこの部分から来ている。`,
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

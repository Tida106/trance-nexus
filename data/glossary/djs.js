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
      en: `Beatmatching is the foundational technical skill of DJing: aligning the tempo (BPM) and the beat positions of two tracks so they play in perfect sync, allowing one to fade smoothly into the other without the listener perceiving the transition. Manual beatmatching is performed by adjusting the pitch fader on a turntable or CDJ to match the BPMs, then nudging the platter (or jog wheel) by hand to align the downbeats. Modern DJ software like Rekordbox, Serato, and Traktor includes sync features that beatmatch automatically — controversial among purists, who argue that manual beatmatching is essential to crafting a quality mix. Either way, the conceptual goal remains the same: make two tracks sound like one continuous flow.`,
      ja: `ビートマッチングはDJングの基礎的な技術スキルだ：2つのトラックのテンポ（BPM）と拍の位置を完璧に同期させて再生し、リスナーがトランジションを知覚することなく一方が他方へとスムーズにフェードできるようにする。マニュアル・ビートマッチングは、ターンテーブルやCDJのピッチフェーダーを調整してBPMをマッチさせ、それからプラッタ（またはジョグホイール）を手でナッジしてダウンビートを揃えることで実行される。Rekordbox、Serato、Traktorなど現代のDJソフトウェアには自動でビートマッチするsync機能が含まれている——純粋主義者には議論を呼ぶもので、マニュアル・ビートマッチングは質の高いミックスを作る上で不可欠だと主張する。いずれにせよ概念的な目標は同じだ：2つのトラックを一つの連続した流れに聞こえさせること。`,
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
      en: `A mashup is a combination of two or more existing tracks performed live by a DJ or pre-produced as a studio bootleg. The most common form layers the vocals of one track over the instrumental of another, creating an unexpected and often emotionally striking new combination. In trance, mashups are a celebrated DJ technique: a famous example is Above & Beyond's frequent live mashups of their own vocal stems over different instrumentals. Mashups are typically created in real time with cue points and loop tools (Rekordbox, Pioneer DJ effects), or pre-built as edits the DJ carries on USB. They overlap with bootlegs (which are also unauthorised) but specifically describe the layering of multiple tracks, where a bootleg may simply be an unauthorised remix of a single track.`,
      ja: `マッシュアップは2つ以上の既存トラックの組み合わせで、DJがライブで実行するか、スタジオ・ブートレッグとして事前に制作される。最も一般的な形式は、あるトラックのボーカルを別のトラックのインストゥルメンタルに重ね、予期しない、しばしば情緒的に印象的な新しい組み合わせを作り出すことだ。トランスにおいてマッシュアップは称賛されるDJテクニックである：有名な例として、Above & Beyondが自身のボーカル・ステムを異なるインストゥルメンタルに重ねるライブ・マッシュアップを頻繁に行う。マッシュアップは一般にキュー・ポイントとループ・ツール（Rekordbox、Pioneer DJエフェクト）を用いてリアルタイムで作成されるか、DJがUSBに持ち運ぶエディットとして事前に構築される。ブートレッグ（これも認可されていない）と重なるが、特に複数トラックのレイヤリングを指す——ブートレッグは単に単一トラックの認可されていないリミックスである場合もある。`,
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
      en: `A DJ set is a continuous performance in which a DJ mixes a sequence of tracks into a single coherent flow. Sets vary enormously in length and intent: a club opening slot might be 60 minutes, a peak-time festival headline 90 minutes to 2 hours, and an open-to-close marathon set (a Markus Schulz speciality) can run multi-hour stretches that frequently exceed six hours. The art of the set lies not just in track selection but in narrative arc — building energy across opening tracks, taking the crowd through emotional peaks and valleys, deploying anthems strategically, and reading the room in real time. Recorded sets are often released as podcasts, mix compilations, or video uploads (Cercle on YouTube being a notable example), creating an enduring record of the live performance.`,
      ja: `DJセットは、DJが一連のトラックを単一の一貫した流れにミックスする連続パフォーマンスだ。セットは長さと意図において大きく異なる：クラブのオープニング・スロットは60分、ピークタイムのフェスティバル・ヘッドラインは90分から2時間、オープン・トゥ・クローズのマラソン・セット（Markus Schulzのスペシャリティ）はしばしば6時間を超えるマルチ・アワーに及ぶ。セットの芸術はトラック選択だけでなく、物語的アークにある——オープニング・トラックを通じてエネルギーを構築し、観客を情緒的なピークと谷を通じて連れ、アンセムを戦略的に配置し、リアルタイムで部屋を読む。録音されたセットはしばしばポッドキャスト、ミックス・コンピレーション、またはビデオ・アップロード（YouTubeのCercleが顕著な例）としてリリースされ、ライブ・パフォーマンスの永続的な記録を作り出す。`,
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
      en: `A B2B (back-to-back) is a DJ format in which two or more DJs share a set, alternating tracks and mixing each other's selections in real time. Famous trance B2Bs include Armin van Buuren and Andrew Rayel at A State of Trance, Above & Beyond's frequent trio sets, and Markus Schulz's collaborations with various ASOT-aligned guests. A successful B2B requires more than just shared taste: it requires an ability to read your partner's selections, react with complementary tracks, and build energy collaboratively rather than competitively. Three- or four-DJ B2Bs (sometimes called "B2B2B" or "B2B2B2B") are festival favourites — they are unpredictable, conversational, and often produce moments no DJ would have created alone. Some B2B partnerships have become recurring events in their own right.`,
      ja: `B2B（バック・トゥ・バック）は、2人以上のDJがセットを共有し、トラックを交互にプレイしながらリアルタイムで互いの選曲をミックスするDJフォーマットだ。有名なトランスのB2Bには、A State of TranceでのArmin van BuurenとAndrew Rayel、Above & Beyondの頻繁なトリオセット、Markus Schulzの様々なASOT系ゲストとのコラボレーションが含まれる。成功するB2Bは共有された趣味以上を必要とする：パートナーの選曲を読む能力、補完的なトラックで反応する能力、競争的ではなく協調的にエネルギーを構築する能力が必要だ。3人または4人のDJのB2B（時に「B2B2B」または「B2B2B2B」と呼ばれる）はフェスのお気に入りだ——予測不可能で会話的、しばしばどのDJも単独では作り出さなかった瞬間を生む。一部のB2Bパートナーシップはそれ自体が定例イベントとなっている。`,
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

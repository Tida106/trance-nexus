// Timeline data for /timeline.
//
// Two top-level exports:
//   eras   — five chronological sections, with display metadata
//   events — flat list of timeline events; each event references the era it
//            belongs to via `eraId` and (optionally) cross-references an
//            artist / label / blog post / glossary entry by slug.
//
// Event types:
//   'release'   — a notable record (trackId or query may be provided for embeds)
//   'artist'    — artist debut / breakthrough / milestone
//   'label'     — label founding / acquisition
//   'event'     — festival, radio show, cultural moment
//   'subgenre'  — emergence or peak of a subgenre/scene
//
// Refs use slugs that match data/artists/, data/labels/, data/blog/posts*.
// The component verifies links exist before rendering them; broken refs are
// rendered as plain text.

export const eras = [
  {
    id: 'genesis',
    range: '1988–1995',
    title:       { en: 'Genesis',                 ja: '黎明期' },
    headline:    { en: 'Frankfurt clubs to dream-trance crossover',
                   ja: 'フランクフルトのクラブからドリーム・トランスへ' },
    description: {
      en: 'Trance is born from acid house, German techno, and the Goa scene. The first proto-trance records appear, "trance" enters the DJ vocabulary, and Robert Miles takes the dream-trance sound mainstream.',
      ja: 'アシッドハウス、ドイツのテクノ、ゴアのシーンからトランスが生まれる。最初のプロトトランス・レコードが現れ、「トランス」がDJの語彙に入り、Robert Milesがドリーム・トランスをメインストリームへと押し上げた時代。',
    },
    accent: '#9a1a1a',
    gradient: 'from-red-950/70 via-red-900/30 to-transparent',
  },
  {
    id: 'golden',
    range: '1996–2000',
    title:       { en: 'Golden Age',              ja: '黄金期' },
    headline:    { en: 'Anthems, Anjuna, and the founding myth',
                   ja: 'アンセム、Anjuna、そして創世神話' },
    description: {
      en: 'The defining records of the genre arrive in a five-year burst: For an Angel, Out of the Blue, 9PM, 1998. Anjunabeats is founded. Goa peaks and bifurcates into psytrance.',
      ja: 'ジャンルを定義するレコードが5年間に集中して登場：「For an Angel」「Out of the Blue」「9PM」「1998」。Anjunabeats設立。ゴアがピークを迎えサイトランスへと分岐していく。',
    },
    accent: '#f97316',
    gradient: 'from-orange-900/60 via-orange-800/30 to-transparent',
  },
  {
    id: 'mainstream',
    range: '2001–2010',
    title:       { en: 'Mainstream',              ja: 'メインストリーム化' },
    headline:    { en: 'ASOT, Olympics, stadium trance',
                   ja: 'ASOT、五輪、スタジアム・トランス' },
    description: {
      en: 'A State of Trance launches and grows into a global community of 40 million weekly listeners. Tiësto plays the Athens Olympics. Trance reaches commercial heights it had never seen and never will again.',
      ja: 'A State of Tranceが始動し、毎週4000万人のグローバル・コミュニティに成長。Tiëstoがアテネ五輪で演奏。トランスはかつても、その後も到達しなかった商業的高みに到達した。',
    },
    accent: '#fb923c',
    gradient: 'from-amber-900/50 via-orange-800/20 to-transparent',
  },
  {
    id: 'diversification',
    range: '2011–2020',
    title:       { en: 'Diversification',         ja: '多様化' },
    headline:    { en: 'EDM disruption, Anjunadeep, underground revival',
                   ja: 'EDMの衝撃、Anjunadeep、アンダーグラウンドの復活' },
    description: {
      en: 'EDM swallows the mainstage, Anjunadeep deepens the progressive end, FSOE keeps uplifting alive, and Above & Beyond write the songs that prove trance can survive without the festival economy.',
      ja: 'EDMがメインステージを呑み込む一方、Anjunadeepはプログレッシブを深化、FSOEがアップリフティングを存続させ、Above & Beyondはフェスティバル経済に依存せずともトランスが生き延びることを証明する楽曲を書いた。',
    },
    accent: '#fbbf24',
    gradient: 'from-yellow-900/40 via-amber-800/25 to-transparent',
  },
  {
    id: 'modern',
    range: '2021–2026',
    title:       { en: 'Modern Era',              ja: '現代' },
    headline:    { en: 'Sphere shows, the underground rises again',
                   ja: 'Sphere公演、再び立ち上がるアンダーグラウンド' },
    description: {
      en: 'Anyma resets the visual ceiling at Las Vegas Sphere. Underground uplifting revives across Eastern Europe. ASOT crosses 1000 episodes. The genre enters its fifth decade with the audience it always deserved.',
      ja: 'AnymaがラスベガスSphereでビジュアルの天井をリセット。アンダーグラウンドのアップリフティングが東欧で復活。ASOTは1000エピソードを超える。ジャンルは値したオーディエンスとともに第5の10年に入る。',
    },
    accent: '#ff5b9c',
    gradient: 'from-pink-900/40 via-purple-900/25 to-transparent',
  },
];

export const events = [
  // ── 1988–1995 GENESIS ─────────────────────────────────────────────
  {
    id: '1988-omen-frankfurt',
    year: 1988, eraId: 'genesis', type: 'event',
    title:       { en: 'Sven Väth opens Omen in Frankfurt',
                   ja: 'Sven VäthがフランクフルトにOmenをオープン' },
    description: {
      en: 'The Frankfurt club becomes one of the incubation spaces for the German trance sound — Eye Q Records and Harthouse will form around its DJs and crowd.',
      ja: 'フランクフルトのクラブは、ドイツのトランス・サウンドの孵化器となる——Eye Q RecordsとHarthouseはここのDJとオーディエンスから生まれる。',
    },
  },
  {
    id: '1990-age-of-love',
    year: 1990, eraId: 'genesis', type: 'release',
    title:       { en: 'Age of Love — "The Age of Love"',
                   ja: 'Age of Love — "The Age of Love"' },
    description: {
      en: 'Often cited as the first true trance record. The 1992 Jam & Spoon remix is the version that crosses over and makes "trance" a word DJs use in earnest.',
      ja: 'しばしば最初の真のトランス・レコードと引用される。1992年のJam & Spoonリミックスがクロスオーバー版で、DJが「トランス」を本格的に使い始めるきっかけとなった。',
    },
    embed: { platform: 'spotify', query: 'Age of Love The Age of Love 1990 Jam Spoon' },
    blogSlug: 'best-trance-tracks-1990s',
  },
  {
    id: '1991-eye-q-records',
    year: 1991, eraId: 'genesis', type: 'label',
    title:       { en: 'Eye Q Records founded',
                   ja: 'Eye Q Records設立' },
    description: {
      en: 'Sven Väth, Heinz Roth, and Matthias Hoffmann start the label that codifies the early Frankfurt trance sound — Hardfloor, Cygnus X, the foundation of what becomes the German school.',
      ja: 'Sven Väth、Heinz Roth、Matthias Hoffmannが初期フランクフルト・トランス・サウンドを体系化するレーベルを開始——Hardfloor、Cygnus Xなど、後に「ドイツの学派」となるものの基盤。',
    },
  },
  {
    id: '1993-goa-scene-crystallises',
    year: 1993, eraId: 'genesis', type: 'subgenre',
    title:       { en: 'Goa trance crystallises',
                   ja: 'ゴア・トランスの結晶化' },
    description: {
      en: 'The full-moon parties on Anjuna Beach codify a sound — overdriven 303 patterns, Eastern modes, hypnotic 8-bar phrases — that will define a generation of psychedelic trance.',
      ja: 'アニュナ・ビーチの満月パーティが——歪んだ303パターン、東洋旋法、催眠的な8小節フレーズ——後にサイケデリック・トランスの一世代を定義するサウンドを体系化する。',
    },
    blogSlug: 'rise-of-psytrance-goa-to-modern-day',
  },
  {
    id: '1994-pvd-45rpm',
    year: 1994, eraId: 'genesis', type: 'release',
    title:       { en: 'Paul van Dyk — "45 RPM" debut',
                   ja: 'Paul van Dyk — "45 RPM"デビュー' },
    description: {
      en: 'East Berlin DJ Matthias Paul releases his debut album, helping define the long-form, narrative trance set that becomes the genre\'s template.',
      ja: '東ベルリンのDJ Matthias Paulがデビューアルバムをリリース、ジャンルのテンプレートとなる長尺で物語性のあるトランス・セットの定義に貢献。',
    },
    artistSlug: 'paul-van-dyk',
  },
  {
    id: '1995-children',
    year: 1995, eraId: 'genesis', type: 'release',
    title:       { en: 'Robert Miles — "Children"',
                   ja: 'Robert Miles — "Children"' },
    description: {
      en: 'Dream-trance crosses into the European mainstream. Sells in the millions. Soundtracks 1995–96 in a way few electronic records ever have.',
      ja: 'ドリーム・トランスがヨーロッパのメインストリームへとクロスオーバー。数百万枚を売り上げ、電子音楽のレコードがほとんど成し得なかった方法で1995-96年を彩った。',
    },
    embed: { platform: 'spotify', query: 'Robert Miles Children original 1995' },
    blogSlug: 'iconic-trance-anthems-that-defined-an-era',
  },

  // ── 1996–2000 GOLDEN AGE ──────────────────────────────────────────
  {
    id: '1996-be-as-one',
    year: 1996, eraId: 'golden', type: 'release',
    title:       { en: 'Sasha & Maria — "Be As One"',
                   ja: 'Sasha & Maria — "Be As One"' },
    description: {
      en: 'The vocal-trance template arrives early: a real song, sung by a real singer, on a real arrangement. Influences a generation of producers.',
      ja: 'ボーカル・トランスのテンプレートが早くも登場：本物の楽曲、本物のシンガー、本物のアレンジ。一世代のプロデューサーに影響を与えた。',
    },
  },
  {
    id: '1997-black-hole',
    year: 1997, eraId: 'golden', type: 'label',
    title:       { en: 'Black Hole Recordings founded',
                   ja: 'Black Hole Recordings設立' },
    description: {
      en: 'Arny Bink and David Lewis start the Dutch label that will release Tiësto\'s most celebrated work — Magik, Just Be, In Search of Sunrise.',
      ja: 'Arny BinkとDavid Lewisが、Tiëstoの最も称賛される作品——Magik、Just Be、In Search of Sunrise——をリリースすることになるオランダのレーベルを開始。',
    },
    labelSlug: 'black-hole-recordings',
  },
  {
    id: '1998-for-an-angel',
    year: 1998, eraId: 'golden', type: 'release',
    title:       { en: 'Paul van Dyk — "For an Angel" (1998 mix)',
                   ja: 'Paul van Dyk — "For an Angel"（1998ミックス）' },
    description: {
      en: 'Everything "uplifting trance" comes to mean — the soaring lead, the long emotional breakdown, the precision of the arrangement — fully formed on a single record.',
      ja: '「アップリフティング・トランス」が意味することになるすべて——舞い上がるリード、長い感情的なブレイクダウン、アレンジの精度——が1枚のレコードに完全な形で結実。',
    },
    embed: { platform: 'spotify', query: 'Paul van Dyk For an Angel 1998' },
    artistSlug: 'paul-van-dyk',
    blogSlug: 'paul-van-dyk-pioneer-of-trance',
  },
  {
    id: '1998-9pm',
    year: 1998, eraId: 'golden', type: 'release',
    title:       { en: 'ATB — "9PM (Till I Come)"',
                   ja: 'ATB — "9PM (Till I Come)"' },
    description: {
      en: 'A guitar-led trance record that hits #1 in the UK. Trance is no longer a club secret.',
      ja: 'ギター主導のトランス・レコードがUKチャート1位を獲得。トランスはもはやクラブの秘密ではない。',
    },
    embed: { platform: 'spotify', query: 'ATB 9PM Till I Come' },
  },
  {
    id: '1999-out-of-the-blue',
    year: 1999, eraId: 'golden', type: 'release',
    title:       { en: 'System F (Ferry Corsten) — "Out of the Blue"',
                   ja: 'System F (Ferry Corsten) — "Out of the Blue"' },
    description: {
      en: 'For many DJs and producers, the most perfectly constructed trance record of the decade. The instantly-recognisable lead becomes a genre signature.',
      ja: '多くのDJとプロデューサーにとって、この10年で最も完璧に構築されたトランス・レコード。一瞬で認識できるリードがジャンルのシグネチャーとなる。',
    },
    embed: { platform: 'spotify', query: 'System F Out of the Blue Ferry Corsten' },
    artistSlug: 'ferry-corsten',
    blogSlug: 'ferry-corsten-three-decades-of-trance',
  },
  {
    id: '2000-anjunabeats',
    year: 2000, eraId: 'golden', type: 'label',
    title:       { en: 'Anjunabeats founded',
                   ja: 'Anjunabeats設立' },
    description: {
      en: 'Above & Beyond start a label to release their own Madonna remix. It becomes the most respected artist-run imprint in dance music.',
      ja: 'Above & Beyondが自身のマドンナ・リミックスをリリースするためにレーベルを開始。後にダンスミュージックで最も尊敬されるアーティスト主導のインプリントとなる。',
    },
    labelSlug: 'anjunabeats',
    artistSlug: 'above-and-beyond',
  },

  // ── 2001–2010 MAINSTREAM ──────────────────────────────────────────
  {
    id: '2001-asot-launch',
    year: 2001, eraId: 'mainstream', type: 'event',
    title:       { en: 'A State of Trance launches',
                   ja: 'A State of Trance始動' },
    description: {
      en: 'Armin van Buuren\'s weekly two-hour radio show begins broadcasting on a small Dutch station — February 15, 2001. Within five years it has 40 million weekly listeners across 100+ countries.',
      ja: 'Armin van Buurenの週次2時間ラジオ番組が2001年2月15日、小さなオランダのラジオ局で放送開始。5年以内に100以上の国で毎週4000万人のリスナーを持つに至る。',
    },
    artistSlug: 'armin-van-buuren',
    blogSlug: 'a-state-of-trance-show-that-changed-everything',
  },
  {
    id: '2003-armada',
    year: 2003, eraId: 'mainstream', type: 'label',
    title:       { en: 'Armada Music founded',
                   ja: 'Armada Music設立' },
    description: {
      en: 'Armin van Buuren, Maykel Piron, and David Lewis start what will become the world\'s largest independent dance label. The name is an acronym: Armin, Maykel, David.',
      ja: 'Armin van Buuren、Maykel Piron、David Lewisが、世界最大の独立系ダンス・レーベルとなるものを開始。名前は3人の頭文字（Armin、Maykel、David）。',
    },
    labelSlug: 'armada-music',
  },
  {
    id: '2004-athens-olympics',
    year: 2004, eraId: 'mainstream', type: 'event',
    title:       { en: 'Tiësto plays the Athens Olympics opening',
                   ja: 'Tiëstoがアテネ五輪開会式で演奏' },
    description: {
      en: 'Broadcast to a global audience of three billion. The first DJ to play that role at the Olympics — a watershed moment for electronic music\'s mainstream legitimacy.',
      ja: '全世界30億人に放送。五輪でDJがその役割を担った史上初——電子音楽がメインストリームでの正当性を獲得する分水嶺となった。',
    },
    artistSlug: 'tiesto',
    blogSlug: 'tiesto-evolution-trance-to-edm',
  },
  {
    id: '2005-adagio',
    year: 2005, eraId: 'mainstream', type: 'release',
    title:       { en: 'Tiësto — "Adagio for Strings"',
                   ja: 'Tiësto — "Adagio for Strings"' },
    description: {
      en: 'The peak-2000s trance anthem: stadium-scale euphoria translated from Samuel Barber\'s 1936 elegy. Still played twenty years on at the moment a DJ needs the room to feel everything at once.',
      ja: 'ピーク2000年代のトランス・アンセム：サミュエル・バーバーの1936年の哀歌から翻訳されたスタジアム規模のユーフォリア。20年経った今も、DJが部屋にすべてを一度に感じてもらいたい瞬間にプレイされ続ける。',
    },
    embed: { platform: 'spotify', query: 'Tiesto Adagio for Strings' },
    artistSlug: 'tiesto',
  },
  {
    id: '2005-tomorrowland-founded',
    year: 2005, eraId: 'mainstream', type: 'event',
    title:       { en: 'Tomorrowland holds first edition',
                   ja: 'Tomorrowland初開催' },
    description: {
      en: 'A small Belgian electronic festival in Boom. By 2010 it will be the most sought-after festival ticket in dance music; its trance stage will become a global pilgrimage site.',
      ja: 'ベルギーのBoomで開催された小規模な電子音楽フェスティバル。2010年までにダンスミュージックで最も求められるフェスティバル・チケットとなり、トランス・ステージはグローバルな巡礼地となる。',
    },
    blogSlug: 'tomorrowland-trance-stage',
  },
  {
    id: '2006-tri-state',
    year: 2006, eraId: 'mainstream', type: 'release',
    title:       { en: 'Above & Beyond — "Tri-State"',
                   ja: 'Above & Beyond — "Tri-State"' },
    description: {
      en: 'The trio\'s debut album establishes the songwriter-led, vocal-trance template that will define Anjunabeats for the next two decades.',
      ja: 'トリオのデビューアルバムが、その後20年Anjunabeatsを定義するソングライター主導のボーカル・トランスのテンプレートを確立。',
    },
    embed: { platform: 'spotify', query: 'Above Beyond Tri-State' },
    artistSlug: 'above-and-beyond',
    blogSlug: 'above-beyond-anjuna-empire',
  },
  {
    id: '2007-fsoe-founded',
    year: 2007, eraId: 'mainstream', type: 'label',
    title:       { en: 'FSOE founded by Aly & Fila',
                   ja: 'Aly & FilaがFSOE設立' },
    description: {
      en: 'Future Sound of Egypt becomes the home of pure uplifting trance through the EDM era — keeping the 138 BPM template alive when the rest of the scene drifts away.',
      ja: 'Future Sound of EgyptはEDM時代を通じてピュア・アップリフティング・トランスの本拠地となる——シーンの他の部分が離れていったときに138 BPMのテンプレートを存続させた。',
    },
    labelSlug: 'fsoe',
    artistSlug: 'aly-and-fila',
  },
  {
    id: '2008-anjunadeep',
    year: 2008, eraId: 'mainstream', type: 'label',
    title:       { en: 'Anjunadeep launches',
                   ja: 'Anjunadeepローンチ' },
    description: {
      en: 'The deeper, more atmospheric sister label opens the door to the progressive sound that will dominate the 2010s and 2020s.',
      ja: 'より深く大気的な姉妹レーベルが、2010年代と2020年代を支配するプログレッシブ・サウンドへの扉を開く。',
    },
    labelSlug: 'anjunadeep',
  },
  {
    id: '2009-tiesto-leaves',
    year: 2009, eraId: 'mainstream', type: 'event',
    title:       { en: 'Tiësto leaves trance for "open format"',
                   ja: 'Tiëstoが「オープンフォーマット」へ移行' },
    description: {
      en: 'The genre\'s biggest crossover star pivots to big-room and electro. Trance purists call it abandonment; everyone else watches him build a billboard-pop career and the whole industry turns toward EDM.',
      ja: 'ジャンル最大のクロスオーバー・スターがビッグルームとエレクトロへと舵を切る。トランス純粋主義者は離反と呼んだが、彼はビルボード・ポップのキャリアを築き、業界全体がEDMへと向かうことになる。',
    },
    artistSlug: 'tiesto',
  },

  // ── 2011–2020 DIVERSIFICATION ────────────────────────────────────
  {
    id: '2011-sun-and-moon',
    year: 2011, eraId: 'diversification', type: 'release',
    title:       { en: 'Above & Beyond ft. Richard Bedford — "Sun & Moon"',
                   ja: 'Above & Beyond ft. Richard Bedford — "Sun & Moon"' },
    description: {
      en: 'The defining trance record of the 2010s, released in the first month of the decade. Proves the genre can survive on songcraft when the festival economy moves elsewhere.',
      ja: '2010年代を定義するトランス・レコード、10年の最初の月にリリース。フェスティバル経済が他へ移っても、ジャンルがソングクラフトで生き延びられることを証明した。',
    },
    embed: { platform: 'spotify', query: 'Above Beyond Sun Moon Richard Bedford' },
    artistSlug: 'above-and-beyond',
    blogSlug: 'top-trance-tracks-2010s',
  },
  {
    id: '2011-asot-500',
    year: 2011, eraId: 'diversification', type: 'event',
    title:       { en: 'ASOT 500 milestone',
                   ja: 'ASOT 500マイルストーン' },
    description: {
      en: 'A State of Trance hits 500 episodes. Week-long global event series cements the show as more than radio — a community institution.',
      ja: 'A State of Tranceが500エピソードを達成。1週間にわたるグローバル・イベント・シリーズが、ラジオ以上のもの——コミュニティ機関——としての地位を確立。',
    },
  },
  {
    id: '2012-concrete-angel',
    year: 2012, eraId: 'diversification', type: 'release',
    title:       { en: 'Gareth Emery ft. Christina Novelli — "Concrete Angel"',
                   ja: 'Gareth Emery ft. Christina Novelli — "Concrete Angel"' },
    description: {
      en: 'Crossover success during a year EDM was supposedly making trance irrelevant. Still functions as a closer in 2026 sets.',
      ja: 'EDMがトランスを無関係にしていると言われていた年のクロスオーバー成功。2026年のセットでも今もクローザーとして機能する。',
    },
    embed: { platform: 'spotify', query: 'Gareth Emery Concrete Angel Christina Novelli' },
    artistSlug: 'gareth-emery',
  },
  {
    id: '2013-edm-peak',
    year: 2013, eraId: 'diversification', type: 'event',
    title:       { en: 'EDM commercial peak',
                   ja: 'EDM商業ピーク' },
    description: {
      en: 'Martin Garrix\'s "Animals" defines a year. EDM dominates the festival economy. Trance retreats to its dedicated stages and underground network — and starts strengthening there.',
      ja: 'Martin Garrixの「Animals」が1年を定義。EDMがフェスティバル経済を支配。トランスは専用ステージとアンダーグラウンドのネットワークへ後退し——そこで力を蓄え始める。',
    },
  },
  {
    id: '2014-find-your-harmony',
    year: 2014, eraId: 'diversification', type: 'release',
    title:       { en: 'Andrew Rayel — "Find Your Harmony"',
                   ja: 'Andrew Rayel — "Find Your Harmony"' },
    description: {
      en: 'The Moldovan virtuoso\'s debut album, full of orchestral uplifting trance. Armin calls him "the next Mozart of trance."',
      ja: 'モルドバの巨匠のデビューアルバム、オーケストラル・アップリフティング・トランスに満ちている。Arminは彼を「次のモーツァルト」と評した。',
    },
    artistSlug: 'andrew-rayel',
  },
  {
    id: '2018-common-ground',
    year: 2018, eraId: 'diversification', type: 'release',
    title:       { en: 'Above & Beyond — "Common Ground"',
                   ja: 'Above & Beyond — "Common Ground"' },
    description: {
      en: 'The trio\'s fourth album charts at #3 on the Billboard 200 — extraordinary for a vocal-trance record. Proves the audience for songcraft trance is still substantial.',
      ja: 'トリオの4枚目のアルバムがビルボード200で3位を記録——ボーカル・トランス・レコードとしては驚異的な数字。ソングクラフト・トランスのオーディエンスが依然として相当な規模であることを証明。',
    },
    embed: { platform: 'spotify', query: 'Above Beyond Common Ground' },
    artistSlug: 'above-and-beyond',
  },
  {
    id: '2018-hot-water',
    year: 2018, eraId: 'diversification', type: 'release',
    title:       { en: 'Lane 8 — "Hot Water"',
                   ja: 'Lane 8 — "Hot Water"' },
    description: {
      en: 'Mature 2010s progressive: patient, melodic, deeply emotional but never overstated. Brings listeners back who had cooled on 138 BPM uplifting maximalism.',
      ja: '成熟した2010年代プログレッシブ：忍耐強く、メロディック、深く感情的だが過剰ではない。138 BPMアップリフティングのマキシマリズムから冷めていたリスナーを連れ戻した。',
    },
    embed: { platform: 'spotify', query: 'Lane 8 Hot Water Little by Little' },
  },
  {
    id: '2020-pandemic-livestream',
    year: 2020, eraId: 'diversification', type: 'event',
    title:       { en: 'Pandemic shutdown / livestream era',
                   ja: 'パンデミックによる閉鎖／ライブ配信時代' },
    description: {
      en: 'Festivals cancel, clubs close, the entire touring economy stops. Ferry Corsten\'s UNITY project, Cercle livestreams, and Group Therapy radio carry the community through.',
      ja: 'フェスティバルは中止、クラブは閉鎖、ツアー経済全体が停止。Ferry CorstenのUNITYプロジェクト、Cercleのライブ配信、Group Therapyラジオがコミュニティを支えた。',
    },
    artistSlug: 'ferry-corsten',
  },

  // ── 2021–2026 MODERN ─────────────────────────────────────────────
  {
    id: '2021-asot-1000',
    year: 2021, eraId: 'modern', type: 'event',
    title:       { en: 'ASOT 1000',
                   ja: 'ASOT 1000' },
    description: {
      en: 'A State of Trance crosses 1000 episodes. Twenty years of weekly broadcasting. The community celebrates across staggered global event editions delayed by COVID.',
      ja: 'A State of Tranceが1000エピソードを達成。20年にわたる週次放送。コミュニティはCOVIDで遅延したグローバル・イベント・エディションで段階的に祝った。',
    },
    artistSlug: 'armin-van-buuren',
    blogSlug: 'a-state-of-trance-show-that-changed-everything',
  },
  {
    id: '2022-tiesto-greatest',
    year: 2022, eraId: 'modern', type: 'event',
    title:       { en: 'Tiësto voted Greatest DJ of All Time',
                   ja: 'Tiëstoが「史上最高のDJ」に選出' },
    description: {
      en: 'Mixmag readers crown the Dutch artist whose career began in early-90s trance clubs. The trance scene that produced him remains the foundation of his catalogue.',
      ja: 'Mixmag読者投票が、90年代初頭のトランス・クラブでキャリアを始めたオランダ人アーティストを戴冠。彼を生んだトランス・シーンは今も彼のカタログの基盤。',
    },
    artistSlug: 'tiesto',
  },
  {
    id: '2023-anyma-eternity',
    year: 2023, eraId: 'modern', type: 'release',
    title:       { en: 'Anyma — "Eternity"',
                   ja: 'Anyma — "Eternity"' },
    description: {
      en: 'Matteo Milleri\'s solo project releases the record that becomes the centrepiece of melodic-techno / trance crossover, and the foundation of the Sphere shows.',
      ja: 'Matteo Milleriのソロ・プロジェクトが、メロディック・テクノ／トランス・クロスオーバーの中心となり、Sphere公演の基盤となるレコードをリリース。',
    },
    embed: { platform: 'spotify', query: 'Anyma Eternity' },
    artistSlug: 'anyma',
    blogSlug: 'modern-trance-classics-2020s-so-far',
  },
  {
    id: '2024-anyma-sphere',
    year: 2024, eraId: 'modern', type: 'event',
    title:       { en: 'Anyma at Las Vegas Sphere — first electronic act',
                   ja: 'AnymaがラスベガスSphereで電子音楽アクト初公演' },
    description: {
      en: 'A 12-night residency at the Sphere\'s 16K LED interior resets what an electronic-music act can do as a live experience. The show uses melodic-techno / trance vocabulary at the largest visual scale ever attempted.',
      ja: 'Sphereの16K LED内壁で12夜のレジデンシー、電子音楽アクトがライブ体験として何ができるかをリセット。これまで試みられた最大規模のビジュアル・スケールでメロディック・テクノ／トランスの語彙を使用。',
    },
    artistSlug: 'anyma',
  },
  {
    id: '2024-underground-revival',
    year: 2024, eraId: 'modern', type: 'subgenre',
    title:       { en: 'Underground uplifting revival',
                   ja: 'アンダーグラウンドのアップリフティング復活' },
    description: {
      en: 'A generation of producers — Bryan Kearney, Will Atkinson, Allen Watts, Solis & Sean Truby — push the 138 BPM tradition forward without diluting it. Eastern European cities (Prague, Warsaw, Budapest) emerge as new uplifting capitals.',
      ja: '一世代のプロデューサー——Bryan Kearney、Will Atkinson、Allen Watts、Solis & Sean Truby——が138 BPMの伝統を希釈することなく前進させる。東欧の都市（プラハ、ワルシャワ、ブダペスト）が新たなアップリフティングの首都として台頭。',
    },
    artistSlug: 'bryan-kearney',
    blogSlug: 'underground-trance-scene',
  },
  {
    id: '2025-miss-monique-rise',
    year: 2025, eraId: 'modern', type: 'artist',
    title:       { en: 'Miss Monique\'s YouTube-first career model',
                   ja: 'Miss MoniqueのYouTube優先キャリアモデル' },
    description: {
      en: 'The Kyiv DJ\'s YouTube-first audience-building strategy translates to one of the most-watched touring careers in modern progressive — a new path to scene prominence that bypasses the traditional label/radio system entirely.',
      ja: 'キエフのDJのYouTube優先のオーディエンス構築戦略が、現代プログレッシブで最も視聴されるツアーキャリアのひとつに翻訳される——伝統的なレーベル／ラジオ・システムを完全に迂回するシーンでの著名さへの新しい経路。',
    },
    blogSlug: 'miss-monique-rising-progressive-star',
  },
  {
    id: '2026-trance-nexus',
    year: 2026, eraId: 'modern', type: 'event',
    title:       { en: 'TRANCE NEXUS launches',
                   ja: 'TRANCE NEXUSローンチ' },
    description: {
      en: 'A bilingual long-form journalism portal dedicated to trance music history, artists, labels, and scene reporting opens its doors. The genre enters its fifth decade with a record more thoroughly documented than ever before.',
      ja: 'トランスミュージックの歴史、アーティスト、レーベル、シーン取材に特化したバイリンガル長尺ジャーナリズム・ポータルが開設。ジャンルはこれまで以上に徹底的に文書化された記録とともに第5の10年に入る。',
    },
  },
];

export function getEventsByEra(eraId) {
  return events.filter((e) => e.eraId === eraId);
}

export function getEra(eraId) {
  return eras.find((e) => e.id === eraId);
}

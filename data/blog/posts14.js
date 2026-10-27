// Batch 12, articles 73-75 — "What is [genre]" definitive guides (final batch)
//
// Three encyclopaedic genre-explainer articles, splitting off into a
// new file (posts14.js) once posts13.js reached seven entries. Each
// post carries a `definedTerm` field consumed by the [slug] handler
// to emit DefinedTerm JSON-LD on top of the existing BlogPosting
// schema, the same pattern established in posts13.js.
//
// 73 — Goa trance: the original Indian beach-party form (1989–1995)
//      from which all later psytrance descends.
// 74 — Dream trance: the Italian piano-led mid-90s subgenre that
//      Robert Miles' "Children" (1995) and Gigi D'Agostino's
//      catalogue defined.
// 75 — Balearic trance: the slower, sun-soaked Ibiza-rooted form
//      whose canonical text is Energy 52's "Café del Mar" (1993)
//      and Chicane's late-90s catalogue.
//
// The Balearic article cross-links to /glossary/balearic-trance,
// which was added alongside /glossary/melodic-techno to close the
// last two broken /glossary/* references in the catalogue. The
// glossary genres.js now covers all twelve genre slugs cited
// across the "What is [genre]" series (66–75) plus acid trance.

export const posts14 = [
  {
    slug: 'what-is-goa-trance',
    date: '2026-05-08', readTime: 9, tags: ['guide', 'psytrance', 'goa', 'what-is'],
    definedTerm: {
      name: 'Goa trance',
      description: 'Original psychedelic trance form that emerged from the beach parties of Goa, India in the early 1990s, characterised by 135–145 BPM rolling triplet basslines, Eastern-influenced melodic motifs, and surreal layered sound design — the direct ancestor of all later psytrance.',
      inDefinedTermSet: 'https://trance-nexus.com/glossary',
      url: 'https://trance-nexus.com/glossary/goa-trance',
    },
    en: {
      title: 'What is Goa Trance? — Origins, Sound & Pioneers Definitive Guide',
      description: 'Learn what Goa trance is — the original psychedelic trance form from 1990s Goa India, key artists like Hallucinogen and Astral Projection, and the best starter tracks.',
      excerpt: "Goa trance is the original psychedelic trance form — the 1989–1995 Goa beach-party scene where Western travellers, Indian local culture, and the new digital studio technology of the early 1990s combined into a sound that all later psytrance directly descends from.",
      content: [
        { heading: 'Definition', body: '<p>Goa trance is the original psychedelic-trance form that emerged from the beach-party scene of Goa, India in the early 1990s. It is defined by 135–145 BPM rolling triplet basslines, Eastern-influenced melodic motifs, surreal multi-layered sound design, and long-form (8–12 minute) arrangements designed for outdoor sunrise / sunset listening rather than club use. Goa trance is the direct ancestor of all later <a href="/glossary/psytrance">psytrance</a> — full-on, dark, forest, and progressive psy all descend from the conventions Goa established. See the matching <a href="/glossary/goa-trance">Goa trance glossary entry</a> for the dictionary version.</p>' },
        { heading: 'Origins and History', body: '<p>The Goa scene grew out of a Western traveller / hippie community that had been gathering at Goan beaches (Anjuna, Vagator, Arambol) since the late 1960s. Through the 1980s the soundtrack of those beach parties shifted from psychedelic rock and EBM toward early house and acid; by 1989–90, returning travellers were bringing back the new acid-house and Frankfurt-trance sound and overlaying it onto the Goa party context. The genre crystallised in 1994–95 with Hallucinogen\'s "LSD" / album <em>Twisted</em> (1995, Dragonfly Records) and Astral Projection\'s "Mahadeva" / album <em>Trust in Trance</em> (1995–96, Trust in Trance Records) — the two foundational documents of the form. Through 1996–99 the sound was carried by UK label Dragonfly Records (Simon Posford / Hallucinogen and others), TIP Records (Raja Ram\'s London-based label, home of The Infinity Project and Doof), Blue Room Released (Total Eclipse, Etnica), Israeli label Trust in Trance, and a network of festivals and beach parties from Goa to Greece to Portugal. By 2000–01 the form had largely transitioned into what we now call <a href="/glossary/psytrance">psytrance</a> — the digital-production-era successor that retained the Goa conventions but moved the centre of activity to Israel and Europe.</p>' },
        { heading: 'Musical Characteristics', body: '<p><strong>BPM:</strong> 135–145 (slightly slower than modern full-on psytrance, which typically runs 140–148). <strong>Rhythm:</strong> Four-on-the-floor kick with the genre\'s defining rolling triplet bassline — a galloping low-end pattern that is the single most identifiable Goa-trance signature. <strong>Melody:</strong> Eastern-influenced motifs (often using minor scales and microtonal-feeling lead tones), acid-303-style filter sweeps, and layered arpeggios that develop across many bars. <strong>Sound design:</strong> Densely layered, with film and meditation-recording vocal samples, esoteric philosophical references, and long automation curves that develop a track\'s textural identity over its full 8–12 minute length. <strong>Cultural context:</strong> Goa trance is engineered for outdoor festival sound systems and long set listening (60+ minute mixes); the form barely makes sense in single-track / playlist isolation.</p>' },
        { heading: 'Key Artists', body: '<p><strong>Pioneers:</strong> Goa Gil (American-born DJ widely credited as a foundational figure of the Goa beach-party scene), Hallucinogen (Simon Posford\'s solo project, the form\'s most widely cited artist), <a href="/artists/astral-projection">Astral Projection</a> (Israeli, foundational Goa duo), The Infinity Project (early Goa group, several members later formed Shpongle and other projects), Man With No Name (UK), Cosmosis (UK / Bill Halsey), Total Eclipse (French duo), Etnica (Italian), Pleiadians (Italian, a side project featuring members of Etnica), and Doof (Nick Barber). <strong>Adjacent / spinout projects:</strong> Shpongle (Simon Posford + Raja Ram, the form\'s ambient-Goa offshoot), Juno Reactor (Ben Watkins, more rock / soundtrack-oriented), and Eat Static (UK).</p>' },
        { heading: 'Notable Tracks', body: '<p>Hallucinogen — "LSD" (1995) and "Fluoro Neuro Sponge" (1995); Astral Projection — "Mahadeva" (1995) and "Dancing Galaxy" (1997); The Infinity Project — "Stimuli" (1995); Man With No Name — "Floor-essence" (1996) and "Teleport" (1996); Total Eclipse — "Delta Aquariids" (1996); Cosmosis — "Cosmology" (1996); Etnica — "Trip Tonite" (1996); Doof — "Mars Needs Women" (1996); Shpongle — "Shpongle Falls Apart" (1998, ambient-Goa offshoot); Juno Reactor — "Conga Fury" (1997). For the broader psy-canon context, see <a href="/blog/best-psytrance-tracks-of-all-time-50">The 50 Best Psytrance Tracks of All Time</a>.</p>' },
        { heading: 'Key Labels', body: '<p><strong>Dragonfly Records</strong> (UK, Hallucinogen / Man With No Name / The Infinity Project — the most cited Goa-era flagship), <strong>TIP Records</strong> (UK, Raja Ram-founded — TIP World, TIP.world, and the various TIP-branded compilation series), <strong>Blue Room Released</strong> (UK, Total Eclipse / Saafi Brothers), <strong>Symbiosis Records</strong> (UK), <strong>Flying Rhino Records</strong> (UK), <strong>Trust in Trance Records</strong> (Israel, Astral Projection-founded — the first major non-UK Goa label), <strong>Phantasm Records</strong> (UK), and <strong>Matsuri Productions</strong> (UK).</p>' },
        { heading: 'Related Subgenres', body: '<p>Goa trance is the genealogical parent of all later <a href="/glossary/psytrance">psytrance</a> — full-on (the most directly Goa-derived modern form), progressive psy (the slower, groove-focused descendant), darkpsy / forest (the faster, more abstract descendant), and hi-tech (the extremely fast late-2000s development). Goa is also adjacent to <strong>ambient psy / psychill</strong> (the Shpongle / Ott. / Entheogenic axis), and shares structural conventions with the long-form side of <a href="/glossary/progressive-trance">progressive trance</a> (both prize patient development over peak-time release).</p>' },
        { heading: 'First Listens — 3 Starter Tracks', body: '<p>For a listener new to Goa trance: <strong>Hallucinogen — "LSD" (1995)</strong> for the foundational Simon Posford / Dragonfly template; <strong>Astral Projection — "Mahadeva" (1995)</strong> for the foundational Israeli / Trust in Trance template; <strong>Man With No Name — "Floor-essence" (1996)</strong> for the mid-period peak. Listen to each in full at decent volume — Goa was engineered for outdoor festival rigs and rewards patient attention to its 8–10 minute structural arc. Single-minute sampling will give a misleading impression of what the form does.</p>' },
        { heading: 'A Listener\'s Note — A Historian\'s Distance, Honestly', body: '<p>Goa is even further outside my direct experience than modern psytrance. The Goa beach party scene&apos;s defining years &mdash; 1989 to roughly 1995, before the form crystallised on record &mdash; happened before I was paying any attention to electronic music at all, on a coastline I have never visited. I have not been to Anjuna or Vagator, I have not stood in front of a Goa Gil set, and I have not seen the scene as a participant at any point. So the article above is written at historian&apos;s distance, from the recorded canon and from secondary sources, rather than from inside the lineage.</p><p>What I can offer honestly is respect for what the original Goa scene built and for the listeners who carry its memory forward. If you are a reader who lived any part of the 1989&ndash;1999 Goa or early-Israeli-psy era, your account of what those parties were actually like is more valuable than anything I can write, and the site contact email is open for corrections or additions. If you are a newcomer using this as an entry point: the starter tracks above are accurate canonical choices, but treat them as artefacts of a scene rather than the scene itself. The scene was the beach, the all-night sets, and the community around them &mdash; none of which fits inside an MP3.</p>' }
      ]
    },
    ja: {
      title: 'ゴア・トランスとは何か？ ― 起源、サウンド、パイオニアの決定版ガイド',
      description: 'ゴア・トランスとは何かを学ぶ ― 1990年代インド・ゴアからのオリジナル・サイケデリック・トランス形式、HallucinogenとAstral Projectionなど主要アーティスト、最高のスタータートラック。',
      excerpt: 'ゴア・トランスはオリジナルのサイケデリック・トランス形式だ ― 1989〜1995年のゴア・ビーチパーティ・シーンで、西洋の旅行者、インドの地元文化、そして1990年代初頭の新しいデジタル・スタジオ技術が、後のすべてのサイトランスが直接降下するサウンドへと結合した場所だ。',
      content: [
        { heading: '定義', body: '<p>ゴア・トランスは1990年代初頭のインド・ゴアのビーチパーティ・シーンから出現したオリジナルのサイケデリック・トランス形式だ。135〜145 BPMの転がるトリプレット・ベースライン、東洋影響のメロディック・モチーフ、シュールな多層サウンド・デザイン、そしてクラブ使用ではなく屋外日の出／日没リスニングのために設計された長尺（8〜12分）アレンジメントによって定義される。ゴア・トランスは後のすべての<a href="/glossary/psytrance">サイトランス</a>の直接の祖先だ ― フルオン、ダーク、フォレスト、プログレッシブ・サイはすべてゴアが確立した慣習から降下する。辞書版は<a href="/glossary/goa-trance">ゴア・トランス用語集エントリー</a>を参照。</p>' },
        { heading: '起源と歴史', body: '<p>ゴア・シーンは1960年代後半以来ゴアのビーチ（Anjuna、Vagator、Arambol）に集まっていた西洋の旅行者／ヒッピー・コミュニティから成長した。1980年代を通してそれらのビーチパーティのサウンドトラックはサイケデリック・ロックとEBMから初期ハウスとアシッドへと移行した。1989〜90年までに、戻る旅行者が新しいアシッド・ハウスとフランクフルト・トランス・サウンドを持ち帰り、ゴア・パーティ文脈に重ねていた。ジャンルは1994〜95年にHallucinogenの「LSD」／アルバム<em>Twisted</em>（1995、Dragonfly Records）とAstral Projectionの「Mahadeva」／アルバム<em>Trust in Trance</em>（1995〜96、Trust in Trance Records）で結晶化した ― 形式の2つの基礎的ドキュメント。1996〜99年にかけて、サウンドは英国レーベルDragonfly Records（Simon Posford／Hallucinogenほか）、TIP Records（Raja Ramのロンドン拠点レーベル、The Infinity ProjectやDoofの拠点）、Blue Room Released（Total Eclipse、Etnica）、イスラエルのレーベルTrust in Trance、そしてゴアからギリシャ、ポルトガルまでのフェスティバルとビーチパーティのネットワークによって運ばれた。2000〜01年までに形式は大部分、現在私たちが<a href="/glossary/psytrance">サイトランス</a>と呼ぶもの ― ゴア慣習を保持しながら活動の中心をイスラエルとヨーロッパに移したデジタル・プロダクション時代の後継者 ― へと移行した。</p>' },
        { heading: '音楽的特徴', body: '<p><strong>BPM：</strong>135〜145（典型的に140〜148で走る現代フルオン・サイトランスよりわずかに遅い）。<strong>リズム：</strong>四つ打ちキックとジャンルを定義する転がるトリプレットのベースライン ― ゴア・トランスの最も識別可能な単一のシグネチャであるギャロップする低域パターン。<strong>メロディ：</strong>東洋影響のモチーフ（しばしば短調と微小音的感覚のリード・トーンを使用）、アシッド303スタイルのフィルター・スイープ、多数の小節にわたって展開するレイヤー化されたアルペジオ。<strong>サウンド・デザイン：</strong>密にレイヤーされ、映画や瞑想録音のボーカル・サンプル、難解な哲学的参照、トラックの完全な8〜12分の長さにわたってテクスチャ的アイデンティティを展開する長尺オートメーション曲線を伴う。<strong>文化的文脈：</strong>ゴア・トランスは屋外フェスティバル・サウンド・システムと長尺セット・リスニング（60分以上のミックス）のために設計されている。形式は単一トラック／プレイリスト孤立ではほとんど意味をなさない。</p>' },
        { heading: '主要アーティスト', body: '<p><strong>パイオニア：</strong>Goa Gil（ゴア・ビーチパーティ・シーンの基礎的人物として広く認められるアメリカ生まれのDJ）、Hallucinogen（Simon Posfordのソロ・プロジェクト、形式の最も広く引用されるアーティスト）、<a href="/artists/astral-projection">Astral Projection</a>（イスラエル、基礎的ゴア・デュオ）、The Infinity Project（初期ゴア・グループ、メンバーの何人かは後にShpongleや他のプロジェクトを結成）、Man With No Name（英国）、Cosmosis（英国／Bill Halsey）、Total Eclipse（フランスのデュオ）、Etnica（イタリア）、Pleiadians（イタリア、Etnicaのメンバーによるサイドプロジェクト）、Doof（Nick Barber）。<strong>隣接／スピンアウト・プロジェクト：</strong>Shpongle（Simon Posford＋Raja Ram、形式のアンビエント・ゴア派生）、Juno Reactor（Ben Watkins、よりロック／サウンドトラック志向）、Eat Static（英国）。</p>' },
        { heading: '注目トラック', body: '<p>Hallucinogen「LSD」（1995）と「Fluoro Neuro Sponge」（1995）、Astral Projection「Mahadeva」（1995）と「Dancing Galaxy」（1997）、The Infinity Project「Stimuli」（1995）、Man With No Name「Floor-essence」（1996）と「Teleport」（1996）、Total Eclipse「Delta Aquariids」（1996）、Cosmosis「Cosmology」（1996）、Etnica「Trip Tonite」（1996）、Doof「Mars Needs Women」（1996）、Shpongle「Shpongle Falls Apart」（1998、アンビエント・ゴア派生）、Juno Reactor「Conga Fury」（1997）。より広いサイ・カノン文脈は<a href="/blog/best-psytrance-tracks-of-all-time-50">史上最高のサイトランス・トラック25選</a>を参照。</p>' },
        { heading: '主要レーベル', body: '<p><strong>Dragonfly Records</strong>（英国、Hallucinogen／Man With No Name／The Infinity Project ― 最も引用されるゴア時代旗艦）、<strong>TIP Records</strong>（英国、Raja Ram創設 ― TIP World、TIP.world、各種TIPブランド・コンピレーション・シリーズ）、<strong>Blue Room Released</strong>（英国、Total Eclipse／Saafi Brothers）、<strong>Symbiosis Records</strong>（英国）、<strong>Flying Rhino Records</strong>（英国）、<strong>Trust in Trance Records</strong>（イスラエル、Astral Projection創設 ― 最初の主要非英国ゴア・レーベル）、<strong>Phantasm Records</strong>（英国）、<strong>Matsuri Productions</strong>（英国）。</p>' },
        { heading: '関連サブジャンル', body: '<p>ゴア・トランスは後のすべての<a href="/glossary/psytrance">サイトランス</a>の系譜的親だ ― フルオン（最も直接的なゴア由来の現代形式）、プログレッシブ・サイ（よりスロー、グルーヴ重視の子孫）、ダークサイ／フォレスト（より速く、より抽象的な子孫）、ハイテック（極めて速い2000年代後半の発展）。ゴアはまた<strong>アンビエント・サイ／サイチル</strong>（Shpongle／Ott./Entheogenic軸）に隣接し、<a href="/glossary/progressive-trance">プログレッシブ・トランス</a>の長尺側と構造的慣習を共有する（両方ともピークタイム解放よりも忍耐強い展開を尊重する）。</p>' },
        { heading: '初めて聴くなら ― 3つのスタートトラック', body: '<p>ゴア・トランス新規リスナーには：<strong>Hallucinogen「LSD」（1995）</strong>は基礎的Simon Posford／Dragonflyテンプレート用、<strong>Astral Projection「Mahadeva」（1995）</strong>は基礎的イスラエル／Trust in Tranceテンプレート用、<strong>Man With No Name「Floor-essence」（1996）</strong>は中期ピーク用。それぞれをまともなボリュームでフルに聴くこと ― ゴアは屋外フェスティバル・リグ用に設計され、その8〜10分の構造アークへの忍耐強い注意に報いる。1分のサンプリングは形式が何をするかについて誤解を招く印象を与える。</p>' },
        { heading: 'リスナーからの視点 ― 誠実な歴史家の距離から', body: '<p>ゴアは、現代サイトランス以上に私の直接の体験の外にある。ゴアのビーチパーティ・シーンの定義的な年 ― 1989 年から概ね 1995 年、形式がレコード上に結晶化する前 ― は、私が電子音楽にまったく注意を払っていなかった時期に、私が一度も訪れたことのない海岸線で起きた。Anjuna や Vagator にも行っていないし、Goa Gil のセットの前に立ったこともない。シーンを参加者として見たことは一度もない。だから上の本文は、系譜の内側からではなく、録音されたカノンと二次資料から、歴史家の距離で書かれている。</p><p>私が誠実に差し出せるのは、オリジナルのゴア・シーンが築いたものと、その記憶を引き継ぐリスナーたちへの敬意だ。1989〜1999 年のゴアまたは初期イスラエル・サイ時代のどこかを生きた読者がいるなら、あのパーティが実際にどのようなものだったかについてのあなたの語りは、私が書けるものよりも価値がある。サイトの連絡先は訂正や追加のために開いている。本文を入口として使う新規読者には ― 上のスタータートラックは正確なカノニカル選択だが、シーンそのものではなくシーンの遺物として扱ってほしい。シーンとはビーチであり、夜通しのセットであり、その周りのコミュニティだった ― そのいずれも MP3 のなかには収まらない。</p>' }
      ]
    }
  },

  {
    slug: 'what-is-dream-trance',
    date: '2026-05-08', readTime: 8, tags: ['guide', 'dream-trance', 'what-is'],
    definedTerm: {
      name: 'Dream trance',
      description: 'Italian piano-led subgenre of trance that emerged in 1995-96 from Robert Miles and the Italian dance-music industry, characterised by emotive piano leads, slower 130-140 BPM grooves, and the melancholic-romantic mood that defined dance radio in the mid-1990s.',
      inDefinedTermSet: 'https://trance-nexus.com/glossary',
      url: 'https://trance-nexus.com/glossary/dream-trance',
    },
    en: {
      title: 'What is Dream Trance? — From Robert Miles to Today Definitive Guide',
      description: 'Learn what dream trance is — the Italian piano-led mid-90s subgenre, Robert Miles "Children" origins, key Italian artists like Gigi D\'Agostino, and the best starter tracks.',
      excerpt: "Dream trance is the piano-led, melancholic Italian subgenre that crystallised in 1995-96 around Robert Miles' \"Children\" and the surrounding Media Records / DBX catalogue — the moment when trance briefly became Europe's biggest pop format.",
      content: [
        { heading: 'Definition', body: '<p>Dream trance is the piano-led subgenre of trance that emerged in 1995-96 from Robert Miles and the Italian dance-music industry. The form is defined by emotive grand-piano lead lines, slower 130-140 BPM grooves, restrained synth accompaniment, and a melancholic-romantic mood considerably softer than uplifting. For a brief but extraordinary period in 1996, dream trance was the biggest dance-music format in Europe — Robert Miles\' "Children" reached #1 in much of the continent and was the year\'s defining single. See the matching <a href="/glossary/dream-trance">dream trance glossary entry</a> for the dictionary version.</p>' },
        { heading: 'Origins and History', body: '<p>Dream trance crystallised in 1995–96 with the release of Robert Miles\' "Children" on Italian label DBX (later picked up by UK trance label Platipus, and then licensed to Deconstruction and many other labels worldwide). The track became a #1 single across most of Europe and topped charts into 1996, defining a brief but powerful subgenre moment. Miles\' 1996 album <em>Dreamland</em> codified the template: piano-led intro, mid-tempo trance groove (around 132 BPM), atmospheric pads, and emotive minor-key chord progressions. The Italian dance-music industry — particularly Gianfranco Bortolotti\'s Media Records / BXR axis — had been developing this melodic / piano-led template across the early 1990s through artists like R.A.F. by Picotto ("Bakerloo Symphony", 1995), DJ Dado, and the broader Italian dance scene. By 1997-98 the form had largely transitioned: Miles himself moved toward more progressive / ambient territory, and the wider European trance scene moved into the harder uplifting / Bonzai phase. Dream trance survives today as a recognisable mood reference — late-2000s and 2010s revivals of the sound have appeared on Anjunabeats and adjacent labels.</p>' },
        { heading: 'Musical Characteristics', body: '<p><strong>BPM:</strong> 130-140 (slightly slower than uplifting and tech). <strong>Rhythm:</strong> Four-on-the-floor with the kick programmed softer than peak-time trance; bassline often a simple low-end pulse rather than the rolling 16th-note pattern of uplifting. <strong>Melody:</strong> The piano is the lead instrument — usually a sampled grand piano, played as if it were the topline of a pop ballad rather than a dance-music synth lead. Chord progressions tend toward minor keys with brief major-key resolutions. <strong>Structure:</strong> Standard trance breakdown / buildup / drop, but compressed and with the breakdown emotionally lighter than in uplifting; the form is closer to "trance ballad" than to peak-time dancefloor music. <strong>Emotional palette:</strong> Melancholic, nostalgic, romantic — the form was widely associated with the late-night driving / radio listening context of mid-90s European pop radio.</p>' },
        { heading: 'Key Artists', body: '<p><a href="/artists/robert-miles">Robert Miles</a> (Italian-Swiss, the form\'s defining figure — "Children" / "Fable" / "One and One" / <em>Dreamland</em> album), <a href="/artists/gigi-dagostino">Gigi D\'Agostino</a> (Italian, the harder / more populist Italian dance-trance figure whose work overlaps with dream-trance — "Bla Bla Bla" / "L\'amour Toujours"), <a href="/artists/mauro-picotto">Mauro Picotto</a> (Italian, mid-90s output before the shift to harder material), R.A.F. by Picotto (Italian, 1995 dream-trance era), DJ Dado (Italian, "X-Files" 1996), Datura (Italian), and the broader Media Records roster. Outside Italy, the form was less directly anchored — UK dream-trance crossover came mainly via licensing (Deconstruction releases of Italian originals).</p>' },
        { heading: 'Notable Tracks', body: '<p>Robert Miles — "Children" (1995/96, the form\'s defining record) and "Fable" (1996) and "One and One" feat. Maria Nayler (1996); R.A.F. by Picotto — "Bakerloo Symphony" (1995); DJ Dado — "X-Files" (1996); Mauro Picotto — "Iguana" (1999, transitional); Datura — "Eternity" (1993); Gigi D\'Agostino — "Bla Bla Bla" (1999, harder dream-trance / Italian dance crossover) and "L\'amour Toujours" (1999, the form\'s commercial peak crossover). For Miles\' biography and broader context, see his <a href="/artists/robert-miles">artist profile</a>.</p>' },
        { heading: 'Key Labels', body: '<p><strong>DBX</strong> (Italy, Joe T. Vannelli\'s label — the original home of Robert Miles\' "Children"), <strong>Platipus</strong> (UK, the first non-Italian label to license "Children"), <strong>Deconstruction</strong> (UK, the further licensing partner that took "Children" to UK / European chart prominence), <strong>Media Records</strong> (Italy, Gianfranco Bortolotti — the umbrella Italian dance-music empire that hosted much of the surrounding scene, with sub-labels including BXR, UMM, Heartbeat, and Nukleuz), <strong>ZYX Music</strong> (Germany, Italian dance-music distribution into Northern Europe), and <strong>Time Records</strong> (Italy, dance-music compilations).</p>' },
        { heading: 'Related Subgenres', body: '<p>Dream trance is closely adjacent to the early <a href="/glossary/vocal-trance">vocal trance</a> form (Robert Miles\' "One and One" feat. Maria Nayler is simultaneously a foundational vocal-trance and a foundational dream-trance record), to <a href="/glossary/progressive-trance">progressive trance</a> (which inherited the long-form atmospheric construction of dream-trance and evolved it forward), and to the broader <strong>Italo dance / Italodance</strong> tradition that surrounded dream-trance in mid-90s Italy. The piano-led aesthetic of dream-trance has periodically resurfaced in modern releases — particularly within the Anjunabeats / Anjunadeep ecosystem.</p>' },
        { heading: 'First Listens — 3 Starter Tracks', body: '<p>For a listener new to dream trance: <strong>Robert Miles — "Children" (1995)</strong> is the form\'s defining record and the only mandatory listen; <strong>Robert Miles — "Fable" (1996)</strong> for the immediate follow-up that codified the template; <strong>Robert Miles feat. Maria Nayler — "One and One" (1996)</strong> for the dream-trance / vocal-trance crossover that opens the door to the rest of trance history. After those three, work outward through the Italian Media Records catalogue.</p>' },
        { heading: 'A Listener\'s Note — How "Children" Reaches a Later Generation', body: '<p>Dream trance is a form newer listeners typically come to entirely through its records rather than through any contemporary scene experience. "Children" was a 1995&ndash;96 European pop event; by the time newer listeners arrive, dream trance as an active subgenre has been over for two decades and the records are heritage objects rather than current releases. So the typical relationship with the form is: hearing "Children" as a classic-cut on an ASOT throwback segment, or as a sample in a more recent record, and tracing backward from there to the original 1995 release.</p><p>What surprises on the trace-back is how well the form still works on its own terms. "Children" is often discussed as a historical artefact, but the piano lead and the patient mid-tempo groove still produce the effect they were designed for &mdash; the form has aged unusually well for a record that lived through a peak commercial moment. For a reader using this article as an entry point: do not treat dream trance as a museum piece. Listen to "Children" the way you would listen to a current release, in full, with attention, and notice what the form actually does. The 1995 production conventions read as dated for a few seconds and then stop being noticeable.</p>' }
      ]
    },
    ja: {
      title: 'ドリーム・トランスとは何か？ ― Robert Milesから今日までの決定版ガイド',
      description: 'ドリーム・トランスとは何かを学ぶ ― ピアノ主導の90年代半ばのイタリアのサブジャンル、Robert Miles「Children」の起源、Gigi D\'Agostinoなど主要イタリア人アーティスト、最高のスタータートラック。',
      excerpt: 'ドリーム・トランスはピアノ主導のメランコリックなイタリアのサブジャンルで、Robert Milesの「Children」と周辺のMedia Records／DBXカタログを軸に1995〜96年に結晶化した ― トランスが一時的にヨーロッパ最大のポップ・フォーマットになった瞬間だ。',
      content: [
        { heading: '定義', body: '<p>ドリーム・トランスはRobert Milesとイタリアのダンス・ミュージック産業から1995〜96年に出現したピアノ主導のトランスのサブジャンルだ。形式は情緒的なグランド・ピアノのリード・ライン、より遅い130〜140 BPMグルーヴ、抑制されたシンセ伴奏、そしてアップリフティングよりかなりソフトなメランコリック・ロマンティックなムードによって定義される。1996年の短いが並外れた期間、ドリーム・トランスはヨーロッパ最大のダンス・ミュージック・フォーマットだった ― Robert Milesの「Children」は大陸の多くで1位に達し、その年の定義的シングルとなった。辞書版は<a href="/glossary/dream-trance">ドリーム・トランス用語集エントリー</a>を参照。</p>' },
        { heading: '起源と歴史', body: '<p>ドリーム・トランスは1995〜96年、イタリア・レーベルDBX（後に英国トランス・レーベルPlatipusがピックアップし、さらにDeconstructionほか多数のレーベルに世界中でライセンス）からのRobert Miles「Children」のリリースで結晶化した。トラックはヨーロッパの大部分でナンバーワン・シングルとなり、1996年までチャートのトップを取り、短いが強力なサブジャンル・モーメントを定義した。Milesの1996年アルバム<em>Dreamland</em>がテンプレートを成文化した：ピアノ主導イントロ、ミッドテンポ・トランス・グルーヴ（約132 BPM）、大気的パッド、情緒的短調コード進行。イタリアのダンス・ミュージック産業 ― 特にGianfranco BortolottiのMedia Records／BXR軸 ― は1990年代初頭を通じて、R.A.F. by Picotto（「Bakerloo Symphony」、1995）、DJ Dado、より広いイタリアのダンス・シーンのようなアーティストを通じてこのメロディック／ピアノ主導テンプレートを発展させていた。1997〜98年までに形式は大部分移行した：Miles自身はよりプログレッシブ／アンビエントの領域へと移り、より広いヨーロッパのトランス・シーンはよりハードなアップリフティング／Bonzai段階へと移った。ドリーム・トランスは認識可能なムード参照として今日生き残っている ― サウンドの2000年代後半と2010年代のリバイバルがAnjunabeatsと隣接レーベルに現れている。</p>' },
        { heading: '音楽的特徴', body: '<p><strong>BPM：</strong>130〜140（アップリフティングとテックよりわずかに遅い）。<strong>リズム：</strong>四つ打ちで、キックがピークタイム・トランスよりソフトにプログラムされる。ベースラインはアップリフティングの転がる16分音符パターンではなく単純な低域パルスがしばしば。<strong>メロディ：</strong>ピアノがリード楽器 ― 通常サンプリング・グランド・ピアノで、ダンス・ミュージックのシンセ・リードではなくポップ・バラードのトップラインのように演奏される。コード進行は短調傾向で、簡潔な長調解決を伴う。<strong>構造：</strong>標準的なトランス・ブレイクダウン／ビルドアップ／ドロップだが、圧縮され、ブレイクダウンはアップリフティングより情緒的に軽い。形式はピークタイムのダンスフロア・ミュージックよりも「トランス・バラード」に近い。<strong>情緒的パレット：</strong>メランコリック、ノスタルジック、ロマンティック ― 形式は90年代半ばヨーロッパのポップ・ラジオの深夜ドライブ／ラジオ・リスニング文脈と広く関連付けられた。</p>' },
        { heading: '主要アーティスト', body: '<p><a href="/artists/robert-miles">Robert Miles</a>（イタリア系スイス、形式の定義的人物 ―「Children」／「Fable」／「One and One」／<em>Dreamland</em>アルバム）、<a href="/artists/gigi-dagostino">Gigi D\'Agostino</a>（イタリア、ドリーム・トランスと作品が重なるよりハード／よりポピュリスト的なイタリア・ダンス・トランス人物 ―「Bla Bla Bla」／「L\'amour Toujours」）、<a href="/artists/mauro-picotto">Mauro Picotto</a>（イタリア、よりハードな素材へのシフト前の90年代半ばの出力）、R.A.F. by Picotto（イタリア、1995年ドリーム・トランス時代）、DJ Dado（イタリア、「X-Files」1996）、Datura（イタリア）、より広いMedia Recordsロスター。イタリア外では形式はより直接的にアンカーされなかった ― 英国ドリーム・トランス・クロスオーバーは主にライセンシング（イタリア・オリジナルのDeconstructionリリース）を通じて来た。</p>' },
        { heading: '注目トラック', body: '<p>Robert Miles「Children」（1995/96、形式の定義的レコード）と「Fable」（1996）と「One and One」feat. Maria Nayler（1996）、R.A.F. by Picotto「Bakerloo Symphony」（1995）、DJ Dado「X-Files」（1996）、Mauro Picotto「Iguana」（1999、過渡期）、Datura「Eternity」（1993）、Gigi D\'Agostino「Bla Bla Bla」（1999、よりハードなドリーム・トランス／イタリア・ダンス・クロスオーバー）と「L\'amour Toujours」（1999、形式の商業的ピーク・クロスオーバー）。Milesの伝記とより広い文脈は彼の<a href="/artists/robert-miles">アーティスト・プロフィール</a>を参照。</p>' },
        { heading: '主要レーベル', body: '<p><strong>DBX</strong>（イタリア、Joe T. Vannelliのレーベル ― Robert Miles「Children」のオリジナル発売元）、<strong>Platipus</strong>（英国、「Children」を最初にライセンス取得した非イタリア・レーベル）、<strong>Deconstruction</strong>（英国、「Children」をさらに英国／ヨーロッパのチャート目立ちに持ち込んだライセンシング・パートナー）、<strong>Media Records</strong>（イタリア、Gianfranco Bortolotti ― BXR、UMM、Heartbeat、Nukleuzを含むサブレーベルを伴う、周辺シーンの多くをホストした傘イタリア・ダンス・ミュージック帝国）、<strong>ZYX Music</strong>（ドイツ、北ヨーロッパへのイタリア・ダンス・ミュージック流通）、<strong>Time Records</strong>（イタリア、ダンス・ミュージック・コンピレーション）。</p>' },
        { heading: '関連サブジャンル', body: '<p>ドリーム・トランスは初期の<a href="/glossary/vocal-trance">ボーカル・トランス</a>形式（Robert Milesの「One and One」feat. Maria Naylerは同時に基礎的ボーカル・トランスと基礎的ドリーム・トランスのレコードだ）に密接に隣接し、<a href="/glossary/progressive-trance">プログレッシブ・トランス</a>（ドリーム・トランスの長尺大気的構築を継承し前進させた）、そして90年代半ばイタリアでドリーム・トランスを取り囲んだより広い<strong>イタロ・ダンス／イタロダンス</strong>伝統に隣接する。ドリーム・トランスのピアノ主導美学は現代のリリース ― 特にAnjunabeats／Anjunadeepエコシステム内 ― で定期的に再浮上している。</p>' },
        { heading: '初めて聴くなら ― 3つのスタートトラック', body: '<p>ドリーム・トランス新規リスナーには：<strong>Robert Miles「Children」（1995）</strong>は形式の定義的レコードで唯一の必須リスニング、<strong>Robert Miles「Fable」（1996）</strong>はテンプレートを成文化した直後のフォローアップ用、<strong>Robert Miles feat. Maria Nayler「One and One」（1996）</strong>は残りのトランス史への扉を開くドリーム・トランス／ボーカル・トランス・クロスオーバー用。それら3つの後、イタリアのMedia Recordsカタログを通じて外側に作業する。</p>' },
        { heading: 'リスナーからの視点 ―「Children」が後の世代にどう届くか', body: '<p>ドリーム・トランスは、同時代のシーン体験を通じてではなく完全にレコードを通じて新しいリスナーが出会う形式だ。「Children」は 1995〜96 年のヨーロッパのポップ・イベントだった ― 新しいリスナーが到着する頃には、アクティブなサブジャンルとしてのドリーム・トランスは 20 年以上前に終わっており、レコードは現在進行形のリリースではなくヘリテージ・オブジェクトになっている。だから形式との典型的な関係は、ASOT のスローバック枠でクラシック・カットとして「Children」に出会うか、もう少し最近のレコードのサンプルとして耳にして、そこから 1995 年のオリジナル・リリースへと遡る、というものだ。</p><p>遡って驚かされるのは、形式が今もそれ自身の条件のなかで十分に機能しているということだ。「Children」は歴史的遺物としてしばしば語られるが、ピアノのリードと忍耐強いミッドテンポのグルーヴは、設計通りの効果を今も生み出している ― ピークの商業的瞬間を通った録音にしては、形式は異例によく歳を取った。本文を入口として使う読者へ ― ドリーム・トランスを博物館のピースとして扱わないでほしい。現在のリリースを聴くのと同じ姿勢で、フルで、注意を払って「Children」を聴き、形式が実際に何をしているかを観察してほしい。1995 年のプロダクション慣習が「古い」と読めるのは最初の数秒だけで、その後は気にならなくなる。</p>' }
      ]
    }
  },

  {
    slug: 'what-is-balearic-trance',
    date: '2026-05-08', readTime: 8, tags: ['guide', 'balearic', 'what-is'],
    definedTerm: {
      name: 'Balearic trance',
      description: 'Sun-soaked, slower-tempo subgenre of trance rooted in the Ibiza / Balearic Islands sunset-bar tradition, characterised by 120-130 BPM grooves, Mediterranean / chillout-adjacent instrumentation, and the late-evening / sunrise emotional palette codified by Café del Mar and the Chicane catalogue.',
      inDefinedTermSet: 'https://trance-nexus.com/glossary',
      url: 'https://trance-nexus.com/glossary/balearic-trance',
    },
    en: {
      title: 'What is Balearic Trance? — Sun, Sea & Slow BPM Definitive Guide',
      description: 'Learn what Balearic trance is — the slower Ibiza-rooted subgenre, Café del Mar and Chicane origins, key artists like Roger Shah and Solarstone, and the best starter tracks.',
      excerpt: "Balearic trance is the sun-soaked, slower end of the genre — rooted in Ibiza's Café del Mar sunset-bar tradition, codified by Energy 52's \"Café del Mar\" (1993) and Chicane's late-90s catalogue, and built around the Mediterranean evening / sunrise emotional palette.",
      content: [
        { heading: 'Definition', body: '<p>Balearic trance is the sun-soaked, slower-tempo subgenre of trance rooted in the Ibiza / Balearic Islands sunset-bar tradition. The form runs 120-130 BPM (considerably slower than mainstream uplifting), uses Mediterranean / chillout-adjacent instrumentation (acoustic guitar samples, pan-flutes, washy reverb pads), and is engineered for the late-evening / sunrise listening context that Ibiza\'s Café del Mar and adjacent venues codified through the 1990s. The form sits at the boundary between trance proper and the broader Balearic / chillout tradition that José Padilla\'s Café del Mar compilation series established. See the matching <a href="/glossary/balearic-trance">Balearic trance glossary entry</a> for the dictionary version.</p>' },
        { heading: 'Origins and History', body: '<p>The Balearic-trance sound has two origin points. The first is the Café del Mar bar in San Antonio, Ibiza, where DJ José Padilla\'s sunset sets through the late 1980s and early 1990s established the slower, melodic, Mediterranean dance-music aesthetic — codified for the wider world through the <em>Café del Mar</em> compilation series (Volume 1, 1994; Volume 2, 1995; etc.). The second origin point is Energy 52\'s "Café del Mar" (1993, originally released on Eye Q Records, later re-released by Hooj Choons and many other labels), a German-produced Frankfurt-trance record that took the Padilla aesthetic and overlaid it onto the new trance template — the resulting hybrid became one of the most-remixed records in dance-music history (the 1997 Three \'N One remix and the 2002 Marco V remix among many others). Through the late 1990s the sound was carried by Chicane (Nick Bracegirdle\'s "Offshore" 1996, "Saltwater" 1999 with Máire Brennan, "Don\'t Give Up" 2000 with Bryan Adams), Schiller (German), and the broader Ibiza-radio dance scene. Roger Shah\'s 2007 onwards <em>Magic Island</em> Black Hole sub-label and his Sunlounger project carried the form into the 2010s and 2020s.</p>' },
        { heading: 'Musical Characteristics', body: '<p><strong>BPM:</strong> 120-130 (the slowest end of the trance tempo range, overlapping with chillout and Balearic house). <strong>Rhythm:</strong> Four-on-the-floor, but considerably softer in attack than peak-time trance; bassline often a simple sustained low-end pulse rather than a programmed pattern. <strong>Melody:</strong> Mediterranean instrumentation is the defining signature — acoustic / nylon-string guitar samples, pan-flutes (the Energy 52 "Café del Mar" pan-flute lead is the form\'s most-quoted melodic gesture), washy reverb pads, and chillout-style chord voicings. <strong>Structure:</strong> Long-form, with breakdown / drop architecture compressed and softened — the form is closer to "ambient with a beat" than to peak-time dance music. <strong>Cultural context:</strong> Engineered for sunset-bar and sunrise-after-party listening, not for peak-time festival rotation.</p>' },
        { heading: 'Key Artists', body: '<p>Energy 52 (German, the trance project of Paul Schmitz-Moormann / DJ Kid Paul, with Harald Blüchel / Cosmic Baby — the project behind "Café del Mar"), <a href="/artists/roger-shah">Roger Shah</a> (German, the form\'s most prolific modern figure — Magic Island Records, Sunlounger project, Pegasus), Chicane (Nick Bracegirdle, British — "Offshore" / "Saltwater" / "Don\'t Give Up" — the form\'s most commercially successful figure), <a href="/artists/solarstone">Solarstone</a> (British, Pure Trance Recordings — the modern Pure Trance / Balearic axis), DT8 Project (British, the project of producer Darren Tate), Schiller (German, Christopher von Deylen — Balearic / electronic-pop crossover), José Padilla (Spanish, the foundational Café del Mar resident DJ), and Aurora Borealis (UK, Hooj Choons-era Balearic-trance).</p>' },
        { heading: 'Notable Tracks', body: '<p>Energy 52 — "Café del Mar" (1993, original; canonical 1997 Three \'N One remix; 2002 Marco V remix); Chicane — "Offshore" (1996) and "Saltwater" feat. Máire Brennan (1999) and "Don\'t Give Up" with Bryan Adams (2000); Sunlounger (Roger Shah project) — "White Sand" (2007) and "Lost" feat. Zara Taylor (2008); Solarstone — "Seven Cities" (1999, foundational Hooj Choons Balearic-trance record); DT8 Project — "Destination" (2002); Schiller — "Das Glockenspiel" (1999); Way Out West — "The Gift" (1996, Balearic / progressive crossover). The Café del Mar compilation series (Volumes 1-onward, José Padilla and successors) is the form\'s definitive listening-context document.</p>' },
        { heading: 'Key Labels', body: '<p><strong>Café del Mar Music</strong> (Spain, the official label of the Café del Mar bar — the compilation series that defines the broader Balearic listening context), <strong>Magic Island Records</strong> (Roger Shah-founded sub-label of Black Hole Recordings — the modern Balearic-trance flagship), <strong>Hooj Choons</strong> (UK, the late-90s Balearic-trance and progressive-trance label that hosted Solarstone\'s "Seven Cities" and many adjacent records), <strong>Modena Records</strong> (Chicane-affiliated), <strong>Pure Trance Recordings</strong> (Solarstone, the modern Balearic-meets-uplifting axis), and <strong>Eye Q Records</strong> (Germany, the Energy 52 / Sven Väth label that hosted "Café del Mar").</p>' },
        { heading: 'Related Subgenres', body: '<p>Balearic trance overlaps with the broader <strong>Balearic beat / chillout</strong> tradition (the Café del Mar compilation context), with <a href="/glossary/dream-trance">dream trance</a> (which shares the slower-tempo melodic-emphasis aesthetic), with <a href="/glossary/progressive-trance">progressive trance</a> at its faster / more dance-music end (the Solarstone / Hooj Choons axis), and with the broader <strong>Mediterranean / Ibiza dance</strong> tradition that includes Balearic house, downtempo, and Ibiza-style deep house. The form is also closely connected to the <strong>chillout / lounge</strong> commercial-radio category that flourished in the late 1990s and 2000s.</p>' },
        { heading: 'First Listens — 3 Starter Tracks', body: '<p>For a listener new to Balearic trance: <strong>Energy 52 — "Café del Mar" (1993, Three \'N One remix 1997)</strong> for the form\'s defining record; <strong>Chicane feat. Máire Brennan — "Saltwater" (1999)</strong> for the late-90s commercial peak; <strong>Solarstone — "Seven Cities" (1999)</strong> for the British Hooj Choons / Pure Trance template. The form is best heard at sunset on a real sound system, ideally near actual saltwater — like the rest of the genre, Balearic trance is engineered for a specific listening context, and outside that context it can feel inert.</p>' },
        { heading: 'A Listener\'s Note — Without Having Been to Ibiza', body: '<p>I should name the obvious limit on this article: I have not been to Ibiza. The Café del Mar bar, the San Antonio sunset terrace where this form was effectively coded into existence, the broader Balearic listening culture &mdash; I know all of it through records and through the Café del Mar compilation series, not from having stood there at sunset with a drink. The article above is written from that recorded-only relationship.</p><p>What can be said from the listener side is that Balearic trance works well as a listening mode when peak-time uplifting is not the right energy &mdash; the slower BPM and the Mediterranean instrumentation behave as a quieter late-evening register in a way the harder trance subgenres do not. The Sunlounger catalogue and the modern Pure Trance / Magic Island releases reward that kind of attention. So the form available outside the island is the indoor, headphones-version, not the actual island version. For a reader who has been to Ibiza and lived the original context, your account of the form is the one to trust.</p>' }
      ]
    },
    ja: {
      title: 'バレアリック・トランスとは何か？ ― 太陽、海、スロー BPMの決定版ガイド',
      description: 'バレアリック・トランスとは何かを学ぶ ― イビザに根ざしたよりスローなサブジャンル、Café del MarとChicaneの起源、Roger ShahとSolarstoneなど主要アーティスト、最高のスタータートラック。',
      excerpt: 'バレアリック・トランスはジャンルの太陽を浴びた、よりスローな端だ ― イビザのCafé del Marサンセット・バー伝統に根ざし、Energy 52「Café del Mar」（1993）とChicaneの90年代後半カタログによって成文化され、地中海の夕方／日の出の情緒的パレットを軸に構築される。',
      content: [
        { heading: '定義', body: '<p>バレアリック・トランスはイビザ／バレアレス諸島のサンセット・バー伝統に根ざしたトランスの太陽を浴びた、よりスロー・テンポのサブジャンルだ。形式は120〜130 BPM（メインストリーム・アップリフティングよりかなり遅い）で走り、地中海／チルアウト隣接の楽器編成（アコースティック・ギター・サンプル、パンフルート、ウォッシーなリバーブ・パッド）を使用し、イビザのCafé del Marと隣接ベニューが1990年代を通じて成文化した夕方後半／日の出のリスニング文脈用に設計されている。形式はトランス本体と、José PadillaのCafé del Marコンピレーション・シリーズが確立したより広いバレアリック／チルアウト伝統との境界に位置する。辞書版は<a href="/glossary/balearic-trance">バレアリック・トランス用語集エントリー</a>を参照。</p>' },
        { heading: '起源と歴史', body: '<p>バレアリック・トランス・サウンドには2つの起源点がある。1つ目はイビザのサン・アントニオにあるCafé del Marバーで、1980年代後半から1990年代初頭にかけてのDJ José Padillaのサンセット・セットがよりスロー、メロディック、地中海のダンス・ミュージック美学を確立した ― <em>Café del Mar</em>コンピレーション・シリーズ（Volume 1、1994、Volume 2、1995など）を通じてより広い世界に成文化された。2つ目の起源点はEnergy 52「Café del Mar」（1993、オリジナルはEye Q Recordsからのリリース、その後Hooj Choonsをはじめ多くのレーベルから再リリース）。Padilla美学を取り、新しいトランス・テンプレートに重ねたドイツ・プロデュースのフランクフルト・トランス・レコードだ ― 結果のハイブリッドはダンス・ミュージック史で最もリミックスされたレコードの一つになった（1997年Three \'N Oneリミックスと2002年Marco Vリミックス、その他多数）。1990年代後半を通してサウンドはChicane（Nick Bracegirdleの「Offshore」1996、「Saltwater」1999 with Máire Brennan、「Don\'t Give Up」2000 with Bryan Adams）、Schiller（ドイツ）、より広いイビザ・ラジオ・ダンス・シーンによって運ばれた。Roger Shahの2007年以降の<em>Magic Island</em> Black Holeサブレーベルと彼のSunloungerプロジェクトが形式を2010年代と2020年代に運んだ。</p>' },
        { heading: '音楽的特徴', body: '<p><strong>BPM：</strong>120〜130（トランス・テンポ範囲の最も遅い端、チルアウトとバレアリック・ハウスと重なる）。<strong>リズム：</strong>四つ打ち、しかしピークタイム・トランスよりかなりソフトなアタック。ベースラインはプログラム・パターンではなく単純な持続的低域パルスがしばしば。<strong>メロディ：</strong>地中海の楽器編成が定義的シグネチャ ― アコースティック／ナイロン弦ギター・サンプル、パンフルート（Energy 52「Café del Mar」のパンフルート・リードは形式の最も引用されるメロディック・ジェスチャ）、ウォッシーなリバーブ・パッド、チルアウト・スタイルのコード・ヴォイシング。<strong>構造：</strong>長尺で、ブレイクダウン／ドロップ建築は圧縮され和らげられる ― 形式はピークタイム・ダンス・ミュージックよりも「ビート付きアンビエント」に近い。<strong>文化的文脈：</strong>サンセット・バーと日の出アフターパーティ・リスニング用に設計され、ピークタイム・フェスティバル・ローテーション用ではない。</p>' },
        { heading: '主要アーティスト', body: '<p>Energy 52（ドイツ、Paul Schmitz-Moormann／DJ Kid PaulによるトランスプロジェクトでHarald Blüchel／Cosmic Babyが参加 ―「Café del Mar」のプロジェクト）、<a href="/artists/roger-shah">Roger Shah</a>（ドイツ、形式の最も多作な現代的人物 ― Magic Island Records、Sunloungerプロジェクト、Pegasus）、Chicane（Nick Bracegirdle、英国 ―「Offshore」／「Saltwater」／「Don\'t Give Up」 ― 形式の最も商業的に成功した人物）、<a href="/artists/solarstone">Solarstone</a>（英国、Pure Trance Recordings ― 現代Pure Trance／バレアリック軸）、DT8 Project（英国、プロデューサーDarren Tateのプロジェクト）、Schiller（ドイツ、Christopher von Deylen ― バレアリック／エレクトロニック・ポップ・クロスオーバー）、José Padilla（スペイン、基礎的Café del Marレジデント・DJ）、Aurora Borealis（英国、Hooj Choons時代のバレアリック・トランス）。</p>' },
        { heading: '注目トラック', body: '<p>Energy 52「Café del Mar」（1993、オリジナル、カノニカルな1997年Three \'N Oneリミックス、2002年Marco Vリミックス）、Chicane「Offshore」（1996）と「Saltwater」feat. Máire Brennan（1999）と「Don\'t Give Up」with Bryan Adams（2000）、Sunlounger（Roger Shahプロジェクト）「White Sand」（2007）と「Lost」feat. Zara Taylor（2008）、Solarstone「Seven Cities」（1999、基礎的Hooj Choonsバレアリック・トランス・レコード）、DT8 Project「Destination」（2002）、Schiller「Das Glockenspiel」（1999）、Way Out West「The Gift」（1996、バレアリック／プログレッシブ・クロスオーバー）。Café del Marコンピレーション・シリーズ（Volume 1以降、José Padillaと後継者）は形式の決定的リスニング文脈ドキュメントだ。</p>' },
        { heading: '主要レーベル', body: '<p><strong>Café del Mar Music</strong>（スペイン、Café del Marバーの公式レーベル ― より広いバレアリック・リスニング文脈を定義するコンピレーション・シリーズ）、<strong>Magic Island Records</strong>（Roger Shah創設のBlack Hole Recordingsサブレーベル ― 現代バレアリック・トランス旗艦）、<strong>Hooj Choons</strong>（英国、Solarstoneの「Seven Cities」と多くの隣接レコードをホストした90年代後半のバレアリック・トランスとプログレッシブ・トランス・レーベル）、<strong>Modena Records</strong>（Chicane関連）、<strong>Pure Trance Recordings</strong>（Solarstone、現代バレアリック・ミーツ・アップリフティング軸）、<strong>Eye Q Records</strong>（ドイツ、「Café del Mar」をホストしたEnergy 52／Sven Väthレーベル）。</p>' },
        { heading: '関連サブジャンル', body: '<p>バレアリック・トランスはより広い<strong>バレアリック・ビート／チルアウト</strong>伝統（Café del Marコンピレーション文脈）と重なり、<a href="/glossary/dream-trance">ドリーム・トランス</a>（よりスロー・テンポのメロディ強調美学を共有）、より速い／よりダンス・ミュージック端で<a href="/glossary/progressive-trance">プログレッシブ・トランス</a>（Solarstone／Hooj Choons軸）、そしてバレアリック・ハウス、ダウンテンポ、イビザ・スタイルのディープ・ハウスを含むより広い<strong>地中海／イビザ・ダンス</strong>伝統と重なる。形式はまた1990年代後半と2000年代に栄えた<strong>チルアウト／ラウンジ</strong>商業ラジオ・カテゴリーと密接に結びついている。</p>' },
        { heading: '初めて聴くなら ― 3つのスタートトラック', body: '<p>バレアリック・トランス新規リスナーには：<strong>Energy 52「Café del Mar」（1993、Three \'N Oneリミックス1997）</strong>は形式の定義的レコード用、<strong>Chicane feat. Máire Brennan「Saltwater」（1999）</strong>は90年代後半の商業的ピーク用、<strong>Solarstone「Seven Cities」（1999）</strong>は英国Hooj Choons／Pure Tranceテンプレート用。形式は本物のサウンド・システムでサンセットに、理想的には実際の塩水近くで最もよく聴かれる ― ジャンルの他の部分のように、バレアリック・トランスは特定のリスニング文脈用に設計されており、その文脈外では不活発に感じることがある。</p>' },
        { heading: 'リスナーからの視点 ― イビサに行ったことがないまま', body: '<p>本文の明らかな限界を明示しておきたい ― 私はイビサに行ったことがない。Café del Mar バー、この形式が実質的に生まれた San Antonio のサンセット・テラス、そしてより広いバレアリックのリスニング文化 ― そのすべてを、私はレコードと Café del Mar コンピレーション・シリーズを通じて知っているのであって、夕日のなかで実際にあの場所に立った経験から知っているわけではない。上の本文はその「録音だけの関係」から書かれている。</p><p>リスナー側から語れるのは、バレアリック・トランスが、ピークタイムのアップリフティングが「ちょうど良いエネルギーではない」場面でリスニング・モードとして機能する、ということ ― よりスローな BPM と地中海の楽器編成は、ハードなトランス・サブジャンルが果たせない、より静かな夜遅いレジスターとして振る舞う。Sunlounger カタログと、現代の Pure Trance／Magic Island のリリースは、その種の注意に報いる。だから島外で利用可能な形式は、室内・ヘッドフォンのバージョンであって、実際の島のバージョンではない。イビサに行き、オリジナルの文脈を生きた読者がいるなら、形式についての語りはそちらを信用してほしい。</p>' }
      ]
    }
  },

  // Trance Revival 2026 — five-pillar mid-2026 state-of-the-genre piece.
  // Companion to the existing trance-renaissance-2026 article: that one
  // asks whether the revival is real; this one assumes it is, names the
  // five visible forces driving it, and argues the breadth across them
  // is the case for calling the shift structural rather than seasonal.
  // All factual claims (ASOT Tune of the Year 2025 winner, Techno Trance
  // / TRANSFORMATION rebrand, Tiësto T8, Bigger Than All Of Us, Gouryella
  // revival, ASOT 25 dates, Always You anthem) verified against label,
  // DJ Mag, EDM.com, and Armada Newsroom sources at write time.
  {
    slug: 'trance-revival-2026',
    date: '2026-05-20',
    readTime: 9,
    tags: ['analysis', 'culture', '2020s'],
    en: {
      title: 'Trance Revival 2026: Why the Genre Is Back and What\'s Driving It',
      description: 'A mid-2026 state-of-the-genre look at why trance is back on festival main stages — Bryan Kearney\'s ASOT Tune of the Year win, the trance/techno crossover, the eurodance revival, returning legends, and the ASOT 25 anniversary year.',
      excerpt: 'In 2026, trance is back on festival main stages and inside the wider conversation around dance music. Five intersecting forces are driving the return — none of them decisive alone, but together producing a shift that looks structural rather than seasonal.',
      content: [
        { heading: 'The Question: Trend or Structural Shift?', body: '<p>In 2026, trance is back on festival main stages and inside the wider conversation around dance music in a way it has not been for more than a decade. Headline DJ sets at Tomorrowland, EDC, and Ultra are putting uplifting breakdowns and 138 BPM kicks in front of audiences that grew up on EDM, festival-pop, and the post-2018 melodic-techno wave. The question is whether this is a passing cycle &mdash; the genre&apos;s turn on the nostalgia carousel &mdash; or a structural shift driven by something more durable.</p><p>Five threads are visible across the year so far. None of them, taken alone, would settle the question. Read together, they describe a return broad enough to look structural rather than seasonal.</p>' },
        { heading: 'Uplifting Trance Returns to the Centre', body: '<p>In December 2025, the listener-voted A State of Trance Tune of the Year went to <a href="/artists/bryan-kearney">Bryan Kearney</a> feat. Plumb &mdash; &ldquo;God Help Me,&rdquo; released on ARMIND. The vocal source was Plumb&apos;s own song of the same name, originally an acoustic-leaning track from her 2018 album <em>Beautifully Broken</em>; Kearney&apos;s rework recasts it as a full uplifting trance anthem. It is the second Kearney/Plumb collaboration to win the listener vote, following &ldquo;Take This&rdquo; in 2022.</p><p>The same pattern &mdash; a singer-songwriter&apos;s acoustic original reworked into an uplifting trance record &mdash; recurs across recent releases. <a href="/artists/paul-webster">Paul Webster</a>&apos;s remix of Bo Bruce&apos;s 2013 indie-pop track &ldquo;Holding The Light,&rdquo; released on Armada Captivating and supported across the WHO&apos;S AFRAID OF 138?! rotation, is the most visible example. The vocal lineage runs back to material outside the genre; the trance record is the destination, not the starting point.</p>' },
        { heading: 'Trance Meets Techno', body: '<p>The 2025 edition of the A State of Trance festival, held at Ahoy Rotterdam, ran under the banner &ldquo;TRANSFORMATION&rdquo; &mdash; a rebrand intentionally positioning the event at the intersection of trance and techno. The official compilation mixed by <a href="/artists/armin-van-buuren">Armin van Buuren</a> placed Drumcode-aligned techno producers (Adam Beyer, Maddix, ARTBAT) on the same tracklist as long-running trance figures (<a href="/artists/ferry-corsten">Ferry Corsten</a>, Aly &amp; Fila, Ben Gold). The framing of the festival itself, not just the after-the-fact lineup, marked the change.</p><p>The symbolic track of the crossover is Armin van Buuren &amp; Adam Beyer vs. D-Shake &mdash; &ldquo;Techno Trance,&rdquo; released 5 September 2025 on Armada. The single is a contemporary rework of D-Shake&apos;s 1992 record of the same name, a piece from the moment when techno, acid house, and early trance were not yet separate categories. Premiered during Armin and Beyer&apos;s back-to-back set at ASOT Rotterdam 2025, it has since become a fixture in both artists&apos; sets.</p>' },
        { heading: 'Acid, Hard Trance, and the Eurodance Revival', body: '<p>A parallel revival is running through harder and faster material. Mid-1990s sounds &mdash; acid-influenced basslines, hard-trance kick patterns, eurodance vocal hooks &mdash; are returning to club rotation and warehouse parties, particularly across Berlin, London, and continental European underground circuits.</p><p>The most visible name in this strand is <a href="/artists/marlon-hoffstadt">Marlon Hoffstadt</a>, the Berlin-based producer and DJ who, with MALUGI, founded the Club Heart Broken label and party series. Their back-to-back Boiler Room London set in 2024 became one of that year&apos;s most-watched streams. In May 2025 Hoffstadt played the EDC Las Vegas mainstage between <a href="/artists/tiesto">Ti&euml;sto</a> and <a href="/artists/armin-van-buuren">Armin van Buuren</a>, and signed to Capitol Records the same week &mdash; a clear signal that the eurodance/trance crossover has moved out of the underground and into major-label release calendars.</p>' },
        { heading: 'Legends Return', body: '<p>Three of the genre&apos;s founding-era figures are simultaneously back in trance-first release cycles. <a href="/artists/tiesto">Ti&euml;sto</a> announced a 2026 album positioned as a return to his trance roots, beginning with the single &ldquo;Bring Me To Life&rdquo; featuring FORS; the campaign is being marketed as the &ldquo;T8&rdquo; era, with the logo treatment echoing his 1999 <em>Live At Innercity</em> identity.</p><p><a href="/artists/above-and-beyond">Above &amp; Beyond</a> released <em>Bigger Than All Of Us</em> on 18 July 2025, their first fully electronic studio album in seven years, on Anjunabeats. The record features long-running vocal collaborators Zo&euml; Johnston, Richard Bedford, and Justine Suissa alongside new voices, and was followed in February 2026 by an Album &amp; Extended Mixes edition with ten DJ-ready extended versions. Separately, <a href="/artists/ferry-corsten">Ferry Corsten</a> revived his Gouryella alias for the new single &ldquo;Marama (Moon &amp; Stars)&rdquo; and a 25 Years of Gouryella retrospective during Amsterdam Dance Event 2025. Three returns, three separate label homes, all inside a twelve-month window.</p>' },
        { heading: 'ASOT 25: The Festival Year', body: '<p>The institutional centre of the year is the 25th anniversary of A State of Trance. The main anniversary festival takes place at Ahoy Rotterdam on 27 and 28 February 2026, with the standard two-night format. The longest-running radio-show brand in dance music is using the occasion as a calendar anchor for the rest of the year &mdash; spring tour dates, the ASOT 2026 compilation release, and the standalone ASOT-stage appearances at Ultra Miami, Tomorrowland, and ADE all hang off the Rotterdam moment.</p><p>The official ASOT 2026 anthem is &ldquo;Always You,&rdquo; credited to <a href="/artists/armin-van-buuren">Armin van Buuren</a>, <a href="/artists/richard-durand">Richard Durand</a> &amp; Dicosis &mdash; the first studio collaboration between van Buuren and Durand on a single, premiered during van Buuren&apos;s ASOT-stage set at Ultra Miami 2025 and confirmed as the 2026 ELEVATION-edition anthem. The track has been in heavy rotation across ASOT episodes and headline festival sets through the lead-up to the Rotterdam dates.</p>' },
        { heading: 'Why It Looks Structural', body: '<p>The five threads above run on different timelines and through different communities. The uplifting Tune-of-the-Year canon, the techno crossover, the eurodance/hard-trance club revival, the founding-generation album cycle, and the ASOT 25 institutional moment do not share a single audience &mdash; they share only the timeframe.</p><p>That breadth is the case for calling this a structural shift rather than a single-niche fashion. Nostalgia accounts for part of the underlying interest, and a generation that came up on streaming-era melodic dance music is now meeting trance halfway. The combination &mdash; existing fans plus new listeners arriving through several different doors &mdash; is what separates a durable return from a one-cycle revival.</p>' },
        { heading: 'A Listener\'s Note — Five Threads Audible in One Weekly Episode', body: '<p>The article&apos;s five-thread framework &mdash; uplifting Tune-of-the-Year canon, techno crossover, eurodance/hard-trance revival, founding-generation album cycle, ASOT 25 institutional moment &mdash; is most directly verifiable inside the format the genre&apos;s editorial centre uses to assemble itself: a single weekly A State of Trance episode. A current 2026 ASOT episode will typically touch four of the five threads in its two-hour run. The Kearney / Plumb uplifting lane, the Armin / Beyer techno-trance crossover, the new Above &amp; Beyond / Gouryella legend material, and the ASOT 25 anthem rotation all sit in the same broadcast hour. Only the eurodance/hard-trance underground sits at slightly more distance from the broadcast.</p><p>That cohabitation inside a single episode is the audible signal that what the article calls structural is structural. A fashion cycle would surface one of the five threads heavily and crowd the others out; the breadth the article documents shows up in weekly listening as a broader episode rather than a narrower one. The article&apos;s closing argument &mdash; that breadth is what separates a durable return from a one-cycle revival &mdash; is verifiable on a listener&apos;s own week-to-week scale, not just from outside.</p>' }
      ]
    },
    ja: {
      title: 'トランス・リバイバル2026：なぜ今ジャンルが復活しているのか、その背景',
      description: '2026年中盤時点のトランス・シーン現状分析 ― Bryan KearneyのASOT Tune of the Year受賞、トランス×テクノのクロスオーバー、ユーロダンス・リバイバル、レジェンドの回帰、ASOT 25周年イヤーをまとめた5本柱レポート。',
      excerpt: '2026年、トランスはフェスティバルのメインステージとダンス・ミュージックの主要な議論の場に戻ってきている。これを駆動する5つの力が交差している ― どれも単独では決定的ではないが、重ねると季節的というより構造的に見えるシフトを描く。',
      content: [
        { heading: '問い：一過性の流行か、構造的なシフトか', body: '<p>2026年、トランスはフェスティバルのメインステージとダンス・ミュージックの主要な議論の場に、10年以上ぶりの規模で戻ってきている。Tomorrowland、EDC、Ultraといった大型イベントのヘッドライナー・セットが、EDM、フェスティバル・ポップ、2018年以降のメロディック・テクノ波で育ったオーディエンスの前で、アップリフティングなブレイクダウンと138 BPMのキックを鳴らしている。問いは、これがノスタルジアのカルーセル上の一周にすぎないのか、それともより耐久性のある力学に駆動された構造的なシフトなのか、だ。</p><p>2026年の前半に5つの糸が見えている。単独で取れば、どれも問いを決着させない。重ねて読むと、季節的というより構造的に見えるほど広い復帰の絵が浮かび上がる。</p>' },
        { heading: 'アップリフティング・トランスが中心に戻る', body: '<p>2025年12月、リスナー投票で決まるA State of Trance「Tune of the Year」は、<a href="/artists/bryan-kearney">Bryan Kearney</a> feat. Plumbの「God Help Me」（ARMINDよりリリース）に贈られた。ボーカルの原曲はPlumb自身の同名曲 ― 2018年のアルバム<em>Beautifully Broken</em>収録のアコースティック寄りのトラック ― で、Kearneyのリワークはそれをフル尺のアップリフティング・トランス・アンセムへと再構築している。KearneyとPlumbのコラボとしては2022年の「Take This」に続き、2度目のリスナー投票勝利となる。</p><p>同じパターン ― シンガーソングライターのアコースティック原曲がアップリフティング・トランスへと書き換えられる流れ ― は近年のリリース全体に繰り返し現れる。<a href="/artists/paul-webster">Paul Webster</a>によるBo Bruceの2013年インディ・ポップ曲「Holding The Light」のリミックスは、Armada Captivating経由でリリースされ、WHO&apos;S AFRAID OF 138?!のローテーションで支持されており、最も目に見える例だ。ボーカルの系譜はジャンル外の素材にまで遡り、トランス・レコードが到達点であって出発点ではない。</p>' },
        { heading: 'トランスとテクノのクロスオーバー', body: '<p>2025年版のA State of Tranceフェスティバル（Ahoy Rotterdam開催）は「TRANSFORMATION」の旗印の下で行われ、イベントをトランスとテクノの交差点に意図的に位置づけるリブランドが行われた。<a href="/artists/armin-van-buuren">Armin van Buuren</a>がミックスした公式コンピレーションには、Drumcode系のテクノ・プロデューサー（Adam Beyer、Maddix、ARTBAT）が、長年のトランス勢（<a href="/artists/ferry-corsten">Ferry Corsten</a>、Aly &amp; Fila、Ben Gold）と同一トラックリスト上に並んだ。事後のラインナップではなくフェスティバルそのもののフレーミングが変わった点が重要だ。</p><p>このクロスオーバーを象徴するトラックがArmin van Buuren &amp; Adam Beyer vs. D-Shake「Techno Trance」（2025年9月5日、Armadaよりリリース）。D-Shakeが1992年に発表した同名曲 ― テクノ、アシッド・ハウス、初期トランスがまだ分離していなかった瞬間のレコード ― の現代的リワークだ。ASOT Rotterdam 2025でのArminとBeyerのバック・トゥ・バック・セットで初披露され、以降両者のセットの常連トラックとなっている。</p>' },
        { heading: 'アシッド、ハード・トランス、ユーロダンスの復活', body: '<p>並行して、よりハードで速い素材の復活も走っている。1990年代中盤のサウンド ― アシッド影響のベースライン、ハード・トランスのキック・パターン、ユーロダンスのボーカル・フック ― が、特にベルリン、ロンドン、ヨーロッパ大陸のアンダーグラウンド・サーキットで、クラブとウェアハウス・パーティーのローテーションに戻ってきている。</p><p>この流れで最も可視性の高い名前が<a href="/artists/marlon-hoffstadt">Marlon Hoffstadt</a>だ。ベルリン拠点のプロデューサー兼DJで、MALUGIとともにClub Heart Brokenレーベル兼パーティー・シリーズを設立した。2024年のBoiler Room Londonでの両者のバック・トゥ・バック・セットは、その年で最も視聴されたストリームの一つとなった。2025年5月、HoffstadtはEDC Las Vegasのメインステージで<a href="/artists/tiesto">Ti&euml;sto</a>と<a href="/artists/armin-van-buuren">Armin van Buuren</a>の間に出演し、同じ週にCapitol Recordsとの契約を発表している ― ユーロダンス／トランスのクロスオーバーがアンダーグラウンドからメジャー・レーベルのリリース・カレンダーに移ったことの明快なシグナルだ。</p>' },
        { heading: 'レジェンドの回帰', body: '<p>ジャンル創成期の3組が、同時にトランス中心のリリース・サイクルに戻っている。<a href="/artists/tiesto">Ti&euml;sto</a>はトランス・ルーツへの回帰として位置づけられた2026年アルバムを発表。先行シングルはFORS参加の「Bring Me To Life」で、キャンペーンは「T8」期と銘打たれ、ロゴ処理は1999年の<em>Live At Innercity</em>のアイデンティティを呼び戻している。</p><p><a href="/artists/above-and-beyond">Above &amp; Beyond</a>は2025年7月18日、Anjunabeatsから<em>Bigger Than All Of Us</em>をリリースした ― 彼らにとって7年ぶりのフル電子音楽スタジオ・アルバムだ。作品には長年のボーカル・コラボレーターであるZo&euml; Johnston、Richard Bedford、Justine Suissaに加え、新しい声も参加しており、2026年2月にはDJ向けの拡張版10曲を加えたAlbum &amp; Extended Mixesエディションが続いた。別途<a href="/artists/ferry-corsten">Ferry Corsten</a>はGouryella名義を新シングル「Marama (Moon &amp; Stars)」とともに復活させ、Amsterdam Dance Event 2025で「25 Years of Gouryella」回顧プログラムを行った。3組の復帰、3つの異なるレーベル・ホーム、すべてが12ヶ月の窓のなかで起きている。</p>' },
        { heading: 'ASOT 25周年とフェスティバル・イヤー', body: '<p>2026年の制度的中心は、A State of Tranceの25周年だ。25周年メインイベントは2026年2月27日・28日にAhoy Rotterdamで開催され、標準の2夜構成。ダンス・ミュージックで最も長く続くラジオショウ・ブランドが、この機会を年の他の部分のカレンダー・アンカーとして使っている ― 春のツアー日程、ASOT 2026コンピレーションのリリース、Ultra Miami、Tomorrowland、ADEでのASOTステージ単独出演 ― いずれもRotterdamの瞬間にぶら下がる形で組まれている。</p><p>公式ASOT 2026アンセムは「Always You」、クレジットは<a href="/artists/armin-van-buuren">Armin van Buuren</a>、<a href="/artists/richard-durand">Richard Durand</a> &amp; Dicosis ― van BuurenとDurandがシングルでスタジオ共作するのは初。Ultra Miami 2025のvan BuurenのASOTステージ・セットで初披露され、2026年「ELEVATION」エディションの公式アンセムとして確定した。Rotterdam公演までの間、ASOTエピソードとヘッドライン・フェスティバル・セットの両方で重点ローテーションに入っている。</p>' },
        { heading: 'なぜ構造的に見えるのか', body: '<p>上述の5つの糸は、異なるタイムラインと異なるコミュニティを走っている。アップリフティングのTune-of-the-Yearカノン、テクノ・クロスオーバー、ユーロダンス／ハード・トランスのクラブ復活、創成世代のアルバム・サイクル、そしてASOT 25周年の制度的瞬間 ― これらは単一のオーディエンスを共有していない。共有しているのは時期だけだ。</p><p>その広がりこそ、これを単一ニッチのファッション・サイクルではなく構造的シフトと呼ぶ根拠だ。土台にある関心の一部はノスタルジアで説明できる。同時に、ストリーミング時代のメロディック・ダンスで育った世代が、トランスに半分の距離まで歩み寄ってきている。既存のファンと、複数の異なる扉から到達する新しいリスナー ― この組み合わせこそ、耐久性のある復帰を一周限りのリバイバルから分けるものだ。</p>' },
        { heading: 'リスナーからの視点 ― 5 つの糸が 1 つの週次エピソードのなかで可聴', body: '<p>本文の 5 つの糸の枠組み ― アップリフティングの Tune-of-the-Year カノン、テクノ・クロスオーバー、ユーロダンス／ハード・トランス復活、創成世代のアルバム・サイクル、ASOT 25 周年の制度的瞬間 ― は、ジャンルの編集的中心が自らを組み立てるのに使うフォーマットの内側で最も直接検証可能だ：A State of Trance の単一の週次エピソード。現在の 2026 年の ASOT エピソードは、典型的にその 2 時間のなかで 5 つの糸のうち 4 つに触れる。Kearney / Plumb のアップリフティング・レーン、Armin / Beyer のテクノ・トランス・クロスオーバー、新しい Above &amp; Beyond / Gouryella のレジェンド素材、ASOT 25 アンセムのローテーション ― これらすべてが同じ放送時間に座る。ユーロダンス／ハード・トランスのアンダーグラウンドだけが、放送からわずかに距離のある位置にいる。</p><p>単一エピソードの内側でのその同居こそ、本文が構造的と呼ぶものが構造的である可聴のシグナルだ。ファッション・サイクルは 5 つの糸のうち 1 つを激しく表面化させて他を押し出すだろう。本文が記録する広がりは、週次リスニングではより狭いエピソードではなくより広いエピソードとして現れる。本文の結びの主張 ― 広がりこそが耐久性のある復帰を一周限りのリバイバルから分けるもの ― は、外からだけでなくリスナー自身の週ごとのスケールで検証可能だ。</p>' }
      ]
    }
  },

  // ASOT 25 Years — 25th-anniversary focus piece for the institutional
  // centre of the 2026 trance revival year. Companion to trance-revival-
  // 2026 (which covers the revival across five forces; this article zooms
  // into the ASOT-specific axis: 2001 ID&T launch, ASOT 100 live-event
  // origin, weekly broadcast scale, the milestone-anthem tradition, and
  // the Rotterdam Ahoy 2026 anniversary programme). All factual claims
  // (episode 001 date, ASOT 100 location, episode 1262 number, anthem
  // attributions, festival programme, compilation title) verified against
  // Wikipedia, the official astateoftrance.com episode archive, DJ Mag,
  // 1001Tracklists, and the Armada Music release page at write time.
  {
    slug: 'asot-25-years-anniversary',
    date: '2026-05-21',
    readTime: 9,
    tags: ['history', 'culture', 'analysis'],
    en: {
      title: 'A State of Trance Turns 25: The Show That Defined a Genre',
      description: 'In 2026, A State of Trance reaches its twenty-fifth anniversary. A look at how one weekly radio show — launched on ID&T Radio in June 2001 — became the global broadcast platform that defines trance music itself.',
      excerpt: 'A State of Trance turned twenty-five in 2026. From a 2001 launch on ID&T Radio to a weekly Thursday broadcast reaching tens of millions across 150+ stations in 84 countries, ASOT has become the institutional centre of trance music — and the Rotterdam Ahoy anniversary marks the moment.',
      content: [
        { heading: 'From One Radio Show to a Genre&apos;s Centre', body: '<p>In 2026, A State of Trance reached its twenty-fifth anniversary. What began in June 2001 as a two-hour weekly mix on a Dutch radio station has grown into one of dance music&apos;s longest-running broadcast institutions &mdash; and arguably the single platform that has done the most to define what counts as trance over the past quarter-century.</p><p>The story is unusual in dance music. Most radio shows do not last twenty-five years. Most do not become global brands with their own festival circuit and listener-voted year-end canon. ASOT did both, and the 25th-anniversary moment is an occasion to look at how it happened.</p>' },
        { heading: 'The Beginning: 2001', body: '<p>Episode 001 of A State of Trance was broadcast on Friday, 1 June 2001 via ID&amp;T Radio in the Netherlands. The host was <a href="/artists/armin-van-buuren">Armin van Buuren</a>, then in his mid-twenties and several years into his own production career. The first three episodes were titled <em>Into Trance</em> before the show settled on its permanent name from episode 004 onwards.</p><p>The live-event tradition began two years later. ASOT 100, broadcast from Bloomingdale at Bloemendaal aan Zee in the Netherlands on 5 June 2003, was the first on-location ASOT special &mdash; a small Dutch beach event that has since grown, via the ASOT 250, 400, 500, and 1000-edition milestones, into the multi-night anniversary festivals the brand is now known for. The weekly show itself is today co-produced with <a href="/artists/ruben-de-ronde">Ruben de Ronde</a>.</p>' },
        { heading: 'Scale and Reach: A Global Platform', body: '<p>Twenty-five years on, the weekly broadcast has expanded into a global infrastructure. As of early 2026, ASOT has aired over 1,260 weekly episodes &mdash; episode 1262 went out on 29 January 2026 &mdash; and continues on its long-running Thursday slot. The show is syndicated through more than 150 radio stations across 84 countries, with a global weekly listenership in the tens of millions; the figure cited by the show itself sits around 40 million.</p><p>The format has stayed remarkably consistent: a two-hour weekly mix showcasing new and forthcoming trance and progressive releases, balanced across the uplifting, vocal, tech, and psy ends of the genre, with periodic Future Favourite / Tune of the Week votes and the milestone Tune-of-the-Year countdown. That throughput is what made the show a platform: for two and a half decades, ASOT has been the single most reliable channel through which new trance records reach a global audience.</p>' },
        { heading: 'The Anthem Tradition', body: '<p>One of the show&apos;s distinguishing traditions is the official anthem &mdash; an Armin-led production released to mark each major milestone episode and each annual festival edition. Anthems are usually built as full-length uplifting trance records and become long-running fixtures across the radio show and the live-event circuit. The canonical example is <a href="/artists/gaia">Gaia</a>&apos;s &ldquo;Status Excessu D,&rdquo; released as the ASOT 500 anthem in 2011 (the title is the Roman numerals for 500) and still a regular set closer.</p><p>The 25th-anniversary anthem, marking the 2026 edition, is &ldquo;Always You,&rdquo; credited to <a href="/artists/armin-van-buuren">Armin van Buuren</a>, <a href="/artists/richard-durand">Richard Durand</a> &amp; Dicosis &mdash; the official ELEVATION-edition anthem of A State of Trance 2026. The track sits at the centre of the anniversary release plan and is the closing record across most ASOT-stage festival sets through the spring. The wider context for why milestone anthems matter to the 2026 cycle is covered in the <a href="/blog/trance-revival-2026">Trance Revival 2026</a> piece.</p>' },
        { heading: 'The 25th Anniversary at Rotterdam Ahoy', body: '<p>The institutional centrepiece of the year is the 25th-anniversary festival, held at Rotterdam Ahoy on 27 and 28 February 2026 across two nights. The Friday programme is framed as a 25-years-of-trance journey &mdash; past, present, and future, organised around the figures who defined the genre across its run. The Saturday programme runs the standard multi-stage ASOT format, with the broader 2026 lineup including <a href="/artists/ferry-corsten">Ferry Corsten</a>, <a href="/artists/cosmic-gate">Cosmic Gate</a>, <a href="/artists/aly-and-fila">Aly &amp; Fila</a>, <a href="/artists/rank-1">Rank 1</a>, <a href="/artists/markus-schulz">Markus Schulz</a>, <a href="/artists/giuseppe-ottaviani">Giuseppe Ottaviani</a>, <a href="/artists/mauro-picotto">Mauro Picotto</a>, <a href="/artists/laura-van-dam">Laura van Dam</a>, and many others.</p><p>Two anniversary-specific set pieces anchor the programme. <a href="/artists/armin-van-buuren">Armin van Buuren</a> closes the Friday with a five-hour solo set &mdash; a first for the ASOT festival format. On Saturday he performs a back-to-back-to-back set with <a href="/artists/maddix">Maddix</a> and Oliver Heldens, an extension of the same trio&apos;s back-to-back debut at Ultra Music Festival 2025. The festival itself is paired with the release of <em>A State of Trance: 25 Years &mdash; Official Anthem Collection</em>, an Armada compilation gathering the canonical ASOT anthems from 2010 through the new 2026 ELEVATION anthem, released on 27 February 2026 to coincide with the opening night.</p>' },
        { heading: 'Twenty-Five Years On', body: '<p>What separates A State of Trance from most other long-running radio shows is that the broadcast is also a community. The weekly episode is one node in a connected ecosystem: a radio show that funnels new music into label release cycles, festival editions that turn that catalogue into shared live experience, an annual Tune-of-the-Year listener vote that lets the audience act as participants rather than recipients. The show calls its global audience the &ldquo;trance family,&rdquo; and the term has stuck because the structure produces something closer to a community than a listener base.</p><p>Twenty-five years in, that community is expanding rather than contracting. The mid-2020s trance revival &mdash; uplifting&apos;s return to the centre, the techno crossover, the founding-generation album cycle &mdash; is being broadcast through ASOT week by week, which is part of why the revival is reaching audiences as quickly as it is. For the broader context of how the 2026 genre cycle looks across all of its stylistic camps, see the <a href="/blog/trance-revival-2026">Trance Revival 2026</a> companion piece and the <a href="/timeline">TRANCE NEXUS timeline</a>.</p>' },
        { heading: "A Listener's Note — A Newer Listener Inside an Older Institution", body: '<p>A great many of the show\'s current audience joined after the institution was already established &mdash; somewhere in the back half of the twenty-five-year arc rather than at the start. Very few have the full twenty-five-year span as lived experience. So the "trance family" the article references is, on the ground, mostly a community of people who joined the broadcast already in motion &mdash; and that is, I think, the show\'s most quiet achievement.</p><p>I did not attend the Rotterdam Ahoy 25th-anniversary nights in person. What followed, the same week, was the standard Thursday episode &mdash; the show kept running its regular slot through the anniversary, because that is what the institution does &mdash; and afterwards what I could see of the festival coverage. The continuity is the more interesting thing than any single milestone. Anniversaries come and go; the weekly broadcast is what produces the community the article describes, episode after episode, year after year. From inside ongoing listening, the 25-year mark feels less like a celebration and more like a check-in: the show is still here, still on Thursday, still doing the same work, and the people listening to it are still showing up.</p>' }
      ]
    },
    ja: {
      title: 'A State of Trance 25周年：ジャンルを定義したラジオショーの軌跡',
      description: '2026年、A State of Tranceが25周年を迎えた。2001年6月にID&T Radioで始まった毎週のラジオ番組が、いかにしてトランスというジャンルを定義する世界的放送プラットフォームへと成長したのかを辿る。',
      excerpt: 'A State of Tranceは2026年、25周年を迎えた。2001年のID&T Radio開始から、現在は150局以上・84カ国・週次の木曜放送へと拡大し、トランスの制度的中心となっている。Rotterdam Ahoyでの25周年公演がその節目だ。',
      content: [
        { heading: '1つのラジオ番組からジャンルの中心へ', body: '<p>2026年、A State of Tranceが25周年を迎えた。2001年6月にオランダのラジオ局で始まった2時間の週次ミックスは、ダンス・ミュージックで最も長く続く放送機関のひとつへと成長し、おそらくこの25年間に「トランスとして認められるもの」を最も多く形作ってきた単一プラットフォームとなっている。</p><p>ダンス・ミュージックの中でも珍しい物語だ。25年続くラジオ番組は多くない。独自のフェスティバル・サーキットとリスナー投票による年末カノンを持つグローバル・ブランドになるものはさらに少ない。ASOTは両方を達成しており、25周年という節目は、そのプロセスを振り返る機会となる。</p>' },
        { heading: 'はじまり：2001年', body: '<p>A State of Trance第1回は、2001年6月1日金曜日、オランダのID&amp;T Radioで放送された。ホストは<a href="/artists/armin-van-buuren">Armin van Buuren</a> ― 当時20代半ばで、自身のプロダクション・キャリアを始めて数年経った頃。最初の3エピソードのタイトルは<em>Into Trance</em>で、番組の現在の名称が定着したのはエピソード4以降だ。</p><p>ライブ・イベントの伝統は2年後に始まった。2003年6月5日、オランダのBloomingdale beach clubから放送されたASOT 100が、ASOTにとって最初のオン・ロケーション特番 ― 小規模なオランダの海辺イベント ― だった。これがASOT 250、400、500、そして1000周年エピソードを経て、現在ブランドの代名詞となっている数夜にわたる周年フェスティバルへと成長した。週次番組自体は現在、<a href="/artists/ruben-de-ronde">Ruben de Ronde</a>と共同プロデュースされている。</p>' },
        { heading: '規模とリーチ：世界的プラットフォーム', body: '<p>25年を経て、週次放送はグローバルなインフラへと拡大した。2026年初頭時点で、ASOTの放送回数は1,260回を超えている ― エピソード1262は2026年1月29日に放送された ― そして長年続く木曜のスロットで継続中だ。番組は84カ国・150局以上のラジオ局でシンジケート配信されており、世界の週間リスナー数は数千万人規模 ― 番組自身が引用する数字は4,000万人前後とされる。</p><p>フォーマットは驚くほど一貫している：2時間の週次ミックスで、新譜および近日リリースのトランスとプログレッシブを、アップリフティング、ボーカル、テック、サイの各端をバランスよく紹介し、定期的なFuture Favourite／Tune of the Week投票と節目のTune-of-the-Yearカウントダウンで構成される。このスループットこそ、番組をプラットフォームたらしめた要素だ ― 25年間、ASOTは新しいトランス・レコードが世界中のオーディエンスに届く最も信頼できる単一チャネルであり続けてきた。</p>' },
        { heading: 'アンセムの伝統', body: '<p>番組を特徴づける伝統のひとつが公式アンセムだ ― 主要な節目エピソードと年次フェスティバル・エディションを記念して、Armin中心のプロダクションとしてリリースされる。アンセムはたいていフル尺のアップリフティング・トランス・レコードとして制作され、ラジオ番組とライブ・イベント・サーキットの長年の常連となる。象徴的な例は<a href="/artists/gaia">Gaia</a>の「Status Excessu D」 ― 2011年にASOT 500の公式アンセムとしてリリースされ（タイトルは500のローマ数字）、今もセットの締めくくりに定番として鳴らされる。</p><p>2026年版＝25周年公式アンセムは「Always You」、クレジットは<a href="/artists/armin-van-buuren">Armin van Buuren</a>、<a href="/artists/richard-durand">Richard Durand</a> &amp; Dicosis ― A State of Trance 2026のELEVATIONエディション公式アンセムだ。トラックは周年リリース計画の中心に位置し、春のASOTステージ・フェスティバル・セットの大半を締めくくる楽曲となっている。なぜ2026年サイクルで節目アンセムが重要な意味を持つのかについての広い文脈は、<a href="/blog/trance-revival-2026">トランス・リバイバル2026</a>記事を参照。</p>' },
        { heading: '25周年公演 ― Rotterdam Ahoy', body: '<p>2026年の制度的中心は、25周年フェスティバル ― Rotterdam Ahoyで2026年2月27日・28日の2夜にわたって開催された。金曜日のプログラムは「トランス25年の旅」として構成され、過去・現在・未来を、ジャンルを定義してきた人物たちを軸に辿る夜となった。土曜日のプログラムは標準的なマルチステージASOTフォーマットで実施され、2026年版のラインナップには<a href="/artists/ferry-corsten">Ferry Corsten</a>、<a href="/artists/cosmic-gate">Cosmic Gate</a>、<a href="/artists/aly-and-fila">Aly &amp; Fila</a>、<a href="/artists/rank-1">Rank 1</a>、<a href="/artists/markus-schulz">Markus Schulz</a>、<a href="/artists/giuseppe-ottaviani">Giuseppe Ottaviani</a>、<a href="/artists/mauro-picotto">Mauro Picotto</a>、<a href="/artists/laura-van-dam">Laura van Dam</a>ほか多数が含まれる。</p><p>周年特有の2つのセットがプログラムを牽引した。<a href="/artists/armin-van-buuren">Armin van Buuren</a>は金曜の締めに5時間のソロセットを行った ― ASOTフェスティバル・フォーマットでは初の試み。土曜には<a href="/artists/maddix">Maddix</a>とOliver Heldensとのバック・トゥ・バック・トゥ・バック（B3B）セットを披露 ― この3名のB3Bは2025年Ultra Music Festivalでのデビューに続くものだ。フェスティバルにあわせて、<em>A State of Trance: 25 Years &mdash; Official Anthem Collection</em>もリリースされた。2010年以降の歴代ASOTアンセムと新2026年ELEVATIONアンセムを集めたArmadaのコンピレーション・アルバムで、開幕初日の2026年2月27日にあわせて公開された。</p>' },
        { heading: '25年を経て', body: '<p>A State of Tranceを他の長寿ラジオ番組と分かつのは、放送が同時にコミュニティでもあるという点だ。週次エピソードは連結したエコシステムの1ノードであって ― 新譜をレーベルのリリース・サイクルに流すラジオ番組、そのカタログを共有のライブ体験に変えるフェスティバル・エディション、年次のTune-of-the-Yearリスナー投票がオーディエンスを受け手ではなく参加者として機能させる。番組はグローバル・オーディエンスを「trance family」と呼んでおり、この呼称が定着したのは、構造がリスナー・ベースよりもコミュニティに近いものを生み出すからだ。</p><p>25年を経た今、そのコミュニティは縮小ではなく拡大している。2020年代中盤のトランス・リバイバル ― アップリフティングの中心への回帰、テクノとのクロスオーバー、創成世代のアルバム・サイクル ― は、週単位でASOTを通じて放送されており、リバイバルが速く広がっているのはその一因だ。2026年のジャンル・サイクルがその各スタイル陣営でどう見えるかの広い文脈は、姉妹記事<a href="/blog/trance-revival-2026">トランス・リバイバル2026</a>と<a href="/timeline">TRANCE NEXUSタイムライン</a>を参照。</p>' },
        { heading: 'リスナーからの視点 ― 古い機関の内側にいる新しいリスナーとして', body: '<p>現在のオーディエンスの多くは、25 年のアークの最初からではなく後半のどこか ― 機関がすでに確立されてから合流した側にいる。25 年すべてを実体験として持つ人はごくわずかだ。だから本文が言及する「trance family」は、地に足のついた現実としては、番組がすでに動き出してから合流した人々の共同体だ ― そしてそれこそが、この番組の最も静かな達成のように思える。</p><p>私は Rotterdam Ahoy 25 周年公演には現地参加していない。同じ週に続いたのは、いつも通り木曜の通常エピソード ― 番組は周年期間中も通常のスロットを走らせ続けた、機関とはそういうものだから ― そして後日できる範囲のフェスティバル・カバレッジだ。どの単一の節目よりも「継続性」のほうが面白い。周年は来ては去る。コミュニティを実際に生み出すのは週次の放送のほうだ、エピソードごとに、毎年。継続的なリスニングの内側からの感覚として、25 年マークは「祝典」というより「点呼」に近い ― 番組はまだここにある、まだ木曜に、まだ同じ仕事をしている。そして聴いている人たちもまだ、現れ続けている。</p>' }
      ]
    }
  },

  // Then & Now — How Trance Changed from 2008 to 2026.
  // Returnee-targeted article. Personal first-person opening (operator
  // came back to trance via Armin van Buuren's Tomorrowland 2018 main-
  // stage set), then a five-axis 2008-vs-2026 comparison across sound,
  // scene position, key figures, festival culture, and listening
  // habits. Companion to trance-revival-2026 (revival mechanics across
  // five forces) and asot-25-years-anniversary (institutional centre
  // of the revival year). All factual claims drawn from the user
  // brief's verified-facts list:
  //   - 2018 Tomorrowland Armin set as the operator's return moment.
  //   - "In and Out of Love" (Armin van Buuren feat. Sharon den Adel),
  //     2008 single, defining vocal-trance commercial example.
  //   - A State of Trance 2008 compilation charted fifth on Billboard
  //     Top Dance/Electronic Albums.
  //   - The EDM commercial peak passed around 2015; trance spent the
  //     2010s away from the mainstream centre.
  //   - Trance Energy 2008: 9 Feb 2008, Jaarbeurs Utrecht, lineup
  //     included Tiesto, Ferry Corsten, Sander van Doorn, Sean Tyas,
  //     John O'Callaghan.
  //   - Trance Energy rebranded to Energy and shifted toward electro-
  //     house programming; ASOT 500-onwards became the largest annual
  //     trance event in the Netherlands.
  //   - Marlon Hoffstadt + MALUGI run Club Heart Broken (Berlin); on
  //     EDC Las Vegas mainstage May 2025 between Tiesto and Armin van
  //     Buuren, with Capitol Records signing announced the same week.
  //   - Above & Beyond — Bigger Than All Of Us (2025), their first
  //     full electronic album in seven years.
  //   - Tiesto's T8-branded trance return.
  //   - Ferry Corsten reactivated Gouryella with new material and a
  //     25 Years of Gouryella programme at ADE 2025.
  // No additional artist names, track names, dates, chart positions,
  // or lineup entries are introduced beyond the verified-facts list.
  {
    slug: 'trance-then-and-now-2008-2026',
    date: '2026-06-03',
    readTime: 9,
    tags: ['history', 'analysis', 'culture'],
    en: {
      title: 'Then & Now — How Trance Changed from 2008 to 2026',
      description: 'A returnee\'s map of the eighteen years between trance\'s 2008 commercial peak and the 2026 revival. Sound, scene position, key figures, festival culture, and listening habits compared side by side — opened by the writer\'s own 2018 Tomorrowland return to the genre.',
      excerpt: 'I came back to trance in 2018, pulled in by Armin van Buuren\'s Tomorrowland mainstage set, and discovered the scene had moved on without me. This is the eighteen-year story between the 2008 commercial peak, the 2010s dip when EDM took the centre, and the 2026 revival — five axes laid side by side.',
      content: [
        { heading: 'Coming Back in 2018 — A Personal Note', body: '<p>I am one of the people who came back. In the summer of 2018, I watched <a href="/artists/armin-van-buuren">Armin van Buuren</a>&apos;s Tomorrowland mainstage set, and the music pulled me back into a genre I had largely stopped following for years. The strange part was not the return itself. It was the discovery, in the months that followed, that the trance I came back to was already not the trance I remembered. Whole pieces of the picture had moved. Some had vanished. Others I did not recognise.</p><p>This article puts 2008 and 2026 side by side &mdash; the year a lot of long-time listeners remember as the peak, and the year the genre has visibly come back. The point is not nostalgia. It is the eighteen-year story in between: where the music went, who stayed, what returned, and what is genuinely new. If you are also one of the returnees, treat this as a map of the territory you missed.</p>' },
        { heading: 'Sound and Production: 2008 vs 2026', body: '<p><strong>2008</strong> was the late peak of uplifting trance. The sound that dominated mainstage trance &mdash; supersaw leads stacked across several octaves, enormous mid-track breakdowns, the breakdown-to-buildup-to-drop architecture inflated to its fullest scale &mdash; was at its most confident moment. Vocal trance was also a commercial format in its own right. <a href="/artists/armin-van-buuren">Armin van Buuren</a>&apos;s &ldquo;In and Out of Love&rdquo; featuring Sharon den Adel was released in 2008 and became one of the year&apos;s defining vocal-trance records, the kind of single that crossed from the club into mainstream radio play.</p><p><strong>2026</strong> sounds different even at the level of the kick drum. Trance and techno have moved closer to each other than they have been for two decades &mdash; the same Drumcode-side producers and ASOT-side producers now appear on the same compilations, and back-to-back sets between the two camps are normal mainstage programming. Underneath that, the harder ends of the 1990s are returning: acid lines, hard-trance kick patterns, eurodance vocal hooks. Above all of it, the classical uplifting form is back at the centre rather than gone. So 2026 trance is not one sound. It is three or four parallel sounds running at the same time, and the modern listener picks lanes.</p>' },
        { heading: 'Where Trance Sat in the Scene — A Three-Act Story', body: '<p>This is the spine of the eighteen-year story, and where the dramatic arc lives.</p><p><strong>2008.</strong> Trance was a mainstream commercial format. The official A State of Trance 2008 compilation, mixed by <a href="/artists/armin-van-buuren">Armin van Buuren</a>, charted fifth on Billboard&apos;s Top Dance/Electronic Albums &mdash; the kind of placement that signals a genre fully arrived inside the wider dance-music industry.</p><p><strong>The 2010s.</strong> The picture changed quickly. The mainstream dance-music conversation shifted toward the festival sound that came to be called EDM &mdash; the &ldquo;trouse&rdquo; hybrids of trance and house, the big-room house template, and then the broader pop-EDM crossover. Trance the genre did not disappear, but it stopped being the centre of the mainstream conversation about dance music, and several headline names from the 2008 era moved their sound outward toward where the commercial gravity had gone. By around 2015 the EDM bubble had passed its commercial peak and the mainstream dance conversation began to fragment again, but trance had spent those years off-centre.</p><p><strong>2026.</strong> Trance is back in the mainstream conversation in a way it has not been for over a decade. Major mixed-genre festivals &mdash; Coachella, Tomorrowland, Ultra &mdash; carry dedicated trance stages and trance headliners again, and the broader revival is documented in the <a href="/blog/trance-revival-2026">Trance Revival 2026</a> piece. The return is real, and it is broad enough to span several different stylistic camps inside one calendar year.</p>' },
        { heading: 'The Key Figures Then and Now', body: '<p><strong>2008.</strong> The mainstage of trance was led by <a href="/artists/armin-van-buuren">Armin van Buuren</a>, <a href="/artists/tiesto">Ti&euml;sto</a>, <a href="/artists/paul-van-dyk">Paul van Dyk</a>, and <a href="/artists/ferry-corsten">Ferry Corsten</a> &mdash; the producer / DJ axis that defined the genre&apos;s commercial peak across the late 2000s. Album cycles, ASOT-style weekly radio shows, and arena-scale touring were all running at their highest point.</p><p><strong>2026.</strong> The legends are still active &mdash; but the active picture is more complicated, and arguably more interesting. <a href="/artists/tiesto">Ti&euml;sto</a> has turned back toward trance after a long EDM run; the full arc is covered in <a href="/blog/how-tiesto-reinvented-trance-king-to-edm">How Ti&euml;sto Reinvented Himself</a>. <a href="/artists/above-and-beyond">Above &amp; Beyond</a> returned to the studio-album cycle in 2025 with <em>Bigger Than All Of Us</em>, their first full electronic album in seven years. <a href="/artists/ferry-corsten">Ferry Corsten</a> has reactivated the Gouryella alias, releasing new material and programming a &ldquo;25 Years of Gouryella&rdquo; retrospective at Amsterdam Dance Event 2025. <a href="/artists/armin-van-buuren">Armin van Buuren</a> continues to run A State of Trance, which reached its twenty-fifth anniversary in 2026 &mdash; covered in <a href="/blog/asot-25-years-anniversary">A State of Trance Turns 25</a>. So the names from 2008 have not stepped aside; they have evolved.</p><p>The newer figures on the mainstage edge come from outside the classical trance lineage. <a href="/artists/marlon-hoffstadt">Marlon Hoffstadt</a> &mdash; the Berlin-based producer who runs the Club Heart Broken label and party series with MALUGI &mdash; sits at the centre of the eurodance / hard-trance revival side. He performed between <a href="/artists/tiesto">Ti&euml;sto</a> and <a href="/artists/armin-van-buuren">Armin van Buuren</a> on the EDC Las Vegas mainstage in May 2025, the same week Capitol Records announced his signing &mdash; the clearest signal so far that the eurodance / trance crossover has crossed from underground to major-label release calendars.</p>' },
        { heading: 'Festival Culture: From Trance-Only Halls to Trance-as-Stage', body: '<p><strong>2008.</strong> Trance was a genre with its own dedicated mass-scale festivals. Trance Energy 2008, held at Jaarbeurs Utrecht on 9 February, was one of the canonical examples &mdash; an indoor multi-stage trance-only event whose 2008 lineup included <a href="/artists/tiesto">Ti&euml;sto</a>, <a href="/artists/ferry-corsten">Ferry Corsten</a>, Sander van Doorn, <a href="/artists/sean-tyas">Sean Tyas</a>, and <a href="/artists/john-ocallaghan">John O&apos;Callaghan</a>. Events of that kind were the centrepiece of the trance year.</p><p><strong>What happened next.</strong> From ASOT 500 onwards, the annual A State of Trance festival grew into the largest single trance event in the Netherlands &mdash; effectively taking over the institutional role Trance Energy had held. Trance Energy itself was rebranded simply as Energy and moved away from trance toward an electro-house programming direction. The shift was symbolic. The single most recognisable trance-only festival brand had walked out of the genre.</p><p><strong>2026.</strong> The model has changed shape. Genre-only mainstage festivals are no longer the default form. The two patterns that dominate today are dedicated trance stages inside larger multi-genre festivals &mdash; the Tomorrowland trance stage, the Ultra ASOT stage, the EDC trance hours &mdash; and the boutique trance-specialist event, the cleanest current example of which is Luminosity Beach Festival in the Netherlands. The trance-only mass festival of the 2008 model has not returned in the same shape. For the current full map, see <a href="/blog/best-trance-festivals-worldwide">Best Trance Music Festivals Worldwide</a>.</p>' },
        { heading: 'How We Listen: From CDs to 1001Tracklists', body: '<p><strong>2008.</strong> The dominant listening formats were the CD compilation and the per-track digital download. Annual mixed compilations &mdash; A State of Trance, In Search of Sunrise, Trance Energy &mdash; were a serious part of the release calendar. Beatport and similar download stores were where individual tracks were bought. The weekly radio show was already central, but listening to it meant either tuning in live or downloading the podcast file once it appeared.</p><p><strong>2026.</strong> Streaming has reshaped the listening pattern. The same A State of Trance episode that, in 2008, would have been a Friday-night appointment is now an on-demand archive a listener can pull up at any point in the week. The 1001Tracklists.com habit &mdash; following a set&apos;s track IDs, looking up the unreleased records inside a Tomorrowland or ADE set the morning after it aired &mdash; is a 2010s-and-later development that did not really exist as a mainstream listener behaviour in 2008. The result is that a current trance listener sits closer to the production side than the 2008 listener did: you can see what is being played weeks before the records come out.</p>' },
        { heading: 'Closing Note — A Different Kind of Shine', body: '<p>The music I left in 2008 is not coming back in its exact 2008 shape. That sound &mdash; the late-2000s uplifting peak as a mainstream commercial format &mdash; was specific to a moment, and moments do not repeat. What 2026 trance has instead is a different mixture: the classical uplifting form is back at the centre, the legends from the 2008 picture are still active and still evolving, the genre is connecting with techno and with newer eurodance / hard-trance currents at the same time, and the institutions &mdash; A State of Trance most visibly &mdash; are still running their long weekly broadcasts. It is a different kind of shine. Less commercial, more layered, more interesting to follow week to week.</p><p>If you are another returnee and figuring out where to start: the weekly A State of Trance and Group Therapy episodes are the simplest entry into the current ecosystem. The Luminosity Beach Festival lineup is the clearest single snapshot of who is active in 2026 trance. And a walk through the <a href="/timeline">TRANCE NEXUS timeline</a> &mdash; or the <a href="/blog/trance-tracks-defined-each-decade-retrospective">decade-by-decade retrospective</a> &mdash; is the easiest way to fill in the missing eighteen years before you start listening in earnest again. Welcome back.</p>' }
      ]
    },
    ja: {
      title: '18年でトランスはどう変わったか — 2008年と2026年を比べて',
      description: '2008年の商業ピーク、EDMが中心を取った2010年代の沈降、そして2026年のリバイバル ― 18年の物語を、サウンド・シーン内の立ち位置・主要人物・フェスティバル文化・聴き方の5つの軸で並べて見る。運営者自身の2018年Tomorrowlandでの復帰体験から始める復帰組向けガイド。',
      excerpt: '2018年のTomorrowlandでArmin van Buurenのセットに引き戻されて戻ってきたとき、シーンは記憶とはまるで別物になっていた。2008年の商業ピーク、EDMが中心を取った2010年代の沈降、そして2026年のリバイバル ― 18年の物語を、5つの軸で並べて見る。',
      content: [
        { heading: '復帰のきっかけ ― 2018年のTomorrowlandから', body: '<p>私もまた、戻ってきた一人だ。2018年の夏、Tomorrowlandのメインステージで<a href="/artists/armin-van-buuren">Armin van Buuren</a>のセットを観て、何年も追わなくなっていたジャンルへと音楽に引き戻された。奇妙だったのは復帰そのものではなく、その後の数か月で気づいたことだ ― 戻ってきた先のトランスは、自分が記憶しているトランスとはすでに別物だった。シーンの絵のいくつもの部品が動いていた。消えたものもあった。見覚えのないものもあった。</p><p>本稿では、2008年と2026年を並べて見ていく。長年のリスナーがしばしばピークとして記憶する年と、ジャンルが目に見えて戻ってきた年だ。狙いはノスタルジアではない。その間の18年間の物語 ― 音楽がどこへ行き、誰が残り、何が戻ってきて、何が本当に新しいのか ― を辿ることだ。同じ復帰組の読者には、見逃した地形の地図として読んでほしい。</p>' },
        { heading: 'サウンドとプロダクション ― 2008年と2026年', body: '<p><strong>2008年</strong>はアップリフティング・トランスの後期ピークだった。メインステージのトランスを支配していたサウンド ― 複数オクターブに重ねられたスーパーソウのリード、巨大なミッドトラック・ブレイクダウン、最大スケールに膨らんだブレイクダウン→ビルドアップ→ドロップの構造 ― は最も自信に満ちた瞬間にあった。ヴォーカル・トランスも独立した商業フォーマットとして成立していた。<a href="/artists/armin-van-buuren">Armin van Buuren</a>のSharon den Adel参加曲「In and Out of Love」は2008年にリリースされ、その年を定義するヴォーカル・トランスのレコードのひとつとなった ― クラブからメインストリーム・ラジオへと越境するタイプのシングルだ。</p><p><strong>2026年</strong>のサウンドは、キックの段階からすでに違って聴こえる。トランスとテクノは過去20年で最も互いに近づいている ― 同じDrumcode側のプロデューサーとASOT側のプロデューサーが同じコンピレーションに並び、両陣営のバック・トゥ・バック・セットが当たり前のメインステージ・プログラミングになっている。その下では、1990年代のよりハードな端 ― アシッド・ライン、ハード・トランスのキック・パターン、ユーロダンスのヴォーカル・フック ― が戻ってきている。そしてその上に、古典的なアップリフティング形式が消えるのではなく中心へと帰ってきている。だから2026年のトランスはひとつのサウンドではない。3つか4つの並行するサウンドが同時に走っていて、現代のリスナーはレーンを選ぶ。</p>' },
        { heading: 'シーン内の立ち位置 ― 三幕の盛衰物語', body: '<p>ここが18年間の物語の背骨であり、ドラマの中心だ。</p><p><strong>2008年。</strong>トランスはメインストリームの商業フォーマットだった。<a href="/artists/armin-van-buuren">Armin van Buuren</a>がミックスした公式コンピレーション「A State of Trance 2008」はBillboardのTop Dance/Electronic Albumsで5位にチャートインした ― ジャンルがより広いダンス・ミュージック産業の内側に完全に到着したことを示すタイプのポジションだ。</p><p><strong>2010年代。</strong>絵は素早く変わった。メインストリームのダンス・ミュージックの会話は、EDMと呼ばれるようになるフェスティバル・サウンドへとシフトした ― トランスとハウスのハイブリッド「trouse」、ビッグルーム・ハウスのテンプレート、そしてより広いポップ・EDMのクロスオーバー。トランスというジャンルが消えたわけではない。しかしダンス・ミュージックを巡るメインストリームの会話の中心ではなくなり、2008年期のヘッドライナーの何人かは、商業的な重力が向かった方向へとサウンドを外側に移していった。2015年頃にEDMバブルは商業的ピークを越え、メインストリームのダンスの会話は再び断片化し始めるが、その間トランスは中心から外れた場所で時間を過ごした。</p><p><strong>2026年。</strong>トランスは10年以上ぶりの規模で、メインストリームの会話に戻ってきている。複数ジャンル混合の大型フェスティバル ― Coachella、Tomorrowland、Ultra ― は再びトランス専用ステージとトランスのヘッドライナーを抱えており、より広い復帰の動きは姉妹記事の<a href="/blog/trance-revival-2026">トランス・リバイバル2026</a>でまとめている。復帰は本物で、ひとつのカレンダーの中で複数の異なるスタイル陣営にまたがる程度に広い。</p>' },
        { heading: '主要人物 ― あの頃と今', body: '<p><strong>2008年。</strong>トランスのメインステージを率いていたのは<a href="/artists/armin-van-buuren">Armin van Buuren</a>、<a href="/artists/tiesto">Ti&euml;sto</a>、<a href="/artists/paul-van-dyk">Paul van Dyk</a>、<a href="/artists/ferry-corsten">Ferry Corsten</a>のプロデューサー／DJ軸 ― 2000年代後半のジャンル商業ピークを定義した4組だ。アルバム・サイクル、ASOTスタイルの週次ラジオ番組、アリーナ規模のツアー、いずれも最高点で稼働していた。</p><p><strong>2026年。</strong>レジェンドは今も現役だ ― ただし現役の絵は、より複雑で、おそらくより興味深い。<a href="/artists/tiesto">Ti&euml;sto</a>は長いEDM期を経てトランスへと向き直っている。その長いアークは<a href="/blog/how-tiesto-reinvented-trance-king-to-edm">Ti&euml;stoの自己再発明</a>で扱っている。<a href="/artists/above-and-beyond">Above &amp; Beyond</a>は2025年、7年ぶりのフル電子音楽スタジオ・アルバム<em>Bigger Than All Of Us</em>でスタジオ・サイクルに戻った。<a href="/artists/ferry-corsten">Ferry Corsten</a>はGouryella名義を再起動し、新曲をリリース、Amsterdam Dance Event 2025で「25 Years of Gouryella」回顧プログラムを行った。<a href="/artists/armin-van-buuren">Armin van Buuren</a>はA State of Tranceの運営を続けており、番組は2026年に25周年を迎えた ― 詳細は<a href="/blog/asot-25-years-anniversary">A State of Trance 25周年</a>で扱っている。2008年の名前たちは退場したのではなく、進化している。</p><p>メインステージ周辺の新しい顔ぶれは、古典的トランス系譜の外側からやって来る。<a href="/artists/marlon-hoffstadt">Marlon Hoffstadt</a> ― ベルリン拠点のプロデューサーで、MALUGIとClub Heart Brokenレーベル兼パーティー・シリーズを運営 ― はユーロダンス／ハード・トランス復活側の中心にいる。彼は2025年5月、EDC Las Vegasのメインステージで<a href="/artists/tiesto">Ti&euml;sto</a>と<a href="/artists/armin-van-buuren">Armin van Buuren</a>の間に出演し、同じ週にCapitol Recordsとの契約が発表された ― ユーロダンス／トランスのクロスオーバーがアンダーグラウンドからメジャー・レーベルのリリース・カレンダーへ越境した、これまでで最も明快なシグナルだ。</p>' },
        { heading: 'フェスティバル文化 ― 専門フェスから「ステージとしてのトランス」へ', body: '<p><strong>2008年。</strong>トランスは独自の大規模フェスティバルを持つジャンルだった。2008年2月9日にユトレヒトのJaarbeursで開催されたTrance Energy 2008はその代表例だ ― 屋内マルチステージのトランス専門イベントで、その年のラインナップには<a href="/artists/tiesto">Ti&euml;sto</a>、<a href="/artists/ferry-corsten">Ferry Corsten</a>、Sander van Doorn、<a href="/artists/sean-tyas">Sean Tyas</a>、<a href="/artists/john-ocallaghan">John O&apos;Callaghan</a>が並んだ。この種のイベントがトランスの年間カレンダーの中心だった。</p><p><strong>その後。</strong>ASOT 500以降、年次A State of Tranceフェスティバルが、オランダ最大のトランス・イベントへと成長した ― 実質的にTrance Energyが担っていた制度的役割を引き継いだ。Trance Energy自体は「Energy」へと改名し、トランスから離れてエレクトロ・ハウス寄りのプログラミング方向へと移った。シフトは象徴的だった。最も認識しやすいトランス専門フェスティバル・ブランドが、ジャンルから歩み去ったのだ。</p><p><strong>2026年。</strong>モデルは形を変えている。単独ジャンルの大規模フェスは、もはやデフォルトの形式ではない。今日支配的な2つのパターンは、より大きな複数ジャンル・フェスの内側にあるトランス専用ステージ ― Tomorrowlandのトランス・ステージ、UltraのASOTステージ、EDCのトランス・アワー ― と、ブティック型のトランス特化イベント（現在の最もクリアな例はオランダのLuminosity Beach Festival）だ。2008年モデルの「トランス専門の大規模フェス」は同じ形では戻っていない。最新の全体マップは<a href="/blog/best-trance-festivals-worldwide">世界最高のトランスフェスティバル完全ガイド</a>を参照。</p>' },
        { heading: '聴き方 ― CDコンピから1001Tracklistsへ', body: '<p><strong>2008年。</strong>支配的な聴取フォーマットはCDコンピレーションと個別トラックのデジタル・ダウンロードだった。年次ミックス・コンピレーション ― A State of Trance、In Search of Sunrise、Trance Energy ― はリリース・カレンダーの真剣な一部だった。Beatportなどのダウンロード・ストアが個別トラックを買う場所だった。週次ラジオ番組はすでに中心的だったが、聴くということはライブで合わせるか、ポッドキャストのファイルが公開された後にダウンロードするかのいずれかを意味した。</p><p><strong>2026年。</strong>ストリーミングが聴取パターンを再構成した。2008年なら金曜夜の予定だった同じA State of Tranceのエピソードは、今では週のどの時点でも引き出せるオンデマンド・アーカイブだ。1001Tracklists.comの習慣 ― セットのトラックIDを追い、TomorrowlandやADEのセットで放送翌朝に未発表レコードを調べ上げる ― は2010年代以降の発展で、2008年にはメインストリームのリスナー行動として実質的に存在しなかった。結果として、現在のトランス・リスナーは2008年のリスナーよりもプロダクション側に近い位置に座る。リリースの数週間前から、何が鳴らされているかを見ることができるからだ。</p>' },
        { heading: '締め ― 別種の輝き方', body: '<p>2008年に置いてきた音は、2008年そのままの形では戻ってこない。あのサウンド ― 2000年代後半のアップリフティング・ピークが商業メインストリーム・フォーマットとして存在した状態 ― は一つの瞬間に特有のもので、瞬間は繰り返さない。代わりに2026年のトランスが持っているのは、別種の混合物だ。古典的なアップリフティング形式は中心に戻り、2008年の絵の中のレジェンドたちは今も現役で進化を続け、ジャンルはテクノと、そして新しいユーロダンス／ハード・トランスの流れと同時に接続し、機関 ― 最も可視性が高いのはA State of Trance ― は今も長い週次放送を走らせている。別種の輝き方だ。商業性はより薄く、層はより多く、週ごとに追うのがより面白い。</p><p>もしあなたも復帰組で、どこから聴き直すか考えているなら ― 週次のA State of TranceとGroup Therapyのエピソードが、現在のエコシステムへの最もシンプルな入口だ。Luminosity Beach Festivalのラインナップは、2026年のトランスで誰が現役なのかの最もクリアな単一スナップショット。そして<a href="/timeline">TRANCE NEXUSタイムライン</a>、または<a href="/blog/trance-tracks-defined-each-decade-retrospective">各10年を定義したトランス・トラック</a>を一通り辿るのが、本格的に聴き直す前に18年の欠けたピースを埋める最も簡単な方法だ。おかえりなさい。</p>' }
      ]
    }
  },
  {
    slug: 'dreamstate-socal-2026-complete-guide',
    date: '2026-07-29',
    readTime: 2,
    tags: ['dreamstate', 'festival', 'insomniac', 'north-america'],
    en: {
      title: 'Dreamstate SoCal 2026 Guide — Dates, Venue and Lineup',
      description: 'Dreamstate SoCal 2026 takes place on November 20–21 at the Queen Mary Waterfront in Long Beach. Basics, stages and lineup highlights, including Above & Beyond\'s Anjunabeats Classics set.',
      excerpt: 'Dreamstate SoCal returns for its 11th edition on November 20–21, 2026 at the Queen Mary Waterfront in Long Beach. Here are the basics and the lineup highlights.',
      content: [
        {
          heading: '1. Event Basics',
          body: '<ul><li><strong>Edition:</strong> 11th</li><li><strong>Dates:</strong> November 20–21, 2026</li><li><strong>Venue:</strong> Queen Mary Waterfront, Long Beach, CA</li><li><strong>Organizer:</strong> Insomniac</li></ul><p>According to EDM Tunes, the 2026 edition has over 70 acts across four stages. The new additions are the Long Beach Amphitheater and Beatbox\'s Art Car stage, which features local trance artists.</p>'
        },
        {
          heading: '2. Above & Beyond: Anjunabeats Classics',
          body: '<p><a href="/artists/above-and-beyond">Above &amp; Beyond</a> are billed for an "Anjunabeats Classics" set rather than their usual format. EDM Tunes says it focuses on the label\'s mid-2000s catalog.</p>'
        },
        {
          heading: '3. Lineup Highlights',
          body: '<p>Names on the announced lineup include Solarstone, Key4050 (Bryan Kearney + John O\'Callaghan), Dash Berlin, Andy Moor, John 00 Fleming, Vini Vici and MaRLo. <a href="/artists/paul-van-dyk">Paul van Dyk</a> is listed presenting "The Essence of Acid".</p><p>Other billed acts and b2b sets include Ferry Corsten + Marsh, Aaron Hibell (Live), Alpha 9 + Ilan Bluestone, JOA, Infected Mushroom, Neelix, Astrix, BT + Matt FAX, Giorgia Angiuli, Mauro Picotto and Warp Brothers.</p>'
        },
        {
          heading: '4. Debuts',
          body: '<p>EDM Identity lists ARTBAT, Enrico Sangiuliano and Pegassi as Dreamstate debuts. Check the <a href="/events">events calendar</a> for the festival season, and the official Insomniac page for day-by-day schedules and tickets.</p>'
        }
      ]
    },
    ja: {
      title: 'Dreamstate SoCal 2026 ガイド — 日程・会場・ラインナップ',
      description: 'Dreamstate SoCal 2026は11月20〜21日、ロングビーチのQueen Mary Waterfrontで開催。基本情報、ステージ、Above & Beyondのアンジュナビーツ・クラシックス・セットを含むラインナップをまとめます。',
      excerpt: 'Dreamstate SoCalは11回目の開催で、2026年11月20〜21日にロングビーチのQueen Mary Waterfrontで行われます。基本情報とラインナップのポイントを紹介します。',
      content: [
        {
          heading: '1. 開催概要',
          body: '<ul><li><strong>回数：</strong>第11回</li><li><strong>日程：</strong>2026年11月20〜21日</li><li><strong>会場：</strong>Queen Mary Waterfront（カリフォルニア州ロングビーチ）</li><li><strong>主催：</strong>Insomniac</li></ul><p>EDM Tunesによると、2026年は4ステージで70組を超える出演者が登場します。新たに加わったのはLong Beach Amphitheaterと、地元のトランスアーティストを紹介するBeatboxのArt Carステージです。</p>'
        },
        {
          heading: '2. Above & Beyond：Anjunabeats Classics',
          body: '<p><a href="/artists/above-and-beyond">Above &amp; Beyond</a>は、通常の形式ではなく「Anjunabeats Classics」セットでの出演が発表されています。EDM Tunesによると、レーベルの2000年代中盤のカタログが中心です。</p>'
        },
        {
          heading: '3. ラインナップのポイント',
          body: '<p>発表されたラインナップには、Solarstone、Key4050（Bryan Kearney + John O\'Callaghan）、Dash Berlin、Andy Moor、John 00 Fleming、Vini Vici、MaRLoなどが並びます。<a href="/artists/paul-van-dyk">Paul van Dyk</a>は「The Essence of Acid」名義で掲載されています。</p><p>ほかに、Ferry Corsten + Marsh、Aaron Hibell（Live）、Alpha 9 + Ilan Bluestone、JOA、Infected Mushroom、Neelix、Astrix、BT + Matt FAX、Giorgia Angiuli、Mauro Picotto、Warp Brothersなどが発表されています。</p>'
        },
        {
          heading: '4. 初出演',
          body: '<p>EDM Identityは、ARTBAT、Enrico Sangiuliano、PegassiをDreamstate初出演として挙げています。フェスの時期については<a href="/events">イベントカレンダー</a>を、日別のスケジュールやチケットはInsomniac公式ページをご確認ください。</p>'
        }
      ]
    }
  },
  {
    slug: 'asot-25-unvrs-ibiza-residency-2026',
    date: '2026-08-05',
    readTime: 3,
    tags: ['asot', 'armin-van-buuren', 'ibiza', 'unvrs', 'armada-music'],
    en: {
      title: 'A State of Trance 25 at UNVRS Ibiza: Residency Dates, Guests and Compilation',
      description: 'Armin van Buuren\'s A State of Trance 25th-anniversary residency at UNVRS in Ibiza ran on five Mondays from 7 September to 5 October 2026. Dates, F2F guests and the Ibiza 2026 compilation.',
      excerpt: 'A State of Trance marked its 25th anniversary with five Monday nights at UNVRS in San Rafael, Ibiza, each with a five-hour Armin van Buuren set. Here are the dates, the F2F guests and the Ibiza 2026 compilation.',
      content: [
        {
          heading: 'The Residency',
          body: '<p>As part of A State of Trance\'s 25th anniversary, Armin van Buuren played five Monday nights at UNVRS in San Rafael, Ibiza, from 7 September to 5 October 2026. According to the UNVRS event page, he played a five-hour set each night and invited a different Face to Face (F2F) guest to the Main Room. The page lists Hannah Laing on 7 September (the opening party, from 23:30), Eli Brown on 14 September, ARGY on 21 September and Funk Tribu on 28 September. The events are 18+.</p><p>The anniversary year began earlier in 2026 with an opening night in Rotterdam, which Mixmag NL reported drew 20,000 fans. Armin van Buuren played an F2F set with Funk Tribu there.</p>'
        },
        {
          heading: 'The Venue: UNVRS',
          body: '<p>UNVRS is in San Rafael, on the site that housed the club Ku from 1979 and Privilege from 1995 until 2019. It is run by The Night League, founded by Yann Pissenem, which also operates Ushuaïa Ibiza and Hï Ibiza. UNVRS opened on 30 May 2025 and describes itself as the world\'s first hyperclub.</p>'
        },
        {
          heading: 'A State of Trance Ibiza 2026',
          body: '<p>Armada Music released <em>A State of Trance Ibiza 2026</em>, mixed by Armin van Buuren, as a three-part compilation. The third mix is titled <em>Energy</em> and has 16 tracks. According to WeRaveYou, it opens with Armin van Buuren, Hannah Laing &amp; Wippenberg\'s "U Got 2 Know (Intro Edit)" and closes with MaRLo\'s "The Magic".</p>'
        }
      ]
    },
    ja: {
      title: 'A State of Trance 25周年 at UNVRS イビサ：レジデンシーの日程・ゲスト・コンピレーション',
      description: 'Armin van BuurenのA State of Trance 25周年レジデンシーは、2026年9月7日から10月5日まで、毎週月曜にイビサのUNVRSで開催。日程、F2Fゲスト、Ibiza 2026コンピレーションをまとめます。',
      excerpt: 'A State of Trance 25周年を記念し、イビサ・サンラファエルのUNVRSで5回の月曜公演を開催。各回5時間のセットでした。日程、F2Fゲスト、Ibiza 2026コンピレーションを紹介します。',
      content: [
        {
          heading: 'レジデンシーの概要',
          body: '<p>A State of Trance 25周年の一環として、Armin van Buurenは2026年9月7日から10月5日まで、毎週月曜の計5夜、イビサ・サンラファエルのUNVRSに出演しました。UNVRSのイベントページによると、毎回5時間のセットを行い、Main RoomにはF2F（Face to Face）のゲストが日替わりで登場しました。同ページに掲載されたゲストは、9月7日（オープニングパーティー、23:30から）がHannah Laing、9月14日がEli Brown、9月21日がARGY、9月28日がFunk Tribuです。18歳以上限定です。</p><p>アニバーサリーイヤーは、2026年前半のロッテルダムでのオープニングナイトで始まりました。Mixmag NLによると、2万人が来場し、Armin van BuurenはFunk TribuとのF2Fセットを披露しています。</p>'
        },
        {
          heading: '会場：UNVRS',
          body: '<p>UNVRSはサンラファエルにあり、1979年からKu、1995年から2019年までPrivilegeがあった場所に建っています。運営はYann Pissenem創設のThe Night Leagueで、同社はUshuaïa IbizaとHï Ibizaも運営しています。UNVRSは2025年5月30日にオープンし、自らを「世界初のハイパークラブ」と称しています。</p>'
        },
        {
          heading: 'A State of Trance Ibiza 2026',
          body: '<p>Armada Musicは、Armin van Buurenがミックスした3部構成のコンピレーション『A State of Trance Ibiza 2026』をリリースしました。3つ目のミックスは『Energy』で、16曲を収録しています。WeRaveYouによると、Armin van Buuren、Hannah Laing &amp; Wippenbergの「U Got 2 Know (Intro Edit)」で始まり、MaRLoの「The Magic」で終わります。</p>'
        }
      ]
    }
  },
  {
    slug: 'transmission-netherlands-gelredome-2026',
    date: '2026-08-08',
    readTime: 3,
    updated: '2026-10-11',
    tags: ['transmission', 'netherlands', 'festival', 'indoor-trance'],
    en: {
      title: 'Transmission Netherlands 2026 at GelreDome: Lineup, Hours and Venue Rules',
      description: 'Transmission Netherlands takes place on Saturday 28 November 2026 at GelreDome in Arnhem. Official lineup, hours, age limit and venue rules.',
      excerpt: 'Transmission Netherlands takes place on 28 November 2026 at GelreDome in Arnhem, from 14:00 to 23:00, for ages 18 and over. Here are the official lineup, the basics and the venue rules.',
      content: [
        {
          heading: 'Date, Venue and Hours',
          body: '<p>Transmission Netherlands 2026 is listed for <strong>Saturday 28 November 2026</strong> at <strong>GelreDome in Arnhem</strong>, running from 14:00 to 23:00. The event is 18+.</p>'
        },
        {
          heading: 'The Venue: GelreDome',
          body: '<p>GelreDome opened on 25 March 1998. It was the first football stadium in the world with a retractable pitch, and it also has a sliding roof. The official GelreDome site gives a maximum of 34,000 visitors, rising to 41,000 when a stage is set up in the middle of the pitch for concerts.</p>'
        },
        {
          heading: 'Lineup',
          body: '<p>The official lineup, listed A&ndash;Z on the event page: <a href="/artists/aly-and-fila">Aly &amp; Fila</a>, <a href="/artists/andrew-rayel">Andrew Rayel</a>, <a href="/artists/daxson">Daxson</a>, Digital Culture, Driftmoon b2b Asteroid, <a href="/artists/markus-schulz">Markus Schulz</a> b2b <a href="/artists/ferry-corsten">Ferry Corsten</a>, <a href="/artists/paul-van-dyk">Paul van Dyk</a> and <a href="/artists/xijaro-and-pitch">Xijaro &amp; Pitch</a>, with a warm-up set from DJ Dusk. The organisers say the timetable is usually released in the week of the event.</p><p>Tickets and the latest information are on the <a href="https://transmissionfestival.com/events/tmnl26/" target="_blank" rel="noopener">official Transmission Netherlands page</a>.</p>'
        },
        {
          heading: 'Good to Know Before You Go',
          body: '<ul><li><strong>Sound level:</strong> 98&ndash;103 dB; earplugs are strongly advised.</li><li><strong>Payments:</strong> food and drink are paid with the GelreDome Wallet card (minimum top-up &euro;5.00), sold on site by cash or card. It cannot be bought in advance.</li><li><strong>Not allowed:</strong> outside food and drink, liquids including deodorant and hairspray, glass, PET bottles, aerosol cans, laser pointers, sharp objects, and professional or semi-professional cameras with interchangeable lenses. Smoking is not permitted inside.</li><li><strong>Tickets:</strong> downloadable from 26 November; your entrance number is printed on the ticket.</li><li><strong>Getting there:</strong> train to Arnhem Central, then the shuttle bus from the city bus platform. Return shuttle tickets are sold on board.</li></ul><p>Comparing November events? See our <a href="/blog/november-2026-trance-events-guide">November 2026 Trance Events Guide</a>.</p>'
        }
      ]
    },
    ja: {
      title: 'Transmission Netherlands 2026 at GelreDome：ラインナップ・時間・会場ルール',
      description: 'Transmission Netherlandsは2026年11月28日（土）、アーネムのGelreDomeで開催。公式ラインナップ、時間、年齢制限、会場ルールをまとめます。',
      excerpt: 'Transmission Netherlandsは2026年11月28日、アーネムのGelreDomeで14:00〜23:00に開催（18歳以上）。公式ラインナップと基本情報、会場ルールを紹介します。',
      content: [
        {
          heading: '日程・会場・時間',
          body: '<p>Transmission Netherlands 2026は、<strong>2026年11月28日（土）</strong>に<strong>アーネムのGelreDome</strong>で、14:00から23:00まで開催と掲載されています。18歳以上限定です。</p>'
        },
        {
          heading: '会場：GelreDome',
          body: '<p>GelreDomeは1998年3月25日に開場しました。世界で初めて可動式ピッチを備えたサッカースタジアムで、スライド式の屋根も備えています。GelreDome公式サイトによると、最大収容は34,000人で、コンサート時にピッチ中央へステージを設置すると41,000人になります。</p>'
        },
        {
          heading: 'ラインナップ',
          body: '<p>公式ページにA〜Z順で掲載されているラインナップ：<a href="/artists/aly-and-fila">Aly &amp; Fila</a>、<a href="/artists/andrew-rayel">Andrew Rayel</a>、<a href="/artists/daxson">Daxson</a>、Digital Culture、Driftmoon b2b Asteroid、<a href="/artists/markus-schulz">Markus Schulz</a> b2b <a href="/artists/ferry-corsten">Ferry Corsten</a>、<a href="/artists/paul-van-dyk">Paul van Dyk</a>、<a href="/artists/xijaro-and-pitch">Xijaro &amp; Pitch</a>。ウォームアップはDJ Duskです。タイムテーブルは例年、開催週に発表されるとのことです。</p><p>チケットと最新情報は<a href="https://transmissionfestival.com/events/tmnl26/" target="_blank" rel="noopener">Transmission Netherlands公式ページ</a>でご確認ください。</p>'
        },
        {
          heading: '行く前に知っておきたいこと',
          body: '<ul><li><strong>音量：</strong>98〜103dB。耳栓の着用が強く推奨されています。</li><li><strong>支払い：</strong>飲食はGelreDome Walletカード（最低チャージ€5.00）。会場で現金・カードで購入でき、事前購入はできません。</li><li><strong>持ち込み禁止：</strong>外部の飲食物、デオドラントやヘアスプレーを含む液体、ガラス、ペットボトル、スプレー缶、レーザーポインター、刃物類、レンズ交換式のプロ・セミプロ用カメラ。館内は禁煙です。</li><li><strong>チケット：</strong>11月26日からダウンロード可能。入場口の番号はチケットに記載されます。</li><li><strong>アクセス：</strong>電車でArnhem Centralへ行き、市バス乗り場からシャトルバス。帰りのシャトルの切符は車内で購入できます。</li></ul><p>11月のイベントを比べたい人は<a href="/blog/november-2026-trance-events-guide">2026年11月のトランス・イベントガイド</a>もどうぞ。</p>'
        }
      ]
    }
  },
  {
    slug: 'abgt700-gorge-return-2026',
    date: '2026-08-08',
    readTime: 2,
    tags: ['above-and-beyond', 'anjunabeats', 'festival', 'north-america'],
    en: {
      title: 'ABGT700 at The Gorge: Above & Beyond\'s Return Weekend',
      description: 'Above & Beyond returned to The Gorge Amphitheatre in Washington State for Group Therapy 700 on 11–13 September 2026. Weekend structure and the announced lineup by day.',
      excerpt: 'Group Therapy 700 (ABGT700) ran from 11 to 13 September 2026 at The Gorge Amphitheatre, the first Above & Beyond show there since ABGT250 in 2017. Here is the weekend structure and the announced lineup.',
      content: [
        {
          heading: 'The Weekend at a Glance',
          body: '<p>ABGT700 celebrated the 700th episode of Above &amp; Beyond\'s radio show Group Therapy. It was held at The Gorge Amphitheatre in Washington State from 11 to 13 September 2026, with different programming each day: a pre-party on Friday, Group Therapy 700 on Saturday and Anjunadeep Open Air on Sunday (Beatportal).</p><p>The group\'s previous Gorge show was ABGT250 in 2017, which Beatportal described as a defining moment in the Anjunafamily story, so this was a return after nine years. Above &amp; Beyond\'s album <em>Bigger Than All Of Us</em> was released ahead of the weekend.</p>'
        },
        {
          heading: 'Lineup by Day',
          body: '<p>The announced lineup, as listed by EDM Tunes, was:</p><ul><li><strong>Friday, 11 September:</strong> Above &amp; Beyond (Deep Set), Amy Wiles, Grum b2b J Ribbon.</li><li><strong>Saturday, 12 September:</strong> Above &amp; Beyond, Darren Tate (Live), Grum (Live), ilan Bluestone, J Ribbon, Mat Zo, Nourey, Oliver Smith.</li><li><strong>Sunday, 13 September (Anjunadeep Open Air):</strong> Because of Art, Ben Böhmer, Durante b2b Ezequiel Arias, HANA, James Grant &amp; Jody Wisternoff, Leaving Laurel, Marsh, Rezident.</li></ul><p>Set times were not listed in the announcement. Other programming included campsite afterparties, a silent disco and an Anjunachill area.</p>'
        }
      ]
    },
    ja: {
      title: 'ABGT700 at The Gorge：Above & Beyondが帰還した週末',
      description: 'Above & Beyondは2026年9月11〜13日、ワシントン州のThe Gorge AmphitheatreでGroup Therapy 700を開催。週末の構成と、発表された日別ラインナップをまとめます。',
      excerpt: 'Group Therapy 700（ABGT700）は2026年9月11〜13日にThe Gorge Amphitheatreで開催。2017年のABGT250以来、Above & Beyondにとって同会場への帰還となりました。週末の構成と発表されたラインナップを紹介します。',
      content: [
        {
          heading: '週末の概要',
          body: '<p>ABGT700は、Above &amp; Beyondのラジオ番組Group Therapyの第700回を記念するイベントです。2026年9月11日から13日まで、ワシントン州のThe Gorge Amphitheatreで開催され、日ごとに内容が異なりました。金曜がプレパーティー、土曜がGroup Therapy 700、日曜がAnjunadeep Open Airです（Beatportal）。</p><p>同会場での前回の公演は2017年のABGT250で、Beatportalはこれを「Anjunafamilyの物語における決定的な瞬間」と紹介しています。今回は9年ぶりの帰還となります。アルバム『Bigger Than All Of Us』は、この週末に先立ってリリースされています。</p>'
        },
        {
          heading: '日別ラインナップ',
          body: '<p>EDM Tunesが掲載した発表時のラインナップは次のとおりです。</p><ul><li><strong>9月11日（金）：</strong>Above &amp; Beyond（Deep Set）、Amy Wiles、Grum b2b J Ribbon。</li><li><strong>9月12日（土）：</strong>Above &amp; Beyond、Darren Tate（Live）、Grum（Live）、ilan Bluestone、J Ribbon、Mat Zo、Nourey、Oliver Smith。</li><li><strong>9月13日（日、Anjunadeep Open Air）：</strong>Because of Art、Ben Böhmer、Durante b2b Ezequiel Arias、HANA、James Grant &amp; Jody Wisternoff、Leaving Laurel、Marsh、Rezident。</li></ul><p>発表時点でセットタイムは掲載されていませんでした。ほかに、キャンプ場でのアフターパーティー、サイレントディスコ、Anjunachillエリアなどが用意されていました。</p>'
        }
      ]
    }
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'asot-london-drumsheds-2026',
    date: '2026-08-13',
    readTime: 6,
    updated: '2026-10-10',
    tags: ['asot', 'london', 'armin-van-buuren', 'festival', 'indoor-trance'],
    en: {
      title: 'A State of Trance London 2026 Guide: Lineup, Access & Venue Rules',
      description: 'A first-timer guide to A State of Trance London on 14 November 2026 at Drumsheds: lineup, getting there, venue rules and the UK ETA for overseas visitors.',
      excerpt: 'A State of Trance London takes place on Saturday 14 November 2026 at Drumsheds. Here is what first-time visitors need to know: the lineup, how to get to Meridian Water, bag and ID rules, and the ETA for travellers from overseas.',
      content: [
        {
          heading: '1. The Event at a Glance',
          body: `<p><strong>A State of Trance London</strong> takes place on <strong>Saturday 14 November 2026</strong> at <strong>Drumsheds</strong> in London, from 13:00 to 22:30. The event is 18+. It celebrates 25 years of A State of Trance, and the venue describes it as &ldquo;the first ever indoor ASOT festival in the UK&rdquo;. The rooms are called X ROOM, Y ROOM and Z ROOM.</p><p>The official pages are <a href="https://drumshedslondon.com/event/a-state-of-trance/" target="_blank" rel="noopener">Drumsheds&rsquo; event page</a> and <a href="https://festival.astateoftrance.com/london/" target="_blank" rel="noopener">festival.astateoftrance.com/london</a>. The latter also lists a two-night hotel package; check the official site for details. For the background to the anniversary, see our article <a href="/blog/asot-25-years-anniversary">A State of Trance Turns 25</a>, or the <a href="/events/asot-london">ASOT London entry in our events calendar</a>.</p>`,
        },
        {
          heading: '2. The Lineup',
          body: `<p>The official lineup, as listed: Amber Broos b2b Lawton, Andrew Rayel presents Extasia, Arielle, Armin van Buuren, Armin van Buuren F2F Giuseppe Ottaviani, Ben Hemsley, Cosmic Gate, Dan Harrison, Deveraux, Ferry Corsten, Funk Tribu, GIA, Jordan Tilstone, Luvstruck, MDDLTN, Modeā, Olive Anguz, Pegassi, River, Ruben de Ronde, Sarah de Warren, Sophie Sugar, The Rocketman, Thick As Thieves and Will Atkinson.</p><p>Two billings are paired sets: <a href="/artists/armin-van-buuren">Armin van Buuren</a> F2F <a href="/artists/giuseppe-ottaviani">Giuseppe Ottaviani</a>, and Amber Broos b2b Lawton. Andrew Rayel appears as <a href="/artists/andrew-rayel">Andrew Rayel</a> presents Extasia. Other names with artist pages on this site include <a href="/artists/ferry-corsten">Ferry Corsten</a>, <a href="/artists/cosmic-gate">Cosmic Gate</a>, <a href="/artists/ruben-de-ronde">Ruben de Ronde</a> and <a href="/artists/will-atkinson">Will Atkinson</a>. Check the official pages for the latest running order.</p>`,
        },
        {
          heading: '3. Getting There',
          body: `<p>Drumsheds is at Meridian Water, N18 3HF, with the entrance on Meridian Way. The nearest station is <strong>Meridian Water</strong>, about a 5-minute walk from the venue. Trains take about 20 minutes from Liverpool Street and about 30 minutes from Stratford.</p><ul><li><strong>Victoria line:</strong> change at Tottenham Hale onto a Greater Anglia train. The venue states that Tottenham Hale is not within walking distance of Drumsheds.</li><li><strong>Shuttle bus:</strong> a shuttle runs between Tottenham Hale station and the venue; it is available to buy in advance via Kaboodle.</li><li><strong>Buses:</strong> route 341 (from Waterloo) and route 192 (from Tottenham Hale) stop at Glover Drive.</li><li><strong>Driving:</strong> there is no car park, and arriving by car is not recommended.</li><li><strong>Good to know:</strong> the rear three carriages of the train do not open their doors at Meridian Water.</li></ul><p>See the <a href="https://drumshedslondon.com/location/" target="_blank" rel="noopener">Drumsheds location page</a> for the full travel information.</p>`,
        },
        {
          heading: '4. Venue Rules and What to Bring',
          body: `<ul><li><strong>Bags:</strong> bags and backpacks larger than A4 (21 &times; 30 cm) cannot be brought in. Prohibited items cannot be stored in the lockers either.</li><li><strong>Payments:</strong> the venue is fully cashless; card and contactless only.</li><li><strong>Lockers:</strong> e-lockers must be booked in advance and tend to sell out. Medium suits 1&ndash;2 people and Large suits 2&ndash;3 people.</li><li><strong>Re-entry:</strong> there is no re-entry.</li><li><strong>ID:</strong> bring valid photo ID such as a passport. If your ticket carries a name, it must match your ID.</li><li><strong>Food:</strong> the outdoor area, The Yard, has food from Voodoo Ray&rsquo;s, Flock, Nanny Bill&rsquo;s and others.</li><li><strong>Water:</strong> the venue advises drinking water regularly, around half a pint per hour, and also warns that drinking too much can be dangerous.</li><li><strong>Accessibility:</strong> contact access@drumshedslondon.com with any questions.</li></ul><p>Details are on the <a href="https://drumshedslondon.com/essential-info/" target="_blank" rel="noopener">Essential Info</a> and <a href="https://drumshedslondon.com/faq/" target="_blank" rel="noopener">FAQ</a> pages.</p>`,
        },
        {
          heading: '5. Travelling from Overseas: the UK ETA',
          body: `<p>Visitors from visa-exempt countries such as Japan need an Electronic Travel Authorisation (ETA) to enter the UK; it has been mandatory since 25 February 2026. Apply at <a href="https://www.gov.uk/eta" target="_blank" rel="noopener">gov.uk/eta</a>. The fee is &pound;20 and the ETA is valid for two years. Beware of imitation sites. The Embassy of Japan in the UK has a <a href="https://www.uk.emb-japan.go.jp/itpr_ja/ETA.html" target="_blank" rel="noopener">page on the ETA</a> (in Japanese).</p>`,
        },
        {
          heading: "A Listener's Note",
          body: `<p>I listen to A State of Trance every week, which is why this event is on my calendar.</p>`,
        },
      ],
    },
    ja: {
      title: 'A State of Trance London 2026 ガイド：ラインナップ・アクセス・会場ルール',
      description: '2026年11月14日にDrumshedsで開催されるA State of Trance Londonの初心者向けガイド。ラインナップ、アクセス、会場ルール、海外からのETAをまとめました。',
      excerpt: 'A State of Trance Londonは2026年11月14日（土）にDrumshedsで開催。初めて行く人向けに、ラインナップ、Meridian Waterへのアクセス、バッグ・ID・キャッシュレスのルール、海外からのETAを整理します。',
      content: [
        {
          heading: '1. イベント概要',
          body: `<p><strong>A State of Trance London</strong>は<strong>2026年11月14日（土）</strong>、ロンドンの<strong>Drumsheds</strong>で13:00〜22:30に開催されます。18歳以上限定。A State of Trance 25周年を祝う公演で、会場ページでは「the first ever indoor ASOT festival in the UK」と紹介されています。ルームはX ROOM、Y ROOM、Z ROOMです。</p><p>公式情報は<a href="https://drumshedslondon.com/event/a-state-of-trance/" target="_blank" rel="noopener">Drumshedsのイベントページ</a>と<a href="https://festival.astateoftrance.com/london/" target="_blank" rel="noopener">festival.astateoftrance.com/london</a>で確認できます。後者には2泊のホテルパッケージの案内もあるので、詳細は公式サイトでご確認ください。25周年の背景は<a href="/blog/asot-25-years-anniversary">A State of Trance 25周年</a>の記事、日程は<a href="/events/asot-london">イベント・カレンダーのASOT Londonのページ</a>もどうぞ。</p>`,
        },
        {
          heading: '2. ラインナップ',
          body: `<p>公式表記のラインナップ：Amber Broos b2b Lawton / Andrew Rayel presents Extasia / Arielle / Armin van Buuren / Armin van Buuren F2F Giuseppe Ottaviani / Ben Hemsley / Cosmic Gate / Dan Harrison / Deveraux / Ferry Corsten / Funk Tribu / GIA / Jordan Tilstone / Luvstruck / MDDLTN / Modeā / Olive Anguz / Pegassi / River / Ruben de Ronde / Sarah de Warren / Sophie Sugar / The Rocketman / Thick As Thieves / Will Atkinson。</p><p>ペアでの表記は2組。<a href="/artists/armin-van-buuren">Armin van Buuren</a> F2F <a href="/artists/giuseppe-ottaviani">Giuseppe Ottaviani</a>と、Amber Broos b2b Lawtonです。Andrew Rayelは<a href="/artists/andrew-rayel">Andrew Rayel</a> presents Extasiaとして出演します。当サイトにアーティストページがあるのは、ほかに<a href="/artists/ferry-corsten">Ferry Corsten</a>、<a href="/artists/cosmic-gate">Cosmic Gate</a>、<a href="/artists/ruben-de-ronde">Ruben de Ronde</a>、<a href="/artists/will-atkinson">Will Atkinson</a>などです。最新のタイムテーブルは公式ページでご確認ください。</p>`,
        },
        {
          heading: '3. アクセス',
          body: `<p>Drumshedsの住所はMeridian Water, N18 3HF、入口はMeridian Wayです。最寄りは<strong>Meridian Water駅</strong>で、会場まで徒歩約5分。Liverpool Streetから約20分、Stratfordから約30分です。</p><ul><li><strong>Victoria線を使う場合：</strong>Tottenham HaleでGreater Angliaに乗り換えます。Tottenham Haleから会場まで徒歩では行けないと公式が明記しています。</li><li><strong>シャトルバス：</strong>Tottenham Hale駅と会場を結ぶシャトルバスがあり、Kaboodleで事前購入できます。</li><li><strong>路線バス：</strong>341番（Waterloo発）と192番（Tottenham Hale発）がGlover Driveに停車します。</li><li><strong>車：</strong>駐車場はなく、車での来場は推奨されていません。</li><li><strong>ご注意：</strong>列車の後方3両は、Meridian Water駅でドアが開きません。</li></ul><p>詳しくは<a href="https://drumshedslondon.com/location/" target="_blank" rel="noopener">Drumshedsのアクセスページ</a>をご覧ください。</p>`,
        },
        {
          heading: '4. 会場ルールと持ち物',
          body: `<ul><li><strong>バッグ：</strong>A4（21×30cm）より大きいバッグ・リュックは持ち込めません。禁止品はロッカーにも預けられません。</li><li><strong>支払い：</strong>完全キャッシュレス（カード・タッチ決済のみ）です。</li><li><strong>ロッカー：</strong>e-lockerは事前予約制で、売り切れやすいとのこと。Mediumは1〜2人、Largeは2〜3人向けです。</li><li><strong>再入場：</strong>できません。</li><li><strong>ID：</strong>パスポートなど有効な写真付きIDが必要です。名前入りチケットの場合はIDと一致している必要があります。</li><li><strong>フード：</strong>屋外エリア「The Yard」にVoodoo Ray&rsquo;s、Flock、Nanny Bill&rsquo;sなどが出店します。</li><li><strong>水分補給：</strong>公式は、こまめな水分補給（1時間にハーフパイント程度が目安）を勧めるとともに、飲みすぎも危険だと注意を呼びかけています。</li><li><strong>アクセシビリティ：</strong>お問い合わせはaccess@drumshedslondon.comまで。</li></ul><p>詳細は<a href="https://drumshedslondon.com/essential-info/" target="_blank" rel="noopener">Essential Info</a>と<a href="https://drumshedslondon.com/faq/" target="_blank" rel="noopener">FAQ</a>をご確認ください。</p>`,
        },
        {
          heading: '5. 海外から行く人へ：英国のETA',
          body: `<p>日本などビザ免除国の旅行者が英国に入国するには、電子渡航認証（ETA）が必要です。2026年2月25日から必須化されました。申請は<a href="https://www.gov.uk/eta" target="_blank" rel="noopener">gov.uk/eta</a>から。費用は£20、有効期間は2年です。模倣サイトにご注意ください。在英国日本国大使館にも<a href="https://www.uk.emb-japan.go.jp/itpr_ja/ETA.html" target="_blank" rel="noopener">ETAの案内ページ</a>があります。</p>`,
        },
        {
          heading: "A Listener's Note",
          body: `<p>私は毎週A State of Tranceを聴いています。このイベントが気になっているのも、そのためです。</p>`,
        },
      ],
    },
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'anjunabeats-warehouse-tour-uk-2026',
    date: '2026-08-21',
    readTime: 2,
    tags: ['above-and-beyond', 'anjunabeats', 'uk', 'tour', 'warehouse-rave'],
    en: {
      title: 'Anjunabeats Warehouse 2026: Above & Beyond\'s New Event Concept',
      description: 'Above & Beyond present Anjunabeats Warehouse, a new event concept inspired by the Leake Street launch party for Anjunabeats Volume 17, including the Glasgow date on 16 October 2026.',
      excerpt: 'Anjunabeats Warehouse is a new Above & Beyond event concept inspired by the Anjunabeats Volume 17 launch party at Leake Street. The Glasgow date is Friday 16 October 2026 at SWG3.',
      content: [
        {
          heading: 'Where the Concept Comes From',
          body: '<p>Above &amp; Beyond present Anjunabeats Warehouse as a new event concept. According to the venue page for the Glasgow date at SWG3, it is inspired by the energy of the Anjunabeats Volume 17 summer launch party at Leake Street in London.</p><p>That launch party was a one-night pop-up at 26 Leake Street on 28 May 2026. EDM Tunes reported a limited-capacity crowd and a stage surrounded on all sides, so fans could high-five the trio. Oliver Smith joined them for his remix of Atlantis\' "Fiji", and station2station performed "Hi-Tech". The report singles out Above &amp; Beyond\'s take on "Feel The Vibe" (originally Axwell and Errol Reid, 2008) and the club mix of "Sailing Off The End Of The World" as highlights. Anjunabeats Volume 17 has 35 tracks across two mixes.</p>'
        },
        {
          heading: 'Glasgow: Friday 16 October 2026',
          body: '<p>The <a href="https://swg3.tv/events/2026/october/anjunabeats-warehouse/" target="_blank" rel="noopener">SWG3 event page</a> lists Anjunabeats Warehouse at the SWG3 Galvanizers, 100 Eastvale Place, Glasgow, on Friday 16 October 2026, with doors at 10pm. The event is 18+. The named lineup is Above &amp; Beyond, Grum, J Ribbon and station2station, along with acts from the Anjunabeats label family.</p><p>Please check the official Anjunabeats channels for the latest dates and details.</p>'
        }
      ]
    },
    ja: {
      title: 'Anjunabeats Warehouse 2026：Above & Beyondの新イベント企画',
      description: 'Above & Beyondが手がける新イベント「Anjunabeats Warehouse」。Anjunabeats Volume 17のLeake Streetでのローンチパーティーを受けた企画で、2026年10月16日のグラスゴー公演を紹介します。',
      excerpt: 'Anjunabeats Warehouseは、Anjunabeats Volume 17のLeake Streetでのローンチパーティーに着想を得た、Above & Beyondの新しいイベント企画。グラスゴー公演は2026年10月16日（金）、SWG3で開催されます。',
      content: [
        {
          heading: '企画の背景',
          body: '<p>Above &amp; BeyondはAnjunabeats Warehouseを新しいイベント企画として紹介しています。グラスゴー公演の会場SWG3のページによると、ロンドンのLeake Streetで行われたAnjunabeats Volume 17の夏のローンチパーティーのエネルギーに着想を得たものです。</p><p>このローンチパーティーは、2026年5月28日にLeake Street 26番地で開かれた一夜限りのポップアップでした。EDM Tunesによると、観客数は限定で、ステージが四方を囲む形だったため、ファンはトリオとハイタッチできる距離にいました。Oliver SmithがAtlantisの「Fiji」のリミックスで共演し、station2stationが「Hi-Tech」を披露しました。同記事は、Above &amp; Beyondによる「Feel The Vibe」（原曲はAxwellとErrol Reid、2008年）と、「Sailing Off The End Of The World」のクラブミックスを見どころとして挙げています。Anjunabeats Volume 17は2つのミックスに計35曲を収録しています。</p>'
        },
        {
          heading: 'グラスゴー：2026年10月16日（金）',
          body: '<p><a href="https://swg3.tv/events/2026/october/anjunabeats-warehouse/" target="_blank" rel="noopener">SWG3のイベントページ</a>には、Anjunabeats Warehouseが2026年10月16日（金）、グラスゴーのSWG3 Galvanizers（100 Eastvale Place）で、開場22:00と掲載されています。18歳以上限定です。出演者として、Above &amp; Beyond、Grum、J Ribbon、station2stationのほか、Anjunabeatsレーベルファミリーのアーティストが掲載されています。</p><p>最新の日程や詳細は、Anjunabeats公式でご確認ください。</p>'
        }
      ]
    }
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'sunrise-festival-poland-trance-legacy',
    date: '2026-08-27',
    readTime: 3,
    tags: ['sunrise-festival', 'poland', 'trance-family', 'festival', 'open-air'],
    en: {
      title: 'Sunrise Festival Poland: History and Venue',
      description: 'A short overview of Sunrise Festival in Kołobrzeg, Poland: its start in 2003, the move to the former Podczele airfield in 2019, and the 2026 edition.',
      excerpt: 'Sunrise Festival began in 2003 at the Kołobrzeg amphitheatre and has been held at the former Podczele airfield since 2019. A short look at its history and the 2026 edition.',
      content: [
        {
          heading: 'Origins in Kołobrzeg',
          body: '<p>Sunrise Festival, organised by MDT Production, began in 2003 at the amphitheatre in Kołobrzeg on the Polish Baltic coast, where house and trance were first played at the event, according to the festival\'s own site. DJ Kris is generally named as the initiator, and the early editions were run with the club Ekwador in Manieczki (Polish Wikipedia).</p><p>The amphitheatre remained the venue until 2018. In 2019 the festival moved to the former airfield in Podczele, with the city\'s permission.</p>'
        },
        {
          heading: 'The Venue: Former Kołobrzeg-Bagicz Airfield',
          body: '<p>Since 2019 the festival has taken place on the grounds of the former Kołobrzeg-Bagicz airfield in the Podczele district, about 90 hectares between Podczele and Bagicz. The airfield was built in 1935–36 as a Luftwaffe base, and after the Second World War it was used by the Soviet Air Force until 28 May 1992 (Wikipedia). In 1989 a MiG-23 of the 871st Fighter Regiment took off from the base, its pilot ejected, and the aircraft crashed near Kortrijk, Belgium.</p><p>The festival is linked to SunCity, a camping and lifestyle village on site. Accommodation options are listed on the official website.</p>'
        },
        {
          heading: 'The 2026 Edition',
          body: '<p>The 2026 edition ran from 31 July to 2 August at Podczele. The organisers used five stages and around a hundred acts. According to the ticket seller eBilet\'s schedule, Paul van Dyk and Aly &amp; Fila played a joint b2b set on the Blue Stage on Saturday, 1 August. Both acts have appeared at earlier editions.</p>'
        }
      ]
    },
    ja: {
      title: 'サンライズ・フェスティバル・ポーランド：歴史と会場',
      description: 'ポーランド・コウォブジェクのSunrise Festivalの概要。2003年の開始、2019年のポドチェレ旧飛行場への移転、2026年の開催内容をまとめます。',
      excerpt: 'Sunrise Festivalは2003年にコウォブジェクの円形劇場で始まり、2019年から旧ポドチェレ飛行場で開催されています。歴史と2026年の開催内容を簡潔に紹介します。',
      content: [
        {
          heading: 'コウォブジェクでの始まり',
          body: '<p>MDT Productionが主催するSunrise Festivalは、2003年にポーランドのバルト海沿岸、コウォブジェクの円形劇場で始まりました。公式サイトによると、このイベントでハウスとトランスが初めて流れたのがこの会場です。DJ Krisが発案者として知られ、初期の開催はマニエチュキのクラブEkwadorと共に行われました（ポーランド語版Wikipedia）。</p><p>円形劇場は2018年まで会場として使われ、2019年に市の許可を得て、ポドチェレの旧飛行場へ移転しました。</p>'
        },
        {
          heading: '会場：旧コウォブジェク＝バギチ飛行場',
          body: '<p>2019年以降、フェスティバルはポドチェレ地区にある旧コウォブジェク＝バギチ飛行場で開催されています。敷地はポドチェレとバギチの間の約90ヘクタールです。この飛行場は1935〜36年にドイツ空軍の基地として建設され、第二次世界大戦後はソ連空軍が1992年5月28日まで使用しました（Wikipedia）。1989年には、第871戦闘機連隊のMiG-23が同基地を離陸した後にパイロットが脱出し、機体はベルギーのコルトレイク近郊に墜落しています。</p><p>フェスティバルには、会場内のキャンプ＆ライフスタイルビレッジ「SunCity」が付随しています。宿泊の種類は公式サイトに掲載されています。</p>'
        },
        {
          heading: '2026年の開催',
          body: '<p>2026年は7月31日から8月2日まで、ポドチェレで開催されました。主催者は5つのステージを設け、出演は約100組でした。チケット販売eBiletのタイムテーブルによると、8月1日（土）のBlue Stageで、Paul van DykとAly &amp; Filaがb2bセットを披露しました。両者は過去の開催にも出演しています。</p>'
        }
      ]
    }
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'november-2026-trance-events-guide',
    date: '2026-10-11',
    readTime: 6,
    tags: ['asot', 'dreamstate', 'transmission', 'festival', 'events'],
    en: {
      title: 'November 2026 Trance Events Guide: ASOT London, Dreamstate SoCal & Transmission Netherlands',
      description: 'Compare the three big trance events of November 2026: A State of Trance London, Dreamstate SoCal and Transmission Netherlands. Dates, hours, venues and house rules from official pages.',
      excerpt: 'Three major trance events fall within two weeks in November 2026: ASOT London (14 Nov), Dreamstate SoCal (20–21 Nov) and Transmission Netherlands (28 Nov). Here are their dates, hours, venues and rules side by side.',
      content: [
        {
          heading: 'November 2026 at a Glance',
          body: `<p>Three large trance events fall within two weeks of each other in November 2026: <strong>A State of Trance London</strong> on 14 November, <strong>Dreamstate SoCal</strong> on 20&ndash;21 November and <strong>Transmission Netherlands</strong> on 28 November. They take place in three countries and in three very different settings &mdash; a warehouse in north London, a waterfront site in Long Beach and a football stadium in Arnhem.</p><p>This guide sets the three side by side using the details published on each event&rsquo;s official pages, so you can compare dates, hours, venues and house rules before deciding where to go. All three are 18+.</p>`,
        },
        {
          heading: 'A State of Trance London &mdash; 14 November, Drumsheds',
          body: `<p>A State of Trance London takes place on <strong>Saturday 14 November 2026</strong> at <strong>Drumsheds</strong> (Meridian Water, N18 3HF), from <strong>13:00 to 22:30</strong>. It celebrates 25 years of A State of Trance, and the venue describes it as &ldquo;the first ever indoor ASOT festival in the UK&rdquo;. Drumsheds calls itself a &ldquo;never-before-used industrial warehouse&rdquo;, and the event runs across three rooms: X ROOM, Y ROOM and Z ROOM.</p><p>The billing includes <a href="/artists/armin-van-buuren">Armin van Buuren</a>, a face-to-face set by Armin van Buuren and <a href="/artists/giuseppe-ottaviani">Giuseppe Ottaviani</a>, Amber Broos b2b Lawton, <a href="/artists/andrew-rayel">Andrew Rayel</a> presents Extasia, <a href="/artists/ferry-corsten">Ferry Corsten</a>, <a href="/artists/cosmic-gate">Cosmic Gate</a> and more.</p><p><strong>Who it suits:</strong> people who want a single-day indoor event that finishes before late night, with several rooms to move between.</p><p>For the full lineup, travel and venue rules, read our <a href="/blog/asot-london-drumsheds-2026">A State of Trance London 2026 guide</a>. Official pages: <a href="https://drumshedslondon.com/event/a-state-of-trance/" target="_blank" rel="noopener">Drumsheds</a> and <a href="https://festival.astateoftrance.com/london/" target="_blank" rel="noopener">festival.astateoftrance.com/london</a>.</p>`,
        },
        {
          heading: 'Dreamstate SoCal &mdash; 20&ndash;21 November, Queen Mary Waterfront',
          body: `<p>Dreamstate SoCal runs on <strong>Friday 20 and Saturday 21 November 2026</strong> at the <strong>Queen Mary Waterfront</strong>, 1126 Queens Hwy, Long Beach, California. The official hours are <strong>4 PM to 1 AM</strong> on both days. Entry is 18+, and 21+ for alcohol. There is no re-entry on the same day.</p><p>The official site describes Dreamstate as &ldquo;the world&rsquo;s premier all-trance music festival&rdquo; and marks 10 years of Dreamstate SoCal this year. Tickets come as 2-Day, Friday or Saturday passes in GA and VIP. VIP adds an expedited entry lane, dedicated viewing areas, VIP food and drink options and VIP restrooms. Free water refill stations are listed for both GA and VIP.</p><p><strong>Who it suits:</strong> people who want a two-day event that runs into the night by the sea, or who want to pick just one of the two days.</p><p>More detail is in our <a href="/blog/dreamstate-socal-2026-complete-guide">Dreamstate SoCal 2026 guide</a>. Official page: <a href="https://socal.dreamstateusa.com/guide/hours-and-info/" target="_blank" rel="noopener">Dreamstate SoCal hours &amp; info</a>.</p>`,
        },
        {
          heading: 'Transmission Netherlands &mdash; 28 November, GelreDome',
          body: `<p>Transmission Netherlands takes place on <strong>Saturday 28 November 2026</strong> at the <strong>GelreDome</strong>, Batavierenweg 25, Arnhem. Gates open at <strong>14:00</strong> and the show ends at <strong>23:00</strong>. Entry is 18+ with no exceptions, and ID may be requested.</p><p>The official lineup, listed A&ndash;Z, is <a href="/artists/aly-and-fila">Aly &amp; Fila</a>, <a href="/artists/andrew-rayel">Andrew Rayel</a>, <a href="/artists/daxson">Daxson</a>, Digital Culture, Driftmoon b2b Asteroid, <a href="/artists/markus-schulz">Markus Schulz</a> b2b <a href="/artists/ferry-corsten">Ferry Corsten</a>, <a href="/artists/paul-van-dyk">Paul van Dyk</a> and <a href="/artists/xijaro-and-pitch">Xijaro &amp; Pitch</a>, with a warm-up from DJ Dusk. The organisers say the timetable is usually released in the week of the event.</p><p>A few house rules are worth knowing in advance:</p><ul><li><strong>Sound level:</strong> 98&ndash;103 dB, and earplugs are strongly advised.</li><li><strong>Payments:</strong> food and drink are paid for with the GelreDome Wallet card (minimum top-up &euro;5.00), sold on site by cash or card. It cannot be bought before the event.</li><li><strong>Not allowed:</strong> outside food and drink, liquids including deodorant and hairspray, glass, PET bottles, aerosol cans, laser pointers, sharp objects, and professional or semi-professional cameras with interchangeable lenses. Smoking is not permitted inside.</li><li><strong>Lockers:</strong> pre-order online or rent an E-locker at the entrance. VIP tickets include a locker.</li><li><strong>Tickets:</strong> downloadable from 26 November; your entrance number is printed on the ticket.</li></ul><p><strong>Who it suits:</strong> people who want a single-day indoor stadium show in Europe, from afternoon to late evening.</p><p>See also our <a href="/blog/transmission-netherlands-gelredome-2026">Transmission Netherlands 2026 article</a> and the <a href="https://transmissionfestival.com/events/tmnl26/" target="_blank" rel="noopener">official event page</a>.</p>`,
        },
        {
          heading: 'Side-by-Side Comparison',
          body: `<table><thead><tr><th>Event</th><th>Date</th><th>City</th><th>Venue</th><th>Hours</th></tr></thead><tbody><tr><td>A State of Trance London</td><td>Sat 14 Nov 2026</td><td>London, UK</td><td>Drumsheds (indoor)</td><td>13:00&ndash;22:30</td></tr><tr><td>Dreamstate SoCal</td><td>Fri 20 &amp; Sat 21 Nov 2026</td><td>Long Beach, USA</td><td>Queen Mary Waterfront (waterfront site)</td><td>16:00&ndash;01:00 both days</td></tr><tr><td>Transmission Netherlands</td><td>Sat 28 Nov 2026</td><td>Arnhem, Netherlands</td><td>GelreDome (stadium)</td><td>14:00&ndash;23:00</td></tr></tbody></table><p>All three events are 18+.</p>`,
        },
        {
          heading: 'Planning Your Trip',
          body: `<ul><li><strong>London:</strong> the nearest station is Meridian Water, about five minutes&rsquo; walk from Drumsheds. From the Victoria line, change at Tottenham Hale for a Greater Anglia train; the venue says not to walk from Tottenham Hale. There is no on-site parking. Taxi drop-off and pick-up is inside the venue grounds, reached via Glover Drive.</li><li><strong>Long Beach:</strong> the venue is at 1126 Queens Hwy. Check the official <a href="https://socal.dreamstateusa.com/travel/" target="_blank" rel="noopener">Dreamstate travel page</a> for hotel options. Remember there is no re-entry once you are in.</li><li><strong>Arnhem:</strong> take the train to Arnhem Central, then the shuttle bus from the city bus platform to the GelreDome. Return shuttle tickets are sold on board. Drivers should follow the yellow parking signs after reaching Batavierenweg 25.</li><li><strong>From overseas to the UK:</strong> visitors from visa-exempt countries such as Japan need a UK ETA. See our ASOT London guide for details.</li><li><strong>All three:</strong> bring valid photo ID.</li></ul><p>You can also browse every upcoming date in our <a href="/events">events calendar</a>.</p>`,
        },
        {
          heading: 'Summary',
          body: `<p>The three November events differ mainly in setting and schedule. ASOT London is a single afternoon-to-evening indoor event across three rooms in London. Dreamstate SoCal runs over two days from 4 PM to 1 AM at a waterfront site in Long Beach. Transmission Netherlands is a single-day stadium show in Arnhem from 14:00 to 23:00. Details can change, so check each official page shortly before you travel.</p>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>I listen to A State of Trance every week, and putting these three events side by side was a useful way to see how differently each one is set up.</p>`,
        },
      ],
    },
    ja: {
      title: '2026年11月のトランス・イベントガイド：ASOT London・Dreamstate SoCal・Transmission Netherlands',
      description: '2026年11月に開催されるA State of Trance London、Dreamstate SoCal、Transmission Netherlandsを比較。日程・時間・会場・ルールを公式情報からまとめました。',
      excerpt: '2026年11月は、ASOT London（14日）、Dreamstate SoCal（20〜21日）、Transmission Netherlands（28日）と大きなトランス・イベントが2週間に3つ。日程・時間・会場・ルールを並べて比較します。',
      content: [
        {
          heading: '2026年11月のトランス・イベント',
          body: `<p>2026年11月は、大きなトランス・イベントが2週間のうちに3つ続きます。<strong>11月14日のA State of Trance London</strong>、<strong>11月20〜21日のDreamstate SoCal</strong>、<strong>11月28日のTransmission Netherlands</strong>です。開催国も会場のタイプもそれぞれ違い、ロンドン北部の倉庫、ロングビーチの水辺の会場、アーネムのスタジアムで開かれます。</p><p>この記事では、各イベントの公式ページに掲載された情報をもとに、日程・時間・会場・ルールを並べて比べます。3つとも18歳以上限定です。</p>`,
        },
        {
          heading: 'A State of Trance London：11月14日、Drumsheds',
          body: `<p>A State of Trance Londonは<strong>2026年11月14日（土）</strong>、<strong>Drumsheds</strong>（Meridian Water, N18 3HF）で<strong>13:00〜22:30</strong>に開催されます。A State of Trance 25周年を祝う公演で、会場ページでは「the first ever indoor ASOT festival in the UK」と紹介されています。Drumshedsは自らを「never-before-used industrial warehouse」と説明しており、X ROOM・Y ROOM・Z ROOMの3ルームで行われます。</p><p>出演は<a href="/artists/armin-van-buuren">Armin van Buuren</a>、Armin van Buurenと<a href="/artists/giuseppe-ottaviani">Giuseppe Ottaviani</a>のF2F、Amber Broos b2b Lawton、<a href="/artists/andrew-rayel">Andrew Rayel</a> presents Extasia、<a href="/artists/ferry-corsten">Ferry Corsten</a>、<a href="/artists/cosmic-gate">Cosmic Gate</a>などです。</p><p><strong>こんな人に：</strong>深夜まで続かない1日完結の屋内イベントで、複数のルームを回りたい人。</p><p>ラインナップ全体・アクセス・会場ルールは<a href="/blog/asot-london-drumsheds-2026">A State of Trance London 2026 ガイド</a>にまとめています。公式：<a href="https://drumshedslondon.com/event/a-state-of-trance/" target="_blank" rel="noopener">Drumsheds</a>／<a href="https://festival.astateoftrance.com/london/" target="_blank" rel="noopener">festival.astateoftrance.com/london</a></p>`,
        },
        {
          heading: 'Dreamstate SoCal：11月20〜21日、Queen Mary Waterfront',
          body: `<p>Dreamstate SoCalは<strong>2026年11月20日（金）・21日（土）</strong>、カリフォルニア州ロングビーチの<strong>Queen Mary Waterfront</strong>（1126 Queens Hwy）で開催されます。公式の開催時間は両日とも<strong>16:00〜翌1:00</strong>。入場は18歳以上、飲酒は21歳以上で、当日の再入場はできません。</p><p>公式サイトはDreamstateを「the world&rsquo;s premier all-trance music festival」と紹介し、今年でDreamstate SoCalが10年を迎えるとしています。チケットは2日通し・金曜のみ・土曜のみがあり、それぞれGAとVIPがあります。VIPには優先入場レーン、専用の観覧エリア、VIP向けの飲食、VIP専用トイレが含まれます。無料の給水スポットはGA・VIPの両方に用意されています。</p><p><strong>こんな人に：</strong>海辺で夜まで続く2日間のイベントを楽しみたい人、どちらか1日だけ行きたい人。</p><p>詳しくは<a href="/blog/dreamstate-socal-2026-complete-guide">Dreamstate SoCal 2026 ガイド</a>もどうぞ。公式：<a href="https://socal.dreamstateusa.com/guide/hours-and-info/" target="_blank" rel="noopener">Hours &amp; Info</a></p>`,
        },
        {
          heading: 'Transmission Netherlands：11月28日、GelreDome',
          body: `<p>Transmission Netherlandsは<strong>2026年11月28日（土）</strong>、アーネムの<strong>GelreDome</strong>（Batavierenweg 25）で開催されます。開場<strong>14:00</strong>、終演<strong>23:00</strong>。18歳以上限定で例外はなく、IDの提示を求められることがあります。</p><p>公式ラインナップ（A〜Z順）は<a href="/artists/aly-and-fila">Aly &amp; Fila</a>、<a href="/artists/andrew-rayel">Andrew Rayel</a>、<a href="/artists/daxson">Daxson</a>、Digital Culture、Driftmoon b2b Asteroid、<a href="/artists/markus-schulz">Markus Schulz</a> b2b <a href="/artists/ferry-corsten">Ferry Corsten</a>、<a href="/artists/paul-van-dyk">Paul van Dyk</a>、<a href="/artists/xijaro-and-pitch">Xijaro &amp; Pitch</a>、ウォームアップはDJ Duskです。タイムテーブルは例年、開催週に発表されるとのことです。</p><p>事前に知っておきたいルール：</p><ul><li><strong>音量：</strong>98〜103dB。耳栓の着用が強く推奨されています。</li><li><strong>支払い：</strong>飲食はGelreDome Walletカードで支払います（最低チャージ€5.00）。会場で現金・カードで購入でき、事前購入はできません。</li><li><strong>持ち込み禁止：</strong>外部の飲食物、デオドラントやヘアスプレーを含む液体、ガラス、ペットボトル、スプレー缶、レーザーポインター、刃物類、レンズ交換式のプロ・セミプロ用カメラ。館内は禁煙です。</li><li><strong>ロッカー：</strong>オンラインで事前予約するか、入口でE-lockerを借ります。VIPチケットにはロッカーが含まれます。</li><li><strong>チケット：</strong>11月26日からダウンロード可能。入場口の番号はチケットに記載されます。</li></ul><p><strong>こんな人に：</strong>ヨーロッパで、午後から夜まで1日完結のスタジアム公演を楽しみたい人。</p><p><a href="/blog/transmission-netherlands-gelredome-2026">Transmission Netherlands 2026の記事</a>と<a href="https://transmissionfestival.com/events/tmnl26/" target="_blank" rel="noopener">公式イベントページ</a>もご覧ください。</p>`,
        },
        {
          heading: '3イベントの比較',
          body: `<table><thead><tr><th>イベント</th><th>日程</th><th>都市</th><th>会場</th><th>時間</th></tr></thead><tbody><tr><td>A State of Trance London</td><td>2026年11月14日（土）</td><td>ロンドン（英国）</td><td>Drumsheds（屋内）</td><td>13:00〜22:30</td></tr><tr><td>Dreamstate SoCal</td><td>2026年11月20日（金）・21日（土）</td><td>ロングビーチ（米国）</td><td>Queen Mary Waterfront（水辺の会場）</td><td>両日16:00〜翌1:00</td></tr><tr><td>Transmission Netherlands</td><td>2026年11月28日（土）</td><td>アーネム（オランダ）</td><td>GelreDome（スタジアム）</td><td>14:00〜23:00</td></tr></tbody></table><p>3つとも18歳以上限定です。</p>`,
        },
        {
          heading: '旅の計画のヒント',
          body: `<ul><li><strong>ロンドン：</strong>最寄りのMeridian Water駅からDrumshedsまで徒歩約5分。Victoria線からはTottenham HaleでGreater Angliaに乗り換えます。Tottenham Haleから歩かないよう公式が案内しています。駐車場はなく、タクシーの乗降場は会場の敷地内（Glover Driveから入る）にあります。</li><li><strong>ロングビーチ：</strong>会場は1126 Queens Hwy。ホテルは公式の<a href="https://socal.dreamstateusa.com/travel/" target="_blank" rel="noopener">Travelページ</a>で確認できます。一度入場すると再入場できない点に注意。</li><li><strong>アーネム：</strong>電車でArnhem Centralまで行き、市バス乗り場からGelreDome行きのシャトルバスに乗ります。帰りのシャトルの切符は車内で購入できます。車の場合はBatavierenweg 25に着いたら黄色の駐車場案内に従ってください。</li><li><strong>海外から英国へ：</strong>日本などビザ免除国の旅行者は英国のETAが必要です。詳しくはASOT Londonガイドをご覧ください。</li><li><strong>3イベント共通：</strong>有効な写真付き身分証を持参しましょう。</li></ul><p>今後の日程は<a href="/events">イベント・カレンダー</a>でも確認できます。</p>`,
        },
        {
          heading: 'まとめ',
          body: `<p>11月の3イベントの大きな違いは、会場のタイプと時間帯です。ASOT Londonはロンドンの屋内で、午後から夜までの1日、3ルーム構成。Dreamstate SoCalはロングビーチの水辺の会場で、16時〜翌1時の2日間。Transmission Netherlandsはアーネムのスタジアムで、14時〜23時の1日公演です。情報は変わることがあるので、出発前に各公式ページで確認してください。</p>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>毎週A State of Tranceを聴いている立場から、3つのイベントを並べてみると、それぞれの作りの違いがよく見えて参考になりました。</p>`,
        },
      ],
    },
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'asot-rotterdam-2027-guide',
    date: '2026-10-14',
    readTime: 4,
    tags: ['asot', 'armin-van-buuren', 'rotterdam', 'festival', 'netherlands'],
    en: {
      title: 'A State of Trance Rotterdam 2027: Dates, First-Wave Lineup & Tickets',
      description: 'A State of Trance Rotterdam 2027 takes place on 26–27 February at Rotterdam Ahoy. Dates, the first-wave lineup, Armin van Buuren’s sets and ticket options.',
      excerpt: 'A State of Trance returns to Rotterdam Ahoy on 26–27 February 2027. Here are the dates, the first-wave lineup by day, Armin van Buuren’s sets and the ticket options.',
      content: [
        {
          heading: 'The Event at a Glance',
          body: `<p><strong>A State of Trance Rotterdam 2027</strong> takes place on <strong>Friday 26 and Saturday 27 February 2027</strong> at <strong>Rotterdam Ahoy</strong> in the Netherlands. It is an 18+ event. This is the festival&rsquo;s fourth year at Ahoy, following the 2024, 2025 and 2026 editions; the 2026 edition marked 25 years of A State of Trance.</p><p>Ticket options listed on the official site are weekend tickets and two- and three-night hotel packages. Weekend VIP tickets are sold out, with a waiting list open. Check <a href="https://festival.astateoftrance.com/rotterdam/" target="_blank" rel="noopener">festival.astateoftrance.com/rotterdam</a> for current availability.</p>`,
        },
        {
          heading: 'Lineup: First Wave',
          body: `<p>The first wave of artists was announced in late September 2026. Reported by <a href="https://edmidentity.com/2026/09/28/a-state-of-trance-rotterdam-2027-lineup/" target="_blank" rel="noopener">EDM Identity</a> and <a href="https://www.ibiza1radio.com/news/a-state-of-trance-2027-lineup-revealed-for-rotterdam-ahoy" target="_blank" rel="noopener">Ibiza 1 Radio</a>, it includes:</p><ul><li><strong>Friday 26 February:</strong> <a href="/artists/armin-van-buuren">Armin van Buuren</a> (five-hour set), <a href="/artists/aly-and-fila">Aly &amp; Fila</a> b2b <a href="/artists/john-ocallaghan">John O&rsquo;Callaghan</a>, Alex M.O.R.P.H., <a href="/artists/ben-gold">Ben Gold</a>, <a href="/artists/dash-berlin">Dash Berlin</a>, <a href="/artists/richard-durand">Richard Durand</a>, Billy Gillies, Ciaran McAuley, <a href="/artists/david-forbes">David Forbes</a> and <a href="/artists/orjan-nilsen">&Oslash;rjan Nilsen</a>.</li><li><strong>Saturday 27 February:</strong> <a href="/artists/vini-vici">Vini Vici</a> b2b Space 92, <a href="/artists/giuseppe-ottaviani">Giuseppe Ottaviani</a> b2b Hypaton, <a href="/artists/ferry-corsten">Ferry Corsten</a> (with a partner still to be announced), <a href="/artists/ruben-de-ronde">Ruben de Ronde</a>, <a href="/artists/factor-b">Factor B</a>, Talla 2XLC, <a href="/artists/xijaro-and-pitch">XiJaro &amp; Pitch</a>, <a href="/artists/driftmoon">Driftmoon</a>, <a href="/artists/mark-sixma">Mark Sixma</a>, Sarah de Warren and Youna.</li></ul><p>Reports describe the venue as using four areas on Friday and five on Saturday. More artists are expected to be added, so check the official channels for the full timetable.</p>`,
        },
        {
          heading: 'Armin van Buuren&rsquo;s Sets',
          body: `<p>Armin van Buuren is billed for several sets across the weekend: a five-hour set on Friday night and two performances on Saturday. According to <a href="https://www.ibiza1radio.com/news/a-state-of-trance-2027-lineup-revealed-for-rotterdam-ahoy" target="_blank" rel="noopener">Ibiza 1 Radio</a>, one of the Saturday sets is an all-vinyl set before the main doors open, for early-access ticket and hotel-package holders.</p>`,
        },
        {
          heading: 'Who It Suits',
          body: `<p>A State of Trance Rotterdam is a two-day indoor event in a large arena, with several areas running at once. It suits people who want a full weekend of trance across many sub-styles, and listeners of the weekly A State of Trance radio show who want to see the show&rsquo;s artists in one place.</p><p>For background on the brand, see <a href="/blog/asot-25-years-anniversary">A State of Trance Turns 25</a> and the <a href="/events/a-state-of-trance-festival">A State of Trance Festival page</a> in our events calendar. If you are planning a trip earlier in the season, our <a href="/blog/november-2026-trance-events-guide">November 2026 Trance Events Guide</a> covers ASOT London, Dreamstate SoCal and Transmission Netherlands.</p>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>I listen to A State of Trance every week, so the Rotterdam weekend is the event I watch most closely each year. I will update this page as more of the lineup is announced.</p>`,
        },
      ],
    },
    ja: {
      title: 'A State of Trance Rotterdam 2027：日程・第1弾ラインナップ・チケット',
      description: 'A State of Trance Rotterdam 2027は2月26〜27日にRotterdam Ahoyで開催。日程、第1弾ラインナップ、Armin van Buurenのセット、チケットの種類をまとめました。',
      excerpt: 'A State of Trance Rotterdam 2027は2027年2月26〜27日、Rotterdam Ahoyで開催。日程、曜日別の第1弾ラインナップ、Armin van Buurenのセット、チケットを紹介します。',
      content: [
        {
          heading: 'イベント概要',
          body: `<p><strong>A State of Trance Rotterdam 2027</strong>は<strong>2027年2月26日（金）・27日（土）</strong>、オランダの<strong>Rotterdam Ahoy</strong>で開催されます。18歳以上限定。2024年・2025年・2026年に続く、Ahoyでの4回目の開催で、2026年はA State of Trance 25周年を記念した回でした。</p><p>公式サイトに掲載されているチケットは、週末通し券と2泊・3泊のホテルパッケージです。週末VIPは完売で、キャンセル待ちを受け付けています。最新の販売状況は<a href="https://festival.astateoftrance.com/rotterdam/" target="_blank" rel="noopener">festival.astateoftrance.com/rotterdam</a>でご確認ください。</p>`,
        },
        {
          heading: 'ラインナップ（第1弾）',
          body: `<p>第1弾ラインナップは2026年9月下旬に発表されました。<a href="https://edmidentity.com/2026/09/28/a-state-of-trance-rotterdam-2027-lineup/" target="_blank" rel="noopener">EDM Identity</a>と<a href="https://www.ibiza1radio.com/news/a-state-of-trance-2027-lineup-revealed-for-rotterdam-ahoy" target="_blank" rel="noopener">Ibiza 1 Radio</a>の報道によると、出演者は次のとおりです。</p><ul><li><strong>2月26日（金）：</strong><a href="/artists/armin-van-buuren">Armin van Buuren</a> （5時間セット）、<a href="/artists/aly-and-fila">Aly &amp; Fila</a> b2b <a href="/artists/john-ocallaghan">John O&rsquo;Callaghan</a>、Alex M.O.R.P.H.、<a href="/artists/ben-gold">Ben Gold</a>、<a href="/artists/dash-berlin">Dash Berlin</a>、<a href="/artists/richard-durand">Richard Durand</a>、Billy Gillies、Ciaran McAuley、<a href="/artists/david-forbes">David Forbes</a>、<a href="/artists/orjan-nilsen">&Oslash;rjan Nilsen</a>。</li><li><strong>2月27日（土）：</strong><a href="/artists/vini-vici">Vini Vici</a> b2b Space 92、<a href="/artists/giuseppe-ottaviani">Giuseppe Ottaviani</a> b2b Hypaton、<a href="/artists/ferry-corsten">Ferry Corsten</a> （共演者は後日発表）、<a href="/artists/ruben-de-ronde">Ruben de Ronde</a>、<a href="/artists/factor-b">Factor B</a>、Talla 2XLC、<a href="/artists/xijaro-and-pitch">XiJaro &amp; Pitch</a>、<a href="/artists/driftmoon">Driftmoon</a>、<a href="/artists/mark-sixma">Mark Sixma</a>、Sarah de Warren、Youna。</li></ul><p>報道では、金曜は4エリア、土曜は5エリアで行われるとされています。今後も追加発表が予定されているので、タイムテーブルは公式で確認してください。</p>`,
        },
        {
          heading: 'Armin van Buurenのセット',
          body: `<p>Armin van Buurenは週末を通して複数のセットに出演します。金曜は5時間のセット、土曜は2回の出演です。<a href="https://www.ibiza1radio.com/news/a-state-of-trance-2027-lineup-revealed-for-rotterdam-ahoy" target="_blank" rel="noopener">Ibiza 1 Radio</a>によると、土曜のうち1回は開場前のオール・ヴァイナル・セットで、アーリーアクセス券とホテルパッケージの購入者が対象です。</p>`,
        },
        {
          heading: 'こんな人に',
          body: `<p>A State of Trance Rotterdamは、大型アリーナで複数のエリアが同時に動く2日間の屋内イベントです。いろいろなスタイルのトランスを週末じっくり楽しみたい人や、毎週のASOTラジオで聴いているアーティストを一度に見たい人に向いています。</p><p>ブランドの背景は<a href="/blog/asot-25-years-anniversary">A State of Trance 25周年</a>の記事や、イベント・カレンダーの<a href="/events/a-state-of-trance-festival">A State of Trance Festivalのページ</a>をどうぞ。シーズン前半の予定なら、ASOT London・Dreamstate SoCal・Transmission Netherlandsをまとめた<a href="/blog/november-2026-trance-events-guide">2026年11月のトランス・イベントガイド</a>もあります。</p>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>毎週A State of Tranceを聴いているので、ロッテルダムの週末は毎年いちばん注目しているイベントです。追加のラインナップが出たら、このページを更新します。</p>`,
        },
      ],
    },
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'ade-2026-trance-guide',
    date: '2026-10-16',
    readTime: 5,
    tags: ['ade', 'amsterdam', 'festival', 'netherlands', 'events'],
    en: {
      title: 'ADE 2026 Trance Guide: Armin, Luminosity, Paul van Dyk & More',
      description: 'The trance events at Amsterdam Dance Event 2026 (21–25 October), day by day: Armin van Buuren at Gashouder, In Trance We Trust, Luminosity and Paul van Dyk at Melkweg.',
      excerpt: 'Amsterdam Dance Event turns 30 on 21–25 October 2026. Here are the confirmed trance events day by day, from Armin van Buuren at Gashouder to Luminosity and Paul van Dyk.',
      content: [
        {
          heading: 'ADE 2026 at a Glance',
          body: `<p><strong>Amsterdam Dance Event (ADE)</strong> runs from <strong>Wednesday 21 to Sunday 25 October 2026</strong> and marks its 30th year (1996&ndash;2026). It is a city-wide festival and conference: according to <a href="https://www.amsterdam-dance-event.nl/en/news/ade25-pressrelease-5/2750267/" target="_blank" rel="noopener">ADE</a>, the 2025 edition drew a record 600,000 visitors, with nearly 3,500 artists and over 1,200 events at more than 300 locations. <a href="https://djmag.com/news/armin-van-buuren-announces-ade-opening-party-gashouder" target="_blank" rel="noopener">DJ Mag</a> reports that Jean-Michel Jarre is guest of honour for the 30th edition.</p><p>Trance is only one part of ADE, so this guide picks out the trance events that are confirmed on official or venue pages, day by day. Tickets for most ADE events are sold separately per event, and several sell out in advance.</p>`,
        },
        {
          heading: 'Wednesday 21 October',
          body: `<ul><li><strong><a href="/artists/armin-van-buuren">Armin van Buuren</a> &amp; Benwal &mdash; Gashouder (Westergasfabriek).</strong> Armin opens ADE at the reopened Gashouder, joined by Dutch hard house artist Benwal; see our <a href="/blog/armin-van-buuren-ade-2026-gashouder">Armin at Gashouder guide</a> (source: <a href="https://djmag.com/news/armin-van-buuren-announces-ade-opening-party-gashouder" target="_blank" rel="noopener">DJ Mag</a>).</li><li><strong>In Trance We Trust &mdash; Thuishaven.</strong> Black Hole Recordings&rsquo; label night (<a href="/blog/in-trance-we-trust-ade-2026">full guide</a>) returns with <a href="/artists/bt">BT</a>, Ciaran McAuley, Craig Connelly, Maria Healy, Sneijder, Virtual Vault and <a href="/artists/xijaro-and-pitch">XiJaro &amp; Pitch</a> (source: <a href="https://www.blackholerecordings.com/news/in-trance-we-trust-returns-for-amsterdam-dance-event" target="_blank" rel="noopener">Black Hole Recordings</a>).</li></ul>`,
        },
        {
          heading: 'Thursday 22 October',
          body: `<ul><li><strong><a href="/labels/ava-recordings">AVA Recordings</a> 20 Years ADE Special &mdash; The Tequila Club (15:00&ndash;22:00).</strong> The label&rsquo;s anniversary show with Andy Moor &amp; Adam White&rsquo;s Whiteroom, <a href="/artists/richard-durand">Richard Durand</a>, <a href="/artists/david-forbes">David Forbes</a>, <a href="/artists/ferry-tayle">Ferry Tayle</a> and Japan&rsquo;s <a href="/artists/rinaly">Rinaly</a>; see <a href="/blog/ava-recordings-20-years-ade-2026">our AVA 20 Years guide</a>.</li></ul>`,
        },
        {
          heading: 'Friday 23 October',
          body: `<ul><li><strong>Luminosity &mdash; Daytime Event, Panama (14:00&ndash;21:00).</strong> Lineup: <a href="/artists/aly-and-fila">Aly &amp; Fila</a>, Amber Revival, Asteroid, Cold Blue, <a href="/artists/daxson">Daxson</a>, Doppenberg, Enigma State, Factoria and Peter Steele (source: <a href="https://www.amsterdam-dance-event.nl/en/program/2026/luminosity-daytime-event/2815737/" target="_blank" rel="noopener">ADE programme</a>).</li><li><strong>Luminosity &mdash; Nighttime Event, Panama (22:00&ndash;07:00).</strong> The main room features names including <a href="/artists/bryan-kearney">Bryan Kearney</a>, <a href="/artists/john-ocallaghan">John O&rsquo;Callaghan</a>, <a href="/artists/darren-porter">Darren Porter</a> and <a href="/artists/mauro-picotto">Mauro Picotto</a>; the Studio has Andrea Ribeca, Arctic Barbers b2b Resolve and Enigma State (source: <a href="https://www.iamsterdam.com/en/whats-on/calendar/nightlife/clubbing/luminosity-nighttime-event" target="_blank" rel="noopener">I amsterdam</a>).</li></ul><p>Luminosity is the team behind <a href="/events/luminosity-beach-festival">Luminosity Beach Festival</a> in Zandvoort. For all five of its ADE events, see <a href="/blog/luminosity-ade-2026">Luminosity at ADE 2026</a>.</p>`,
        },
        {
          heading: 'Saturday 24 October',
          body: `<ul><li><strong><a href="/artists/paul-van-dyk">Paul van Dyk</a> &mdash; Open to Close, Melkweg (Rabo room, 18:00&ndash;22:30).</strong> An open-to-close set; <a href="https://www.melkweg.nl/en/agenda/paul-van-dyk-24-10-2026" target="_blank" rel="noopener">Melkweg</a> lists it as his fifth consecutive ADE show at Melkweg. The event is listed as sold out. More in <a href="/blog/paul-van-dyk-ade-2026-melkweg">Paul van Dyk at ADE 2026</a>.</li><li><strong><a href="/artists/andrew-rayel">Andrew Rayel</a> &mdash; Find Your Harmony 500, Desmet Studio&rsquo;s (22:00&ndash;04:00).</strong> A 230-capacity club night for the 500th episode of his radio show; see <a href="/blog/find-your-harmony-500-ade-2026">our FYH 500 guide</a>.</li><li><strong>Luminosity &mdash; ADE Rave, Q-Factory (14:00&ndash;06:00).</strong> A day and night programme. The listing on <a href="https://festivalfans.nl/event/ade-luminosity-rave/" target="_blank" rel="noopener">festivalfans.nl</a> includes Joyhauser, <a href="/artists/will-atkinson">Will Atkinson</a> and Nifra by day, and Sarah de Warren, Billy Gillies, Amber Broos, <a href="/artists/ben-nicky">Ben Nicky</a> and Thick as Thieves by night. Check the official channels for the final timetable.</li><li><strong>Amsterdam Trance Event, Panama (14:30&ndash;21:30).</strong> A ten-DJ, two-room daytime party: <a href="/artists/sean-tyas">Sean Tyas</a>, <a href="/artists/allen-watts">Allen Watts</a>, <a href="/artists/richard-durand">Richard Durand</a>, <a href="/artists/xijaro-and-pitch">XiJaro &amp; Pitch</a>, Alex M.O.R.P.H., Dan Cooper, RAM, Steve Dekay, Talla 2XLC and York. Bigger than last year&rsquo;s edition; see <a href="/blog/amsterdam-trance-event-ade-2026">our Amsterdam Trance Event guide</a>.</li></ul>`,
        },
        {
          heading: 'At a Glance: Trance at ADE 2026',
          body: `<table><thead><tr><th>Day</th><th>Event</th><th>Venue</th><th>Hours</th></tr></thead><tbody><tr><td>Wed 21 Oct</td><td>Armin van Buuren &amp; Benwal</td><td>Gashouder</td><td>23:00&ndash;06:00</td></tr><tr><td>Wed 21 Oct</td><td>In Trance We Trust</td><td>Thuishaven</td><td>21:00&ndash;04:00</td></tr><tr><td>Thu 22 Oct</td><td>AVA Recordings 20 Years</td><td>The Tequila Club</td><td>15:00&ndash;22:00</td></tr><tr><td>Fri 23 Oct</td><td>Luminosity Daytime</td><td>Panama</td><td>14:00&ndash;21:00</td></tr><tr><td>Fri 23 Oct</td><td>Luminosity Nighttime</td><td>Panama</td><td>22:00&ndash;07:00</td></tr><tr><td>Sat 24 Oct</td><td>Amsterdam Trance Event</td><td>Panama</td><td>14:30&ndash;21:30</td></tr><tr><td>Sat 24 Oct</td><td>Paul van Dyk Open to Close</td><td>Melkweg</td><td>18:00&ndash;22:30</td></tr><tr><td>Sat 24 Oct</td><td>Find Your Harmony 500</td><td>Desmet Studio&rsquo;s</td><td>22:00&ndash;04:00</td></tr><tr><td>Sat 24 Oct</td><td>Luminosity ADE Rave</td><td>Q-Factory</td><td>14:00&ndash;06:00</td></tr></tbody></table>`,
        },
        {
          heading: 'Planning Tips',
          body: `<ul><li><strong>Book each event separately:</strong> ADE events are ticketed individually, and popular trance nights such as Paul van Dyk at Melkweg sell out.</li><li><strong>Check the official programme:</strong> the <a href="https://www.amsterdam-dance-event.nl/en/" target="_blank" rel="noopener">Amsterdam Dance Event website</a> lists every event with its venue and times.</li><li><strong>Going later in the season?</strong> See our <a href="/blog/november-2026-trance-events-guide">November 2026 Trance Events Guide</a> and our <a href="/blog/asot-rotterdam-2027-guide">A State of Trance Rotterdam 2027 guide</a>.</li></ul>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>ADE has hundreds of events every year, so it is easy to miss the trance nights. I will add more confirmed trance events here as they appear on official pages.</p>`,
        },
      ],
    },
    ja: {
      title: 'ADE 2026 トランス・ガイド：Armin、Luminosity、Paul van Dykほか',
      description: 'Amsterdam Dance Event 2026（10月21〜25日）のトランス系イベントを日別にまとめました。GashouderのArmin van Buuren、In Trance We Trust、Luminosity、MelkwegのPaul van Dykなど。',
      excerpt: '30周年を迎えるAmsterdam Dance Event（2026年10月21〜25日）。公式ページで確認できたトランス系イベントを、日別に紹介します。',
      content: [
        {
          heading: 'ADE 2026の概要',
          body: `<p><strong>Amsterdam Dance Event（ADE）</strong>は<strong>2026年10月21日（水）〜25日（日）</strong>に開催され、今年で30周年（1996〜2026年）を迎えます。街全体で行われるフェスティバル兼カンファレンスで、<a href="https://www.amsterdam-dance-event.nl/en/news/ade25-pressrelease-5/2750267/" target="_blank" rel="noopener">ADE</a>によると2025年は過去最多の60万人が来場し、約3,500組のアーティスト、1,200以上のイベントが300か所以上の会場で行われました。<a href="https://djmag.com/news/armin-van-buuren-announces-ade-opening-party-gashouder" target="_blank" rel="noopener">DJ Mag</a>によると、30回目の今年はJean-Michel Jarreが名誉ゲストを務めます。</p><p>ADEの中でトランスは一部なので、この記事では公式ページや会場ページで確認できたトランス系イベントを日別にまとめます。チケットは基本的にイベントごとに別売りで、売り切れるものもあります。</p>`,
        },
        {
          heading: '10月21日（水）',
          body: `<ul><li><strong><a href="/artists/armin-van-buuren">Armin van Buuren</a> &amp; Benwal ／ Gashouder（Westergasfabriek）</strong>：リニューアル後のGashouderで、ArminがADEのオープニングを飾ります。共演はオランダのハードハウス系アーティストBenwal。詳しくは<a href="/blog/armin-van-buuren-ade-2026-gashouder">ArminのGashouder公演ガイド</a>へ（出典：<a href="https://djmag.com/news/armin-van-buuren-announces-ade-opening-party-gashouder" target="_blank" rel="noopener">DJ Mag</a>）。</li><li><strong>In Trance We Trust ／ Thuishaven</strong>：Black Hole Recordingsのレーベルナイト（<a href="/blog/in-trance-we-trust-ade-2026">詳しいガイド</a>）。出演は<a href="/artists/bt">BT</a>、Ciaran McAuley、Craig Connelly、Maria Healy、Sneijder、Virtual Vault、<a href="/artists/xijaro-and-pitch">XiJaro &amp; Pitch</a>（出典：<a href="https://www.blackholerecordings.com/news/in-trance-we-trust-returns-for-amsterdam-dance-event" target="_blank" rel="noopener">Black Hole Recordings</a>）。</li></ul>`,
        },
        {
          heading: '10月22日（木）',
          body: `<ul><li><strong><a href="/labels/ava-recordings">AVA Recordings</a> 20 Years ADE Special ／ The Tequila Club（15:00〜22:00）</strong>：レーベル20周年の公演。Andy Moor &amp; Adam WhiteのWhiteroom、<a href="/artists/richard-durand">Richard Durand</a>、<a href="/artists/david-forbes">David Forbes</a>、<a href="/artists/ferry-tayle">Ferry Tayle</a>、日本の<a href="/artists/rinaly">Rinaly</a>など。詳しくは<a href="/blog/ava-recordings-20-years-ade-2026">AVA 20周年ガイド</a>へ。</li></ul>`,
        },
        {
          heading: '10月23日（金）',
          body: `<ul><li><strong>Luminosity ／ Daytime Event、Panama（14:00〜21:00）</strong>：出演は<a href="/artists/aly-and-fila">Aly &amp; Fila</a>、Amber Revival、Asteroid、Cold Blue、<a href="/artists/daxson">Daxson</a>、Doppenberg、Enigma State、Factoria、Peter Steele（出典：<a href="https://www.amsterdam-dance-event.nl/en/program/2026/luminosity-daytime-event/2815737/" target="_blank" rel="noopener">ADE programme</a>）。</li><li><strong>Luminosity ／ Nighttime Event、Panama（22:00〜翌7:00）</strong>：メインルームには<a href="/artists/bryan-kearney">Bryan Kearney</a>、<a href="/artists/john-ocallaghan">John O&rsquo;Callaghan</a>、<a href="/artists/darren-porter">Darren Porter</a>、<a href="/artists/mauro-picotto">Mauro Picotto</a>など、StudioにはAndrea Ribeca、Arctic Barbers b2b Resolve、Enigma Stateが出演（出典：<a href="https://www.iamsterdam.com/en/whats-on/calendar/nightlife/clubbing/luminosity-nighttime-event" target="_blank" rel="noopener">I amsterdam</a>）。</li></ul><p>Luminosityは、ザントフォールトの<a href="/events/luminosity-beach-festival">Luminosity Beach Festival</a>を手がけるチームです。5つのADEイベントの詳細は<a href="/blog/luminosity-ade-2026">ADE 2026のLuminosity</a>へ。</p>`,
        },
        {
          heading: '10月24日（土）',
          body: `<ul><li><strong><a href="/artists/paul-van-dyk">Paul van Dyk</a> ／ Open to Close、Melkweg（Raboルーム、18:00〜22:30）</strong>：最初から最後まで1人で回すオープン・トゥ・クローズ。<a href="https://www.melkweg.nl/en/agenda/paul-van-dyk-24-10-2026" target="_blank" rel="noopener">Melkweg</a>によると、MelkwegでのADE公演は5年連続です。チケットは売り切れと掲載されています。詳しくは<a href="/blog/paul-van-dyk-ade-2026-melkweg">ADE 2026のPaul van Dyk</a>へ。</li><li><strong><a href="/artists/andrew-rayel">Andrew Rayel</a> ／ Find Your Harmony 500、Desmet Studio&rsquo;s（22:00〜翌4:00）</strong>：ラジオ番組500回を記念した定員230人のクラブナイト。詳しくは<a href="/blog/find-your-harmony-500-ade-2026">FYH 500ガイド</a>へ。</li><li><strong>Luminosity ／ ADE Rave、Q-Factory（14:00〜翌6:00）</strong>：昼と夜の2部構成。<a href="https://festivalfans.nl/event/ade-luminosity-rave/" target="_blank" rel="noopener">festivalfans.nl</a>の掲載では、昼にJoyhauser、<a href="/artists/will-atkinson">Will Atkinson</a>、Nifra、夜にSarah de Warren、Billy Gillies、Amber Broos、<a href="/artists/ben-nicky">Ben Nicky</a>、Thick as Thievesなど。最終的なタイムテーブルは公式で確認してください。</li><li><strong>Amsterdam Trance Event、Panama（14:30〜21:30）</strong>：10人のDJ・2ルーム構成の昼イベント。出演は<a href="/artists/sean-tyas">Sean Tyas</a>、<a href="/artists/allen-watts">Allen Watts</a>、<a href="/artists/richard-durand">Richard Durand</a>、<a href="/artists/xijaro-and-pitch">XiJaro &amp; Pitch</a>、Alex M.O.R.P.H.、Dan Cooper、RAM、Steve Dekay、Talla 2XLC、York。昨年版より規模を拡大。詳しくは<a href="/blog/amsterdam-trance-event-ade-2026">Amsterdam Trance Eventガイド</a>へ。</li></ul>`,
        },
        {
          heading: '一覧：ADE 2026のトランス・イベント',
          body: `<table><thead><tr><th>日付</th><th>イベント</th><th>会場</th><th>時間</th></tr></thead><tbody><tr><td>10/21（水）</td><td>Armin van Buuren &amp; Benwal</td><td>Gashouder</td><td>23:00〜翌6:00</td></tr><tr><td>10/21（水）</td><td>In Trance We Trust</td><td>Thuishaven</td><td>21:00〜翌4:00</td></tr><tr><td>10/22（木）</td><td>AVA Recordings 20 Years</td><td>The Tequila Club</td><td>15:00〜22:00</td></tr><tr><td>10/23（金）</td><td>Luminosity Daytime</td><td>Panama</td><td>14:00〜21:00</td></tr><tr><td>10/23（金）</td><td>Luminosity Nighttime</td><td>Panama</td><td>22:00〜翌7:00</td></tr><tr><td>10/24（土）</td><td>Amsterdam Trance Event</td><td>Panama</td><td>14:30〜21:30</td></tr><tr><td>10/24（土）</td><td>Paul van Dyk Open to Close</td><td>Melkweg</td><td>18:00〜22:30</td></tr><tr><td>10/24（土）</td><td>Find Your Harmony 500</td><td>Desmet Studio&rsquo;s</td><td>22:00〜翌4:00</td></tr><tr><td>10/24（土）</td><td>Luminosity ADE Rave</td><td>Q-Factory</td><td>14:00〜翌6:00</td></tr></tbody></table>`,
        },
        {
          heading: '行く前のヒント',
          body: `<ul><li><strong>チケットはイベントごとに：</strong>ADEのイベントは個別販売で、MelkwegのPaul van Dykのように人気のトランス・ナイトは売り切れます。</li><li><strong>公式の番組表を確認：</strong><a href="https://www.amsterdam-dance-event.nl/en/" target="_blank" rel="noopener">Amsterdam Dance Event公式サイト</a>に、全イベントの会場と時間が載っています。</li><li><strong>この先の予定も：</strong><a href="/blog/november-2026-trance-events-guide">2026年11月のトランス・イベントガイド</a>や<a href="/blog/asot-rotterdam-2027-guide">A State of Trance Rotterdam 2027 ガイド</a>もどうぞ。</li></ul>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>ADEは毎年何百ものイベントがあって、トランスのナイトを見落としがちです。公式ページで確認できたトランス系イベントが出てきたら、ここに追加していきます。</p>`,
        },
      ],
    },
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'luminosity-ade-2026',
    date: '2026-10-16',
    readTime: 5,
    tags: ['luminosity', 'ade', 'amsterdam', 'festival', 'netherlands'],
    en: {
      title: 'Luminosity at ADE 2026: This Is Trance!, ADE Rave & Infinity',
      description: 'Luminosity hosts five events at Amsterdam Dance Event 2026 on 23–24 October at Club Panama and Q Factory. Full lineups, times and the sound of each event.',
      excerpt: 'Luminosity is not only a summer beach festival: at ADE 2026 it runs five events on 23–24 October. Here are the lineups, times and venues for each, from uplifting trance to ADE Rave.',
      content: [
        {
          heading: 'Luminosity at ADE 2026',
          body: `<p>Luminosity is best known for <a href="/events/luminosity-beach-festival">Luminosity Beach Festival</a> in Zandvoort each summer, but it also runs a full programme during <strong>Amsterdam Dance Event</strong>. For ADE 2026 it has <strong>five events over Friday 23 and Saturday 24 October</strong>, at two venues: <strong>Club Panama</strong> (Oostelijke Handelskade 4) and <strong>Q Factory</strong> (Atlantisplein 1).</p><p>Each event has its own sound, from classic uplifting trance to a harder, faster rave format, so it is worth choosing by style. All details below come from the official Luminosity event pages.</p>`,
        },
        {
          heading: 'Friday 23 October &mdash; This Is Trance! (Club Panama)',
          body: `<h3>By Day &mdash; 14:00 to 21:00</h3><p>Described as &ldquo;dedicated to uplifting, emotional and high-energy trance in its purest form&rdquo;. (<a href="https://luminosity-events.nl/events/luminosity-pres-this-is-trance-ade-by-day/" target="_blank" rel="noopener">official page</a>)</p><table><thead><tr><th>Room</th><th>Time</th><th>Artist</th></tr></thead><tbody><tr><td>Main Room</td><td>14:00&ndash;15:00</td><td>Factoria</td></tr><tr><td>Main Room</td><td>15:00&ndash;16:00</td><td>Amber Revival</td></tr><tr><td>Main Room</td><td>16:00&ndash;17:00</td><td>Doppenberg</td></tr><tr><td>Main Room</td><td>17:00&ndash;18:30</td><td><a href="/artists/daxson">Daxson</a></td></tr><tr><td>Main Room</td><td>18:30&ndash;20:00</td><td><a href="/artists/aly-and-fila">Aly &amp; Fila</a></td></tr><tr><td>Main Room</td><td>20:00&ndash;21:00</td><td>Asteroid</td></tr><tr><td>Studio</td><td>14:00&ndash;15:15</td><td>Peter Steele</td></tr><tr><td>Studio</td><td>15:15&ndash;16:30</td><td>ECO</td></tr><tr><td>Studio</td><td>16:30&ndash;17:45</td><td>Enigma State</td></tr><tr><td>Studio</td><td>17:45&ndash;19:00</td><td><a href="/artists/ferry-tayle">Ferry Tayle</a></td></tr><tr><td>Studio</td><td>19:00&ndash;20:00</td><td><a href="/artists/will-rees">Will Rees</a></td></tr><tr><td>Studio</td><td>20:00&ndash;21:00</td><td>Paul Denton</td></tr></tbody></table><h3>By Night &mdash; 22:00 to 07:00</h3><p>&ldquo;A true all-night celebration of the core Luminosity sound&rdquo;, built on classic uplifting trance. (<a href="https://luminosity-events.nl/events/luminosity-pres-this-is-trance-ade-by-night/" target="_blank" rel="noopener">official page</a>)</p><table><thead><tr><th>Room</th><th>Time</th><th>Artist</th></tr></thead><tbody><tr><td>Main Room</td><td>22:00&ndash;23:30</td><td>Mode&#257;</td></tr><tr><td>Main Room</td><td>23:30&ndash;01:00</td><td><a href="/artists/john-ocallaghan">John O&rsquo;Callaghan</a></td></tr><tr><td>Main Room</td><td>01:00&ndash;02:30</td><td><a href="/artists/bryan-kearney">Bryan Kearney</a></td></tr><tr><td>Main Room</td><td>02:30&ndash;04:00</td><td><a href="/artists/mauro-picotto">Mauro Picotto</a></td></tr><tr><td>Main Room</td><td>04:00&ndash;05:30</td><td>Will Rees &amp; Paul Denton pres. Parallel Worlds</td></tr><tr><td>Main Room</td><td>05:30&ndash;07:00</td><td><a href="/artists/darren-porter">Darren Porter</a></td></tr><tr><td>Studio</td><td>23:00&ndash;00:00</td><td>Arctic Barbers b2b Resolve</td></tr><tr><td>Studio</td><td>00:00&ndash;02:00</td><td>Enigma State</td></tr><tr><td>Studio</td><td>02:00&ndash;04:00</td><td>Factoria &amp; Grant Trowbridge pres. Giants In The Mist</td></tr><tr><td>Studio</td><td>04:00&ndash;05:30</td><td>Andrea Ribeca</td></tr></tbody></table>`,
        },
        {
          heading: 'Saturday 24 October &mdash; Q Factory',
          body: `<h3>ADE Rave By Day &mdash; 14:00 to 21:00</h3><p>&ldquo;Hypnotic trance, driving rhythms, harder grooves and raw warehouse energy&rdquo;. Lineup: Joyhauser, Mha Iri, Mode&#257;, Nifra, Nikolauss, T78, <a href="/artists/will-atkinson">Will Atkinson</a>. (<a href="https://luminosity-events.nl/events/ade-rave-by-day/" target="_blank" rel="noopener">official page</a>)</p><h3>Infinity By Day &mdash; 14:00 to 21:00</h3><p>&ldquo;Built around melodic, progressive and emotional and layered music&rdquo;. Set times: Susan Right (14:00), <a href="/artists/estiva">Estiva</a> (15:30), Mitch de Klein (16:45), Romain Garcia (18:00), Joachim Pastor (19:30). (<a href="https://luminosity-events.nl/events/infinity-ade-by-day/" target="_blank" rel="noopener">official page</a>)</p><h3>ADE Rave By Night &mdash; 22:00 to 06:00</h3><p>&ldquo;Where trance meets the underground with harder edges, faster tempos, acid textures and raw warehouse energy.&rdquo; <strong>Main Room:</strong> Amber Broos, <a href="/artists/ben-nicky">Ben Nicky</a>, Billy Gillies, Sarah de Warren, Thick As Thieves (Mark Sherry &amp; David Forbes), VE/RA. <strong>Studio:</strong> Alex Di Stefano, Andrea Scopsi, Dan Harrison, Ahmed Helmy &amp; Doppenberg pres. HEL:BRG, Indecent Noise, Jordan Tilstone, Nikolauss, Renegade System. (<a href="https://luminosity-events.nl/events/ade-rave-by-night/" target="_blank" rel="noopener">official page</a>)</p>`,
        },
        {
          heading: 'Which One Suits You?',
          body: `<table><thead><tr><th>Event</th><th>When</th><th>Venue</th><th>Sound</th></tr></thead><tbody><tr><td>This Is Trance! By Day</td><td>Fri 14:00&ndash;21:00</td><td>Club Panama</td><td>Uplifting, emotional trance</td></tr><tr><td>This Is Trance! By Night</td><td>Fri 22:00&ndash;07:00</td><td>Club Panama</td><td>Classic uplifting, all night</td></tr><tr><td>ADE Rave By Day</td><td>Sat 14:00&ndash;21:00</td><td>Q Factory</td><td>Hypnotic, harder grooves</td></tr><tr><td>Infinity By Day</td><td>Sat 14:00&ndash;21:00</td><td>Q Factory</td><td>Melodic, progressive</td></tr><tr><td>ADE Rave By Night</td><td>Sat 22:00&ndash;06:00</td><td>Q Factory</td><td>Harder, faster, acid</td></tr></tbody></table><p>If you like the classic Luminosity sound, Friday at Club Panama is the closest to the beach festival. Saturday splits into a melodic option (Infinity) and a harder one (ADE Rave).</p>`,
        },
        {
          heading: 'More from ADE 2026',
          body: `<p>For Armin van Buuren, In Trance We Trust and Paul van Dyk&rsquo;s open-to-close set, see our <a href="/blog/ade-2026-trance-guide">ADE 2026 Trance Guide</a>. Tickets and the latest information are on the <a href="https://luminosity-events.nl/" target="_blank" rel="noopener">Luminosity website</a>.</p>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>I knew Luminosity for its summer beach festival, so it was a nice surprise to see how much it puts on in Amsterdam in October as well.</p>`,
        },
      ],
    },
    ja: {
      title: 'ADE 2026のLuminosity：This Is Trance!・ADE Rave・Infinity',
      description: 'LuminosityはAmsterdam Dance Event 2026で、10月23〜24日にClub PanamaとQ Factoryで5つのイベントを開催。ラインナップ、時間、各イベントのサウンドをまとめました。',
      excerpt: '夏のビーチフェスだけじゃない。LuminosityはADE 2026で10月23〜24日に5つのイベントを開催します。王道アップリフティングからADE Raveまで、ラインナップと時間を紹介。',
      content: [
        {
          heading: 'ADE 2026のLuminosity',
          body: `<p>Luminosityといえば夏にザントフォールトで開かれる<a href="/events/luminosity-beach-festival">Luminosity Beach Festival</a>が有名ですが、秋の<strong>Amsterdam Dance Event</strong>でもまとまったプログラムを開催しています。ADE 2026では<strong>10月23日（金）・24日（土）の2日間で5つのイベント</strong>があり、会場は<strong>Club Panama</strong>（Oostelijke Handelskade 4）と<strong>Q Factory</strong>（Atlantisplein 1）の2か所です。</p><p>王道のアップリフティングから、ハードで速いレイブ系まで、イベントごとに音が違うので、好みのスタイルで選ぶのがおすすめです。以下の情報は、すべてLuminosityの公式イベントページによるものです。</p>`,
        },
        {
          heading: '10月23日（金）：This Is Trance!（Club Panama）',
          body: `<h3>昼の部：14:00〜21:00</h3><p>「純粋なアップリフティング、エモーショナル、ハイエナジーなトランス」がテーマ。（<a href="https://luminosity-events.nl/events/luminosity-pres-this-is-trance-ade-by-day/" target="_blank" rel="noopener">公式ページ</a>）</p><table><thead><tr><th>ルーム</th><th>時間</th><th>アーティスト</th></tr></thead><tbody><tr><td>Main Room</td><td>14:00〜15:00</td><td>Factoria</td></tr><tr><td>Main Room</td><td>15:00〜16:00</td><td>Amber Revival</td></tr><tr><td>Main Room</td><td>16:00〜17:00</td><td>Doppenberg</td></tr><tr><td>Main Room</td><td>17:00〜18:30</td><td><a href="/artists/daxson">Daxson</a></td></tr><tr><td>Main Room</td><td>18:30〜20:00</td><td><a href="/artists/aly-and-fila">Aly &amp; Fila</a></td></tr><tr><td>Main Room</td><td>20:00〜21:00</td><td>Asteroid</td></tr><tr><td>Studio</td><td>14:00〜15:15</td><td>Peter Steele</td></tr><tr><td>Studio</td><td>15:15〜16:30</td><td>ECO</td></tr><tr><td>Studio</td><td>16:30〜17:45</td><td>Enigma State</td></tr><tr><td>Studio</td><td>17:45〜19:00</td><td><a href="/artists/ferry-tayle">Ferry Tayle</a></td></tr><tr><td>Studio</td><td>19:00〜20:00</td><td><a href="/artists/will-rees">Will Rees</a></td></tr><tr><td>Studio</td><td>20:00〜21:00</td><td>Paul Denton</td></tr></tbody></table><h3>夜の部：22:00〜翌7:00</h3><p>「Luminosityらしいサウンドを一晩中楽しむ」夜。王道のアップリフティング・トランスが中心です。（<a href="https://luminosity-events.nl/events/luminosity-pres-this-is-trance-ade-by-night/" target="_blank" rel="noopener">公式ページ</a>）</p><table><thead><tr><th>ルーム</th><th>時間</th><th>アーティスト</th></tr></thead><tbody><tr><td>Main Room</td><td>22:00〜23:30</td><td>Mode&#257;</td></tr><tr><td>Main Room</td><td>23:30〜翌1:00</td><td><a href="/artists/john-ocallaghan">John O&rsquo;Callaghan</a></td></tr><tr><td>Main Room</td><td>翌1:00〜2:30</td><td><a href="/artists/bryan-kearney">Bryan Kearney</a></td></tr><tr><td>Main Room</td><td>翌2:30〜4:00</td><td><a href="/artists/mauro-picotto">Mauro Picotto</a></td></tr><tr><td>Main Room</td><td>翌4:00〜5:30</td><td>Will Rees &amp; Paul Denton pres. Parallel Worlds</td></tr><tr><td>Main Room</td><td>翌5:30〜7:00</td><td><a href="/artists/darren-porter">Darren Porter</a></td></tr><tr><td>Studio</td><td>23:00〜翌0:00</td><td>Arctic Barbers b2b Resolve</td></tr><tr><td>Studio</td><td>翌0:00〜2:00</td><td>Enigma State</td></tr><tr><td>Studio</td><td>翌2:00〜4:00</td><td>Factoria &amp; Grant Trowbridge pres. Giants In The Mist</td></tr><tr><td>Studio</td><td>翌4:00〜5:30</td><td>Andrea Ribeca</td></tr></tbody></table>`,
        },
        {
          heading: '10月24日（土）：Q Factory',
          body: `<h3>ADE Rave 昼の部：14:00〜21:00</h3><p>「ヒプノティックなトランス、ドライヴするリズム、ハードなグルーヴ、倉庫のような生々しいエネルギー」。出演はJoyhauser、Mha Iri、Mode&#257;、Nifra、Nikolauss、T78、<a href="/artists/will-atkinson">Will Atkinson</a>。（<a href="https://luminosity-events.nl/events/ade-rave-by-day/" target="_blank" rel="noopener">公式ページ</a>）</p><h3>Infinity 昼の部：14:00〜21:00</h3><p>「メロディック、プログレッシブで、エモーショナルかつ重層的な音楽」がテーマ。出演時間はSusan Right（14:00）、<a href="/artists/estiva">Estiva</a>（15:30）、Mitch de Klein（16:45）、Romain Garcia（18:00）、Joachim Pastor（19:30）。（<a href="https://luminosity-events.nl/events/infinity-ade-by-day/" target="_blank" rel="noopener">公式ページ</a>）</p><h3>ADE Rave 夜の部：22:00〜翌6:00</h3><p>「トランスとアンダーグラウンドが出会う場所。ハードなエッジ、速いテンポ、アシッドの質感」。<strong>Main Room：</strong>Amber Broos、<a href="/artists/ben-nicky">Ben Nicky</a>、Billy Gillies、Sarah de Warren、Thick As Thieves（Mark Sherry &amp; David Forbes）、VE/RA。<strong>Studio：</strong>Alex Di Stefano、Andrea Scopsi、Dan Harrison、Ahmed Helmy &amp; Doppenberg pres. HEL:BRG、Indecent Noise、Jordan Tilstone、Nikolauss、Renegade System。（<a href="https://luminosity-events.nl/events/ade-rave-by-night/" target="_blank" rel="noopener">公式ページ</a>）</p>`,
        },
        {
          heading: 'どれを選ぶ？',
          body: `<table><thead><tr><th>イベント</th><th>日時</th><th>会場</th><th>サウンド</th></tr></thead><tbody><tr><td>This Is Trance! 昼</td><td>金 14:00〜21:00</td><td>Club Panama</td><td>アップリフティング、エモーショナル</td></tr><tr><td>This Is Trance! 夜</td><td>金 22:00〜翌7:00</td><td>Club Panama</td><td>王道アップリフティングを一晩中</td></tr><tr><td>ADE Rave 昼</td><td>土 14:00〜21:00</td><td>Q Factory</td><td>ヒプノティック、ハード寄り</td></tr><tr><td>Infinity 昼</td><td>土 14:00〜21:00</td><td>Q Factory</td><td>メロディック、プログレッシブ</td></tr><tr><td>ADE Rave 夜</td><td>土 22:00〜翌6:00</td><td>Q Factory</td><td>ハード、高速、アシッド</td></tr></tbody></table><p>夏のビーチフェスに近い音が好きなら、金曜のClub Panama。土曜はメロディック系（Infinity）とハード系（ADE Rave）に分かれます。</p>`,
        },
        {
          heading: 'ADE 2026のほかのイベント',
          body: `<p>Armin van Buuren、In Trance We Trust、Paul van Dykのオープン・トゥ・クローズなどは<a href="/blog/ade-2026-trance-guide">ADE 2026 トランス・ガイド</a>にまとめています。チケットと最新情報は<a href="https://luminosity-events.nl/" target="_blank" rel="noopener">Luminosity公式サイト</a>で確認してください。</p>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>Luminosityは夏のビーチフェスのイメージが強かったので、10月のアムステルダムでもこれだけのイベントをやっているのは嬉しい発見でした。</p>`,
        },
      ],
    },
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'armin-van-buuren-ade-2026-gashouder',
    date: '2026-10-26',
    readTime: 5,
    tags: ['armin-van-buuren', 'ade', 'amsterdam', 'asot', 'events'],
    en: {
      title: 'Armin van Buuren at ADE 2026: Gashouder Opening with Benwal',
      description: 'Armin van Buuren opens ADE 2026 at Gashouder on 21 October with Benwal. Timetable, the Armin b2b Benwal set, the venue’s reopening and his new single.',
      excerpt: 'Armin van Buuren opened Amsterdam Dance Event 2026 at the reopened Gashouder on 21 October, b2b with Benwal. Timetable, lineup and a recap of how the night went.',
      content: [
        {
          heading: 'The Night at a Glance',
          body: `<p><a href="/artists/armin-van-buuren">Armin van Buuren</a> opens <strong>Amsterdam Dance Event 2026</strong> on <strong>Wednesday 21 October</strong> at <strong>Gashouder</strong> in Amsterdam, sharing the bill with Dutch hard house artist <strong>Benwal</strong>. Doors open at 23:00 and the night runs until 06:00. The event is 18+.</p><p>The <a href="https://gashouder.nl/en/agenda/armin-van-buuren-and-benwal" target="_blank" rel="noopener">Gashouder event page</a> lists the night as sold out, with resale tickets available. ADE itself runs from 21 to 25 October and is celebrating its 30th year; see our <a href="/blog/ade-2026-trance-guide">ADE 2026 Trance Guide</a> for the rest of the week.</p>`,
        },
        {
          heading: 'Timetable',
          body: `<p>The official timetable from the <a href="https://gashouder.nl/en/agenda/armin-van-buuren-and-benwal" target="_blank" rel="noopener">Gashouder event page</a>:</p><table><thead><tr><th>Time</th><th>Artist</th></tr></thead><tbody><tr><td>23:00&ndash;01:00</td><td>IDEMI</td></tr><tr><td>01:00&ndash;02:15</td><td>Benwal</td></tr><tr><td>02:15&ndash;03:15</td><td>Armin van Buuren b2b Benwal</td></tr><tr><td>03:15&ndash;04:30</td><td>Armin van Buuren</td></tr><tr><td>04:30&ndash;06:00</td><td>Olive Anguz</td></tr></tbody></table><p>The highlight for many will be the one-hour <strong>Armin van Buuren b2b Benwal</strong> set from 02:15, followed by 75 minutes of Armin on his own.</p>`,
        },
        {
          heading: 'Who Is Benwal?',
          body: `<p><a href="https://djmag.com/news/armin-van-buuren-announces-ade-opening-party-gashouder" target="_blank" rel="noopener">DJ Mag</a> describes Benwal as a &ldquo;Dutch hard house revivalist&rdquo;. The Gashouder page frames the night as the two artists bringing &ldquo;their worlds together on one dance floor&rdquo; &mdash; Armin&rsquo;s trance and Benwal&rsquo;s hard house &mdash; which is what makes the b2b set unusual.</p>`,
        },
        {
          heading: 'Gashouder&rsquo;s Return',
          body: `<p>According to <a href="https://djmag.com/news/armin-van-buuren-announces-ade-opening-party-gashouder" target="_blank" rel="noopener">DJ Mag</a>, Gashouder is reopening for ADE after renovations that began in January 2025. <a href="https://mixmagnl.com/read/gashouder-returns-to-ade-with-seven-show-preview-of-its-new-era-news" target="_blank" rel="noopener">Mixmag NL</a> reports that the ADE shows are a pre-opening season ahead of a full reopening in November, with seven ADE showcases from 21 to 25 October. Armin&rsquo;s night is the opening show of that series.</p><p><a href="https://mixmagnl.com/read/gashouder-returns-to-ade-with-seven-show-preview-of-its-new-era-news" target="_blank" rel="noopener">Mixmag NL</a> also notes the venue&rsquo;s long history with electronic music, including Awakenings events and landmark live performances in its circular hall.</p>`,
        },
        {
          heading: 'How the Night Went',
          body: `<p>According to a review by Seth de Wildt for <a href="https://3voor12.vpro.nl/artikelen/ade26-armin-van-buuren-en-benwal-toveren-gashouder-om-tot-trancetempel" target="_blank" rel="noopener">VPRO 3voor12</a>, the night was the venue&rsquo;s first real party since its roughly 18-month renovation closure (the official reopening follows on 30 October), with the basement still closed and toilets and lockers in a tent outside. The reviewer describes a euphoric mood with a clear generational split in the crowd &mdash; younger fans for Benwal, older fans for Armin.</p><p>Benwal opened his solo slot with a laser &ldquo;UFO&rdquo; descending from the roof, playing piano-driven euphoric hard house that stayed in that lane through to his last record. The b2b hour opened with a heavy trance track dropped straight from Benwal&rsquo;s hard house, included a trance remix of Pegassi&rsquo;s &ldquo;227kg,&rdquo; and closed on Armin&rsquo;s own &ldquo;This Is What It Feels Like&rdquo; &mdash; the reviewer wished it had run longer.</p><p>Armin&rsquo;s solo 75 minutes opened hard enough to make the concrete floor vibrate, mixed in new releases plus brief acid and techno detours, and peaked with trance remixes of &ldquo;Born Slippy,&rdquo; Faithless&rsquo;s &ldquo;Insomnia&rdquo; and Ben Hemsley&rsquo;s remix of &ldquo;In And Out Of Love&rdquo; &mdash; a stretch the reviewer called a genuine goosebumps moment. The review&rsquo;s conclusion: trance is back in fashion.</p>`,
        },
        {
          heading: 'Armin&rsquo;s New Single: &lsquo;U Got 2 Know&rsquo;',
          body: `<p>On the day the Gashouder show was announced (22 May 2026), Armin released &lsquo;U Got 2 Know&rsquo; with Hannah Laing and Wippenburg, a reimagining of Capella&rsquo;s 1993 dance anthem of the same name (source: <a href="https://djmag.com/news/armin-van-buuren-announces-ade-opening-party-gashouder" target="_blank" rel="noopener">DJ Mag</a>).</p>`,
        },
        {
          heading: 'More Armin in 2026&ndash;27',
          body: `<ul><li><a href="/blog/asot-london-drumsheds-2026">A State of Trance London</a> &mdash; 14 November 2026 at Drumsheds</li><li><a href="/blog/asot-rotterdam-2027-guide">A State of Trance Rotterdam 2027</a> &mdash; 26&ndash;27 February 2027 at Rotterdam Ahoy, including a five-hour Friday set</li><li><a href="/blog/asot-los-angeles-2027">A State of Trance LA</a> &mdash; 11&ndash;12 June 2027</li></ul>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>As a weekly A State of Trance listener, a trance and hard house b2b is not something I expected from Armin, which is exactly why this night stands out in the ADE programme.</p>`,
        },
      ],
    },
    ja: {
      title: 'ADE 2026のArmin van Buuren：GashouderでBenwalとオープニング',
      description: 'Armin van Buurenが10月21日、GashouderでBenwalとともにADE 2026の幕を開けます。タイムテーブル、b2bセット、会場の再始動、新曲をまとめました。',
      excerpt: 'Armin van Buurenが2026年10月21日、リニューアルしたGashouderでADEのオープニングを飾りました。タイムテーブル、ラインナップ、当日の様子のリキャップ。',
      content: [
        {
          heading: 'イベント概要',
          body: `<p><a href="/artists/armin-van-buuren">Armin van Buuren</a>が<strong>2026年10月21日（水）</strong>、アムステルダムの<strong>Gashouder</strong>で<strong>Amsterdam Dance Event 2026</strong>の幕を開けます。共演はオランダのハードハウス系アーティスト<strong>Benwal</strong>。開場は23:00、終演は翌6:00で、18歳以上限定です。</p><p><a href="https://gashouder.nl/en/agenda/armin-van-buuren-and-benwal" target="_blank" rel="noopener">Gashouderのイベントページ</a>ではチケットは売り切れと掲載されていて、リセールが利用できます。ADEは10月21〜25日に開催され、今年で30周年。ほかのイベントは<a href="/blog/ade-2026-trance-guide">ADE 2026 トランス・ガイド</a>をどうぞ。</p>`,
        },
        {
          heading: 'タイムテーブル',
          body: `<p><a href="https://gashouder.nl/en/agenda/armin-van-buuren-and-benwal" target="_blank" rel="noopener">Gashouderのイベントページ</a>に掲載されている公式タイムテーブルです。</p><table><thead><tr><th>時間</th><th>出演</th></tr></thead><tbody><tr><td>23:00&ndash;01:00</td><td>IDEMI</td></tr><tr><td>01:00&ndash;02:15</td><td>Benwal</td></tr><tr><td>02:15&ndash;03:15</td><td>Armin van Buuren b2b Benwal</td></tr><tr><td>03:15&ndash;04:30</td><td>Armin van Buuren</td></tr><tr><td>04:30&ndash;06:00</td><td>Olive Anguz</td></tr></tbody></table><p>注目は2:15からの1時間、<strong>Armin van Buuren b2b Benwal</strong>。その後75分間、Arminのソロが続きます。</p>`,
        },
        {
          heading: 'Benwalとは？',
          body: `<p><a href="https://djmag.com/news/armin-van-buuren-announces-ade-opening-party-gashouder" target="_blank" rel="noopener">DJ Mag</a>はBenwalを「オランダのハードハウス・リバイバリスト」と紹介しています。Gashouderのページでは、2人が「それぞれの世界をひとつのダンスフロアに持ち寄る」夜とされていて、Arminのトランスと、Benwalのハードハウスが交わるb2bは、なかなか見られない組み合わせです。</p>`,
        },
        {
          heading: 'Gashouderの再始動',
          body: `<p><a href="https://djmag.com/news/armin-van-buuren-announces-ade-opening-party-gashouder" target="_blank" rel="noopener">DJ Mag</a>によると、Gashouderは2025年1月から改装に入っていて、ADEに合わせて再び開きます。<a href="https://mixmagnl.com/read/gashouder-returns-to-ade-with-seven-show-preview-of-its-new-era-news" target="_blank" rel="noopener">Mixmag NL</a>によると、ADEの公演は11月の本格オープンに先がけたプレオープン期間で、10月21〜25日に7つのショーケースが行われます。Arminの夜は、その初日のオープニング・ショーです。</p><p><a href="https://mixmagnl.com/read/gashouder-returns-to-ade-with-seven-show-preview-of-its-new-era-news" target="_blank" rel="noopener">Mixmag NL</a>は、Awakeningsのイベントや、円形ホールでの歴史的なライブなど、この会場とエレクトロニック・ミュージックの長い歴史にも触れています。</p>`,
        },
        {
          heading: '当日の様子',
          body: `<p>Seth de Wildt氏による<a href="https://3voor12.vpro.nl/artikelen/ade26-armin-van-buuren-en-benwal-toveren-gashouder-om-tot-trancetempel" target="_blank" rel="noopener">VPRO 3voor12</a>のレビューによると、この夜は約1年半の改装休業を経た会場で初めての本格的なパーティーだったとのこと（正式な再オープンは10月30日）。地下フロアはまだ閉鎖中で、トイレとロッカーは屋外のテントに設置されていました。会場の空気感は非常に高揚していて、客層には世代差がはっきり見られ、若い層はBenwal目当て、年齢層が高めのファンはArmin目当てだったと記されています。</p><p>Benwalのソロ・スロットは、天井からレーザーの「UFO」が降りてくる演出で開幕。ピアノ主体のユーフォリック・ハードハウスが中心で、最後の曲までそのスタイルを貫きました。続くb2bの1時間は、Benwalのハードハウスから一転、重いトランス・トラックで開幕し、Pegassiのトランスリミックスによる「227kg」も披露。最後はArmin自身の「This Is What It Feels Like」で締めくくり、レビュアーは「もっと長く続いて欲しかった」と記しています。</p><p>続くArminの75分間のソロは、コンクリートの床が振動するほどハードな一曲で開幕。新曲を中心に構成しつつ、アシッドやテクノへの短い脱線も挟みました。クライマックスは「Born Slippy」、Faithlessの「Insomnia」、Ben Hemsleyリミックスの「In And Out Of Love」といったトランス・リミックスの連続で、レビュアーはこれを「鳥肌が立つ瞬間」と表現。レビューの結びは「トランスはまた流行っている」でした。</p>`,
        },
        {
          heading: 'Arminの新曲「U Got 2 Know」',
          body: `<p>Gashouder公演が発表された2026年5月22日、ArminはHannah Laing、Wippenburgとの新曲「U Got 2 Know」をリリースしました。Capellaの1993年のダンス・アンセム（同名曲）を作り直したものです（出典：<a href="https://djmag.com/news/armin-van-buuren-announces-ade-opening-party-gashouder" target="_blank" rel="noopener">DJ Mag</a>）。</p>`,
        },
        {
          heading: '2026〜27年のArminの予定',
          body: `<ul><li><a href="/blog/asot-london-drumsheds-2026">A State of Trance London</a>：2026年11月14日、Drumsheds</li><li><a href="/blog/asot-rotterdam-2027-guide">A State of Trance Rotterdam 2027</a>：2027年2月26〜27日、Rotterdam Ahoy（金曜は5時間セット）</li><li><a href="/blog/asot-los-angeles-2027">A State of Trance LA</a>：2027年6月11〜12日</li></ul>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>毎週A State of Tranceを聴いている身としては、Arminがハードハウスとb2bをするのは意外で、だからこそADEの中でもこの夜は特に気になっています。</p>`,
        },
      ],
    },
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'in-trance-we-trust-ade-2026',
    date: '2026-10-16',
    readTime: 3,
    tags: ['black-hole-recordings', 'ade', 'amsterdam', 'events', 'uplifting'],
    en: {
      title: 'In Trance We Trust at ADE 2026: Lineup, Times & Venue',
      description: 'In Trance We Trust returns to Amsterdam Dance Event after eight years: 21 October 2026 at Thuishaven, with BT, Ciaran McAuley, Craig Connelly and more.',
      excerpt: 'Black Hole Recordings’ In Trance We Trust returns to ADE for the first time in eight years on 21 October 2026 at Thuishaven. Here are the lineup, times and venue.',
      content: [
        {
          heading: 'The Night at a Glance',
          body: `<p><strong>In Trance We Trust</strong> returns to <strong>Amsterdam Dance Event</strong> on <strong>Wednesday 21 October 2026</strong> at <strong>Thuishaven</strong> (Contactweg 68, Amsterdam), from <strong>21:00 to 04:00</strong>. According to <a href="https://www.blackholerecordings.com/news/in-trance-we-trust-returns-for-amsterdam-dance-event" target="_blank" rel="noopener">Black Hole Recordings</a>, it is the label&rsquo;s first ADE night in eight years, with its biggest lineup to date and a night devoted entirely to trance.</p><p>Tickets are sold through the label&rsquo;s ticket link; <a href="https://www.iamsterdam.com/en/whats-on/calendar/nightlife/clubbing/in-trance-we-trust" target="_blank" rel="noopener">I amsterdam</a> lists prices from &euro;34.99.</p>`,
        },
        {
          heading: 'Lineup',
          body: `<p>Seven artists who have shaped the label&rsquo;s history: <a href="/artists/bt">BT</a>, Ciaran McAuley, Craig Connelly, Maria Healy, <a href="/artists/sneijder">Sneijder</a>, Virtual Vault and <a href="/artists/xijaro-and-pitch">XiJaro &amp; Pitch</a>. The label promises &ldquo;uplifting and exclusive ADE performances&rdquo; from the lineup.</p>`,
        },
        {
          heading: 'About In Trance We Trust',
          body: `<p><a href="https://www.blackholerecordings.com/news/in-trance-we-trust-returns-for-amsterdam-dance-event" target="_blank" rel="noopener">Black Hole Recordings</a> describes In Trance We Trust as &ldquo;one of the premier imprints in trance music&rdquo; for more than 25 years. It is part of the <a href="/labels/black-hole-recordings">Black Hole Recordings</a> family. If you like uplifting trance, this is one of the most focused trance nights of ADE week.</p>`,
        },
        {
          heading: 'The Venue: Thuishaven',
          body: `<p>Thuishaven is an industrial-style site with several stages and bars. <a href="https://www.iamsterdam.com/en/whats-on/calendar/nightlife/clubbing/in-trance-we-trust" target="_blank" rel="noopener">I amsterdam</a> notes that in winter all stages are indoors, in heated tents and a hangar.</p>`,
        },
        {
          heading: 'Same Night at ADE',
          body: `<p>Wednesday 21 October is ADE&rsquo;s opening night. <a href="/blog/armin-van-buuren-ade-2026-gashouder">Armin van Buuren &amp; Benwal at Gashouder</a> runs the same evening, so plan your route if you want to catch both. For the full week, see our <a href="/blog/ade-2026-trance-guide">ADE 2026 Trance Guide</a>.</p>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>BT on an In Trance We Trust lineup is a reminder of how far back this label goes, and it is good to see it back at ADE.</p>`,
        },
      ],
    },
    ja: {
      title: 'ADE 2026のIn Trance We Trust：ラインナップ・時間・会場',
      description: 'In Trance We Trustが8年ぶりにAmsterdam Dance Eventへ。2026年10月21日、Thuishavenで開催。BT、Ciaran McAuley、Craig Connellyほか。',
      excerpt: 'Black Hole RecordingsのIn Trance We Trustが、8年ぶりにADEに帰ってきます。2026年10月21日、Thuishavenで開催。ラインナップと時間、会場を紹介します。',
      content: [
        {
          heading: 'イベント概要',
          body: `<p><strong>In Trance We Trust</strong>が<strong>2026年10月21日（水）</strong>、<strong>Amsterdam Dance Event</strong>に合わせて<strong>Thuishaven</strong>（Contactweg 68）で開催されます。時間は<strong>21:00〜翌4:00</strong>。<a href="https://www.blackholerecordings.com/news/in-trance-we-trust-returns-for-amsterdam-dance-event" target="_blank" rel="noopener">Black Hole Recordings</a>によると、ADEでの開催は8年ぶりで、レーベル史上最大のラインナップ、そして一晩すべてトランスというナイトです。</p><p>チケットはレーベルの販売リンクから購入できます。<a href="https://www.iamsterdam.com/en/whats-on/calendar/nightlife/clubbing/in-trance-we-trust" target="_blank" rel="noopener">I amsterdam</a>によると価格は€34.99からです。</p>`,
        },
        {
          heading: 'ラインナップ',
          body: `<p>レーベルの歴史をつくってきた7組：<a href="/artists/bt">BT</a>、Ciaran McAuley、Craig Connelly、Maria Healy、<a href="/artists/sneijder">Sneijder</a>、Virtual Vault、<a href="/artists/xijaro-and-pitch">XiJaro &amp; Pitch</a>。レーベルは「アップリフティングで、ADEならではのパフォーマンス」を予告しています。</p>`,
        },
        {
          heading: 'In Trance We Trustとは',
          body: `<p><a href="https://www.blackholerecordings.com/news/in-trance-we-trust-returns-for-amsterdam-dance-event" target="_blank" rel="noopener">Black Hole Recordings</a>によると、In Trance We Trustは25年以上にわたり「トランスを代表するレーベルのひとつ」。<a href="/labels/black-hole-recordings">Black Hole Recordings</a>のファミリーに属しています。アップリフティング・トランスが好きなら、ADE週間でもいちばんトランスに振り切った夜のひとつです。</p>`,
        },
        {
          heading: '会場：Thuishaven',
          body: `<p>Thuishavenは工業的な雰囲気の会場で、複数のステージとバーがあります。<a href="https://www.iamsterdam.com/en/whats-on/calendar/nightlife/clubbing/in-trance-we-trust" target="_blank" rel="noopener">I amsterdam</a>によると、冬場はすべてのステージが暖房付きのテントと格納庫の中になります。</p>`,
        },
        {
          heading: '同じ夜のADE',
          body: `<p>10月21日（水）はADEの初日。同じ夜に<a href="/blog/armin-van-buuren-ade-2026-gashouder">GashouderのArmin van Buuren &amp; Benwal</a>もあるので、両方行きたい人は移動を計画しておきましょう。1週間の全体像は<a href="/blog/ade-2026-trance-guide">ADE 2026 トランス・ガイド</a>へ。</p>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>In Trance We TrustのラインナップにBTの名前があると、このレーベルの歴史の長さを改めて感じます。ADEに戻ってきてくれたのが嬉しいです。</p>`,
        },
      ],
    },
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'paul-van-dyk-ade-2026-melkweg',
    date: '2026-10-16',
    readTime: 3,
    tags: ['paul-van-dyk', 'ade', 'amsterdam', 'events', 'open-to-close'],
    en: {
      title: 'Paul van Dyk at ADE 2026: Open-to-Close at Melkweg',
      description: 'Paul van Dyk plays an open-to-close set at Melkweg’s Rabo room on 24 October 2026, his fifth consecutive ADE show there. Times, tickets and what to expect.',
      excerpt: 'Paul van Dyk returns to Melkweg for ADE 2026 on 24 October with an open-to-close set in the Rabo room — his fifth consecutive ADE show at the venue.',
      content: [
        {
          heading: 'The Night at a Glance',
          body: `<p><a href="/artists/paul-van-dyk">Paul van Dyk</a> plays an <strong>open-to-close set</strong> at <strong>Melkweg</strong> (Rabo room, Lijnbaansgracht 234A, Amsterdam) on <strong>Saturday 24 October 2026</strong> during Amsterdam Dance Event. The show starts at 18:00; the <a href="https://www.amsterdam-dance-event.nl/en/program/2026/paul-van-dyk/2807320/" target="_blank" rel="noopener">ADE programme</a> lists it until 22:30. It is 18+.</p><p><a href="https://www.melkweg.nl/en/agenda/paul-van-dyk-24-10-2026" target="_blank" rel="noopener">Melkweg</a> lists the event as sold out (regular ticket &euro;39.50), so check the official resale options if you still want to go.</p>`,
        },
        {
          heading: 'What Open-to-Close Means',
          body: `<p>An open-to-close set means Paul van Dyk plays the whole night himself, with no support acts. The <a href="https://the-everyday-agency.prezly.com/paul-van-dyk-returns-to-ade-with-open-to-close-set-at-melkwegs-rabozaal" target="_blank" rel="noopener">press release</a> describes it as an &ldquo;immersive, all-night journey through sound&rdquo; with &ldquo;complete artistic control from start to finish&rdquo;, moving from melodic material to peak-time moments.</p>`,
        },
        {
          heading: 'Five Years at Melkweg',
          body: `<p>According to the <a href="https://the-everyday-agency.prezly.com/paul-van-dyk-returns-to-ade-with-open-to-close-set-at-melkwegs-rabozaal" target="_blank" rel="noopener">press release</a>, this is Paul van Dyk&rsquo;s fifth consecutive ADE appearance at Melkweg, and each edition has sold out. In his words: &ldquo;I&rsquo;m incredibly excited to make my return to ADE this October at one of Amsterdam&rsquo;s most iconic music venues.&rdquo;</p>`,
        },
        {
          heading: 'New Music',
          body: `<p>The set will include new and unreleased music, with previews from upcoming projects and fresh releases from the <a href="/labels/vandit-records">VANDIT Records</a> label group (source: <a href="https://the-everyday-agency.prezly.com/paul-van-dyk-returns-to-ade-with-open-to-close-set-at-melkwegs-rabozaal" target="_blank" rel="noopener">press release</a>).</p>`,
        },
        {
          heading: 'Same Day at ADE',
          body: `<p>Saturday 24 October is also the day of Luminosity&rsquo;s ADE Rave and Infinity at Q Factory &mdash; see <a href="/blog/luminosity-ade-2026">Luminosity at ADE 2026</a>. For the full week, see our <a href="/blog/ade-2026-trance-guide">ADE 2026 Trance Guide</a>.</p>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>An open-to-close set is the best way to hear how a DJ builds a night, and Paul van Dyk has been doing this at Melkweg long enough that it has become an ADE tradition.</p>`,
        },
      ],
    },
    ja: {
      title: 'ADE 2026のPaul van Dyk：Melkwegでオープン・トゥ・クローズ',
      description: 'Paul van Dykが2026年10月24日、MelkwegのRaboルームでオープン・トゥ・クローズ。同会場でのADE公演は5年連続。時間、チケット、見どころをまとめました。',
      excerpt: 'Paul van DykがADE 2026に合わせて、10月24日にMelkwegでオープン・トゥ・クローズを披露します。同会場でのADE公演は5年連続です。',
      content: [
        {
          heading: 'イベント概要',
          body: `<p><a href="/artists/paul-van-dyk">Paul van Dyk</a>が<strong>2026年10月24日（土）</strong>、Amsterdam Dance Event期間中に<strong>Melkweg</strong>（Raboルーム、Lijnbaansgracht 234A）で<strong>オープン・トゥ・クローズ</strong>を行います。開始は18:00で、<a href="https://www.amsterdam-dance-event.nl/en/program/2026/paul-van-dyk/2807320/" target="_blank" rel="noopener">ADEの番組表</a>では22:30までと掲載されています。18歳以上限定です。</p><p><a href="https://www.melkweg.nl/en/agenda/paul-van-dyk-24-10-2026" target="_blank" rel="noopener">Melkweg</a>ではチケットは売り切れと掲載されています（通常価格€39.50）。これから行きたい人は、公式のリセールを確認してください。</p>`,
        },
        {
          heading: 'オープン・トゥ・クローズとは',
          body: `<p>前座なしで、最初から最後までPaul van Dykが一人で回すセットのことです。<a href="https://the-everyday-agency.prezly.com/paul-van-dyk-returns-to-ade-with-open-to-close-set-at-melkwegs-rabozaal" target="_blank" rel="noopener">プレスリリース</a>では「音を巡る没入型の一夜の旅」と表現され、最初から最後まで本人が流れを組み立て、メロディックな序盤からピークタイムへと展開していくとされています。</p>`,
        },
        {
          heading: 'Melkwegで5年連続',
          body: `<p><a href="https://the-everyday-agency.prezly.com/paul-van-dyk-returns-to-ade-with-open-to-close-set-at-melkwegs-rabozaal" target="_blank" rel="noopener">プレスリリース</a>によると、MelkwegでのADE公演は5年連続で、これまでの回はすべて売り切れています。本人は「この10月、アムステルダムを代表する会場のひとつでADEに戻ってこられるのが本当に楽しみ」とコメントしています。</p>`,
        },
        {
          heading: '新しい音楽も',
          body: `<p>セットには未発表曲も含まれ、今後のプロジェクトの先行披露や、<a href="/labels/vandit-records">VANDIT Records</a>レーベル・グループの新作も流れる予定です（出典：<a href="https://the-everyday-agency.prezly.com/paul-van-dyk-returns-to-ade-with-open-to-close-set-at-melkwegs-rabozaal" target="_blank" rel="noopener">プレスリリース</a>）。</p>`,
        },
        {
          heading: '同じ日のADE',
          body: `<p>10月24日（土）は、Q FactoryでLuminosityのADE RaveとInfinityもあります。詳しくは<a href="/blog/luminosity-ade-2026">ADE 2026のLuminosity</a>へ。1週間の全体像は<a href="/blog/ade-2026-trance-guide">ADE 2026 トランス・ガイド</a>をどうぞ。</p>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>オープン・トゥ・クローズは、DJが一晩をどう組み立てるかがいちばんよく分かる形式です。MelkwegのPaul van Dykは、もうADEの恒例になっていますね。</p>`,
        },
      ],
    },
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'find-your-harmony-500-ade-2026',
    date: '2026-10-16',
    readTime: 3,
    tags: ['andrew-rayel', 'ade', 'amsterdam', 'radio', 'events'],
    en: {
      title: 'Find Your Harmony 500 at ADE 2026: Andrew Rayel’s Club Night',
      description: 'Andrew Rayel celebrates the 500th episode of Find Your Harmony at ADE on 24 October 2026 at Desmet Studio’s, Amsterdam — a 230-capacity club night.',
      excerpt: 'Andrew Rayel marks 500 episodes of his Find Your Harmony radio show with an intimate club night at ADE 2026 on 24 October. Date, venue, lineup status and background.',
      content: [
        {
          heading: 'The Night at a Glance',
          body: `<p><a href="/artists/andrew-rayel">Andrew Rayel</a> celebrates the <strong>500th episode</strong> of his radio show <strong>Find Your Harmony</strong> with a club night during Amsterdam Dance Event: <strong>Saturday 24 October 2026</strong>, <strong>22:00 to 04:00</strong>, at <strong>Desmet Studio&rsquo;s</strong> (Plantage Middenlaan 4A, Amsterdam).</p><p><a href="https://www.iamsterdam.com/en/whats-on/calendar/nightlife/clubbing/find-your-harmony-ade-2026-fyh-500" target="_blank" rel="noopener">I amsterdam</a> describes it as an &ldquo;intimate club night&rdquo; of trance and melodic dance, in a venue that holds a maximum of 230 people, and advises fans not to wait too long for tickets.</p>`,
        },
        {
          heading: 'Lineup',
          body: `<p>Andrew Rayel headlines. The <a href="https://www.amsterdam-dance-event.nl/en/program/2026/find-your-harmony/2802455/" target="_blank" rel="noopener">ADE programme</a> still lists the rest of the lineup as TBA, so check the ticket page for updates. We will add names here once they are confirmed.</p>`,
        },
        {
          heading: 'Find Your Harmony at 500',
          body: `<p>Find Your Harmony is Andrew Rayel&rsquo;s weekly radio show. In an <a href="https://www.armadamusic.com/news/andrew-rayel-releases-official-anthem-for-find-your-harmony-250-and-rebrands-label" target="_blank" rel="noopener">Armada Music</a> news post from 2021, he said the show &ldquo;was started back in 2012&rdquo;. The 250th episode was marked with a seven-hour broadcast on 31 March 2021, alongside the anthem &lsquo;My Harmony&rsquo; and the renaming of his label to Find Your Harmony. Episode 500 now gets a club night of its own at ADE. You can find the show on our <a href="/radio">radio shows page</a>.</p>`,
        },
        {
          heading: 'Why It Stands Out',
          body: `<p>Most big trance nights at ADE are in large venues. A 230-capacity room for a radio milestone is unusual, and it puts listeners much closer to the DJ booth than a festival stage would.</p>`,
        },
        {
          heading: 'Same Night at ADE',
          body: `<p>Saturday 24 October is a busy night for trance in Amsterdam: <a href="/blog/paul-van-dyk-ade-2026-melkweg">Paul van Dyk at Melkweg</a> (from 18:00) and <a href="/blog/luminosity-ade-2026">Luminosity&rsquo;s ADE Rave</a> at Q Factory both fall on the same day. See the full week in our <a href="/blog/ade-2026-trance-guide">ADE 2026 Trance Guide</a>.</p>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>Weekly radio shows are how many of us follow trance, so seeing one reach 500 episodes &mdash; and celebrate it in a small room &mdash; is something I find genuinely appealing.</p>`,
        },
      ],
    },
    ja: {
      title: 'ADE 2026「Find Your Harmony 500」：Andrew Rayelのクラブナイト',
      description: 'Andrew Rayelがラジオ番組Find Your Harmonyの第500回を、2026年10月24日にADEで祝います。会場は定員230人のDesmet Studio’s。日時、ラインナップ、番組の歩み。',
      excerpt: 'Andrew Rayelが、ラジオ番組Find Your Harmonyの500回を記念して、ADE 2026の10月24日に小さな会場でクラブナイトを開きます。日時、会場、ラインナップ、番組の歩みを紹介。',
      content: [
        {
          heading: 'イベント概要',
          body: `<p><a href="/artists/andrew-rayel">Andrew Rayel</a>が、ラジオ番組<strong>Find Your Harmony</strong>の<strong>第500回</strong>を記念して、Amsterdam Dance Event期間中にクラブナイトを開きます。日時は<strong>2026年10月24日（土）22:00〜翌4:00</strong>、会場は<strong>Desmet Studio&rsquo;s</strong>（Plantage Middenlaan 4A）です。</p><p><a href="https://www.iamsterdam.com/en/whats-on/calendar/nightlife/clubbing/find-your-harmony-ade-2026-fyh-500" target="_blank" rel="noopener">I amsterdam</a>によると、トランスとメロディックなダンス・ミュージックの「インティメイトなクラブナイト」で、会場の定員は最大230人。チケットは早めの購入がすすめられています。</p>`,
        },
        {
          heading: 'ラインナップ',
          body: `<p>ヘッドライナーはAndrew Rayel。<a href="https://www.amsterdam-dance-event.nl/en/program/2026/find-your-harmony/2802455/" target="_blank" rel="noopener">ADEの番組表</a>では、ほかの出演者はまだ「TBA（未発表）」です。最新情報はチケットページで確認してください。発表され次第、ここに追記します。</p>`,
        },
        {
          heading: 'Find Your Harmony、500回へ',
          body: `<p>Find Your HarmonyはAndrew Rayelの週刊ラジオ番組です。2021年の<a href="https://www.armadamusic.com/news/andrew-rayel-releases-official-anthem-for-find-your-harmony-250-and-rebrands-label" target="_blank" rel="noopener">Armada Music</a>のニュースで、本人は番組を「2012年に始めた」と語っています。第250回は2021年3月31日に7時間の特別放送で祝われ、同時にアンセム「My Harmony」のリリースと、自身のレーベルの「Find Your Harmony」への改名も行われました。そして第500回は、ADEでのクラブナイトとして祝われます。番組は当サイトの<a href="/radio">ラジオ番組ページ</a>でも紹介しています。</p>`,
        },
        {
          heading: 'この夜の特別さ',
          body: `<p>ADEの大きなトランス・ナイトは、ほとんどが大型会場です。ラジオの節目を230人規模の会場で祝うのは珍しく、フェスのステージよりずっとDJブースの近くで聴けるのが魅力です。</p>`,
        },
        {
          heading: '同じ夜のADE',
          body: `<p>10月24日（土）はトランスが熱い一日。<a href="/blog/paul-van-dyk-ade-2026-melkweg">MelkwegのPaul van Dyk</a>（18:00〜）や、Q Factoryの<a href="/blog/luminosity-ade-2026">LuminosityのADE Rave</a>も同じ日です。1週間の全体像は<a href="/blog/ade-2026-trance-guide">ADE 2026 トランス・ガイド</a>へ。</p>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>毎週のラジオ番組は、トランスを追いかける大事な手段です。その番組が500回を迎えて、しかも小さな会場で祝うというのは、すごく惹かれます。</p>`,
        },
      ],
    },
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'ava-recordings-20-years-ade-2026',
    date: '2026-10-16',
    readTime: 3,
    tags: ['ava-recordings', 'ade', 'amsterdam', 'events', 'tech-trance'],
    en: {
      title: 'AVA Recordings 20 Years at ADE 2026: Lineup & Special Sets',
      description: 'AVA Recordings marks 20 years at ADE on 22 October 2026 at The Tequila Club, Amsterdam: Andy Moor & Adam White’s Whiteroom, Richard Durand, Ferry Tayle and more.',
      excerpt: 'AVA Recordings celebrates 20 years at Amsterdam Dance Event on 22 October 2026 with an intimate show at The Tequila Club. Here are the lineup and special sets.',
      content: [
        {
          heading: 'The Event at a Glance',
          body: `<p><a href="/labels/ava-recordings">AVA Recordings</a> celebrates its 20th anniversary at Amsterdam Dance Event with the <strong>AVA Records 20 Years ADE Special</strong> on <strong>Thursday 22 October 2026</strong>, <strong>15:00 to 22:00</strong>, at <strong>The Tequila Club</strong> (Korte Leidsedwarsstraat 28, Amsterdam).</p><p>The <a href="https://www.amsterdam-dance-event.nl/en/program/2026/ava-records-20-years-ade-special/2829556/" target="_blank" rel="noopener">ADE programme</a> describes it as one of 20 anniversary celebrations around the world, held in an intimate club with limited capacity. Tickets are on sale online, and the event is expected to sell out.</p>`,
        },
        {
          heading: 'Lineup',
          body: `<p>The full lineup: Adam Stark, Adam White, Alan Fullmer, Andy Moor, Dan Stone, <a href="/artists/david-forbes">David Forbes</a>, <a href="/artists/ferry-tayle">Ferry Tayle</a>, MIDI Kittyy, <a href="/artists/richard-durand">Richard Durand</a>, <a href="/artists/rinaly">Rinaly</a> and Somna.</p>`,
        },
        {
          heading: 'Special Sets',
          body: `<ul><li><strong>Andy Moor &amp; Adam White presents Whiteroom</strong> &mdash; billed as a world exclusive.</li><li><strong><a href="/artists/richard-durand">Richard Durand</a></strong> &mdash; an In Search Of Sunrise set.</li><li><strong><a href="/artists/ferry-tayle">Ferry Tayle</a></strong> &mdash; a set marking his own 20-year anniversary.</li><li><strong>Dan Stone</strong> &mdash; an album showcase.</li></ul><p>(Source: <a href="https://www.amsterdam-dance-event.nl/en/program/2026/ava-records-20-years-ade-special/2829556/" target="_blank" rel="noopener">ADE programme</a>.)</p>`,
        },
        {
          heading: 'A Japanese Name on the Bill',
          body: `<p>The lineup includes <a href="/artists/rinaly">Rinaly</a> from Japan, one of the few Japanese artists on a trance lineup at ADE this year. If you follow the Japanese trance scene, this is one to note.</p>`,
        },
        {
          heading: 'Fitting It into Your ADE Week',
          body: `<p>The afternoon-to-evening slot on Thursday makes this easy to combine with other ADE nights. Wednesday has Armin van Buuren at Gashouder and In Trance We Trust; Friday and Saturday have Luminosity, Paul van Dyk and Find Your Harmony 500. See the full week in our <a href="/blog/ade-2026-trance-guide">ADE 2026 Trance Guide</a>.</p>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>Label anniversaries are a good way to hear a label&rsquo;s whole sound in one place, and a small club makes this one feel personal.</p>`,
        },
      ],
    },
    ja: {
      title: 'ADE 2026「AVA Recordings 20周年」：ラインナップと特別セット',
      description: 'AVA Recordingsが20周年を記念し、2026年10月22日にADEでThe Tequila Club公演。Andy Moor & Adam WhiteのWhiteroom、Richard Durand、Ferry Tayle、日本のRinalyも出演。',
      excerpt: 'AVA RecordingsがAmsterdam Dance Eventで20周年を祝います。2026年10月22日、小さなクラブThe Tequila Clubで開催。ラインナップと特別セットを紹介します。',
      content: [
        {
          heading: 'イベント概要',
          body: `<p><a href="/labels/ava-recordings">AVA Recordings</a>が20周年を記念して、Amsterdam Dance Eventで<strong>AVA Records 20 Years ADE Special</strong>を開催します。日時は<strong>2026年10月22日（木）15:00〜22:00</strong>、会場は<strong>The Tequila Club</strong>（Korte Leidsedwarsstraat 28）です。</p><p><a href="https://www.amsterdam-dance-event.nl/en/program/2026/ava-records-20-years-ade-special/2829556/" target="_blank" rel="noopener">ADEの番組表</a>によると、世界20か所で行われる20周年記念イベントのひとつで、定員の少ない小さなクラブで開かれます。チケットはオンラインで販売中で、売り切れが見込まれています。</p>`,
        },
        {
          heading: 'ラインナップ',
          body: `<p>出演はAdam Stark、Adam White、Alan Fullmer、Andy Moor、Dan Stone、<a href="/artists/david-forbes">David Forbes</a>、<a href="/artists/ferry-tayle">Ferry Tayle</a>、MIDI Kittyy、<a href="/artists/richard-durand">Richard Durand</a>、<a href="/artists/rinaly">Rinaly</a>、Somnaです。</p>`,
        },
        {
          heading: '特別セット',
          body: `<ul><li><strong>Andy Moor &amp; Adam White presents Whiteroom</strong>：世界初のセットとして発表。</li><li><strong><a href="/artists/richard-durand">Richard Durand</a></strong>：In Search Of Sunriseのセット。</li><li><strong><a href="/artists/ferry-tayle">Ferry Tayle</a></strong>：自身の20周年を記念したセット。</li><li><strong>Dan Stone</strong>：アルバムのショーケース。</li></ul><p>（出典：<a href="https://www.amsterdam-dance-event.nl/en/program/2026/ava-records-20-years-ade-special/2829556/" target="_blank" rel="noopener">ADEの番組表</a>）</p>`,
        },
        {
          heading: '日本からの出演者',
          body: `<p>ラインナップには日本の<a href="/artists/rinaly">Rinaly</a>も入っています。今年のADEのトランス系ラインナップで、日本人アーティストの名前を見かけるのは貴重です。日本のトランス・シーンを追いかけている人は要チェックです。</p>`,
        },
        {
          heading: 'ADE週間の組み立て方',
          body: `<p>木曜の午後〜夜という時間帯なので、ほかのADEのイベントと組み合わせやすいのも魅力。水曜はGashouderのArmin van BuurenとIn Trance We Trust、金・土曜はLuminosity、Paul van Dyk、Find Your Harmony 500があります。1週間の全体像は<a href="/blog/ade-2026-trance-guide">ADE 2026 トランス・ガイド</a>へ。</p>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>レーベルの周年イベントは、そのレーベルの音をまとめて聴ける貴重な機会です。しかも小さなクラブなので、距離の近さも魅力ですね。</p>`,
        },
      ],
    },
  }
  , // ← ★直前の記事との区切りのカンマ
  {
    slug: 'asot-los-angeles-2027',
    date: '2026-10-16',
    readTime: 4,
    tags: ['asot', 'armin-van-buuren', 'los-angeles', 'festival', 'north-america'],
    en: {
      title: 'A State of Trance LA 2027: Dates, Venue & What We Know',
      description: 'A State of Trance comes to Los Angeles as a two-day festival on 11–12 June 2027. Dates, venue status, tickets, the ASOT Hotel and ASOT’s history in the US.',
      excerpt: 'A State of Trance is coming to Los Angeles for a two-day festival on 11–12 June 2027. Here is what is confirmed so far — dates, venue status, tickets and the ASOT Hotel.',
      content: [
        {
          heading: 'The Announcement',
          body: `<p><a href="/artists/armin-van-buuren">Armin van Buuren</a>&rsquo;s A State of Trance is coming to Los Angeles as a two-day festival: <strong>A State of Trance LA</strong> takes place on <strong>11 and 12 June 2027</strong>. The <a href="https://festival.astateoftrance.com/losangeles/" target="_blank" rel="noopener">official ASOT LA page</a> says the festival is coming to Los Angeles &ldquo;for the very first time&rdquo;. The event is 18+.</p><p><a href="https://www.beatportal.com/articles/1674316-a-state-of-trance-to-bring-its-first-two-day-us-festival-to-los-angeles" target="_blank" rel="noopener">Beatportal</a> and <a href="https://weraveyou.com/2026/10/a-state-of-trance-los-angeles-2027-armin-van-buuren" target="_blank" rel="noopener">We Rave You</a> describe it as ASOT&rsquo;s first two-day festival in the United States.</p>`,
        },
        {
          heading: 'Venue',
          body: `<p>The <a href="https://festival.astateoftrance.com/losangeles/" target="_blank" rel="noopener">official ASOT LA page</a> currently says the location &ldquo;will be announced at a later date&rdquo;. <a href="https://www.beatportal.com/articles/1674316-a-state-of-trance-to-bring-its-first-two-day-us-festival-to-los-angeles" target="_blank" rel="noopener">Beatportal</a> and <a href="https://weraveyou.com/2026/10/a-state-of-trance-los-angeles-2027-armin-van-buuren" target="_blank" rel="noopener">We Rave You</a> both report the venue as <strong>ACE*MISSION Studios</strong> in Los Angeles. We will update this page once the official site confirms it.</p>`,
        },
        {
          heading: 'Lineup and Tickets',
          body: `<p>The lineup has not been announced yet. The official page asks fans to pre-register to secure tickets and be among the first to hear the lineup. Weekend tickets, a VIP waiting list and a two-night hotel package are listed on the site, without prices so far.</p>`,
        },
        {
          heading: 'The ASOT Hotel Comes to LA',
          body: `<p>According to <a href="https://weraveyou.com/2026/10/a-state-of-trance-los-angeles-2027-armin-van-buuren" target="_blank" rel="noopener">We Rave You</a>, Armin plans to bring the A State of Trance Hotel to Los Angeles, with &ldquo;pool parties, special events and pre-parties in the lobby&rdquo; for hotel guests &mdash; the format ASOT already uses for its Rotterdam weekend.</p>`,
        },
        {
          heading: 'ASOT in the US So Far',
          body: `<p>A State of Trance has played the US before, but as single-night shows. <a href="https://www.edmtunes.com/2026/10/09/armin-van-buuren-asot-festival-la-2027/" target="_blank" rel="noopener">EDMTunes</a> lists past ASOT events at Madison Square Garden in New York (2013), in Oakland (2019) and at Banc of California Stadium in Los Angeles (2022), along with long-running ASOT stages at Ultra Music Festival in Miami. A two-day festival is a step up from those one-night events.</p>`,
        },
        {
          heading: 'ASOT&rsquo;s Calendar, 2026&ndash;27',
          body: `<ul><li><a href="/blog/asot-london-drumsheds-2026">A State of Trance London</a> &mdash; 14 November 2026, Drumsheds</li><li><a href="/blog/asot-rotterdam-2027-guide">A State of Trance Rotterdam 2027</a> &mdash; 26&ndash;27 February 2027, Rotterdam Ahoy</li><li><strong>A State of Trance LA</strong> &mdash; 11&ndash;12 June 2027, Los Angeles</li></ul><p>For trance in Southern California sooner, see our <a href="/blog/dreamstate-socal-2026-complete-guide">Dreamstate SoCal 2026</a> guide. For the history behind the brand, read <a href="/blog/asot-25-years-anniversary">A State of Trance Turns 25</a>.</p>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>Listening to A State of Trance every week, it is good to see the show grow into a full festival in more parts of the world. I will add the lineup here when it is announced.</p>`,
        },
      ],
    },
    ja: {
      title: 'A State of Trance LA 2027：日程・会場・わかっていること',
      description: 'A State of Tranceが2027年6月11〜12日、2日間のフェスとしてロサンゼルスへ。日程、会場の発表状況、チケット、ASOTホテル、アメリカでのASOTの歩み。',
      excerpt: 'A State of Tranceが2027年6月11〜12日、ロサンゼルスで2日間のフェスを開催。日程、会場の発表状況、チケット、ASOTホテルなど、現時点でわかっていることをまとめました。',
      content: [
        {
          heading: '発表内容',
          body: `<p><a href="/artists/armin-van-buuren">Armin van Buuren</a>のA State of Tranceが、2日間のフェスとしてロサンゼルスにやって来ます。<strong>A State of Trance LA</strong>は<strong>2027年6月11日・12日</strong>に開催。<a href="https://festival.astateoftrance.com/losangeles/" target="_blank" rel="noopener">ASOT LA公式ページ</a>では、ロサンゼルスでの開催は「初めて」とされています。18歳以上限定です。</p><p><a href="https://www.beatportal.com/articles/1674316-a-state-of-trance-to-bring-its-first-two-day-us-festival-to-los-angeles" target="_blank" rel="noopener">Beatportal</a>と<a href="https://weraveyou.com/2026/10/a-state-of-trance-los-angeles-2027-armin-van-buuren" target="_blank" rel="noopener">We Rave You</a>は、ASOTにとってアメリカで初の2日間フェスだと伝えています。</p>`,
        },
        {
          heading: '会場',
          body: `<p><a href="https://festival.astateoftrance.com/losangeles/" target="_blank" rel="noopener">ASOT LA公式ページ</a>では現在、会場は「後日発表」となっています。一方、<a href="https://www.beatportal.com/articles/1674316-a-state-of-trance-to-bring-its-first-two-day-us-festival-to-los-angeles" target="_blank" rel="noopener">Beatportal</a>と<a href="https://weraveyou.com/2026/10/a-state-of-trance-los-angeles-2027-armin-van-buuren" target="_blank" rel="noopener">We Rave You</a>は、会場をロサンゼルスの<strong>ACE*MISSION Studios</strong>と報じています。公式で確定したら、このページを更新します。</p>`,
        },
        {
          heading: 'ラインナップとチケット',
          body: `<p>ラインナップはまだ未発表です。公式ページでは事前登録を受け付けていて、登録するとチケットを確保でき、ラインナップもいち早く届くとされています。サイトには週末チケット、VIPのキャンセル待ち、2泊のホテルパッケージが掲載されていますが、価格はまだ出ていません。</p>`,
        },
        {
          heading: 'ASOTホテルもLAへ',
          body: `<p><a href="https://weraveyou.com/2026/10/a-state-of-trance-los-angeles-2027-armin-van-buuren" target="_blank" rel="noopener">We Rave You</a>によると、ArminはA State of TranceのホテルもLAに持ってくる予定で、宿泊者向けに「プールパーティーや特別イベント、ロビーでのプレパーティー」が用意されます。ロッテルダムの週末と同じスタイルです。</p>`,
        },
        {
          heading: 'これまでのアメリカのASOT',
          body: `<p>A State of Tranceはこれまでもアメリカで開催されてきましたが、1夜限りの公演でした。<a href="https://www.edmtunes.com/2026/10/09/armin-van-buuren-asot-festival-la-2027/" target="_blank" rel="noopener">EDMTunes</a>によると、ニューヨークのMadison Square Garden（2013年）、オークランド（2019年）、ロサンゼルスのBanc of California Stadium（2022年）での開催のほか、マイアミのUltra Music Festivalでも長年ASOTステージがあります。2日間フェスは、そこから一段大きな形です。</p>`,
        },
        {
          heading: '2026〜27年のASOTの予定',
          body: `<ul><li><a href="/blog/asot-london-drumsheds-2026">A State of Trance London</a>：2026年11月14日、Drumsheds</li><li><a href="/blog/asot-rotterdam-2027-guide">A State of Trance Rotterdam 2027</a>：2027年2月26〜27日、Rotterdam Ahoy</li><li><strong>A State of Trance LA</strong>：2027年6月11〜12日、ロサンゼルス</li></ul><p>南カリフォルニアのトランスなら、もっと早い<a href="/blog/dreamstate-socal-2026-complete-guide">Dreamstate SoCal 2026</a>もどうぞ。ブランドの歩みは<a href="/blog/asot-25-years-anniversary">A State of Trance 25周年</a>の記事へ。</p>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>毎週A State of Tranceを聴いている身としては、番組が世界のいろいろな場所でフェスとして広がっていくのは嬉しいです。ラインナップが発表されたら、ここに追記します。</p>`,
        },
      ],
    },
  },
  {
    slug: 'amsterdam-trance-event-ade-2026',
    date: '2026-10-24',
    readTime: 3,
    tags: ['ade', 'amsterdam', 'events', 'panama', 'uplifting'],
    en: {
      title: 'Amsterdam Trance Event at ADE 2026: Lineup & Times',
      description: 'Amsterdam Trance Event brings ten DJs across two rooms at Panama for ADE 2026 on 24 October, from 14:30 to 21:30 — a bigger follow-up to 2025. Lineup, venue and times.',
      excerpt: 'A back-to-back trance marathon across two rooms at Panama on 24 October 2026 — Amsterdam Trance Event is a bigger follow-up to last year\'s ADE party. Full lineup and times.',
      content: [
        {
          heading: 'The Event at a Glance',
          body: `<p><strong>Amsterdam Trance Event</strong> is a daytime trance party at Amsterdam Dance Event 2026: <strong>Saturday 24 October</strong>, <strong>14:30 to 21:30</strong>, at <strong>Panama</strong> (Oostelijke Handelskade 4, Amsterdam).</p><p>The <a href="https://www.amsterdam-dance-event.nl/en/program/2026/amsterdam-trance-event-daytime-event/2813014/" target="_blank" rel="noopener">ADE programme</a> describes it as &ldquo;a back-to-back trance marathon across two electrifying rooms&rdquo; and a bigger, bolder follow-up to last year&rsquo;s edition, which was a collaboration between Nocturnal Knights and Black Hole Recordings. According to <a href="https://essenceoftrance.com/ade-2026/" target="_blank" rel="noopener">Essence of Trance</a>, the 2025 edition&rsquo;s early-bird tickets &mdash; limited to 250 &mdash; sold out within two days, so this is worth booking ahead of time.</p>`,
        },
        {
          heading: 'Lineup',
          body: `<p>The event runs back-to-back sets across two rooms. <a href="https://trancehistory.com/2026/05/07/amsterdam-trance-event-returns-bigger-than-ever-at-ade-2026/" target="_blank" rel="noopener">Trance History</a> lists the pairings as follows &mdash; check the ticket page closer to the date in case of changes.</p><p><strong>Main Room:</strong> RAM b2b <a href="/artists/richard-durand">Richard Durand</a>, Alex M.O.R.P.H. b2b <a href="/artists/xijaro-and-pitch">XiJaro &amp; Pitch</a>, <a href="/artists/sean-tyas">Sean Tyas</a> b2b <a href="/artists/allen-watts">Allen Watts</a>, Talla 2XLC b2b York, Darren Porter b2b BiXX, Dan Cooper b2b Brendan Bartels, and Anunnakis.</p><p><strong>Second Room:</strong> Frankyeffe b2b Luvstruck, Steve Dekay b2b Mark Wilks, Ralphie B &amp; Frank Waanders pres. Collide 1, Rene Ablaze b2b Angelus, Amos &amp; Riot Night b2b Inoblivion, and Nathia Kate b2b Bryn Whiting.</p><p>Natalie Gioia provides live vocals.</p>`,
        },
        {
          heading: 'Panama, the Venue',
          body: `<p>Panama is a club on Amsterdam&rsquo;s eastern harbourfront, in a building that once generated electricity for the city&rsquo;s docks. It is also hosting <a href="/blog/luminosity-ade-2026">Luminosity&rsquo;s This Is Trance!</a> the night before, on Friday 23 October, which makes the venue one of the busiest trance addresses of ADE week.</p>`,
        },
        {
          heading: 'Tickets',
          body: `<p>Tickets are on sale via the official Weeztix shop linked from the <a href="https://www.amsterdam-dance-event.nl/en/program/2026/amsterdam-trance-event-daytime-event/2813014/" target="_blank" rel="noopener">ADE programme</a>. The page does not list prices at the time of writing. ADE&rsquo;s Pro Pass covers most festival events, but entry is not guaranteed for Pro Pass holders here because capacity is limited &mdash; buy a dedicated ticket if you want to be sure of getting in.</p>`,
        },
        {
          heading: 'Fitting It into Your ADE Week',
          body: `<p>Saturday 24 October is already a busy day for trance in Amsterdam, with <a href="/blog/paul-van-dyk-ade-2026-melkweg">Paul van Dyk at Melkweg</a>, <a href="/blog/find-your-harmony-500-ade-2026">Find Your Harmony 500</a> and <a href="/blog/luminosity-ade-2026">Luminosity&rsquo;s ADE Rave</a> all on the same day. Amsterdam Trance Event&rsquo;s daytime slot (14:30&ndash;21:30) means it can realistically be combined with any of the evening or late-night events. See the full week in our <a href="/blog/ade-2026-trance-guide">ADE 2026 Trance Guide</a>.</p>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>I had not come across this one before researching ADE 2026, and a ten-DJ, two-room daytime lineup at a venue already busy with Luminosity the night before says a lot about how much trance is packed into Amsterdam that week.</p>`,
        },
      ],
    },
    ja: {
      title: 'ADE 2026「Amsterdam Trance Event」：ラインナップと時間',
      description: 'Amsterdam Trance EventはADE 2026の10月24日、14:30〜21:30にPanamaの2ルームで10人のDJが出演。2025年版より規模を拡大。ラインナップ、会場、時間を紹介。',
      excerpt: '10月24日、Panamaの2ルームで繰り広げるトランス・マラソン。Amsterdam Trance Eventは昨年のADEパーティーより規模を拡大した企画です。ラインナップと時間を紹介。',
      content: [
        {
          heading: 'イベント概要',
          body: `<p><strong>Amsterdam Trance Event</strong>は、Amsterdam Dance Event 2026の昼間に開かれるトランス・パーティーです。日時は<strong>2026年10月24日（土）14:30〜21:30</strong>、会場は<strong>Panama</strong>（Oostelijke Handelskade 4）。</p><p><a href="https://www.amsterdam-dance-event.nl/en/program/2026/amsterdam-trance-event-daytime-event/2813014/" target="_blank" rel="noopener">ADEの番組表</a>では「2つの刺激的なルームを通した、back-to-backのトランス・マラソン」と説明されており、Nocturnal KnightsとBlack Hole Recordingsが共同で手がけた昨年版より、さらに大きく大胆な企画として紹介されています。<a href="https://essenceoftrance.com/ade-2026/" target="_blank" rel="noopener">Essence of Trance</a>によると、2025年版の早割チケット（250枚限定）は2日で完売したとのことなので、早めの確保がおすすめです。</p>`,
        },
        {
          heading: 'ラインナップ',
          body: `<p>2ルームでback-to-backセットが続きます。<a href="https://trancehistory.com/2026/05/07/amsterdam-trance-event-returns-bigger-than-ever-at-ade-2026/" target="_blank" rel="noopener">Trance History</a>が掲載しているペアリングは以下の通りです。開催が近づいたら変更の可能性もあるので、チケットページも確認してください。</p><p><strong>Main Room：</strong>RAM b2b <a href="/artists/richard-durand">Richard Durand</a>、Alex M.O.R.P.H. b2b <a href="/artists/xijaro-and-pitch">XiJaro &amp; Pitch</a>、<a href="/artists/sean-tyas">Sean Tyas</a> b2b <a href="/artists/allen-watts">Allen Watts</a>、Talla 2XLC b2b York、Darren Porter b2b BiXX、Dan Cooper b2b Brendan Bartels、Anunnakis。</p><p><strong>Second Room：</strong>Frankyeffe b2b Luvstruck、Steve Dekay b2b Mark Wilks、Ralphie B &amp; Frank Waanders pres. Collide 1、Rene Ablaze b2b Angelus、Amos &amp; Riot Night b2b Inoblivion、Nathia Kate b2b Bryn Whiting。</p><p>ライブ・ヴォーカルはNatalie Gioiaが担当。</p>`,
        },
        {
          heading: '会場：Panama',
          body: `<p>Panamaはアムステルダム東側の港沿いにあるクラブで、かつては港の発電を担っていた建物を使っています。前日の10月23日（金）には<a href="/blog/luminosity-ade-2026">LuminosityのThis Is Trance!</a>も同じ会場で開催されるため、ADE週間の中でもトランスが特に集中する会場のひとつです。</p>`,
        },
        {
          heading: 'チケット',
          body: `<p>チケットは<a href="https://www.amsterdam-dance-event.nl/en/program/2026/amsterdam-trance-event-daytime-event/2813014/" target="_blank" rel="noopener">ADEの番組表</a>からリンクされている公式Weeztixショップで販売中。執筆時点では価格の掲載はありません。ADEのPro Passは大半のフェスティバル・イベントをカバーしますが、このイベントは定員が限られているためPro Pass保持者の入場は保証されていません。確実に入りたい場合は専用チケットの購入をおすすめします。</p>`,
        },
        {
          heading: 'ADE週間の組み立て方',
          body: `<p>10月24日（土）はもともとトランスが集中する一日で、同日には<a href="/blog/paul-van-dyk-ade-2026-melkweg">MelkwegのPaul van Dyk</a>、<a href="/blog/find-your-harmony-500-ade-2026">Find Your Harmony 500</a>、<a href="/blog/luminosity-ade-2026">LuminosityのADE Rave</a>も開催されます。Amsterdam Trance Eventは昼間の時間帯（14:30〜21:30）なので、夜〜深夜のどのイベントとも組み合わせやすいのが魅力です。1週間の全体像は<a href="/blog/ade-2026-trance-guide">ADE 2026 トランス・ガイド</a>へ。</p>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>ADE 2026を調べる中で初めて知ったイベントでした。前日にLuminosityが入っている会場で、10人のDJ・2ルーム構成の昼イベントが開かれるというだけでも、この週のアムステルダムにどれだけトランスが詰め込まれているかがわかります。</p>`,
        },
      ],
    },
  },
  {
    slug: 'luminosity-19-year-anniversary-melkweg',
    date: '2026-10-27',
    readTime: 3,
    tags: ['luminosity', 'amsterdam', 'melkweg', 'events', 'uplifting'],
    en: {
      title: 'Luminosity 19 Year Anniversary at Melkweg: Date & Lineup',
      description: 'Luminosity marks its 19th anniversary with a late-night club night at Melkweg, Amsterdam, on 19 December 2026. Confirmed names so far: KEY4050, Mark Sherry and The Thrillseekers.',
      excerpt: 'Luminosity closes out the year with its 19th anniversary at Melkweg, Amsterdam, on 19 December 2026. KEY4050, Mark Sherry and The Thrillseekers are confirmed so far, with more to come.',
      content: [
        {
          heading: 'The Night at a Glance',
          body: `<p><strong>Luminosity</strong> celebrates its <strong>19th anniversary</strong> with a club night at <strong>Melkweg</strong> (Lijnbaansgracht 234A, Amsterdam) on <strong>Saturday 19 December 2026</strong>. According to the <a href="https://www.melkweg.nl/nl/agenda/luminosity-19-year-anniversary-19-12-2026/" target="_blank" rel="noopener">Melkweg event page</a>, it runs as a late-night set rather than an early show, and the event is 18+.</p><p>Tickets start at &euro;29.90 as an early price, sold through <a href="https://www.melkweg.nl/nl/agenda/luminosity-19-year-anniversary-19-12-2026/" target="_blank" rel="noopener">Ticketmaster via the Melkweg page</a>.</p>`,
        },
        {
          heading: 'Lineup So Far',
          body: `<p>Three names are confirmed: <strong>KEY4050</strong>, <strong>Mark Sherry</strong> and <strong>The Thrillseekers</strong>. Melkweg says the full lineup &ldquo;will be announced soon,&rdquo; with &ldquo;a few special surprises&rdquo; planned for the holiday season &mdash; we will update this article once more names are confirmed.</p>`,
        },
        {
          heading: 'Nearly Two Decades of Luminosity',
          body: `<p>Luminosity is best known for <a href="/events/luminosity-beach-festival">Luminosity Beach Festival</a> in Zandvoort each summer, and for its <a href="/blog/luminosity-ade-2026">multi-event ADE programme</a> every October at Club Panama and Q Factory. According to Melkweg, the brand has spent nearly two decades building a global trance community spanning both classic and forward-thinking sounds, and this anniversary night is billed as a way to close out the year in a late-night club format rather than a festival one.</p>`,
        },
        {
          heading: 'A Different Setting from ADE',
          body: `<p>Where Luminosity&rsquo;s ADE events run across multiple rooms and daytime-to-night schedules, this is a single late-night club set at Melkweg &mdash; closer in spirit to a year-end party than a festival takeover. If you caught <a href="/blog/luminosity-ade-2026">This Is Trance! at ADE 2026</a> in October, this is a smaller, more intimate way to end the year with the same crew.</p>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>A year-end anniversary night is a nice bookend to a year that already included Luminosity&rsquo;s beach festival and its full ADE programme &mdash; worth keeping on the radar once the rest of the lineup drops.</p>`,
        },
      ],
    },
    ja: {
      title: 'Luminosity 19周年：Melkwegで開催、日程とラインナップ',
      description: 'Luminosityが19周年を記念し、2026年12月19日にアムステルダムのMelkwegでクラブナイトを開催。現時点の出演確定はKEY4050、Mark Sherry、The Thrillseekers。',
      excerpt: 'Luminosityが2026年12月19日、アムステルダムのMelkwegで19周年を記念したクラブナイトを開催。現時点ではKEY4050、Mark Sherry、The Thrillseekersが出演確定、続報あり。',
      content: [
        {
          heading: 'イベント概要',
          body: `<p><strong>Luminosity</strong>が<strong>19周年</strong>を記念して、<strong>2026年12月19日（土）</strong>、アムステルダムの<strong>Melkweg</strong>（Lijnbaansgracht 234A）でクラブナイトを開催します。<a href="https://www.melkweg.nl/nl/agenda/luminosity-19-year-anniversary-19-12-2026/" target="_blank" rel="noopener">Melkwegのイベントページ</a>によると、早い時間帯のショーではなく深夜帯のセットで、18歳以上限定です。</p><p>チケットは早割価格で&euro;29.90から。<a href="https://www.melkweg.nl/nl/agenda/luminosity-19-year-anniversary-19-12-2026/" target="_blank" rel="noopener">Melkwegのページ経由のTicketmaster</a>で販売中です。</p>`,
        },
        {
          heading: '現時点のラインナップ',
          body: `<p>現在確定しているのは3組：<strong>KEY4050</strong>、<strong>Mark Sherry</strong>、<strong>The Thrillseekers</strong>。Melkwegによると、全ラインナップは「近日発表」で、ホリデーシーズンに向けて「いくつかのサプライズ」も予定されているとのこと。続報があれば、この記事を更新します。</p>`,
        },
        {
          heading: 'Luminosity、約20年の歩み',
          body: `<p>Luminosityといえば、夏にザントフォールトで開かれる<a href="/events/luminosity-beach-festival">Luminosity Beach Festival</a>、そして毎年10月のADE期間中にClub PanamaとQ Factoryで開かれる<a href="/blog/luminosity-ade-2026">複数イベントのプログラム</a>が有名です。Melkwegによると、ブランドは約20年にわたってクラシックから先進的なサウンドまでを包含するグローバルなトランス・コミュニティを築いてきており、この周年イベントは、フェス形式ではなく深夜のクラブナイト形式で一年を締めくくる企画として紹介されています。</p>`,
        },
        {
          heading: 'ADEとは違う雰囲気',
          body: `<p>Luminosityの ADEイベントが複数ルーム・昼から夜までのスケジュールで展開されるのに対し、こちらはMelkwegでの深夜セット1本のみ。フェスの乗っ取りというより、年末パーティーに近い雰囲気です。10月の<a href="/blog/luminosity-ade-2026">ADE 2026でThis Is Trance!</a>を楽しんだ人には、同じチームと、よりこぢんまりした形で一年を締める機会になります。</p>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>ビーチフェスとADEの全プログラムを経た一年の締めとして、周年イベントはちょうどいいしめくくり。残りのラインナップが発表されたら要チェックです。</p>`,
        },
      ],
    },
  },
  {
    slug: 'asot-1300-ade-special',
    date: '2026-10-28',
    readTime: 4,
    tags: ['asot', 'armin-van-buuren', 'ade', 'amsterdam', 'radio'],
    en: {
      title: 'A State of Trance 1300: The ADE 2026 Special',
      description: 'A State of Trance reached episode 1300 with its ADE 2026 Special on 22 October, featuring Live @ Armada Club and Live @ ASOT Radio segments, a three-way b2b, and a first play of the ASOT 2027 anthem.',
      excerpt: 'A State of Trance hit episode 1300 with its ADE 2026 Special on 22 October — Live @ Armada Club, Live @ ASOT Radio, a three-way b2b, and a first play of the ASOT 2027 anthem.',
      content: [
        {
          heading: 'The Milestone',
          body: `<p><strong>A State of Trance</strong> reached <strong>episode 1300</strong> with its <strong>ADE 2026 Special</strong>, broadcast on <strong>22 October 2026</strong> during Amsterdam Dance Event week. According to the tracklist posted by <a href="https://tranceattack.net/a-state-of-trance-1300/" target="_blank" rel="noopener">TranceAttack</a>, the episode is credited to &ldquo;Armin van Buuren &amp; Guests,&rdquo; following the show&rsquo;s long-running tradition of a packed, multi-artist ADE edition each year &mdash; the previous ADE special, numbered 1195, aired in October 2024.</p>`,
        },
        {
          heading: 'Guest Sections',
          body: `<p>The episode is split into sections by guest, rather than a single continuous Armin set. Names in the tracklist include Sarah de Warren, Giorgia Angiuli, John O&rsquo;Callaghan, Protoculture, The Rocketman, <a href="/artists/factor-b">Factor B</a>, Space 92, Daxson, <a href="/artists/ben-gold">Ben Gold</a>, Mees Salom&eacute;, Marsh, Hannah Laing, <a href="/artists/miss-monique">Miss Monique</a>, Mauro Picotto, MORTEN, <a href="/artists/cosmic-gate">Cosmic Gate</a>, Ben Nicky, Joris Voorn and Billy Gillies, alongside Armin&rsquo;s own sections (including a &ldquo;Future Favorite&rdquo; segment and the &ldquo;Service For Dreamers&rdquo; segment with <a href="/artists/andrew-rayel">Andrew Rayel</a>). (Source: <a href="https://tranceattack.net/a-state-of-trance-1300/" target="_blank" rel="noopener">TranceAttack</a>.)</p>`,
        },
        {
          heading: 'Live @ Armada Club, Live @ ASOT Radio',
          body: `<p>The tracklist marks out two distinct live segments &mdash; &ldquo;Live @ Armada Club&rdquo; and &ldquo;Live @ ASOT Radio&rdquo; &mdash; plus a three-way back-to-back between Armin van Buuren, <a href="/artists/ruben-de-ronde">Ruben de Ronde</a> and SUPERSTRINGS. TranceAttack&rsquo;s page does not name a streaming link or venue for the broadcast, so check Armin&rsquo;s own channels for the full episode.</p>`,
        },
        {
          heading: 'A First Play: the ASOT 2027 Anthem',
          body: `<p>The &ldquo;Tune of the Week&rdquo; slot is listed as &ldquo;Armin van Buuren &mdash; ASOT 2027 Anthem ID&rdquo; &mdash; an early, unidentified preview of next year&rsquo;s A State of Trance anthem. The episode also runs a &ldquo;Last 3 Tune Of The Year Winners&rdquo; section, revisiting recent listener-voted anthems.</p>`,
        },
        {
          heading: 'On Fabricated Tracklists',
          body: `<p>Full fan-transcribed ADE special tracklists often run past 150 entries and include unidentified (&ldquo;ID&rdquo;) tracks and the odd duplicate, so we are not reproducing the full list here &mdash; see <a href="https://tranceattack.net/a-state-of-trance-1300/" target="_blank" rel="noopener">TranceAttack&rsquo;s tracklist</a> for that level of detail. We previously removed a set of fabricated setlist pages from this site and only publish tracklist information we can trace to a real, cited source.</p>`,
        },
        {
          heading: 'A Listener&rsquo;s Note',
          body: `<p>Episode numbers this high are a reminder of just how long A State of Trance has been running weekly &mdash; and an ADE special with this many guest sections is as close as the radio show gets to a festival lineup of its own.</p>`,
        },
      ],
    },
    ja: {
      title: 'A State of Trance 1300：ADE 2026スペシャル',
      description: 'A State of Tranceが10月22日放送のADE 2026スペシャルで第1300回に到達。Live @ Armada Club、Live @ ASOT Radio、3人b2b、そしてASOT 2027アンセムの初披露を含む内容。',
      excerpt: 'A State of Tranceが10月22日放送のADE 2026スペシャルで第1300回に到達。Live @ Armada Club、Live @ ASOT Radio、3人b2b、ASOT 2027アンセムの初披露など。',
      content: [
        {
          heading: '記念回',
          body: `<p><strong>A State of Trance</strong>が、<strong>2026年10月22日</strong>、Amsterdam Dance Event期間中に放送された<strong>ADE 2026スペシャル</strong>で<strong>第1300回</strong>に到達しました。<a href="https://tranceattack.net/a-state-of-trance-1300/" target="_blank" rel="noopener">TranceAttack</a>が掲載したトラックリストによると、クレジットは「Armin van Buuren & Guests」。番組は毎年ADEの時期に、多数のアーティストが参加する大型スペシャルを放送する伝統があり、前回のADEスペシャルは2024年10月放送の第1195回でした。</p>`,
        },
        {
          heading: 'ゲストごとのセクション',
          body: `<p>この回はArmin単独の一本のセットではなく、ゲストごとのセクションに分かれています。トラックリストに名前が挙がっているのは、Sarah de Warren、Giorgia Angiuli、John O&rsquo;Callaghan、Protoculture、The Rocketman、<a href="/artists/factor-b">Factor B</a>、Space 92、Daxson、<a href="/artists/ben-gold">Ben Gold</a>、Mees Salom&eacute;、Marsh、Hannah Laing、<a href="/artists/miss-monique">Miss Monique</a>、Mauro Picotto、MORTEN、<a href="/artists/cosmic-gate">Cosmic Gate</a>、Ben Nicky、Joris Voorn、Billy Gillies。これにArmin自身のセクション（「Future Favorite」セグメントと、<a href="/artists/andrew-rayel">Andrew Rayel</a>との「Service For Dreamers」セグメント）が加わります。（出典：<a href="https://tranceattack.net/a-state-of-trance-1300/" target="_blank" rel="noopener">TranceAttack</a>）</p>`,
        },
        {
          heading: 'Live @ Armada Club、Live @ ASOT Radio',
          body: `<p>トラックリストには「Live @ Armada Club」「Live @ ASOT Radio」という2つの独立したライブセグメントが明記されているほか、Armin van Buuren、<a href="/artists/ruben-de-ronde">Ruben de Ronde</a>、SUPERSTRINGSの3人によるback-to-backも含まれています。TranceAttackのページには配信リンクや会場の記載はないため、詳細はArmin本人のチャンネルを確認してください。</p>`,
        },
        {
          heading: '初披露：ASOT 2027アンセム',
          body: `<p>「Tune of the Week」のスロットには「Armin van Buuren &mdash; ASOT 2027 Anthem ID」と記載されており、来年のA State of Tranceアンセムの早期・未確定版プレビューにあたります。この回では、近年のリスナー投票で選ばれたアンセムを振り返る「Last 3 Tune Of The Year Winners」セクションもあります。</p>`,
        },
        {
          heading: '捏造トラックリストについて',
          body: `<p>ファンが書き起こすADEスペシャルの完全なトラックリストは、しばしば150項目を超え、未確認（「ID」）の曲や多少の重複も含まれます。そのため当記事では全リストの再掲載は行わず、詳細は<a href="https://tranceattack.net/a-state-of-trance-1300/" target="_blank" rel="noopener">TranceAttackのトラックリスト</a>をご参照ください。当サイトでは以前、捏造されたセットリストのページを削除した経緯があり、実際の出典を追跡できるトラックリスト情報のみを掲載する方針です。</p>`,
        },
        {
          heading: 'リスナーからの視点',
          body: `<p>ここまで大きなエピソード番号は、A State of Tranceが何年も週刊で続いてきたことの何よりの証です。これほど多くのゲストセクションを含むADEスペシャルは、ラジオ番組がフェスのラインナップに最も近づく瞬間かもしれません。</p>`,
        },
      ],
    },
  }
];

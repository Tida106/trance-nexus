# Monthly Chart — Claude Code Prompt Template

Paste-ready prompt for kicking off the monthly chart workflow inside
a fresh Claude Code session. Replace the `<MONTH>` and `<YYYY-MM>`
placeholders with the target month, then send.

The prompt assumes the runner is sitting at the repo root
(`C:\Users\teruh\Desktop\trance-nexus`) and has the generator and
template already wired in (commits `3cf3c7c` and `4884fdb`).

---

## Standard prompt

```
<MONTH> <YEAR>のトランス・チャートを作成してください。

## ソース（検証可能な実在曲のみ、捏造禁止）

以下の情報源を横断して、月のトップ10トラックを選定:

1. Beatport <MONTH> <YEAR> の Top 100 Trance チャートと Best New
   Trance R/D/H チャート
2. ASOT <MONTH> <YEAR> 中の全エピソードのトラックリスト
3. Group Therapy / Anjunabeats、FSOE、Coldharbour、Pure Trance /
   WAO138、Subculture、Vandit、VII、Black Hole の <MONTH> リリース
   カレンダー
4. 1001tracklists.com の <MONTH> <YEAR> 集約データ

## 選定基準

- 必ず<MONTH> <YEAR>に実在のレーベルからリリースされた実在のトラック
- 検証できないトラックは含めない（5件しか確実なものがなければ5件）
- ジャンル・バランス: アップリフティング、プログレッシブ、サイ、テック、
  ヴォーカル、ハードから幅広く（10件全部が同じサブジャンルにならないよう）
- ランキングは編集判断（ストリーミング順位ではない）

## 出力

data/blog/charts/<YYYY-MM>.json を data/blog/charts/_example.json
のスキーマに従って作成。各トラックに以下を含めること:

- rank, artist, title, label, genre, releaseDate（ISO形式）
- review_en（英語1-3文の編集レビュー、なぜそのランクなのかを記述）
- review_ja（同じ趣旨の日本語レビュー）
- 可能なら beatportUrl, spotifyUrl も入力

## 実行

JSON 作成後、以下を順に実行:

1. node scripts/generate-monthly-chart.js <YYYY-MM>
2. git diff -- data/blog/ public/ で差分を確認
3. 問題なければ git add data/blog/charts/<YYYY-MM>.json
   data/blog/posts*.js data/blog/listing.js data/blog/index.js
   public/ && git commit -m "feat(blog): monthly chart — <MONTH>
   <YEAR>" && git push

詳細は docs/MONTHLY_CHART_WORKFLOW.md を参照。
```

## Variant prompts

### Half-month / preview chart

If the goal is a mid-month preview rather than a full month-end
recap (e.g., "best of <MONTH> so far"), substitute the slug pattern
in the chart JSON's filename — the generator derives slug from
`month` + `year`, so for previews you'd run a one-off non-template
post or extend the template to accept a `slugSuffix` parameter.

### Single-genre roundup

The standard chart pulls across all subgenres. For a single-genre
roundup (e.g., "best psytrance of <MONTH> <YEAR>"), this template
isn't the right tool — author it directly as a posts*.js entry,
since the auto-generated title pattern bakes in
"Uplifting, Progressive & Psy".

### Catching up on missed months

If a month was missed and you want to publish it retroactively,
the workflow is identical — just set `publishedAt` to today's date
rather than the first of the following month. The article will
correctly sort to today's date in the listing while still being
labelled with the historical period in the title.

## What to NOT do in the prompt

- Don't ask Claude to invent chart positions when sources are
  unavailable. The hard rule from the project brief is "実在のみ、
  捏造禁止"; an empty / short chart is preferable to a fabricated one.
- Don't ask Claude to scrape the live web during the workflow — the
  build environment in this repo regularly fails outbound HTTPS to
  Beatport/Spotify (corporate proxy, certificate issues). Either
  use Claude's own knowledge as of its cutoff, or paste tracklists
  manually into the prompt.
- Don't ask Claude to skip the `git diff` review step — the manual
  diff check is the last line of defence against template
  regressions, mis-resolved artist slugs, and accidental commits of
  the wrong chart input file.

## Maintenance — when this prompt template needs updating

- When `data/blog/charts/_example.json` schema changes
- When `data/blog/templates/monthly-chart-template.js` adds a new
  required input field (e.g., per-track BPM)
- When the artists catalogue grows enough that a stronger
  artist-slug resolution heuristic ships in the script
- When the generator script grows new flags (e.g., `--dry-run`)

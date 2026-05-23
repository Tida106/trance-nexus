# TRANCE NEXUS — Claude Code 自動化プロジェクト

## プロジェクト概要
トランスミュージック情報ポータルサイト。
アーティスト情報・ラジオ番組スケジュール・セットリスト・イベント情報を自動収集・更新するシステムを構築する。

---

## デプロイ先

**GitHub Pages**にデプロイされている（Vercelではない）。配信は `Tida106/trance-nexus` リポジトリのカスタムドメイン経由。

- 公開URL（canonical）: **https://trance-nexus.com/**
- リポジトリ: `Tida106/trance-nexus`
- ビルド: Next.js の static export（`out/` ディレクトリ）を Pages が配信
- カスタムドメイン: `public/CNAME` で `trance-nexus.com` 指定、DNS A レコードは GitHub Pages anycast（185.199.108-111.153）に向き、HTTPS 稼働中
- basePath は **空**（カスタムドメイン配信のため）。URL は `/<route>` の形（`/trance-nexus/<route>` ではない）
- `https://tida106.github.io/trance-nexus/` は GitHub Pages の自動 301 で apex（`trance-nexus.com`）に転送される（古いライブURL想定で記述しないこと）
- canonical/OG/JSON-LD/hreflang/sitemap/robots/CNAME すべて `https://trance-nexus.com` で整合
- AdSense publisher ID (`pub-4224563062633828`) は `trance-nexus.com` に紐付け済み

ライブ確認は上記 canonical URL を使用すること。
`trance-nexus.vercel.app` は使わない（DEPLOYMENT_NOT_FOUND、Vercel ではない）。
push後はPagesの再ビルドに1〜2分かかる場合がある。

---

## ディレクトリ構成（目標）

```
trance-nexus/
├── CLAUDE.md              ← このファイル
├── package.json
├── next.config.js
├── .env.local             ← APIキー等（gitignore）
├── data/
│   ├── artists.json       ← アーティストマスターデータ
│   ├── radio.json         ← ラジオ番組データ
│   ├── setlists.json      ← セットリストデータ
│   └── events.json        ← イベントデータ
├── scrapers/
│   ├── scrape-radio.js    ← ラジオスケジュール取得
│   ├── scrape-setlists.js ← セットリスト取得（1001tracklists）
│   ├── scrape-events.js   ← イベント情報取得
│   └── update-all.js      ← 全スクレイパー一括実行
├── src/
│   ├── app/               ← Next.js App Router
│   │   ├── page.jsx       ← トップページ
│   │   ├── artists/
│   │   ├── radio/
│   │   ├── setlists/
│   │   └── events/
│   └── components/
└── public/
```

---

## Step 1 — プロジェクト初期化

```bash
npx create-next-app@latest trance-nexus --js --tailwind --app --no-src-dir
cd trance-nexus
npm install cheerio axios node-cron
```

既存の `trance-nexus.html` を参照してデザインを再現すること（同ディレクトリに置いてある）。

---

## Step 2 — データファイル作成

`data/artists.json`, `data/radio.json`, `data/setlists.json`, `data/events.json` を作成。
`trance-nexus.html` 内の `ARTISTS`, `RADIO`, `SETLISTS`, `EVENTS` 定数からJSONに変換して初期データとして使うこと。

---

## Step 3 — スクレイパー実装

### scrapers/scrape-radio.js
- 対象: 各ラジオ番組の公式ページ / di.fm / afterhours.fm
- 取得内容: 最新エピソード番号・放送日時・ゲスト情報
- 出力: `data/radio.json` を上書き更新

```js
// 実装例の骨格（実際に動くコードを書くこと）
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeASOT() {
  // https://www.astateoftrance.com/episodes/ をスクレイピング
  // 最新エピソード番号・放送日・ゲストDJを取得
}

async function main() {
  const data = await Promise.all([scrapeASOT(), /* 他の番組 */]);
  fs.writeFileSync('./data/radio.json', JSON.stringify(data, null, 2));
  console.log('✅ radio.json updated');
}
main();
```

### scrapers/scrape-setlists.js
- 対象: https://www.1001tracklists.com
- 取得内容: 各アーティストの最新セットリスト（トラック名・時刻・イベント名）
- `data/artists.json` のアーティストリストをループして取得
- robots.txt を必ず確認し、禁止されているパスはスキップすること

### scrapers/scrape-events.js
- 対象: https://www.residentadvisor.net/events （trance ジャンルフィルター）
- 取得内容: イベント名・日付・会場・出演アーティスト・チケットURL
- 日本のイベントは https://www.club-ttm.com なども確認

### scrapers/update-all.js
全スクレイパーを順番に実行する統合スクリプト。
```js
const { execSync } = require('child_process');
['scrape-radio','scrape-setlists','scrape-events'].forEach(s => {
  console.log(`▶ Running ${s}...`);
  execSync(`node scrapers/${s}.js`, { stdio: 'inherit' });
});
console.log('🎉 All data updated!');
```

---

## Step 4 — Next.js ページ実装

デザインは `trance-nexus.html` のエネルギッシュな黒・オレンジ・赤テーマを忠実に再現。
フォント: Bebas Neue（見出し）, Barlow Condensed（本文）, Noto Sans JP（日本語）

### app/page.jsx — ヒーローセクション
- フラメのアニメーション背景
- 統計数値（アーティスト数・番組数・セットリスト数・イベント数）

### app/artists/page.jsx
- `data/artists.json` を読み込んで表示
- ジャンルフィルター・検索ボックス（クライアントサイド）

### app/radio/page.jsx
- `data/radio.json` を読み込み
- フィーチャーショー（ASOT）をヒーローカードで大きく表示
- Weekly/Biweekly/Monthlyタブ

### app/setlists/page.jsx
- `data/setlists.json` を読み込み
- トラックリスト展開UI（最初は5曲、「もっと見る」で全曲）

### app/events/page.jsx
- `data/events.json` を読み込み
- 日付順ソート、ON SALE / COMING SOON / ENDED バッジ

---

## Step 5 — 自動更新スケジュール設定

### scrapers/scheduler.js（cron）

```js
const cron = require('node-cron');
const { execSync } = require('child_process');

// 毎日AM3時に全データ更新
cron.schedule('0 3 * * *', () => {
  console.log('⏰ Daily update started:', new Date().toISOString());
  execSync('node scrapers/update-all.js', { stdio: 'inherit' });
});

// ラジオは毎週金曜PM8時にも更新（ASOT放送直前）
cron.schedule('0 20 * * 5', () => {
  console.log('📻 Friday radio update:', new Date().toISOString());
  execSync('node scrapers/scrape-radio.js', { stdio: 'inherit' });
});

console.log('🕐 Scheduler running...');
```

### package.json scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "scrape": "node scrapers/update-all.js",
    "scrape:radio": "node scrapers/scrape-radio.js",
    "scrape:setlists": "node scrapers/scrape-setlists.js",
    "scrape:events": "node scrapers/scrape-events.js",
    "schedule": "node scrapers/scheduler.js"
  }
}
```

---

## Step 6 — GitHub Actions（CI自動化）

`.github/workflows/update-data.yml` を作成：

```yaml
name: Update Trance Data

on:
  schedule:
    - cron: '0 3 * * *'   # 毎日AM3時（UTC）
  workflow_dispatch:         # 手動実行ボタン

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run scrape
      - name: Commit updated data
        run: |
          git config user.name "trance-nexus-bot"
          git config user.email "bot@trance-nexus.example"
          git add data/
          git diff --staged --quiet || git commit -m "chore: auto-update data $(date '+%Y-%m-%d')"
          git push
```

---

## Step 7 — Vercel デプロイ設定

```bash
npm install -g vercel
vercel --prod
```

`vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

---

## コーディング規約

- **言語**: JavaScript（TypeScript不要）
- **スタイル**: Tailwind CSS + インラインCSS変数（既存デザインに合わせる）
- **エラーハンドリング**: スクレイパーは必ずtry/catchで囲み、失敗しても既存JSONを壊さない
- **robots.txt遵守**: 各スクレイプ先のrobots.txtを事前確認し、禁止パスはスキップ
- **レートリミット**: リクエスト間に最低1秒のディレイを入れること（`await sleep(1000)`）
- **データバックアップ**: JSON更新前に `data/backup/` に旧ファイルを退避

---

## 最初にやること

1. `trance-nexus.html` を読んで既存デザインとデータ構造を把握する
2. `npm run scrape` で初回データ取得を実行
3. `npm run dev` でローカル確認
4. 問題なければ `vercel --prod` でデプロイ

---

## 困ったときの参考リンク

- Claude Code公式ドキュメント: https://code.claude.com/docs
- Next.js App Router: https://nextjs.org/docs/app
- Cheerio（スクレイピング）: https://cheerio.js.org
- 1001tracklists: https://www.1001tracklists.com
- Resident Advisor: https://www.residentadvisor.net

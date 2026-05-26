# TRANCE NEXUS — Trance Music Information Portal

トランスミュージック情報の総合ポータルサイト。アーティスト情報、ラジオ番組スケジュール、イベント情報を自動収集・更新するシステム。

## 🎵 プロジェクト概要

**TRANCE NEXUS** は、トランスミュージック愛好家向けの包括的な情報サイトです。現在のコンテンツ規模：

- 🎤 **50アーティスト** - バイリンガル・プロフィール、サブジャンル、外部リンク
- 💿 **20レーベル** - レーベル史、所属アーティスト、代表作
- 📰 **40記事** - 歴史・サブジャンル解説・アーティスト特集・DJ機材ガイドの長尺ブログ
- 📚 **40用語集** - ジャンル・プロダクション・DJ・カルチャー用語の定義
- 📻 ラジオ番組／🎉 イベントの自動収集スクレイパー（拡張中）

数値は `data/` 内の実データから build 時に算出（`app/page.jsx` の hero stats）。コンテンツ追加で自動更新されます。

## 📂 ディレクトリ構成

```
trance-nexus/
├── CLAUDE.md                      # プロジェクト仕様書
├── package.json                   # 依存関係管理
├── next.config.js                 # Next.js設定
├── tailwind.config.js             # Tailwind CSS設定
├── postcss.config.js              # PostCSS設定
├── vercel.json                    # Vercel設定
├── .env.local                     # 環境変数（gitignore）
├── .eslintrc.json                 # ESLint設定
├── .github/
│   └── workflows/
│       └── update-data.yml        # GitHub Actions自動更新
├── data/
│   ├── artists.json               # アーティストマスターデータ
│   ├── radio.json                 # ラジオ番組データ
│   ├── events.json                # イベントデータ
│   └── backup/                    # 旧データバックアップ
├── scrapers/
│   ├── scrape-radio.js            # ラジオスケジュール取得
│   ├── scrape-events.js           # イベント情報取得
│   ├── update-all.js              # 全スクレイパー一括実行
│   └── scheduler.js               # cron自動実行設定
├── app/
│   ├── layout.jsx                 # ルートレイアウト
│   ├── page.jsx                   # トップページ
│   ├── globals.css                # グローバルスタイル
│   ├── artists/
│   │   └── page.jsx               # アーティスト一覧ページ
│   ├── radio/
│   │   └── page.jsx               # ラジオ番組ページ
│   └── events/
│       └── page.jsx               # イベント情報ページ
├── components/
│   ├── Navigation.jsx             # ナビゲーション
│   └── Footer.jsx                 # フッター
└── README.md                      # このファイル
```

## 🚀 セットアップ手順

### 1. 依存関係インストール

```bash
cd trance-nexus
npm install
```

### 2. ローカル開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセス

### 3. 手動データ更新

```bash
# 全スクレイパー実行
npm run scrape

# 個別実行
npm run scrape:radio
npm run scrape:events
```

### 4. スケジューラ起動（ローカル）

```bash
npm run schedule
```

設定済みのcronジョブが実行：
- **毎日 03:00 UTC**: 全データ更新
- **毎週金曜 19:00 UTC**: ラジオデータ更新

## 🔧 ビルド & デプロイ

### Next.js ビルド

```bash
npm run build
npm start
```

`npm run build` は次の順番で実行されます：

1. **prebuild** — OG画像、サイトマップ、検索インデックス、RSS、PWAアセットを生成
2. **verify:artist-links** — `data/artists/*.links` の全URLを strict-TLS で GET 検証
3. **verify:amazon-asins** — `data/blog/products.js` の全ASINを `amazon.{co.jp|com}/dp/<ASIN>` で検証
4. **next build** — 上記2ステップが両方とも成功した場合のみ実行

ビルド前検証（gate）に失敗すると `next build` は走らず、ビルドが exit 1 で停止します。`npm run build:fast` で gate を飛ばして直接 `next build` だけを走らせることも可能（緊急時のみ推奨）。

### 🛡 Pre-build 自動検証

本番デプロイ前に以下が自動チェックされます。すべて pass しないとビルドが落ちます。

| 項目 | スクリプト | 検証内容 | ログ出力先 |
|---|---|---|---|
| アーティスト外部リンク | `npm run verify:artist-links` | `data/artists/*.js` の `links: { ... }` ブロック内すべてのURLに対して strict-TLS GET、リダイレクト追跡（最大5）、10秒タイムアウト、3回リトライ | `logs/verify-artist-links.log` |
| Amazon ASIN | `npm run verify:amazon-asins` | `data/blog/products.js` の `ja:` / `en:` 配列内すべてのASINに対して `amazon.co.jp/dp/<ASIN>` を GET、ステータス＋HTML内の "Page Not Found" 検知（全リンクが JP ストアにルーティングされるため `en:` 配列の ASIN も JP ストア ASIN である必要がある） | `logs/verify-amazon-asins.log` |

両方のスクリプトは独立して実行可能です：

```bash
npm run verify:artist-links      # アーティストリンクのみ
npm run verify:amazon-asins      # ASINのみ
npm run verify:all               # 両方を順番に
```

**ビルドが gate で落ちた場合の対処：**

1. **アーティストリンク失敗** — `logs/verify-artist-links.log` の `[FAIL]` 行を確認。`data/artists/*.js` から該当URLを削除する（代替URLを web 検索で確認できれば置き換え）。死リンクの代替候補：
   - 公式SoundCloud（最も安定）
   - 公式Spotify Artist URL
   - Beatport検索URL（`https://www.beatport.com/search?q=<artist>`）— 必ず200を返す universal fallback
   - 代替が見つからなければそのキーごと削除（カードはそれ以外のリンクで表示される）

2. **ASIN失敗** — `logs/verify-amazon-asins.log` の `[FAIL]` 行を確認。`data/blog/products.js` から該当エントリを削除（または正しいASINを WebSearch で確認して差し替え）。Amazon は廃番商品のリスティングを撤去するので、過去に動いていたASINも失効しうる。

3. **再実行** — 修正後、`npm run verify:all` でローカル確認 → pass したら `npm run build` を再実行。

**Gate を一時的に回避したい場合**（推奨されないが緊急時用）：

```bash
npm run build:fast    # 検証スキップで next build のみ走る
```

ただし `build:fast` で deploy したコードに死リンクがあれば、訪問者の体験を損ねます。本番に push する前に必ず `npm run build`（フル gate 込み）が pass することを確認してください。

CI では GitHub Actions が `npm run build` を実行するため、verifier 失敗時は workflow が `failed` になり、`logs/verify-*.log` が `verification-logs` というアーティファクトとして自動アップロードされます（Actions の run 詳細ページからダウンロード可能）。

### Vercel へのデプロイ

```bash
npm install -g vercel
vercel --prod
```

Vercelダッシュボードで環境変数を設定：
```
NEXT_PUBLIC_API_URL=https://trance-nexus.vercel.app
```

### GitHub Actions 自動更新

`.github/workflows/update-data.yml` で以下を自動実行：
- **毎日 03:00 UTC**: 全スクレイパー実行
- **手動トリガー**: Actions タブから "Update Trance Data" で手動実行可能
- 更新があれば自動で git push

## 📊 データ仕様

### artists.json
```json
{
  "name": "Armin van Buuren",
  "flag": "🇳🇱",
  "emoji": "🌊",
  "genre": "UPLIFTING",
  "sub": "Uplifting / Progressive",
  "bio": "説明文...",
  "tags": ["UPLIFTING", "PROGRESSIVE", "LEGEND"],
  "banner": "b-uplifting",
  "links": ["WEBSITE", "MIXCLOUD"]
}
```

### radio.json
```json
{
  "name": "A State of Trance",
  "dj": "Armin van Buuren",
  "num": "SHOW #001",
  "live": true,
  "freq": "weekly",
  "genre": "Uplifting / Progressive",
  "listeners": "40M+",
  "sched": [
    {"day": "FRI", "time": "21:00 CET", "ep": "毎週"}
  ],
  "desc": "説明文..."
}
```

### events.json
```json
{
  "day": "15",
  "mon": "MAY",
  "yr": "2026",
  "name": "A State of Trance 1150",
  "venue": "Ziggo Dome — Amsterdam, NL",
  "time": "20:00 CET",
  "capacity": "17,000",
  "artists": ["Armin van Buuren", "Andrew Rayel"],
  "status": "on-sale"
}
```

## 🎨 デザイン

### カラースキーム

| 用途 | カラー | コード |
|------|--------|--------|
| 背景 | 深い黒 | `#0a0500` |
| アクセント | オレンジ | `#ff6a00` |
| 強調 | 赤 | `#e5001c` |
| テキスト | クリーム色 | `#f0e0c8` |
| 薄暗い | 茶色 | `#6b4e2a` |

### フォント

- **Bebas Neue**: 見出し、タイトル
- **Barlow Condensed**: 本文、説明
- **Noto Sans JP**: 日本語

## 📝 スクレイパー実装ガイド

### robots.txt 遵守

各スクレイパーはスクレイピング前に `robots.txt` をチェック：

```javascript
async function checkRobotsTxt(domain) {
  const response = await axios.get(`${domain}/robots.txt`);
  // 禁止パスをスキップ
}
```

### レートリミット

リクエスト間に最低1秒のディレイ：

```javascript
const delay = async () => {
  await sleep(process.env.SCRAPER_DELAY || 1000);
};
```

### エラーハンドリング

スクレイパーは失敗時も既存JSONを壊さない：

```javascript
try {
  // スクレイピング処理
} catch (error) {
  console.error('Failed:', error);
  // 既存データを保持
  return existingData;
}
```

### バックアップ

更新前に旧ファイルをバックアップ：

```javascript
backupJson('./data/radio.json');
// data/backup/radio.json.2026-05-04T... に保存される
```

## 🔗 参考リンク

- **公式サイト**
  - [A State of Trance](https://www.astateoftrance.com)
  - [1001tracklists](https://www.1001tracklists.com)
  - [Resident Advisor](https://www.residentadvisor.net)

- **開発ドキュメント**
  - [Next.js 公式](https://nextjs.org)
  - [Tailwind CSS](https://tailwindcss.com)
  - [Cheerio](https://cheerio.js.org) - Webスクレイピング
  - [node-cron](https://github.com/kelektiv/node-cron) - cron実行

## 📋 プロジェクト規約

- **言語**: JavaScript（TypeScript不要）
- **フレームワーク**: Next.js 15
- **スタイル**: Tailwind CSS + CSS変数
- **スクレイピング**: axios + cheerio
- **スケジューリング**: node-cron
- **自動化**: GitHub Actions + Vercel

## 📄 ライセンス

FAN-MADE PROJECT  
このプロジェクトはいかなるアーティスト、レーベル、またはイベント主催者とも提携していません。  
情報は教育目的で収集されています。

---

**最終更新**: 2026年5月4日  
**バージョン**: 1.0.0

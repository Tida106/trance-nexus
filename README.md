# TRANCE NEXUS — Trance Music Information Portal

トランスミュージック情報の総合ポータルサイト。アーティスト情報、ラジオ番組スケジュール、セットリスト、イベント情報を自動収集・更新するシステム。

## 🎵 プロジェクト概要

**TRANCE NEXUS** は、トランスミュージック愛好家向けの包括的な情報サイトです。以下を自動的に収集・更新します：

- 🎤 **140+アーティスト情報** - プロフィール、ジャンル、リンク
- 📻 **52ラジオ番組** - スケジュール、ゲスト情報
- 🎵 **800+セットリスト** - トラック情報、タイムコード
- 🎉 **30+イベント** - 日程、会場、チケット情報

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
│   ├── setlists.json              # セットリストデータ
│   ├── events.json                # イベントデータ
│   └── backup/                    # 旧データバックアップ
├── scrapers/
│   ├── scrape-radio.js            # ラジオスケジュール取得
│   ├── scrape-setlists.js         # セットリスト取得（1001tracklists）
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
│   ├── setlists/
│   │   └── page.jsx               # セットリストページ
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
npm run scrape:setlists
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

### setlists.json
```json
{
  "event": "ASOT 1100",
  "dj": "Armin van Buuren",
  "date": "2026年3月15日",
  "venue": "Utrecht, NL",
  "duration": "2h 00m",
  "type": "live",
  "tracks": [
    {"n": 1, "t": "トラック名", "time": "0:00"}
  ],
  "more": 47
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

# Schicksal Official Webpage

Schicksal の公式ウェブサイトです。

Schicksal は、個人、中小企業、スタートアップ、学生を対象に、IT コンサルティング、Web・ソフトウェア開発、教育・トレーニングを提供する独立系 IT サービス組織です。「信頼されるテクノロジーパートナー」として、日常的な IT トラブルの相談から、Web アプリケーション開発、DX 支援、IT 学習支援までを一貫してサポートします。

## 概要

このリポジトリでは、Schicksal の事業概要、サービス内容、料金体系、プライバシーポリシー、利用規約などを掲載する公式サイトを管理しています。

主な掲載内容は以下のとおりです。

- Schicksal の組織概要
- Web・ソフトウェア開発サービス
- IT コンサルティング・DX 支援サービス
- 教育・トレーニングサービス
- 料金体系
- プライバシーポリシー
- 利用規約
- ロゴ・ブランドアセット

## 技術スタック

- Vue 3
- TypeScript
- Vite
- Vue Router
- Vue I18n
- GSAP
- Netlify

## フォルダー構成

```text
.
├── public/                 # 公開静的ファイル
│   ├── assets/             # ダウンロード用アセット
│   ├── image/              # 画像ファイル
│   ├── favicon.svg         # favicon 元データ
│   ├── favicon.ico         # favicon
│   ├── Schicksal.svg       # Schicksal ロゴ
│   └── site.webmanifest    # PWA / favicon 関連設定
├── scripts/                # 補助スクリプト
│   └── generate-favicons.js
├── source/                 # 原稿・ポリシー文書
│   ├── privacy.md
│   └── terms.md
├── src/                    # アプリケーション本体
│   ├── components/         # 再利用可能な Vue コンポーネント
│   ├── locales/            # 多言語対応ファイル
│   │   ├── en.json
│   │   └── ja.json
│   ├── router/             # ルーティング設定
│   ├── views/              # ページ単位の Vue コンポーネント
│   ├── App.vue             # ルートコンポーネント
│   ├── main.ts             # エントリーポイント
│   ├── style.css           # グローバルスタイル
│   └── vite-env.d.ts       # Vite 型定義
├── dist/                   # ビルド成果物
├── index.html              # HTML エントリーポイント
├── netlify.toml            # Netlify デプロイ設定
├── package.json            # npm scripts / 依存関係
├── package-lock.json       # 依存関係ロックファイル
├── tsconfig.json           # TypeScript 設定
├── tsconfig.node.json      # Node.js 用 TypeScript 設定
└── vite.config.ts          # Vite 設定
```

## 主要ページ

| パス | 内容 |
| --- | --- |
| `/` | ホーム |
| `/web-dev` | Web・ソフトウェア開発 |
| `/it-consulting` | IT コンサルティング |
| `/education` | 教育・トレーニング |
| `/about` | Schicksal について |
| `/pricing` | 料金体系 |
| `/privacy` | プライバシーポリシー |
| `/terms` | 利用規約 |
| `/assets/*` | ブランドアセット |

## セットアップ

依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ビルドを実行します。

```bash
npm run build
```

ビルド結果をローカルで確認します。

```bash
npm run preview
```

## npm scripts

| コマンド | 内容 |
| --- | --- |
| `npm run generate-favicons` | favicon 関連ファイルを生成 |
| `npm run dev` | favicon を生成して Vite 開発サーバーを起動 |
| `npm run build` | favicon 生成、型チェック、本番ビルドを実行 |
| `npm run preview` | ビルド済みサイトをローカルで確認 |

## 多言語対応

サイト文言は `src/locales/` で管理しています。

- `src/locales/ja.json`: 日本語
- `src/locales/en.json`: 英語

ページタイトルやメタディスクリプションもロケールファイルから読み込まれます。

## デプロイ

Netlify へのデプロイを想定しています。

- ビルドコマンド: `npm run build`
- 公開ディレクトリ: `dist`
- Node.js バージョン: `22`

SPA ルーティングに対応するため、`netlify.toml` で全パスを `index.html` にリダイレクトしています。

## ライセンス

このリポジトリの内容、ソースコード、画像、ロゴ、文書の利用条件は、リポジトリ管理者の定める方針に従います。
# Schicksal-Officiak-Webpage

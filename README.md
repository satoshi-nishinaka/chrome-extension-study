# chrome-extension-study

[satoshi-nishinaka/chrome-extension-study](https://github.com/satoshi-nishinaka/chrome-extension-study)

Qiita の記事にある「表示しているページの URL をクリップボードにコピーする」を元に、Chrome 拡張及び TypeScript, React, SCSS について勉強する。<br />
目的は Chrome 拡張の作成なので、既にこの世に同じようなものがあるかどうかは気にしません。

- [表示中のページのタイトルと URL をキーボードショートカットでクリップボードに保存する Chrome 拡張を作ってみた - Qiita](https://qiita.com/satake_masaki/items/def09ca51731efa2826f)

TypeScriptの導入に関しては chibat さんのレポジトリを元に行いました。
- [chibat/chrome-extension-typescript-starter: Chrome Extension TypeScript Starter](https://github.com/chibat/chrome-extension-typescript-starter)

## Prerequisites

- [Node.js + npm](https://nodejs.org/) (Node.js 22 以上)

## Option

- [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following

- TypeScript
- Webpack
- Moment.js
- jQuery
- React

## Setup

```
npm install
```

## Import as Visual Studio Code project

...

## Build

```
npm run build
```

Chrome と Firefox の両方をビルドし、次のディレクトリへ出力します。

- Chrome: `dist/chrome`
- Firefox: `dist/firefox`

片方だけをビルドする場合:

```shell
npm run build:chrome
npm run build:firefox
```

## Build in watch mode

### terminal

```
npm run watch
```

`npm run watch` は Chrome 用です。Firefox 用は次を実行します。

```shell
npm run watch:firefox
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

### Lint

Lintによる自動修正

```
npm run lint:fix
```

## Chrome への読み込み

Chrome の拡張機能管理画面でデベロッパーモードを有効にし、「パッケージ化されていない拡張機能を読み込む」から `dist/chrome` を選択します。

## Firefox への一時読み込み

ビルド後、次のいずれかを使用します。

```shell
npm run run:firefox
```

または Firefox で `about:debugging` を開き、「この Firefox」→「一時的なアドオンを読み込む」から `dist/firefox/manifest.json` を選択します。

Firefox manifest の検証:

```shell
npm run lint:firefox
```

AMO 提出用の未署名 ZIP の作成:

```shell
npm run package:firefox
```

成果物は `artifacts` に出力されます。この ZIP は AMO への提出用であり、Firefox Release版へ直接インストールすることはできません。

## Firefoxへ恒久的にインストールできるXPIの作成

Firefox Release版へ通常のアドオンとして追加するには、Mozillaによる署名が必要です。AMO Developer HubでAPI資格情報を発行し、環境変数へ設定してから署名します。

```shell
export WEB_EXT_API_KEY='AMOのJWT issuer'
export WEB_EXT_API_SECRET='AMOのJWT secret'
npm run sign:firefox
```

`sign:firefox` は自己配布用の `unlisted` チャンネルへ送信し、審査・署名が完了するとインストール可能な署名済みXPIを `artifacts` にダウンロードします。API secretはリポジトリや設定ファイルへ保存しないでください。

開発中に署名せず試す場合は、`npm run run:firefox` または `about:debugging` の一時読み込みを使用します。一時読み込みではZIPではなく `dist/firefox/manifest.json` を選択してください。

## Test

```shell
npm test
npm run lint
npm run test:manifests
```

## 複数サイズのアイコン画像の作成

- [Chrome Extension のアイコン複数サイズ作るの面倒くさい - Qiita](https://qiita.com/ygkn/items/efa1e311006f5c900123)

※ 要 ImageMagick

### Mac に ImageMagick をインストールする

```shell
$ brew install imagemagick --build-from-source
```

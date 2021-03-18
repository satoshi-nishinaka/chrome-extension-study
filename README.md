# chrome-extension-study
[satoshi-nishinaka/chrome-extension-study](https://github.com/satoshi-nishinaka/chrome-extension-study)


Qiitaの記事にある「表示しているページのURLをクリップボードにコピーする」を元に、Chrome拡張及びTypeScript, React, SCSS について勉強する。
目的はChrome拡張の作成なので、既にこの世に同じようなものがあるかどうかは気にしません。

- [表示中のページのタイトルとURLをキーボードショートカットでクリップボードに保存するChrome拡張を作ってみた - Qiita](https://qiita.com/satake_masaki/items/def09ca51731efa2826f)

- [chibat/chrome-extension-typescript-starter: Chrome Extension TypeScript Starter](https://github.com/chibat/chrome-extension-typescript-starter)


## Prerequisites

* [node + npm](https://nodejs.org/) (Current Version)

## Option

* [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following

* TypeScript
* Webpack
* Moment.js
* jQuery
* React
* Jest

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

## Build in watch mode

### terminal

```
npm run watch
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Test
`npx jest` or `npm run test`


## 複数サイズのアイコン画像の作成

- [Chrome Extension のアイコン複数サイズ作るの面倒くさい - Qiita](https://qiita.com/ygkn/items/efa1e311006f5c900123)

※ 要ImageMagick

### MacにImageMagickをインストールする

```shell
$ brew install imagemagick --build-from-source
```
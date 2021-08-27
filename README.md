# chrome-extension-study

[satoshi-nishinaka/chrome-extension-study](https://github.com/satoshi-nishinaka/chrome-extension-study)

Qiita の記事にある「表示しているページの URL をクリップボードにコピーする」を元に、Chrome 拡張及び TypeScript, React, SCSS について勉強する。
目的は Chrome 拡張の作成なので、既にこの世に同じようなものがあるかどうかは気にしません。

- [表示中のページのタイトルと URL をキーボードショートカットでクリップボードに保存する Chrome 拡張を作ってみた - Qiita](https://qiita.com/satake_masaki/items/def09ca51731efa2826f)

- [chibat/chrome-extension-typescript-starter: Chrome Extension TypeScript Starter](https://github.com/chibat/chrome-extension-typescript-starter)

## Prerequisites

- [node + npm](https://nodejs.org/) (~15)

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

※ 要 ImageMagick

### Mac に ImageMagick をインストールする

```shell
$ brew install imagemagick --build-from-source
```

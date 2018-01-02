# chrome-extension-study

Qiitaの記事にある「表示しているページのURLをクリップボードにコピーする」を元に、Chrome拡張について勉強する。
目的はChrome拡張の作成なので、既にこの世に同じようなものがあるかどうかは気にしません。

アイコン画像は拾い物なので、私に著作権はありません。
問題があれば差し替えます。

## 元となるソース

- [表示中のページのタイトルとURLをキーボードショートカットでクリップボードに保存するChrome拡張を作ってみた - Qiita](https://qiita.com/satake_masaki/items/def09ca51731efa2826f)



## 複数サイズのアイコン画像の作成

- [Chrome Extension のアイコン複数サイズ作るの面倒くさい - Qiita](https://qiita.com/ygkn/items/efa1e311006f5c900123)

※ 要ImageMagick

### MacにImageMagickをインストールする

```shell
$ brew install imagemagick --build-from-source
```
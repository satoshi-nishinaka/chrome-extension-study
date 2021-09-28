const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const enabledSourceMap =  process.env.NODE_ENV !== 'production';


const srcDir = '../src/';

module.exports = {
  entry: {
    popup: path.join(__dirname, srcDir + 'popup.ts'),
    background: path.join(__dirname, srcDir + 'background.ts'),
    contentScript: path.join(__dirname, srcDir + 'content_script.ts'),
    style: path.join(__dirname, srcDir + 'scss/popup.scss'),
    popupContainer: path.join(__dirname, srcDir + 'Container/PopupContainer'),
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        // Sassファイルの読み込みとコンパイル
        use: [
          // CSSファイルを抽出するように MiniCssExtractPlugin のローダーを指定
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSSをバンドルするためのローダー
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
            },
          },
          // Sass を CSS へ変換するローダー
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                // fiber: require('fibers'),
                fiber: false,
              },
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    // exclude locale files in moment
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      filename: '../css/popup.css',
    }),
    new CopyPlugin({
      patterns: [{ from: '.', to: '../', context: 'public' }],
      options: {},
    }),
  ],
  devtool: "source-map",
  performance: { hints: false },
};

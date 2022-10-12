/* eslint @typescript-eslint/no-var-requires: "off" */
const path = require('path');
// ライセンスをjsファイルの中に含める
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production', // 'production' , 'development'

  // メインとなるTypeScriptファイル（エントリーポイント）
  entry: {
    index: `./src/ts/index.ts`,
  },

  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, 'dist/assets/js'),
    // 出力ファイル名
    filename: 'bundle.js', // '[name].js' , 'bundle.js'
  },

  // ソースマップの利用
  // devtool: 'source-map',

  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },

  //パッケージのライセンス情報をjsファイルの中に含める場合
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};

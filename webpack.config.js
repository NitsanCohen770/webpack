'use strict';
const TerserPlugin = require('terser-webpack-plugin');
const { NONAME } = require('dns');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'auto',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpg)$/, type: 'asset/resource' },
      { test: /\.(svg)$/, type: 'asset/inline' },
      {
        test: /\.(js)$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      //   { test: /\.(svg)$/, type: 'asset'},  asset - if file more than 8kb:resource; less:inline
      //   { test: /\.(txt)$/, type: 'asset/source'}, load txt to js string
    ],
  },
  resolve: {},
  devtool: 'source-map',
  plugins: [new TerserPlugin()],
};

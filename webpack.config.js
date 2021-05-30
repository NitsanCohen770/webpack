'use strict';

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
      { test: /\.(png|jpg)$/, type: 'asset/resource' }, // asset - if file more than 8kb:resource; less:inline
      { test: /\.(svg)$/, type: 'asset/inline' },
    ],
  },
  resolve: {},
  devtool: 'source-map',
  plugins: [],
};

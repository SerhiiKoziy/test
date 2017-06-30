/* @flow */
const webpack = require('webpack');
const postcssImport = require('postcss-import');
const postcssCssNext = require('postcss-cssnext');
const paths = require('../config/paths')

module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ['json-loader'],
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=_[local]__[hash:base64:5]!postcss'
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  // $FlowFixMe
  postcss: (instance) => [
    postcssImport({ path: [paths.rootPath] }),
    postcssCssNext()
  ]
};

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.common.config');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [
    isDevMod && 'webpack-hot-middleware/client',
    './src/ssr-index.js',
  ].filter(Boolean),

  plugins: [
   // !isDevMod && new CleanWebpackPlugin('./', { root: path.resolve(__dirname, '../') }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
});
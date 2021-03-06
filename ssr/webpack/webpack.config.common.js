const path = require('path');
const webpack = require('webpack');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    filename: 'js/[name].js',
    path: path.resolve('./public'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(ttf|eot|svg|woff|png|jpg)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]?[hash]"
        }
      }
    ],
  },

  plugins: [
    isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
  ],
};
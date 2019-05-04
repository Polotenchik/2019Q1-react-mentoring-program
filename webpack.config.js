// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

// const PRODUCTION = 'production';
// const DEVELOPMENT = 'development';

// const env = process.env.NODE_ENV;
// const isProduction = env && env.trim() === PRODUCTION;
// const isDevelopment = env && env.trim() === DEVELOPMENT;
// const distPath = path.join(__dirname, '/public');

// const config = {
//     mode: isProduction ? PRODUCTION : DEVELOPMENT,

//     entry: {
//         app: './src/index.js',
//     },

//     output: {
//         filename: 'bundle.js',
//         path: distPath,
//     },

//     devtool: isDevelopment ? 'eval-source-map' : 'none',

//     module: {
//         rules: [
//             {
//                 test: /\.html$/,
//                 use: 'html-loader',
//             },
//             {
//                 test: /\.(js|jsx)?$/,
//                 exclude: /node_modules/,
//                 use: [{ loader: 'babel-loader' }],
//             },
//             {
//                 test: /\.scss$/,
//                 exclude: /node_modules/,
//                 use: [
//                     isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
//                     'css-loader',
//                     {
//                         loader: 'postcss-loader',
//                         options: {
//                             plugins: [
//                                 isProduction ? require('cssnano') : () => {},
//                                 require('autoprefixer')({
//                                     browsers: ['last 2 versions'],
//                                 }),
//                             ],
//                         },
//                     },
//                     'sass-loader',
//                 ],
//             },
//             {
//                 test: /\.(png|jpg|gif)$/i,
//                 use: [
//                     {
//                         loader: 'file-loader',
//                         options: {
//                             name: 'img/[name].[ext]'
//                         }
//                     },
//                     {
//                         loader: 'image-webpack-loader',
//                         options: {
//                             disable: true // webpack@2.x and newer
//                         },
//                     },
//                 ],
//             },
//         ],
//     },

//     plugins: [
//         new MiniCssExtractPlugin({
//             filename: '[name].css',
//             chunkFilename: '[id].css',
//         }),
//         new HtmlWebpackPlugin({
//             filename: './index.html',
//             template: path.resolve(__dirname, './src/index.html'),
//         }),
//         new webpack.HotModuleReplacementPlugin(),
//     ],

//     optimization: isProduction ? {
//         minimizer: [
//             new UglifyJsPlugin({
//                 sourceMap: false,
//                 uglifyOptions: {
//                 compress: {
//                     inline: true,
//                     drop_console: true,
//                 },
//                 },
//             }),
//         ],
//     } : {},

//     devServer: {
//         contentBase: distPath,
//         port: 5000,
//         historyApiFallback: true,
//         compress: true,
//         open: true,
//         hot: true,
//     },
// };

// module.exports = config;
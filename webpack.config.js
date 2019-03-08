// const webpack = require('webpack');
// const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//
// let configProd = {
//     mode: 'production',
//     performance: { hints: false },
//     entry: {
//         main: [
//             'assets/js/scripts.js',
//             'assets/css/main.css'
//         ]
//     },
//     output: {
//         path: path.resolve(__dirname, '../assets/js'),
//         filename: 'scripts.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js/,
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['@babel/preset-env']
//                 }
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     {loader: 'css-loader', options: {url: false}},
//                     {loader: 'postcss-loader'},
//                     {loader: 'sass-loader'}
//                 ]
//             }
//         ]
//     },
//     plugins: [
//         new MiniCssExtractPlugin({
//             // Options similar to the same options in webpackOptions.output
//             // both options are optional
//             filename: "[name].css",
//             chunkFilename: "[id].css"
//         })
//     ],
//     // optimization: {
//     //     minimizer: [
//     //         new UglifyJsPlugin({
//     //             cache: true,
//     //             parallel: 4,
//     //             sourceMap: true,
//     //         }),
//     //     ]
//     // },
// };
//
// module.exports = (env, data) => {
//     return configProd;
// };
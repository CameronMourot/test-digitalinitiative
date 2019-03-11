const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let configProd = {
    mode: 'production',
    performance: { hints: false },
    entry: {
        main: [
            './assets/js/main.js',
            './assets/sass/main.scss'
        ]
    },
    output: {
        path: path.resolve(__dirname, './assets/compile'),
        filename: 'theme.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader', options: {url: false}},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./theme.css"
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: 4,
                sourceMap: true,
            }),
        ]
    },
};

module.exports = (env, data) => {
    return configProd;
};
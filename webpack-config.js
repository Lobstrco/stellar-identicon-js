const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const settings = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        'lib/stellar-identicon-generator': [path.join(__dirname, './index.js')],
        'demo/demo': [path.join(__dirname, './demo/main.js')]
    },
    output: {
        path: path.join(__dirname, './'),
        filename: '[name].js',
        library: 'stellarIdenticonGenerator',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            sourceMap: true
        })
    ],
    optimization: {
        minimizer: [new TerserPlugin({
            parallel: true,
            sourceMap: false,
            terserOptions: {
                warnings: true
                //toplevel: true
            }
        })]
    }
};

module.exports = settings;

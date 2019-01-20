const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { parsed: localEnv } = require('dotenv').config();

const config = merge(baseConfig, {
    mode: 'production',
    entry: {
        app: ['./src/index.tsx'],
        vendor: ['react', 'react-dom'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    target: 'web',
    module: {
        rules: [
        ],
    },
    plugins: [
    ],
});
module.exports = config;

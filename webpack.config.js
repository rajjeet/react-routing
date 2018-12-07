const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: {
        app: './client/src/index.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
        historyApiFallback: true

    },
    module: {

        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|ttf|otf|eot|svg|woff|woff2|json)$/,
                loader: "file-loader",
                options:{
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./client/src/index.html"}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),

    ]

};
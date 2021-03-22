const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    devtool: "eval-source-map",

    entry:  "./Code/development/main.ts",
    module:{
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname,"Code")]

            },
            {
                test: /\.css$/i,
                use: [
                    "handlebars-loader", // handlebars loader expects raw resource string
                    "extract-loader",
                    "css-loader",
                    "sass-loader"
                ],
                include: [path.resolve((__dirname,"graphics/css"))]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'css/[name].blocks.css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts",".js",".json"],
        modules: ['node_modules']
    },
    mode: "development",
    output:{
        publicPath: "public",
        filename: "main.js",
        path: path.resolve(__dirname,"public")

    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"Code/index.html"),
        })
    ]
}
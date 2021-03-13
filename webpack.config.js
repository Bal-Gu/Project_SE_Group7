const path = require("path");
var webpack = require("webpack")

module.exports ={
    devtool: "eval-source-map",

    entry:  "./Code/development/main.ts",
    module:{
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: [path.resolve(__dirname,"Code")]

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
        })
    ]
}
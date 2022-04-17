const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "umd",
        globalObject: "this",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `nriot-utils | Copyright (c) NriotHrreion ${new Date().getFullYear()} | https://github.com/NriotHrreion/nriot-utils`,
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false // Don't generate xxx.LICENSE.txt
            })
        ]
    },
    mode: "production",
    devtool: "source-map",
};

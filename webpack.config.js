var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        base: "./origin/entry/base.js",
        main: "./origin/entry/main.js"
    },
    output: {
        path: __dirname + '/public/build',
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel",
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!autoprefixer-loader?{browsers:['last 2 version', 'Firefox 15']}")
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!less-loader?sourceMap")
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!sass-loader?sourceMap!autoprefixer-loader?{browsers:['last 2 version', 'Firefox 15']}")
        }, {
            test: /\.(ttf|eot|woff|woff2|svg|jpe?g|png|gif)$/,
            loader: "url-loader",
            query: {limit: 50000}
        }]
    },
    devtool: "source-map",
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "common",
        //     minChunks: 2
        // }),
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
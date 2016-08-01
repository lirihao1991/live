var webpack = require("webpack");
var path = require("path");
var nodeModules = path.join(__dirname,"node_modules");
var distPath = path.join(__dirname,"dist");
var entries = {
    "libs"      : "./src/lib/libs",
    "index"     : "./src/index/index",
};

module.exports = {
    entry : entries,
    output : {
        filename : "[name].js",
        path : path.join(__dirname,"dist/js/"),
        publicPath : "http://static.matrix.com/js/"
    },
    module: {
        loaders: [
            {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
        ]
    },
    resolve : {
        alias : {
            "zepto"    : path.join(nodeModules,"/zepto/zepto.min"),
            "flexible" : path.join(nodeModules,"/flexible/flexible"),
        }
    },
}
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {

    entry: [
        'babel-polyfill',
        './app/index.js'
    ],

    output: {
        path: __dirname + '/dist',
        filename: "index_bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
              test: /\.woff(2)?(\?[a-z0-9]+)?$/,
              loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
              test: /\.(ttf|eot|svg|jpg|png)(\?[a-z0-9]+)?$/,
              loader: "file-loader"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        HTMLWebpackPluginConfig
    ]
};
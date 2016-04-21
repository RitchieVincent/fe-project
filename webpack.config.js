const Webpack = require('webpack');
const path = require('path');
const Html = require('html-webpack-plugin');
const htmlConfig = new Html({
    template: path.resolve('src/index.html'),
    filename: "index.html",
    inject: 'body'
});

const HotModuleReplacementPlugin = new Webpack.HotModuleReplacementPlugin();


const autoprefixer = require('autoprefixer');
const precss = require('precss');


module.exports = { // Actual configuration object returned by this file, this configuration object is loaded into Webpack

    entry: path.resolve('src/app.js'), // Declaration of our main application file (entry point), Webpack will parse this file and look for the modules to be loaded into the bundle

    module: { // Here we list the options that will affect our modules before bundling
        // A collection of automatically applied loaders (think of these as the agents that affect our modules)
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css'] // loader for our css files, we run style-loader, then the css-loader

        }, {
            test: /\.(sass|scss)$/,
            loaders: ['style', 'css', 'postcss', 'sass']
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'url?limit=100000' // A loader for our fonts, this uses the url-loader (and file-loader under the hood)

        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader", // Our Babel loader responsible for our JSX and ES6 compilation
            query: {
                presets: ["es2015", "react"] // we need to setup the presets
            }
        }]
    },

    postcss: function() {
        return [autoprefixer, precss];
    },

    output: { // Tells Webpack how to write the compiled files to disk. In our case it will write to ./public/scripts.js
        path: path.resolve(__dirname, 'public'),
        filename: 'scripts.js',
        publicPath: '/'
    },

    plugins: [ // Adds additional plugins to the compiler
        HotModuleReplacementPlugin,
        htmlConfig
    ],

    devServer: { // Webpack development server configuration file
        contentBase: path.resolve(__dirname, 'public'), // The folder to serve our files from
        historyApiFallback: true,
        hot: true, // Are we using Ht module replacement? Yes we are...
        inline: true, // Tells Webpack Dev Server to use the same entry point as Webpack and Automatically refresh on change
        host: process.env.USER === '' ? '' : 'localhost' // Local domain to bind our instance or the Webpack dev server
    }
}
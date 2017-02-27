var webpack = require('webpack');
var config = require('./webpack.config');

config.devtool = 'source-map';
config.entry = './src/example.js';
config.output = {
  path: './example/js',
  filename: 'example.js',
  publicPath: 'js/'
};
config.module.loaders.push({
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file-loader'
});

module.exports = config;

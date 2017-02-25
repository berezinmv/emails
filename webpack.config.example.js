var webpack = require('webpack');
var config = require('./webpack.config');

config.devtool = 'source-map';
config.entry = './src/example.js';
config.output = {
  path: './example/js',
  filename: 'example.js'
};

module.exports = config;

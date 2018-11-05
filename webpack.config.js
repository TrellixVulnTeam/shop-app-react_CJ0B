var path = require('path');
var webpack = require('webpack');
var path = require('path');

module.exports = {
 entry: './src/index.js',
 output: { path: __dirname, filename: 'bundle.js' },
 watch: true,
 module: {
  loaders: [
   {
    test: /.jsx?$/,
    loader: 'babel-loader',
    exclude: /node-modules/,
    query: {
     presets: ['es2015', 'react']
    }
   }
  ]
 },
};

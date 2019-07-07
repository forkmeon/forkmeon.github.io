'use strict';

const path = require('path');

var config = {
  entry: {
    homepage: path.resolve('homepage'),
    ribbon: path.resolve('lib', 'ribbon')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test:/\.less$/,
        loader:"style-loader!css-loader!less-loader"
      }
    ]
  }
};

module.exports = config;

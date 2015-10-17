const webpack = require('webpack');
import path from 'path';

const APP = __dirname;

export default {
  context: APP,
  entry: {
    app: './public/app.js'
  },
  output: {
    path: './static/scripts',
    filename: 'application.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};

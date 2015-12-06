const APP = __dirname;

export default {
  context: APP,
  entry: {
    app: './public/app.js'
  },
  output: {
    path: './dist',
    filename: 'app.js'
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

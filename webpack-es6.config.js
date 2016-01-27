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
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

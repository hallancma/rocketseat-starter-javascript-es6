module.exports = {
  entry: './webpack-server/main.js',
  output: {
    path: __dirname,
    filename: './webpack-server/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

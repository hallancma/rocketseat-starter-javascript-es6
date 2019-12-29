const asynWait = {
  entry: ['@babel/polyfill', './webpack-server/src/main.js'],
  output: {
    path: __dirname + '/webpack-server/public/',
    filename: './bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/webpack-server/public/'
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

const desafioAxios = {
  entry: ['@babel/polyfill', './webpack-server/src/desafioAxios.js'],
  output: {
    path: __dirname + '/webpack-server/public/',
    filename: './bundle-desafioAxios.js'
  },
  devServer: {
    contentBase: __dirname + '/webpack-server/public/'
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

module.exports = [asynWait, desafioAxios];

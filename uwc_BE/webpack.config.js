const path = require('path');

module.exports = {
  entry: {
    server: './index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  target: 'node',
  module: {
    rules: [
      {
        //Translate ES6 to ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

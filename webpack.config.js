const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: __dirname + '/src/index.js',

  output: {
    filename: 'build.js',
    path: __dirname + '/app',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ttf|woff|svg)$/,
        loader: 'url-loader',
      },
    ],
  },

  target: 'electron-renderer',

  plugins: [
    new HTMLWebpackPlugin({
      template: __dirname + '/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
}

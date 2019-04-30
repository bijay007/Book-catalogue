const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const confObject = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    polyfill: 'babel-polyfill',
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].bundle.js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      '@styles': path.resolve(__dirname, './src/common'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html',
    }),
  ],
};

module.exports = confObject;

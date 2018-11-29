const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  cache: true,
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
    compress: true,
    port: 5600,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [
          `${__dirname}/src`,
        ],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin(),
  ],

};

const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js',
    // login: './src/login.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    contentBase: './dist',
    // host: 0.0.0.0,
    hot: true,
    port: 80,
    proxy: {
      "/api": "http://localhost:8000"
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      // inject: 'head',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      // inject: 'head',
      template: './src/login.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}
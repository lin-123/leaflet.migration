const path = require('path');
// const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const webpackConfig = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    app: './src/index',
  },
  devtool: '#inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'VueGis3DBridge'
  }
};

const env = process.env.NODE_ENV || 'dev';
if (env === 'dev') {
  webpackConfig.plugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public', 'index.html'),
      inject: true
    })
  ];
  webpackConfig.devServer = {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    open: true,
    port: 3000
  };
}

if (env === 'production' || process.env.ANALYZE) {
  webpackConfig.optimization = {
    minimizer: [new UglifyJsPlugin()],
  };
}

if (process.env.ANALYZE) {
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;

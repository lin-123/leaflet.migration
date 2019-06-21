const path = require('path');
// const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public', 'index.html'),
      inject: true
    })
  ]
};

const env = process.env.NODE_ENV || 'dev';
if (env === 'dev') {
  const leafletPath = path.resolve(__dirname, 'node_modules/leaflet/dist');
  // // copy custom static assets
  const copyPlugin = new CopyWebpackPlugin([
    {
      from: path.resolve(leafletPath, 'leaflet.js'),
      to: path.resolve(__dirname, 'dist'),
    },
    {
      from: path.resolve(leafletPath, 'leaflet.css'),
      to: path.resolve(__dirname, 'dist'),
    }
  ]);
  webpackConfig.plugins.push(copyPlugin);
  webpackConfig.devServer = {
    contentBase: path.join(__dirname, 'dist'),
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

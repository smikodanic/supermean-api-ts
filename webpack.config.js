/**
 * npm run serve
 * npm run build
 */

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // remove folders: https://github.com/johnagan/clean-webpack-plugin


var fs = require('fs');

var nodeModules = {};

fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  mode: 'development',
  watch: true,
  context: path.resolve(__dirname, 'src'),
  entry: {
    server: './index.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: ['node_modules']
    }]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      "src": path.resolve('./src') // for import config from 'src/app/config'; instead of import config from '../../config';
    }
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
  target: 'node',
  externals: nodeModules,
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  devServer: {
    host: '127.0.0.1',
    // host: '5.189.161.70',
    port: 9988,
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/dist/', // in-memory virtual folder
    open: false,
    compress: true,
    inline: true,
    hot: false,
    lazy: false,
    watchContentBase: true,
    watchOptions: {
      aggregateTimeout: 1300, // default 300
      poll: false,
      ignored: ['files/**/*.js', 'node_modules']
    }
  }
};

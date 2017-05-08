const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};
process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader?cacheDirectory',
        include: PATHS.app
      }, {
        // Test expects a RegExp! Note the slashes!
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  }
};

// Default configuration. We will return this if
// Webpack is called outside of npm.
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // https://github.com/webpack-contrib/npm-install-webpack-plugin/issues/105
      // new NpmInstallPlugin({
      //     save: true // --save
      // })
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}

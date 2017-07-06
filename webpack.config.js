const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist')
};
process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
        path.resolve('./'),
        path.resolve('./node_modules'),
    ]
  },
  output: {
    path: PATHS.dist,
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.app + '/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor'],
      minChunks(module, count) {
        var context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    })
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader?cacheDirectory',
        include: PATHS.app
      }, {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.(scss)$/,
        use: [
          'style-loader',
          'css-loader', {
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
      contentBase: PATHS.dist,

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
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
  });
}

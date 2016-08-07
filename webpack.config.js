const webpack = require('webpack');

module.exports = {
  entry: [
    './public/entry.js', 
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
  ],
  output: {
    path: __dirname,
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
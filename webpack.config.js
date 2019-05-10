const path = require('path'); //core node.js module to manipulate file paths
const HTML_wp_plugin = require('html-webpack-plugin'); //html file

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' //helper to transform js dependencies with babel
        }
      },
      {
        test: /\.css$/,
        use:
          [
            'style-loader', 'css-loader'
          ]
      }
    ]
  },
  plugins: [
    new HTML_wp_plugin({
      template: './src/index.html'
    })
  ]
}

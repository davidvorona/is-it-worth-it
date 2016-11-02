module.exports = {
  entry: './containers/main.js',
  output: {
    path: './webpack',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './containers',
    port: 8080,
    headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true' }
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}

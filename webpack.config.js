module.exports = {
  entry: './public/containers/main.js',
  output: {
    path: './public/webpack',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './public/containers',
    port: 8080,
    proxy: {
      '/movie/*': { target: 'http://localhost:3000' },
      '/join': { target: 'http://localhost:3000' },
      '/login': { target: 'http://localhost:3000' }
    }
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

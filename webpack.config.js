module.exports = {
  entry: './src/scripts/main.js',
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      { test: /\.(js)$/, use: 'babel-loader' },
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.EnvironmentPlugin({
      'NODE_ENV': 'production'
    }),
  ],
  mode: process.env.NODE_ENV === 'production'
    ? 'production'
    : 'development'
}
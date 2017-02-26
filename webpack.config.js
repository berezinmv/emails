module.exports = {
  entry: './src/emails-editor/index.js',
  output: {
    filename: 'emails-editor.js',
    path: './dist',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions'
      }
    ]
  }
};

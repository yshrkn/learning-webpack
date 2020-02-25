const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ // ローダーは逆順で順番に実行されることに注意
          'style-loader',
          'css-loader'
        ] 
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: './images/[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    contentBase: outputPath,
  }
}
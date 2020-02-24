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
      }
    ]
  },
  devServer: {
    contentBase: outputPath,
  }
}
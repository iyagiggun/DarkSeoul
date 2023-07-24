const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: "src/index.html",
      inject: "body"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/darkseoul/object'),
          to: path.resolve(__dirname, 'dist/assets/object'),
          filter: (resourcePath) => /.*\.png$/.test(resourcePath),
        },
      ],
    }),
  ],
  devServer: {
    compress: true,
    port: 3000
  }
}
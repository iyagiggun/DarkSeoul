/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/darkseoul'),
          to: path.resolve(__dirname, 'dist/assets'),
          filter: (resourcePath) => /.*\.png$/.test(resourcePath)
        }
      ]
    }),
    new CircularDependencyPlugin({
      // options
      exclude: /node_modules/, // exclude node_modules
      failOnError: true // fail the build on circular ,
    })
  ],
  devServer: {
    compress: true,
    port: 3000
  }
}

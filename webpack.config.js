var webpack = require("webpack");

module.exports = {
  entry: "./demo/index.js",
  output: {
    path: __dirname,
    filename: "./demo/bundle.js"
  },
  devtool: "source-map", //开发工具
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
  ],
  module: {
    loaders: [{
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.js$/,
        loader: "react-hot-loader!babel-loader",
        exclude: /node_modules/
      }
    ]
  }
}

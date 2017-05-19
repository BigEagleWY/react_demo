module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devtool: "source-map", //开发工具
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

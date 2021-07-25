const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { ProgressPlugin } = require("webpack")

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[contenthash].js",
    assetModuleFilename: "assets/[hash][ext]",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { modules: true },
          },
        ],
      },
      { test: /\.(png|jpg|gif|mp3|mp4|jpeg|svg)$/i, type: "asset" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"),
      favicon: path.join(__dirname, "../public/assets/hammer.ico"),
    }),
    new MiniCssExtractPlugin(),
    new ProgressPlugin(),
  ],
  experiments: {
    asset: true,
  },
}

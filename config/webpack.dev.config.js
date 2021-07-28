const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: ["react-hot-loader/patch", "./src/index"],
  devtool: "source-map",
  devServer: {
    port: 3001,
    contentBase: path.join(__dirname, 'build'),
    open: true,
    host: '0.0.0.0',
    hot: true,
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    }
  }
};

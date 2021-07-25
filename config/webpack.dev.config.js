const path = require('path')

/** @type {import('webpack').Configuration} */
module.exports = {
  devServer: {
    port: 3001,
    contentBase: path.join(__dirname, "build"),
  },
}

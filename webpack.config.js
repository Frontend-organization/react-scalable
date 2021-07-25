//FIXME: const is reserved keyword
const { merge } = require('webpack-merge')
const defaultConfig = require('./config/webpack.default.config')
const devConfig = require('./config/webpack.dev.config')

/** @type {import('webpack').Configuration} */
module.exports = (env = 'production') => {
  const isProd = env === 'production'
  if (isProd) return merge(defaultConfig, { mode: 'production' })
  return merge(defaultConfig, devConfig, { mode: 'development' })
}

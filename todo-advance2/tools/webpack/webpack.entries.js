/**
 * Webpack
 * - Entries
 * @author lyw31136@tmon.co.kr
 * @since 181126 - draft
 */

'use strict'

const {
  PATHS,
  __DEV__,
  SVR_MODE,
  HOST,
  PORT
} = require('../app-config')

const entry = {
  vendor: ['react', 'react-dom', 'redux'],
  bundle: PATHS.SOURCE_DIR
}

if (__DEV__ && SVR_MODE) {
  entry.bundle = [
    'webpack/hot/only-dev-server',
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    PATHS.SOURCE_DIR
  ]
}

module.exports = entry

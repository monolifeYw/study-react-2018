/**
 * Webpack
 * - setting for development
 * @author lyw31136@tmon.co.kr
 * @since 181126 - draft
 */

'use strict'

// enviornments
const { BUILD, SVR_MODE } = require('../../app-config')
const webpack = require('webpack')
const devServerOpts = require('../webpack.dev.server')
const baseConf = require(BUILD.CONFIG_BASE)

const config = {
  mode: 'development',

  // source-map
  devtool: '#source-map',

  // entry에서 부터 구축한 의존성 트리를 바탕으로 만들어낸 번들이 어디에, 어떤 파일 이름으로 저장될지를 지정
  output: {
    path: BUILD.BUILD_PATH,
    filename: `[name]${BUILD.FILENAME_SUFFIX}`,
    chunkFilename: `[name]-[id]${BUILD.FILENAME_SUFFIX}`,
    publicPath: BUILD.PUBLIC_PATH
  },

  devServer: devServerOpts,
  // 번들링이 끝난 뒤 최종적으로 나온 번들을 조작하고 싶은 경우
  plugins: []
}

// check for hot module
if (SVR_MODE) {
  // 이 플러그인은 HMR 이 활성화되어있을 때 모듈의 상대 경로를 표시
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = baseConf(config)

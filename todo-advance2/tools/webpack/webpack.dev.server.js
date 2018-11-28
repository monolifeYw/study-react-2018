/**
 * Webpack
 * - setting for Dev server
 * @author lyw31136@tmon.co.kr
 * @since 181126 - draft
 */

'use strict'

const { HOST, BUILD } = require('../app-config')

module.exports = {
  // Enable gzip compression of generated files.
  compress: true,
  clientLogLevel: 'none',
  // /public > 해당 패스로 부터의 컨텐츠 시작
  // 실제로의 웹 URI 경로는 / 로 시작
  contentBase: BUILD.TEST_PATH,
  // By default files from `contentBase` will not trigger a page reload.
  watchContentBase: true,
  hot: true,
  // proxy,
  // build publicPath, 빌드된 파일이 서버상(메모리상)의 위치
  publicPath: BUILD.PUBLIC_PATH,
  // publicPath: '/dist/',
  // quiet: true,
  // public: allowedHost,
  host: HOST,
  overlay: false,
  historyApiFallback: {
    disableDotRule: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
  /* before(app) {
    // This lets us open files from the runtime error overlay.
    app.use(errorOverlayMiddleware())
    // This service worker file is effectively a 'no-op' that will reset any
    // previous service worker registered for the same host:port combination.
    // We do this in development to avoid hitting the production cache if
    // it used the same host and port.
    // https://github.com/facebookincubator/create-react-app/issues/2272#issuecomment-302832432
    app.use(noopServiceWorkerMiddleware())
  } */
}

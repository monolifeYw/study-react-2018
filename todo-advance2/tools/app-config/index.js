/**
 * Server
 * - Application Configuration.
 * @author lyw31136@tmon.co.kr
 * @since 181126 - draft
 */

'use strict'

const { join, resolve } = require('path')
const yargs = require('yargs')

/**
 * 기본 변수
 */

const { argv } = yargs.options({
  hmr: { default: false, type: 'boolean' }
}).help()

// 프로젝트 Root 경로
const BASEPATH = resolve(__dirname, '../..')

// 구동 환경 (default `development`)
const ENVIRONMENT = process.env.NODE_ENV || 'development'

// 구동 포트
const PORT = parseInt(process.env.PORT || '8080', 10)


/**
 * 구동 환경
 */
exports.__DEV__ = ENVIRONMENT === 'development'
exports.__PROD__ = ENVIRONMENT === 'production'

/**
 * 서버 관련
 */
// 서버 구동 포트
exports.PORT = PORT
exports.HOST = 'localhost'
// 서버 모드인지 확인
exports.SVR_MODE = argv.hmr

/**
 * 시스템 환경
 */
// 구동 환경
exports.ENV = ENVIRONMENT

// 개발 환경 여부
exports.IS_DEV = ENVIRONMENT === 'development'

// 리얼 환경 여부
exports.IS_PROD = !this.IS_DEV

/**
 * 디렉토리 또는 파일 경로
 */
exports.PATHS = {
  BASE_DIR: BASEPATH,
  ASSETS_DIR: resolve(BASEPATH, 'assets'),
  SOURCE_DIR: resolve(BASEPATH, 'app')
}


/**
 * 빌드 환경
 */
exports.BUILD = {
  /* // ASSETS BUILD MODE
  ASSETS_BUILD_MODE: !!argv.env.assets,
  // ANALYSIS: ANALYSIS_MODE
  ANALYSIS_MODE: !!(argv['profile'] && argv.env.analysis),
  // ANALYSIS: JAVIS MODE
  JARVIS_MODE: !!(argv.env.jarvis), */
  // File name suffix
  FILENAME_SUFFIX: exports.IS_DEV ? '.bundle.js' : '.min.js',
  FILENAME_CSS_SUFFIX: exports.IS_DEV ? '.bundle.css' : '.min.css',
  // Output directory name
  BUILD_DIRNAME: 'dist',
  // Output path
  BUILD_PATH: join(BASEPATH, 'dist'),
  TEST_PATH: join(BASEPATH, 'public'),
  // Output path (assets 전용)
  BUILD_ASSETS_PATH: resolve(BASEPATH, 'assets/js'),
  // Public path
  PUBLIC_PATH: '/dist/',
  // Webpack source directory
  SOURCE_ROOT: resolve(BASEPATH, 'tools/webpack'),
  // Webpack entry
  CONFIG_INDEX: resolve(BASEPATH, 'webpack.config'),
  // Webpack base config
  CONFIG_BASE: resolve(BASEPATH, 'tools/webpack/environment/base'),
  // Webpack Environment Dir
  CONFIG_ENV_DIR: resolve(BASEPATH, 'tools/webpack/environment'),
  // template
  APP_TMPL: resolve(BASEPATH, 'app/templates/index.hbs'),
  APP_TMPL2: resolve(BASEPATH, 'public/index.html'),
  APP_TMPL3: resolve(BASEPATH, 'public/index_test.html')
}

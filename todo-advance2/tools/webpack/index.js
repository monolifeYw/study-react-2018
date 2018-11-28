/**
 * Webpack
 * - index
 * @author lyw31136@tmon.co.kr
 * @since 181126 - draft
 */

'use strict'

const { ENV, BUILD } = require('../app-config')

// Node 환경에 따른 Build 환경 결정
const buildEnv = ['development'].includes(ENV) ? 'development' : 'production'
const debug = require('debug')('webpack:index')

debug('buildEnv', buildEnv)

// base
// const baseConf = require(BUILD.CONFIG_BASE)
const webpackConfig = require(`${BUILD.CONFIG_ENV_DIR}/${buildEnv}`)

debug('webpackConfig', webpackConfig)

module.exports = webpackConfig

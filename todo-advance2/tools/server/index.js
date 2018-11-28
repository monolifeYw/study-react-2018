/**
 * Server
 * - Webpack dev server, etc middleware
 * @author lyw31136@tmon.co.kr
 * @since 181126 - draft
 */

'use strict'

const { HOST, PORT } = require('../app-config')
const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const devServerConfig = require('../webpack/webpack.dev.server')
const webpackConfig = require('../webpack')

const compiler = webpack(webpackConfig)
const wds = new WebpackDevServer(compiler, devServerConfig)

wds.listen(PORT, HOST, err => {
  if (err) {
    console.log(chalk.red('Error! %s'), err) // eslint-disable-line no-console
    process.exit(1)
  }
  console.log(chalk.cyan('[WDS] Server Listening on http://%s:%d'), HOST, PORT) // eslint-disable-line no-console
})

const errorSig = ['SIGINT', 'SIGTERM']

errorSig.forEach(sig => {
  process.on(sig, () => {
    wds.close()
    process.exit()
  })
})

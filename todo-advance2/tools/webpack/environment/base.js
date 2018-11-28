/**
 * Webpack
 * - setting for base
 * @author lyw31136@tmon.co.kr
 * @since 181126 - draft
 */

'use strict'

// webpack
const webpack = require('webpack')

// env
const ENV = require('../../app-config')

// entries
const entries = require('../webpack.entries')

// plugin : bundle remove
const CleanWebpackPlugin = require('clean-webpack-plugin')

// plugin : css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// plugin : 대소문자 구별
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

// const WebpackMd5Hash = require('webpack-md5-hash')

module.exports = (targetConf = {}) => {
  const baseConf = {

    // Prod 환경에서 build 시 warning, error 시의 Build에 대한 hard Checking 강화
    bail: ENV.IS_PROD,

    // Webpack이 작동하는 의존성 트리의 루트 노드가 되는 진입점
    entry: entries,

    // require(모듈명)에서의 모듈명을 어떻게 해석할지에 대한 옵션
    resolve: {
      alias: {
        // 공통 alias
      },

      // 모듈 탐색을 시작할 루트 경로
      modules: ['app', 'node_modules'],

      // 모듈명 뒤에 여기 명시된 확장자명들을 붙여보며 탐색을 수행
      extensions: ['.js', '.jsx', '.scss', '.css', '.hbs']
    },

    /**
     * Node의 globals를 사용하기 위한 설정
     * @see https://webpack.js.org/configuration/node/
     */
    node: {
      __dirname: true,
      __filename: true
    },

    externals: [
    ],


    // 의존성 트리 내의 각 모듈들을 어떻게 핸들링할지에 대한 옵션.
    module: {
      rules: [
        {
          // 확인 필요(아래와의 차이점)
          // test: /\.js?$/,
          test: /\.(js|jsx)$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            /* ENV.IS_DEV ? 'style-loader' : {
              loader: MiniCssExtractPlugin.loader,
              options: {
                path: `static/css/`
              }
            }, */
            require.resolve('style-loader'),
            {
              loader: 'css-loader',
              options: {
                url: false,
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
        },
        /* {
          test: /\.hbs$/,
          loader: 'handlebars-loader'
        },
        {
          test: /\.(jpg|png)$/,
          loader: 'file-loader?name=../img/[name].[ext]'
        }, */
        {
          test: /\.svg$/,
          loader: 'url-loader?name=[name].[ext]?[hash]'
        }
      ]
    },

    stats: {
      colors: true,
    },

    // 번들링이 끝난 뒤 최종적으로 나온 번들을 조작하고 싶은 경우
    plugins: [
      // 파일 내용에 따라 해시가 생성
      // new WebpackMd5Hash(),

      new CleanWebpackPlugin([
        `${ENV.BUILD.BUILD_PATH}/bundle.*.*`,
        `${ENV.BUILD.BUILD_PATH}/vendor.*.*`
      ], {
        allowExternal: true
      }),
      // new CleanWebpackPlugin(`${ENV.BUILD.BUILD_PATH}/bundle.*.js`, {allowExternal: true}),

      new webpack.NamedModulesPlugin(),

      // Case Sensitive Paths
      new CaseSensitivePathsPlugin(),

      // process.env.NODE_ENV
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(ENV.ENV)
        },
      }),

      /* new MiniCssExtractPlugin({
        path: ENV.BUILD.BUILD_PATH,
        filename: `[name]${ENV.BUILD.FILENAME_CSS_SUFFIX}`,
        chunkFilename: `[name]-[id]${ENV.BUILD.FILENAME_CSS_SUFFIX}`
        // publicPath: ENV.BUILD.PUBLIC_PATH
      }) */
    ].concat(targetConf.plugins || []),

    optimization: {
      // 구 uglify
      // minimize
      minimize: ENV.__PROD__,

      // 번들 파일을 적절히 분리하고 나눔
      /* splitChunks: {
        // 명시적으로 특정 파일들을 청크로 분리할 때 사용
        cacheGroups: {
          vendor: {
            // 모듈의 종류에 따라 청크에 포함할지 말지를 결정
            // initial - 초기로딩 필요
            // all - test 조건에 포함된 모든 것을 분리
            // async - import()를 이용해 다이나믹하게 사용되는 경우 분리
            chunks: 'initial',
            // 청크 분리시 이름으로 사용(output.filename의 [name]에 대치)
            name: 'vendor',
            // 대상 파일(정규식)
            test: 'vendor',
            enforce: true
          },
          manifest: {}
        }
      }, */
      // runtimeChunk: true
    }
  }

  // merge plugins from target setting
  // array.isArray
  if (Object.prototype.toString.call(targetConf.plugins) === '[object Array]') {
    delete targetConf.plugins
  }

  return Object.assign({}, baseConf, targetConf)
}

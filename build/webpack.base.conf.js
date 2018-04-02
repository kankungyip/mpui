var path = require('path')
var fs = require('fs')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

const tmpDir = path.join(__dirname, '.tmp')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// 思路原自 https://github.com/F-loat/mpvue-entry
// 因原项目的一些问题，无法兼容本项目，特改动如下
function getEntry (entryFile, routerFile) {
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir)
  }

  const baseDir = path.dirname(entryFile)
  const template = fs.readFileSync(entryFile).toString()

  const pages = require(path.join(baseDir, routerFile))

  return pages.reduce((res, page) => {
    const { name, path: pagePath, config } = page

    const fileName = name || pagePath.replace(/\/(\w)/g, ($0, $1) => $1.toUpperCase())
    const entryPath = path.join(tmpDir, `./${fileName}.js`)
    const realPath = pagePath.replace(/^\//, '')

    res[realPath] = entryPath

    fs.writeFileSync(entryPath, template
      .replace(/import App from .*/, `import App from '${path.join(baseDir, realPath)}'`)
      .replace(/App.mpType .*/, `App.mpType = 'page'`)
      .replace(/export default ?{[^]*}/, `export default ${JSON.stringify({ config })}`))

    return res
  }, {})
}

const appEntry = { app: resolve('./example/main.js') }
const pagesEntry = getEntry(appEntry.app, 'router.js')
const entry = Object.assign({}, appEntry, pagesEntry)

module.exports = {
  entry: entry, // 如果要自定义生成的 dist 目录里面的文件路径，
                // 可以将 entry 写成 {'toPath': 'fromPath'} 的形式，
                // toPath 为相对于 dist 的路径, 例：index/demo，则生成的文件地址为 dist/index/demo.js
  target: require('mpvue-webpack-target'),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: Object.assign({}, { 'vue': 'mpvue' }, config.alias),
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('example'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'mpvue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        include: [resolve('example'), resolve('test'), tmpDir],
        use: [
          'babel-loader',
          {
            loader: 'mpvue-loader',
            options: {
              checkMPEntry: true
            }
          },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name]].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  }
}

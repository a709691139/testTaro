/* eslint-disable */
const path = require('path');
/* eslint-enable */

// NOTE 在 sass 中通过别名（@ 或 ~）引用需要指定路径
const sassImporter = function(url) {
  if (url[0] === '~' && url[1] !== '/') {
    return {
      file: path.resolve(__dirname, '..', 'node_modules', url.substr(1))
    };
  }

  const reg = /^@styles\/(.*)/;
  return {
    file: reg.test(url) ? path.resolve(__dirname, '..', 'src/styles', url.match(reg)[1]) : url
  };
};

const config = {
  projectName: 'mini-program-taro-app',
  date: '2019-6-18',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        [
          'env',
          {
            modules: false
          }
        ]
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread',
        ['import', { libraryName: 'antd-mobile', libraryDirectory: 'lib' }, 'antd-mobile']
      ]
    }
  },
  defineConstants: {},
  alias: {
    components: path.resolve(__dirname, '..', 'src/components'),
    services: path.resolve(__dirname, '..', 'src/services'),
    stores: path.resolve(__dirname, '..', 'src/stores'),
    utils: path.resolve(__dirname, '..', 'src/utils'),
    styles: path.resolve(__dirname, '..', 'src/styles'),
    libs: path.resolve(__dirname, '..', 'src/libs'),
    assets: path.resolve(__dirname, '..', 'src/assets'),
    theme: path.resolve(__dirname, '..', 'src/theme'),
    pages: path.resolve(__dirname, '..', 'src/pages')
  },
  copy: {
    patterns: [],
    options: {}
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8']
          }
        },
        pxtransform: {
          enable: true,
          config: {}
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  h5: {
    // NOTE H5 打包静态资源时带 hash 值，方便缓存、版本管理
    publicPath: '/',
    staticDirectory: 'static',
    output: {
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].[chunkhash].js'
    },
    imageUrlLoaderOption: {
      limit: 5000,
      name: 'static/images/[name].[hash].[ext]'
    },
    miniCssExtractPluginOption: {
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[chunkhash].css'
    },
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8']
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    },
    sassLoaderOption: {
      importer: sassImporter
    },
    esnextModules: ['taro-f2', 'taro-ui']
  },
  rn: {
    appJson: {
      // NOTE taro-native-shell 中默认用的是 taroDemo
      name: 'taroDemo'
    }
  }
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};

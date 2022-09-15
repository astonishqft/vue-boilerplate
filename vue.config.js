const path = require('path')
const { defineConfig } = require('@vue/cli-service')

function resolve (dir) {
  return path.join(__dirname, dir)
}

console.log('NODE_ENV', process.env.NODE_ENV)
console.log('VUE_APP_PREVIEW', process.env.VUE_APP_PREVIEW)

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme

          // 'primary-color': '#F5222D',
          // 'link-color': '#F5222D',
          'border-radius-base': '2px'
        },
        // DO NOT REMOVE THIS LINE
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@$', resolve('src'))
  }
})

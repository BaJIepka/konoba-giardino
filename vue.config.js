const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Konoba Giardino'
    }
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/konoba-giardino/'
    : '/'
})

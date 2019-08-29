const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'
module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      // @符号就代表了src路径
      .set('@', resolve('src'))
      // _c就代表了src/components路径，这是为了开发时简写方便
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件，减少打包体积，并提高打包速度
  productionSourceMap: false,
  devServer: {
    //未查询到静态文件的请求都发到proxy地址上
    proxy: 'http://localhost:4000'
  }
}

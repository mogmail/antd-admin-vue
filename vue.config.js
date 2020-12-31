const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
  chainWebpack: config => {
    //设置别名
    config.resolve.alias
    .set('@',resolve('src'))
    .set('assets', resolve('./src/assets'))
    .set('components',resolve('./src/components'))
  },
  devServer: {
 	 open:true  //打开浏览器窗口
  }
}
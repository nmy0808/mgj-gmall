module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 37.5, //设计稿的大小除以10
            exclude: /(node_module)/,
            minPixelValue: 3, // 插件只对3px和3px以上的生效
            selectorBlackList: ['van']
          })
        ]
      },
      // 给 sass-loader 传递选项
      scss: {
        prependData: `
        @import "~@/style/settings/var.scss";
        @import "~@/style/global.scss";`
      },
    }
  }
}
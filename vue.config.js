module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        prependData: `
        @import "~@/style/settings/var.scss";
        @import "~@/style/global.scss";`
      },
    }
  }
}
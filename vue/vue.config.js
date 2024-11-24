const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require("path");

module.exports = {
  publicPath: "./", 
  outputDir: "dist/vue", 
  assetsDir: "public", 
  pages: {
    index: {
      entry: "src/main.ts", 
      template: "public/index.html", 
      filename: "index.html", 
    },
  },
  css: {
    loaderOptions: {
      css: {
       
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  devServer: {
    open: true, 
    host: "localhost",
    port: 8080,
  },
  productionSourceMap: false, 
};
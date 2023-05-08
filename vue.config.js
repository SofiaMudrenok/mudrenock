const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = {
//   configureWebpack: {
//     devServer: {
//       proxy: {
//         "^/api|^/files": {
//           target: process.env.VUE_APP_API,
//           changeOrigin: true,
//         },
//       },
//     },
//   },
// };
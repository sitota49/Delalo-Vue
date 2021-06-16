module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:51044/delalo/',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/api': '/' },
        },
      },
    },
  }
  
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    open: true,
    proxy: {
      '/service-zhwg-topo': {
        target: 'http://localhost:9535/service-zhwg-topo',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/service-zhwg-topo': ''
        }
      }
    }
  },
}
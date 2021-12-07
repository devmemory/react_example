const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    console.log('called')
    app.use(
        createProxyMiddleware('/api',{
            target: 'http://localhost:8080/',
            changeOrigin: true
        })
    )
}
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
    const list = ['/api', '/image']

    list.forEach((e) => {
        app.use(createProxyMiddleware(e, {
            target: 'http://localhost:8080/',
            changeOrigin: true
        }))
    })
}
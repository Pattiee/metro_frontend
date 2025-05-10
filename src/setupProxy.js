
const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {

    // Proxy for user service
    app.use("/",
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
            secure: false, // only in development
        }),
    );
}
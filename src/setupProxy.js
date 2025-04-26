
const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function (app) {

    // Proxy for user service
    app.use( "/api",
        createProxyMiddleware({
            target: "https://localhost:9097", // user service backend url
            changeOrigin: true,
            secure: false, // only in development
        })
    );
}
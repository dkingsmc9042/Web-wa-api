const { createProxyMiddleware } = require('http-proxy-middleware');

// Ganti URL ini dengan domain HTTPS VPS kamu yang telah dipasang Nginx + Certbot
const VPS_BACKEND_URL = process.env.VPS_BACKEND_URL || 'https://api.domainkamu.com';

const proxy = createProxyMiddleware({
  target: VPS_BACKEND_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api',
  },
});

module.exports = (req, res) => {
  return proxy(req, res);
};
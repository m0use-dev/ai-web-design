const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/ai-web-design' : '',
  assetPrefix: isProd ? '/ai-web-design' : '',
};
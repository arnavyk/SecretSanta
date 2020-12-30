
const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  basePath: '/SecretSanta',
  assetPrefix: isProd ? '/SecretSanta/' : '',
}
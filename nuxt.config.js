const pkg = require('./package')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

module.exports = {
  mode: 'universal',
  loading: false,
    
  manifest: {
    short_name: 'Clark',
    name: 'Clark Mitchell',
    lang: 'en'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },         
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000000' },

  /*
  ** Global CSS
  */
  css: [
    '~/css/main.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vee-validate.js', ssr: true}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-bulma-slim',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/font-awesome',
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-cssnext': {
          features: {
            customProperties: false
          }
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
        config.module.rules.push({
            test: /\.(gif|png|jpe?g|svg|webp)$/i,
            loader: 'image-webpack-loader',
            options: {
                mozjpeg: {
                progressive: true,
                quality: 65
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                enabled: false,
                },
                pngquant: {
                quality: '65-90',
                speed: 4
                },
                gifsicle: {
                interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                quality: 75
                }
            }
        })

        config.plugins.push(
            new PurgecssPlugin({
              paths: glob.sync([
                path.join(__dirname, './pages/**/*.vue'),
                path.join(__dirname, './layouts/**/*.vue'),
                path.join(__dirname, './components/**/*.vue')
              ]),
              whitelist: ['html', 'body']
            })
          )

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

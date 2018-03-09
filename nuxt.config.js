const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/hackforacause-website/'
  }
} : {}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hack for a Cause',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Join Team &lt;Choose Problem&gt; Create Solution. Hack for a Cause - April 6-8 2018, a philanthropic Hackathon located in Eugene Oregon' },
      { hid: `og:locale`, content: 'en_US'},
      { hid: `og:site_name`, content: 'Hack for a Cause'},
      { hid: `og:title`, content: 'Hack for a Cause - Eugene'},
      { hid: `og:url`, content: ''},
      { hid: `og:type`, content: 'website'},
      { hid: `og:description`, content: 'Join Team &lt;Choose Problem&gt; Create Solution. Hack for a Cause - April 6-8 2018, a philanthropic Hackathon located in Eugene Oregon'},
      { hid: `og:image`, content: '/h4c.jpg'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  **
  */
  routerBase,
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

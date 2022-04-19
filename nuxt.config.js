export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  publicRuntimeConfig: {
    gamesApiKey: '6f1801d40amshb322267b816a2b5p1920a4jsn95e31d2e9755',
    gamesApiHost: 'free-to-play-games-database.p.rapidapi.com',
    // wheatherApiKey: '6f1801d40amshb322267b816a2b5p1920a4jsn95e31d2e9755',
    // wheatherApiHost: 'community-open-weather-map.p.rapidapi.com',
  },
  head: {
    title: 'movieapp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/defaults.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/gamesApi.js',
    '~/plugins/wheatherApi.js',
    '~/plugins/imagesApi.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', { fix: true }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}

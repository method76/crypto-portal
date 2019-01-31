import pkg from './package.json'

export default {
    mode: 'universal',
  router: {
    middleware: [`handle-server-errors`],
  },
  modules: [`@nuxtjs/axios`],
  plugins: [],
  css: [`@/assets/inbox.css`],
  build: {},
  axios: {},
  head: {
    titleTemplate: `The open source forum based on CKNVB stack`,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { 'http-equiv': `X-UA-Compatible`, content: `IE=edge` },
      { hid: `author`, name: `author`, content: pkg.author },
      { hid: `description`, name: `description`, content: pkg.description },
    ],
    noscript: [
      {
        innerHTML: `
        <p class="no-script-message">
          Javascript is disabled but no worries everything should be fine
        </p>`,
      },
    ],
    __dangerouslyDisableSanitizers: ['noscript'],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css' }
    ],
    script: [
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js', body: true },
        { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js', body: true },
        { src: '/js/bulma.js', body: true },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js', body: true },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.15.1/moment.min.js', body: true },
        // { src: 'js/main.js', body: true }
    ]
  },
}

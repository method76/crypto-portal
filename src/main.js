// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ads from 'vue-google-adsense'

Vue.config.productionTip = false

Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

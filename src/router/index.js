import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Souvenir from '@/pages/Souvenir'
import Error from '@/pages/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/media', name: 'Index', component: Index },
    { path: '/explorer', name: 'Index', component: Index },
    { path: '/solution', name: 'Index', component: Index },
    { path: '/souvenir', name: 'Souvenir', component: Souvenir },
    { path: '*', component: Error }
  ]
})

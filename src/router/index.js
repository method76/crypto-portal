import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Explorer from '@/pages/Explorer'
import Solution from '@/pages/Solution'
import Souvenir from '@/pages/Souvenir'
import Error from '@/pages/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/media', name: 'Index', component: Index },
    { path: '/explorer', name: 'Explorer', component: Explorer },
    { path: '/solution', name: 'Solution', component: Solution },
    { path: '/souvenir', name: 'Souvenir', component: Souvenir },
    { path: '*', component: Error }
  ]
})

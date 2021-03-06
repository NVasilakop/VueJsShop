import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductsCatalog from '../components/ProductsCatalog.vue'
import BootStrapVue from '../../node_modules/bootstrap-vue/dist/bootstrap-vue.esm'

Vue.use(VueRouter)
Vue.use(BootStrapVue)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    name: 'ProductsCatalog',
    component:ProductsCatalog
  }
  
]

const router = new VueRouter({
  routes
})

export default router

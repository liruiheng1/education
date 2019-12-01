import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Loagin from '../components/loagin'
import Homepage from '../components/homepage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loagin',
    component: Loagin
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: Homepage
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router

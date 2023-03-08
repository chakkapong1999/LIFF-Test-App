import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { handlePrimaryLIFFCompactGuard, handlePrimaryLIFFTallGuard } from './guards'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
    // beforeEnter: handlePrimaryLIFFGuard
  },
  {
    path: '/tall',
    component: Home,
    beforeEnter: handlePrimaryLIFFTallGuard
  },
  {
    path: '/compact',
    component: Home,
    beforeEnter: handlePrimaryLIFFCompactGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

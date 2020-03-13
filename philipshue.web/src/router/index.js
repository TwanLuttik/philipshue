import Vue from 'vue'
import VueRouter from 'vue-router'

// Screens
import home from '../screens/home/home.screen';
import auth from '../screens/auth/auth.screen';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

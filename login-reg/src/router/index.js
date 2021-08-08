import Vue from 'vue'
import VueRouter from 'vue-router'
 
Vue.use(VueRouter)
 
  const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => System.import('../components/registration.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => System.import('../components/login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => System.import('../components/Forgotpass.vue')
  }
]
 
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 
export default router
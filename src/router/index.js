import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'
import Entschuldigungsgenerator from '@/views/entschuldigungsgenerator.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/Entschuldigungsgenerator',
      name: 'eg',
      component: Entschuldigungsgenerator
    }
  ]
})

export default router

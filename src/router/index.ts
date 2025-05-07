import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    // TODO: Auth System
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('../views/LoginView.vue'),
    // },
  ],
})

export default router

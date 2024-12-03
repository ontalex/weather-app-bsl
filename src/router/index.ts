import HomePage from '@/views/HomePage.vue'
import WeathersPage from '@/views/WeathersPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: "/weathers",
      name: "weathers",
      component: WeathersPage,
    }
  ],
})

export default router

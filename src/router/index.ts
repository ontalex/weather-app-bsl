// import Test from '@/components/Test.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import WeatherView from '@/views/WeatherView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/weathers',
      name: 'weathers',
      component: WeatherView,
    },
  ],
})

export default router

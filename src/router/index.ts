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
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
        },
        {
            path: '/weathers',
            name: 'weathers',
            component: WeatherView,
        }
    ],
})

export default router

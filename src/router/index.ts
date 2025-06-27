import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import CartView from '@/views/CartView.vue'
import ResMenu from '@/components/ResMenu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path:'/contact',
      name:'contact',
      component:ContactView,
    },
    {
      path:'/cart',
      name:'cart',
      component:CartView,
    },
    {
      path: '/restaurants/:resId',
      name:'menu',
      component: ResMenu,
    }
  ],
})

export default router

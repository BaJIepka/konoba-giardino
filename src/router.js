import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/HomePage'
import MenuPage from '@/pages/menu/MenuPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

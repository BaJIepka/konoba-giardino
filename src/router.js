import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/HomePage'
import CategoryPage from '@/pages/category/CategoryPage'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/categ/:code',
    name: 'Category',
    component: CategoryPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

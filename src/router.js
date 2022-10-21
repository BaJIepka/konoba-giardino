import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/HomePage'
import CategoryPage from '@/pages/category/CategoryPage'
import CartPage from '@/pages/cart/CartPage'

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
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

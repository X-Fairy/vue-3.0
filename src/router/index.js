import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'About',
    component: () => import( '../views/Contact.vue')
  },
 
]
const history = createWebHistory()
const router = createRouter({
  history,
  routes
})

export default router
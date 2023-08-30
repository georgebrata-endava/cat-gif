import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cat',
      name: 'cat',
      sensitive: false,
      component: () => import('../views/CatView.vue'),
      children: [
        {
          path: '/cat/:id?',
          name: 'cat by ID',
          component: () => import('../views/CatView.vue'),
        }
      ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
  ]
})

export default router

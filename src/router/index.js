import { createRouter, createWebHistory } from 'vue-router'

// modules
import productRoutes from '@/modules/product/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () =>
          import(/* webpackChunkName: "mainLayout" */ '../shared/layouts/MainLayout.vue'),
      children: [
          {
              path: '',
              name: 'home',
              component: () =>
                  import(/* webpackChunkName: "homeView" */ '../shared/views/HomeView.vue')
          }
      ],
    },
    {
      path: '/products',
      ...productRoutes
    }
  ]
})

export default router

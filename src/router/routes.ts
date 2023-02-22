import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/components/Home.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/components/About.vue')
  }
]

export default routes
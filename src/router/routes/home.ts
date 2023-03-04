import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  name: 'home',
  path: '/',
  component: () => import('@/components/Home.vue')
}

export default route
import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  name: 'about',
  path: '/about',
  component: () => import('@/components/About.vue')
}

export default route
import { createRouter, createWebHistory } from 'vue-router'

const modules = import.meta.glob('./routes/*.ts', { eager: true })
const routes = Object.values(modules).map((i: any) => i.default)

routes.push({
  name: 'not-found',
  path: '/:pathMatch(.*)',
  component: () => import('@/components/NotFound.vue')
})

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0, left: 0 }
  }
})

export default router
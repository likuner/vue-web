import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(createPersistedState({
  storage: sessionStorage,
  key: id => `v1_vue_web_persisted_${id}`
}))

export default pinia

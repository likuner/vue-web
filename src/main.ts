import { createApp } from 'vue'
import router from './router'
import pinia from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'

createApp(App)
  .use(ElementPlus, {
    locale: zhCn
  })
  .use(router)
  .use(pinia)
  .mount('#app')

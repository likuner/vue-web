import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import autoprefixer from 'autoprefixer'

export default defineConfig(() => {
  return {
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: false,
        inject: {
          data: {
            buildTime: new Date().toLocaleString()
          }
        }
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.vue', '.ts', '.tsx', '.js', '.mjs', '.json', '.scss', '.css']
    },
    envPrefix: 'APP_',
    css: {
      postcss: {
        plugins: [
          autoprefixer
        ]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${path.resolve(__dirname, 'src/style/index.scss')}";`,
        }
      }
    },
    build: {
      assetsInlineLimit: 8192
    },
    server: {
      port: 3000,
      open: true
    },
    preview: {
      port: 4000,
      open: true
    }
  }
})

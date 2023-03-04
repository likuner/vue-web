import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import autoprefixer from 'autoprefixer'

export default defineConfig(({ mode }) => {
  const isdev = mode === 'development'

  return {
    plugins: [
      vue(),
      AutoImport({
        imports: [
          'vue',
          'vue-router'
        ],
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      createHtmlPlugin({
        minify: false,
        inject: {
          data: {
            buildTime: new Date().toLocaleString(),
            injectScript: isdev
              ? `<script type="module" src="./src/mock/index.ts"></script>`
              : ''
          }
        }
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
      assetsInlineLimit: 8192,
      chunkSizeWarningLimit: 1024
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

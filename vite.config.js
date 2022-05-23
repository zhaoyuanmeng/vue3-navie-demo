import { defineConfig, loadEnv } from 'vite'
import path from 'path'

import { wrapperEnv, createProxy } from './build/utils'
import { createVitePlugins } from './build/plugin'
import { OUTPUT_DIR } from './build/constant'
export default defineConfig(({ command, mode }) => {
  const root = process.cwd()
  const isBuild = command === 'build'

  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv
  console.log('-----------------', createProxy(VITE_PROXY), VITE_PORT)
  return {
    root,
    base: VITE_PUBLIC_PATH || '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    css: {
      preprocessorOptions: {
        //define global scss variable
        scss: {
          additionalData: `@import '@/styles/variables.scss';`,
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
      // proxy: {
      //   '/api-zyd': {
      //     // target: 'http://video.zpkang.top:8080/', //老蒋的地址
      //     // target: "http://127.0.0.1:4523/mock/930299/", //api/fox地址
      //     target: 'http://video.zpkang.top:8080/', //api/fox地址
      //     changeOrigin: true, //开启代理
      //     rewrite: (path) => path.replace(/^\/api-zyd/, ''),
      //   },
      // },
    },
    build: {
      target: 'es2015',
      outDir: OUTPUT_DIR,
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },
    // 配置jsx
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      jsxInject: "import { h } from 'vue'",
    },
  }
})

import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'node:path'

import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { UnifiedViteWeappTailwindcssPlugin as uvwt } from 'weapp-tailwindcss/vite';
const isH5 = process.env.UNI_PLATFORM === 'h5'
const isApp = process.env.UNI_PLATFORM === 'app'
const tailwindcssDisabled = isH5 || isApp

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),uvwt( {disabled: tailwindcssDisabled})
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // '$uni-router': path.resolve(__dirname, './src/utils/uni-router/'),
    },
  },
  // 内联 postcss 注册 tailwindcss
  css: {
    postcss: [
      tailwindcss(),
      autoprefixer()
    ]
  }
})

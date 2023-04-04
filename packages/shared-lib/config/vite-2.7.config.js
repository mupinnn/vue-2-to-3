import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import vue2Jsx from '@vitejs/plugin-vue2-jsx'
import * as compilerSFC from 'vue2/compiler-sfc'
import path from 'node:path'

import { baseBuildConfig, baseAlias } from './vite.base.config'

export default defineConfig({
  plugins: [vue2({ compiler: compilerSFC }), vue2Jsx()],
  resolve: {
    alias: {
      vue: baseAlias.vue('2.7'),
      'vue-demi': baseAlias['vue-demi']('v2.7')
    }
  },

  ...baseBuildConfig,
  build: {
    ...baseBuildConfig.build,
    outDir: path.resolve(__dirname, '../dist/v2.7')
  }
})

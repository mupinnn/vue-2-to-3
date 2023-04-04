import { defineConfig } from 'vite'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'

import { baseBuildConfig, baseAlias } from './vite.base.config'

export default defineConfig({
  plugins: [vue2()],
  resolve: {
    alias: {
      vue: baseAlias.vue('2.6'),
      'vue-demi': baseAlias['vue-demi']('v2')
    }
  },

  ...baseBuildConfig
})

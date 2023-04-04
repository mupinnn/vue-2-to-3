import { defineConfig } from 'vite'
import vue3 from '@vitejs/plugin-vue'
import vue3Jsx from '@vitejs/plugin-vue-jsx'

import { baseBuildConfig, baseAlias } from './vite.base.config'

export default defineConfig({
  plugins: [vue3(), vue3Jsx()],
  resolve: {
    alias: {
      vue: baseAlias.vue('3'),
      'vue-demi': baseAlias['vue-demi']('v3')
    }
  },

  ...baseBuildConfig
})

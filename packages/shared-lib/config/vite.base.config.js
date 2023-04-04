import path from 'node:path'
import { defineConfig } from 'vite'
import { isVue2 } from 'vue-demi'

/**
 * TODO:
 * * Fix build for Vue@2.7
 * Use 2.7 as build version to ship Vue 2 version compatible (it could support 2.6-2.7)
 */

const outputName = 'Vue2To3SharedLib'
export const baseAlias = {
  'vue-demi': (version = 'v3') =>
    path.resolve(__dirname, `../../../node_modules/vue-demi/lib/${version}/index.mjs`),

  vue: (version = '3') => {
    switch (version) {
      case '2.7':
        return path.resolve(__dirname, '../node_modules/vue2/dist/vue.runtime.esm.js')
      case '3':
        return path.resolve(__dirname, '../node_modules/vue/dist/vue.runtime.esm-browser.js')
      default:
        return path.resolve(__dirname, '../node_modules/vue/dist/vue.runtime.esm-browser.js')
    }
  }
}

export const baseBuildConfig = defineConfig({
  resolve: {
    dedupe: ['vue', 'vue-demi']
  },
  build: {
    outDir: path.resolve(__dirname, `../dist/${isVue2 ? 'v2' : 'v3'}`),
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, '../src/main.js'),
      formats: ['es', 'umd'],
      name: outputName,
      fileName: (format) => `${outputName}.${format}.js`
    },
    rollupOptions: {
      external: [
        'vue',
        'vue2',
        'vue-demi',
        '@vue/composition-api/dist/vue-composition-api.mjs',
        '@vue/composition-api'
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          '@vue/composition-api/dist/vue-composition-api.mjs': 'VueCompositionAPI',
          '@vue/composition-api': 'VueCompositionAPI',
          'vue-demi': 'VueDemi'
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  }
})

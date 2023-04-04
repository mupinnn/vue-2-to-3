import * as components from './components'

const Vue2To3SharedLib = {
  install: (app) => {
    for (const componentKey in components) {
      const component = components[componentKey]
      app.component(component?.name || component?.__name, component)
    }
  }
}

export * from './components'
export * from './composables'
export default Vue2To3SharedLib

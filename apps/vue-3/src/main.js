import { createApp } from 'vue'
import Vue2To3SharedLib from 'shared-lib'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)
app.use(Vue2To3SharedLib)
app.mount('#app')

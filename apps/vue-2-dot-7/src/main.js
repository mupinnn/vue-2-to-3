import Vue from 'vue';
import Vue2To3SharedLib from 'shared-lib/v2';
import App from './App.vue';

import './assets/main.css';

Vue.use(Vue2To3SharedLib);

new Vue({
  render: (h) => h(App),
}).$mount('#app');

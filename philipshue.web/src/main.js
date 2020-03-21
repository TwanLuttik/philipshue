import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import Pulse from 'pulse-framework';
const app = new Pulse();
Vue.use(app);

 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

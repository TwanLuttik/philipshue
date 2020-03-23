import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

// import Pulse from 'pulse-framework';
// import logic from '../../philipshue.logic/index';
// const app = new Pulse(logic);
// Vue.use(app)

import logic from '../../philipshue.logic/index';

 
new Vue({
  logic,
  router,
  render: h => h(App)
}).$mount('#app')

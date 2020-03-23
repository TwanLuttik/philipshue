// import Pulse from 'pulse-framework';
import Vue from 'vue';

// Pulse.use(Vue);

// import account from './collections/account.collection';
// import device from './collections/device.collection';

export default new Vue({
  data: {
    notify: 0,
    twan: true
  },
  methods: {
    test() {
      return 'a'
    }
  }
});

console.log('logic')

// export default new Pulse({
//   collections: {
//     account,
//     device
//   },
//   data: {
//     something: true
//   }
// });
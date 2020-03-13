<template>
  <div id="app">
    <button @click="test()">test</button>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import HueJs from 'philips-hue-js';
const hue = new HueJs();


export default {
  methods: {
    test() {
      console.log('test')
    }
  },
  mounted() {

    hue.bridge.connect();
    
    
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

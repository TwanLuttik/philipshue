<template>
  <div id="auth.screen">
    <input v-model="user" placeholder="User">
    <input v-model="password" placeholder="Password" type="password">
    <button @click="login()">login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      password: '',
      account: {
        user: 'twan',
        password: 'notifyiscool'
      }
    }
  },
  methods: {
    login() {

    }
  },
  mounted() {
    this.user = this.account.user;
    this.password = this.account.password;
  }
}
</script>

<style lang="scss" scoped>
#auth.screen {
  background: red;

}
</style>
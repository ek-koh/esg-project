<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">ESG자산</router-link> |
      <router-link to="/about">총 자산</router-link>
    </div>
    <div id="nav">
      <Home v-on:login='login'/>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logined:false
    }
  },
  methods: {
    login() {
      this.logined=true
    }
  }
}
</script>

<style>

@font-face{ font-family:ng; src:url('fonts/NanumGothic.woff') format(‘woff’);}

body{font-family:'나눔고딕', 'NanumGothic', ng}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

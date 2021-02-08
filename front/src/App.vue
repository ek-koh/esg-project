<template>
  <div id="app">
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

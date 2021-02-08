<template>
  <div>
    <div v-if="logined">
      <div id="nav">
        <router-link to="/">ESG자산</router-link> |
        <router-link to="/about">총 자산</router-link>
      </div>
      <CChartDoughnutExample/>
    </div>
    <div class="align-self-center" v-else>
      <img src="../assets/logo.png" alt="으쓱-" height="250px" width="300px">
      <br>
      <button class="btn btn-lg btn-primary" v-on:click="login">공인인증서로 Login</button>
    </div>
  </div>
</template>

<script>
import CChartDoughnutExample from './CChartDoughnutExample'

export default {
  name: 'Home',
  components: {
    CChartDoughnutExample
  },
  props: {
    msg: String
  },
  data() {
    return {
      logined: false
    }
  },
  methods: {
    login() {
      this.logined=true
      this.$emit('logined')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

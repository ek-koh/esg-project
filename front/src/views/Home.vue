<template>
  <div class="container">
    <div v-if="logined">
      <CChartDoughnutExample/>
    </div>
    <div v-else>
      <h1>으쓱ㅡESG</h1>
      <br>
      <button class="btn btn-lg btn-primary" v-on:click="login">공인인증서로 로그인</button>
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

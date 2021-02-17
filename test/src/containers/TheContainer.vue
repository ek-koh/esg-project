<template>
  <div class="c-app" v-if="logined"> 
    <TheSidebar/>
    <CWrapper>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
      <TheFooter/>
    </CWrapper>
  </div>
  <div class="c-app flex-row align-items-center" v-else>
    <div v-if="landed">
      <CContainer>
        <CRow class="justify-content-center">
          <CCol md="8">
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <img src="../assets/logo.png" alt="으쓱-" height="60px" width="120x">
                  <br>
                  <p class="text-muted">Sign In to your account</p>
                  <small class="text-muted">다른 로그인 방법</small>
                  <br>
                  <br>
                  <CInput
                    placeholder="아이디"
                    autocomplete="username email"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="패스워드"
                    type="password"
                    autocomplete="curent-password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" v-on:click="login">Login</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="d-lg-none"><small>ID/PW 찾기</small></CButton>
                      <CButton color="link" class="d-lg-none"><small>회원가입</small></CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    <div v-else>
      <transition-group name="fade" v-on:after-enter="fadeNext">
        <br v-show="fade[0]" key="0">
        <CContainer v-show="fade[1]" key="1">
          <img src="../assets/logo.png" height="100%" width="100%" style="display: block; margin: 0px auto;">
          <br>
          <br>
          <CRow class="align-items-center">
            <CCol sm xs="12" class="text-center mt-12">
              <CButton color="success" class="px-4" v-on:click="land"><h4>Login</h4></CButton>
            </CCol>
          </CRow>
        </CContainer>
      </transition-group>
    </div>
  </div>
</template>

<script>
import TheSidebar from './TheSidebar'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

let fadeIdx = 0

export default {
  name: 'TheContainer',
  components: {
    TheSidebar,
    TheHeader,
    TheFooter
  },
  data() {
    return {
      logined:false,
      landed:false,
      fade:[false, false]
    }
  },
  methods: {
    login() {
      this.logined=true
    },
    land() {
      this.landed=true
    },
    fadeNext: function() {
      this.fade.splice(fadeIdx++, 1, true)
    }
  },
  mounted() {
    setTimeout(this.fadeNext, 1000)
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

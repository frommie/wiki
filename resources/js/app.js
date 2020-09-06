require('./bootstrap')
import Vue from 'vue'
import Index from './views/Index'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

// Set Vue globally
window.Vue = Vue

//axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`
axios.defaults.baseURL = 'http://wiki.test/api'

new Vue({
  router,
  store,
  created () {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)
      this.$store.commit('setUserData', userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
  render: h => h(Index)
}).$mount('#app')

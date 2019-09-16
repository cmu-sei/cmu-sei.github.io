import '@/assets/bootstrap/custom.scss'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueAnalytics from 'vue-analytics'
import App from './App.vue'

const isProd = process.env.NODE_ENV === 'production'

Vue.use(BootstrapVue)
Vue.use(VueAnalytics, {
  id: 'UA-145208-1',
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

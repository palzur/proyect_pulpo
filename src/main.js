import Vue from 'vue'
import App from './App.vue'
import './modules/firebase'
import VueFirestore from 'vue-firestore'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueFirestore)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

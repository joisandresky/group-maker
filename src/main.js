import Vue from 'vue'
import App from './App.vue'
import Mahasiswa from './Mahasiswa.vue'
import Kelompok from './Kelompok.vue'

import store from './store'

Vue.component('app-mahasiswa', Mahasiswa)
Vue.component('app-kelompok', Kelompok)
new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
})

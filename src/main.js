import Vue from 'vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import '@/style/index.scss'
import '@/mock'
import layout from '@/components/index.js'
import App from './App.vue'
import 'lib-flexible/flexible'
import '@icon-park/vue/styles/index.css';
Vue.use(layout)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

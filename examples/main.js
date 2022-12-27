import Vue from 'vue'
import App from './App.vue'
import '../components/css/demo.scss'
import DemoText from '../components/lib/demo/index'
Vue.use(DemoText)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

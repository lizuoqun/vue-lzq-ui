import Vue from 'vue'
import App from './App.vue'
// import '../components/css/demo.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import DemoText from '../components/lib/demo/index'
import EchartMap from '../components/lib/echart-map/index'
Vue.use(DemoText)
Vue.use(EchartMap)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app')

/*
 * @Descripttion: 
 * @version: 
 * @Author: chenhaoyue
 * @Date: 2021-02-04 22:37:28
 */
import Vue from 'vue'
import App from './App.vue'
import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.prototype.$video = Video

import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

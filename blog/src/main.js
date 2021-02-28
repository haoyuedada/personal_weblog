/*
 * @Descripttion: 
 * @version: 
 * @Author: chenhaoyue
 * @Date: 2021-02-04 22:37:28
 */
import Vue from 'vue'
import App from './App.vue'
//video
import Video from 'video.js'
import 'video.js/dist/video-js.css'
//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//icon
import './icon/js/iconfont'
import './icon/css/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$video = Video
Vue.use(ElementUI)
import router from './router'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import preview from 'vue-photo-preview'
import ElementUI from 'element-ui'
import VueScroller from 'vue-scroller'
import Video from 'video.js'
import qs from 'qs'
import 'video.js/dist/video-js.css'
import global_ from './components/allApi'//引用文件
let options = {
    fullscreenEl: false
};
import VConsole from 'vconsole'
import datePicker from 'multifunctional-datepicker'
Vue.prototype.$datepicker = datePicker;
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
// if (process.env.NODE_ENV === 'production') {
//     new VConsole()
// }
Vue.prototype.allApi = global_
Vue.use(preview, options)
Vue.use(preview);
Vue.use(qs);
Vue.use(ElementUI);
Vue.use(VueScroller);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
// Vue.prototype.axios = axios;
Vue.prototype.$video = Video
// Vue.prototype.$qs=qs;
// Vue.use(vueSwiper)




router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});
// Vue.prototype.getAjax = '/api';
Vue.prototype.getAjax = 'http://39.100.95.204:8080/api'
Vue.prototype.getImg = 'http://39.100.95.204:8080'
Vue.prototype.userId = global_.id
Vue.prototype.isIos = global_.isIos

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

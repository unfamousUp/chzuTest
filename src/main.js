import Vue from 'vue'
import App from './App.vue'
// 导入vuex
import store from './store/index'
//引入vue-router
import VueRouter from "vue-router";
import router from './router';
// 引入axios
import axios from 'axios'
// 引入echarts
import * as echarts from "echarts";
// 引入ElementUI组件库
import ElementUI from 'element-ui'
// 引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'

Vue.config.productionTip = false
// 引用ElementUI插件
Vue.use(ElementUI)
//应用vue-router插件
Vue.use(VueRouter);
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  beforeCreate() {
      Vue.prototype.$bus = this,
      Vue.prototype.$echarts = echarts
      Vue.prototype.$axios = axios
      Vue.prototype.myHttp = 'http://127.0.0.1:8082'
      // Vue.prototype.myHttp = 'http://127.0.0.1:8080'
  },
  mounted() {
    // console.log(this.$store.state);
    console.log(this.myHttp);
  },
})

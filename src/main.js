// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Comment from './components/Comment'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //router,
  data: {itemsP:["产品质量好","服务态度好","快递速度给力","价格便宜","售后服务好"]} ,//评价因素
  //template: '<comment :items="itemsP"><comment>',
  components: { Comment }
})

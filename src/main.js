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
  data: {itemsP:["因素1","因素2","因素3","因素4","因素5"]} ,//评价因素
  //template: '<comment :items="itemsP"><comment>',
  components: { Comment }
})

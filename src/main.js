// 导入vue实例
import Vue from 'vue'
//导入 App 组件
import App from './App'
//导入 vue router
import VueRouter from 'vue-router'
import router from './router'
import store from './store/store'

import Hello from './components/HelloWorld'
import About from './components/About'
import Login from './pages/login.vue'
import Main from './pages/main.vue'
import Change from './pages/change.vue'
import Page from './pages/page.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
//告诉vue使用vue-router路由组件
Vue.use(VueRouter)
//实例化Vue实例
new Vue({
  //定义Vue绑定的跟元素
  el: '#app',
  //用<App/>代替根元素
  template: '<App/>',
  //声明App组件，这样上面的<App/>元素就可以生效
  components: { App },
  //将上面声明的路由器传递到根Vue实例
  render: h=>h(App),
  router,
  store
}).$mount('#app')//将这个实例挂载到id=app的根元素上
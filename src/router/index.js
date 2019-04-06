/*引入路由组件*/
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'   //@代表/src
import Login from '../pages/login.vue'
import Main from '../pages/main.vue'
import Change from '../pages/change.vue'
import Page from '../pages/page.vue'

const Home = () => import('../components/main/home')
const Manage = () => import('../components/main/manage')
/*路由懒加载*/
/*const Foo = () => import('./Foo.vue')*/

//全局注册vue-router组件
Vue.use(Router)

export default new Router({
	/*去掉地址中的哈希#*/
  mode:'hash',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/login',
        component:Login,
        meta:{
        	showHeader:false
        }
    }, 
    {
    	path:'/',
    	redirect :'/login'
    },
    {
    	path:'/page',
    	component:Page,
    	meta:{
    		showHeader:false
    	}
    },
    {
    	path:'/main',
    	component:Main,
    	meta:{
    		showHeader:true
    	},
        children:[{
        
        path:'',
        name:'home',
        alias:'/home',
        component:Home
        },
        {
        path:'manage',
        name:'manage',
        alias:'/manage',
        component:Manage
        } 
        ]
    },
    {
    	path:'/change',
    	component:Change,
    	meta:{
    		showHeader:true
    	}
    },
    {
      path:'',
      redirect:'/login'
    }

  ]
})

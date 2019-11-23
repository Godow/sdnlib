import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import e404 from '../components/e404.vue'
Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/**',
      name:'e404',
      component: e404
    }
  ]
})

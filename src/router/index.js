import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import vipvideo from '../components/vipvideo.vue'
import musicDownload from '../components/musicDownload.vue'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/vipvideo',
      name:'vipvideo',
      component: vipvideo
    },
    {
      path:'/musicDownload',
      name:'musicDownload',
      component: musicDownload
    }
  ]
})

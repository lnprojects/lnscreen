import Vue from 'vue'
import Router from 'vue-router'
import screen1_main from '@/components/screen1/container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'screen1_main',
      component: screen1_main
    }
  ]
})

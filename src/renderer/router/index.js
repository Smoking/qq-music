import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const _import = (file) => require(`@views/${file}`).default

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: _import('components/layout')
    }
  ]
})

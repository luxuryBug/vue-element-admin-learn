import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

/* Login */
import Login from '../views/login/index.vue'

Vue.use(Router)


export default new Router({
  routes: [
		{ path: '/login', component: Login, hidden: true },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})

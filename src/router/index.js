import Vue from 'vue'
import Router from 'vue-router'
import welcome from '../components/welcome'
import engineeringLogin from "../components/engineeringLogin.vue";
import publicLogin from "../components/publicLogin.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/engineeringLogin',
      name: 'engineeringLogin',
      component: engineeringLogin
    },
    {
      path: '/publicLogin',
      name: 'publicLogin',
      component: publicLogin
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/banggia101',
      name: 'bảng giá 101',
      component: () => import('./views/banggia101.vue')
    },
    {
      path: '/deepmarket',
      name: 'Thị trường chuyên sâu',
      component: () => import('./views/deepmarket.vue')
    },
    {
      path: '/ptkt',
      name: 'ptkt',
      component: () => import('./views/ptkt.vue')
    },
    {
      path: '/research',
      name: 'Phân tích nhanh cổ phiếu',
      component: () => import('./views/research.vue')
    },
    {
      path: '/login',
      name: 'Đăng nhập',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/signup',
      name: 'Đăng ký',
      component: () => import('./views/Signup.vue')
    }
  ]
})

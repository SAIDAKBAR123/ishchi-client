import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
// import goTo from 'vuetify/lib/services/goto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  }
  // {
  //   path: '/restaurant',
  //   name: 'Restaurant',
  //   component: () => import('../views/restaurant/index.vue')
  // }
]

const router = new VueRouter({
  // scrollBehavior: (to, from, savedPosition) => {
  //   let scrollTo = 0

  //   if (to.hash) {
  //     scrollTo = to.hash
  //   } else if (savedPosition) {
  //     scrollTo = savedPosition.y
  //   }

  //   return goTo(scrollTo, {
  //     duration: 1000,
  //     easing: 'linear'
  //   })
  // },
  routes
})

export default router

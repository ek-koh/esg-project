import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const Dashboard2 = () => import('@/views/Dashboard2')

const Myasset = () => import('@/views/Myasset')
const Myesg = () => import('@/views/Myesg')
const Search = () => import('@/views/Search')

Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'dashboard2',
          name: 'Dashboard',
          component: Dashboard2
        },
        {
          path: 'myasset',
          name: 'Myasset',
          component: Myasset
        },
        {
          path: 'myesg',
          name: 'Myesg',
          component: Myesg
        },
        {
          path: 'search',
          name: 'Search',
          component: Search
        },
      ]
    },
  ]
}


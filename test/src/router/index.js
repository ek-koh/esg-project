import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')
const About = () => import('@/views/About')

const Myasset = () => import('@/views/Myasset')
const Myesg = () => import('@/views/Myesg')
const Search = () => import('@/views/Search')
const Select = () => import('@/views/Select')

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
        {
          path: 'select',
          name: 'Select',
          component: Select
        },
        {
          path: 'about',
          name: 'About',
          component: About
        },
      ]
    },
  ]
}


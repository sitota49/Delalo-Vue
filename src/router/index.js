import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Services from '../views/Services'
import EachService from '../views/EachService'
import ProviderList from '../views/ProviderList'
import SingleProvider from '../views/SingleProvider'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/eachService',
    name: 'EachService',
    component: EachService,
  },
  {
    path: '/Provider_list',
    name: 'ProviderList',
    component: ProviderList,
  },
  {
    path: '/Single_Provider',
    name: 'SingleProvider',
    component: SingleProvider,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

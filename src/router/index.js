import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Services from '../views/Services'
import EachService from '../views/EachService'
import ProviderList from '../views/ProviderList'
import SingleProvider from '../views/SingleProvider'
import AddCategory from '../views/AddCategory'
import AdminDashboard from '../views/AdminDashboard'
import AdminCat from '../views/AdminCat'
import AdminOrder from '../views/AdminOrder'
import AdminProvider from '../views/AdminProvider'
import DeleteProvider from '../views/DeleteProvider'
import DeleteCategory from '../views/DeleteCategory'

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
  {
    path: '/AddCategory',
    name: 'AddCategory',
    component: AddCategory,
  },
  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
  },
  {
    path: '/AdminCat',
    name: 'AdminCat',
    component: AdminCat,
  },
  {
    path: '/AdminOrder',
    name: 'AdminOrder',
    component: AdminOrder,
  },
  {
    path: '/AdminProvider',
    name: 'AdminProvider',
    component: AdminProvider,
  },
  {
    path: '/DeleteProvider',
    name: 'DeleteProvider',
    component: DeleteProvider,
  },
  {
    path: '/DeleteCategory',
    name: 'DeleteCategory',
    component: DeleteCategory,
  },
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

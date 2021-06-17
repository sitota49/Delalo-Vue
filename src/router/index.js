import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Login from '../views/Login'
import Register from '../views/Register'
import Authen from '../views/Authen'
import Privacy from '../views/Privacy'
import Contact from '../views/Contact'
import Blog from '../views/Blog'
import Errors from '../views/Errors'
import UserProfile from '../views/userProfile'
import Profile from '../views/Profile'
import Orders from '../views/Orders'
import Jobs from '../views/Jobs'
import BecomeAProvider from '../views/BecomeAProvider'

import Services from '../views/Services'
import EachService from '../views/EachService'
import ProviderList from '../views/ProviderList'
import SingleProvider from '../views/SingleProvider'
import AddCategory from '../views/AddCategory'
import AdminDashboard from '../views/AdminDashboard'
import AdminCat from '../views/AdminCat'
import AdminOrder from '../views/AdminOrder'
import AdminProvider from '../views/AdminProvider'
import DeleteCategory from '../views/DeleteCategory.vue'


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
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/authen',
    name: 'Authen',
    component: Authen,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/error',
    name: 'Errors',
    component: Errors,
  },
  {
    path: '/userProfile/:id',
    name: 'UserProfile',
    component: UserProfile,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/eachService/:id',
    name: 'EachService',
    component: EachService,
  },
  {
    path: '/Provider_list',
    name: 'ProviderList',
    component: ProviderList,
  },
  {
    path: '/Single_Provider/:id',
    name: 'SingleProvider',
    component: SingleProvider,
  },
  {
    path: '/AddCategory/',
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
    path: '/becomeAProvider',
    name: 'BecomeAProvider',
    component: BecomeAProvider,
   
  },
  {
    path: '/DeleteCategory/:id',
    name: 'DeleteCategory',
    component: DeleteCategory,
  },
 
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

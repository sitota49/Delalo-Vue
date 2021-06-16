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
    path: '/userProfile',
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

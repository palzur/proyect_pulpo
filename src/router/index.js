import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import RegisterEmailPage from '../views/RegisterEmailPage.vue'
import CreateGroupPage from '../views/CreateGroupPage.vue'
import CreateGroupNetflixPage from '../views/CreateGroupNetflixPage.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomePage,
    beforeEnter:(to, from, next) => {
      const session = sessionStorage.getItem('session');
      if(session!==null){
        next({ name: 'Home' });
      }
      next();
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
   beforeEnter:(to, from, next) =>{
     const session= sessionStorage.getItem('session');
     if(session==null){
      next({name: 'Welcome'});
     }
     next();
   }
  },
  {
    path:'/login',
    name:'Login',
    component: LoginPage,
    beforeEnter:(to, from, next) => {
      const session = sessionStorage.getItem('session');
      if(session!==null){
        next({ name: 'Home' });
      }
      next();
    }
  },
  {
    path:'/register',
    name:'Register',
    component: RegisterPage,
    beforeEnter:(to, from, next) => {
      const session = sessionStorage.getItem('session');
      if(session!==null){
        next({ name: 'Home' });
      }
      next();
    }
  },
  {
    path:'/register/email',
    name:'RegisterEmail',
    component: RegisterEmailPage,
    beforeEnter:(to, from, next) => {
      const session = sessionStorage.getItem('session');
      if(session!==null){
        next({ name: 'Home' });
      }
      next();
    }
  
  },
  {
    path: '/create/group',
    name: 'CreateGroup',
    component: CreateGroupPage,
    beforeEnter:(to, from, next) => {
      const session = sessionStorage.getItem('session');
      if(session==null){
        next({ name: 'Welcome' });
      }
      next();
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter:(to, from, next) => {
      sessionStorage.removeItem('session');
      next({ name: 'Welcome' });
    }
  },
  {
    path: '/create/group/netflix',
    name: 'CreateGroupNetflix',
    component: CreateGroupNetflixPage,
    beforeEnter:(to, from, next) => {
      const session = sessionStorage.getItem('session');
      if(session==null){
        next({ name: 'Welcome' });
      }
      next();
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

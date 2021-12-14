import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import RegisterEmailPage from '../views/RegisterEmailPage.vue'
import CreateGroupPage from '../views/CreateGroupPage.vue'
import CreateGroupServicePage from '../views/CreateGroupServicePage.vue'
import JoinGroupPage from '../views/JoinGroupPage.vue'
import GroupsPage from '../views/GroupsPage.vue'
import ChangePassword from '../views/ChangePassword.vue'



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
    path: '/create/group/:name',
    name: 'CreateGroupServicePage',
    component: CreateGroupServicePage,
    beforeEnter:(to, from, next) => {
      const session = sessionStorage.getItem('session');
      if(session==null){
        next({ name: 'Welcome' });
      }
      next();
    }
  },

  {
    path: '/join/group/:id',
    name: 'JoinGroupPage',
    component: JoinGroupPage,
    beforeEnter:(to, from, next) => {
      const session = sessionStorage.getItem('session');
      if(session==null){
        next({ name: 'Login' });
      }
      next();
    }
  },
  {
    path: '/groups/page',
    name: 'GroupsPage',
    component: GroupsPage,
    beforeEnter:(to, from, next) => {
      const session = sessionStorage.getItem('session');
      if(session==null){
        next({ name: 'Login'});
      }
      next();
    }
  },
  {
    path: '/change/password',
    name: 'ChangePassword',
    component: ChangePassword,
    
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

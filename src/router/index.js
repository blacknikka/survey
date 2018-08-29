import Vue from 'vue';
import Router from 'vue-router';
// import MainPage from '@/components/MainPage';
import LoginPage from '@/components/LoginPage';
import MainPage from '@/components/MainPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage,
    },
    {
      path: '/main',
      name: 'Main',
      component: MainPage,
    },
  ],
});

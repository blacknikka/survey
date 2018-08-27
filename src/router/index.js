import Vue from 'vue';
import Router from 'vue-router';
// import MainPage from '@/components/MainPage';
import LoginPage from '@/components/LoginPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: LoginPage,
    },
  ],
});

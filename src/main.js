import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Start from './components/Start.vue';
import Home from './components/Home.vue';
import Cart from './components/Cart.vue';
import Hot from './components/Hot.vue';
import Search from './components/Search.vue';
import Pcontent from './components/Pcontent.vue';
import Order from './components/Order.vue';
import EditorPeopleInfo from './components/EditorPeopleInfo.vue';


const routes = [
  { path: '/start', component: Start },
  { path: '/home', component: Home },
  { path: '/cart', component: Cart },
  { path: '/hot', component: Hot },
  { path: '/search', component: Search },
  { path: '/pcontent', component: Pcontent },
  { path: '/editorpeopleinfo', component: EditorPeopleInfo },
  { path: '/order', component: Order },
  { path: '*', redirect: '/start' }
];

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

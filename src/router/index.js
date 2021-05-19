import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue'),
    meta: {
      isHome: true,
    },
  },
  {
    path: '/events/:id',
    name: 'Event',
    component: () => import(/* webpackChunkName: "event" */ '@/views/SingleEvent/SingleEvent.vue'),
  },
  {
    path: '/dispute',
    name: 'Dispute',
    component: () => import(/* webpackChunkName: "dispute" */ '@/views/Dispute/Dispute.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

import { createRouter, createWebHashHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import LoginView from '@/views/LoginView.vue';
import { useTokenStore } from '@/stores/counter';
import memberApi from '@/api/members/member';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/main',
      name: 'main',
      component: MainView,
    },
  ],
});

// router.beforeEach(async (to, from, next) => {
//   const tokenStore = useTokenStore();
//   const token = tokenStore.getToken();
//   memberApi.getMember(token).catch((res) => {});
// });

export default router;

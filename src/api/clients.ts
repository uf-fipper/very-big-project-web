import axios from 'axios';
import Vrouter from '@/router';

export const aspClient = axios.create({
  baseURL: import.meta.env.VITE_ASP_BASE_URL,
  responseType: 'json',
});

aspClient.interceptors.response.use(undefined, (response) => {
  const route = Vrouter.currentRoute.value;
  const router = Vrouter;

  if (response.status == 401) {
    router.replace({ name: 'Login', query: { nextUrl: route.fullPath } });
  }
  return response;
});

import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

export const aspClient = axios.create({
  baseURL: import.meta.env.VITE_ASP_BASE_URL,
  responseType: 'json',
});

aspClient.interceptors.response.use(undefined, (response) => {
  if (response.status == 401) {
    // TODO: 这俩是undefined？
    const route = useRoute();
    const router = useRouter();
    router.replace({ path: '/login', query: { nextUrl: route.fullPath } });
    location.reload();
  }
  return response;
});

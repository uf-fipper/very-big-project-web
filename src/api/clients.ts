import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

export const aspClient = axios.create({
  baseURL: import.meta.env.VITE_ASP_BASE_URL,
  responseType: 'json',
});

aspClient.interceptors.response.use((response) => {
  if (response.status == 401) {
    const route = useRoute();
    const router = useRouter();
    router.replace({ path: '/login', query: { nextUrl: route.fullPath } });
  }
  return response;
});

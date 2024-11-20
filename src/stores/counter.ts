import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useTokenStore = defineStore('token', () => {
  function getToken(): string {
    return localStorage.getItem('token') ?? '1';
  }

  function setToken(value: string) {
    localStorage.setItem('token', value);
  }

  return { getToken, setToken };
});

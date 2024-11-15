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
  const token = ref('');

  function getToken(): string {
    return token.value;
  }

  function setToken(value: string) {
    token.value = value;
  }

  return { getToken, setToken };
});

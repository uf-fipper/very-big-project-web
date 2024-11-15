<template>
  <div class="login-root">
    <div class="login-yuansu">
      <div class="row">
        <button @click="tab = 'login'">登录</button>
        <button @click="tab = 'register'">注册</button>
      </div>
      <div v-if="tab === 'login'">
        <LoginCompoment></LoginCompoment>
      </div>
      <div v-if="tab === 'register'">
        <RegisterCompoment></RegisterCompoment>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginCompoment from '@/components/LoginCompoment.vue';
import RegisterCompoment from '@/components/RegisterCompoment.vue';

const tab = ref<'login' | 'register'>('login');
</script>

<style scoped>
.login-root {
  display: block;
}

.login-yuansu {
  border: 5px;
}

.row {
  display: flex;
}
</style>

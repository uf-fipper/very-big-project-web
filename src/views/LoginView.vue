<template>
  <div class="login-root">
    <div class="login-yuansu">
      <div class="row">
        <button @click="tab = 'login'">登录</button>
        <button @click="tab = 'register'">注册</button>
      </div>
      <div v-if="tab === 'login'" class="form">
        <LoginCompoment></LoginCompoment>
      </div>
      <div v-if="tab === 'register'" class="form">
        <RegisterCompoment></RegisterCompoment>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginCompoment from '@/components/LoginCompoment.vue';
import RegisterCompoment from '@/components/RegisterCompoment.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const tab = ref<'login' | 'register'>(route.query.tab === 'register' ? 'register' : 'login');
</script>

<style scoped>
.login-root {
  width: 100%;
}

.login-yuansu {
  display: flex;
  border: 5px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.row {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

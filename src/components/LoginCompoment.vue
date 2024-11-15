<template>
  <div>
    <div>登录</div>
    <div>
      <div>用户名</div>
      <input type="text" v-model="params.username" required />
    </div>
    <div>
      <div>密码</div>
      <input type="password" v-model="params.password" required />
    </div>
    <button @click="() => login()">登录</button>
    <br />
    <span v-if="tips">{{ tips }}</span>
  </div>
</template>

<script setup lang="ts">
import { useTokenStore } from '@/stores/counter';
import axios from 'axios';
import { ref } from 'vue';

const tips = ref('');

const params = {
  username: '',
  password: '',
};

function login() {
  tips.value = `登录成功: ${params.username}`;
}
</script>

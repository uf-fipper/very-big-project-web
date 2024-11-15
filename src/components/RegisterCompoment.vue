<template>
  <div>
    <div>注册</div>
    <div>
      <div>用户名</div>
      <input type="text" v-model="params.username" required />
    </div>
    <div>
      <div>密码</div>
      <input type="password" v-model="params.password" required />
    </div>
    <div>
      <div>确认密码</div>
      <input type="password" v-model="passwordConfirm" required />
    </div>
    <button @click="() => login()">注册</button>
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
const passwordConfirm = '';

function login() {
  tips.value = `注册成功: ${params.username}`;
}
</script>

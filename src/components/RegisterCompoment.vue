<template>
  <div>
    <div>注册</div>
    <div class="row">
      <el-text>用户名</el-text>
      <el-input type="text" v-model:model-value="username" required></el-input>
    </div>
    <div class="row">
      <el-text>密码</el-text>
      <el-input type="password" v-model:model-value="password" required></el-input>
    </div>
    <div class="row">
      <el-text>确认密码</el-text>
      <el-input type="password" v-model:model-value="passwordConfirm" required></el-input>
    </div>
    <el-button @click="() => login()">注册</el-button>
    <br />
    <span v-if="tips">{{ tips }}</span>
  </div>
</template>

<script setup lang="ts">
import { useTokenStore } from '@/stores/counter';
import axios from 'axios';
import { ref } from 'vue';
import { ElInput, ElButton, ElText } from 'element-plus';

const tips = ref('');

const username = ref('');
const password = ref('');
const passwordConfirm = ref('');

function login() {
  tips.value = `注册成功: ${username}`;
}
</script>

<style scoped>
.row {
  display: flex;
}
</style>

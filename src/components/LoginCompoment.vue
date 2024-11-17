<template>
  <div>
    <div>登录</div>
    <div class="row">
      <el-text>用户名</el-text>
      <el-input type="text" v-model:model-value="username" placeholder="请输入用户名"></el-input>
    </div>
    <div class="row">
      <el-text>密码</el-text>
      <el-input type="password" v-model:model-value="password" placeholder="请输入密码"></el-input>
    </div>
    <el-button @click="() => login()">登录</el-button>
    <br />
    <el-text v-if="tips">{{ tips }}</el-text>
  </div>
</template>

<script setup lang="ts">
import { useTokenStore } from '@/stores/counter';
import axios from 'axios';
import { ref } from 'vue';
import { ElText, ElInput, ElButton } from 'element-plus';
import memberApi from '@/api/member';
import { useRoute } from 'vue-router';

const route = useRoute();

let nextUrl = route.query.nextUrl ?? '';
if (nextUrl instanceof Array) {
  nextUrl = nextUrl[0] ?? '';
}

const tips = ref('');

const username = ref('');
const password = ref('');

function login() {
  memberApi.login(username.value, password.value).then((response) => {
    const res = response.data;
    console.log(res);
    if (res.ret == 1) {
      useTokenStore().setToken(res.data.token);
    }
    tips.value = res.message;
  });
}
</script>

<style scoped>
.row {
  display: flex;
}
</style>

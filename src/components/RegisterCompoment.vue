<template>
  <div>
    <el-form>
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
      <el-button @click="() => register()">注册</el-button>
    </el-form>
    <br />
    <span v-if="tips">{{ tips }}</span>
  </div>
</template>

<script setup lang="ts">
import { useTokenStore } from '@/stores/counter';
import axios from 'axios';
import { ref } from 'vue';
import memberApi from '@/api/members/member';
import { ElInput, ElButton, ElText, ElForm } from 'element-plus';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const tips = ref('');

const username = ref('');
const password = ref('');
const passwordConfirm = ref('');

function register() {
  if (username.value.length < 6 || username.value.length > 20) {
    tips.value = '用户名必须在6-20之间';
    return;
  }
  if (password.value.length < 6) {
    tips.value = '密码长度必须大于6';
    return;
  }
  if (password.value !== passwordConfirm.value) {
    tips.value = '两次密码不相等';
    return;
  }

  memberApi.register(username.value, password.value).then((response) => {
    const data = response.data;
    if (data.ret === 1) {
      const routerArgs: Record<string, any> = { tag: 'login' };
      if (route.query.nextUrl !== undefined) {
        routerArgs.nextUrl = route.query.nextUrl;
      }
      tips.value = '注册成功，即将跳转登录';
      setTimeout(() => {
        router.replace({ query: routerArgs, force: true });
        location.reload();
      }, 3000);
    } else {
      tips.value = data.data;
    }
  });
}
</script>

<style scoped>
.row {
  display: flex;
}
</style>

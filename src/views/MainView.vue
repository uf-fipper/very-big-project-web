<template>
  <el-text>登录成功！</el-text>
  <br />
  <el-text>用户id: {{ member?.memcode }}</el-text>
  <br />
  <el-text>用户名: {{ member?.username }}</el-text>
  <br />
  <el-text>昵称: {{ member?.nickname }}</el-text>
  <br />
  <el-button @click="logout">退出登录</el-button>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import memberApi from '@/api/members/member';
import { useTokenStore } from '@/stores/counter';
import { ElText, ElButton } from 'element-plus';
import { onMounted, ref } from 'vue';

let member = ref<IMember | undefined>();

const route = useRoute();
const router = useRouter();
const tokenStore = useTokenStore();

memberApi.getMember(tokenStore.getToken()).then((response) => {
  const data = response.data;
  member.value = data.data;
});

function logout() {
  memberApi.logout(tokenStore.getToken()).then((response) => {
    router.replace({ path: '/login' });
  });
}
</script>

<template>
  <el-text>登录成功！</el-text>
  <el-text>{{ member?.nickname }}</el-text>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import memberApi from '@/api/members/member';
import { useTokenStore } from '@/stores/counter';
import { ElText } from 'element-plus';
import { onMounted, ref } from 'vue';

const route = useRoute();
const tokenStore = useTokenStore();

let member = ref<IMember | undefined>();

onMounted(() => {
  memberApi.getMember(tokenStore.getToken()).then((response) => {
    const data = response.data;
    member.value = data.data;
  });
});
</script>

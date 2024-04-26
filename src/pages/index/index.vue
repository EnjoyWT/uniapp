<template>
  <view class="flex flex-col justify-center items-center">
    <image
      class="mt-[200rpx] w-[200rpx] h-[200rpx] mb-[50rpx]"
      src="/static/logo.png"
    ></image>
    <text class="text-yellow-300 font-medium">{{ msg }}</text>
    <text class="text-blue-300 font-medium">{{ token }}</text>
  </view>
</template>

<script setup>
import { ref, computed } from "vue";
import { userStore } from "@/store/moudles/user.js";

const msg = ref("Hello Uniapp");
const uStore = userStore();

const token = computed(() => {
  return uStore.token;
});

//导航到
// uni.navigateTo({
//     url: `/pages/detail?custRecordId=${item?.custRecordId}`
//   })
</script>

<style></style>

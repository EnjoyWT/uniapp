<template>
  <view class="flex flex-col justify-center items-center">
    <image
      class="mt-[200rpx] w-[200rpx] h-[200rpx] mb-[50rpx]"
      src="/static/logo.png"
    ></image>
    <view class="flex justify-center">
      <text class="text-yellow-300 font-medium">{{ msg }}</text>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const msg = ref("Hello Uniapp");
</script>

<style></style>

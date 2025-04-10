<template>
  <div>
    <header>
      <h4>{{ questionStatus }}</h4>
      <div class="bar">
        <div class="completion" :style="{ width: barPercentage }"></div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { DefineProps } from "vue";
const { questionStatus, barPercentage } = defineProps([
  "questionStatus",
  "barPercentage",
]);
</script>

<style scoped>
header {
  @apply mt-[20px];
}
header h4 {
  @apply text-[30px];
}
.bar {
  @apply w-[300px] h-[50px] border-2 rounded-[6px] border-solid border-red-200 rounded-r-lg;
}
.completion {
  @apply h-[100%]  bg-green-400 rounded-r-lg;
}
</style>

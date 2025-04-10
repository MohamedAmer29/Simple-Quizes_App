<template>
  <div class="results">
    <p>Your Results...</p>
    <h1>{{ `${numberOfCorrectAnswer}/${quizQuestionLength}` }}</h1>
    <router-link to="/" class="text-xl bg-stone-300 p-2 rounded-xl m-4"
      >Back</router-link
    >
  </div>
</template>

<script setup lang="ts">
import { DefineProps } from "vue";
const { quizQuestionLength, numberOfCorrectAnswer } = defineProps([
  "quizQuestionLength",
  "numberOfCorrectAnswer",
]);
</script>

<style scoped>
.results {
  @apply text-center py-[100px] px-0;
}
p {
  @apply text-[25px];
}
h1 {
  @apply text-[80px];
}
</style>

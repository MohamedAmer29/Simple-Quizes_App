<template>
  <div>
    <div class="question-container">
      <h1 class="question">{{ question.text }}</h1>
    </div>
    <div class="options-container">
      <div
        class="option"
        v-for="option in question.options"
        :key="option.id"
        @click="emitSelectedOption(option.isCorrect)"
      >
        <p class="option-label">{{ option.label }}</p>
        <div class="option-value">
          <p>{{ option.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DefineProps, defineEmits } from "vue";

const emitSelectedOption = (isCorrect: boolean) => {
  return emit("selectOption", isCorrect);
};
const emit = defineEmits(["selectOption"]);
const { question } = defineProps(["question"]);
</script>

<style scoped>
.question-container {
  @apply mt-[20px];
}
.question {
  @apply text-[40px] mb-[20px];
}
.option {
  @apply flex mb-[20px] cursor-pointer;
}
.option-label {
  @apply bg-orange-200 w-[50px] h-[50px] text-[30px] flex items-center justify-center;
}
.option-value {
  @apply bg-[rgb(244,239,239)] w-full text-[30px] py-0 px-[20px];
}
</style>

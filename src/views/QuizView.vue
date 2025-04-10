<template>
  <div class="container">
    <div>
      <QuizHeader
        :questionStatus="questionStatus"
        :barPercentage="barPercentage"
      />
    </div>
    <div>
      <Question
        v-if="!showResult"
        :question="quiz.questions[currentQuestionIndex]"
        @select-option="onOptionSelected"
      />
      <Result
        v-else
        :quizQuestionLength="quiz?.questions.length"
        :numberOfCorrectAnswer="numberOfCorrectAnswer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Question from "@/components/Question.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import quizes from "@/data/quizes.json";
import Result from "@/components/Result.vue";

const route = useRoute();
let quizId = route.params.id;
const currentQuestionIndex = ref(0);
const quiz = quizes.find((q) => `${q.id}` === quizId);
const numberOfCorrectAnswer = ref(0);
const length = quiz?.questions.length;
const showResult = ref(false);

const questionStatus = computed(
  () => `${currentQuestionIndex.value + 1}/${quiz?.questions.length}`
);

const barPercentage = computed(() => {
  if (typeof length !== "undefined")
    return `${((currentQuestionIndex.value + 1) / length) * 100}%`;
});

const onOptionSelected = (isCorrect: boolean) => {
  if (isCorrect) {
    numberOfCorrectAnswer.value++;
  }
  if (quiz?.questions.length === currentQuestionIndex.value + 1) {
    showResult.value = true;
  } else {
    currentQuestionIndex.value++;
  }
};
</script>

<style scoped>
.container {
  @apply max-w-[1000px] mx-auto my-0;
}
</style>

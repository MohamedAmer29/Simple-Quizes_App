<template>
  <!-- <div
    class="card"
    v-for="quiz in prop.filteredQuizes"
    :key="quiz.id"
    @click="navigate"
  > -->
  <!-- <router-link :to="'/' + quiz.id"> -->
  <div @click="navigate">
    <img :src="quiz.img" alt="img" />
    <div class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
  <!-- </router-link> -->
  <!-- </div> -->
  <!-- <router-view /> -->
</template>

<script setup lang="ts">
import { computed, defineProps, ref, watch } from "vue";
import { useRouter } from "vue-router";
// const route = ref(false);
// interface Quiz {
//   id: number;
//   img: string;
//   name: string;
//   questions: {
//     id: number;
//     text: string;
//     options: { id: number; label: string; text: string; isCorrect: boolean }[];
//   }[];
// }
// [];

const router = useRouter();
const { quiz } = defineProps(["quiz"]);
const navigate = () => {
  return router.push(`/quiz/${quiz.id}`);
};
// const destination = ref("");
// const prop = defineProps<{
//   filteredQuizes: Quiz[];
//   quizes: Quiz[];
// }>();
</script>

<style scoped>
.card {
  @apply w-[310px] overflow-hidden rounded-[2%] shadow-[1px_1px_10px_rgba(0,0,0,0.1)] mb-[35px] mr-[20px] cursor-pointer;
}
button {
  @apply z-30;
}
img {
  @apply w-[100%] h-[190px] m-0;
}
.card .card-text {
  @apply py-[0px] px-[5px];
}
.card h2 {
  @apply font-bold;
}
</style>

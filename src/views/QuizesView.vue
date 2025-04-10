<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <router-view /> -->
  <div class="container">
    <header>
      <h1>Quize</h1>
      <input type="text" placeholder="Search..." v-model.trim="search" />
    </header>
    <div class="options-container">
      <div class="card" v-for="quiz in filteredQuizes" :key="quiz.id">
        <Card :quiz="quiz"></Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import q from "@/data/quizes.json";
import Card from "@/components/Card.vue";
const search = ref("");
const quizes = ref(q);

const filteredQuizes = computed(() => {
  return quizes.value.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<style scoped>
.card {
  @apply w-[310px] overflow-hidden rounded-[2%] shadow-[1px_1px_10px_rgba(0,0,0,0.1)] mb-[35px] mr-[20px] cursor-pointer;
}
.container {
  @apply max-w-[1000px] mx-auto my-0;
}
header {
  @apply mb-[10px] mt-[30px] flex items-center z-10 relative;
}
header h1 {
  @apply font-bold mr-[30px];
}
header input {
  @apply border-none bg-[rgba(128,128,128,0.1)] rounded-[5px] placeholder:p-2;
}
.optiona-conainer {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px];
}

.options-container {
  @apply flex flex-wrap mt-[40px];
}
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

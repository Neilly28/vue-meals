<template>
  <div class="flex flex-col items-center justify-center w-full mt-8">
    <input
      type="text"
      v-model="searchTerm"
      @change="searchMeals"
      placeholder="search your favorite "
      class="rounded border-2 border-gray-200 w-full"
    />
  </div>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow-md">
        <img
          :src="meal.strMealThumb"
          alt="meal.strMeal"
          class="h-56 w-full object-cover"
        />
        <h3 class="font-bold">{{ meal.strMeal }}</h3>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          distinctio quia accusantium sint. A deserunt harum obcaecati sint ad
          ullam laborum deleniti at voluptatibus, dicta quis rerum repudiandae
          praesentium fuga.
        </p>
        <div class="flex items-center justify-center">
          <a :href="meal.strYoutube" target="blank"
            ><button class="bg-red-400 text-white p-4 rounded-md">
              Watch
            </button></a
          >
          <router-link to="/">View</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

import store from "../store";

const searchTerm = ref("");
const meals = computed(() => store.state.searchMeals);

function searchMeals() {
  store.dispatch("searchMeals", searchTerm.value);
}
</script>

<style scoped></style>

<template>
  <div class="flex flex-col items-center justify-center w-full mt-8">
    <input
      type="text"
      placeholder="search your favorite "
      class="rounded border-2 border-gray-200 w-full"
    />
    <div class="flex justify-center gap-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
      >
        {{ letter }}</router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../utils/axiosClient";

// letters for menu
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const ingredients = ref([]);

// axios instance
onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>

<style scoped></style>

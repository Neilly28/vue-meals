<template>
  <MealsByName />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../utils/axiosClient";
import MealsByName from "./MealsByName.vue";

const ingredients = ref([]);

// axios instance
onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>

<style scoped></style>

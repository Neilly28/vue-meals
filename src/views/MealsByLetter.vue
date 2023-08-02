<template>
  <div>
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
import { letters } from "../constants/letters";
</script>

<style scoped></style>

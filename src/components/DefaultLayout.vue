<template>
  <div class="max-w-7xl m-auto p-12">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>

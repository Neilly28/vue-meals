<template>
  <div class="max-w-7xl m-auto p-12">
    <header class="flex justify-between items-center">
      <router-link :to="{ name: 'home' }"> Go Home </router-link>
      <div class="flex justify-center items-center gap-8">
        <router-link to="/" class="hover:text-red-400 transition-colors">
          Search Meals
        </router-link>
        <router-link to="/" class="hover:text-red-400 transition-colors">
          Meals by Letter
        </router-link>
        <router-link to="/" class="hover:text-red-400 transition-colors">
          Meals by Ingredient
        </router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

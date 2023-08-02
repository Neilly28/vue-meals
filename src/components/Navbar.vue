<template>
  <header class="flex justify-between items-center">
    <router-link :to="{ name: 'home' }"> Go Home </router-link>
    <div class="flex justify-center items-center gap-8">
      <router-link
        :to="{ name: 'byName' }"
        class="hover:text-red-400 transition-colors"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="hover:text-red-400 transition-colors"
      >
        Meals by Letter
      </router-link>
      <router-link
        :to="{ name: 'byIngredient' }"
        class="hover:text-red-400 transition-colors"
      >
        Meals by Ingredient
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="font-fredoka">
    <header>
      <div class="wrapper">
        <NavBar />
      </div>
    </header>
    <div class="flex justify-center">
      <div class="max-w-6xl w-full">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

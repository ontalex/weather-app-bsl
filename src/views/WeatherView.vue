<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppCardlist from '@/components/AppCardlist.vue'
</script>

<template>
  <div class="wrapper-weather">
    <!-- Здесь Header -->
    <AppHeader />

    <!-- Здесь CardList -->
    <AppCardlist />
  </div>
</template>

<style scoped>
.wrapper-weather {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: linear-gradient(169.61deg, #2e3358 2.83%, #1c1b33 94.85%);
}
</style>

<style>
@font-face {
  font-family: 'SF Pro Display';
  src: url('@/fonts/SF-Pro-Display-Regular.woff2') format('woff2');
}

.app {
  max-width: 390px;
  min-height: 100vh;

  margin: 0 auto;
}
</style>

<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
  <Suspense>
    <RouterView />
    <template #fallback>
      <p>
        Загрузка данных...
      </p>
    </template>
  </Suspense>
</template>

<style scoped lang="scss"></style>

<script setup lang="ts">
  import { CITIES_NAME } from '../components/scripts/getLocations';
</script>

<template>
  <div class="v-popup" data-aos="fade-in">
    <div class="v-popup-header">
      <span>Добавить города в закладки</span>
      <span>🎏</span>
    </div>
    <div
      class="v-popup-content"
      v-for="(item, index) of CITIES_NAME"
      :key="index"
    >
      <input
        type="checkbox"
        :id="String(index)"
        class="v-popup-content-input"
      />
      <label :for="String(index)" class="v-popup-content-text">{{
        item
      }}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .v-popup {
    padding: 16px;
    position: fixed;
    z-index: 4;
    top: 50px;
    right: 0;
    left: 0;
    width: 250px;
    background-color: purple;
    margin: 0 auto;
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>

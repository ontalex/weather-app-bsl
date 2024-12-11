<script setup lang="ts">
import { CITIES_NAME } from '../components/scripts/getLocations';
const checkBox = (cityName: string) => {
  const currentValue = localStorage.getItem(cityName);
  const newValue = currentValue === 'true' ? 'false' : 'true';
  localStorage.setItem(cityName, newValue);
};

const getLocalStore = (item: string) => {
  return localStorage.getItem(item) === 'true';
};
</script>

<template>
  <div class="v-popup" data-aos="fade-in">
    <div class="v-popup-header">
      <span>Добавить город в закладки</span>
      <span>🎏</span>
    </div>
    <div class="v-popup-content" v-for="cityName in CITIES_NAME" :key="cityName">
      <input
        type="checkbox"
        :id="String(cityName)"
        class="v-popup-content-input"
        @change="checkBox(cityName)"
        :checked="getLocalStore(cityName)"
      />
      <label :for="String(cityName)" class="v-popup-content-text">{{ cityName }}</label>
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

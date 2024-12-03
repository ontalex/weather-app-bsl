<script lang="ts" setup>
import { computed, onBeforeMount } from 'vue'
import { useCityStore } from '@/stores/city'
import { locations } from './scripts/dataWeather'
import { getWeatherCity } from './scripts/getWeather'
import WeatherCard from './WeatherCard.vue'

onBeforeMount(async () => {
  getWeatherCity()
})

const cityStore = useCityStore()

const filteredLocation = computed(() => {
  if (cityStore.cityName.trim() === '') {
    return locations
  }
  return locations.filter((location) => {
    const name = location.city.trim().toLowerCase()
    const storeName = cityStore.cityName.trim().toLowerCase()
    name.includes(storeName)
  })
})

const resetSearchValue = () => {
  cityStore.cityName = ''
}
</script>

<template>
  <ol class="app-content">
    <WeatherCard v-for="(item, index) of filteredLocation" :key="index" :value="item" />
  </ol>

  <div
    class="not-found"
    v-if="filteredLocation.length === 0"
    data-aos="fade-in"
    data-aos-offset="-1500"
    data-aos-delay="50"
    data-aos-duration="1000"
  >
    <div class="not-found-text">Город не найден</div>
    <button class="btn btn-outline-light" @click="resetSearchValue">Сбросить</button>
  </div>
</template>

<style scoped>
.app-content {
  position: relative;
  margin: 25px;
}

.not-found {
  display: flex;
  margin: 16px 48px;
  gap: 10px;
}

.not-found-btn {
  flex: 1;
  border: none;
  border-radius: 10px;
  margin: 5px 0;
  color: #1c1b33;
}

.not-found-btn:hover {
  transition: opacity 0.5s ease-in-out;
  opacity: 0.8;
}

.not-found-text {
  font-size: 1.56rem;
  font-weight: 400;
}
</style>

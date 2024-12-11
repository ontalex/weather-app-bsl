<template>
  <div class="home">
    <div class="home__content">
      <div class="home__location">{{ dataRes?.location.name }}</div>
      <div class="home__temperature">{{ dataRes?.current.temp_c }}°</div>
      <div class="home__weather-status">{{ dataRes?.current.condition.text }}</div>
      <div class="temperature-info">
        <div class="temperature-info__min">H:{{ currentDay?.day.maxtemp_c }}°</div>
        <div class="temperature-info__max">L:{{ currentDay?.day.mintemp_c }}°</div>
      </div>
    </div>

    <img src="/img_house.png" alt="house" class="home__picture" />

    <ForecastBar
      :days="dataRes?.forecast.forecastday"
      :current_day="currentDay"
      :reload="fetchData"
    />
  </div>
</template>

<script setup lang="ts">
import ForecastBar from '@/components/Forecast/ForecastBar/ForecastBar.vue'
import { useWeek } from '@/use/week'
import moment from 'moment'
import { onMounted, onBeforeUnmount, computed, watch } from 'vue'

const { dataRes, fetchData } = await useWeek()

onMounted(() => {
  console.log('Data on page:', dataRes.value)
  fetchData()
})

// Меняем заголовок при уходе со страницы
onBeforeUnmount(() => {
  document.title = 'Weather App'
})

const currentDay = computed(() => {
  const day = dataRes.value?.forecast.forecastday.find((item: { date: string | number | Date }) => {
    return moment(item.date).format('YYYY-MM-DD') == moment().format('YYYY-MM-DD')
  })

  return day
})

watch(
  () => currentDay.value,
  () => {
    // Установка заголовка страницы
    const location = dataRes.value?.location.name
    const temperature = `${dataRes.value?.current.temp_c}°`

    document.title = `${location} | ${temperature}`
  },
)
</script>

<style lang="scss" scoped>
@import '/src/assets/fonts.css';

.home {
  &__content {
    color: white;
    text-align: center;

    font-family: var(--font-family-display);

    margin-top: 120px;

    z-index: 1000;
    position: relative;
  }

  &__location {
    font-size: 2.125rem;

    font-weight: 400;

    word-break: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    margin-bottom: 12px;
  }

  &__temperature {
    font-family: 'SF Pro Display';
    font-size: 96px;
    font-weight: 200;
    line-height: 70px;
    text-align: center;
  }

  &__weather-status {
    color: rgba(235, 235, 245, 0.6);

    font-family: 'SF Pro Display';
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }

  .temperature-info {
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  }

  &__picture {
    width: 100%;
    bottom: 0;
    position: absolute;
    margin-bottom: -20px;

    aspect-ratio: auto 2.16 / 1;
    z-index: 500;
  }
}
</style>

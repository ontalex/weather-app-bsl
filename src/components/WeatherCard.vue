<script setup lang="ts">
import { type Location } from './types/dataLocations'
import { locationStatusId } from './types/dataLocations'

interface IPropsCard {
  value: Location
}

const props = defineProps<IPropsCard>()

// Поиск изображения по id из Location
const findStatusId = (id: string) => {
  const locations = locationStatusId.find((status) => status.id == id)
  if (locations) {
    return locations
  } else {
    return {
      id: 'Light freezing rain',
      name: 'Погода не известна',
      img: new URL('@/assets/question-mark.svg', import.meta.url).href,
      alt: 'Не известная погода',
    }
  }
}
</script>

<template>
  <li class="content">
    <span class="content-temperature">{{ props.value.temperature.currentTemp }}°</span>
    <img
      :src="findStatusId(props.value.statusId)?.img"
      :alt="findStatusId(props.value.statusId)?.alt"
      class="content-cloud"
    />
    <span class="content-city">
      <span class="content-high-low">
        H:{{ props.value.temperature.maxTemp }}° L:{{ props.value.temperature.minTemp }}° </span
      ><br />
      <span class="content-city-name">{{ props.value.city }}</span>
    </span>
    <span class="content-condition">
      <span class="empty-bg"> </span><br />
      <span class="content-condition">{{ findStatusId(props.value.statusId)?.name }}</span>
    </span>
  </li>
</template>

<style setup lang="scss">
ol {
  padding: 0;
}

.content {
  position: relative;
  display: grid;
  grid-template-columns: 50% auto;
  grid-template-rows: 100px auto;
  justify-items: center;
  align-items: center;
  max-width: 340px;
  min-height: 215px;
  background: url(@/assets/bg_temperature.svg) no-repeat;
  background-clip: padding-box;
  background-size: contain;
  background-position: center;
  margin-top: 30px;
  z-index: 3;
  &-cloud {
    max-width: 160px;
    max-height: 160px;
  }
  &::before {
    position: absolute;
    content: '';
    max-width: 390px;
    max-height: 300px;
    width: 110%;
    height: 110%;
    border-radius: 60%;
    background: conic-gradient(
        from 180deg at 50% 50%,
        #612fab -90.71deg,
        rgba(97, 47, 171, 0) 50.02deg,
        #612fab 129.55deg,
        rgba(97, 47, 171, 0) 226.06deg,
        #612fab 269.29deg,
        rgba(97, 47, 171, 0) 410.02deg
      )
      no-repeat;
    opacity: 0.6;
    filter: blur(30px);
    z-index: -1;
    pointer-events: none;
  }
  &-temperature {
    grid-column: 1;
    grid-row: 1;
    justify-self: start;
    padding-left: 20px;
    font-size: 4rem;
    font-weight: 400;
    margin-top: 30%;
  }
  &-city {
    grid-column: 1;
    grid-row: 2;
    justify-self: start;
    padding-left: 20px;
  }
  &-condition,
  &-city {
    font-size: 1rem;
    font-weight: 400;
  }
  &-high-low {
    font-size: 1rem;
    font-weight: 400;
    color: rgba(235, 235, 245, 0.6);
  }
}
</style>

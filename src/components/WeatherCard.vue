<script setup lang="ts">
import { type Location } from './scripts/dataWeather'
import { locationStatusId } from './scripts/dataWeather'

interface IPropsCard {
  value: Location
}

const props = defineProps<IPropsCard>()

const findStatusId = (id: string) => {
  return locationStatusId.find((status) => status.id == id)
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

<style setup></style>

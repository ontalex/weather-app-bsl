<template>
  <div :class="com_style">
    <span class="forecast-card__time">
      {{ com_datetime }}
    </span>
    <div class="forecast-card__iconbox">
      <!-- ! SPAN заменить на вычисляемое SVG или IMG ! -->
      <img class="forecast-card__icon" :src="com_icon" :title="com_alt" :alt="com_alt" />
      <div class="forecast-card__probability">{{ com_probability }}</div>
    </div>
    <div class="forecast-card__temperature">
      <span>{{ com_temperature }}°</span>
    </div>
  </div>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Forecastday, Hour } from '../WeatherGPS.interfaces';

const props = defineProps<{
  isHourMode: boolean,
  value: {
    day: Forecastday | undefined,
    hour: Hour | undefined
  }
}>();

const com_icon = computed(() => `http:${props.value.day?.day.condition.icon || props.value.hour?.condition.icon}`)
const com_alt = computed(() => `http:${props.value.day?.day.condition.text || props.value.hour?.condition.text}`)
const com_temperature = computed(() => props.value.day?.day.avgtemp_c || props.value.hour?.temp_c);
const com_probability = computed(() => {
  if (props.value.hour) {
    return `${props.value.hour.chance_of_rain}%`
  } else if (props.value.day) {
    return `${props.value.day?.day.daily_chance_of_rain}%`
  } else {
    return ""
  }
})

//
const com_style = computed(() => {
  if (props.isHourMode && props.value.hour && (new Date().getHours() == new Date(props.value.hour.time).getHours())) {
    return "forecast-card forecast-card--active"
  } else if (!props.isHourMode && (new Date().toDateString() == new Date(props.value.day?.date || new Date()).toDateString())) {
    return "forecast-card forecast-card--active"
  } else {
    return "forecast-card"
  }
})

// Вычисляем время или день недели по типу карточки
const com_datetime = computed(() => {
  if (props.isHourMode && props.value.hour) {
    const hours = new Intl.DateTimeFormat('en-EN', {
      hour: "numeric",
      hour12: true
    }).format(new Date(props.value.hour.time)).toLocaleUpperCase()

    if (new Date(props.value.hour.time).getHours() == new Date().getHours()) {
      return "Now"
    } else {
      return hours
    }
  } else {
    return new Intl.DateTimeFormat("en-EN", {
      weekday: "short",
    }).format(new Date(props.value.day?.date || new Date())).toLocaleUpperCase()
  }
})
</script>

<style lang="scss" scoped>
.forecast-card {
  max-width: 100%;
  min-width: 60px;

  padding: 16px 8px 16px 8px;

  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  gap: 16px;

  padding: 16px 8px;

  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  box-shadow: 5px 4px 10px 0px rgba(0, 0, 0, 0.25), 1px 1px 0px 0px rgba(255, 255, 255, 0.25) inset;

  &--active {
    background: rgba(72, 49, 157, 1);
  }

  &__time {
    font-family: "SF Pro Text";
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.5px;
    text-align: left;

    color: #FFFFFF;

  }

  // &__iconbox {}

  &__icon {
    width: 32px;
  }

  &__probability {
    font-family: "SF Pro Text";
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
    text-align: center;

    margin-top: 1px;

    color: rgba(64, 203, 216, 1);

    min-height: 1rem;
  }

  &__temperature {
    font-family: "SF Pro Display";
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;

    color: #FFFFFF;
  }
}
</style>

<script lang="ts"></script>

<template>
  <li
    class="content"
    v-for="(item, idx) in filteredLocation"
    :key="idx"
    data-aos="fade-in"
    data-aos-offset="-1500"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-out"
    data-aos-mirror="false"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
  >
    <span class="content-temperature">{{ item.temperature.currentTemp }}°</span>
    <img
      :src="findStatusId(item.statusId)?.img"
      :alt="findStatusId(item.statusId)?.alt"
      class="content-cloud"
    />
    <span class="content-city">
      <span class="content-high-low">
        H:{{ item.temperature.maxTemp }}° L:{{ item.temperature.minTemp }}° </span
      ><br />
      <span class="content-city-name">{{ item.city }}</span>
    </span>
    <span class="content-condition">
      <span class="empty-bg"> </span><br />
      <span class="content-condition">{{ findStatusId(item.statusId)?.name }}</span>
    </span>
  </li>
</template>

<style setup></style>

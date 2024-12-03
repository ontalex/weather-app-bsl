<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

const weatherCards = [
  {
    temperature: 19,
    high: 24,
    low: 18,
    region: 'Bengaluru, India',
    condition: 'Fast Wind',
    icon: './src/assets/img/one.svg',
  },
  {
    temperature: 22,
    high: 28,
    low: 18,
    region: 'Chennai, India',
    condition: 'Fast Wind',
    icon: './src/assets/img/two.svg',
  },
  {
    temperature: 29,
    high: 32,
    low: 27,
    region: 'Delhi, India',
    condition: 'Fast Wind',
    icon: './src/assets/img/three.svg',
  },
  {
    temperature: 19,
    high: 24,
    low: 18,
    region: 'Bengaluru, India',
    condition: 'Fast Wind',
    icon: './src/assets/img/four.svg',
  },
]

AOS.init()
</script>

<template>
  <div class="app">
    <div data-aos="zoom-in" class="content">
      <div class="txt">Weather</div>
      <div class="search">
        <img src="@/assets/img/magnifyingglass.svg" alt="icon" />
        <input type="text" placeholder="Search for a city or airport" />
      </div>
    </div>
    <div class="weather-cards">
      <div
        v-for="(card, index) in weatherCards"
        :key="index"
        class="weather-card"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="details">
          <div class="temperature">{{ card.temperature }}°</div>
          <div class="approximateTemperature1">H:{{ card.high }}° L:{{ card.low }}°</div>
          <div class="region">{{ card.region }}</div>
        </div>
        <div class="condition">
          <img class="one" :src="card.icon" alt="icon" />
          <div class="weatherConditions">{{ card.condition }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: 'SF-Pro-Dispalay';
  src: url(../src/assets/fonts/SFProDisplayRegular.woff2) format('woff2');
  font-weight: normal;
  font-style: normal;
}

.app {
  line-height: 1.5;
  margin: 0 auto;
  position: relative;
  max-width: 390px;
  max-height: 844px;
  background: linear-gradient(170deg, #2e3358, #1c1b33);
  color: #fff;
  padding: 25px;
}

.content {
  margin: 20px;
}

.content .txt {
  font-family: SF-Pro-Dispalay;
  font-size: 28px;
  font-weight: regular;
  text-align: left;
  padding-left: 5%;
  margin-top: 25%;
  margin-bottom: 5%;
}

.search {
  display: flex;
  align-items: center;
  background: linear-gradient(168deg, rgba(46, 51, 90, 0.26), rgba(28, 27, 51, 0.26));
  box-shadow: 0px 16px 32px 0px rgba(0, 0, 0, 0.25) inset;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 5px;
}

.search img {
  width: 15px;
  height: 15px;
  margin-right: 8px;
}

.search input {
  background: transparent;
  border: none;
  outline: none;
  color: rgba(235, 235, 245, 0.6);
  flex: 1;
  font-size: 17px;
}

.search input::placeholder {
  font-family: SF-Pro-Display;
  font-size: 17px;
  font-weight: regular;
  letter-spacing: -0.4px;
  text-align: left;
  color: rgba(235, 235, 245, 0.6);
}

.weather-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  justify-items: center;
  align-items: center;
  width: 360px;
  height: 230px;
  background: url(src/assets/img/Rectangle6.svg) no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: -10px;
  border-radius: 20px;
}

.weather-card .one {
  max-width: 160px;
  max-height: 160px;
}

.weather-card .details {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.details .temperature {
  font-family: SF-Pro-Display;
  font-size: 4.5rem;
  font-weight: regular;
  margin: 0;
}

.details .approximateTemperature1 {
  font-family: SF-Pro-Display;
  font-size: 0.9em;
  color: rgba(235, 235, 245, 0.6);
  font-weight: regular;
}

.details .region {
  font-family: SF-Pro-Display;
  font-size: 1.1em;
  font-weight: regular;
}

.weatherConditions {
  font-family: SF-Pro-Display;
  color: #fff;
  font-size: 15px;
  font-weight: regular;
  line-height: 22px;
  text-align: center;
  margin-bottom: 25px;
}

.weather-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
}
</style>

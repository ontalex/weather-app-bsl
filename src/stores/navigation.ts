import { computed, ref, type Ref } from 'vue'
import * as pi from 'pinia'
import axios from 'axios';

export const useNavStore = pi.defineStore('nav', {
  state: () => {
    return ({
      location: null,
      data: null,
    });
  },

  getters: {
    location: (state) => state.location,
    data: (state) => state.data
  },
  actions: {
    async fetchData() {
      if (this.location) {
        const data = await axios.get(
          "https://api.weather.ontalex.ru/weather/week/gps",
          {
            params: {
              latitude: this.location.latitude,
              longitude: this.location.longitude,
              days: 7,
            }
          }
        );
        this.data = data;
        console.log("Data fetching:", data);
      }
    },
    async getCurrentPosition() {
      if (navigator.geolocation) {
        const position = navigator.geolocation.getCurrentPosition(
          (position) => {
            this.location = { latitude: position.coords.latitude, longitude: position.coords.longitude };
            console.log("Get Current Position:", position);
          },
          (error) => {
            console.error('Ошибка геолокации:', error);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        );
      } else {
        console.error('Геолокация не поддерживается браузером.');
      }
    }
  }
})

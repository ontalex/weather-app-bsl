import { ref, type Ref } from 'vue'
import * as pi from 'pinia'

export const useLocationStore = pi.defineStore('location', {
  state: () => ({
    hasData: false,
    latitude: null,
    longitude: null,
  }),
  actions: {
    updateLocation(lat, long) {
      this.hasData = true
      this.latitude = lat
      this.longitude = long
    },
    async fetchLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.updateLocation(position.coords.latitude, position.coords.longitude)
          },
          (error) => {
            this.hasData = false
            console.error('Error occurred while retrieving geolocation: ', error)
          },
        )
      } else {
        this.hasData = false
        console.error('Geolocation is not supported by this browser.')
      }
    },
  },
})

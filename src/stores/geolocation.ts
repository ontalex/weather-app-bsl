import { defineStore } from 'pinia'

export const useLocationStore = defineStore('location', {
    state: () => ({
        hasData: false,
        latitude: null as number | null,
        longitude: null as number | null,
    }),
    actions: {
        updateLocation(lat: number, long: number) {
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

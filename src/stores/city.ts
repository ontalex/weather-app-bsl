import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCityStore = defineStore('city', () => {
  const cityInputName = ref('')
  function changeCityInputName(name: string) {
    cityInputName.value = name
  }

  return { cityName: cityInputName, change: changeCityInputName }
})

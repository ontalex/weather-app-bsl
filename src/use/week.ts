import axios from 'axios'
import { useLocationStore } from '@/stores/geolocation'
import { ref } from 'vue'
// import { onBeforeMount, onMounted, type Ref } from "vue";

export async function useWeek() {
  const nav = useLocationStore()

  const dataRes = ref()
  async function fetchData() {
    if (nav.hasData) {
      const data = await axios.get('https://api.weather.ontalex.ru/weather/week/gps', {
        params: {
          latitude: nav.latitude,
          longitude: nav.longitude,
          days: 7,
        },
      })
      dataRes.value = data.data
    } else {
      const data = await axios.get('https://api.weather.ontalex.ru/weather/week/gps', {
        params: {
          days: 7,
        },
      })
      dataRes.value = data.data
    }
    console.log('Data fetching:', dataRes)
  }

  return {
    dataRes,
    fetchData,
  }
}

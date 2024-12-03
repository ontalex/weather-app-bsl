import axios from "axios";
// import { useNavigation } from "./navigation";
import { useNavStore } from "@/stores/navigation";
import { onBeforeMount, onMounted, type Ref } from "vue";
import type { Store } from "pinia";
// import { useNavigation } from "./navigation";
// import { onBeforeMount, onMounted, ref } from "vue";

export async function useWeek() {

  let nav: Store<"nav", Pick<{ coordsRef: Ref<GeolocationCoordinates | undefined, GeolocationCoordinates | undefined>; setCoords: (coords: GeolocationPosition) => void; }, "coordsRef">, Pick<{ coordsRef: Ref<GeolocationCoordinates | undefined, GeolocationCoordinates | undefined>; setCoords: (coords: GeolocationPosition) => void; }, never>, Pick<{ coordsRef: Ref<GeolocationCoordinates | undefined, GeolocationCoordinates | undefined>; setCoords: (coords: GeolocationPosition) => void; }, "setCoords">>;
  let fetching;

  onBeforeMount(() => {
    nav = useNavStore()
  })

  onMounted(async () => {
    fetching = await axios.get(
      "https://api.weather.ontalex.ru/weather/week/gps",
      {
        params: {
          latitude: nav.coordsRef?.latitude,
          longitude: nav.coordsRef?.longitude,
          days: 7,
        }
      }
    )
  });

  return fetching
}

<script setup lang="ts">
import { RouterView } from 'vue-router';
// onBeforeMount(() => {
//   navigator.geolocation.getCurrentPosition(
//     (position) => useNavStore().setCoords(position)
//   )
// })

const locationRef = ref(null);
const dataRef = ref(null);

onMounted(() => {
  const geolocationStore = useNavStore();

  locationRef.value = geolocationStore.location;
  dataRef.value = geolocationStore.data;
})
</script>

<script lang="ts">
import { useNavStore } from './stores/navigation';
import { onMounted, ref } from 'vue';
export default {
  setup() {
    const geolocationStore = useNavStore();

    geolocationStore.getCurrentPosition();
    geolocationStore.fetchData();

    return {
      location: geolocationStore.location,
      data: geolocationStore.data,
      fetchData: geolocationStore.fetchData,
    };
  }
}
</script>

<template>
  <Suspense>
    <RouterView />
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>

<style scoped lang="scss"></style>

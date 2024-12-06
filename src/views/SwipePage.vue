<script setup lang="ts">
import type { UseSwipeDirection } from '@vueuse/core'
import { useSwipe } from '@vueuse/core'
import { computed, ref } from 'vue'

const target = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)

const containerHeight = computed(() => container.value?.offsetHeight)
const top = ref('0')

function reset() {
  top.value = '0'
}

const { isSwiping, lengthY } = useSwipe(
  target,
  {
    passive: true,
    onSwipe(e: TouchEvent) {
      if (containerHeight.value) {
        if (lengthY.value < 0) {
          const length = Math.abs(lengthY.value)
          top.value = `${length}px`
        }
        else {
          top.value = '0'
        }
      }
    },
    onSwipeEnd(e: TouchEvent, direction: UseSwipeDirection) {
      if (lengthY.value < 0 && containerHeight.value && (Math.abs(lengthY.value) / containerHeight.value) >= 0.5) {
        top.value = '90%'
      }
      else {
        top.value = '0'
      }
    },
  },
)
</script>

<template>
  <div
    style="height: 100%;margin: 0px 32px;display: flex; align-items: center; justify-content: center; flex-direction: column;">
    <div ref="container" class="container select-none">
      <button @click="reset">
        Reset
      </button>
      <div ref="target" class="overlay" :class="{ animated: !isSwiping }" :style="{ top }">
        <div class="bar">
          <span class="bar__balon"></span>
        </div>
        <div>
          <p>вниз</p>
        </div>
      </div>
    </div>
    <!-- <p class="status">
      Direction: {{ direction ? direction : '-' }} <br>
      lengthX: {{ lengthX }} | lengthY: {{ lengthY }}
    </p> -->
  </div>
</template>

<style scoped lang="scss">
.overlay {
  .bar {

    width: 100%;
    padding: 12px 0;

    background-color: rgba($color: #000000, $alpha: 0.05);

    &__balon {
      min-width: 8px;
      height: 2px;
      border-radius: 2px;
      background-color: #000000;
    }
  }

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #3fb983;

  width: 200px;
  height: 200px;

  // display: flex;
  // align-items: center;
  // justify-content: center;
}

.overlay.animated {
  transition: all 0.2s ease-in-out;
}

.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  overflow: hidden;

  width: 200px;
  height: 200px;
}

.overlay>p {
  color: #fff;
  font-weight: bold;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
}

.status {
  text-align: center;
}
</style>

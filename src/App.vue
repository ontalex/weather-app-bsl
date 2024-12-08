<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoadingState from './components/Loading/LoadingState.vue'
</script>

<template>
    <Suspense>
        <RouterView />
        <template #fallback>
            <div class="wrapper">
                <LoadingState />
            </div>
        </template>
    </Suspense>
</template>

<style scoped lang="scss">
.wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

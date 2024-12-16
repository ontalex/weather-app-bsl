<script setup lang="ts">
import { CITIES_NAME } from '../components/scripts/getLocations'

const checkBox = (cityName: string) => {
    const currentValue = localStorage.getItem(cityName)
    const newValue = currentValue === 'true' ? 'false' : 'true'
    localStorage.setItem(cityName, newValue)
}

const getLocalStore = (item: string) => {
    return localStorage.getItem(item) === 'true'
}
</script>

<template>
    <div class="v-popup" data-aos="fade-in">
        <div class="v-popup-header">
            <span>Добавить город</span>
            <span>🎏</span>
        </div>
        <div class="v-popup-content" v-for="cityName in CITIES_NAME" :key="cityName">
            <input
                type="checkbox"
                :id="String(cityName)"
                class="v-popup-content-input"
                @change="checkBox(cityName)"
                :checked="getLocalStore(cityName)"
            />
            <label :for="String(cityName)" class="v-popup-content-text">{{ cityName }}</label>
        </div>
    </div>
</template>

<style scoped lang="scss">
.v-popup {
    padding: 16px;
    border-radius: 10px;
    position: fixed;
    z-index: 4;
    top: 140px;
    right: 0;
    left: 0;
    width: 250px;
    background-color: rgba(71, 40, 120, 10);
    margin: 0 auto;
    font-family: 'Arial', 'Verdana', sans-serif;

    &-header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-bottom: 15px;
    }
    &-content-input {
        visibility: hidden;
    }
    &-content-input:checked ~ &-content-text {
        color: green;
    }
}
</style>

<<<<<<< HEAD
<template>
    <div class="bar" ref="elementBar" :class="[isForcedlySwipe ? 'bar__forcedly-swipe' : '']"
        :style="{ bottom: `${bottom}px` }">
        <div class="bar__header">
            <div class="controller" ref="elementController" @click="switchState">
                <div class="controller__indicator"></div>
            </div>
            <div class="switch">
                <button class="switch__btn" @click="isHourMode = true" :disabled="isSwiping">
                    Hourly Forecast</button>
                <button class="switch__btn" @click="isHourMode = false" :disabled="isSwiping">
                    Weekly Forecast</button>
            </div>
            <div class="effects">
                <div :class="con_style_gradient"></div>
                <div class="effects__border"></div>
            </div>
        </div>
        <div class="bar__list" v-if="!isHourMode">
            <ForecastCard v-for="day of props.days" :value="{
                day: day,
                hour: undefined,
            }" :key="day.date" :isHourMode />
        </div>
        <div class="bar__list" v-else-if="props.current_day?.hour && isHourMode">
            <ForecastCard v-for="hour of props.current_day?.hour" :value="{
                day: undefined,
                hour: hour,
            }" :key="hour.time" :isHourMode />
        </div>
        <div class="bar__list bar__list" :class="[!props.current_day?.hour ? 'bar__list__none' : '']"
            v-else-if="!props.current_day?.hour">
            <p style="text-align: center">Нет данных</p>
        </div>
        <div class="navigation">
            <button class="navigation__link" @click="handlerUseLocation" :disabled="isSwiping">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.9609 14.499C17.9609 16.3896 19.2393 17.9688 20.9902 18.4092V25.209C20.9902 28.3779 21.5596 30.1074 21.9893 30.1074C22.4297 30.1074 22.9883 28.3887 22.9883 25.209V18.4092C24.7393 17.9795 26.0283 16.3896 26.0283 14.499C26.0283 12.2754 24.2344 10.4492 21.9893 10.4492C19.7549 10.4492 17.9609 12.2754 17.9609 14.499ZM20.8398 14.7246C20.1094 14.7246 19.4648 14.0801 19.4648 13.3281C19.4648 12.5869 20.1094 11.9531 20.8398 11.9531C21.6025 11.9531 22.2256 12.5869 22.2256 13.3281C22.2256 14.0801 21.6025 14.7246 20.8398 14.7246ZM22 34.0391C28.4775 34.0391 32.1943 31.8047 32.1943 29.4414C32.1943 26.6055 27.6934 24.876 24.7393 24.8438V26.4121C26.8125 26.4443 30.0244 27.5723 30.0244 29.1836C30.0244 31.0312 26.6191 32.3418 22 32.3418C17.3594 32.3418 13.9756 31.0527 13.9756 29.1836C13.9756 27.5723 17.1768 26.4443 19.25 26.4121V24.8438C16.2959 24.876 11.7949 26.6055 11.7949 29.4414C11.7949 31.8047 15.5225 34.0391 22 34.0391Z"
                        fill="currentColor" />
                </svg>
            </button>
            <img class="wave" src="@/assets/img/plashka-dlya-knopki.svg">
            <router-link to="/weathers" class="button">
                <span class="button__plus"></span>
                <img class="button__p" src="@/assets/img/Symbol.svg">
            </router-link>
            <button class="navigation-btn" :disabled="isSwiping">
                <div></div>
            </button>
            <RouterLink to="/weathers" class="navigation__link" :disabled="isSwiping">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.418 17.5283L13.3418 16.8516L14.2334 17.5283C14.5557 17.7646 14.8994 17.5176 14.7812 17.1631L14.4268 16.0674L15.3291 15.3906C15.6084 15.1758 15.501 14.7783 15.1465 14.7783H14.0186L13.6426 13.6074C13.5459 13.2959 13.127 13.2959 13.0303 13.6074L12.6543 14.7783H11.5156C11.1611 14.7783 11.043 15.1758 11.333 15.3906L12.2461 16.0674L11.8916 17.1631C11.7627 17.5176 12.1064 17.7539 12.418 17.5283ZM18.4336 16.626H31.958C32.4414 16.626 32.8174 16.25 32.8174 15.7666C32.8174 15.2725 32.4414 14.8965 31.958 14.8965H18.4336C17.9502 14.8965 17.5635 15.2725 17.5635 15.7666C17.5635 16.25 17.9502 16.626 18.4336 16.626ZM12.418 24.0059L13.3418 23.3291L14.2334 24.0059C14.5557 24.2529 14.8994 23.9951 14.7812 23.6406L14.4268 22.5449L15.3291 21.8682C15.6084 21.6533 15.501 21.2666 15.1465 21.2666H14.0186L13.6426 20.085C13.5459 19.7842 13.127 19.7842 13.0303 20.085L12.6543 21.2666H11.5156C11.1611 21.2666 11.043 21.6533 11.333 21.8682L12.2461 22.5449L11.8916 23.6406C11.7734 23.9951 12.1064 24.2314 12.418 24.0059ZM18.4336 23.125H31.958C32.4414 23.125 32.8174 22.7383 32.8174 22.2549C32.8174 21.7715 32.4414 21.3955 31.958 21.3955H18.4336C17.9502 21.3955 17.5635 21.7715 17.5635 22.2549C17.5635 22.7383 17.9502 23.125 18.4336 23.125ZM12.418 30.5156L13.3418 29.8389L14.2334 30.5156C14.5557 30.7627 14.8994 30.5049 14.7812 30.1504L14.4268 29.0547L15.3291 28.3779C15.6084 28.1631 15.501 27.7764 15.1465 27.7764H14.0186L13.6426 26.5947C13.5459 26.2939 13.127 26.2832 13.0303 26.5947L12.6543 27.7764H11.5156C11.1611 27.7764 11.043 28.1631 11.333 28.3779L12.2461 29.0547L11.8916 30.1504C11.7734 30.5049 12.1064 30.7412 12.418 30.5156ZM18.4336 29.6133H31.958C32.4414 29.6133 32.8174 29.2373 32.8174 28.7539C32.8174 28.2598 32.4414 27.8838 31.958 27.8838H18.4336C17.9502 27.8838 17.5635 28.2598 17.5635 28.7539C17.5635 29.2373 17.9502 29.6133 18.4336 29.6133Z"
                        fill="currentColor" />
                </svg>
            </RouterLink>
        </div>
    </div>
</template>

=======
>>>>>>> origin/dev
<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import ForecastCard from '../ForecastCard/ForecastCard.vue'
import type { Forecastday } from '../WeatherGPS.interfaces'
import { useLocationStore } from '@/stores/navigation'
import { useSwipe } from '@vueuse/core';

// Ref на элементы компонента
const elementBar = ref<HTMLElement | null>(null);
const elementController = ref<HTMLElement | null>(null);

// Вычислены параметры элементов
const barHeight = computed(() => elementBar.value?.offsetHeight || 0)
const controllerHeight = computed(() => elementController.value?.offsetHeight || 0)

/**
 * Отступ от верхней части блока
 */
const bottom = ref(0);

const isForcedlySwipe = ref<boolean>(true);

/**
 * Функция смены состояния для ForecastBar (принудительно)
 */
function switchState() {
    if (bottom.value !== 0) {
        bottom.value = 0
    } else {
        bottom.value = -1 * (barHeight.value - controllerHeight.value)
    }
}

// Использование useSwipe (vueuse)
const {
    lengthY,
    isSwiping
} = useSwipe(
    elementController,
    {
        passive: false,
        threshold: 25,
        onSwipeStart: () => {
            isForcedlySwipe.value = false
        },
        onSwipe: () => {
            const length = Math.abs(lengthY.value);
            bottom.value = -1 * length
        },
        onSwipeEnd: () => {
            isForcedlySwipe.value = true
            if (
                lengthY.value < 0 &&
                barHeight.value &&
                (Math.abs(lengthY.value) / barHeight.value) >= 0.5
            ) {
                bottom.value = -1 * (barHeight.value - controllerHeight.value)
            }
            else {
                bottom.value = 0
            }
        },
    }
);

/**
 * Вычисленный класс CSS
 */
const con_style_gradient = computed(() => ({
    effects__gradient: true,
    'effects__gradient--left': isHourMode.value,
    'effects__gradient--right': !isHourMode.value,
}))

const props = defineProps<{
    current_day: Forecastday | undefined
    days: Forecastday[] | undefined
    reload: () => void
}>()

const nav = useLocationStore()

/**
 * Обработчик для получения геопозиции пользователя
 */
const handlerUseLocation = async () => {
    props.reload()
    await nav.fetchLocation()
}
/**
 * Тип прогноза (true - почасовой прогноз, false - прогноз по дням)
 */
const isHourMode: Ref<boolean> = ref(false)
</script>

<template>
    <div class="bar" ref="elementBar" :class="[isForcedlySwipe ? 'bar__forcedly-swipe' : '']"
        :style="{ bottom: `${bottom}px` }">
        <div class="bar__header">
            <div class="controller" ref="elementController" @click="switchState">
                <div class="controller__indicator"></div>
            </div>
            <div class="switch">
                <button class="switch__btn" @click="isHourMode = true" :disabled="isSwiping">
                    Hourly Forecast</button>
                <button class="switch__btn" @click="isHourMode = false" :disabled="isSwiping">
                    Weekly Forecast</button>
            </div>
            <div class="effects">
                <div :class="con_style_gradient"></div>
                <div class="effects__border"></div>
            </div>
        </div>
        <div class="bar__list" v-if="!isHourMode">
            <ForecastCard v-for="day of props.days" :value="{
                day: day,
                hour: undefined,
            }" :key="day.date" :isHourMode />
        </div>
        <div class="bar__list" v-else-if="props.current_day?.hour && isHourMode">
            <ForecastCard v-for="hour of props.current_day?.hour" :value="{
                day: undefined,
                hour: hour,
            }" :key="hour.time" :isHourMode />
        </div>
        <div class="bar__list bar__list" :class="[!props.current_day?.hour ? 'bar__list__none' : '']"
            v-else-if="!props.current_day?.hour">
            <p style="text-align: center">Нет данных</p>
        </div>

        <div class="navigation">
            <button class="navigation__link" @click="handlerUseLocation" :disabled="isSwiping">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.9609 14.499C17.9609 16.3896 19.2393 17.9688 20.9902 18.4092V25.209C20.9902 28.3779 21.5596 30.1074 21.9893 30.1074C22.4297 30.1074 22.9883 28.3887 22.9883 25.209V18.4092C24.7393 17.9795 26.0283 16.3896 26.0283 14.499C26.0283 12.2754 24.2344 10.4492 21.9893 10.4492C19.7549 10.4492 17.9609 12.2754 17.9609 14.499ZM20.8398 14.7246C20.1094 14.7246 19.4648 14.0801 19.4648 13.3281C19.4648 12.5869 20.1094 11.9531 20.8398 11.9531C21.6025 11.9531 22.2256 12.5869 22.2256 13.3281C22.2256 14.0801 21.6025 14.7246 20.8398 14.7246ZM22 34.0391C28.4775 34.0391 32.1943 31.8047 32.1943 29.4414C32.1943 26.6055 27.6934 24.876 24.7393 24.8438V26.4121C26.8125 26.4443 30.0244 27.5723 30.0244 29.1836C30.0244 31.0312 26.6191 32.3418 22 32.3418C17.3594 32.3418 13.9756 31.0527 13.9756 29.1836C13.9756 27.5723 17.1768 26.4443 19.25 26.4121V24.8438C16.2959 24.876 11.7949 26.6055 11.7949 29.4414C11.7949 31.8047 15.5225 34.0391 22 34.0391Z"
                        fill="currentColor" />
                </svg>
            </button>
            <button class="navigation-btn" :disabled="isSwiping">
                <div></div>
            </button>
            <RouterLink to="/weathers" class="navigation__link" :disabled="isSwiping">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.418 17.5283L13.3418 16.8516L14.2334 17.5283C14.5557 17.7646 14.8994 17.5176 14.7812 17.1631L14.4268 16.0674L15.3291 15.3906C15.6084 15.1758 15.501 14.7783 15.1465 14.7783H14.0186L13.6426 13.6074C13.5459 13.2959 13.127 13.2959 13.0303 13.6074L12.6543 14.7783H11.5156C11.1611 14.7783 11.043 15.1758 11.333 15.3906L12.2461 16.0674L11.8916 17.1631C11.7627 17.5176 12.1064 17.7539 12.418 17.5283ZM18.4336 16.626H31.958C32.4414 16.626 32.8174 16.25 32.8174 15.7666C32.8174 15.2725 32.4414 14.8965 31.958 14.8965H18.4336C17.9502 14.8965 17.5635 15.2725 17.5635 15.7666C17.5635 16.25 17.9502 16.626 18.4336 16.626ZM12.418 24.0059L13.3418 23.3291L14.2334 24.0059C14.5557 24.2529 14.8994 23.9951 14.7812 23.6406L14.4268 22.5449L15.3291 21.8682C15.6084 21.6533 15.501 21.2666 15.1465 21.2666H14.0186L13.6426 20.085C13.5459 19.7842 13.127 19.7842 13.0303 20.085L12.6543 21.2666H11.5156C11.1611 21.2666 11.043 21.6533 11.333 21.8682L12.2461 22.5449L11.8916 23.6406C11.7734 23.9951 12.1064 24.2314 12.418 24.0059ZM18.4336 23.125H31.958C32.4414 23.125 32.8174 22.7383 32.8174 22.2549C32.8174 21.7715 32.4414 21.3955 31.958 21.3955H18.4336C17.9502 21.3955 17.5635 21.7715 17.5635 22.2549C17.5635 22.7383 17.9502 23.125 18.4336 23.125ZM12.418 30.5156L13.3418 29.8389L14.2334 30.5156C14.5557 30.7627 14.8994 30.5049 14.7812 30.1504L14.4268 29.0547L15.3291 28.3779C15.6084 28.1631 15.501 27.7764 15.1465 27.7764H14.0186L13.6426 26.5947C13.5459 26.2939 13.127 26.2832 13.0303 26.5947L12.6543 27.7764H11.5156C11.1611 27.7764 11.043 28.1631 11.333 28.3779L12.2461 29.0547L11.8916 30.1504C11.7734 30.5049 12.1064 30.7412 12.418 30.5156ZM18.4336 29.6133H31.958C32.4414 29.6133 32.8174 29.2373 32.8174 28.7539C32.8174 28.2598 32.4414 27.8838 31.958 27.8838H18.4336C17.9502 27.8838 17.5635 28.2598 17.5635 28.7539C17.5635 29.2373 17.9502 29.6133 18.4336 29.6133Z"
                        fill="currentColor" />
                </svg>
            </RouterLink>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.bar {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: max-content 1fr min-content;

    position: absolute;
    z-index: 2000;
    bottom: 0px;

    width: 100%;

    min-height: 360px;

    background: linear-gradient(167.57deg,
            rgba(46, 51, 90, 0.26) -4.68%,
            rgba(28, 27, 51, 0.26) 95.45%);
    backdrop-filter: blur(50px);

    border-radius: 44px;

    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 1) inset;

    &__forcedly-swipe {
        transition-property: bottom;
        transition-duration: .3s;
        transition-timing-function: ease-out;

        -webkit-transition-property: bottom;
        -webkit-transition-duration: .3s;
        -webkit-transition-timing-function: ease-out;
    }

    &__list {
        display: flex;
        margin-top: 20px;
        gap: 12px;
        overflow-x: auto;
        padding: 0px 20px 10px;

        &__none {
            height: 100%;
            justify-content: center;
            align-self: center;
        }

        &::-webkit-scrollbar-button {
            width: 100%;
        }

        &::-webkit-scrollbar-thumb {
            opacity: 0;
        }

        &::-webkit-scrollbar {
            width: 100%;
        }
    }
}

.navigation {
    background-image: url('/src/assets/bg_navbar.svg');
    background-size: 100%;
    background-repeat: no-repeat;

    width: 100%;
    height: 88px;

    padding-top: 20px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: -2px;

    &__link {
        border: 0;

        color: white;
        background-color: transparent;

        transition-property: color, background-color;
        transition-timing-function: ease-in-out;
        transition-duration: 0.3s;

        aspect-ratio: 1 / 1;

        margin: 0;
        padding: 0;

        display: block;
        font-size: 0;

        border-radius: 5px;

        &:hover {
            color: #c427fb;
            background-color: #fff;
        }
    }

    /**
    * добавлен стиль кнопки
    */

    .button {
    position: absolute;
    top: 88%;
    left: 49%;
    transform: translate(-50%, -50%);
    width: 55px;
    height: 55px;
    background-color: #ffffff;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    z-index: 2;
    transition: transform 0.1s, box-shadow 0.1s;

    &__p {
        width: 24px;
        height: 24px;
    }

    &:active {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1);
        transform: translate(-50%, -50%) scale(0.95);
        }
    }
}

.navigation-btn {
    background-color: transparent;
    border: 0;

    aspect-ratio: 0.6615 / 1;

    &__icon {}

    &__svg {
        width: 258px;
        height: 100px;
    }
}

.switch {
    display: grid;
    grid-template-columns: 1fr 1fr;

    &__btn {
        font-family: 'SF Pro Text';
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: -0.5px;
        text-align: center;

        color: rgba(235, 235, 245, 0.6);
        background-color: transparent;
        border: 0;
    }
}

.controller {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

    &__indicator {
        width: 48px;
        height: 5px;
        top: 8px;
        left: 171px;
        gap: 0px;
        border-radius: 10px;
        opacity: 0px;

        background: rgba(0, 0, 0, 0.3);
    }
}

.effects {
    &__gradient {
        border-width: 3px 0 0;
        border-style: solid;

        transition: border-image 0.2s ease-in-out;

        mix-blend-mode: multiply;

        &--left {
            border-image: linear-gradient(90deg,
                    rgba(255, 255, 255, 0) 3.33%,
                    rgba(255, 255, 255, 1) 33.31%,
                    rgba(255, 255, 255, 0) 63.31%,
                    rgba(255, 255, 255, 0) 93.66%) 100% 13% 0% 11% stretch;
        }

        &--right {
            border-image: linear-gradient(-90deg,
                    rgba(255, 255, 255, 0) 3.33%,
                    rgba(255, 255, 255, 1) 33.31%,
                    rgba(255, 255, 255, 0) 63.31%,
                    rgba(255, 255, 255, 0) 93.66%) 100% 13% 0% 11% stretch;
        }
    }

    &__border {
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
    }
}
</style>

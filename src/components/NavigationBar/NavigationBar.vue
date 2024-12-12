<template>
    <div class="navigation-window">
        <div class="navigation-bar">
            <div class="navigation-bar__header">
                <button @click="$emit('openMenu')">
                    <IconBack />
                </button>
            </div>
            <nav class="navigation-bar__list">
                <!-- <div @click="$emit('openMenu')" class="link-wrapper"> -->
                <RouterLink class="link" :to="navItem.link" v-for="navItem of navigationList" :key="navItem.link">
                    <component class="link__icon" v-if="navItem.icon" :is="navItem.icon" />
                    <span class="link__span" v-if="navItem.label">
                        {{ navItem.label }}
                    </span>
                </RouterLink>
                <!-- </div> -->
            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { navigationList } from './navigationList';
import IconBack from '../icons/IconBack.vue';
</script>

<style lang="scss" scoped>
.navigation-window {
    width: 100%;
    height: 100%;

    z-index: 3000;
    position: absolute;
    left: 0;
    top: 0;

    background-color: rgba($color: #222, $alpha: .5);
}

.navigation-bar {
    background: linear-gradient(170deg, #2e3358, #1c1b33);

    width: 100%;
    height: 100%;

    padding: 10px;

    &__header {
        width: 100%;
        padding: 10px;

        button {
            background-color: transparent;

            border-radius: 6px;
            border: 0px;
            padding: 10px;

            display: flex;
            justify-content: center;
            align-items: center;

            transition: background-color;
            transition-timing-function: ease;
            transition-duration: .2s;

            &:hover {
                background-color: rgba($color: #fff, $alpha: .1);
            }

            svg {
                $size: 20px;
                color: white;
                width: $size;
                height: $size;
            }
        }
    }

    &__list {
        padding: 10px;

        overflow: auto;
    }
}

.link {
    display: flex;
    align-items: center;
    gap: 16px;

    padding: 16px;
    margin-bottom: 10px;
    border-radius: 12px;

    text-decoration: none;

    transition: background-color;
    transition-timing-function: ease;
    transition-duration: .2s;

    &:hover {
        background-color: rgba($color: #fff, $alpha: .1);
    }

    &__icon {
        max-width: 24px;
        max-height: 24px;
        color: white;
    }

    &__span {
        color: white;
    }
}
</style>

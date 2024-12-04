<template>
  <div class="loader">
    <span class="loader__effect"></span>
    <span class="loader__span">Загрузка данных</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.loader__effect {
  width: 48px;
  height: 48px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.loader__effect::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 4px solid;
  border-color: rgb(108, 38, 189) transparent;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loader__span {
  $font_size: 18px;
  color: white;
  font-weight: 400;
  font-size: $font_size;
  text-align: center;
  width: min-content;
  margin-top: 10px;
  line-height: calc($font_size * 1.1);
}
</style>

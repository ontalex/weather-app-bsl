<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
</script>

<template>
    <div class="app">
        <!-- Блок о сервисе -->
        <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="170" data-aos-offset="0" class="b">
            <h1>О нашем сервисе</h1>
            <h2>Мы поможем вам быть в курсе погоды в любой точке мира!</h2>
        </div>

        <!-- Наша команда -->
        <div data-aos="fade-up" data-aos-duration="1500" class="Command">
            <h2>Наша команда</h2>
            <div class="student-one">
                <div class="image">
                    <img src="@/assets/img/image.jpg" alt="Аня" />
                </div>
                <div class="txt">
                    <h3>Аня</h3>
                    <p>Практикант-студент</p>
                </div>
            </div>
            <div class="student-two">
                <div class="image">
                    <img src="@/assets/img/ilya.jpg" alt="Илья" />
                </div>
                <div class="txt">
                    <h3>Илья</h3>
                    <p>Практикант-студент</p>
                </div>
            </div>
            <div class="student-three">
                <div class="image">
                    <img src="@/assets/img/lesha.jpg" alt="Лёша" />
                </div>
                <div class="txt">
                    <h3>Лёша</h3>
                    <p>Практикант-студент</p>
                </div>
            </div>
        </div>

        <!-- О приложении -->
        <div data-aos="fade-up" data-aos-duration="1000" class="heading">
            <h2>Что такое наше приложение?</h2>
            <p>
                Наше приложение погоды — это удобный и надежный помощник, который всегда подскажет
                актуальные данные о погоде в вашем регионе. Мы предоставляем точную информацию о
                температуре, осадках, влажности и многом другом, чтобы вы могли планировать свой день с
                уверенностью.
            </p>
        </div>

        <!-- Выбор нашего приложение -->
        <div data-aos="fade-up" data-aos-duration="1000" class="plus">
            <h2>Почему стоит выбрать наше приложение?</h2>
            <div data-aos="fade-up" data-aos-duration="1000" class="plus-one">
                <img src="@/assets/img/Icon.svg" alt="Иконка" />
                <div class="txt-content">
                    <h3>Точные прогнозы в реальном времени</h3>
                    <p>
                        Мы используем самые актуальные данные от ведущих метеорологических источников, чтобы
                        предоставить вам максимально точную информацию о погоде.
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" class="plus-two">
                <img src="@/assets/img/Icon.svg" alt="Иконка" />
                <div class="txt-content">
                    <h3>Интуитивно понятный интерфейс</h3>
                    <p>
                        Легкий и приятный интерфейс позволяет вам быстро получать нужную информацию без лишних
                        сложностей. Всё, что нужно — это пару кликов!
                    </p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" class="plus-three">
                <img src="@/assets/img/Icon.svg" alt="Иконка" />
                <div class="txt-content">
                    <h3>Поддержка множества городов и регионов</h3>
                    <p>
                        Приложение поддерживает прогнозы для множества городов по всему миру, так что вы всегда
                        будете в курсе погоды, где бы вы ни находились.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.app {
    line-height: 1.5;
    margin: 0 auto;
    position: relative;
    max-width: 390px;
    max-height: 500rem;
    background: linear-gradient(170deg, #2e3358, #1c1b33);
    color: #fff;
    padding: 25px;
}

.Command {
    font-family: "SF Pro Display";
    margin: 20px auto;
    padding: 20px;
    max-width: 400px;
    background: linear-gradient(180deg, rgba(46, 51, 90, 0.5) 0%, rgba(28, 27, 51, 0.1) 100%),
        radial-gradient(146.13% 118.42% at 50% -15.5%,
            rgba(255, 255, 255, 0.16) 0%,
            rgba(255, 255, 255, 0) 99.59%);
    outline-style: solid;
    border-radius: 10px;
}

.Command h2 {
    font-weight: 500;
    font-size: 1.5rem;
}

.Command .student-one,
.Command .student-two,
.Command .student-three {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.Command .image img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 10px 0;
    border: 2px solid;
    border-image-source: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),
        linear-gradient(45deg, rgba(255, 255, 255, 0), #ffffff);
    margin-right: 15px;
}

.Command .text {
    display: flex;
    flex-direction: column;
}

.Command h3 {
    font-family: "SF Pro Display";
    margin: 5px 0;
    font-size: 16px;
    color: #ffffff;
    font-weight: 300;
    font-size: 1.2rem;
}

.Command p {
    font-family: "SF Pro Display";
    margin: 0;
    font-size: 14px;
    color: #ffffff85;
    font-weight: 300;
    font-size: 0.8rem;
}

.b {
    font-family: "SF Pro Display";
    color: #fff;
    font-size: 1rem;
}

.b h1 {
    font-family: "SF Pro Display";
    color: #fff;
    font-weight: 400;
}

.b h2 {
    font-family: "SF Pro Display";
    color: rgba(255, 255, 255, 0.6);
    font-weight: 200;
    font-size: 1.4rem;
}

.heading {
    font-family: "SF Pro Display";
}

.heading h2 {
    font-weight: 200;
    margin-top: 40px;
}

.heading p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    text-align: justify;
    line-height: 1.6;
    margin: 10px 0;
}

.plus {
    font-family: "SF Pro Display";
    font-weight: 200;
    color: #ffffff;
}

.plus h2 {
    font-weight: 200;
}

.plus-one,
.plus-two,
.plus-three {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.plus img {
    width: 2rem;
    height: 40px;
    margin-right: 15px;
    margin-bottom: 4.7rem;
}

.plus h3 {
    font-family: "SF Pro Display";
    font-size: 18px;
    font-weight: 200;
    margin: 0;
    color: #fff;
}

.plus p {
    font-family: "SF Pro Display";
    font-size: 14px;
    line-height: 1.5;
    margin: 5px 0 0;
    color: rgba(255, 255, 255, 0.6);
    text-align: justify;
    line-height: 1.8;
    margin: 1px 0;
}

.text-content {
    display: flex;
    flex-direction: column;
}
</style>

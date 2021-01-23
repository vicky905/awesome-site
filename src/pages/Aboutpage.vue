<template>
    <div class="aboutpage">
        <div class="shell">
            <div class="headings">
                <h1 class="heading">
                    If you are looking for the future we have good news, you
                    have just found it
                </h1>
            </div>
            <div class="position">
                <div class="button-footprints">
                    <div class="text">
                        <p class="moto-paragraph">
                            Do you want to take the needed steps for
                            life-changing experience?
                        </p>
                    </div>
                    <div class="tutorial">
                        <div
                            class="tutorial__body"
                            :class="{ 'tutorial__body--background': bounce }"
                        >
                            <div class="button2">
                                <button
                                    class="button"
                                    @click="bounce = !bounce"
                                >
                                    Yes, of course
                                </button>
                                <transition name="bounce">
                                    <div v-if="bounce" class="images">
                                        <div class="background">
                                            <img
                                                class="footprints"
                                                src="../assets/footprints1.png"
                                            />
                                            <img
                                                class="armbands"
                                                src="../assets/armband.png"
                                            />
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Aboutpage',

  data() {
    return {
      bounce: false
    }
  }
}



</script>
<style>
.headings {
    display: flex;
    justify-content: center;
}

.heading,
.moto-paragraph {
    color: azure;
    font-size: 50px;
}

.moto,
.moto-paragraph {
    width: 300px;
    font-size: 55px;
}

.footprints {
    max-width: 150px;
    width: 100%;
    height: auto;
    padding-top: 25px;
    margin: 0 auto;
}

.button-footprints {
    display: flex;
}

.button {
    border: none;
    background-color: #f5d363;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin: 0 auto 20px;
    display: block;
    margin-left: 0 auto 500px;
}

.images {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.armbands {
    width: 100%;
    height: auto;
}

.bounce-enter-active {
    animation: bounce-in 1s;
}

.bounce-enter-leave {
    animation: bounce-in 1s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}

.text {
    display: flex;
}

.tutorial {
    position: relative;
    width: 100%;
    display: flex;
}

.tutorial .background {
    position: relative;
}

.background {
    position: relative;
    background-color: rgba(245, 211, 99, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 10%;
    padding: 30px 30px;
    animation-duration: 3s;
}

.button2 {
    max-width: 80%;
    margin-left: auto;
}

.tutorial .tutorial__body {
    width: 100%;
}

@media (max-width: 1023px) {
    .heading {
        font-size: 30px;
    }
    .button-footprints {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .button-footprints .moto-paragraph {
        font-size: 30px;
    }
    .button-footprints .button2 {
        max-width: 50%;
        margin: 0 auto;
    }
}

@media (max-width: 767px) {
    .heading {
        font-size: 20px;
    }
    .button-footprints {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .button-footprints .moto-paragraph {
        font-size: 20px;
    }
    .button-footprints .button2 {
        max-width: 70%;
        margin: 0 auto;
    }
}
</style>

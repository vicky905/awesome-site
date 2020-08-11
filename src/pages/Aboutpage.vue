<template>
    <div class="aboutpage">
        <div class="shell">
            <div class="headings">
                <h1
                    class="heading"
                >If you are looking for the future we have good news, you have just found it</h1>
            </div>
            <div class="position">
                <div class="button-footprints">
                    <div class="text">
                        <p
                            class="moto-paragraph"
                        >Do you want to take the needed steps for life-changing experience?</p>
                    </div>
                    <div class="tutorial">
                        <div
                            class="tutorial__body"
                            :class="{ 'tutorial__body--background': bounce }"
                        >
                            <button class="button" @click="bounce = !bounce">Yes, of course</button>
                            <transition name="bounce">
                                <div v-if="bounce" class="images">
                                    <div class="background">
                                        <img class="footprints" src="../assets/footprints1.png" />
                                        <img class="learning-js-img" src="../assets/js.jpg" />
                                    </div>
                                </div>
                            </transition>
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
    width: 120px;
    height: auto;
    padding-top: 25px;
    padding-left: 150px;
}

.button-footprints {
    display: flex;
}

.button {
    margin-top: 70px;
    border: none;
    background-color: #f5d363;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin: 0 auto;
    display: block;
    margin: 0 auto;
}

.images {
    position: absolute;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    left: 0;
    top: 100px;
}

.arrows {
    width: 50px;
    height: auto;
}

.arrow-1 {
    margin-right: 20px;
}

.learning-js-img {
    width: 490px;
    height: auto;

    margin: 0 auto;
}

.button-foot {
    position: absolute;
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
        transform: scale(1.5);
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

    display: flex;
}

.tutorial .background {
    margin-left: 320px;
    position: relative;
}

.background {
    background-color: rgba(245, 211, 99, 0.9);
    padding: 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 10%;
    padding: 30px 30px;
    animation-duration: 3s;
}
</style>
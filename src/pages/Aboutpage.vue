<template>
    <div class="aboutpage">
        <div class="headings">
            <h1
                class="heading"
            >If you are looking for the future we have good news, you have just found it</h1>
        </div>
        <h3 class="heading moto">Repetition. Is. The. Best. Teacher.</h3>
        <p
            class="moto-paragraph"
        >We in Javalearn strongly believe that whatever comes to you is exactly what you earn.We do not only teach a certain skill, we create life-changing habits</p>
        <div>
            <div class="path">
                <p
                    class="button-paragraph"
                >Do you want to take the needed steps for life-changing experince?</p>
                <div class="button-footprints">
                    <button class="button" @click="bounce = !bounce">Yes, of course</button>
                    <transition name="bounce">
                        <div v-if="bounce" class="images">
                            <img class="arrow-1 arrows" src="../assets/white-arrow.png" />
                            <img class="footprints" src="../assets/footprints1.png" />
                            <img class="arrow-2 arrows" src="../assets/white-arrow.png" />
                            <img class="learning-js-img" src="../assets/js.jpg" />
                        </div>
                    </transition>
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
    font: Helvetica;
    color: #3a42af;
}

.moto,
.moto-paragraph {
    padding-left: 100px;
    width: 300px;
}

.footprints {
    width: 200px;
    height: 50px;
}

.path {
    display: flex;
}

.button-footprints {
    display: flex;
    flex-direction: column;

    margin-left: 100px;
    width: 100px;
}

.button-paragraph {
    margin-left: 30px;
    width: 300px;
    padding-left: 70px;
}
.button {
    margin-bottom: 20px;
}

.images {
    display: flex;
    justify-content: space-between;
}

.arrows {
    width: 50px;
    height: 50px;
}

.arrow-1 {
    margin-right: 20px;
}

.arrow-2 {
    margin-left: 20px;
    margin-right: 50px;
}

.learning-js-img {
    width: 500px;
    height: 300px;
    padding-right: 50px;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-enter-leave {
    animation: bounce-in 0.5s reverse;
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
</style>
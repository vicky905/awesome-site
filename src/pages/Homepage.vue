<template>
    <div class="homepage">
        <div class="heading-earth">
            <h1 class="heading">Let's create a new world TOGETHER</h1>
            <div class="df-imgs">
                <img class="earth-img" src="../assets/earth.png" />
                <img class="footsteps" src="../assets/footprints2.png" />
                <img class="armband" src="../assets/armband.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Homepage',
}

</script>

<style lang="css" scoped>
.heading {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.earth-img {
    height: 600px;
    width: auto;
}

.df-imgs {
    display: flex;
    align-items: center;
    overflow: hidden;
}

.footsteps {
    height: 200px;
    animation: down-up 0.5s linear 0s;
}

.armband {
    height: 470px;
    width: auto;
}

@keyframes down-up {
    0% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0%);
    }
}

@media (max-width: 1023px) {
    .heading-earth {
        font-size: 30px;
    }

    .df-imgs {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .earth-img {
        max-width: 90%;
    }

    .armband {
        max-width: 90%;
    }

    .footsteps {
        transform: rotate(45deg);
    }
}

@media (max-width: 767px) {
    .heading-earth {
        font-size: 20px;
    }

    .df-imgs {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .earth-img {
        max-width: 80%;
    }

    .armband {
        max-width: 80%;
    }

    .footsteps {
        transform: rotate(45deg);
    }
}
</style>
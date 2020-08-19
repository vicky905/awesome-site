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
</style>
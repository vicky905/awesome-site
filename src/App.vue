<template>
    <div class="main" id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html,
body {
    margin: 0;
    width: 100%;
    height: 100%;
}
.main {
    background-image: url(./assets/1_lhnMJsxNqhdEkKZBMljFrw.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 100%;
}
</style>

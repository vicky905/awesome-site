<template>
    <div class="main" id="app">
        <div class="header">
            <router-link class="page-link home-link" :to="{name:'Home'}"></router-link>
            <router-link class="page-link" :to="{name:'About'}">About Us</router-link>
            <router-link class="page-link" :to="{name:'contacts'}">Contacts</router-link>
        </div>
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
.header {
    height: 55px;
    width: 100%;
    background-color: #3a42af;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.page-link {
    padding-right: 50px;
    color: #f5d363;
    font-size: 20px;
    font-family: Helvetica;
    text-decoration: none;
}

.home-link {
    background-image: url(./assets/house.png);
    width: 25px;
    height: 25px;
    background-size: contain;
    background-repeat: no-repeat;
}
</style>

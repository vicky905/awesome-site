<template>
    <div
        class="main"
        :class="{
            'main-home': $route.name === 'Home',
            'main-about': isAboutPage,
        }"
        id="app"
    >
        <div class="header">
            <router-link
                class="page-link home-link"
                :to="{ name: 'Home' }"
            ></router-link>
            <router-link class="page-link" :to="{ name: 'About' }"
                >About Us</router-link
            >
            <router-link class="page-link" :to="{ name: 'contacts' }"
                >Contacts</router-link
            >
        </div>

        <router-view />
        <div v-if="canShowFooter" class="footer"></div>
    </div>
</template>

<script>
export default {
  name: 'App',

data(){
    return{
        clicked:false
    }
},

  computed: {
      canShowFooter() {
          if (this.$route.name === 'contacts') {
              return true;
          }

          return false;
        
      },
      isAboutPage() {
          if (this.$route.name === 'About') {
              return true;
          }

          return false;
        
      }
  },

 
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

html,
body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: "Roboto", Helvetica, sans-serif;
}
.main {
    background-color: #3a42af;
    width: 100%;
    min-height: 100%;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
}

.main-home {
    justify-content: flex-start;
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
    font-family: Helvetica, 'Arial',serif;
    text-decoration: none;
}

.home-link {
    background-image: url(./assets/house.png);
    width: 25px;
    height: 25px;
    background-size: contain;
    background-repeat: no-repeat;
}

.shell {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
}
.footer {
    display: flex;
    height: 150px;
    width: auto;
    background-color: #f5d363;
}

.main-about {
    justify-content: flex-start;
}
</style>

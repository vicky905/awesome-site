import Vue from 'vue'
import App from './App.vue'
import contacts from './pages/contacts.vue'
import Homepage from './pages/Homepage.vue'
import Aboutpage from './pages/Aboutpage.vue'

import Routemaina from 'vue-router'
const routes = [
  {
    name: 'contacts',
    path: '/contacts',

    component: contacts
  },
  {
    name: 'Home',
    path: '/',
    component: Homepage

  },
  {
    name: 'About',
    path: '/about',
    component: Aboutpage

  },

];
Vue.config.productionTip = false

const router = new Routemaina({
  routes,
  mode: 'history'

})

Vue.use(Routemaina);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})


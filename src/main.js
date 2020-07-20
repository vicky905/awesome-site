import Vue from 'vue'
import App from './App.vue'
import contacts from './pages/contacts.vue'
import Homepage from './pages/Homepage.vue'
import Routemaina from 'vue-router'
const routes = [{
  name: 'Vue',
  path: '/shano',

  component: contacts
},
{
  name: 'Home',
  path: '/',
  component: Homepage

}];
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


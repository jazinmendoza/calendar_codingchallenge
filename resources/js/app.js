/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.config.devtools = true;
Vue.config.performance = true;
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//Jquery
import $ from 'jquery';
window.$ = window.jQuery = $;
 //Date Picker
// Initialize as global component
import datePicker from 'vue-bootstrap-datetimepicker'
import 'bootstrap/dist/css/bootstrap.css'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/regular.css'
import '@fortawesome/fontawesome-free/css/solid.css'
// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import solid from '@fortawesome/fontawesome-free-solid'

// fontawesome.library.add(solid);

// Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(datePicker);

// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
import { LayoutPlugin, CardPlugin, AlertPlugin} from 'bootstrap-vue'
Vue.use(LayoutPlugin)
Vue.use(CardPlugin)
Vue.use(AlertPlugin)  

// Using font-awesome 5 icons
$.extend(true, $.fn.datetimepicker.defaults, {
  icons: {
    time: 'far fa-clock',
    date: 'far fa-calendar',
    up: 'fas fa-arrow-up',
    down: 'fas fa-arrow-down',
    previous: 'fas fa-chevron-left',
    next: 'fas fa-chevron-right',
    today: 'fas fa-calendar-check',
    clear: 'far fa-trash-alt',
    close: 'far fa-times-circle'
  }
});


import App from './components/App.vue'
import store from './store/index'

const app = new Vue({
  el: '#app',
  components: {
    App
  },
  store,
  render: h => h(App)
});

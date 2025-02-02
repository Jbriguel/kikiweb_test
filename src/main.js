import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

// import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import 'animate.css/animate.min.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import 'aos/dist/aos.css';
// import 'jquery';

import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();

import FontAwesomeIcon from "@/assets/js/fontawesome"; // Importez la configuration
 
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Enregistrez le composant globalement
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createVfm())

// app.provide('bootstrap', bootstrap); 
app.use(createPinia())
app.use(router)

app.mount('#app')

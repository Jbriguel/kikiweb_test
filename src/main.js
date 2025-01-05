import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

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



import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.provide('bootstrap', bootstrap); 
app.use(createPinia())
app.use(router)

app.mount('#app')

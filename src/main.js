import { createApp } from 'vue';
import App from './App.vue';
import { BootstrapVueNext } from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const app = createApp(App) // Créer l'application Vue

app.use(BootstrapVueNext) // Installer BootstrapVue

//app.use(IconsPlugin)  //Optionnel : installer les icônes BootstrapVue

app.mount('#app') // Monter l'application
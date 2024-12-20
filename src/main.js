  
import { createApp, ref, watch, computed, reactive } from 'vue'

import PrimeVue from 'primevue/config';
import Button from "primevue/button"

import Aura from '@primevue/themes/aura';

import App from './App.vue'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } });
app.component('VButton', Button);

// Views
import BookView from './BookView.vue';
app.component('BookView', BookView)

// Components
import BookHeader from './components/BookHeader.vue';
app.component('BookHeader', BookHeader)
import BookFooter from './components/BookFooter.vue';
app.component('BookFooter', BookFooter)
//import Almanacco from './components/Almanacco.vue';
//app.component('Almanacco', Almanacco)

app.mount('#app')

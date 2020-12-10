import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import router from './router';
import { library } from "@fortawesome/fontawesome-svg-core"; 
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"; 
import { faLink, faRedo, faUndo } from "@fortawesome/free-solid-svg-icons"; 
import Bootstrap from 'bootstrap-vue';
import FlashMessage from '@smartweb/vue-flash-message';
import store from './store';

library.add(faLink, faRedo, faUndo); 
Vue.use(Bootstrap);
Vue.use(FlashMessage);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

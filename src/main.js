import Vue from 'vue';
import localforage from 'localforage';
import Vlf from 'vlf';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Vlf, localforage);

new Vue({
  render: (h) => h(App),
}).$mount('#app');

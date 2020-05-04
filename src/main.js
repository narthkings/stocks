import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
import { store } from './store/store';

Vue.config.productionTip = false;

Vue.filter('currency', value => {
  return `$${value.toLocaleString()}`;
});

Vue.use(VueResource);
Vue.http.options.root = 'https://stock-trader-3e6fa.firebaseio.com/';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

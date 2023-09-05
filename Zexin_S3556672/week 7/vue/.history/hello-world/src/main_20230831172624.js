import Vue from 'vue';
import App from './App.vue';
import MyComponent from './MyComponent.vue';

Vue.config.productionTip = false;

Vue.component('my-component', MyComponent);

new Vue({
  render: h => h(App),
}).$mount('#app');

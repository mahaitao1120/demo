import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
let a = "1111";
let b = "1111";
console.log(a);
console.log(b);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

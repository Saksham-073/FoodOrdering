import "./assets/main.css";
import "primeicons/primeicons.css";
import "vue3-toastify/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue3Toastify, { toast } from "vue3-toastify";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vue3Toastify, {
  autoClose: 3000,
  theme: "colored",
  position: "top-right",
});

app.mount("#app");

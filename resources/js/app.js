import './bootstrap';

import { createApp } from "vue";
import { createPinia } from "pinia";

import RootComponent from "./components/RootComponent/RootComponent";

window.Vue = require("vue");

const app = createApp({});
app.use(createPinia());

app.component("root-component", RootComponent);

app.mount("#app");

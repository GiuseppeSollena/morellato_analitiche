import './bootstrap';

import { createApp } from "vue";
import { createPinia } from "pinia";

import RootComponent from "./components/RootComponent/RootComponent";
import NavbarComponent from "./components/Navbar/Navbar";
import LoginButton from "./components/LoginButton/LoginButton";

window.Vue = require("vue");

const app = createApp({});
app.use(createPinia());

app.component("root-component", RootComponent);
app.component("navbar-component", NavbarComponent);
app.component("login-btn", LoginButton);

app.mount("#app");

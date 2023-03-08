import './bootstrap';

import { createApp } from "vue";
import { createPinia } from "pinia";

import RootComponent from "./components/RootComponent/RootComponent";
import NavbarComponent from "./components/Navbar/Navbar";
import LoginButton from "./components/LoginButton/LoginButton";
import StatisticsSection from "./components/StatisticsSection/StatisticsSection";
import StatisticsCard from "./components/StatisticsCard/StatisticsCard";
import StatisticButton from "./components/StatisticButton/StatisticButton";

window.Vue = require("vue");

const app = createApp({});
app.use(createPinia());

app.component("root-component", RootComponent);
app.component("navbar-component", NavbarComponent);
app.component("login-btn", LoginButton);
app.component("statistics-section", StatisticsSection);
app.component("statistics-card", StatisticsCard);
app.component("statistic-button", StatisticButton);

app.mount("#app");

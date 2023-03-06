import './bootstrap';

import { createApp } from "vue";
import { createPinia } from "pinia";

import RootComponent from "./components/RootComponent/RootComponent";
import StatisticsSection from "./components/StatisticsSection/StatisticsSection";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import StatisticsCard from "./components/StatisticsCard/StatisticsCard";


window.Vue = require("vue");

const app = createApp({});
app.use(createPinia());

app.component("root-component", RootComponent);
app.component("statistics-section", StatisticsSection);
app.component("navbar-component", Navbar);
app.component("home", Home);
app.component("stat-card", StatisticsCard);


app.mount("#app");

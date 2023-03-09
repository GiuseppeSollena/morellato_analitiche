import './bootstrap';

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from 'vue-router'

import RootComponent from "./components/RootComponent/RootComponent";
import NavbarComponent from "./components/Navbar/Navbar";
import LoginButton from "./components/LoginButton/LoginButton";
import StatisticsSection from "./components/StatisticsSection/StatisticsSection";
import StatisticsCard from "./components/StatisticsCard/StatisticsCard";
import StatisticButton from "./components/StatisticButton/StatisticButton";
import ModalLogin from "./components/ModalLogin/ModalLogin";
import FlagLanguage from "./components/FlagLanguage/FlagLanguage";

import Home from "./routing/Home";
import Statistics from "./routing/Statistics";
import DetailsTest from "./routing/DetailsTest";


window.Vue = require("vue");

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
      },
      {
        path: '/detailsTest',
        name: 'DetailsTest',
        component: DetailsTest
      },
    ],
  })

const app = createApp({});
app.use(createPinia());
app.use(router);

app.component("root-component", RootComponent);
app.component("navbar-component", NavbarComponent);
app.component("login-btn", LoginButton);
app.component("statistics-section", StatisticsSection);
app.component("statistics-card", StatisticsCard);
app.component("statistic-button", StatisticButton);
app.component("modal-login", ModalLogin);
app.component("flag-lang", FlagLanguage);


app.mount("#app");

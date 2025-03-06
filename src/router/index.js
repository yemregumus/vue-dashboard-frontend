import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/LandingPage.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../components/Home.vue";
import Dashboard from "../components/Dashboard.vue";

const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

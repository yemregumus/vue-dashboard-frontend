import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/LandingPage.vue";
import Login from "../components/Login.vue";

const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Landing from "../components/LandingPage.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../components/Home.vue";
import Dashboard from "../components/Dashboard.vue";
import ActiveCustomers from "../views/ActiveCustomers.vue";
import BlocksAdded from "../views/BlocksAdded.vue";
import CountriesServed from "../views/CountriesServed.vue";
import NodesOnline from "../views/NodesOnline.vue";

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
  {
    path: "/activeCustomers",
    component: ActiveCustomers,
  },
  {
    path: "/blocksAdded",
    component: BlocksAdded,
  },
  {
    path: "/countriesServed",
    component: CountriesServed,
  },
  {
    path: "/nodesOnline",
    component: NodesOnline,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

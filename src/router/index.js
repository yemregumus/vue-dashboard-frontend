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
import Transactions from "../views/Transactions.vue";

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
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/activeCustomers",
    component: ActiveCustomers,
    meta: { requiresAuth: true },
  },
  {
    path: "/blocksAdded",
    component: BlocksAdded,
    meta: { requiresAuth: true },
  },
  {
    path: "/countriesServed",
    component: CountriesServed,
    meta: { requiresAuth: true },
  },
  {
    path: "/nodesOnline",
    component: NodesOnline,
    meta: { requiresAuth: true },
  },
  {
    path: "/transactions",
    component: Transactions,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;

<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/home">EdgeDashboard</router-link>
    </div>
    <div class="navbar-menu">
      <router-link v-if="!isAuthenticated" to="/login" class="navbar-item">Login</router-link>
      <button v-else @click="logout" class="navbar-item">Logout</button>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import router from "../router";

const props = defineProps({
  isAuthenticated: Boolean,
});

const emit = defineEmits(["logout"]);

const logout = () => {
  emit("logout");
  router.push("/");
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--dark);
  color: var(--light);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.navbar-brand a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--primary);
  transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
}

.navbar-brand a:hover {
  text-shadow: 0 0 10px var(--primary);
}

.navbar-menu {
  display: flex;
  gap: 1.5rem;
}

.navbar-item {
  color: var(--light);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease-in-out;
}

.navbar-item:hover {
  color: var(--primary);
}
</style>

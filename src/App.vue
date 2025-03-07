<template>
  <div class="app">
    <!-- Navbar -->
    <Navbar :isAuthenticated="isAuthenticated" @logout="logout" />
    <div class="main-content">
      <!-- Sidebar -->
      <Sidebar v-if="isAuthenticated" />
      <!-- Content -->
      <div class="content">
        <router-view @login="login" />
      </div>
    </div>
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
const isAuthenticated = ref(false);

const login = () => {
  isAuthenticated.value = true;
};

const logout = () => {
  localStorage.removeItem("token");
  isAuthenticated.value = false;
};
</script>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 200px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  display: flex;
  flex-grow: 1;
}

.content {
  flex-grow: 1;
  padding: 2rem;
  background: var(--light);
  overflow: auto;
}
</style>

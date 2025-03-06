<template>
  <div class="login-page">
    <div class="login-form">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const email = ref("");
const password = ref("");

const emit = defineEmits(["login"]);

const login = async () => {
  try {
    const response = await axios.post("https://vue-dashboard-backend.onrender.com/api/auth/login", {
      email: email.value,
      password: password.value,
    });

    alert(response.data.message);
    // Save the token to localStorage or Vuex store
    localStorage.setItem("token", response.data.token);
    // Emit login event
    emit("login");
    // Redirect to the dashboard
    router.push("/home");
  } catch (error) {
    alert(error.response.data.message);
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  margin-top: -10rem;
  align-items: center;
  min-height: 100vh;
  background-color: var(--light);
}

.login-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: var(--primary-alt);
}
</style>

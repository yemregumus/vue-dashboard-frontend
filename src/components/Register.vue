<template>
  <div class="register">
    <h1>Register</h1>
    <form @submit.prevent="Register">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirm_password">Confirm Password</label>
        <input type="password" id="confirm_password" v-model="confirm_password" required />
      </div>
      <button type="submit" class="btn">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const username = ref("");
const email = ref("");
const password = ref("");
const confirm_password = ref("");

const Register = async () => {
  if (password.value !== confirm_password.value) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const response = await axios.post("https://vue-dashboard-backend.onrender.com/api/auth/register", {
      username: username.value,
      email: email.value,
      password: password.value,
    });

    alert(response.data.message);
    router.push("/login");
  } catch (error) {
    alert(error.response.data.message);
  }
};
</script>

<style lang="scss" scoped>
.register {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .form-group {
    margin-bottom: 1rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }

  .btn {
    display: block;
    width: 100%;
    padding: 0.75rem;
    margin-top: 1rem;
    background: var(--dark);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: var(--primary);
    }
  }
}
</style>

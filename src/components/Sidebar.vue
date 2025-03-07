<template>
  <div>
    <aside :class="`${is_expanded ? 'is-expanded' : ''} ${is_mobile ? 'is-mobile' : ''}`">
      <div class="logo">
        <img :src="logoURL" alt="Vue" />
      </div>
      <div class="menu-toggle-wrap">
        <button class="menu-toggle" @click="ToggleMenu" aria-label="Toggle Menu">
          <span class="material-icons">keyboard_double_arrow_right</span>
        </button>
      </div>

      <h3>Menu</h3>
      <div class="menu">
        <router-link to="/home" class="button" aria-label="Home">
          <span class="material-icons">home</span>
          <span class="text">Home</span>
        </router-link>
        <router-link to="/dashboard" class="button" aria-label="Dashboard">
          <span class="material-icons">description</span>
          <span class="text">Dashboard</span>
        </router-link>
        <router-link to="/activeCustomers" class="button" aria-label="Active Customers">
          <span class="material-icons">people</span>
          <span class="text">Active Customers</span>
        </router-link>
        <router-link to="/countriesServed" class="button" aria-label="Countries Served">
          <span class="material-icons">public</span>
          <span class="text">Countries Served</span>
        </router-link>
        <router-link to="/nodesOnline" class="button" aria-label="Nodes Online">
          <span class="material-icons">router</span>
          <span class="text">Nodes Online</span>
        </router-link>
        <router-link to="/transactions" class="button" aria-label="Transactions">
          <span class="material-icons">swap_horiz</span>
          <span class="text">Transactions</span>
        </router-link>
        <router-link to="/blocksAdded" class="button" aria-label="Blocks Added">
          <span class="material-icons">view_list</span>
          <span class="text">Blocks Added</span>
        </router-link>
      </div>
    </aside>
    <button class="hamburger" @click="ToggleMobileMenu" aria-label="Toggle Mobile Menu" :class="{ hidden: is_expanded }">
      <span class="material-icons">menu</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logoURL from "../assets/vue.svg";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const is_mobile = ref(false);

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};

const ToggleMobileMenu = () => {
  is_mobile.value = !is_mobile.value;
  is_expanded.value = !is_expanded.value; // Ensure the sidebar expands when toggled
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  color: var(--light);
  width: calc(2rem + 32px);
  overflow: hidden;

  height: 90vh;
  padding: 1rem;
  transition: width 0.3s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: top 0.3s ease-in-out;

    .menu-toggle {
      margin-top: 2rem;
      transition: transform 0.3s ease-in-out;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: color 0.3s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: var (--light);
        transition: color 0.3s ease-in-out;
      }

      .text {
        color: var(--light);
        transition: color 0.3s ease-in-out;
      }

      &:hover {
        background-color: var(--dark-alt);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 1;
    }
  }

  &.is-mobile {
    position: absolute;
    z-index: 99;
    width: var(--sidebar-width);
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &.is-expanded {
      transform: translateX(0);
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
    width: var(--sidebar-width);
    left: 0;
    top: 0;
    bottom: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &.is-expanded {
      transform: translateX(0);
    }
  }
}

.hamburger {
  display: none;
  position: fixed;
  top: 4rem;
  left: 1rem;
  background: var(--dark);
  color: var(--light);
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  z-index: 100;
  cursor: pointer;

  .material-icons {
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    display: block;
  }

  &.hidden {
    display: none;
  }
}
</style>

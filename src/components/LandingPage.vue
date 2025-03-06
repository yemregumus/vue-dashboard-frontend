<template>
  <div class="landing-page">
    <div class="hero">
      <h1>Network Metrics Dashboard</h1>
      <p>A dashboard to track active customers and analyze trends.</p>
    </div>
    <div class="cta">
      <h2>Get Started</h2>
      <p>If you already have an account, click the button below to log in.</p>
      <router-link to="/login" class="btn">Log In</router-link>

      <p>To get started, click the button below to create an account.</p>
      <router-link to="/register" class="btn">Create Account</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f0f0, #e0e0e0);

  .hero {
    text-align: center;
    padding: 3rem 3rem;
    background: var(--dark);
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.25rem;
    }
  }

  .cta {
    text-align: center;
    padding: 1rem;
    background: rgb(212, 175, 175);
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 705px;

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
      color: var(--dark);
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: var(--dark);
    }

    .btn {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      margin: 0.5rem;
      background: var(--primary);
      color: white;
      border-radius: 0.25rem;
      text-decoration: none;
      transition: background 0.3s ease-in-out;

      &:hover {
        background: var(--primary-alt);
      }
    }
  }
}

@media (max-width: 768px) {
  .landing-page {
    padding: 1rem;
    overflow: auto;
  }

  .hero {
    padding: 1.5rem 1rem;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.625rem;
    }
  }

  .cta {
    padding: 0.75rem 0.5rem;

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.625rem;
    }

    .btn {
      padding: 0.375rem 0.75rem;
      font-size: 0.625rem;
    }
  }
}
</style>

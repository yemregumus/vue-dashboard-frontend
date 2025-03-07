<template>
  <main class="home-page">
    <section class="hero">
      <div class="container">
        <h1 class="title">Welcome to Network Metrics Dashboard</h1>
        <p class="subtitle">A dashboard to track active customers and analyze trends.</p>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Key Features</h2>
        <ul>
          <li>📊 View customer activity</li>
          <li>📅 Track historical data with interactive tables</li>
          <li>⚡ Fast and responsive user interface</li>
        </ul>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <p>Ready to explore?</p>
        <router-link to="/dashboard" class="btn">Go to Dashboard</router-link>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  align-items: center;
  text-align: center;
  padding: 2rem;
  max-height: 60rem;
}

.hero {
  background: var(--primary-alt);
  color: white;
  padding: 3rem 1rem;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
}

.features {
  margin-top: 2rem;
  padding: 2rem;
  background: var(--light);
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
}

.features h2 {
  color: var(--dark);
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  font-size: 1.2rem;
  padding: 0.5rem;
}

.cta {
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--dark);
  color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .home-page {
    padding: 1rem;
  }

  .hero,
  .features,
  .cta {
    padding: 0.5rem 1rem;
  }

  .features li {
    font-size: 1rem;
  }

  .btn {
    padding: 0.2rem 0.2rem;
  }
}
</style>

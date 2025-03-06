// filepath: d:\school_stuff\projects\vue-dashboard\frontend\src\components\Footer.vue
<template>
  <footer class="footer">
    <p>&copy; 2025 EdgeNetwork Dashboard. All rights reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--dark);
  color: var(--light);
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer p {
  margin: 0;
  text-align: center;
  font-size: 0.6rem;
}
</style>

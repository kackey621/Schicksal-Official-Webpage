<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="brand-section">
          <h2 class="brand">Schicksal</h2>
          <p>{{ $t('hero.subtitle') }}</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-links">
          <router-link to="/privacy">プライバシーポリシー</router-link>
          <span>|</span>
          <router-link to="/terms">利用規約</router-link>
        </div>
        <p>&copy; {{ new Date().getFullYear() }} Schicksal. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--card-bg);
  padding: 4rem 2rem 2rem;
  border-top: 1px solid var(--card-border);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}

.brand {
  font-weight: 700;
  font-size: 2rem;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.brand-section p {
  color: var(--text-color);
  font-size: 1.1rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.footer-bottom p {
  color: #6e7681;
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.footer-links a {
  color: #6e7681;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>

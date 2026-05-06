<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="brand-section">
          <h2 class="brand">Your IT Specialist</h2>
          <p>{{ $t('hero.subtitle') }}</p>
        </div>
        
        <div class="cta-section">
          <h3>{{ $t('contact.cta') }}</h3>
          <button class="cta-button">{{ $t('contact.button') }}</button>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Your IT Specialist. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #090c10;
  padding: 4rem 2rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
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
  background: linear-gradient(90deg, #42d392, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.brand-section p {
  color: var(--text-color);
  font-size: 1.1rem;
}

.cta-section h3 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.cta-button {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background: var(--secondary-color);
  border-radius: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  cursor: pointer;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(100, 126, 255, 0.3);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #6e7681;
  font-size: 0.9rem;
}
</style>

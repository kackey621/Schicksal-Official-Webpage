<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>

<template>
  <div class="service-page">
    <div class="container glass-panel">
      <div class="icon">🎓</div>
      <h1 class="page-title">{{ $t('services.education.title') }}</h1>
      <p class="desc">{{ $t('services.education.desc') }}</p>
      
      <div class="details">
        <ul>
          <li v-for="(item, i) in $tm('services.education.details')" :key="i">{{ $rt(item) }}</li>
        </ul>
        <div class="pricing">
          <strong>💰 {{ locale === 'en' ? 'Pricing' : '料金' }}:</strong> {{ $t('services.education.pricing') }}
        </div>
      </div>
      
      <div class="actions">
        <router-link to="/about" class="back-btn">← {{ $t('services.close') || 'Back' }}</router-link>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScImgpsCYS1sPf0OVpRUEgOpsG5Rz32zQzh8j76Q20xhQ1jBQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="cta-btn">{{ $t('nav.contact') }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-page {
  padding: 4rem 2rem;
  background-color: var(--bg-color);
  min-height: 80vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.container {
  max-width: 900px;
  width: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  color: var(--heading-color);
  text-align: center;
  margin-bottom: 1rem;
}

.desc {
  font-size: 1.2rem;
  color: var(--text-color);
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2rem;
}

.details {
  background: rgba(255, 255, 255, 0.4);
  padding: 2rem;
  border-radius: 12px;
}

.details ul {
  list-style-type: none;
  margin-bottom: 2rem;
}

.details li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  line-height: 1.5;
}

.details li::before {
  content: "•";
  color: var(--primary-color);
  position: absolute;
  left: 0;
  font-size: 1.5rem;
  line-height: 1;
}

.pricing {
  background: rgba(242, 124, 91, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  color: var(--heading-color);
  text-align: center;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.back-btn, .cta-btn {
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
}

.back-btn {
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
}

.back-btn:hover {
  background: var(--primary-color);
  color: #fff;
}

.cta-btn {
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  color: white;
  box-shadow: 0 4px 15px rgba(255, 126, 103, 0.3);
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 126, 103, 0.5);
}
</style>

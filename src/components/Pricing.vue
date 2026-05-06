<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { tm } = useI18n()
const getItems = (key: string): any[] => tm(key) as any[]
</script>

<template>
  <section id="pricing" class="pricing-section">
    <div class="container">
      <h2 class="section-title">{{ $t('pricing.title') }}</h2>
      
      <div class="glass-panel">
        <p class="pricing-desc">{{ $t('pricing.desc') }}</p>
        
        <div class="pricing-grid">
          <div class="pricing-card" v-for="(item, index) in getItems('pricing.items')" :key="index">
            <div class="card-header">
              <h3>{{ item.type }}</h3>
            </div>
            <div class="card-body">
              <div class="model-badge">{{ item.model }}</div>
              <p class="notes">{{ item.notes }}</p>
            </div>
          </div>
        </div>
        
        <p class="conclusion">{{ $t('pricing.conclusion') }}</p>
      </div>

      <!-- Removed Contact Section as per user request -->
    </div>
  </section>
</template>

<style scoped>
.pricing-section {
  padding: 6rem 2rem;
  background-color: var(--bg-color);
  position: relative;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, var(--secondary-color), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.glass-panel {
  padding: 2.5rem;
}

.pricing-desc {
  font-size: 1.1rem;
  color: var(--text-color);
  text-align: center;
  margin-bottom: 2.5rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.pricing-card {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  border: 1px solid rgba(255, 126, 103, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 126, 103, 0.1);
}

.card-header {
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  padding: 1.5rem;
  text-align: center;
}

.card-header h3 {
  color: white;
  margin: 0;
  font-size: 1.2rem;
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.model-badge {
  background-color: rgba(255, 126, 103, 0.1);
  color: var(--primary-color);
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
  font-size: 0.9rem;
}

.notes {
  color: var(--text-color);
  font-size: 0.95rem;
  line-height: 1.5;
}

.conclusion {
  font-style: italic;
  color: var(--heading-color);
  text-align: center;
  padding: 1rem;
  background: rgba(255, 126, 103, 0.05);
  border-radius: 8px;
  line-height: 1.6;
}

.contact-panel {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-top: 4px solid var(--primary-color);
}

.contact-panel h2 {
  font-size: 2.2rem;
  color: var(--heading-color);
}

.contact-panel p {
  font-size: 1.1rem;
  color: var(--text-color);
  max-width: 800px;
  line-height: 1.6;
}

.cta-box {
  margin-top: 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.cta-text {
  font-weight: bold;
  color: var(--secondary-color) !important;
  font-size: 1.2rem !important;
  white-space: pre-line;
}

.contact-btn {
  display: inline-block;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 126, 103, 0.4);
}

.contact-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 6px 20px rgba(255, 126, 103, 0.6);
}

@media (max-width: 768px) {
  .glass-panel {
    padding: 1.5rem;
  }
}
</style>

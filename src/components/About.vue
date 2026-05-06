<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { tm } = useI18n()
const getItems = (key: string): any[] => tm(key) as any[]
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">{{ $t('about.title') }}</h2>
      
      <!-- Main Intro -->
      <div class="glass-panel main-intro">
        <p class="mission">{{ $t('about.mission') }}</p>
        <p class="desc">{{ $t('about.description') }}</p>
      </div>

      <!-- Services Summary Hub -->
      <div class="glass-panel subsection services-hub">
        <h3>{{ $t('services.title') || 'Our Services' }}</h3>
        <div class="hub-grid">
          <router-link to="/web-dev" class="hub-card">
            <div class="icon">💻</div>
            <h4>{{ $t('services.webDev.title') }}</h4>
            <p>{{ $t('services.webDev.desc') }}</p>
            <span class="link-text">{{ $t('services.readMore') || 'Learn More' }} →</span>
          </router-link>

          <router-link to="/it-consulting" class="hub-card">
            <div class="icon">🔍</div>
            <h4>{{ $t('services.itConsulting.title') }}</h4>
            <p>{{ $t('services.itConsulting.desc') }}</p>
            <span class="link-text">{{ $t('services.readMore') || 'Learn More' }} →</span>
          </router-link>

          <router-link to="/education" class="hub-card">
            <div class="icon">🎓</div>
            <h4>{{ $t('services.education.title') }}</h4>
            <p>{{ $t('services.education.desc') }}</p>
            <span class="link-text">{{ $t('services.readMore') || 'Learn More' }} →</span>
          </router-link>
        </div>
      </div>

      <!-- Business Identity Table -->
      <div class="glass-panel subsection">
        <h3>{{ $t('about.identity.title') }}</h3>
        <div class="identity-table">
          <div class="identity-row" v-for="(item, index) in getItems('about.identity.items')" :key="index">
            <div class="identity-label">{{ item.label }}</div>
            <div class="identity-value">{{ item.value }}</div>
          </div>
        </div>
      </div>

      <!-- Core Values -->
      <div class="glass-panel subsection">
        <h3>{{ $t('about.coreValues.title') }}</h3>
        <p>{{ $t('about.coreValues.desc') }}</p>
        <ul class="value-list">
          <li v-for="(item, index) in getItems('about.coreValues.list')" :key="index">{{ item }}</li>
        </ul>
        <p class="conclusion">{{ $t('about.coreValues.conclusion') }}</p>
      </div>

      <!-- Target Clients -->
      <div class="glass-panel subsection">
        <h3>{{ $t('about.targetClients.title') }}</h3>
        <p>{{ $t('about.targetClients.desc') }}</p>
        <div class="client-grid">
          <div class="client-card" v-for="(item, index) in getItems('about.targetClients.items')" :key="index">
            <h4>{{ item.client }}</h4>
            <p>{{ item.support }}</p>
          </div>
        </div>
      </div>

      <!-- Industries -->
      <div class="glass-panel subsection">
        <h3>{{ $t('about.industries.title') }}</h3>
        <p>{{ $t('about.industries.desc') }}</p>
      </div>

      <!-- Qualifications -->
      <div class="glass-panel subsection qualifications-section">
        <h3>{{ $t('about.qualifications.title') }}</h3>
        <p>{{ $t('about.qualifications.desc') }}</p>
        
        <div class="qual-grid">
          <div class="qual-card">
            <h4>{{ $t('about.qualifications.tech.title') }}</h4>
            <ul>
              <li v-for="(item, index) in getItems('about.qualifications.tech.items')" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="qual-card">
            <h4>{{ $t('about.qualifications.teaching.title') }}</h4>
            <ul>
              <li v-for="(item, index) in getItems('about.qualifications.teaching.items')" :key="index">{{ item }}</li>
            </ul>
          </div>
          <div class="qual-card">
            <h4>{{ $t('about.qualifications.experience.title') }}</h4>
            <ul>
              <li v-for="(item, index) in getItems('about.qualifications.experience.items')" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Upcoming Products -->
      <div class="glass-panel subsection products-section">
        <div class="product-header">
          <h3>{{ $t('about.products.title') }}</h3>
          <span class="status-badge">{{ $t('about.products.status') }}</span>
        </div>
        <p>{{ $t('about.products.desc') }}</p>
        <p style="margin-top: 1rem;">{{ $t('about.products.details') }}</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 6rem 2rem;
  background-color: var(--bg-color);
  position: relative;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

.main-intro {
  text-align: center;
}

.mission {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--heading-color);
  margin-bottom: 1.5rem;
  line-height: 1.4;
  border-left: 4px solid var(--primary-color);
  padding-left: 1.5rem;
  text-align: left;
}

.desc {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
  text-align: left;
}

h3 {
  font-size: 1.8rem;
  color: var(--heading-color);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

h3::before {
  content: '';
  display: block;
  width: 8px;
  height: 24px;
  background-color: var(--primary-color);
  border-radius: 4px;
}

h4 {
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

/* Identity Table */
.identity-table {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.identity-row {
  display: flex;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  border: 1px solid rgba(255, 126, 103, 0.1);
}

.identity-label {
  font-weight: bold;
  color: var(--heading-color);
  flex: 0 0 30%;
}

.identity-value {
  color: var(--text-color);
  flex: 1;
}

/* Lists */
.value-list {
  margin: 1.5rem 0;
  list-style: none;
  padding: 0;
}

.value-list li, .qual-card li {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.8rem;
  color: var(--text-color);
  line-height: 1.5;
}

.value-list li::before, .qual-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}

.conclusion {
  font-style: italic;
  color: var(--heading-color);
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(255, 126, 103, 0.05);
  border-radius: 8px;
}

/* Grids */
.hub-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.hub-card {
  background: rgba(255, 255, 255, 0.6);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 126, 103, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: inherit;
}

.hub-card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hub-card h4 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--heading-color);
}

.hub-card p {
  color: var(--text-color);
  font-size: 1rem;
  margin-bottom: 1.5rem;
  flex: 1;
}

.hub-card .link-text {
  color: var(--primary-color);
  font-weight: bold;
  font-size: 0.95rem;
}

.hub-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(255, 126, 103, 0.2);
  border-color: var(--primary-color);
}

.client-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.client-card, .qual-card {
  background: rgba(255, 255, 255, 0.6);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 126, 103, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.client-card:hover, .qual-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.qual-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.qual-card ul {
  list-style: none;
  padding: 0;
}

/* Products */
.product-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}

.status-badge {
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
  box-shadow: 0 4px 10px rgba(255, 126, 103, 0.3);
}

@media (max-width: 768px) {
  .identity-row {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .identity-label {
    flex: none;
  }

  .container {
    padding: 1rem;
  }

  .glass-panel {
    padding: 1.5rem;
  }
}
</style>

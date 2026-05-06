<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'ja' : 'en'
}
</script>

<template>
  <header class="navbar glass-panel">
    <div class="nav-container">
      <div class="logo">
        <span class="brand">Your IT Specialist</span>
      </div>
      <nav class="nav-links">
        <a href="#services">{{ t('nav.services') }}</a>
        <button @click="toggleLanguage" class="lang-switch">
          {{ locale === 'en' ? '日本語' : 'EN' }}
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  border-radius: 0;
  border-left: none;
  border-right: none;
  border-top: none;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.brand {
  font-weight: 700;
  font-size: 1.5rem;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.lang-switch {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.3s ease;
}

.lang-switch:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}
</style>

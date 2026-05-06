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
        <router-link to="/" class="logo-link">
          <div class="logo-img" aria-label="Schicksal Logo"></div>
        </router-link>
      </div>
      <nav class="nav-links">
        <router-link to="/">{{ t('nav.home') || 'Home' }}</router-link>
        <router-link to="/about">{{ t('nav.about') }}</router-link>
        <router-link to="/pricing">{{ t('nav.pricing') }}</router-link>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScImgpsCYS1sPf0OVpRUEgOpsG5Rz32zQzh8j76Q20xhQ1jBQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" class="nav-contact-btn">{{ t('nav.contact') }}</a>
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
  z-index: 9999;
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

.logo-img {
  height: 40px;
  width: 150px;
  background-color: var(--heading-color);
  -webkit-mask-image: url('/Logo.png');
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: left center;
  mask-image: url('/Logo.png');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: left center;
  display: block;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 10000;
}

.logo-img:hover {
  transform: scale(1.05);
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

.nav-contact-btn {
  background: var(--primary-color);
  color: white !important;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.nav-contact-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 126, 103, 0.3);
}

.lang-switch {
  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 126, 103, 0.2);
}

.lang-switch:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(255, 126, 103, 0.4);
}
</style>

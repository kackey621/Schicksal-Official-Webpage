<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'ja' : 'en'
  localStorage.setItem('schicksal-locale', locale.value)
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
  gap: 1.5rem;
  padding: 0.9rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.logo {
  flex: 0 0 auto;
}

.logo-link {
  display: inline-flex;
  align-items: center;
}

.logo-img {
  width: clamp(112px, 16vw, 150px);
  height: auto;
  aspect-ratio: 15 / 4;
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
  justify-content: flex-end;
  gap: 1.5rem;
  min-width: 0;
}

.nav-links a {
  color: var(--text-color);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.nav-contact-btn {
  background: var(--primary-color);
  color: white !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0.5rem 1.15rem;
  border-radius: 999px;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 52px;
  min-height: 40px;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.9rem;
  line-height: 1;
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 126, 103, 0.2);
}

.lang-switch:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(255, 126, 103, 0.4);
}

@media (max-width: 900px) {
  .nav-container {
    gap: 1rem;
    padding: 0.75rem 1.25rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .nav-links a {
    font-size: 0.92rem;
  }

  .nav-contact-btn,
  .lang-switch {
    min-height: 36px;
  }

  .nav-contact-btn {
    padding: 0.45rem 0.95rem;
  }

  .lang-switch {
    min-width: 48px;
    padding: 0.45rem 0.8rem;
  }
}

@media (max-width: 640px) {
  .nav-container {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.7rem;
    padding: 0.75rem 1rem;
  }

  .logo-img {
    width: 116px;
  }

  .nav-links {
    width: 100%;
    justify-content: flex-start;
    gap: 0.8rem;
    overflow-x: auto;
    padding-bottom: 0.15rem;
    scrollbar-width: none;
  }

  .nav-links::-webkit-scrollbar {
    display: none;
  }

  .nav-links a {
    font-size: 0.88rem;
  }

  .nav-contact-btn,
  .lang-switch {
    flex: 0 0 auto;
    min-height: 34px;
  }

  .nav-contact-btn {
    padding: 0.4rem 0.85rem;
  }

  .lang-switch {
    min-width: 46px;
    padding: 0.4rem 0.75rem;
  }
}

@media (max-width: 420px) {
  .nav-container {
    padding-inline: 0.75rem;
  }

  .logo-img {
    width: 104px;
  }

  .nav-links {
    gap: 0.65rem;
  }

  .nav-links a {
    font-size: 0.82rem;
  }

  .nav-contact-btn {
    padding-inline: 0.75rem;
  }
}
</style>

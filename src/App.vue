<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const { locale, t } = useI18n()

const routeMetaKeys: Record<string, { title: string; description: string }> = {
  home: { title: 'meta.title', description: 'meta.description' },
  'web-dev': { title: 'meta.webDevTitle', description: 'meta.webDevDescription' },
  'it-consulting': { title: 'meta.itConsultingTitle', description: 'meta.itConsultingDescription' },
  education: { title: 'meta.educationTitle', description: 'meta.educationDescription' },
  about: { title: 'meta.aboutTitle', description: 'meta.aboutDescription' },
  pricing: { title: 'meta.pricingTitle', description: 'meta.pricingDescription' },
  privacy: { title: 'meta.privacyTitle', description: 'meta.privacyDescription' },
  terms: { title: 'meta.termsTitle', description: 'meta.termsDescription' }
}

const updateDocumentMeta = () => {
  const routeName = String(route.name ?? 'home')
  const keys = routeMetaKeys[routeName] ?? routeMetaKeys.home
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]')

  document.documentElement.lang = locale.value
  document.title = t(keys.title)
  description?.setAttribute('content', t(keys.description))
}

watch([() => route.name, () => locale.value], updateDocumentMeta, { immediate: true })
</script>

<template>
  <div class="app-wrapper">
    <Navbar />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<heade>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZEQN07RTXM"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-ZEQN07RTXM');
  </script>
</heade>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import gsap from 'gsap'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const imageRef = ref(null)

const heroImageSrc = computed(() => {
  return locale.value === 'en' ? '/image/HEADER_EN.png' : '/image/HEADER_JA.png'
})

onMounted(() => {
  gsap.fromTo(imageRef.value, 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
  )
})
</script>

<template>
  <section class="hero-section">
    <div class="background-elements">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>
    
    <div class="content">
      <img ref="imageRef" :src="heroImageSrc" alt="Hero Image" class="hero-image" />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: calc(100vh - 80px); /* minus header */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0; /* Remove padding to allow 100% width */
}

.background-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
}

.circle-1 {
  width: 400px;
  height: 400px;
  background: var(--primary-color);
  top: -100px;
  left: -100px;
  animation: float 10s ease-in-out infinite alternate;
}

.circle-2 {
  width: 500px;
  height: 500px;
  background: var(--secondary-color);
  bottom: -100px;
  right: -100px;
  animation: float 12s ease-in-out infinite alternate-reverse;
}

@keyframes float {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.content {
  text-align: center;
  width: 100%;
  /* Removed max-width and padding for full width image */
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
}
</style>

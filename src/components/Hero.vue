<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const titleRef = ref(null)
const subtitleRef = ref(null)

onMounted(() => {
  gsap.fromTo(titleRef.value, 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
  )
  gsap.fromTo(subtitleRef.value, 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
  )
})
</script>

<template>
  <section class="hero-section">
    <div class="background-elements">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>
    
    <div class="content glass-panel">
      <h1 ref="titleRef">{{ $t('hero.title') }}</h1>
      <p ref="subtitleRef">{{ $t('hero.subtitle') }}</p>
      <a href="#services" class="cta-button">Explore Services</a>
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
  padding: 2rem;
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
  padding: 4rem 3rem;
  max-width: 800px;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--text-color);
  margin-bottom: 2.5rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  cursor: pointer;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(66, 211, 146, 0.3);
}
</style>

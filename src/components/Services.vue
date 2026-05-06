<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const cardsRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (cardsRef.value) {
    const cards = cardsRef.value.children
    gsap.fromTo(cards, 
      { y: 50, opacity: 0 }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.value,
          start: 'top 80%',
        }
      }
    )
  }
})
</script>

<template>
  <section id="services" class="services-section">
    <div class="container">
      <h2 class="section-title">{{ $t('services.title') }}</h2>
      
      <div class="cards-grid" ref="cardsRef">
        <!-- Web Dev -->
        <div class="service-card glass-panel">
          <div class="icon">💻</div>
          <h3>{{ $t('services.webDev.title') }}</h3>
          <p>{{ $t('services.webDev.desc') }}</p>
        </div>
        
        <!-- IT Consulting -->
        <div class="service-card glass-panel">
          <div class="icon">🔍</div>
          <h3>{{ $t('services.itConsulting.title') }}</h3>
          <p>{{ $t('services.itConsulting.desc') }}</p>
        </div>
        
        <!-- Education -->
        <div class="service-card glass-panel">
          <div class="icon">🎓</div>
          <h3>{{ $t('services.education.title') }}</h3>
          <p>{{ $t('services.education.desc') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 6rem 2rem;
  background-color: var(--bg-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  padding: 2.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  background: rgba(22, 27, 34, 0.8);
  border-color: rgba(255, 255, 255, 0.2);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

p {
  color: var(--text-color);
  line-height: 1.6;
}
</style>

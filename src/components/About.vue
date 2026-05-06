<script setup lang="ts">
// About section setup
</script>

<template>
  <section id="about" class="about-section">
    <div class="container glass-panel">
      <h2 class="section-title">{{ $t('about.title') }}</h2>
      <div class="about-content">
        <div class="text-content">
          <p class="mission">{{ $t('about.mission') }}</p>
          <p>{{ $t('about.description') }}</p>
          
          <div class="qualifications">
            <h3>{{ $t('about.qualifications.title') }}</h3>
            <ul>
              <li>{{ $t('about.qualifications.tech') }}</li>
              <li>{{ $t('about.qualifications.teaching') }}</li>
              <li>{{ $t('about.qualifications.experience') }}</li>
            </ul>
          </div>
        </div>
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
  padding: 4rem;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
  background: linear-gradient(90deg, var(--secondary-color), var(--primary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.mission {
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 2rem;
  line-height: 1.4;
  border-left: 4px solid var(--primary-color);
  padding-left: 1.5rem;
}

.text-content p {
  color: var(--text-color);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.qualifications {
  margin-top: 3rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

ul {
  list-style-type: none;
}

li {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.8rem;
  color: var(--text-color);
}

li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: bold;
}
</style>

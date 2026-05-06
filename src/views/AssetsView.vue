<template>
  <div class="assets-container">
    <h1>Assets</h1>
    <div class="assets-grid">
      <div v-for="asset in images" :key="asset" class="asset-item">
        <div class="image-wrapper">
          <img :src="asset" :alt="getFileName(asset)" />
          <button class="download-btn" @click="downloadImage(asset)" title="Download">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </button>
        </div>
        <p class="filename">{{ getFileName(asset) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const images = ref<string[]>([])

onMounted(async () => {
  try {
    const imageFiles = import.meta.glob('/public/assets/**/*', { eager: true })
    images.value = Object.keys(imageFiles)
      .map(path => path.replace('/public', ''))
      .filter(path => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(path))

    await new Promise(resolve => setTimeout(resolve, 300))

    // Check if specific file is requested via URL path
    const pathParts = route.path.split('/')
    if (pathParts.length > 2 && pathParts[1] === 'assets' && pathParts[2]) {
      const requestedFile = '/' + pathParts.slice(2).join('/')
      downloadImage(requestedFile)
    }
  } catch (error) {
    console.error('Failed to load images:', error)
  }
})

const downloadImage = (imagePath: string) => {
  const link = document.createElement('a')
  link.href = imagePath
  link.download = getFileName(imagePath)
  document.body.appendChild(link)
  link.click()
  link.remove()
}

const getFileName = (imagePath: string) => {
  return imagePath.split('/').pop() || 'image'
}
</script>

<style scoped>
.assets-container {
  padding: 2rem;
}

.assets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.asset-item {
  display: flex;
  flex-direction: column;
}

.image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: #f5f5f5;
  aspect-ratio: 1;
}

.asset-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s;
}

.image-wrapper:hover img {
  transform: scale(1.05);
}

.download-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s, background 0.2s;
}

.image-wrapper:hover .download-btn {
  opacity: 1;
}

.download-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.filename {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  word-break: break-word;
}
</style>

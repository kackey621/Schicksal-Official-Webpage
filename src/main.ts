import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import ja from './locales/ja.json'

const i18n = createI18n({
  legacy: false,
  locale: 'ja',
  fallbackLocale: 'en',
  messages: {
    en,
    ja
  }
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')

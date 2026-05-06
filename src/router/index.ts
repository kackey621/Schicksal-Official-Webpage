import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../components/About.vue'
import Pricing from '../components/Pricing.vue'
import WebDev from '../views/WebDev.vue'
import ITConsulting from '../views/ITConsulting.vue'
import Education from '../views/Education.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsOfService from '../views/TermsOfService.vue'
import AssetsView from '../views/AssetsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/web-dev',
      name: 'web-dev',
      component: WebDev
    },
    {
      path: '/it-consulting',
      name: 'it-consulting',
      component: ITConsulting
    },
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: PrivacyPolicy
    },
    {
      path: '/terms',
      name: 'terms',
      component: TermsOfService
    },
     {
      path: '/assets/:pathMatch(.*)*',
      name: 'assets',
      component: AssetsView
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { headerScrollOffset, scrollBehaviorMode } from './scroll'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/referenzen', name: 'referenzen', component: () => import('@/views/ReferenzenView.vue') },
    { path: '/datenschutz', name: 'datenschutz', component: () => import('@/views/DatenschutzView.vue') },

    // Alte URLs der bisherigen Website weiterleiten, damit bestehende Links funktionieren.
    { path: '/index.html', redirect: '/' },
    { path: '/referenzen.html', redirect: '/referenzen' },
    { path: '/datenschutz.html', redirect: '/datenschutz' },

    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFoundView.vue') },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      // Beim Seitenwechsel sofort springen, innerhalb der Seite sanft scrollen.
      // 'instant' statt 'auto', weil 'auto' das CSS scroll-behavior: smooth übernehmen würde.
      const samePage = to.path === from.path
      return {
        el: to.hash,
        top: headerScrollOffset(),
        behavior: samePage ? scrollBehaviorMode() : 'instant',
      }
    }
    if (to.path !== from.path) return { top: 0, behavior: 'instant' }
    return false
  },
})

export default router

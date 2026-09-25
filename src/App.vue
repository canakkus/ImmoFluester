<script setup lang="ts">
import { nextTick, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import StickyContactBar from '@/components/layout/StickyContactBar.vue'

const route = useRoute()

/**
 * Nach einem echten Seitenwechsel (nicht bei Anker-Sprüngen) den Fokus auf die H1 setzen,
 * damit Screenreader die neue Seite ansagen und die Tab-Reihenfolge oben beginnt.
 */
watch(
  () => route.path,
  (path, previous) => {
    if (previous === undefined || path === previous || route.hash) return
    nextTick(() => document.querySelector<HTMLElement>('main h1')?.focus({ preventScroll: true }))
  },
)
</script>

<template>
  <a
    href="#main"
    class="sr-only fixed top-3 left-3 z-(--z-skiplink) rounded-md bg-ink px-5 py-3 text-ui text-paper focus:not-sr-only"
  >
    Zum Inhalt springen
  </a>
  <SiteHeader />
  <main id="main">
    <RouterView />
  </main>
  <SiteFooter />
  <StickyContactBar />
</template>

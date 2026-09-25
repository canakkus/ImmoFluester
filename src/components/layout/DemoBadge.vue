<script setup lang="ts">
import { Info } from 'lucide-vue-next'
import { useDemoModal } from '@/composables/useDemoModal'

withDefaults(
  defineProps<{
    variant?: 'header' | 'footer' | 'floating'
  }>(),
  { variant: 'header' },
)

const { openDemoModal } = useDemoModal()
</script>

<template>
  <!-- Header Version: sehr dezent neben der Navigation oder im Menü -->
  <button
    v-if="variant === 'header'"
    type="button"
    class="inline-flex min-h-8 items-center gap-1.5 rounded-full border border-line-strong/40 bg-sand/60 px-2.5 py-1 text-[0.8125rem] font-medium text-ink-muted transition-[background-color,border-color,color] duration-150 hover:border-burgundy/50 hover:bg-sand hover:text-ink active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-burgundy"
    aria-label="Information zum Konzept-Entwurf öffnen"
    @click="openDemoModal"
  >
    <span class="size-1.5 rounded-full bg-burgundy" aria-hidden="true" />
    <span>Konzept-Entwurf</span>
    <Info :size="13" :stroke-width="2" class="opacity-70" aria-hidden="true" />
  </button>

  <!-- Footer Version: text-basiert mit dezentem Badge -->
  <button
    v-else-if="variant === 'footer'"
    type="button"
    class="inline-flex min-h-8 items-center gap-2 rounded-full border border-paper/20 bg-paper/5 px-3 py-1 text-[0.8125rem] font-medium text-night-muted transition-colors duration-150 hover:border-paper/40 hover:bg-paper/10 hover:text-paper active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-paper"
    aria-label="Information zum Konzept-Entwurf öffnen"
    @click="openDemoModal"
  >
    <span class="size-1.5 rounded-full bg-brick-light" aria-hidden="true" />
    <span>Konzept-Entwurf</span>
    <Info :size="13" :stroke-width="2" aria-hidden="true" />
  </button>

  <!-- Floating Version (mobil / dezent am Bildschirmrand) -->
  <button
    v-else-if="variant === 'floating'"
    type="button"
    class="fixed bottom-20 left-4 z-40 hidden min-h-9 items-center gap-2 rounded-full border border-line-strong/30 bg-paper/90 px-3 py-1.5 text-[0.8125rem] font-medium text-ink shadow-sm backdrop-blur-md transition-[transform,background-color,border-color] duration-150 hover:border-burgundy/40 hover:bg-paper active:scale-[0.98] min-[480px]:inline-flex lg:bottom-5 lg:left-5 focus-visible:outline-2 focus-visible:outline-burgundy"
    aria-label="Information zum Konzept-Entwurf öffnen"
    @click="openDemoModal"
  >
    <span class="size-1.5 rounded-full bg-burgundy" aria-hidden="true" />
    <span>Konzept-Entwurf</span>
    <Info :size="14" :stroke-width="2" class="text-ink-muted" aria-hidden="true" />
  </button>
</template>

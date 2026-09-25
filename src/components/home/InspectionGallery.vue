<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { FileText } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import InspectionLightbox from './InspectionLightbox.vue'
import { contact } from '@/data/contact'
import { inspections } from '@/data/inspections'

const activeIndex = ref<number | null>(null)
const tiles = ref<HTMLButtonElement[]>([])
let triggerIndex: number | null = null

function openAt(index: number): void {
  triggerIndex = index
  activeIndex.value = index
}

/** Fokus zurück auf die Kachel, die die Lightbox geöffnet hat. */
function restoreFocus(): void {
  const index = triggerIndex
  triggerIndex = null
  if (index === null) return
  nextTick(() => tiles.value[index]?.focus({ preventScroll: true }))
}
</script>

<template>
  <section id="inspektionen" class="bg-sand py-section" aria-labelledby="inspektionen-heading">
    <div class="container-page">
      <SectionHeader
        eyebrow="Inspektionen"
        heading-id="inspektionen-heading"
        lead="Vom Dachstuhl bis zum Kanal: Beim Check schau ich genau dort hin, wo teure Überraschungen warten."
      >
        So schütze ich dich vor <em class="text-burgundy italic">versteckten Kosten.</em>
      </SectionHeader>

      <ul
        class="scrollbar-thin -mx-5 mt-8 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pt-2 pb-4 md:mx-0 md:mt-12 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:p-0 lg:grid-cols-5"
      >
        <li
          v-for="(item, index) in inspections"
          :key="item.src"
          class="w-[72vw] max-w-[280px] shrink-0 snap-start md:w-auto md:max-w-[300px]"
        >
          <button
            ref="tiles"
            type="button"
            class="relative block aspect-square w-full cursor-zoom-in rounded-xs bg-paper transition-[transform,box-shadow] duration-200 ease-out-soft hover:z-(--z-raised) hover:-translate-y-1 hover:shadow-lift focus-visible:z-(--z-raised) focus-visible:-translate-y-1 focus-visible:shadow-lift active:scale-[0.98] active:translate-y-0"
            :aria-label="`Foto vergrößern: ${item.alt}`"
            @click="openAt(index)"
          >
            <ResponsiveImage
              :src="item.src"
              :width="item.width"
              :height="item.height"
              :alt="item.alt"
              img-class="size-full rounded-xs object-contain"
            />
          </button>
        </li>
      </ul>
      <p class="mt-2 text-meta text-ink-muted md:hidden">
        {{ inspections.length }} Inspektionen – zum Weiterblättern wischen
      </p>

      <div class="mt-8 -ml-3 md:mt-10">
        <BaseButton variant="ghost" :href="contact.priceListHref" :icon="FileText" new-tab>
          Preise &amp; Leistungen (PDF)
        </BaseButton>
      </div>
    </div>

    <InspectionLightbox v-model:index="activeIndex" :items="inspections" @closed="restoreFocus" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ReferenceList from '@/components/references/ReferenceList.vue'
import ContactCta from '@/components/shared/ContactCta.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { useSeo } from '@/composables/useSeo'
import { useStickyBarTrigger } from '@/composables/useStickyBar'
import { references } from '@/data/references'

useSeo({
  title: `Referenzen – ${references.length} begleitete Käufe | Der IMMO-FLÜSTERER`,
  description:
    'Robert Kratky, Claudia Reiterer, Martina Rupp, Mitglieder der Wiener Philharmoniker und Symphoniker: Wer sich beim Wohnungs- und Hauskauf vom IMMO-FLÜSTERER begleiten ließ.',
  path: '/referenzen',
})

const intro = ref<HTMLElement | null>(null)
useStickyBarTrigger(intro)
</script>

<template>
  <section class="bg-paper pt-10 pb-section md:pt-16 lg:pt-20" aria-labelledby="referenzen-heading">
    <div class="container-page">
      <div ref="intro">
        <SectionHeader
          eyebrow="Referenzen"
          heading-id="referenzen-heading"
          level="h1"
          lead="Moderatorinnen, Musiker, Ärztinnen, Unternehmer: eine Auswahl der Menschen, die ich beim Kauf von Wohnungen, Häusern und Zinshäusern begleitet habe."
        >
          Wer mir beim Kauf <em class="text-burgundy italic">vertraut</em> hat.
        </SectionHeader>
      </div>

      <div class="mt-10 md:mt-12">
        <ReferenceList />
      </div>
    </div>
  </section>
  <ContactCta />
</template>

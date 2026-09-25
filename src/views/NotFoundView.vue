<script setup lang="ts">
import { ref } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { useSeo } from '@/composables/useSeo'
import { useStickyBarTrigger } from '@/composables/useStickyBar'

useSeo({
  title: 'Seite nicht gefunden | Der IMMO-FLÜSTERER',
  description: 'Diese Seite gibt es nicht. Zurück zur Startseite vom IMMO-FLÜSTERER.',
  path: '/404',
  noindex: true,
})

const intro = ref<HTMLElement | null>(null)
useStickyBarTrigger(intro)
</script>

<template>
  <section class="bg-paper pt-10 pb-section md:pt-16 lg:pt-20" aria-labelledby="notfound-heading">
    <div ref="intro" class="container-page">
      <SectionHeader
        eyebrow="Fehler 404"
        heading-id="notfound-heading"
        level="h1"
        lead="Die Adresse gibt es nicht, oder sie ist umgezogen. Da hilft auch kein Ankaufs-Check."
      >
        Hier ist <em class="text-burgundy italic">nix</em> zu holen.
      </SectionHeader>
      <div class="mt-10">
        <BaseButton :to="{ name: 'home' }" :icon="ArrowLeft" variant="secondary">Zur Startseite</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import YouTubeLite from './YouTubeLite.vue'
import { contact } from '@/data/contact'
</script>

<template>
  <section id="youtube" class="bg-paper py-section" aria-labelledby="youtube-heading">
    <div class="container-page">
      <SectionHeader
        eyebrow="YouTube"
        heading-id="youtube-heading"
        lead="Auf meinem YouTube-Kanal findest du die besten Tipps zum Immo-Kauf. Schau rein."
      >
        Wissen, worauf es <em class="text-burgundy italic">ankommt.</em>
      </SectionHeader>

      <div class="mt-10 md:mt-12">
        <YouTubeLite :video-id="contact.youtubeVideoId" title="YouTube-Video von Der IMMO-FLÜSTERER" />
      </div>

      <div class="mt-8">
        <BaseButton :href="contact.youtubeChannelHref" variant="secondary" brand="youtube" new-tab>
          Zum YouTube-Kanal
        </BaseButton>
      </div>
    </div>
  </section>
</template>

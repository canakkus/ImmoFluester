<script setup lang="ts">
import { ref } from 'vue'
import { Check, Mail, Phone } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { useStickyBarHideZone } from '@/composables/useStickyBar'
import { contact, whatsappHref } from '@/data/contact'

const section = ref<HTMLElement | null>(null)
useStickyBarHideZone(section)
</script>

<template>
  <section
    id="kontakt"
    ref="section"
    class="on-night bg-night py-section"
    aria-labelledby="kontakt-heading"
  >
    <div class="container-page">
      <SectionHeader
        eyebrow="Kontakt"
        heading-id="kontakt-heading"
        lead="Ruf gleich an oder schick mir deine Fragen per WhatsApp, Signal oder E-Mail."
        on-night
        centered
      >
        Lass andere die Fehler machen.
      </SectionHeader>

      <div class="mx-auto mt-10 grid max-w-[640px] gap-3 md:mt-12 md:grid-cols-2">
        <BaseButton :href="contact.phoneHref" :icon="Phone" size="lg" full-width>Anrufen</BaseButton>
        <BaseButton :href="whatsappHref()" brand="whatsapp" variant="whatsapp" size="lg" full-width new-tab>
          WhatsApp
        </BaseButton>
        <BaseButton
          :href="contact.signalHref"
          brand="signal"
          variant="secondary-on-night"
          size="lg"
          full-width
          new-tab
        >
          Signal
        </BaseButton>
        <BaseButton :href="contact.emailHref" :icon="Mail" variant="secondary-on-night" size="lg" full-width>
          E-Mail
        </BaseButton>
      </div>

      <p class="mt-8 flex items-center justify-center gap-2 text-meta text-night-muted">
        <Check :size="20" :stroke-width="1.75" class="text-brick-light" aria-hidden="true" />
        Unverbindlich &amp; kostenfrei
      </p>
    </div>
  </section>
</template>

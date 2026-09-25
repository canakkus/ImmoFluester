<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { whatsappHref, whatsappMessages } from '@/data/contact'
import { processSteps } from '@/data/process'
</script>

<template>
  <section id="ablauf" class="bg-paper py-section" aria-labelledby="ablauf-heading">
    <div class="container-page">
      <SectionHeader
        eyebrow="Ablauf"
        heading-id="ablauf-heading"
        lead="Von der ersten Frage bis zur Übergabe: So arbeite ich für dich."
      >
        In fünf Schritten zum <em class="text-burgundy italic">sicheren</em> Kauf.
      </SectionHeader>

      <!-- Zeitstrahl: < lg vertikal (Linie links), ab lg horizontal (Linie oben) -->
      <div class="relative mt-10 md:mt-12">
        <div
          class="absolute top-4 bottom-4 left-[5.5px] w-px bg-line lg:top-[5.5px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto"
          aria-hidden="true"
        />
        <ol class="grid gap-10 lg:grid-cols-5 lg:gap-8">
          <li v-for="step in processSteps" :key="step.number" class="relative pl-10 lg:pt-10 lg:pl-0">
            <span class="absolute top-3 left-0 size-3 rounded-full bg-burgundy lg:top-0" aria-hidden="true" />
            <p class="numeric font-serif text-stat text-burgundy" aria-hidden="true">{{ step.number }}</p>
            <h3 class="mt-3 text-h3 text-ink">
              <span class="sr-only">Schritt {{ step.number }}: </span>{{ step.title }}
            </h3>
            <p class="mt-3 max-w-prose-body text-body text-ink-muted">{{ step.text }}</p>

            <div v-if="step.action === 'whatsapp'" class="mt-5">
              <BaseButton :href="whatsappHref()" brand="whatsapp" variant="whatsapp" new-tab>WhatsApp</BaseButton>
            </div>
            <div v-else-if="step.action === 'remote-check'" class="mt-4 -ml-3">
              <BaseButton :href="whatsappHref(whatsappMessages.remoteCheck)" variant="ghost" new-tab>
                Dokumente per WhatsApp schicken
              </BaseButton>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

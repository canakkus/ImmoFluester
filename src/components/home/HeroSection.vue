<script setup lang="ts">
import { ref } from 'vue'
import { HardHat, Phone } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'
import { useStickyBarTrigger } from '@/composables/useStickyBar'
import { contact, whatsappHref } from '@/data/contact'

const hero = ref<HTMLElement | null>(null)
useStickyBarTrigger(hero)
</script>

<template>
  <section ref="hero" class="bg-paper pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28" aria-labelledby="hero-heading">
    <div class="container-page grid grid-cols-1 gap-y-12 md:grid-cols-8 md:gap-x-6 lg:grid-cols-12 lg:gap-x-8">
      <div class="md:col-span-5 lg:col-span-7 lg:self-center">
        <p class="flex items-center gap-3 text-eyebrow text-burgundy uppercase">
          <span class="h-0.5 w-6 shrink-0 bg-burgundy" aria-hidden="true" />
          Ankaufsberatung in Wien
        </p>
        <h1 id="hero-heading" tabindex="-1" class="mt-4 max-w-[18ch] text-display text-ink">
          Beschiss oder <em class="text-burgundy italic">Schnäppchen?</em>
        </h1>
        <p class="mt-6 max-w-lead text-lead text-ink-muted">
          Geh auf Nummer sicher beim Immo-Kauf. Mach einen Ankaufs-Check, bevor du unterschreibst.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <BaseButton :href="contact.phoneHref" :icon="Phone" size="lg" stack-on-mobile>Anrufen</BaseButton>
          <BaseButton :href="whatsappHref()" brand="whatsapp" variant="whatsapp" size="lg" stack-on-mobile new-tab>
            Per WhatsApp fragen
          </BaseButton>
        </div>

        <ul class="mt-10 divide-y divide-line hyphens-none md:flex md:divide-x md:divide-y-0" aria-label="Erfahrung in Zahlen">
          <li class="flex flex-col gap-2 py-4 md:py-0 md:pr-6">
            <span class="numeric font-serif text-stat text-ink">35</span>
            <span class="text-meta text-ink-muted">Jahre Erfahrung</span>
          </li>
          <li class="flex flex-col gap-2 py-4 md:px-6 md:py-0">
            <span class="numeric font-serif text-stat text-ink">2.500+</span>
            <span class="text-meta text-ink-muted">Ankaufsberatungen</span>
          </li>
          <li class="flex flex-col gap-2 py-4 md:py-0 md:pl-6">
            <span class="flex h-(--text-stat) items-center text-tanne">
              <HardHat :size="36" :stroke-width="1.75" aria-hidden="true" />
            </span>
            <span class="text-meta text-ink-muted">Bausachverständiger</span>
          </li>
        </ul>
      </div>

      <figure class="md:col-span-3 md:col-start-6 md:self-start lg:col-span-4 lg:col-start-9 lg:self-center xl:col-span-5 xl:col-start-8">
        <div class="w-full max-w-[400px] xl:ml-auto">
          <div class="relative isolate">
            <div
              class="absolute inset-0 -z-10 hidden -translate-x-6 translate-y-6 rounded-xs bg-sand md:block"
              aria-hidden="true"
            />
            <ResponsiveImage
              src="/images/kirchner"
              :width="400"
              :height="508"
              alt="Johannes Kirchner, Ankaufsberater, vor einem Wiener Altbau"
              eager
              priority
              img-class="block w-full rounded-xs"
            />
          </div>
          <figcaption class="mt-3 text-meta text-ink-muted md:mt-9">{{ contact.person }}</figcaption>
        </div>
      </figure>
    </div>
  </section>
</template>

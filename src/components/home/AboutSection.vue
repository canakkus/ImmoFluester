<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { aboutCredentials, aboutIntro, aboutQuote, aboutStory } from '@/data/about'
import { contact } from '@/data/contact'
</script>

<template>
  <section id="ueber-mich" class="bg-sand py-section" aria-labelledby="ueber-mich-heading">
    <div class="container-page grid gap-12 lg:grid-cols-12 lg:gap-8">
      <!-- Portrait: Deko-Fläche (paper, da Sektion sand) 16px nach rechts unten versetzt, hinter dem Foto -->
      <div class="lg:col-span-5">
        <figure class="relative isolate w-full max-w-[400px]">
          <div
            class="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-xs bg-paper"
            aria-hidden="true"
          />
          <ResponsiveImage
            src="/images/kirchner-portrait"
            :width="400"
            :height="551"
            alt="Johannes Kirchner vor einem Wiener Altbau mit Eckturm"
            img-class="block w-full rounded-xs"
          />
        </figure>
      </div>

      <div class="lg:col-span-6 lg:col-start-7">
        <SectionHeader eyebrow="Über mich" heading-id="ueber-mich-heading">
          Meine Erfahrung ist dein <em class="text-burgundy italic">garantierter Nutzen.</em>
        </SectionHeader>

        <p class="mt-6 max-w-prose-body text-body text-ink">
          <strong class="font-semibold">{{ contact.person }}:</strong> {{ aboutIntro }}
        </p>

        <blockquote class="mt-8 max-w-prose-body font-serif text-quote text-ink italic">
          <p>„{{ aboutQuote }}“</p>
        </blockquote>

        <ul class="mt-8 space-y-3">
          <li v-for="item in aboutCredentials" :key="item" class="flex gap-3 text-body text-ink">
            <Check :size="20" :stroke-width="1.75" class="mt-1 shrink-0 text-tanne" aria-hidden="true" />
            {{ item }}
          </li>
        </ul>

        <figure class="mt-10">
          <blockquote class="max-w-[32ch] border-l-2 border-burgundy pl-6 font-serif text-quote text-ink italic">
            <p>„{{ aboutStory.text }}“</p>
          </blockquote>
          <figcaption class="mt-3 pl-6 text-meta text-ink-muted">{{ aboutStory.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

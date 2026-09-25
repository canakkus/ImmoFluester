<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import { featuredReferences, references } from '@/data/references'
</script>

<template>
  <section class="bg-paper" aria-labelledby="vertrauen-heading">
    <div class="container-page">
      <div class="border-y border-line py-10 md:py-12">
        <h2 id="vertrauen-heading" class="font-sans text-eyebrow text-ink-muted uppercase">Vertrauen mir u. a.</h2>
        <ul class="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-5 lg:gap-x-8">
          <li v-for="person in featuredReferences" :key="person.name" class="flex flex-col gap-1">
            <span class="font-serif text-[1.25rem] leading-snug text-ink italic">{{ person.name }}</span>
            <span class="text-meta text-ink-muted">{{ person.featured.shortRole }}</span>
          </li>
        </ul>
        <div class="mt-6 -ml-3">
          <BaseButton variant="ghost" :to="{ name: 'referenzen' }">Alle {{ references.length }} Referenzen</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

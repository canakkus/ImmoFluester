<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { documentCheckPoints, shortBenefits } from '@/data/benefits'
</script>

<template>
  <section class="bg-sand py-section" aria-labelledby="nutzen-heading">
    <div class="container-page">
      <div class="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-7">
          <SectionHeader
            eyebrow="Ankaufs-Check"
            heading-id="nutzen-heading"
            lead="Hol dir professionelle und leistbare Unterstützung beim Kauf deines Eigenheims – bevor du unterschreibst."
          >
            Spar dir Pannen, Nerven <em class="text-burgundy italic">&amp; Geld.</em>
          </SectionHeader>
        </div>

        <div class="lg:col-span-5 lg:self-end">
          <h3 class="font-sans text-h4 text-ink">Makler-Dokumente-Check: Spar dir dutzende Stunden Arbeit</h3>
          <ul class="mt-4 space-y-3">
            <li v-for="point in documentCheckPoints" :key="point" class="flex gap-3 text-body text-ink">
              <Check :size="20" :stroke-width="1.75" class="mt-1 shrink-0 text-tanne" aria-hidden="true" />
              {{ point }}
            </li>
          </ul>
        </div>
      </div>

      <ul class="mt-10 grid gap-8 md:mt-12 lg:grid-cols-5 lg:gap-8">
        <li v-for="benefit in shortBenefits" :key="benefit.title" class="border-t border-line pt-6">
          <span class="flex size-12 items-center justify-center rounded-sm bg-paper text-tanne" aria-hidden="true">
            <component :is="benefit.icon" :size="24" :stroke-width="1.75" />
          </span>
          <p class="mt-4 text-h4 text-ink">{{ benefit.title }}</p>
        </li>
      </ul>

      <p class="mt-12 max-w-[32ch] font-serif text-h3 text-ink md:mt-16">
        Vermeide garantiert einen Fehlkauf und kauf dein Eigenheim mit einem sicheren Gefühl.
      </p>
    </div>
  </section>
</template>

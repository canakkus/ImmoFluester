<script setup lang="ts">
import { computed } from 'vue'
import { Phone } from 'lucide-vue-next'
import AdvantageCard from './AdvantageCard.vue'
import CounterCheckBlock from './CounterCheckBlock.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { COUNTER_CHECK_INDEX, advantages } from '@/data/advantages'
import { contact, whatsappHref } from '@/data/contact'

const counterCheckPosition = computed(() =>
  advantages.findIndex((advantage) => advantage.index === COUNTER_CHECK_INDEX),
)
const beforeCounterCheck = computed(() => advantages.slice(0, counterCheckPosition.value))
const counterCheckAdvantage = computed(() => advantages[counterCheckPosition.value])
const afterCounterCheck = computed(() => advantages.slice(counterCheckPosition.value + 1))
</script>

<template>
  <section id="vorteile" class="bg-paper py-section" aria-labelledby="vorteile-heading">
    <div class="container-page">
      <SectionHeader eyebrow="Deine Vorteile" heading-id="vorteile-heading">
        Acht Gründe, warum du nicht <em class="text-burgundy italic">allein</em> kaufen solltest.
      </SectionHeader>

      <div class="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 lg:gap-8">
        <AdvantageCard v-for="advantage in beforeCounterCheck" :key="advantage.index" :advantage="advantage" />

        <CounterCheckBlock v-if="counterCheckAdvantage" :advantage="counterCheckAdvantage" />

        <AdvantageCard v-for="advantage in afterCounterCheck" :key="advantage.index" :advantage="advantage" />

        <aside class="flex flex-col justify-center py-4 md:px-4" aria-labelledby="vorteile-fragen">
          <p id="vorteile-fragen" class="font-serif text-h3 text-ink">Noch Fragen zu deiner Wohnung?</p>
          <div class="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <BaseButton :href="contact.phoneHref" :icon="Phone">Anrufen</BaseButton>
            <BaseButton variant="ghost" :href="whatsappHref()" new-tab>Per WhatsApp fragen</BaseButton>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

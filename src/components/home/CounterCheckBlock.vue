<script setup lang="ts">
import { ArrowDown } from 'lucide-vue-next'
import { counterCheck, type Advantage } from '@/data/advantages'

defineProps<{ advantage: Advantage }>()
</script>

<template>
  <article class="rounded-lg bg-burgundy-tint p-8 md:col-span-2 md:p-12">
    <p class="numeric font-serif text-[1.125rem] font-semibold text-burgundy" aria-hidden="true">
      {{ advantage.index }}
    </p>
    <h3 class="mt-4 text-h3 text-ink">{{ advantage.title }}</h3>
    <p v-for="paragraph in advantage.paragraphs" :key="paragraph" class="mt-3 max-w-prose-body text-body text-ink">
      {{ paragraph }}
    </p>

    <ul class="mt-8 grid gap-8 md:mt-10 md:grid-cols-3 md:gap-6 lg:gap-8">
      <li v-for="(item, i) in counterCheck" :key="item.object" class="flex flex-col items-start gap-2">
        <span class="text-h4 text-ink-muted">{{ item.object }}</span>
        <ArrowDown :size="24" :stroke-width="1.75" class="text-burgundy" aria-hidden="true" />
        <span class="sr-only">braucht einen</span>
        <span
          class="font-serif text-h3"
          :class="i === counterCheck.length - 1 ? 'text-burgundy' : 'text-ink'"
        >
          {{ item.result }}
        </span>
      </li>
    </ul>
  </article>
</template>

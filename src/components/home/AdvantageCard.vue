<script setup lang="ts">
import type { Advantage } from '@/data/advantages'

defineProps<{ advantage: Advantage }>()
</script>

<template>
  <article class="rounded-lg border border-line bg-white p-6 md:p-8">
    <p class="numeric font-serif text-[1.125rem] font-semibold text-burgundy" aria-hidden="true">
      {{ advantage.index }}
    </p>
    <h3 class="mt-4 text-h3 text-ink">{{ advantage.title }}</h3>
    <div class="mt-3 max-w-prose-body space-y-[1em] text-body text-ink">
      <p v-for="paragraph in advantage.paragraphs" :key="paragraph">{{ paragraph }}</p>
      <ul v-if="advantage.list" class="list-disc space-y-1 pl-5">
        <li v-for="entry in advantage.list" :key="entry">{{ entry }}</li>
      </ul>
      <p v-if="advantage.outro">{{ advantage.outro }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    /** id der Überschrift – für aria-labelledby der Sektion. */
    headingId: string
    lead?: string
    level?: 'h1' | 'h2'
    onNight?: boolean
    centered?: boolean
  }>(),
  { level: 'h2', onNight: false, centered: false },
)
</script>

<template>
  <header :class="centered ? 'flex flex-col items-center text-center' : ''">
    <p
      class="flex items-center gap-3 text-eyebrow uppercase"
      :class="onNight ? 'text-brick-light' : 'text-burgundy'"
    >
      <span class="h-0.5 w-6 shrink-0" :class="onNight ? 'bg-brick-light' : 'bg-burgundy'" aria-hidden="true" />
      {{ eyebrow }}
    </p>
    <component
      :is="level"
      :id="headingId"
      :tabindex="level === 'h1' ? -1 : undefined"
      class="mt-3 max-w-[22ch] text-h2"
      :class="onNight ? 'text-paper' : 'text-ink'"
    >
      <slot />
    </component>
    <p
      v-if="lead"
      class="mt-4 max-w-lead text-lead"
      :class="onNight ? 'text-night-muted' : 'text-ink-muted'"
    >
      {{ lead }}
    </p>
  </header>
</template>

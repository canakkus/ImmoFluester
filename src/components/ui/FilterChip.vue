<script setup lang="ts">
defineProps<{ label: string; count: number; pressed: boolean }>()
defineEmits<{ click: [] }>()
</script>

<template>
  <button
    type="button"
    class="inline-flex min-h-11 items-center gap-1.5 rounded-full border px-4 text-ui font-medium transition-[background-color,border-color,color,transform] duration-150 ease-out-soft active:scale-[0.96]"
    :class="pressed ? 'border-ink bg-ink text-paper' : 'border-line-strong text-ink hover:bg-sand'"
    :aria-pressed="pressed"
    @click="$emit('click')"
  >
    {{ label }}
    <span class="numeric" :class="pressed ? 'text-night-muted' : 'text-ink-muted'">{{ count }}</span>
  </button>
</template>

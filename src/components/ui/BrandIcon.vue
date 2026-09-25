<script setup lang="ts">
import { computed } from 'vue'
import signalSvg from '@/assets/icons/brand/signal.svg?raw'
import whatsappSvg from '@/assets/icons/brand/whatsapp.svg?raw'
import youtubeSvg from '@/assets/icons/brand/youtube.svg?raw'

export type BrandName = 'whatsapp' | 'signal' | 'youtube'

const props = withDefaults(defineProps<{ name: BrandName; size?: 18 | 20 | 24 }>(), { size: 20 })

// Lokale, statische SVG-Dateien (Simple Icons) – kein Fremdinhalt, daher ist v-html unbedenklich.
const svgByName: Record<BrandName, string> = {
  whatsapp: whatsappSvg,
  signal: signalSvg,
  youtube: youtubeSvg,
}

const sizeClass: Record<18 | 20 | 24, string> = {
  18: 'size-[18px]',
  20: 'size-5',
  24: 'size-6',
}

const svg = computed(() => svgByName[props.name])
</script>

<template>
  <span
    class="inline-flex shrink-0 [&>svg]:size-full"
    :class="sizeClass[size]"
    aria-hidden="true"
    v-html="svg"
  />
</template>

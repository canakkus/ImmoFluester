<script setup lang="ts">
/**
 * <picture> mit WebP + JPG/PNG-Fallback. Beide Varianten haben identische Pixelmaße.
 * width/height sind immer die natürlichen Maße (kein CLS, kein Hochskalieren).
 */
withDefaults(
  defineProps<{
    /** Pfad ohne Endung, z. B. "/images/kirchner". */
    src: string
    fallbackExt?: 'jpg' | 'png'
    width: number
    height: number
    alt: string
    eager?: boolean
    /** fetchpriority="high" – nur für das LCP-Bild (Hero-Portrait). */
    priority?: boolean
    imgClass?: string
  }>(),
  { fallbackExt: 'jpg', eager: false, priority: false, imgClass: '' },
)
</script>

<template>
  <picture class="contents">
    <source :srcset="`${src}.webp`" type="image/webp" />
    <img
      :src="`${src}.${fallbackExt}`"
      :width="width"
      :height="height"
      :alt="alt"
      :loading="eager ? 'eager' : 'lazy'"
      :decoding="eager ? 'auto' : 'async'"
      :fetchpriority="priority ? 'high' : undefined"
      :class="imgClass"
    />
  </picture>
</template>

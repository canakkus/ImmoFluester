<script setup lang="ts">
import { computed, type Component } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import BrandIcon, { type BrandName } from './BrandIcon.vue'
import {
  buttonSizeClasses,
  buttonVariantClasses,
  type ButtonSize,
  type ButtonVariant,
} from './buttonStyles'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: ButtonSize
    /** Interne Route (RouterLink). */
    to?: RouteLocationRaw
    /** Externer Link, tel:, mailto: oder Datei. */
    href?: string
    /** Öffnet in neuem Tab (externe Seiten, PDF). */
    newTab?: boolean
    /** Lucide-Icon links vom Label. */
    icon?: Component
    /** Marken-Icon (Simple Icons) links vom Label. */
    brand?: BrandName
    /** Unter 640px volle Breite (Hero-/CTA-Buttons). */
    stackOnMobile?: boolean
    /** Immer volle Breite der Rasterzelle. */
    fullWidth?: boolean
    type?: 'button' | 'submit'
  }>(),
  { variant: 'primary', size: 'md', type: 'button' },
)

const isGhost = computed(() => props.variant === 'ghost')

const tag = computed(() => (props.to ? RouterLink : props.href ? 'a' : 'button'))

const tagAttrs = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) {
    return props.newTab
      ? { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
      : { href: props.href }
  }
  return { type: props.type }
})

const classes = computed(() => [
  'group inline-flex items-center justify-center gap-2.5 text-ui transition-button active:scale-[0.98] active:translate-y-px',
  buttonVariantClasses[props.variant],
  isGhost.value ? 'min-h-11 px-3 text-left' : ['rounded-md', buttonSizeClasses[props.size]],
  props.fullWidth && 'w-full',
  props.stackOnMobile && 'w-full sm:w-auto',
])
</script>

<template>
  <component :is="tag" v-bind="tagAttrs" :class="classes">
    <component :is="icon" v-if="icon" :size="20" :stroke-width="1.75" aria-hidden="true" class="shrink-0" />
    <BrandIcon v-else-if="brand" :name="brand" />
    <span><slot /></span>
    <span v-if="href && newTab" class="sr-only">(öffnet in neuem Tab)</span>
    <ArrowRight
      v-if="isGhost"
      :size="18"
      :stroke-width="1.75"
      aria-hidden="true"
      class="shrink-0 transition-transform duration-200 ease-out-soft group-hover:translate-x-0.5"
    />
  </component>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'
import { lockScroll, unlockScroll } from '@/composables/useScrollLock'
import { prefersReducedMotion } from '@/composables/useReducedMotion'
import type { Inspection } from '@/data/inspections'

const props = defineProps<{ items: Inspection[] }>()
/** Index des angezeigten Fotos; `null` = geschlossen. */
const index = defineModel<number | null>('index', { required: true })
const emit = defineEmits<{ closed: [] }>()

const CLOSE_DURATION_MS = 200
const SWIPE_THRESHOLD_PX = 50

const dialog = ref<HTMLDialogElement | null>(null)
const shown = ref(false)
let closeTimer: number | undefined
let pointerStartX: number | null = null

const current = computed(() => (index.value === null ? null : props.items[index.value] ?? null))
const position = computed(() => (index.value ?? 0) + 1)

watch(index, (value, previous) => {
  if (value !== null && previous === null) open()
})

function open(): void {
  const el = dialog.value
  if (!el || el.open) return
  window.clearTimeout(closeTimer)
  el.showModal()
  lockScroll()
  // Nächster Frame: Startzustand ist gerendert, dann Übergang auf sichtbar.
  requestAnimationFrame(() => {
    shown.value = true
  })
}

function requestClose(): void {
  const el = dialog.value
  if (!el?.open || !shown.value) return
  shown.value = false
  closeTimer = window.setTimeout(() => el.close(), prefersReducedMotion() ? 0 : CLOSE_DURATION_MS)
}

/** Natives close-Event: nach Animation oder wenn der Browser den Dialog selbst schließt. */
function onDialogClose(): void {
  shown.value = false
  unlockScroll()
  index.value = null
  emit('closed')
}

function onCancel(event: Event): void {
  // Esc: eigene Schließ-Animation statt sofortigem Schließen.
  event.preventDefault()
  requestClose()
}

function step(delta: number): void {
  if (index.value === null) return
  const count = props.items.length
  index.value = (index.value + delta + count) % count
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    step(1)
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    step(-1)
  }
}

function onPointerDown(event: PointerEvent): void {
  pointerStartX = event.clientX
}

function onPointerUp(event: PointerEvent): void {
  if (pointerStartX === null) return
  const deltaX = event.clientX - pointerStartX
  pointerStartX = null
  if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return
  step(deltaX < 0 ? 1 : -1)
}

onBeforeUnmount(() => {
  window.clearTimeout(closeTimer)
  if (dialog.value?.open) {
    dialog.value.close()
  }
})

const controlClass =
  'inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-paper/12 text-paper transition-colors duration-150 hover:bg-paper/24'
</script>

<template>
  <dialog
    ref="dialog"
    class="lightbox fixed inset-0 z-(--z-lightbox) m-0 size-full max-h-none max-w-none overflow-hidden border-0 bg-transparent p-0 text-paper"
    aria-label="Inspektionsfotos"
    @close="onDialogClose"
    @cancel="onCancel"
    @keydown="onKeydown"
  >
    <div
      class="flex h-full flex-col items-center justify-center gap-5 px-4 py-16"
      @click.self="requestClose"
    >
      <button type="button" :class="controlClass" class="absolute top-4 right-4" autofocus @click="requestClose">
        <X :size="24" :stroke-width="1.75" aria-hidden="true" />
        <span class="sr-only">Schließen</span>
      </button>

      <div class="flex items-center gap-6" @click.self="requestClose">
        <button type="button" :class="controlClass" class="hidden md:inline-flex" @click="step(-1)">
          <ChevronLeft :size="24" :stroke-width="1.75" aria-hidden="true" />
          <span class="sr-only">Vorheriges Foto</span>
        </button>

        <figure
          v-if="current"
          class="flex max-w-[min(92vw,600px)] touch-pan-y flex-col transition-[opacity,transform] md:max-w-[min(92vw_-_9rem,600px)]"
          :class="
            shown
              ? 'scale-100 opacity-100 duration-300 ease-out-soft'
              : 'scale-[0.98] opacity-0 duration-200 ease-in-soft'
          "
          @pointerdown="onPointerDown"
          @pointerup="onPointerUp"
          @pointercancel="pointerStartX = null"
        >
          <ResponsiveImage
            :key="current.src"
            :src="current.src"
            :width="current.width"
            :height="current.height"
            :alt="current.alt"
            eager
            img-class="block h-auto max-h-[78dvh] w-auto max-w-full rounded-t-xs object-contain select-none"
          />
          <figcaption class="flex w-0 min-w-full items-start justify-between gap-4 rounded-b-xs bg-night px-4 py-3 text-meta text-night-muted">
            <span aria-hidden="true">{{ current.alt }}</span>
            <span class="numeric shrink-0">
              <span aria-hidden="true">{{ position }} / {{ items.length }}</span>
              <span class="sr-only">Foto {{ position }} von {{ items.length }}</span>
            </span>
          </figcaption>
        </figure>

        <button type="button" :class="controlClass" class="hidden md:inline-flex" @click="step(1)">
          <ChevronRight :size="24" :stroke-width="1.75" aria-hidden="true" />
          <span class="sr-only">Nächstes Foto</span>
        </button>
      </div>

      <div class="flex gap-4 md:hidden">
        <button type="button" :class="controlClass" @click="step(-1)">
          <ChevronLeft :size="24" :stroke-width="1.75" aria-hidden="true" />
          <span class="sr-only">Vorheriges Foto</span>
        </button>
        <button type="button" :class="controlClass" @click="step(1)">
          <ChevronRight :size="24" :stroke-width="1.75" aria-hidden="true" />
          <span class="sr-only">Nächstes Foto</span>
        </button>
      </div>

      <p class="sr-only" aria-live="polite">
        <template v-if="current">Foto {{ position }} von {{ items.length }}: {{ current.alt }}</template>
      </p>
    </div>
  </dialog>
</template>

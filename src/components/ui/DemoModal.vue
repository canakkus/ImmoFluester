<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { ExternalLink, Info, ShieldCheck, X } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import { lockScroll, unlockScroll } from '@/composables/useScrollLock'
import { prefersReducedMotion } from '@/composables/useReducedMotion'
import { contact } from '@/data/contact'

const open = defineModel<boolean>('open', { default: false })

const dialog = ref<HTMLDialogElement | null>(null)
const shown = ref(false)
const closeButton = ref<HTMLButtonElement | null>(null)
let closeTimer: number | undefined

watch(open, (isOpen) => {
  if (isOpen) {
    showDialog()
  } else {
    requestClose()
  }
})

function showDialog(): void {
  const el = dialog.value
  if (!el || el.open) return
  window.clearTimeout(closeTimer)
  el.showModal()
  lockScroll()
  requestAnimationFrame(() => {
    shown.value = true
    nextTick(() => closeButton.value?.focus())
  })
}

function requestClose(): void {
  const el = dialog.value
  if (!el?.open || !shown.value) return
  shown.value = false
  closeTimer = window.setTimeout(
    () => {
      el.close()
    },
    prefersReducedMotion() ? 0 : 200,
  )
}

function onDialogClose(): void {
  shown.value = false
  unlockScroll()
  open.value = false
}

function onCancel(event: Event): void {
  event.preventDefault()
  requestClose()
}

onBeforeUnmount(() => {
  window.clearTimeout(closeTimer)
  if (dialog.value?.open) {
    dialog.value.close()
  }
})
</script>

<template>
  <dialog
    ref="dialog"
    class="demo-dialog fixed inset-0 z-(--z-lightbox) m-0 size-full max-h-none max-w-none overflow-hidden border-0 bg-transparent p-0 text-ink"
    aria-labelledby="demo-modal-title"
    aria-describedby="demo-modal-desc"
    @close="onDialogClose"
    @cancel="onCancel"
  >
    <div
      class="flex min-h-full items-center justify-center p-4 sm:p-6"
      @click.self="requestClose"
    >
      <div
        class="relative w-full max-w-lg rounded-xl border border-line bg-paper p-6 shadow-card transition-[opacity,transform] sm:p-8"
        :class="
          shown
            ? 'scale-100 opacity-100 duration-200 ease-out-soft'
            : 'scale-[0.97] opacity-0 duration-150 ease-in-soft'
        "
      >
        <button
          ref="closeButton"
          type="button"
          class="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-full text-ink-muted transition-colors duration-150 hover:bg-sand hover:text-ink focus-visible:outline-2 focus-visible:outline-burgundy"
          aria-label="Dialog schließen"
          @click="requestClose"
        >
          <X :size="20" :stroke-width="1.75" aria-hidden="true" />
        </button>

        <div class="flex items-center gap-3">
          <span class="flex size-10 shrink-0 items-center justify-center rounded-full bg-burgundy-tint text-burgundy">
            <Info :size="20" :stroke-width="1.75" aria-hidden="true" />
          </span>
          <span class="text-eyebrow text-burgundy uppercase">Transparenz-Hinweis</span>
        </div>

        <h2 id="demo-modal-title" class="mt-4 font-serif text-h3 text-ink">
          Interaktiver Konzept-Entwurf
        </h2>

        <div id="demo-modal-desc" class="mt-4 space-y-3 text-body text-ink-muted">
          <p>
            Diese Website ist ein moderner Design- und Technologie-Entwurf für die Ankaufsberatung von
            <strong class="font-semibold text-ink">{{ contact.person }}</strong> ({{ contact.brand }}, Wien).
          </p>
          <p>
            Die dargestellten Praxisfälle, Gutachten und Referenzen basieren auf realen Daten. Sämtliche Kontaktwege (Telefon, WhatsApp, Signal, E-Mail) verbinden direkt mit dem offiziellen Büro von Johannes Kirchner.
          </p>
          <div class="rounded-lg border border-line bg-sand/60 p-3.5 text-meta text-ink">
            <div class="flex items-start gap-2.5">
              <ShieldCheck :size="18" :stroke-width="1.75" class="mt-0.5 shrink-0 text-tanne" aria-hidden="true" />
              <span>
                <strong>Rechtlicher Status:</strong> Unverbindliche Konzept-Präsentation. Die behördlichen Gewerbe- und Standesangaben sind über das offizielle Firmenverzeichnis der Wirtschaftskammer Österreich abrufbar.
              </span>
            </div>
          </div>
        </div>

        <div class="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
          <BaseButton
            variant="ghost"
            :href="contact.impressumHref"
            :icon="ExternalLink"
            new-tab
          >
            WKO-Impressum
          </BaseButton>
          <BaseButton variant="primary" @click="requestClose">
            Verstanden
          </BaseButton>
        </div>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.demo-dialog::backdrop {
  background: rgb(20 18 16 / 0.65);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
</style>

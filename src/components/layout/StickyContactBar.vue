<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue'
import { Mail, Phone } from 'lucide-vue-next'
import BrandIcon from '@/components/ui/BrandIcon.vue'
import { buttonVariantClasses } from '@/components/ui/buttonStyles'
import { stickyBarVisible } from '@/composables/useStickyBar'
import { contact, whatsappHref } from '@/data/contact'

// Solange die Leiste sichtbar ist, reserviert body unten Platz (CSS: body.has-stickybar, nur < lg).
watch(
  stickyBarVisible,
  (visible) => document.body.classList.toggle('has-stickybar', visible),
  { immediate: true },
)
onBeforeUnmount(() => document.body.classList.remove('has-stickybar'))

const itemClass =
  'flex h-13 flex-col items-center justify-center gap-1 rounded-md text-meta font-semibold transition-button active:translate-y-px'
</script>

<template>
  <div
    class="fixed inset-x-0 bottom-0 z-(--z-stickybar) bg-paper px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-bar transition-transform duration-300 lg:hidden"
    :class="stickyBarVisible ? 'translate-y-0 ease-out-soft' : 'translate-y-full ease-in-soft'"
    :inert="!stickyBarVisible"
    :aria-hidden="stickyBarVisible ? undefined : 'true'"
  >
    <nav aria-label="Schnellkontakt" class="grid grid-cols-3 gap-2">
      <a :href="contact.phoneHref" :class="[itemClass, buttonVariantClasses.primary]">
        <Phone :size="20" :stroke-width="1.75" aria-hidden="true" />
        Anrufen
      </a>
      <a
        :href="whatsappHref()"
        :class="[itemClass, buttonVariantClasses.whatsapp]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BrandIcon name="whatsapp" />
        WhatsApp
      </a>
      <a :href="contact.emailHref" :class="[itemClass, buttonVariantClasses.secondary]">
        <Mail :size="20" :stroke-width="1.75" aria-hidden="true" />
        E-Mail
      </a>
    </nav>
  </div>
</template>

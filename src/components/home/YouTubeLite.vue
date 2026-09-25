<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Play } from 'lucide-vue-next'

const props = defineProps<{ videoId: string; title: string }>()

const loaded = ref(false)
const iframe = ref<HTMLIFrameElement | null>(null)

/** Erst nach Klick wird Kontakt zu YouTube (nocookie-Domain) aufgenommen – vorher kein Thumbnail, kein Request. */
function load(): void {
  loaded.value = true
  nextTick(() => iframe.value?.focus())
}

const embedSrc = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(props.videoId)}?autoplay=1&rel=0`
</script>

<template>
  <div class="on-night relative aspect-video w-full max-w-[800px] overflow-hidden rounded-lg bg-night">
    <iframe
      v-if="loaded"
      ref="iframe"
      :src="embedSrc"
      :title="title"
      class="absolute inset-0 size-full border-0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    />
    <div v-else class="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
      <button
        type="button"
        class="group flex flex-col items-center gap-3 rounded-lg p-2"
        @click="load"
      >
        <span
          class="flex size-18 items-center justify-center rounded-full bg-burgundy text-white transition-colors duration-150 group-hover:bg-burgundy-dark"
          aria-hidden="true"
        >
          <Play :size="28" :stroke-width="1.75" class="translate-x-0.5" />
        </span>
        <span class="text-ui text-paper">Video laden<span class="sr-only">: {{ title }}</span></span>
      </button>
      <p class="max-w-[44ch] text-meta text-night-muted">
        Beim Laden werden Daten an YouTube übertragen. Mehr dazu im
        <RouterLink
          :to="{ name: 'datenschutz', hash: '#youtube-einbindung' }"
          class="text-brick-light underline underline-offset-4 transition-colors duration-150 hover:text-paper"
        >Datenschutz</RouterLink>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, Phone, X } from 'lucide-vue-next'
import BaseButton from '@/components/ui/BaseButton.vue'
import ResponsiveImage from '@/components/ui/ResponsiveImage.vue'
import NavLink from './NavLink.vue'
import { contact } from '@/data/contact'
import { mainNav } from '@/data/navigation'

const route = useRoute()

const scrolled = ref(false)
const menuOpen = ref(false)
const toggleButton = ref<HTMLButtonElement | null>(null)
const sheet = ref<HTMLElement | null>(null)

function onScroll(): void {
  scrolled.value = window.scrollY > 8
}

function openMenu(): void {
  menuOpen.value = true
  nextTick(() => sheet.value?.querySelector<HTMLElement>('a')?.focus())
}

function closeMenu(returnFocus = false): void {
  if (!menuOpen.value) return
  menuOpen.value = false
  if (returnFocus) toggleButton.value?.focus()
}

function toggleMenu(): void {
  if (menuOpen.value) closeMenu()
  else openMenu()
}

function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Escape' && menuOpen.value) closeMenu(true)
}

function onPointerDown(event: PointerEvent): void {
  if (!menuOpen.value) return
  const target = event.target as Node
  if (sheet.value?.contains(target) || toggleButton.value?.contains(target)) return
  closeMenu()
}

// Menü schließt sich bei jedem Seitenwechsel, und ab Desktop-Breite automatisch.
watch(() => route.fullPath, () => closeMenu())
const desktopQuery = window.matchMedia('(min-width: 64rem)')
function onBreakpointChange(event: MediaQueryListEvent): void {
  if (event.matches) closeMenu()
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('keydown', onKeydown)
  document.addEventListener('pointerdown', onPointerDown)
  desktopQuery.addEventListener('change', onBreakpointChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('keydown', onKeydown)
  document.removeEventListener('pointerdown', onPointerDown)
  desktopQuery.removeEventListener('change', onBreakpointChange)
})
</script>

<template>
  <header
    class="sticky top-0 z-(--z-header) bg-paper transition-shadow duration-150"
    :class="scrolled ? 'shadow-header' : ''"
  >
    <div class="container-page flex h-16 items-center justify-between gap-3 lg:h-20">
      <RouterLink
        to="/"
        class="flex min-w-0 items-center gap-2.5 min-[440px]:gap-3"
        :aria-label="`${contact.brand} – zur Startseite`"
      >
        <ResponsiveImage
          src="/images/logo-immo-fluesterer"
          fallback-ext="png"
          :width="300"
          :height="224"
          alt="Der IMMO-FLÜSTERER – Logo mit Engel"
          eager
          img-class="h-10 w-auto shrink-0 rounded-sm min-[375px]:h-11 lg:h-12"
        />
        <!-- Unter 440px reicht der Platz neben Logo + 2 Icon-Buttons nicht für die volle Wortmarke:
             dann 1rem (unter 375px 15px), Umbruch nur nach „Der“, Zeile 2 entfällt.
             Unter 360px steht nur das Logo-Siegel (enthält die Wortmarke). -->
        <span class="flex min-w-0 flex-col max-[359px]:hidden">
          <span
            class="font-serif text-[0.9375rem] min-[375px]:text-base leading-tight font-semibold text-ink min-[440px]:text-[1.125rem] lg:text-[1.25rem]"
          >
            Der <span class="whitespace-nowrap">IMMO-FLÜSTERER</span>
          </span>
          <span class="text-meta text-ink-muted max-[440px]:hidden">{{ contact.tagline }}</span>
        </span>
      </RouterLink>

      <!-- Desktop -->
      <nav aria-label="Hauptnavigation" class="hidden items-center gap-8 lg:flex">
        <ul class="flex items-center gap-7">
          <li v-for="item in mainNav" :key="item.label">
            <NavLink
              v-slot="{ active }"
              :item="item"
              class="inline-flex min-h-11 items-center text-ui font-medium text-ink transition-colors duration-150 hover:text-burgundy"
            >
              <span :class="active ? 'underline decoration-burgundy decoration-2 underline-offset-8' : ''">
                {{ item.label }}
              </span>
            </NavLink>
          </li>
        </ul>
        <BaseButton :href="contact.phoneHref" :icon="Phone">{{ contact.phoneDisplay }}</BaseButton>
      </nav>

      <!-- Mobil -->
      <div class="flex shrink-0 items-center gap-1 lg:hidden">
        <a
          :href="contact.phoneHref"
          class="inline-flex size-11 items-center justify-center rounded-md bg-burgundy text-white transition-colors duration-150 hover:bg-burgundy-dark"
          aria-label="Anrufen"
        >
          <Phone :size="20" :stroke-width="1.75" aria-hidden="true" />
        </a>
        <button
          ref="toggleButton"
          type="button"
          class="inline-flex size-11 items-center justify-center rounded-md text-ink transition-colors duration-150 hover:bg-sand"
          :aria-expanded="menuOpen"
          aria-controls="mobile-menu"
          :aria-label="menuOpen ? 'Menü schließen' : 'Menü öffnen'"
          @click="toggleMenu"
        >
          <X v-if="menuOpen" :size="24" :stroke-width="1.75" aria-hidden="true" />
          <Menu v-else :size="24" :stroke-width="1.75" aria-hidden="true" />
        </button>
      </div>
    </div>
  </header>

  <Transition
    enter-active-class="transition-[opacity,transform] duration-200 ease-out-soft"
    enter-from-class="opacity-0 -translate-y-2"
    leave-active-class="transition-[opacity,transform] duration-150 ease-in-soft"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-show="menuOpen"
      id="mobile-menu"
      ref="sheet"
      class="fixed inset-x-0 top-(--header-h) z-(--z-menu) bg-paper shadow-card lg:hidden"
    >
      <nav aria-label="Hauptnavigation mobil" class="container-page pb-4">
        <ul class="border-t border-line">
          <li v-for="item in mainNav" :key="item.label" class="border-b border-line">
            <NavLink
              v-slot="{ active }"
              :item="item"
              class="flex h-14 items-center font-serif text-h3 text-ink transition-colors duration-150 hover:text-burgundy"
              @navigate="closeMenu()"
            >
              <span :class="active ? 'text-burgundy' : ''">{{ item.label }}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </Transition>
</template>

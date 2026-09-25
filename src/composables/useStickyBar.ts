import { computed, onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

/**
 * Gemeinsamer Zustand der mobilen Kontaktleiste.
 * - Trigger (Hero bzw. Seitenkopf): Leiste erscheint erst, wenn der Trigger den Viewport verlassen hat.
 * - Hide-Zones (Abschluss-CTA, Footer): Solange eine sichtbar ist, bleibt die Leiste weg.
 */
const triggerVisible = ref(true)
const visibleHideZones = ref(new Set<Element>())

export const stickyBarVisible = computed(
  () => !triggerVisible.value && visibleHideZones.value.size === 0,
)

export function useStickyBarTrigger(target: Ref<HTMLElement | null>): void {
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    if (!target.value) return
    observer = new IntersectionObserver(([entry]) => {
      if (entry) triggerVisible.value = entry.isIntersecting
    })
    observer.observe(target.value)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    // Neue Seite: Leiste verstecken, bis der nächste Trigger gemessen hat.
    triggerVisible.value = true
  })
}

export function useStickyBarHideZone(target: Ref<HTMLElement | null>): void {
  let observer: IntersectionObserver | undefined
  let element: Element | undefined

  const update = (el: Element, visible: boolean) => {
    const next = new Set(visibleHideZones.value)
    if (visible) next.add(el)
    else next.delete(el)
    visibleHideZones.value = next
  }

  onMounted(() => {
    if (!target.value) return
    element = target.value
    observer = new IntersectionObserver(([entry]) => {
      if (entry) update(entry.target, entry.isIntersecting)
    })
    observer.observe(element)
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    if (element) update(element, false)
  })
}

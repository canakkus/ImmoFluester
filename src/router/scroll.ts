import { prefersReducedMotion } from '@/composables/useReducedMotion'

/** Abstand unter dem Sticky-Header: entspricht `scroll-padding-top` auf <html> (Header-Höhe + 24px). */
export function headerScrollOffset(): number {
  const value = getComputedStyle(document.documentElement).scrollPaddingTop
  const parsed = Number.parseFloat(value)
  if (Number.isFinite(parsed) && parsed > 0) return parsed
  return typeof window !== 'undefined' && window.innerWidth >= 1024 ? 104 : 88
}

export function scrollBehaviorMode(): ScrollBehavior {
  return prefersReducedMotion() ? 'instant' : 'smooth'
}

export function scrollToHash(hash: string): void {
  const el = document.getElementById(decodeURIComponent(hash.slice(1)))
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - headerScrollOffset()
  window.scrollTo({ top, behavior: scrollBehaviorMode() })
}

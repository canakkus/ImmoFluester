/**
 * Body-Scroll-Lock mit Referenzzählung (mehrere Overlays können gleichzeitig sperren).
 * Die Scrollbar-Breite wird als padding-right ausgeglichen, damit das Layout nicht springt.
 */
let lockCount = 0

export function lockScroll(): void {
  lockCount += 1
  if (lockCount > 1) return
  const root = document.documentElement
  const scrollbarWidth = window.innerWidth - root.clientWidth
  root.style.overflow = 'hidden'
  if (scrollbarWidth > 0) root.style.paddingRight = `${scrollbarWidth}px`
}

export function unlockScroll(): void {
  if (lockCount === 0) return
  lockCount -= 1
  if (lockCount > 0) return
  const root = document.documentElement
  root.style.overflow = ''
  root.style.paddingRight = ''
}

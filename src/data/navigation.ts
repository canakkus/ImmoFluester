import type { RouteLocationRaw } from 'vue-router'

export interface NavItem {
  label: string
  to: RouteLocationRaw
  /** Name der Route, bei der der Eintrag als aktiv markiert wird. */
  activeRouteName?: string
}

export const mainNav: NavItem[] = [
  { label: 'Ablauf', to: { name: 'home', hash: '#ablauf' } },
  { label: 'Inspektionen', to: { name: 'home', hash: '#inspektionen' } },
  { label: 'Über mich', to: { name: 'home', hash: '#ueber-mich' } },
  { label: 'Referenzen', to: { name: 'referenzen' }, activeRouteName: 'referenzen' },
]

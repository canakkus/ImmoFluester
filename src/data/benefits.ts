import type { Component } from 'vue'
import { FileSearch, HandCoins, ShieldCheck, Smile, Timer } from 'lucide-vue-next'

/** Die 5 Kurz-Vorteile (Sektion „Spar dir Pannen, Nerven & Geld“). */
export interface ShortBenefit {
  icon: Component
  title: string
}

export const shortBenefits: ShortBenefit[] = [
  { icon: ShieldCheck, title: 'Sicherheit durch über 35 Jahre Expertise' },
  { icon: HandCoins, title: 'Tausende Euro sparen durch professionelles Verhandeln' },
  { icon: FileSearch, title: 'Lückenlose Prüfung aller Makler-Dokumente' },
  { icon: Smile, title: 'Schluss mit unnötigem Stress' },
  { icon: Timer, title: 'Schneller entscheiden als alle anderen' },
]

/** Makler-Dokumente-Check: die zwei Hebel aus dem alten Hero-Slider. */
export const documentCheckPoints: string[] = [
  'Professionelles Verhandeln des Kaufpreises',
  'Überprüfung aller Makler-Dokumente',
]

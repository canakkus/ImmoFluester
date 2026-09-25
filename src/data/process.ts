/** Ablauf Ankaufs-Check in 5 Schritten. `action` steuert den eingebetteten Kontakt-Einstieg. */
export type ProcessAction = 'whatsapp' | 'remote-check'

export interface ProcessStep {
  number: string
  title: string
  text: string
  action?: ProcessAction
}

export const processSteps: ProcessStep[] = [
  {
    number: '1',
    title: 'Frag unverbindlich',
    text: 'Ruf an oder schick mir deine Fragen per WhatsApp. Unverbindlich und kostenfrei.',
    action: 'whatsapp',
  },
  {
    number: '2',
    title: 'Schick mir die Unterlagen',
    text: 'Exposé, Fotos und Makler-Dokumente reichen für eine erste Einschätzung aus der Ferne. Fällt die Wohnung durch, sparst du dir die Besichtigung.',
    action: 'remote-check',
  },
  {
    number: '3',
    title: 'Check vor Ort',
    text: 'Ich prüfe die Wohnung auf Herz und Nieren: Bausubstanz, Installationen, Hausdokumente. In Stunden statt Wochen.',
  },
  {
    number: '4',
    title: 'Zeugnis & Pro-Contra-Liste',
    text: 'Du bekommst ein Wohnungs-Zeugnis nach objektiven Kriterien und eine Liste der wichtigsten Vor- und Nachteile.',
  },
  {
    number: '5',
    title: 'Verhandeln & Übergabe',
    text: 'Ich helfe dir beim Verhandeln des Kaufpreises und schaue bei der Übergabe genau hin, was als Mangel gilt.',
  },
]

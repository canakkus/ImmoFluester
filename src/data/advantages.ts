/** Die 8 ausführlichen Vorteile. Nummer 7 wird als Aha-Block „Gegen-Check“ dargestellt. */
export interface Advantage {
  index: string
  title: string
  paragraphs: string[]
  list?: string[]
  /** Absatz nach der Liste. */
  outro?: string
}

export interface CounterCheckItem {
  object: string
  result: string
}

export const advantages: Advantage[] = [
  {
    index: '01',
    title: 'Kauf sicher – mit meiner Erfahrung',
    paragraphs: [
      'Gemeinsam prüfen wir deine neue Wohnung auf Herz und Nieren. Ich bin ein alter Fuchs in der Wiener Baubranche, und viele hundert Kaufbegleitungen haben mich zum Experten gemacht.',
    ],
  },
  {
    index: '02',
    title: 'Kauf günstiger – durch Verhandeln',
    paragraphs: [
      'Du willst eine gebrauchte Wohnung kaufen und glaubst, der Kaufpreis ist fix? Oder du traust dich nicht zu verhandeln? Sei mutig. Ich helfe dir dabei, und das spart dir tausende Euro.',
    ],
  },
  {
    index: '03',
    title: 'Lass dich nicht „bescheißen“',
    paragraphs: [
      'Die Fallen beim Wohnungskauf sind all die Dokumente und Infos, die man dir nicht geben will. Ich riech den Braten meilenweit gegen den Wind.',
      'Für dich prüfe ich die Hausdokumente, die Bausubstanz und die Verkäufer. Damit beim Kauf garantiert nix schiefgeht.',
    ],
  },
  {
    index: '04',
    title: 'Sei schneller als alle anderen',
    paragraphs: [
      'Andere Ankaufs-Gutachter brauchen Tage oder Wochen. Bei mir bekommst du das in Stunden – und deutlich günstiger.',
    ],
  },
  {
    index: '05',
    title: 'Mach keinen Fehlkauf',
    paragraphs: [
      'Nach mehreren Besichtigungen bist du völlig verwirrt? So viele Eindrücke und Emotionen. Ich bringe Klarheit, mit zwei Listen:',
    ],
    list: [
      'ein Wohnungs-Zeugnis nach objektiven Kriterien',
      'eine Pro-Contra-Liste mit den wichtigsten Vor- und Nachteilen der Wohnung',
    ],
    outro:
      'Damit weißt du rasch, was deine Wohnung kann und was dir wichtig ist. Viele Kund:innen waren dankbar für meine strenge Kritik und kamen mit anderen Wohnungen wieder.',
  },
  {
    index: '06',
    title: 'Lass den Experten für dich arbeiten – auch aus der Ferne',
    paragraphs: [
      'Zu viele Inserate und wenig Lust auf Besichtigungen? Mach mit mir vorab einen Wohnungs-Check aus der Ferne. Schick mir einfach alle Unterlagen vom Makler.',
      'An den Exposé-Fotos erkenne ich, was die Wohnung kann und ob Bausubstanz und Installationen passen. In den Hausdokumenten sehe ich, ob etwas faul ist. Fällt die Wohnung bei mir durch, sparst du dir die Besichtigung. Bekommt sie mein OK, hat sie viel Potenzial.',
    ],
  },
  {
    index: '07',
    title: 'Kauf nicht ohne Gegen-Check',
    paragraphs: [
      'Beim Gebrauchtwagen machst du einen Ankaufstest, bei der Waschmaschine oder beim Handy liest du Testberichte. Und beim Wohnungskauf verlässt du dich einfach darauf, was der Makler erzählt?',
    ],
  },
  {
    index: '08',
    title: 'Spar dir den Stress bei der Übergabe',
    paragraphs: [
      'Was gilt überhaupt als Mangel? Worauf sollst du bei der Wohnungsübergabe schauen? Mit mir als Profi an deiner Seite bekommst du die Wohnung, für die du bezahlst.',
    ],
  },
]

/** Index des Vorteils, der als Aha-Block dargestellt wird. */
export const COUNTER_CHECK_INDEX = '07'

export const counterCheck: CounterCheckItem[] = [
  { object: 'Gebrauchtwagen', result: 'Ankaufstest' },
  { object: 'Handy', result: 'Testbericht' },
  { object: 'Wohnung', result: 'Ankaufs-Check' },
]


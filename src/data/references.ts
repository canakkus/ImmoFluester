/**
 * 40 Referenzen aus der alten Website (docs/referenzen.json), Namen in normaler Schreibweise.
 * `prominent`: bekannte Namen, auf /referenzen zuerst. `featured`: erscheinen in der Leiste auf Home.
 */
export interface Reference {
  name: string
  role?: string
  object: string
  prominent?: boolean
  featured?: { shortRole: string }
}

export const references: Reference[] = [
  // --- Prominente zuerst ---
  {
    name: 'Robert Kratky',
    role: 'Ö3-Wecker-Mann',
    object: 'Büro/Wohnungen in 1190 Wien, Salmannsdorf und Klosterneuburg',
    prominent: true,
    featured: { shortRole: 'Ö3-Wecker' },
  },
  {
    name: 'Claudia Reiterer',
    role: 'ORF-Moderatorin',
    object: 'Kleingartenhaus in 1160 Wien',
    prominent: true,
    featured: { shortRole: 'ORF-Moderatorin' },
  },
  {
    name: 'Martina Rupp',
    role: 'Ö3-Moderatorin',
    object: 'Kleingartenhaus mit Zubau in 1230 Wien',
    prominent: true,
    featured: { shortRole: 'Ö3-Moderatorin' },
  },
  {
    name: 'Karl-Heinz Schütz',
    role: 'Wiener Philharmoniker',
    object: 'Reihenhaus Klosterneuburg, DG-Wohnung in 1180 Wien',
    prominent: true,
    featured: { shortRole: 'Wiener Philharmoniker' },
  },
  {
    name: 'Dr. Ralf Dotzauer',
    role: 'UNO Wien',
    object: 'Dachausbauten und eine Wohnung in 1050 Wien',
    prominent: true,
    featured: { shortRole: 'UNO Wien' },
  },
  {
    name: 'Walter Vogelmayer',
    role: 'Wiener Symphoniker',
    object: 'Neue DG-Wohnung auf Altbau in 1200 Wien',
    prominent: true,
  },
  {
    name: 'Michael Günther',
    role: 'Wiener Symphoniker',
    object: '70er-Jahre Häuser in Breitenfurt und Sittendorf',
    prominent: true,
  },
  { name: 'Carla Dupre', role: 'UNO Wien', object: 'DG-Wohnungen in 1060 Wien', prominent: true },
  { name: 'Norikoaa Takahashi', role: 'UNO Wien', object: '90er-Doppelhaus in Bisamberg', prominent: true },

  // --- Weitere, in Originalreihenfolge ---
  { name: 'Thomas Klein', role: 'IT-Manager, Fa. Gourmet', object: 'Ausgebautes Dachgeschoß auf Altbau in 1150 Wien' },
  { name: 'Dr. Iris Harrer', role: 'Anwältin, Salzburg', object: 'Renovierungsbedürftige Altbauwohnung in 1080 Wien' },
  { name: 'Land&Gut Beteiligungs-GmbH', role: 'Unternehmen, Wien', object: 'Jahrhundertwende-Villa in Purkersdorf' },
  { name: 'Dr. Rudolf Kirchner', role: 'Arzt, Flachau/Salzburg', object: 'Anlagewohnung in Altbau, 1200 Wien' },
  { name: 'Dr. Ruud Helwig', role: 'Unternehmer, Holland', object: 'Wohnungen in 1180 Wien' },
  { name: 'Mag. Hans Kollmann', role: 'Rechnungshof Wien', object: 'DG-Wohnung auf Altbau in 1030 Wien' },
  { name: 'Dr. Andreas Fraunberger', role: 'Anwalt, Wien', object: 'DG-Wohnung in Neubau in 1030 Wien' },
  { name: 'Angelika Zlattinger', role: 'Studentin', object: 'Studentenwohnung in 60er-Bau in 1140 und 1120 Wien' },
  { name: 'Claus Beneder', role: 'Grafiker', object: '60er-Jahre Bungalow in Kaltenleutgeben' },
  { name: 'Prof. Grygorii Gryn', role: 'Uni Moskau, Russland', object: 'Altbauwohnung als Anlage in 1050 Wien' },
  { name: 'Stephen Löwenstein', role: 'Unternehmer', object: 'Unsanierte Altbau-Wohnung in 1030 Wien' },
  { name: 'Dr. Kurt Schneider', role: 'Uni Wien', object: 'Wohnungen und Reihenhäuser im Süden und Westen Wiens' },
  { name: 'Prof. Tim Dunin', role: 'Musikhochschule Wien', object: 'DG-Wohnung mit Terrasse auf Altbau in 1150 Wien' },
  { name: 'Dr. Elke Kilbertus', role: 'Zahnärztin, Wien', object: '60er-Jahre Haus in 1150 Wien' },
  { name: 'Stiftung Mag. Walter Fritsch', role: 'Feldkirch, Vorarlberg', object: 'Altbau-Zinshaus in 1090 Wien' },
  { name: 'Ing. Wolfhard Kopatschek', object: 'Altbau-Zinshäuser in 1100 und 1160 Wien' },
  { name: 'Bernhard Grubelnig', role: 'Fa. EMC', object: 'Anlagewohnung in 60er-Bau in 1120 Wien' },
  { name: 'Niki Nikolaus', role: 'Kreuzfahrtdirektor', object: 'Anlagewohnungen in 80er-Bau in 1040 Wien' },
  { name: 'Angelika Göstl', role: 'Pharma-Referentin', object: 'Renovierungsbedürftiges Reihenhaus in Gumpoldskirchen' },
  { name: 'Manfred Janderka', role: 'Unternehmer, Wien', object: '70er-Jahre Einfamilienhaus in Perchtoldsdorf' },
  { name: 'Werner Krueger', role: 'Pilot', object: 'Anlagewohnung in 60er-Bau in 1100 Wien' },
  { name: 'H. Knödl Catering&Event GmbH', role: 'Wien', object: 'Büro/Wohnhaus in Klosterneuburg und Scheiblingstein' },
  { name: 'Mag. Reinhard Peschorn', role: 'EDV-Unternehmer', object: 'Altbauwohnung in 1020 Wien' },
  { name: 'Dr. Marcus Bruckmann', role: 'Angewandte, Wien', object: 'Anlagewohnung in 60er-Bau in 1160 Wien' },
  { name: 'Brehms+imago', role: 'Unternehmen', object: 'Büro & Wohnhaus, Vierkanthof in Pfaffendorf/Kleinhaugsdorf' },
  { name: 'Gehrer Consulting GmbH', role: 'Unternehmen', object: 'Büro & Anlagewohnung in 80er-Bau in 1220 Wien' },
  { name: 'Evelyn Grill', role: 'Designerin', object: 'Kelleratelier und Werkstatt in Altbau-Souterrain' },
  { name: 'Dr. Roland Bühler', role: 'Holland', object: 'Altbau-Anlagewohnung in 1060 Wien' },
  { name: 'DI Michael Greiter', role: 'Patentamt Wien', object: 'DG-Ausbau auf Altbau in 1200 Wien' },
  { name: 'Rafaela Pröll', role: 'Fotografin, Wien', object: 'Anlagewohnung in 50er-Bau in 1170 Wien' },
  { name: 'Irmgard Schneider', role: '1020 Wien', object: 'Bewertung von 4 Wohnungen für Erbschaft/Geschwister' },
]

/**
 * Filter-Kategorien – ausschließlich aus den Objekt-Texten abgeleitet (Regex auf `object`).
 * Ein Eintrag kann in mehreren Kategorien liegen.
 */
export interface ReferenceCategory {
  id: string
  label: string
  pattern: RegExp
}

export const referenceCategories: ReferenceCategory[] = [
  { id: 'altbau', label: 'Altbau', pattern: /altbau/i },
  { id: 'dachgeschoss', label: 'Dachgeschoß', pattern: /\bDG\b|dachgescho|dachausbau/i },
  { id: 'anlage', label: 'Anlage', pattern: /anlage/i },
  { id: 'haus', label: 'Haus & Kleingarten', pattern: /(?<!zins)(haus|häuser)\b|bungalow|villa|vierkanthof/i },
  { id: 'zinshaus', label: 'Zinshaus', pattern: /zinsh/i },
  { id: 'nachkriegsbau', label: '50er- bis 90er-Bau', pattern: /\b[5-9]0er/i },
]

export const prominentReferences = references.filter((r) => r.prominent)
export const otherReferences = references.filter((r) => !r.prominent)
export const featuredReferences = references.filter(
  (r): r is Reference & { featured: { shortRole: string } } => Boolean(r.featured),
)

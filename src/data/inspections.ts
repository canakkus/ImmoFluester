/**
 * 15 Inspektionsfotos (Originale aus _legacy-assets/slider, unverändert, plus WebP bei gleicher Pixelgröße).
 * Der Titel ist ins Bild eingebrannt – deshalb steht er im alt-Text, nicht als sichtbare Bildunterschrift.
 */
export interface Inspection {
  /** Pfad ohne Dateiendung unter /public. */
  src: string
  width: number
  height: number
  alt: string
}

const BASE = '/images/inspektionen'

export const inspections: Inspection[] = [
  {
    src: `${BASE}/gebaeude-check`,
    width: 600,
    height: 590,
    alt: 'Johannes Kirchner vor einem verfallenen Haus mit eingestürztem Dach – Aufschrift: Gebäude-Check',
  },
  {
    src: `${BASE}/fassaden-check`,
    width: 600,
    height: 583,
    alt: 'Johannes Kirchner zeigt auf die Sockelabdichtung eines Neubaus – Aufschrift: Fassaden-Check',
  },
  {
    src: `${BASE}/dach-inspektion`,
    width: 600,
    height: 591,
    alt: 'Johannes Kirchner auf einem Wiener Dach neben einem Kamin – Aufschrift: Dach-Inspektion',
  },
  {
    src: `${BASE}/dachstuhl-kontrolle`,
    width: 586,
    height: 600,
    alt: 'Johannes Kirchner prüft mit einer Kamera einen Balken im Dachstuhl – Aufschrift: Dachstuhl-Kontrolle',
  },
  {
    src: `${BASE}/waermebild-check`,
    width: 591,
    height: 600,
    alt: 'Johannes Kirchner mit Wärmebildkamera und dem Wärmebild eines Hauses – Aufschrift: Check mit Wärmebild-Kamera',
  },
  {
    src: `${BASE}/feuchte-wand-check`,
    width: 579,
    height: 600,
    alt: 'Johannes Kirchner misst mit einem Messgerät die Feuchtigkeit am Wandsockel – Aufschrift: Feuchte Wand-Check',
  },
  {
    src: `${BASE}/mauer-schimmel-inspektion`,
    width: 600,
    height: 598,
    alt: 'Johannes Kirchner vor einer verschimmelten Wand, daneben ein Feuchtemessgerät – Aufschrift: Mauer-Schimmel Inspektion',
  },
  {
    src: `${BASE}/keller-inspektion`,
    width: 582,
    height: 600,
    alt: 'Johannes Kirchner leuchtet Leitungen an der Kellerdecke ab – Aufschrift: Keller-Inspektion',
  },
  {
    src: `${BASE}/kanal-inspektion`,
    width: 598,
    height: 600,
    alt: 'Johannes Kirchner vor einem feuchten Wandfleck unter einem Abflussrohr – Aufschrift: Kanal-Inspektion',
  },
  {
    src: `${BASE}/leitungs-inspektion`,
    width: 565,
    height: 600,
    alt: 'Johannes Kirchner vor freigelegten Leitungen in einer aufgestemmten Wand – Aufschrift: Inspektion der Leitungen',
  },
  {
    src: `${BASE}/sanitaer-inspektion`,
    width: 600,
    height: 590,
    alt: 'Johannes Kirchner neben einem verschmutzten WC – Aufschrift: Sanitär-Inspektion',
  },
  {
    src: `${BASE}/heizungs-inspektion`,
    width: 576,
    height: 600,
    alt: 'Johannes Kirchner öffnet die Verkleidung einer Gastherme – Aufschrift: Heizung-Inspektion',
  },
  {
    src: `${BASE}/elektro-inspektion`,
    width: 600,
    height: 590,
    alt: 'Johannes Kirchner vor einem offenen Zählerkasten – Aufschrift: Elektro-Inspektion',
  },
  {
    src: `${BASE}/elektrik-kontrolle`,
    width: 595,
    height: 600,
    alt: 'Johannes Kirchner prüft einen Sicherungskasten mit Stromzählern – Aufschrift: Elektrik-Kontrolle',
  },
  {
    src: `${BASE}/makler-dokumente-check`,
    width: 588,
    height: 600,
    alt: 'Johannes Kirchner neben einem Wohnungsgrundriss und Makler-Unterlagen – Aufschrift: Makler-Dokumente Check',
  },
]

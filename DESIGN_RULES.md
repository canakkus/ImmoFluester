# DESIGN_RULES – Der IMMO-FLÜSTERER

Verbindliches Design-System. Stack: Vue 3 + Vite + TS + Tailwind CSS v4 (Tokens via `@theme`).
Abweichungen nur nach Rücksprache mit Head of Design. Strukturvorgabe: `docs/vision.md`.

---

## 0. Aesthetic-Richtung

**„Wiener Baumeister-Kanzlei“**: warmes Altbau-Papier (Creme/Sandstein) als ruhiger Rahmen, fast-schwarze Tinte, eine klassische Serif-Headline mit der Autorität eines Gutachtens. Burgundy (aus dem Engel-Logo) ist die **einzige** Handlungsfarbe, Tannengrün (aus der Trachtenweste) nur für „geprüft/erledigt“-Signale. Swiss-Grid, links ausgerichtet, viel Weißraum. Die knallbunten Inspektionsfotos sind die einzige laute Farbe auf der Seite, deshalb muss alles andere leise bleiben.

## 1. Design-Prinzipien

1. **Der Rahmen bleibt leise, die Fotos sprechen.** Keine bunten Flächen, Verläufe oder Deko-Illustrationen. Die Fotos bringen genug Farbe mit.
2. **Seriös wie ein Gutachten, direkt wie ein Wiener.** Die Typografie trägt die Seriosität (Serif, ruhige Hierarchie), der Witz steckt im Text, nicht in grellen Stilmitteln.
3. **Eine Aktion, eine Farbe.** Burgundy heißt immer „jetzt Kontakt aufnehmen“. WhatsApp hat sein eigenes Grün. Andere Elemente bekommen keine Akzentfarbe als Fläche.
4. **Echte Größen.** Kein Bild wird größer als in seiner Originalauflösung gezeigt. Die Kompositionen sind so gebaut, dass kleine Fotos gewollt wirken (Kacheln, Raster, Passepartout).
5. **Swiss-Raster, linksbündig.** 12-Spalten-Grid, eine Container-Breite, linksbündige Überschriften. Zentriert wird nur im Abschluss-CTA.

---

## 2. Farb-Tokens

Kontrast nach WCAG 2.x berechnet (relative Luminanz, sRGB). Text-Minimum 4.5:1, UI-Grenzen mind. 3:1.

| Token (Tailwind) | Hex | Einsatz |
|---|---|---|
| `paper` | `#FAF7F2` | Seiten-Hintergrund (Standard) |
| `sand` | `#F2ECE2` | Wechsel-Sektionen, Passepartout hinter Fotos, Icon-Kacheln |
| `white` | `#FFFFFF` | Karten auf `paper` |
| `ink` | `#1C1A17` | Headlines, Fließtext |
| `ink-muted` | `#5A544C` | Sekundärtext, Meta, Rollen bei Referenzen |
| `line` | `#E3DACB` | dekorative Trennlinien, Karten-Rahmen (nicht-interaktiv) |
| `line-strong` | `#8A8174` | Rahmen interaktiver Elemente (Chips) |
| `burgundy` | `#8A2A22` | Primär-CTA, Eyebrows, Links, Focus-Ring, Zitat-Linien |
| `burgundy-dark` | `#6E1F19` | Hover/Active von `burgundy` |
| `burgundy-tint` | `#F6E9E6` | Fläche für den Aha-Block „Gegen-Check“ (einzige getönte Fläche) |
| `tanne` | `#2E5A3C` | Check-Icons, Benefit-Icons, „Bausachverständiger“-Icon |
| `wa` | `#1F7A4D` | nur WhatsApp-Button-Fläche |
| `wa-dark` | `#17633E` | Hover WhatsApp |
| `night` | `#1D2620` | Abschluss-CTA + Footer, YouTube-Platzhalter, Lightbox-Caption-Bereich |
| `night-muted` | `#B9B2A6` | Sekundärtext auf `night` |
| `brick-light` | `#E39A8C` | Eyebrow/Links/Icons auf `night` (burgundy ist dort zu dunkel) |

### Geprüfte Kontraste

| Vordergrund / Hintergrund | Ratio | Status |
|---|---|---|
| ink / paper | 16.25 | AAA |
| ink / white | 17.36 | AAA |
| ink / sand | 14.78 | AAA |
| ink / burgundy-tint | 14.65 | AAA |
| ink-muted / paper | 7.00 | AAA |
| ink-muted / sand | 6.37 | AA (AAA ab großer Schrift) |
| ink-muted / white | 7.48 | AAA |
| ink-muted / burgundy-tint | 6.31 | AA |
| burgundy / paper | 8.07 | AAA |
| burgundy / sand | 7.34 | AAA |
| burgundy / white | 8.62 | AAA |
| burgundy / burgundy-tint | 7.28 | AAA |
| white / burgundy (Button) | 8.62 | AAA |
| white / burgundy-dark (Hover) | 11.21 | AAA |
| tanne / paper | 7.43 | AAA |
| tanne / sand | 6.76 | AA |
| white / tanne | 7.94 | AAA |
| white / wa (WhatsApp) | 5.32 | AA |
| white / wa-dark (Hover) | 7.26 | AAA |
| paper / night | 14.55 | AAA |
| night-muted / night | 7.39 | AAA |
| brick-light / night | 6.86 | AA |
| line-strong / paper (UI-Rahmen) | 3.59 | ≥3:1 ok |
| line-strong / sand (UI-Rahmen) | 3.27 | ≥3:1 ok |

**Verboten:** `burgundy` als Text auf `night` (zu dunkel), `line` als Rahmen interaktiver Elemente (unter 3:1), das WhatsApp-Originalgrün `#25D366` mit weißem Text (1.98:1, fällt durch).

---

## 3. Typografie

### Schriften (self-hosted via Fontsource: keine Google-CDN-Requests, DSGVO)

```bash
npm i @fontsource-variable/newsreader @fontsource-variable/source-sans-3
```

```ts
// main.ts
import '@fontsource-variable/newsreader/wght.css'
import '@fontsource-variable/newsreader/wght-italic.css'
import '@fontsource-variable/source-sans-3/wght.css'
```

- **Headlines: Newsreader** (Variable, mit Italic). Warum: Die Schrift wurde für lange Lektüre gezeichnet, hat moderaten Strichkontrast und bleibt deshalb auch in 22px-Kartenüberschriften stabil (Playfair wird dort dünn und zittrig). Sie wirkt wie Gutachten und Zeitungsspalte, also seriös, aber nicht protzig, und passt zur klassischen Antiqua-Wortmarke im Logo. Ihre Italic ist der Ort für den Wiener Witz (z. B. „Beschiss oder *Schnäppchen?*“). Cinzel/Trajan-artige Schriften sind ausgeschlossen: Sie haben nur Versalien, und das Versal-Geschrei der alten Seite schaffen wir gerade ab.
- **Body/UI: Source Sans 3** (Variable). Humanistisch, sehr gut lesbar, saubere Umlaute/ß, `tabular-nums` verfügbar. Wirkt wärmer und weniger nach Template als Inter.

### Skala (fluid, 375 → 1440 px)

| Token | Font | Größe | Line-height | Weight | Tracking | Einsatz |
|---|---|---|---|---|---|---|
| `text-display` | Newsreader | `clamp(2.5rem, 1.6rem + 3.8vw, 4.5rem)` (40→72px) | 1.04 | 600 | -0.02em | nur Hero-H1 |
| `text-h2` | Newsreader | `clamp(2rem, 1.45rem + 2.3vw, 3rem)` (32→48px) | 1.1 | 600 | -0.015em | Sektions-Headlines |
| `text-h3` | Newsreader | `clamp(1.375rem, 1.2rem + 0.75vw, 1.75rem)` (22→28px) | 1.2 | 600 | -0.01em | Karten, Schritte |
| `text-h4` | Source Sans 3 | `1.125rem` (18px) | 1.35 | 700 | 0 | Mini-Headlines, Benefit-Titel |
| `text-quote` | Newsreader *italic* | `clamp(1.5rem, 1.2rem + 1.3vw, 2.25rem)` (24→36px) | 1.3 | 400 | -0.01em | Pull-Quote, Zitat |
| `text-stat` | Newsreader | `clamp(2.25rem, 1.9rem + 1.5vw, 3rem)` (36→48px) | 1 | 600 | -0.02em | Zahlen (35, 2.500+), Schritt-Nummern |
| `text-lead` | Source Sans 3 | `clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem)` (18→21px) | 1.55 | 400 | 0 | Hero-Subline, Sektions-Leads |
| `text-body` | Source Sans 3 | `clamp(1.0625rem, 1rem + 0.25vw, 1.125rem)` (17→18px) | 1.65 | 400 | 0 | Fließtext (nie unter 16px) |
| `text-ui` | Source Sans 3 | `1.0625rem` (17px) | 1.2 | 600 | 0.005em | Buttons, Nav, Chips |
| `text-eyebrow` | Source Sans 3 | `0.875rem` (14px) | 1.2 | 700 | 0.14em + `uppercase` | Eyebrow über H2 (einziger Ort für Versalien) |
| `text-meta` | Source Sans 3 | `0.9375rem` (15px) | 1.45 | 500 | 0 | Bildunterschriften, Footer-Legal, Rollen. **Nie für Fließtext** |

Regeln:
- Fließtext max. **65ch** (`max-w-prose-body`; Pflichtgrenze ist 75ch). Leads max. 58ch (`max-w-lead`). H1 max. 18ch, H2 max. 22ch, beide mit `text-wrap: balance`.
- Absätze: `text-wrap: pretty`, Abstand zwischen Absätzen `1em`.
- `<html lang="de-AT">` + `hyphens: auto` für Fließtext (lange Komposita auf 375px). Headlines: `hyphens: manual`, bei Bedarf `&shy;` setzen.
- Weights: nur 400 / 500 / 600 / 700.
- Kein Versal-Text außer Eyebrows. Die Markenschreibweise „Der IMMO-FLÜSTERER“ bleibt (Eigenname).
- Italic in Headlines nur für **ein** Wort bzw. eine Phrase pro Headline, in `burgundy`.
- Zahlen in Trust-Zeile/Stats/Zählern: `font-variant-numeric: tabular-nums lining-nums`.

---

## 4. Layout, Spacing, Container

- **Eine Container-Breite:** 75rem (**1200px**) via Utility `container-page` (= `max-w-page mx-auto` + Padding).
- Container-Padding (inline): 20px (<768) · 32px (≥768) · 40px (≥1024). Inhaltsbreite bei 1440px: 1120px.
- Grid: 4 Spalten mobil, 8 Spalten ab md, **12 Spalten ab lg**. Gap: 16px mobil, 24px md, 32px lg (Spaltenbreite bei 1440 = 64px).
- Spacing-Basis 4px (Tailwind-Default `--spacing: 0.25rem`). Nur Vielfache von 4.
- **Sektions-Rhythmus:** `py-section` = `clamp(4rem, 3rem + 4vw, 7.5rem)` (64→120px). Alle Home-Sektionen gleich, damit ein ruhiger Takt entsteht. Ausnahme: Prominenten-Leiste `py-10 md:py-12`.
- Hintergrund-Folge Home: Hero `paper` · Prominenten-Leiste `paper` (mit Linien) · Problem/Nutzen `sand` · Ablauf `paper` · Galerie `sand` · 8 Vorteile `paper` · Über mich `sand` · YouTube `paper` · Abschluss-CTA `night` · Footer `night`. Nie zwei `sand`-Sektionen hintereinander.
- Section-Header → Content: 48px (mobil 40px).
- Breakpoints (Tailwind-Defaults sm 640 / md 768 / lg 1024 / xl 1280). QA testet bei **375 / 768 / 1024 / 1440**.
- Keine horizontale Scrollbar: `html { overflow-x: clip }` als Sicherheitsnetz, die Ursache trotzdem beheben (kein `w-screen`/`100vw`, keine negativen Margins ohne Ausgleich).
- Scroll-Padding: Header-Höhe + 24px (ist im CSS unten gesetzt).

## 5. Radius, Schatten, Rahmen

| Token | Wert | Einsatz |
|---|---|---|
| `rounded-xs` | 2px | Fotos (Galerie, Portraits) |
| `rounded-sm` | 4px | Logo-Siegel, Icon-Kacheln |
| `rounded-md` | 8px | Buttons |
| `rounded-lg` | 12px | Karten, Aha-Block, YouTube-Container |
| `rounded-full` | 9999px | Chips, Lightbox-Controls, Play-Button |

Kleine Radien, weil das Raster Swiss ist. Keine 24px-„Bubble“-Karten.

| Token | Wert | Einsatz |
|---|---|---|
| `shadow-card` | `0 1px 2px rgb(28 26 23 / 0.05), 0 8px 24px -12px rgb(28 26 23 / 0.12)` | Mobile-Menü-Sheet. Inhaltskarten haben **keinen** Schatten, nur Border |
| `shadow-lift` | `0 12px 28px -14px rgb(28 26 23 / 0.35)` | Galerie-Kachel bei Hover/Focus |
| `shadow-bar` | `0 -6px 24px -8px rgb(28 26 23 / 0.18)` | Sticky-Kontaktleiste |
| `shadow-header` | `0 1px 0 #E3DACB` | Header nach Scroll (wirkt als Linie) |

Rahmen: 1px `line` für Karten/Trenner; 1.5px für Secondary-Buttons; 2px `burgundy` für die Pull-Quote-Linie.

## 6. z-index-Skala (feste Stufen, keine anderen Werte)

| Variable | Wert | Element |
|---|---|---|
| `--z-base` | 0 | Content |
| `--z-raised` | 10 | Galerie-Kachel im Hover |
| `--z-header` | 40 | Sticky-Header |
| `--z-stickybar` | 50 | Mobile-Kontaktleiste |
| `--z-menu` | 60 | Mobile-Menü-Sheet |
| `--z-lightbox` | 100 | Lightbox + Backdrop |
| `--z-skiplink` | 110 | Skip-Link „Zum Inhalt springen“ |

Deko-Flächen hinter Portraits: `-z-10` innerhalb eines `relative isolate`-Wrappers, nicht über die globale Skala.
Nutzung in Tailwind v4: `z-(--z-header)`.

## 7. Motion

- Dauern: `--dur-fast` **150ms** (Farben, Hover), `--dur-base` **200ms** (Transforms, Menü), `--dur-slow` **300ms** (Lightbox, Sticky-Bar). Nichts darüber.
- Easing: `ease-out-soft` = `cubic-bezier(0.22, 1, 0.36, 1)` zum Einblenden, `ease-in-soft` = `cubic-bezier(0.4, 0, 1, 1)` zum Ausblenden.
- Animiert werden **nur** `transform`, `opacity`, `color`, `background-color`, `border-color`, `text-decoration-color`, `outline-color`, `box-shadow`. Nie `width`/`height`/`top`/`margin`/`padding`.
- `transition-all` ist verboten. Die Properties werden immer explizit angegeben (`transition-colors`, `transition-transform`, `transition-[transform,box-shadow]`).
- **Keine** Scroll-Reveal-Animationen, kein Parallax, keine Marquees/Laufbänder, kein Autoplay-Slider. Bewegung gibt es nur als Antwort auf Nutzeraktionen und beim Erscheinen der Sticky-Bar.
- Vue: `<Transition>` mit CSS-Klassen. Keine Animations-Library.
- Hover ohne Layout-Shift: keine Änderung von Border-Breite oder font-weight. Stattdessen Farbe/Shadow/`translate` wechseln.
- `prefers-reduced-motion: reduce`: Das globale CSS unten setzt alle Dauern auf 0.01ms. Lightbox und Sticky-Bar erscheinen dann sofort, ohne Scale und ohne Slide.

---

## 8. Komponenten-Specs

### Globale Interaktionsregeln
- Alles Klickbare: `cursor-pointer`, Hitbox **min. 44×44px** (auch Icon-Buttons, Chips, Footer-Links → `min-h-11 inline-flex items-center`).
- Focus: `:focus-visible { outline: 2px solid burgundy; outline-offset: 3px }`. Auf `night`-Flächen (Sektion bekommt Klasse `on-night`) und in der Lightbox ist der Ring `paper`. **Nie** `outline: none` ohne Ersatz.
- Icons: **Lucide** (`lucide-vue-next`), `stroke-width: 1.75`, 20px in Buttons, 24px in Icon-Kacheln, `aria-hidden="true"`. **Keine Emojis.** Marken-Icons (WhatsApp, Signal, YouTube) gibt es in Lucide nicht → monochrome Inline-SVGs aus Simple Icons (`fill="currentColor"`) unter `src/assets/icons/brand/`.
- Telefonnummer-Anzeige: `0699 133 833 53`, Link `tel:+4369913383353`.

### Button
Gemeinsam: `inline-flex items-center justify-center gap-2.5`, `text-ui`, `rounded-md`, Icon links. Größen: **md** `h-12 px-6` (48px), **lg** `h-14 px-7` (56px, für Hero + Abschluss-CTA). Transition: Farben 150ms, `transform` 200ms. Active: `translate-y-px`.

| Variante | Default | Hover | Einsatz |
|---|---|---|---|
| **primary** | bg `burgundy`, text `white` | bg `burgundy-dark` | Anrufen, Haupt-CTA. Max. 1 pro Viewport-Bereich |
| **secondary** | transparent, 1.5px Border `ink`, text `ink` | bg `ink`, text `paper` | E-Mail, Preisliste-PDF, „Zum YouTube-Kanal“ |
| **secondary-on-night** | transparent, 1.5px Border `paper`, text `paper` | bg `paper`, text `night` | Signal/E-Mail im Abschluss-CTA |
| **ghost** | text `burgundy`, `px-3 min-h-11`, `underline decoration-1 underline-offset-4 decoration-transparent` + Lucide `ArrowRight` 18px | `decoration-burgundy`, Pfeil `translate-x-0.5` | Inline-Links wie „Preise & Leistungen (PDF)“, „Alle 40 Referenzen“ |
| **whatsapp** | bg `wa`, text `white`, WhatsApp-Brand-SVG | bg `wa-dark` | Jeder WhatsApp-Link. Label „WhatsApp“ bzw. „Per WhatsApp fragen“. Link: `https://wa.me/4369913383353?text=` + URL-encodierter Vortext |

Unter 640px sind Hero- und CTA-Buttons `w-full`.

### Section-Header (mit Eyebrow)
```
[24×2px burgundy-Linie] EYEBROW (text-eyebrow uppercase, burgundy)   ← Linie und Text mit gap 12px in einer Zeile
Headline H2 (text-h2, ink, max-w-[22ch], balance)                     ← mt-3
Lead (text-lead, ink-muted, max-w-lead)                               ← mt-4, optional
```
Immer linksbündig. Die Eyebrow benennt den Abschnitt sachlich („Ablauf“, „Inspektionen“, „Über mich“), der Witz steht in der H2. Auf `night`: Eyebrow und Linie `brick-light`, H2 `paper`, Lead `night-muted`.

### Card (die 8 ausführlichen Vorteile)
- bg `white`, 1px `line`, `rounded-lg`, Padding `p-6 md:p-8`, kein Schatten, kein Hover (Karten sind nicht klickbar).
- Aufbau: Index-Nummer „01“–„08“ (Newsreader 600, 1.125rem, `burgundy`, `tabular-nums`) → 16px → H3 (`text-h3`) → 12px → Body (`text-body`, `ink`).
- Raster: `md:grid-cols-2`, gap 24px (md) / 32px (lg).
- **Aha-Block „Gegen-Check“** (Vorteil 7) ist keine normale Karte: `md:col-span-2`, bg `burgundy-tint`, keine Border, `rounded-lg`, `p-8 md:p-12`. Darin H3 + Vergleich in 3 Spalten (ab md; mobil untereinander): „Gebrauchtwagen → Ankaufstest“, „Handy → Testbericht“, „Wohnung → Ankaufs-Check“. Pro Spalte: Objekt in `text-h4 ink-muted`, darunter Lucide `ArrowDown` in `burgundy`, darunter Ergebnis in `text-h3 ink`. Die dritte Spalte setzt das Ergebnis in `burgundy`: das ist die Pointe.
- Reihenfolge: Karten 1–6 als Paare → Aha-Block → Karte 8 links, rechts daneben (ab md) ein ruhiger Textblock ohne Rahmen: `text-h3` „Noch Fragen zu deiner Wohnung?“ + primary md „Anrufen“ + ghost „Per WhatsApp fragen“. So bleibt keine einzelne Karte übrig.

### Kurz-Vorteile (5 Stück, Sektion 3)
Kein Karten-Grid. Mobil eine vertikale Liste, ab lg eine 5-spaltige Zeile. Jedes Item hat oben eine 1px `line`-Linie und `pt-6`. Pro Item: Icon-Kachel 48×48, `rounded-sm`, bg `paper` (Sektion ist `sand`) mit Lucide-Icon 24px in `tanne` → 16px → `text-h4`. Feste Icons: `ShieldCheck` (35 Jahre Expertise), `HandCoins` (Tausende sparen), `FileSearch` (Makler-Dokumente), `Smile` (Schluss mit Stress), `Timer` (schneller entscheiden).

### Ablauf (5 Schritte)
- ≥1024: 5 Spalten. Über allen Spalten läuft eine 1px `line`-Linie, auf der jeder Schritt einen gefüllten 12px-Kreis in `burgundy` setzt. Darunter: Nummer (`text-stat burgundy`) → H3 → Beschreibung (`text-body ink-muted`, bei kurzen Schrittexten zulässig).
- <1024: vertikal. Linie links (1px `line`, Kreis-Mittelpunkt auf der Linie), Inhalt `pl-10`, 40px Abstand zwischen Schritten.
- Schritt 1 enthält direkt den WhatsApp-Button (md). Schritt 2 enthält den ghost-Link „Dokumente per WhatsApp schicken“ (Remote-Check-Einstieg).

### Galerie-Kachel + Lightbox (Inspektionen)
**Kachel**
- `<button type="button">` mit `<img>` innen, `aria-label="Foto vergrößern: …"`. `aspect-square`, `w-full`, Bild `object-contain` auf `sand`-Passepartout (auf `sand`-Sektion: Kachel-bg `paper`). Ein leicht nicht-quadratisches Bild wird so nie beschnitten. **Nie `object-cover`.**
- Max. Kantenlänge **300px**.
- `rounded-xs`, kein Border, kein Overlay, kein Icon auf dem Bild (in den Ecken steht eingebrannter Text), kein Filter, keine sichtbare Unterschrift (der Titel ist eingebrannt). `alt` beschreibt Motiv + Aufschrift, z. B. „Johannes Kirchner prüft den Dachstuhl – Aufschrift: Dachstuhl-Kontrolle“.
- `cursor-zoom-in`. Hover/Focus-visible: `-translate-y-1` + `shadow-lift`, 200ms. Kein `scale`, weil Skalierung die kleinen Bilder weichzeichnet.
- Raster:
  - **<768:** horizontales Snap-Scroll innerhalb der Sektion: `flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 scroll-px-5`, Kacheln `w-[72vw] max-w-[280px] shrink-0 snap-start`, `scrollbar-width: thin`. Darunter der Hinweis „15 Inspektionen – zum Weiterblättern wischen“ in `text-meta ink-muted`. Die negative Margin entspricht exakt dem Container-Padding, damit keine Seiten-Scrollbar entsteht.
  - **768–1023:** 3 Spalten, gap 24px (5 Reihen).
  - **≥1024:** 5 Spalten, gap 24px (3 Reihen, bei 1440 ca. 205px Kacheln). Keine Waisen.
- Unter dem Raster: ghost-Link „Preise & Leistungen (PDF)“ mit Lucide `FileText`.

**Lightbox**
- Natives `<dialog>` mit `showModal()`: Fokus-Falle und Esc sind eingebaut. `z-(--z-lightbox)`, `::backdrop` = `rgb(20 18 16 / 0.92)`.
- Bild in **Originalgröße, nie hochskaliert**: `width`/`height`-Attribute = natürliche Maße, `max-width: min(92vw, 600px)`, `max-height: 78dvh`, `object-contain`.
- Controls: Schließen (Lucide `X`) oben rechts, Zurück/Weiter (`ChevronLeft`/`ChevronRight`) seitlich ab md, mobil als Reihe unter dem Bild. Alle 48×48, `rounded-full`, bg `rgb(250 247 242 / 0.12)`, Icon `paper`, Hover bg `rgb(250 247 242 / 0.24)`. Fokus-Ring `paper`.
- Unter dem Bild: `alt`-Text als Caption (`text-meta night-muted`) + Zähler „3 / 15“ (`tabular-nums`).
- Tastatur: ← / → / Esc. Mobil: Swipe über Pointer-Events (Schwelle 50px). Beim Schließen kehrt der Fokus auf die auslösende Kachel zurück. `body` Scroll-Lock während offen.
- Öffnen: Opacity 0→1 + Scale 0.98→1, 300ms `ease-out-soft`. Schließen 200ms `ease-in-soft`.

### Sticky-Kontaktleiste (mobil)
- Nur **<1024px**. `fixed inset-x-0 bottom-0 z-(--z-stickybar)`, bg `paper`, `shadow-bar`, Padding `px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]`.
- 3 gleich breite Buttons (`grid grid-cols-3 gap-2`), Höhe 52px, `rounded-md`, Icon 20px über Label (`text-meta` 600): **Anrufen** (primary), **WhatsApp** (whatsapp), **E-Mail** (secondary). Labels nie kürzen.
- Erscheint, sobald der Hero den Viewport verlassen hat (IntersectionObserver), und verschwindet, solange Abschluss-CTA oder Footer sichtbar sind. Slide `translateY(100%)` → `0`, 300ms `ease-out-soft`. Solange versteckt: `inert` + `aria-hidden="true"`.
- Solange sichtbar: `body` bekommt `padding-bottom: calc(76px + env(safe-area-inset-bottom))`, damit nichts verdeckt wird.

### Header / Nav
- `sticky top-0 z-(--z-header)`, bg `paper` (deckend, kein Blur, keine Transparenz), Höhe **64px** mobil / **80px** ab lg. Ab 8px Scroll: `shadow-header`.
- **Logo:** `IF-Engerl.png` hat einen hellgrauen, nicht transparenten Hintergrund. Es wird deshalb bewusst als **Siegel** gezeigt: natürliches Seitenverhältnis, Höhe 48px (mobil 44px), `rounded-sm`, ohne Rahmen. Keine `mix-blend-mode`-Tricks, keine Filter. Rechts daneben die Textmarke: Zeile 1 „Der IMMO-FLÜSTERER“ (Newsreader 600, 1.125rem mobil / 1.25rem lg, `ink`), Zeile 2 „Ankaufsberatung Wien“ (`text-meta ink-muted`). Unter 400px Viewport nur Zeile 1. Logo + Textmarke sind ein Link auf `/`.
- Desktop (≥1024): Nav-Links rechts: Ablauf · Inspektionen · Über mich · Referenzen (`text-ui`, weight 500, `ink`, Hover `burgundy`; aktive Route: 2px `burgundy`-Unterstrich, `underline-offset-8`), danach **primary md** „0699 133 833 53“ mit `Phone`-Icon.
- Mobil: rechts Icon-Button `Phone` (44×44, primary, `aria-label="Anrufen"`) + Icon-Button `Menu` (44×44, transparent, `ink`, `aria-expanded`). Menü = Sheet unter dem Header, `z-(--z-menu)`, bg `paper`, `shadow-card`. Links als 56px hohe Zeilen mit `line`-Trennern, Newsreader in `text-h3`-Größe. Schließt mit `X`, Esc, Klick auf einen Link und Klick außerhalb.
- Skip-Link „Zum Inhalt springen“ als erstes Element im DOM, nur bei Fokus sichtbar, `z-(--z-skiplink)`.

### Footer
- bg `night`, Klasse `on-night`, `pt-16 pb-10` (+ Sticky-Bar-Platz mobil über das body-Padding).
- Ab lg 3 Spalten (je 4 von 12): **Marke** (Logo-Siegel 56px hoch, Claim „Ihr guter Geist beim Wohnungskauf“ in Newsreader italic `paper`), **Kontakt** (Telefon, WhatsApp, Signal, E-Mail: Links mit Icon, `min-h-11`), **Rechtliches** (Impressum → WKO extern mit Lucide `ExternalLink`, Datenschutz, Preisliste PDF, Referenzen). Links `night-muted`, Hover `paper`. Mobil: gestapelt, 40px Abstand.
- Unterzeile nach 1px Linie `rgb(250 247 242 / 0.12)`: „© 2026 Mag. Ing. Johannes Kirchner, Wien“ in `text-meta night-muted`.
- Abschluss-CTA (ebenfalls `night`) und Footer trennt nur diese 1px-Linie; zusammen wirken sie als eine Fläche.

### Chips (Filter auf /referenzen)
- `<button type="button" aria-pressed>`, `min-h-11 px-4`, `rounded-full`, `text-ui` weight 500, 1px Border `line-strong`, bg transparent, text `ink`. Zähler im Chip: „Altbau 12“, Zahl in `ink-muted tabular-nums`, 6px Abstand.
- Hover: bg `sand`. Aktiv (`aria-pressed="true"`): bg `ink`, Border `ink`, Text `paper`, Zahl `night-muted`. Farb-Transition 150ms.
- Chips umbrechen (`flex flex-wrap gap-2`), **kein** horizontales Scrollen. Erster Chip „Alle 40“.
- Darunter der Live-Zähler „12 von 40 Referenzen“ (`text-meta`, `aria-live="polite"`).

### Referenzen-Darstellung
- **Home, Prominenten-Leiste:** Linie `line` oben und unten. Links das Label „Vertrauen mir u. a.“ (`text-eyebrow uppercase ink-muted`), dann 5 Namen in Newsreader italic 1.25rem `ink`, Rolle darunter in `text-meta ink-muted`. Ab lg eine Zeile mit gleichmäßiger Verteilung, darunter 2-spaltiges Raster; am Ende ghost-Link „Alle 40 Referenzen“. Kein Laufband, keine Logos.
- **/referenzen, Prominente zuerst:** Liste mit `line`-Trennern, pro Eintrag Name (`text-h3`), Beruf (`text-body ink-muted`), Objekt (`text-meta`). Ab md 2 Spalten.
- **/referenzen, restliche Einträge:** kompakte Liste (ab lg 3 Spalten), Name `text-h4`, darunter Beruf und Objekt in `text-meta ink-muted`, `line`-Trenner. Keine Karten-Boxen, keine Avatare, keine Sterne.
- Danach der Abschluss-CTA-Block wie auf Home.

### Über mich
- ≥1024: Portrait `kirchner-small-alternative.jpg` (400×551) in Spalten 1–5, maximal native 400px, `rounded-xs`. Dahinter eine `sand`-Fläche, 16px nach rechts unten versetzt (Deko **hinter** dem Foto, nichts liegt darauf; auf `sand`-Sektion ist die Fläche `paper`). Text in Spalten 7–12.
- <1024: Portrait oben, `max-w-[400px] w-full`, darunter Text.
- Zitat in `text-quote ink`. 5 Checkpunkte als Liste mit Lucide `Check` (20px, `tanne`), 12px Abstand zwischen Punkten.
- Fehlkauf-Story als **Pull-Quote**: `border-l-2 border-burgundy pl-6`, `text-quote`, max 32ch, darunter „Johannes über seinen eigenen Fehlkauf mit 32“ in `text-meta ink-muted`.

### YouTube (Klick-zum-Laden)
- Container `w-full max-w-[800px] aspect-video rounded-lg bg-night on-night`. Platzhalter **ohne** YouTube-Thumbnail (der würde schon Daten an Google senden): zentriert Play-Button 72×72 `rounded-full bg-burgundy` mit Lucide `Play` (28px, `white`), darunter „Video laden“ (`text-ui paper`) und „Beim Laden werden Daten an YouTube übertragen. Mehr dazu im Datenschutz.“ (`text-meta night-muted`, Link in `brick-light`). Erst nach Klick wird das `iframe` von `youtube-nocookie.com` eingesetzt.
- Darunter secondary md „Zum YouTube-Kanal“ mit YouTube-Brand-SVG.

### Abschluss-CTA
- bg `night`, Klasse `on-night`, **einzige zentrierte Sektion**. Eyebrow „Kontakt“, H2 „Lass andere die Fehler machen.“ (`paper`), Lead `night-muted`. Darunter ein Raster `max-w-[640px] mx-auto` (mobil 1 Spalte, ab md 2×2) aus lg-Buttons: Anrufen (primary), WhatsApp (whatsapp), Signal (secondary-on-night), E-Mail (secondary-on-night). Darunter „Unverbindlich & kostenfrei“ mit `Check`-Icon in `brick-light`.

---

## 9. Hero (Home) pro Breakpoint

Reihenfolge: Eyebrow „Ankaufsberatung in Wien“ → H1 „Beschiss oder *Schnäppchen?*“ („Schnäppchen?“ in Italic, `burgundy`) → Lead (`text-lead ink-muted`) „Geh auf Nummer sicher beim Immo-Kauf. Mach einen Ankaufs-Check, bevor du unterschreibst.“ → CTAs (primary lg „Anrufen“ + whatsapp lg „Per WhatsApp fragen“) → Trust-Zeile → Portrait `kirchner.jpg` (400×508).

- Hintergrund `paper`. Padding `pt-10 pb-16` mobil, `md:pt-16 md:pb-24`, `lg:pt-20 lg:pb-28`. **Kein Vollbild, kein Foto-Hintergrund, kein Overlay.**
- **Trust-Zeile** (40px unter den CTAs): 3 Items. Ab md nebeneinander, getrennt durch 1px vertikale `line`-Linien (`px-6` pro Item, erstes ohne linkes Padding). Mobil untereinander, getrennt durch horizontale `line`-Linien (`py-4`). Item = Wert (`text-stat ink`, `tabular-nums`) + Label (`text-meta ink-muted`): „35“ / „Jahre Erfahrung“ · „2.500+“ / „Ankaufsberatungen“ · Lucide `HardHat` 36px `tanne` / „Bausachverständiger“. Nur diese belegten Fakten.
- **375px:** eine Spalte. Text → Buttons `w-full` untereinander (gap 12px) → Trust-Zeile → Portrait `w-full max-w-[400px]` linksbündig (bei 375px rendert es 335px breit, also kleiner als nativ) → Bildunterschrift „Mag. Ing. Johannes Kirchner“ in `text-meta ink-muted`.
- **768px** (8-Spalten-Grid): Text Spalten 1–5, Portrait Spalten 6–8 (ca. 250px), oben bündig. Buttons nebeneinander (`flex flex-wrap gap-3`).
- **1024px** (12-Spalten-Grid): Text Spalten 1–7, Portrait Spalten 9–12 (ca. 295px), vertikal zentriert zum Textblock.
- **1440px:** Text Spalten 1–7 (640px), Portrait Spalten 8–12 (448px Platz), Bild in **nativer Größe 400px**, rechtsbündig. Tailwind: `lg:col-start-9 lg:col-span-4 xl:col-start-8 xl:col-span-5`, Bild `max-w-[400px] ml-auto`.
- Ab md liegt hinter dem Portrait eine `sand`-Fläche, 24px nach links unten versetzt (Deko hinter dem Foto via `relative isolate` + `-z-10`, nichts liegt auf dem Foto).
- Portrait: `loading="eager"`, `fetchpriority="high"`, `width="400" height="508"`, `rounded-xs`, `alt="Johannes Kirchner, Ankaufsberater, vor einem Wiener Altbau"`.
- Die Sticky-Kontaktleiste beobachtet das Hero-Element.

---

## 10. Bild-Regeln (verbindlich)

1. **Nie hochskalieren.** Max. Anzeigebreite = natürliche Breite: Portraits ≤400px, Galerie-Kacheln ≤300px, Lightbox ≤600px (bzw. natürliche Breite), Logo ≤300px.
2. **Nie beschneiden.** Galerie immer `aspect-square` + `object-contain` auf Passepartout-Fläche. Der eingebrannte gelbe Text bleibt komplett sichtbar.
3. **Nichts drauflegen.** Keine Text-Overlays, Icons, Verläufe, Badges, Filter (`grayscale`, `sepia`, `blur`, `brightness`, `saturate`), kein `mix-blend-mode` auf Fotos oder Logo.
4. Immer `width` + `height` mit den natürlichen Maßen setzen (kein CLS). `loading="lazy"` + `decoding="async"` für alles außer Hero-Portrait und Header-Logo.
5. `alt` auf Deutsch, beschreibend, inkl. eingebrannter Aufschrift. Logo: `alt="Der IMMO-FLÜSTERER – Logo mit Engel"`.
6. Engel nur im Logo (+ max. 1× dezent beim Claim im Footer). Keine weiteren Engel-Grafiken.
7. Bilder aus `_legacy-assets/` unverändert übernehmen. Optional verlustarm nach WebP konvertieren, **bei gleicher Pixelgröße**, mit JPG-Fallback via `<picture>`.
8. Doppelte Bilder (`image3.jpg` = `Makler_Dokumente_Check.jpg`, `image2.jpg` = `Mauer_Feuchtigkeit_Inspektion.jpg`) nicht zweimal in derselben Galerie zeigen.

---

## 11. Do / Don't

**Do**
- Viel Weißraum, linksbündige Headlines, gleichmäßiger Sektionsrhythmus.
- Burgundy ausschließlich für Aktion/Hervorhebung, Tanne ausschließlich für „geprüft“.
- Kleine Fotos als Kacheln im Raster zeigen: das wirkt kuratiert statt billig.
- Echte Zahlen und Namen aus der alten Seite, Du-Form.
- Jeden Kontaktweg mit Icon + ausgeschriebenem Label.
- Fokus-Ringe sichtbar lassen, Hitboxen ≥44px, vor Abgabe einmal komplett per Tastatur durchgehen.

**Don't**
- **Keine gleich großen Icon-Karten-Grids à la Template** (drei Boxen mit Icon oben, Titel, Text). Die Kurz-Vorteile sind eine Zeile/Liste, die 8 Langvorteile werden durch den Aha-Block gebrochen.
- **Keine hochskalierten oder beschnittenen Fotos**, keine Vollbild-Heroes, keine Hintergrundbilder, keine Slider/Karussells mit Autoplay.
- Keine zusätzlichen Farben (kein Gold, kein Teal, kein Blau), keine Verläufe, kein Glassmorphism/Blur.
- Kein Versal-Text außer Eyebrows, keine Ausrufezeichen-Stapel, keine Emojis.
- Kein `transition-all`, keine Scroll-Animationen, kein Parallax, keine Hover-Effekte auf nicht klickbaren Elementen.
- Keine erfundenen Sterne, Siegel, Testimonials oder Preise.
- Keine zweite Seitenbreite. Erlaubte Innen-Limits: 65ch Prose, 58ch Lead, 640px CTA-Raster, 800px Video.

---

## 12. Tailwind v4 – `src/styles/main.css`

```css
@import "tailwindcss";

@theme {
  /* ---------- Farben: nur unsere Palette, Tailwind-Defaults aus ---------- */
  --color-*: initial;
  --color-transparent: transparent;
  --color-current: currentColor;
  --color-white: #ffffff;

  --color-paper: #faf7f2;
  --color-sand: #f2ece2;
  --color-ink: #1c1a17;
  --color-ink-muted: #5a544c;
  --color-line: #e3dacb;
  --color-line-strong: #8a8174;

  --color-burgundy: #8a2a22;
  --color-burgundy-dark: #6e1f19;
  --color-burgundy-tint: #f6e9e6;

  --color-tanne: #2e5a3c;

  --color-wa: #1f7a4d;
  --color-wa-dark: #17633e;

  --color-night: #1d2620;
  --color-night-muted: #b9b2a6;
  --color-brick-light: #e39a8c;

  /* ---------- Fonts ---------- */
  --font-serif: "Newsreader Variable", "Newsreader", Georgia, "Times New Roman", serif;
  --font-sans: "Source Sans 3 Variable", "Source Sans 3", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;

  /* ---------- Typo-Skala ---------- */
  --text-display: clamp(2.5rem, 1.6rem + 3.8vw, 4.5rem);
  --text-display--line-height: 1.04;
  --text-display--letter-spacing: -0.02em;
  --text-display--font-weight: 600;

  --text-h2: clamp(2rem, 1.45rem + 2.3vw, 3rem);
  --text-h2--line-height: 1.1;
  --text-h2--letter-spacing: -0.015em;
  --text-h2--font-weight: 600;

  --text-h3: clamp(1.375rem, 1.2rem + 0.75vw, 1.75rem);
  --text-h3--line-height: 1.2;
  --text-h3--letter-spacing: -0.01em;
  --text-h3--font-weight: 600;

  --text-h4: 1.125rem;
  --text-h4--line-height: 1.35;
  --text-h4--font-weight: 700;

  --text-quote: clamp(1.5rem, 1.2rem + 1.3vw, 2.25rem);
  --text-quote--line-height: 1.3;
  --text-quote--letter-spacing: -0.01em;
  --text-quote--font-weight: 400;

  --text-stat: clamp(2.25rem, 1.9rem + 1.5vw, 3rem);
  --text-stat--line-height: 1;
  --text-stat--letter-spacing: -0.02em;
  --text-stat--font-weight: 600;

  --text-lead: clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem);
  --text-lead--line-height: 1.55;

  --text-body: clamp(1.0625rem, 1rem + 0.25vw, 1.125rem);
  --text-body--line-height: 1.65;

  --text-ui: 1.0625rem;
  --text-ui--line-height: 1.2;
  --text-ui--letter-spacing: 0.005em;
  --text-ui--font-weight: 600;

  --text-eyebrow: 0.875rem;
  --text-eyebrow--line-height: 1.2;
  --text-eyebrow--letter-spacing: 0.14em;
  --text-eyebrow--font-weight: 700;

  --text-meta: 0.9375rem;
  --text-meta--line-height: 1.45;
  --text-meta--font-weight: 500;

  /* ---------- Layout ---------- */
  --container-page: 75rem;          /* max-w-page = 1200px – die EINZIGE Seitenbreite */
  --container-prose-body: 65ch;     /* max-w-prose-body */
  --container-lead: 58ch;           /* max-w-lead */

  /* ---------- Radius ---------- */
  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* ---------- Schatten ---------- */
  --shadow-card: 0 1px 2px rgb(28 26 23 / 0.05), 0 8px 24px -12px rgb(28 26 23 / 0.12);
  --shadow-lift: 0 12px 28px -14px rgb(28 26 23 / 0.35);
  --shadow-bar: 0 -6px 24px -8px rgb(28 26 23 / 0.18);
  --shadow-header: 0 1px 0 #e3dacb;

  /* ---------- Motion ---------- */
  --ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-soft: cubic-bezier(0.4, 0, 1, 1);
}

/* Variablen ohne Utility-Namespace: immer ausgeben */
:root {
  --z-base: 0;
  --z-raised: 10;
  --z-header: 40;
  --z-stickybar: 50;
  --z-menu: 60;
  --z-lightbox: 100;
  --z-skiplink: 110;

  --dur-fast: 150ms;
  --dur-base: 200ms;
  --dur-slow: 300ms;

  --section-y: clamp(4rem, 3rem + 4vw, 7.5rem);
  --header-h: 64px;
}
@media (min-width: 64rem) {
  :root { --header-h: 80px; }
}

@utility py-section {
  padding-block: var(--section-y);
}

@utility container-page {
  width: 100%;
  max-width: var(--container-page);
  margin-inline: auto;
  padding-inline: 1.25rem;
  @media (min-width: 48rem) { padding-inline: 2rem; }
  @media (min-width: 64rem) { padding-inline: 2.5rem; }
}

@layer base {
  html {
    background: var(--color-paper);
    color: var(--color-ink);
    font-family: var(--font-sans);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow-x: clip;
    scroll-padding-top: calc(var(--header-h) + 1.5rem);
  }
  body {
    font-size: var(--text-body);
    line-height: var(--text-body--line-height);
    min-height: 100dvh;
  }
  h1, h2, h3 {
    font-family: var(--font-serif);
    text-wrap: balance;
    hyphens: manual;
  }
  p, li {
    text-wrap: pretty;
    hyphens: auto;
  }

  a, button, [role="button"], summary, label[for] { cursor: pointer; }

  :focus-visible {
    outline: 2px solid var(--color-burgundy);
    outline-offset: 3px;
  }
  .on-night :focus-visible,
  dialog :focus-visible {
    outline-color: var(--color-paper);
  }

  ::selection {
    background: var(--color-burgundy);
    color: var(--color-white);
  }

  img { max-width: 100%; height: auto; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; }
}
```

Verwendungsbeispiele: `bg-paper text-ink`, `font-serif text-display`, `text-eyebrow uppercase text-burgundy`, `container-page`, `max-w-prose-body`, `max-w-lead`, `rounded-md`, `shadow-lift`, `ease-out-soft duration-200`, `z-(--z-header)`, `py-section`.

---

## 13. Abnahme-Checkliste (QA)

- [ ] 375 / 768 / 1024 / 1440: keine horizontale Scrollbar, kein abgeschnittener Text.
- [ ] Kein Foto breiter als seine natürliche Breite (DevTools: gerenderte vs. intrinsische Größe).
- [ ] Alle eingebrannten Galerie-Texte vollständig sichtbar, keine Overlays, keine Filter.
- [ ] Tab-Durchlauf: Skip-Link, sichtbarer Fokus überall, Lightbox mit Fokus-Falle und Fokus-Rückgabe.
- [ ] Alle Klickziele ≥44×44px, `cursor-pointer`.
- [ ] `prefers-reduced-motion` aktiv → keine Bewegung.
- [ ] Nur Farben aus Abschnitt 2, keine Emojis, kein `transition-all`.
- [ ] Sticky-Bar verdeckt keinen Inhalt und blendet beim Abschluss-CTA/Footer aus.

# Der IMMO-FLÜSTERER – Website

Die Website für die Ankaufsberatung von Mag. Ing. Johannes Kirchner in Wien.
Stack: Vue 3 (`<script setup lang="ts">`), Vite, vue-router, Tailwind CSS v4, lucide-vue-next.

## Start & Build

```bash
npm install
npm run dev       # Entwicklungsserver
npm run build     # Type-Check (vue-tsc) + Produktions-Build nach dist/
npm run preview   # lokaler Test des Builds
```

**Hosting:** Die Seite ist eine SPA mit History-Routing. Der Server muss alle unbekannten Pfade auf `index.html` umleiten (SPA-Fallback), sonst liefern `/referenzen` und `/datenschutz` beim direkten Aufruf einen 404.

## Struktur

```
public/
  images/               Fotos (Original-JPG/PNG + WebP mit gleicher Pixelgröße)
  downloads/            Preisliste (PDF)
  favicon*, apple-touch-icon.png, site.webmanifest
src/
  main.ts               Fonts (Fontsource, self-hosted), CSS, Router
  App.vue               Skip-Link, Header, <main>, Footer, Sticky-Kontaktleiste
  styles/main.css       Design-Tokens (@theme) laut DESIGN_RULES.md §12
  router/               Routen, scrollBehavior (Anker mit Header-Offset), Scroll-Helfer
  data/                 Inhalte: Kontakt (zentral), Navigation, Vorteile, Ablauf,
                        Inspektionen, Über mich, Referenzen (+ Filter-Kategorien)
  composables/          useSeo, useStickyBar, useScrollLock, prefersReducedMotion
  components/
    ui/                 BaseButton, BrandIcon, SectionHeader, ResponsiveImage, FilterChip
    layout/             SiteHeader (inkl. Mobile-Menü), NavLink, SiteFooter, StickyContactBar
    home/               Hero, Referenz-Leiste, Nutzen, Ablauf, Galerie + Lightbox,
                        Vorteile (Karten + Gegen-Check), Über mich, YouTube (Klick-zum-Laden)
    references/         ReferenceList (Filter-Chips, Live-Zähler)
    shared/             ContactCta (Abschluss-CTA)
  views/                HomeView, ReferenzenView, DatenschutzView, NotFoundView
  assets/icons/brand/   WhatsApp, Signal, YouTube (Simple Icons, monochrom)
```

Texte und Kontaktdaten stehen in `src/data/`, nicht in den Templates. Telefon, E-Mail,
WhatsApp, Signal, YouTube, Impressum und Preisliste ändert man nur in `src/data/contact.ts`.

## Design

Verbindlich ist **[DESIGN_RULES.md](./DESIGN_RULES.md)**: Farben, Typografie, Abstände, Motion, Komponenten, Bild-Regeln und die QA-Checkliste (§13).
Struktur und Tonalität: `docs/vision.md`. Die Original-Assets in `_legacy-assets/` bleiben unverändert liegen.

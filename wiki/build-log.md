# Build Log – ImmoFluester

Tracking phases executed via forge-build workflow.

## Phase 1: Smart Demo Showcase System & Legal Clarity
- **Branch**: `phase/1-demo-showcase` -> Merged to `main`
- **Work**:
  - Created `src/components/layout/DemoBadge.vue` with Apple-style frosted pill design (inline header, footer, and floating variants).
  - Created `src/components/ui/DemoModal.vue` with accessible native `<dialog>`, `backdrop-filter: blur(6px)`, and clear transparency disclaimer without loud/disruptive warning banners.
  - Created `src/composables/useDemoModal.ts` for clean reactive modal state across all components.
  - Updated `src/components/layout/SiteHeader.vue` to show DemoBadge on desktop and in mobile menu.
  - Updated `src/components/layout/SiteFooter.vue` to integrate DemoBadge and clear legal disclosure pointing to official WKO registration.
  - Added `<meta name="robots" content="noindex, nofollow" />` to `index.html` to prevent search engine indexing of the demo preview.
- **Verification**: `vue-tsc -b && vite build` succeeded with zero errors.

## Phase 2: Animation Opportunities & Motion Polish (/find-animation-opportunities)
- **Branch**: `phase/2-animation-polish` -> Merged to `main`
- **Work**:
  - Implemented tactile feedback (`active:scale-[0.98]`) on buttons (`BaseButton.vue`), filter chips (`FilterChip.vue`), and inspection gallery tiles (`InspectionGallery.vue`).
  - Added smooth transition groups (`<TransitionGroup>`) in `ReferenceList.vue` with 200ms `ease-out-soft` enter and 150ms `ease-in-soft` leave, eliminating jarring list pops.
  - Elevated mobile menu sheet in `SiteHeader.vue` with frosted glass material (`backdrop-blur-md bg-paper/95 border-b border-line`).
  - Added `backdrop-filter: blur(12px)` to Lightbox backdrop in `main.css`.
  - Tuned button transform transition to 160ms for snappy tactile response while preserving strict `prefers-reduced-motion` compliance.
- **Verification**: `vue-tsc -b && vite build` passed. All animations adhere strictly to < 300ms budget.

## Phase 3: Dead-End Elimination & Cross-Platform / Responsive Testing
- **Branch**: `phase/3-testing-deadends` -> Merged to `main`
- **Work**:
  - Verified all routes (`/`, `/referenzen`, `/datenschutz`, `/404`, legacy redirects).
  - Audited and verified all internal anchors (`#ablauf`, `#inspektionen`, `#ueber-mich`, `#kontakt`, `#youtube-einbindung`).
  - Hardened `headerScrollOffset()` in `src/router/scroll.ts` with explicit viewport-aware fallback (104px desktop / 88px mobile) ensuring headers are never clipped under sticky navigation.
  - Verified all external links (`tel:`, `mailto:`, `wa.me`, `signal.me`, YouTube, WKO Firmen A-Z).
  - Verified local PDF download (`/downloads/Preisliste_Ankaufsberatung_2026.pdf`) and 15/15 inspection images (both WebP & JPG formats present).
- **Verification**: Preview server tested via curl; production build passes cleanly.

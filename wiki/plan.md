# Plan: ImmoFluester Apple Design & Demo Polish

Base branch: `main`

## Phase 1: Smart Demo Showcase System & Legal Clarity
- **Goal**: Implement smart, unobtrusive demo indicator & modal with Apple frosted glass styling, plus footer legal disclosure and SEO noindex protection.
- **Verifiable Gate**:
  - `npm run build` succeeds without TypeScript/Vite errors.
  - Demo badge is visible, accessible (keyboard reachable, ARIA attributes), opening an Apple-style dialogue.
  - Esc key and close button smoothly dismiss the dialogue.
  - Footer displays the subtle demo clarification alongside the official WKO link.
- **Work**:
  - Create `src/components/layout/DemoBadge.vue` and `src/components/ui/DemoModal.vue`.
  - Wire into `SiteHeader.vue` and `SiteFooter.vue`.
  - Add SEO robots noindex configuration to `index.html` and `useSeo.ts`.
- **Branch**: `phase/1-demo-showcase`

## Phase 2: Animation Opportunities & Motion Polish (/find-animation-opportunities)
- **Goal**: Implement purposeful, restrained animations passing all 4 gates of `/find-animation-opportunities`.
- **Verifiable Gate**:
  - Zero jank, all durations under 300ms.
  - Press feedback (`active:scale-[0.98]` with crisp release) on all interactive buttons and chips.
  - Reference filter list transitions (`<TransitionGroup>`) with graceful opacity/transform bridge.
  - Lightbox & mobile menu enhanced with smooth backdrop-filter and spring curves.
  - Strict respect for `prefers-reduced-motion`.
- **Work**:
  - Audit and apply tactile `:active` state across `BaseButton.vue`, `FilterChip.vue`, and gallery tiles.
  - Integrate smooth transition in `ReferenceList.vue` for filtered elements.
  - Polish mobile menu transition in `SiteHeader.vue` with backdrop blur and subtle spring feel.
  - Ensure lightbox backdrop in `main.css` has `backdrop-filter: blur(8px)`.
- **Branch**: `phase/2-animation-polish`

## Phase 3: Dead-End Elimination & Cross-Platform / Responsive Testing
- **Goal**: Verify every single interaction, link, button, modal, route, and responsive breakpoint.
- **Verifiable Gate**:
  - No broken links, 404s, or dead ends across all pages (`/`, `/referenzen`, `/datenschutz`, `/404`).
  - Scroll-to-hash behaves flawlessly across desktop and mobile viewports with correct header offset.
  - Responsive audit at 375px, 768px, 1024px, 1440px with zero horizontal overflow.
  - Full production build passes with `vue-tsc -b && vite build`.
- **Work**:
  - Test and refine anchor scroll handler in `src/router/scroll.ts`.
  - Validate all download paths, tel links, email links, and WhatsApp triggers.
  - Run full test suite / audit checks.
- **Branch**: `phase/3-testing-deadends`

## Phase 4: Final Documentation & Git Synchronization
- **Goal**: Merge changes, document in README.md/CHANGELOG.md, push to GitHub fork.
- **Verifiable Gate**:
  - All phase commits merged into `main`.
  - `git push origin main` successful.
  - Production build clean and tested.
- **Branch**: `main`

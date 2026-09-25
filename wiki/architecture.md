# Architecture – Der IMMO-FLÜSTERER (Website)

## Overview
High-end, accessible, and fast web presence for Mag. Ing. Johannes Kirchner (Ankaufsberatung Wien).
Stack: Vue 3 (`<script setup lang="ts">`), Vite 8, Vue Router 5, Tailwind CSS v4, Lucide Icons, Self-hosted Typography (Newsreader Variable + Source Sans 3 Variable via Fontsource).

## Core Design Philosophy (Apple Design + Wiener Baumeister)
- **Palette**: Swiss-Grid clarity on warm Altbau paper (`#faf7f2`), crisp typography in deep ink (`#1c1a17`), single purposeful action color Burgundy (`#8a2a22`), forest green (`#2e5a3c`) for certified signals.
- **Apple Design HIG Principles**:
  - Purpose, Agency, Responsibility, Familiarity, Flexibility, Simplicity, Craft, Delight.
  - WCAG AAA contrast for main text (min. 4.5:1, up to 17:1 on paper).
  - Minimum 44x44px touch targets on mobile and desktop.
  - Liquid Glass: subtle frosted backdrops on elevated overlays (mobile menu, modals, demo indicator) using `backdrop-blur`.
  - Zero layout shifts, no slow bloated animations, strict adherence to `prefers-reduced-motion`.
- **Smart Demo Showcase**:
  - Non-intrusive, elegant badge (`Konzept-Vorschau`) with frosted glass material.
  - Interactive sheet/popover explaining the concept status, ensuring legal safety without shouting "DEMO" in neon letters.
  - Clear, compliant imprint and legal footer notes pointing to real WKO registration.

## Technical Architecture
- `src/router/`: Vue Router with custom scrollBehavior (accounting for sticky header offset and instant vs smooth scrolling).
- `src/components/layout/`: SiteHeader (sticky with scroll elevation & mobile menu), SiteFooter, StickyContactBar (mobile bottom bar), DemoBadge (frosted status pill).
- `src/components/home/`: HeroSection, ReferenceStrip, BenefitsSection, ProcessSteps, InspectionGallery, AdvantagesSection, AboutSection, YouTubeSection.
- `src/components/references/`: ReferenceList with reactive category filtering and live counters.
- `src/components/ui/`: BaseButton, FilterChip, SectionHeader, ResponsiveImage, DemoModal.
- `src/composables/`: useSeo, useStickyBar, useScrollLock, useReducedMotion.

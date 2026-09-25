# ADR 001: Smart Demo & Concept Showcase System

## Status
Accepted

## Context
The website is built as an interactive concept showcase / demonstration for Mag. Ing. Johannes Kirchner.
Requirements:
1. Must not break presentation or look unpolished with garish "DEMO" warnings.
2. Legally unambiguous: users and authorities must recognize it is a design concept presentation.
3. Functional: real contact options (phone, WhatsApp, email, WKO Impressum) remain intact and operable.
4. Search engine safety: prevent duplicate content or false indexing with `noindex, nofollow` on demo deployments.

## Decision
- Introduce a refined, Apple-inspired frosted pill badge (`Demo-Vorschau` / `Konzept-Entwurf`) in the header/corner with subtle liquid glass aesthetics (`backdrop-blur-md bg-paper/80 border border-line-strong/30`).
- Clicking or tapping this badge opens an accessible, elegant modal sheet detailing the concept status, scope, and direct legal contact.
- Include a discreet legal note in `SiteFooter.vue` under the legal navigation.
- Add `<meta name="robots" content="noindex, nofollow" />` to safeguard SEO integrity.

## Consequences
- Clean, aesthetic Apple HIG compliance.
- Complete legal safety without sacrificing conversion or aesthetic dignity.

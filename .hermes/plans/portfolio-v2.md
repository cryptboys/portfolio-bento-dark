# Portfolio v2 Refactor Plan

## 1. Bug Fixes & UX
- [ ] Fix: `ProfileCard` hydration for WIB time (use client-side only render).
- [ ] Fix: Remove auto-link in skill pills; convert to static badges.
- [ ] Fix: Trim skills list to 3 clusters: Engineering, AI & LLM, Voice & Audio.
- [ ] Fix: Move `@cryptboys` to Footer; update contact info in ProfileCard.

## 2. Bento Hierarchy
- [ ] Fix: Single "Featured Project" section header for two featured cards.
- [ ] Fix: Move "By the Numbers" to a global `StatsCard` below `AboutCard`.
- [ ] Fix: Simplify `ExperienceCard` to a single vertical timeline with in-line logos.

## 3. Brand & Proof
- [ ] Fix: Add thumbnails + gradient overlay to all project cards.
- [ ] Fix: Add [Copy Email] + [Book 15min Call] buttons to `ContactCta`.
- [ ] Fix: Remove duplicate skills section; consolidate.

## 4. CTA
- [ ] Fix: Add sticky 2x1 CTA card at the bottom.

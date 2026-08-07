# Portfolio v3 — Color & Motion Overhaul

## Phase 1: Color System
- [ ] Update `tailwind.config.ts` — bg-page #080808, bg-card #121212, border #1E1E1E, accent #C6FF00
- [ ] Update `globals.css` — base bg to #080808, add noise texture, add hero radial glow
- [ ] Update `Background.tsx` — radial glow behind hero
- [ ] Update all card components — rounded-[24px] border-[#1E1E1E] bg-[#121212]
- [ ] Update `HeroCard.tsx` — lime accent on button, Available pulse dot lime
- [ ] Update `StatsCard.tsx` — lime accent on metric numbers
- [ ] Update `ContactCta.tsx` — lime primary button, hover lime border

## Phase 2: 4 Motions
- [ ] Fix `ProfileCard.tsx` WIB — remove setNow init, ping conditional
- [ ] `HeroCard.tsx` — add latency ticker under tagline (useMotionValue + useSpring, 172-208ms random)
- [ ] `ProjectsGrid.tsx` — AI Avatar card: 40px waveform bars + typewriter chat bubble
- [ ] `page.tsx` — RAG SaaS featured card: pipeline visualizer with traveling lime dot
- [ ] New `MouseSpotlight.tsx` — fixed radial gradient follows cursor, disabled mobile/reduced-motion

## Phase 3: Verify
- [ ] npm run dev, check visually
- [ ] Deploy Vercel

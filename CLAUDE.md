# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:4200 (auto-reload)
npm run build      # Production build → dist/portafolio/ (prerenders /)
npm run watch      # Dev build with file watching
npm test           # Unit tests via Karma/Jasmine
npm run serve:ssr:portafolio  # Run the SSR server after building (port 4000)
```

Run a single test file:
```bash
npx ng test --include='src/app/services/theme-service.service.spec.ts'
```

## Architecture

**Angular 17 SSR single-page portfolio** implementing design direction **A · Órbita** (canvas: https://claude.ai/artifact/MLsAz8yvyimBzHKqQe2htR, source in `design/src/orbita.mjs` + `design/src/shared.mjs`).

`AppComponent` renders, in order, inside `.page`: `app-header` → `#inicio` (`app-inicio`: hero + "Donde he trabajado" strip) → `#experiencia` (`app-qualification`: timeline + stack + certs) → `#proyectos` (`app-portfolio`) → `#contacto` (`app-contact` CTA + `app-footer`). `app.routes.ts` is empty; nav anchors scroll via `ViewportScroller.scrollToAnchor`.

- `src/app/data/portfolio.data.ts` — all content (profile, stats, employers, jobs, certs, stack, projects). Edit content here, not in templates.
- `src/app/template/icon/icon.component.ts` — `<app-icon name="..." [size]>` with the design's inline SVG icons. FontAwesome is no longer bundled (removed from `angular.json` styles/scripts).
- `src/assets/css/main.scss` — the whole design system as global CSS (tokens, primitives, sections, responsive at 1100/900/480px). Component CSS files are empty except `contact.component.css` (form).
- Theming: every color derives from `--h`/`--c` in OKLCH on `:root`. Palettes (Azul/Morado/Verde/Rosa) live in `interfaces/ThemeInterface.ts`; `ThemeServiceService.setActiveTheme` sets the vars and saves the choice in `localStorage('paleta')`. The nav dots switch it. To add a palette: add a `Theme` and include it in `themes`.
- Fonts: Sora (`--display-font`) + Figtree (`--body-font`), loaded from Google Fonts in `src/index.html`.
- Assets: `assets/img/perfil.webp` (cut-out portrait), `assets/img/stack/*.svg` (stack logos), `assets/pdf/Resume_Vicente_Mori.pdf`.

Unused legacy components still on disk (not imported): `pages/about`, `skill`, `service`, `project`, `testimonial`.

## Content — pending

- GitHub `href` is `#` in `portfolio.data.ts` → set the real URL.
- Project `link` values are `#`.
- Contact: "Escríbeme" reveals the EmailJS form; credentials are still placeholders (`YOUR_SERVICE_ID`, etc.) in `contact.component.ts`, so it won't send until configured. A `mailto:` fallback is shown next to the submit button.

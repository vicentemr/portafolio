// Dirección B — "Consola": a tiled hero on a 12-column grid. Headline,
// portrait, trajectory and stack all live above the fold as tiles, so
// experience and tools are literally the first thing after the title.
import { data, icon, page, paletteDots, socials, flowStrip } from './shared.mjs';

const fonts = 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap';

const css = `
.page { --display-font: 'Geist', 'Segoe UI', system-ui, sans-serif; --body-font: 'Geist', 'Segoe UI', system-ui, sans-serif; --mono: 'Geist Mono', 'Cascadia Mono', Consolas, monospace; overflow-x: clip; }
.mono { font-family: var(--mono); font-variant-numeric: tabular-nums; letter-spacing: 0; }

/* Nav */
.nav { border-bottom: 1px solid var(--line); }
.nav-in { display: flex; align-items: center; justify-content: space-between; gap: 24px; min-height: 72px; }
.brand { display: flex; align-items: center; gap: 12px; font-weight: 600; font-size: 15px; letter-spacing: -0.01em; color: var(--text); }
.brand .mono { font-size: 12px; color: var(--text-3); font-weight: 400; }
.nav-links { display: flex; align-items: center; gap: 28px; }
.nav-links a { font-size: 14px; font-weight: 500; color: var(--text-2); }
.nav-links a:hover, .nav-links a.is-active { color: var(--text); }
.nav-right { display: flex; align-items: center; gap: 12px; }
.nav .btn { min-height: 42px; padding: 0 18px; border-radius: 10px; font-size: 14px; }
.nav-menu { display: none; width: 42px; height: 42px; border-radius: 10px; color: var(--text); align-items: center; justify-content: center; border: 1px solid var(--line); }

/* Bento hero */
.bento { padding-top: 48px; display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); grid-auto-rows: auto; gap: 16px; }
.tile { border: 1px solid var(--line); border-radius: 20px; background: var(--bg-2); transition: border-color 0.25s var(--ease); }
.tile:hover { border-color: var(--line-2); }
.tile-hero { grid-column: 1 / 9; padding: 44px 44px 40px; display: flex; flex-direction: column; justify-content: center; }
.tile-hero h1 { font-size: 52px; font-weight: 600; letter-spacing: -0.03em; line-height: 1.04; max-width: 15ch; }
.tile-hero h1 .mark { color: var(--accent-2); }
.tile-hero .lead { margin-top: 22px; font-size: 17px; line-height: 1.6; color: var(--text-2); max-width: 56ch; }
.tile-hero .actions { margin-top: 30px; display: flex; flex-wrap: wrap; gap: 10px; }

.tile-portrait { grid-column: 9 / 13; grid-row: 1 / 3; position: relative; overflow: hidden; min-height: 560px; background: linear-gradient(180deg, oklch(0.3 calc(var(--c) * 0.55) var(--h)) 0%, oklch(0.2 calc(var(--c) * 0.4) var(--h)) 100%); }
.tile-portrait::after { content: ''; position: absolute; inset: auto 0 0; height: 45%; background: linear-gradient(180deg, transparent, oklch(0.145 0.012 var(--h) / 0.55)); pointer-events: none; }
.tile-portrait img { position: absolute; left: 50%; bottom: 0; height: 86%; width: auto; transform: translateX(-50%); }
.portrait-caption { position: absolute; z-index: 2; left: 24px; top: 24px; right: 24px; display: flex; flex-direction: column; gap: 4px; }
.portrait-caption b { font-weight: 600; font-size: 16px; letter-spacing: -0.01em; }
.portrait-caption span { font-size: 12.5px; color: var(--text-2); }
.portrait-foot { position: absolute; z-index: 2; left: 24px; right: 24px; bottom: 22px; display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; color: var(--text-2); }

.tile-exp { grid-column: 1 / 6; padding: 24px 28px 8px; }
.tile-stack { grid-column: 6 / 9; padding: 24px 24px 24px; display: flex; flex-direction: column; }
.tile-title { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; }
.tile-title h2 { font-size: 17px; font-weight: 600; letter-spacing: -0.015em; }
.tile-title a { font-size: 13px; color: var(--text-3); display: inline-flex; align-items: center; gap: 6px; }
.tile-title a:hover { color: var(--text); }
.exp-row { display: grid; grid-template-columns: 92px minmax(0, 1fr) auto; gap: 16px; align-items: baseline; padding: 11px 0; border-top: 1px solid var(--line); font-size: 14px; }
.exp-row .mono { font-size: 12.5px; color: var(--text-3); }
.exp-row .role { font-weight: 600; color: var(--text); display: flex; align-items: center; gap: 8px; }
.exp-row .role i { width: 7px; height: 7px; border-radius: 50%; background: var(--accent-2); box-shadow: 0 0 0 3px var(--accent-soft); flex: none; }
.exp-row .co { color: var(--text-2); }
.logo-grid { flex: 1; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); grid-auto-rows: minmax(52px, 1fr); gap: 8px; }
.logo-cell { min-height: 52px; display: flex; align-items: center; justify-content: center; border-radius: 12px; border: 1px solid var(--line); background: var(--bg); transition: border-color 0.2s var(--ease), background-color 0.2s var(--ease); }
.logo-cell img { width: 24px; height: 24px; filter: grayscale(1) brightness(1.35); opacity: 0.8; transition: filter 0.25s var(--ease), opacity 0.25s var(--ease); }
.logo-cell:hover { border-color: var(--line-2); background: var(--bg-3); }
.logo-cell:hover img { filter: none; opacity: 1; }

.certs-row { margin-top: 16px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
.cert { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 14px; padding: 20px 22px; border-radius: 16px; border: 1px solid var(--line); background: var(--bg-2); transition: border-color 0.25s var(--ease); }
.cert:hover { border-color: var(--line-2); }
.cert svg { color: var(--accent-2); margin-top: 2px; }
.cert b { display: block; font-weight: 600; font-size: 14.5px; letter-spacing: -0.01em; }
.cert span { display: block; margin-top: 3px; font-size: 13px; color: var(--text-2); }
.cert .mono { display: inline; color: var(--text-3); }

/* Sections */
.section { padding-top: 120px; }
.section-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-bottom: 32px; }
.section h2 { font-size: 36px; letter-spacing: -0.03em; }
.section-head p { color: var(--text-2); font-size: 16px; max-width: 44ch; }
.grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
.card { display: flex; flex-direction: column; padding: 8px; border: 1px solid var(--line); border-radius: 20px; background: var(--bg-2); transition: border-color 0.25s var(--ease), transform 0.25s var(--ease); }
.card:hover { border-color: var(--line-2); transform: translateY(-3px); }
.card-media { display: flex; align-items: center; justify-content: center; min-height: 150px; padding: 24px; border-radius: 13px; background: var(--bg); }
.card-body { display: flex; flex-direction: column; flex: 1; padding: 20px 16px 14px; }
.tags { display: flex; flex-wrap: wrap; gap: 6px; }
.card h3 { margin-top: 14px; font-size: 19px; letter-spacing: -0.02em; }
.card p { margin-top: 10px; font-size: 14.5px; line-height: 1.55; color: var(--text-2); }
.card-link { margin-top: auto; padding-top: 22px; display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--text); }
.card-link svg { transition: transform 0.25s var(--ease); color: var(--accent-2); }
.card:hover .card-link svg { transform: translate(2px, -2px); }

/* Contact */
.cta { margin-top: 120px; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 48px; padding: 56px; border: 1px solid var(--line); border-radius: 24px; background: var(--bg-2); }
.cta h2 { font-size: 40px; letter-spacing: -0.03em; max-width: 16ch; }
.cta p { font-size: 16px; color: var(--text-2); max-width: 46ch; }
.cta .actions { margin-top: 26px; display: flex; flex-wrap: wrap; gap: 10px; }
.cta .socials { margin-top: 28px; display: flex; gap: 10px; }
.footer { margin-top: 56px; padding: 24px 0 40px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 13px; color: var(--text-3); }
.footer a { color: var(--text-3); }
.footer a:hover { color: var(--text); }

/* Responsive */
@media (max-width: 1100px) {
  .tile-hero h1 { font-size: 44px; }
  .tile-exp { grid-column: 1 / 7; }
  .tile-stack { grid-column: 7 / 9; }
  .logo-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (max-width: 900px) {
  .nav-links, .nav .btn-primary, .brand .mono { display: none; }
  .nav-menu { display: inline-flex; }
  .bento { padding-top: 24px; gap: 12px; }
  .tile-hero, .tile-portrait, .tile-exp, .tile-stack { grid-column: 1 / -1; grid-row: auto; }
  .tile-hero { padding: 32px 24px 28px; }
  .tile-hero h1 { font-size: 36px; max-width: none; }
  .tile-hero .lead { font-size: 16px; }
  .tile-portrait { min-height: 420px; }
  .tile-portrait img { height: 82%; }
  .tile-exp { padding: 20px 20px 6px; }
  .exp-row { grid-template-columns: 78px minmax(0, 1fr); }
  .exp-row .co { grid-column: 2; margin-top: -6px; padding-bottom: 2px; }
  .logo-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); grid-auto-rows: 64px; }
  .card-media { padding: 16px; }
  .certs-row { grid-template-columns: minmax(0, 1fr); gap: 12px; }
  .section { padding-top: 80px; }
  .section h2 { font-size: 30px; }
  .grid-3 { grid-template-columns: minmax(0, 1fr); }
  .cta { margin-top: 80px; grid-template-columns: minmax(0, 1fr); gap: 24px; padding: 32px 24px; border-radius: 20px; }
  .cta h2 { font-size: 30px; }
  .footer { flex-direction: column; align-items: flex-start; }
}
`;

const expRows = data.jobs
  .map(
    (j) => `
      <div class="exp-row">
        <span class="mono">${j.years}</span>
        <span class="role">${j.current ? '<i></i>' : ''}${j.role}</span>
        <span class="co">${j.company}</span>
      </div>`,
  )
  .join('');

const logos = data.logos
  .map((l) => `<span class="logo-cell" title="${l.name}"><img src="${l.logo}" alt="${l.name}"></span>`)
  .join('\n        ');

const certs = data.certs
  .map(
    (c) => `
    <div class="cert">${icon.award(22)}<div><b>${c.title}</b><span>${c.org} · <span class="mono">${c.year}</span></span></div></div>`,
  )
  .join('');

const projects = data.projects
  .map(
    (p) => `
      <article class="card">
        <div class="card-media">${flowStrip(p.flow)}</div>
        <div class="card-body">
          <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <a class="card-link" href="#">Ver proyecto ${icon.arrowUpRight(18)}</a>
        </div>
      </article>`,
  )
  .join('');

const body = `
<header class="nav">
  <div class="wrap nav-in">
    <a class="brand" href="#inicio">Vicente Mori <span class="mono">/ NetSuite · Java · Angular</span></a>
    <nav class="nav-links" aria-label="Secciones">
      <a class="is-active" href="#inicio">Inicio</a>
      <a href="#experiencia">Experiencia</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <div class="nav-right">
      ${paletteDots()}
      <a class="btn btn-primary" href="#contacto">Contactar</a>
      <button class="nav-menu" type="button" aria-label="Abrir menú">${icon.menu(22)}</button>
    </div>
  </div>
</header>

<main>
  <section class="wrap" id="inicio">
    <div class="bento">
      <div class="tile tile-hero reveal" style="--i: 0">
        <h1>Soluciones <span class="mark">NetSuite</span> que facturan, integran y escalan.</h1>
        <p class="lead">Soy Vicente Mori, ingeniero de sistemas con más de 5 años implementando NetSuite —facturación electrónica, libros contables PLE e integraciones— con backend en Spring Boot y frontend en Angular.</p>
        <div class="actions">
          <a class="btn btn-primary" href="#contacto">Contáctame ${icon.arrowRight(18)}</a>
          <a class="btn btn-ghost" href="${data.cv}" download="">${icon.download(18)} Descargar CV</a>
        </div>
      </div>

      <div class="tile tile-portrait reveal" style="--i: 1">
        <div class="portrait-caption"><b>Vicente Mori</b><span>Desarrollador NetSuite · Full Stack</span></div>
        <img src="perfil.webp" alt="Retrato de Vicente Mori">
        <div class="portrait-foot"><span>Lima, Perú</span><span class="mono">GMT-5</span></div>
      </div>

      <div class="tile tile-exp reveal" style="--i: 2" id="experiencia">
        <div class="tile-title">
          <h2>Trayectoria</h2>
          <a href="${data.linkedin}" target="_blank" rel="noreferrer">Ver en LinkedIn ${icon.arrowUpRight(14)}</a>
        </div>${expRows}
      </div>

      <div class="tile tile-stack reveal" style="--i: 3">
        <div class="tile-title"><h2>Stack</h2></div>
        <div class="logo-grid">
        ${logos}
        </div>
      </div>
    </div>

    <div class="certs-row reveal" style="--i: 4">${certs}
    </div>
  </section>

  <section class="section wrap" id="proyectos">
    <div class="section-head">
      <h2>Proyectos</h2>
      <p>Trabajo reciente en NetSuite y Angular. El grid crece con cada nuevo caso.</p>
    </div>
    <div class="grid-3">${projects}
    </div>
  </section>

  <section class="wrap" id="contacto">
    <div class="cta">
      <h2>¿Tienes un proyecto NetSuite en mente?</h2>
      <div>
        <p>Cuéntame qué necesitas —facturación electrónica, libros contables, integraciones o una app a medida— y lo conversamos.</p>
        <div class="actions">
          <a class="btn btn-primary" href="#contacto">${icon.mail(18)} Escríbeme</a>
          <a class="btn btn-ghost" href="${data.linkedin}" target="_blank" rel="noreferrer">LinkedIn ${icon.arrowUpRight(18)}</a>
        </div>
        <div class="socials">${socials()}
        </div>
      </div>
    </div>
    <footer class="footer">
      <span>© 2026 Vicente Mori</span>
      <span class="mono">Angular 17 · SSR</span>
    </footer>
  </section>
</main>
`;

export default page({ title: 'Consola', fonts, css, body });

// Dirección C — "Firma": typographic and editorial. The name is the hero,
// the portrait sits in a monochrome panel that regains colour on hover,
// experience reads as an editorial list, and projects lead with a featured
// case. Fewest boxes of the three.
import { data, icon, page, paletteDots, socials, flowStrip } from './shared.mjs';

const fonts = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Hanken+Grotesk:wght@400;500;600&display=swap';

const css = `
.page { --display-font: 'Bricolage Grotesque', 'Segoe UI', system-ui, sans-serif; --body-font: 'Hanken Grotesk', 'Segoe UI', system-ui, sans-serif; overflow-x: clip; }
h1, h2, h3 { font-optical-sizing: auto; }

/* Nav */
.nav-in { display: flex; align-items: center; justify-content: space-between; gap: 24px; min-height: 84px; }
.brand { font-family: var(--display-font); font-weight: 700; font-size: 19px; letter-spacing: -0.02em; color: var(--text); }
.nav-links { display: flex; align-items: center; gap: 28px; }
.nav-links a { font-size: 14.5px; font-weight: 500; color: var(--text-2); }
.nav-links a:hover, .nav-links a.is-active { color: var(--text); }
.nav-links a.is-cta { color: var(--accent-2); display: inline-flex; align-items: center; gap: 6px; }
.nav-links a.is-cta:hover { color: var(--text); }
.nav-right { display: flex; align-items: center; gap: 20px; }
.nav-menu { display: none; width: 44px; height: 44px; border-radius: 12px; color: var(--text); align-items: center; justify-content: center; border: 1px solid var(--line); }

/* Hero */
.hero { padding: 72px 0 0; }
.hero h1 { font-size: clamp(44px, 6.4vw, 88px); font-weight: 800; letter-spacing: -0.035em; line-height: 0.98; }
.hero h1 span { display: block; color: var(--text-3); font-weight: 600; }
.hero-grid { margin-top: 44px; display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: 64px; align-items: start; }
.hero .lead { font-size: 21px; line-height: 1.5; color: var(--text-2); max-width: 44ch; }
.facts { margin-top: 28px; display: flex; flex-wrap: wrap; gap: 10px 28px; font-size: 14.5px; color: var(--text-3); }
.facts li { display: flex; align-items: center; gap: 10px; }
.facts li::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--accent-2); }
.hero .actions { margin-top: 36px; display: flex; flex-wrap: wrap; align-items: center; gap: 12px; }
.hero .actions .btn { min-height: 52px; padding: 0 24px; }
.hero .socials { margin-left: 8px; display: flex; gap: 8px; }
.hero .socials .social { width: 40px; height: 40px; border-radius: 10px; }

.panel { position: relative; height: 540px; border-radius: 20px; overflow: hidden; background: linear-gradient(160deg, oklch(0.34 calc(var(--c) * 0.5) var(--h)) 0%, oklch(0.19 calc(var(--c) * 0.35) var(--h)) 100%); }
.panel::after { content: ''; position: absolute; inset: auto 0 0; height: 40%; background: linear-gradient(180deg, transparent, oklch(0.12 0.012 var(--h) / 0.7)); pointer-events: none; }
.panel img { position: absolute; left: 50%; bottom: 0; height: 92%; width: auto; transform: translateX(-50%); filter: grayscale(1) contrast(1.05) brightness(0.96); transition: filter 0.6s var(--ease); }
.panel:hover img { filter: none; }
.panel-foot { position: absolute; z-index: 2; left: 22px; right: 22px; bottom: 20px; display: flex; justify-content: space-between; gap: 12px; font-size: 13px; color: var(--text-2); }
.panel-foot b { font-weight: 600; color: var(--text); }

/* Sections */
.section { padding-top: 140px; }
.section-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-bottom: 40px; }
.section h2 { font-size: 48px; font-weight: 700; letter-spacing: -0.03em; }
.section-head p { color: var(--text-2); font-size: 17px; max-width: 44ch; }

.rows { border-top: 1px solid var(--line); }
.row { display: grid; grid-template-columns: 180px minmax(0, 1.3fr) minmax(0, 1fr); gap: 24px; align-items: baseline; padding: 26px 0; border-bottom: 1px solid var(--line); transition: padding-left 0.3s var(--ease); }
.row:hover { padding-left: 8px; }
.row .years { font-size: 14.5px; color: var(--text-3); font-variant-numeric: tabular-nums; }
.row .role { font-family: var(--display-font); font-weight: 600; font-size: 24px; letter-spacing: -0.02em; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
.row .co { font-size: 16px; color: var(--text-2); }

.tools { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 64px; align-items: start; }
.tools p { margin-top: 16px; color: var(--text-2); font-size: 17px; max-width: 34ch; }
.stack-group + .stack-group { margin-top: 24px; }
.stack-group h3 { font-family: var(--body-font); font-size: 13px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--text-3); margin-bottom: 10px; }
.stack-list { display: flex; flex-wrap: wrap; gap: 8px; }
.certs { margin-top: 56px; border-top: 1px solid var(--line); }
.certs .row { grid-template-columns: 180px minmax(0, 1.3fr) minmax(0, 1fr); padding: 18px 0; }
.certs .row .role { font-size: 17px; font-family: var(--body-font); font-weight: 600; letter-spacing: -0.01em; }

/* Projects */
.projects { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
.card { display: flex; flex-direction: column; gap: 22px; padding: 28px; border: 1px solid var(--line); border-radius: 20px; background: var(--bg-2); transition: border-color 0.25s var(--ease), background-color 0.25s var(--ease), transform 0.25s var(--ease); }
.card:hover { border-color: var(--line-2); background: var(--bg-3); transform: translateY(-3px); }
.card.is-featured { grid-column: 1 / -1; display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); align-items: center; gap: 48px; padding: 40px; }
.card-media { display: flex; align-items: center; justify-content: center; min-height: 128px; padding: 22px; border-radius: 14px; background: var(--bg); }
.card.is-featured .card-media { min-height: 220px; }
.tags { display: flex; flex-wrap: wrap; gap: 6px; }
.card h3 { margin-top: 16px; font-size: 28px; font-weight: 600; letter-spacing: -0.025em; }
.card.is-featured h3 { font-size: 38px; }
.card p { margin-top: 12px; font-size: 16px; line-height: 1.55; color: var(--text-2); max-width: 50ch; }
.card-link { margin-top: 20px; display: inline-flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 600; color: var(--text); }
.card-link svg { transition: transform 0.25s var(--ease); color: var(--accent-2); }
.card:hover .card-link svg { transform: translate(2px, -2px); }

/* Contact */
.cta { margin-top: 140px; padding-top: 56px; border-top: 1px solid var(--line); display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: 48px; align-items: end; }
.cta h2 { font-size: clamp(48px, 6.4vw, 88px); font-weight: 800; letter-spacing: -0.035em; line-height: 0.98; }
.cta p { font-size: 17px; color: var(--text-2); max-width: 40ch; }
.cta .actions { margin-top: 28px; display: flex; flex-wrap: wrap; gap: 12px; }
.cta .actions .btn { min-height: 52px; padding: 0 24px; }
.cta .socials { margin-top: 28px; display: flex; gap: 8px; }
.footer { margin-top: 96px; padding: 24px 0 40px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 14px; color: var(--text-3); }
.footer a { color: var(--text-3); }
.footer a:hover { color: var(--text); }

/* Responsive */
@media (max-width: 1100px) {
  .hero-grid { grid-template-columns: minmax(0, 1fr) 400px; gap: 40px; }
  .panel { height: 480px; }
  .tools { gap: 40px; }
}
@media (max-width: 900px) {
  .nav-links { display: none; }
  .nav-menu { display: inline-flex; }
  .nav-in { min-height: 72px; }
  .hero { padding-top: 40px; }
  .hero-grid { margin-top: 36px; grid-template-columns: minmax(0, 1fr); gap: 40px; }
  .hero .lead { font-size: 18px; }
  .panel { height: 420px; }
  .section { padding-top: 88px; }
  .section h2 { font-size: 36px; }
  .row { grid-template-columns: minmax(0, 1fr); gap: 4px; padding: 20px 0; }
  .row .role { font-size: 20px; }
  .certs .row { grid-template-columns: minmax(0, 1fr); gap: 2px; }
  .tools { grid-template-columns: minmax(0, 1fr); gap: 32px; }
  .projects { grid-template-columns: minmax(0, 1fr); gap: 14px; }
  .card, .card.is-featured { display: flex; padding: 22px; gap: 18px; }
  .card.is-featured .card-media { min-height: 128px; }
  .card h3, .card.is-featured h3 { font-size: 24px; }
  .card-media { padding: 16px; }
  .cta { margin-top: 88px; grid-template-columns: minmax(0, 1fr); gap: 24px; padding-top: 40px; }
  .footer { margin-top: 64px; flex-direction: column; align-items: flex-start; }
}
`;

const rows = data.jobs
  .map(
    (j) => `
      <div class="row">
        <span class="years">${j.dates}</span>
        <span class="role">${j.role}${j.current ? '<span class="tag">Actual</span>' : ''}</span>
        <span class="co">${j.company}</span>
      </div>`,
  )
  .join('');

const stack = data.stack
  .map(
    (g) => `
        <div class="stack-group">
          <h3>${g.group}</h3>
          <div class="stack-list">
            ${g.items.map((it) => `<span class="chip"><img src="${it.logo}" alt="">${it.name}</span>`).join('\n            ')}
          </div>
        </div>`,
  )
  .join('');

const certRows = [...data.certs, { title: data.education.title, org: data.education.org, year: data.education.year }]
  .sort((a, b) => Number(b.year) - Number(a.year))
  .map(
    (c) => `
      <div class="row">
        <span class="years">${c.year}</span>
        <span class="role">${c.title}</span>
        <span class="co">${c.org}</span>
      </div>`,
  )
  .join('');

const projectCard = (p, featured) => `
      <article class="card${featured ? ' is-featured' : ''}">
        ${featured ? '' : `<div class="card-media">${flowStrip(p.flow)}</div>`}
        <div>
          <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <a class="card-link" href="#">Ver proyecto ${icon.arrowUpRight(18)}</a>
        </div>
        ${featured ? `<div class="card-media">${flowStrip(p.flow)}</div>` : ''}
      </article>`;

const projects = data.projects.map((p, i) => projectCard(p, i === 0)).join('');

const body = `
<header class="wrap nav-in">
  <a class="brand" href="#inicio">Vicente Mori</a>
  <div class="nav-right">
    <nav class="nav-links" aria-label="Secciones">
      <a class="is-active" href="#inicio">Inicio</a>
      <a href="#experiencia">Experiencia</a>
      <a href="#proyectos">Proyectos</a>
      <a class="is-cta" href="#contacto">Contacto ${icon.arrowUpRight(16)}</a>
    </nav>
    ${paletteDots()}
    <button class="nav-menu" type="button" aria-label="Abrir menú">${icon.menu(22)}</button>
  </div>
</header>

<main>
  <section class="hero wrap" id="inicio">
    <h1 class="reveal" style="--i: 0">Vicente Mori,<span>desarrollador NetSuite.</span></h1>
    <div class="hero-grid">
      <div>
        <p class="lead reveal" style="--i: 1">${data.description}</p>
        <ul class="facts reveal" style="--i: 2">
          <li>Más de 5 años en NetSuite</li>
          <li>10+ proyectos entregados</li>
          <li>3 certificaciones</li>
        </ul>
        <div class="actions reveal" style="--i: 3">
          <a class="btn btn-primary" href="#contacto">Contáctame ${icon.arrowRight(18)}</a>
          <a class="btn btn-ghost" href="#proyectos">Ver proyectos</a>
          <div class="socials">${socials()}
          </div>
        </div>
      </div>
      <div class="panel reveal" style="--i: 2">
        <img src="perfil.webp" alt="Retrato de Vicente Mori">
        <div class="panel-foot"><span><b>Ingeniería de Sistemas</b> · UNMSM</span><span>Lima, Perú</span></div>
      </div>
    </div>
  </section>

  <section class="section wrap" id="experiencia">
    <div class="section-head">
      <h2>Experiencia</h2>
      <a class="btn-text" href="${data.cv}" download="">${icon.download(18)} Descargar CV</a>
    </div>
    <div class="rows">${rows}
    </div>
  </section>

  <section class="section wrap">
    <div class="tools">
      <div>
        <h2>Herramientas</h2>
        <p>El stack con el que entrego: NetSuite en el centro, Java y Spring Boot detrás, Angular al frente.</p>
      </div>
      <div>${stack}
      </div>
    </div>
    <div class="certs">${certRows}
    </div>
  </section>

  <section class="section wrap" id="proyectos">
    <div class="section-head">
      <h2>Proyectos</h2>
      <p>Trabajo reciente en NetSuite y Angular. El grid crece con cada nuevo caso.</p>
    </div>
    <div class="projects">${projects}
    </div>
  </section>

  <section class="wrap" id="contacto">
    <div class="cta">
      <h2>Hablemos.</h2>
      <div>
        <p>Cuéntame qué necesitas —facturación electrónica, libros contables, integraciones o una app a medida— y lo conversamos.</p>
        <div class="actions">
          <a class="btn btn-primary" href="#contacto">${icon.mail(18)} Escríbeme</a>
          <a class="btn btn-ghost" href="${data.cv}" download="">${icon.download(18)} Descargar CV</a>
        </div>
        <div class="socials">${socials()}
        </div>
      </div>
    </div>
    <footer class="footer">
      <span>© 2026 Vicente Mori</span>
      <a href="${data.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
    </footer>
  </section>
</main>
`;

export default page({ title: 'Firma', fonts, css, body });

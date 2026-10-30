// Dirección A — "Órbita": the reference's composition, executed with more
// discipline. Pill nav, two-column hero with the portrait rising out of a
// luminous disc and three stat chips in orbit, proof strip, experience +
// stack side by side, project grid, closing CTA.
import { data, icon, page, paletteDots, socials, flowStrip } from './shared.mjs';

const fonts = 'https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Figtree:wght@400;500;600&display=swap';

const css = `
.page { --display-font: 'Sora', 'Segoe UI', system-ui, sans-serif; --body-font: 'Figtree', 'Segoe UI', system-ui, sans-serif; overflow-x: clip; }

/* Nav */
.nav { padding-top: 24px; }
.nav-pill { display: flex; align-items: center; justify-content: space-between; gap: 24px; min-height: 64px; padding: 8px 8px 8px 24px; border: 1px solid var(--line); border-radius: 999px; background: var(--bg-2); }
.brand { font-family: var(--display-font); font-weight: 600; font-size: 16px; letter-spacing: -0.01em; color: var(--text); }
.nav-links { display: flex; align-items: center; gap: 32px; }
.nav-links a { font-size: 14px; font-weight: 500; color: var(--text-2); }
.nav-links a:hover, .nav-links a.is-active { color: var(--text); }
.nav-right { display: flex; align-items: center; gap: 12px; }
.nav .btn { border-radius: 999px; }
.nav-menu { display: none; width: 48px; height: 48px; border-radius: 999px; color: var(--text); align-items: center; justify-content: center; border: 1px solid var(--line); }

/* Hero */
.hero { padding: 88px 0 64px; display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr); gap: 48px; align-items: center; }
.hero h1 { font-size: 56px; font-weight: 700; letter-spacing: -0.025em; line-height: 1.06; }
.hero h1 .intro { display: block; font-size: 30px; font-weight: 500; letter-spacing: -0.015em; color: var(--text-2); margin-bottom: 14px; }
.hero h1 .mark { color: var(--accent-2); }
.hero .lead { margin-top: 26px; font-size: 18px; line-height: 1.6; color: var(--text-2); max-width: 50ch; }
.hero .actions { margin-top: 36px; display: flex; flex-wrap: wrap; gap: 12px; }
.hero .actions .btn { border-radius: 999px; min-height: 52px; padding: 0 26px; }

.stage { --d: 420px; --stage-h: 600px; position: relative; width: 480px; height: var(--stage-h); margin-left: auto; }
.stage::before { content: ''; position: absolute; inset: -140px -200px -160px; background: radial-gradient(closest-side at 50% 62%, var(--accent-glow), transparent 72%); pointer-events: none; }
.disc { position: absolute; left: calc(50% - var(--d) / 2); bottom: 0; width: var(--d); height: var(--d); border-radius: 50%; background: radial-gradient(circle at 50% 30%, oklch(0.62 var(--c) var(--h)), oklch(0.5 var(--c) var(--h)) 62%, oklch(0.42 calc(var(--c) * 0.9) var(--h)) 100%); }
.mask { position: absolute; left: calc(50% - var(--d) / 2); bottom: 0; width: var(--d); height: var(--stage-h); border-radius: 0 0 calc(var(--d) / 2) calc(var(--d) / 2); overflow: hidden; }
.mask img { position: absolute; left: 50%; bottom: 0; height: var(--stage-h); width: auto; transform: translateX(-50%); filter: drop-shadow(0 18px 28px oklch(0 0 0 / 0.35)); }
.stat { position: absolute; z-index: 2; display: flex; flex-direction: column; gap: 2px; padding: 14px 18px 13px; border-radius: 14px; border: 1px solid var(--line-2); background: oklch(0.2 0.014 var(--h) / 0.92); box-shadow: 0 16px 32px -12px oklch(0 0 0 / 0.5); }
.stat b { font-family: var(--display-font); font-weight: 600; font-size: 26px; letter-spacing: -0.02em; line-height: 1; color: var(--text); }
.stat span { font-size: 13px; color: var(--text-2); white-space: nowrap; }
.stat-1 { top: 44px; right: -12px; }
.stat-2 { top: 222px; left: -28px; }
.stat-3 { bottom: 74px; right: -4px; }

/* Proof strip */
.proof { margin-top: 32px; padding: 32px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); display: flex; align-items: center; gap: 40px; flex-wrap: wrap; }
.proof .label { font-size: 14px; color: var(--text-3); white-space: nowrap; }
.proof ul { display: flex; flex: 1; justify-content: space-between; flex-wrap: wrap; gap: 20px 40px; }
.proof li { font-family: var(--display-font); font-weight: 600; font-size: 17px; letter-spacing: -0.01em; color: var(--text-3); transition: color 0.2s var(--ease); }
.proof li:hover { color: var(--text); }

/* Sections */
.section { padding: 120px 0 0; }
.section-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; margin-bottom: 40px; }
.section h2 { font-size: 40px; letter-spacing: -0.025em; }
.section-head p { color: var(--text-2); font-size: 17px; max-width: 44ch; }

.two-col { display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: 72px; align-items: start; }

.tl { margin-top: 8px; }
.tl-item { display: grid; grid-template-columns: 24px minmax(0, 1fr); gap: 20px; padding: 22px 0; border-bottom: 1px solid var(--line); position: relative; }
.tl-item:last-child { border-bottom: 0; }
.tl-marker { position: relative; display: block; }
.tl-marker::before { content: ''; position: absolute; left: 11px; top: 26px; bottom: -22px; width: 1px; background: var(--line-2); }
.tl-item:last-child .tl-marker::before { display: none; }
.tl-marker::after { content: ''; position: absolute; left: 6px; top: 8px; width: 11px; height: 11px; border-radius: 50%; background: var(--bg-3); border: 1px solid var(--line-2); }
.tl-item.is-current .tl-marker::after { background: var(--accent); border-color: var(--accent-2); box-shadow: 0 0 0 4px var(--accent-soft); }
.tl-role { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; font-size: 19px; font-weight: 600; letter-spacing: -0.015em; font-family: var(--display-font); }
.tl-meta { margin-top: 6px; font-size: 14.5px; color: var(--text-2); }
.tl-meta b { font-weight: 600; color: var(--text-2); }

.stack-group { margin-top: 28px; }
.stack-group:first-of-type { margin-top: 8px; }
.stack-group h3 { font-family: var(--body-font); font-size: 13px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--text-3); margin-bottom: 12px; }
.stack-list { display: flex; flex-wrap: wrap; gap: 8px; }

.certs { margin-top: 40px; padding: 24px; border: 1px solid var(--line); border-radius: 16px; background: var(--bg-2); }
.certs h3 { font-family: var(--body-font); font-size: 13px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--text-3); }
.certs ul { margin-top: 14px; display: grid; gap: 14px; }
.certs li { display: grid; grid-template-columns: 20px minmax(0, 1fr) auto; gap: 12px; align-items: start; font-size: 14.5px; }
.certs li svg { color: var(--accent-2); margin-top: 1px; }
.certs li span { color: var(--text-2); }
.certs li b { font-weight: 600; color: var(--text); display: block; }
.certs li em { font-style: normal; color: var(--text-3); font-variant-numeric: tabular-nums; }

/* Projects */
.grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
.card { display: flex; flex-direction: column; padding: 8px; border: 1px solid var(--line); border-radius: 16px; background: var(--bg-2); transition: border-color 0.25s var(--ease), transform 0.25s var(--ease), background-color 0.25s var(--ease); }
.card:hover { border-color: var(--line-2); transform: translateY(-3px); background: var(--bg-3); }
.card-media { display: flex; align-items: center; justify-content: center; min-height: 156px; padding: 24px; border-radius: 10px; background: var(--bg); }
.card-body { display: flex; flex-direction: column; flex: 1; padding: 20px 14px 14px; }
.tags { display: flex; flex-wrap: wrap; gap: 6px; }
.card h3 { margin-top: 14px; font-size: 20px; letter-spacing: -0.02em; }
.card p { margin-top: 10px; font-size: 15px; line-height: 1.55; color: var(--text-2); }
.card-link { margin-top: auto; padding-top: 22px; display: inline-flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 600; color: var(--text); }
.card-link svg { transition: transform 0.25s var(--ease); color: var(--accent-2); }
.card:hover .card-link svg { transform: translate(2px, -2px); }

/* Contact */
.cta { margin-top: 120px; padding: 72px 48px; border: 1px solid var(--line); border-radius: 24px; background: var(--bg-2); text-align: center; display: flex; flex-direction: column; align-items: center; }
.cta h2 { font-size: 44px; letter-spacing: -0.025em; max-width: 18ch; }
.cta p { margin-top: 18px; font-size: 17px; color: var(--text-2); max-width: 48ch; }
.cta .actions { margin-top: 32px; display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
.cta .actions .btn { border-radius: 999px; min-height: 52px; padding: 0 26px; }
.cta .socials { margin-top: 36px; display: flex; gap: 10px; }
.footer { margin-top: 64px; padding: 28px 0 40px; border-top: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 14px; color: var(--text-3); }
.footer a { color: var(--text-3); }
.footer a:hover { color: var(--text); }

/* Responsive */
@media (max-width: 1100px) {
  .hero { grid-template-columns: minmax(0, 1fr) 440px; gap: 32px; }
  .stage { width: 440px; }
  .two-col { gap: 48px; }
}
@media (max-width: 900px) {
  .nav-links, .nav .btn-primary { display: none; }
  .nav-menu { display: inline-flex; }
  .nav-pill { padding: 8px 8px 8px 20px; }
  .hero { grid-template-columns: minmax(0, 1fr); gap: 48px; padding: 56px 0 40px; }
  .hero h1 { font-size: 40px; }
  .hero h1 .intro { font-size: 22px; margin-bottom: 10px; }
  .hero .lead { font-size: 17px; }
  .stage { --d: 300px; --stage-h: 430px; width: 100%; max-width: 400px; margin-inline: auto; }
  .stat { padding: 11px 14px 10px; border-radius: 12px; }
  .stat b { font-size: 21px; }
  .stat span { font-size: 12px; }
  .stat-1 { top: 18px; right: 0; }
  .stat-2 { top: 160px; left: 0; }
  .stat-3 { bottom: 48px; right: 0; }
  .proof { flex-direction: column; align-items: flex-start; gap: 14px; padding: 24px 0; }
  .proof ul { gap: 12px 24px; justify-content: flex-start; }
  .proof li { font-size: 15px; }
  .section { padding-top: 80px; }
  .section h2 { font-size: 32px; }
  .two-col { grid-template-columns: minmax(0, 1fr); gap: 56px; }
  .grid-3 { grid-template-columns: minmax(0, 1fr); }
  .cta { margin-top: 80px; padding: 48px 24px; border-radius: 20px; }
  .cta h2 { font-size: 32px; max-width: none; }
  .card-media { padding: 16px; }
  .footer { flex-direction: column; align-items: flex-start; }
}
`;

const timeline = data.jobs
  .map(
    (j) => `
      <li class="tl-item${j.current ? ' is-current' : ''}">
        <span class="tl-marker"></span>
        <div>
          <div class="tl-role">${j.role}${j.current ? '<span class="tag">Actual</span>' : ''}</div>
          <div class="tl-meta"><b>${j.company}</b> · ${j.dates}</div>
        </div>
      </li>`,
  )
  .join('');

const stack = data.stack
  .map(
    (g) => `
      <div class="stack-group">
        <h3>${g.group}</h3>
        <div class="stack-list">
          ${g.items.map((it) => `<span class="chip"><img src="${it.logo}" alt="">${it.name}</span>`).join('\n          ')}
        </div>
      </div>`,
  )
  .join('');

const certs = data.certs
  .map(
    (c) => `
        <li>${icon.award(20)}<span><b>${c.title}</b>${c.org}</span><em>${c.year}</em></li>`,
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
<header class="nav wrap">
  <div class="nav-pill">
    <a class="brand" href="#inicio">Vicente Mori</a>
    <nav class="nav-links" aria-label="Secciones">
      <a class="is-active" href="#inicio">Inicio</a>
      <a href="#experiencia">Experiencia</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <div class="nav-right">
      ${paletteDots()}
      <a class="btn btn-primary" href="#contacto">Hablemos</a>
      <button class="nav-menu" type="button" aria-label="Abrir menú">${icon.menu(22)}</button>
    </div>
  </div>
</header>

<main>
  <section class="hero wrap" id="inicio">
    <div>
      <h1 class="reveal" style="--i: 0">
        <span class="intro">Hola, soy Vicente Mori.</span>
        Construyo soluciones <span class="mark">NetSuite</span> que facturan, integran y escalan.
      </h1>
      <p class="lead reveal" style="--i: 1">${data.description}</p>
      <div class="actions reveal" style="--i: 2">
        <a class="btn btn-primary" href="#contacto">Contáctame ${icon.arrowRight(18)}</a>
        <a class="btn btn-ghost" href="#proyectos">Ver proyectos</a>
      </div>
    </div>
    <div class="stage reveal" style="--i: 1">
      <div class="disc"></div>
      <div class="mask"><img src="perfil.webp" alt="Retrato de Vicente Mori"></div>
      <div class="stat stat-1 reveal" style="--i: 4"><b>03+</b><span>Certificaciones</span></div>
      <div class="stat stat-2 reveal" style="--i: 3"><b>05+</b><span>Años de experiencia</span></div>
      <div class="stat stat-3 reveal" style="--i: 5"><b>10+</b><span>Proyectos entregados</span></div>
    </div>
  </section>

  <div class="wrap">
    <div class="proof">
      <span class="label">Donde he trabajado</span>
      <ul>${data.employers.map((e) => `<li>${e}</li>`).join('')}</ul>
    </div>
  </div>

  <section class="section wrap" id="experiencia">
    <div class="two-col">
      <div>
        <div class="section-head">
          <h2>Experiencia</h2>
          <a class="btn-text" href="${data.cv}" download="">${icon.download(18)} Descargar CV</a>
        </div>
        <ul class="tl">${timeline}
        </ul>
      </div>
      <div>
        <div class="section-head">
          <h2>Herramientas</h2>
        </div>
        ${stack}
        <div class="certs">
          <h3>Certificaciones</h3>
          <ul>${certs}
          </ul>
        </div>
      </div>
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
      <p>Cuéntame qué necesitas —facturación electrónica, libros contables, integraciones o una app a medida— y lo conversamos.</p>
      <div class="actions">
        <a class="btn btn-primary" href="#contacto">${icon.mail(18)} Escríbeme</a>
        <a class="btn btn-ghost" href="${data.cv}" download="">${icon.download(18)} Descargar CV</a>
      </div>
      <div class="socials">${socials()}
      </div>
    </div>
    <footer class="footer">
      <span>© 2026 Vicente Mori · Lima, Perú</span>
      <a href="${data.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
    </footer>
  </section>
</main>
`;

export default page({ title: 'Órbita', fonts, css, body });

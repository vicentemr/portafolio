// Shared material for the three portfolio directions: real content, palette
// system, icons and the palette-switch logic. Each direction file composes
// its own body + CSS on top of this.

export const data = {
  name: 'Vicente Mori',
  linkedin: 'https://www.linkedin.com/in/vicente-mori-343717179/',
  github: '#',
  instagram: 'https://www.instagram.com/vicentemori/',
  cv: 'assets/pdf/Resume_Vicente_Mori.pdf',
  description:
    'Más de 5 años implementando NetSuite —facturación electrónica, libros contables PLE e integraciones— con backend en Spring Boot y frontend en Angular.',
  employers: ['LatamReady', 'Entelgy', 'Keep It Simple', 'Infosys', 'Bring IT'],
  jobs: [
    { role: 'Software Engineer, NetSuite', company: 'BRING IT', dates: 'Mar 2023 — actualidad', years: '2023 — hoy', current: true },
    { role: 'Technology Analyst', company: 'Infosys', dates: 'Jun 2022 — Mar 2023', years: '2022 — 23' },
    { role: 'Senior Developer', company: 'Keep It Simple', dates: 'Feb 2022 — Jun 2022', years: '2022' },
    { role: 'NetSuite Developer', company: 'Keep It Simple', dates: 'Abr 2021 — Ene 2022', years: '2021 — 22' },
    { role: 'Java Programmer Analyst', company: 'Entelgy', dates: 'Dic 2020 — Mar 2021', years: '2020 — 21' },
    { role: 'SuiteCloud Developer', company: 'LatamReady', dates: 'Ene 2019 — Dic 2020', years: '2019 — 20' },
  ],
  certs: [
    { title: 'Oracle NetSuite Certified Application Developer Professional', org: 'Oracle NetSuite', year: '2025' },
    { title: 'NetSuite Certified SuiteFoundation', org: 'Oracle NetSuite', year: '2023' },
    { title: 'Oracle Cloud Infrastructure Foundations', org: 'Oracle', year: '2021' },
    { title: 'International Certificate in English (FCE)', org: 'Cambridge University', year: '2017' },
  ],
  education: { title: 'Ingeniería de Sistemas', org: 'Universidad Nacional Mayor de San Marcos', year: '2021' },
  stack: [
    { group: 'NetSuite', items: [
      { name: 'SuiteScript', logo: 'netsuite.svg' },
      { name: 'SuiteCloud', logo: 'netsuite.svg' },
    ] },
    { group: 'Backend', items: [
      { name: 'Java', logo: 'java.svg' },
      { name: 'Spring Boot', logo: 'springboot.svg' },
      { name: 'PostgreSQL', logo: 'postgresql.svg' },
      { name: 'MySQL', logo: 'mysql.svg' },
      { name: 'SQL Server', logo: 'microsoft_sql_server.svg' },
    ] },
    { group: 'Frontend', items: [
      { name: 'Angular', logo: 'angular.svg' },
      { name: 'JavaScript', logo: 'javascript.svg' },
      { name: 'HTML', logo: 'html.svg' },
      { name: 'CSS', logo: 'css.svg' },
    ] },
    { group: 'Herramientas', items: [
      { name: 'Git', logo: 'git.svg' },
      { name: 'Figma', logo: 'figma.svg' },
    ] },
  ],
  logos: [
    { name: 'NetSuite', logo: 'netsuite.svg' },
    { name: 'Java', logo: 'java.svg' },
    { name: 'Spring Boot', logo: 'springboot.svg' },
    { name: 'Angular', logo: 'angular.svg' },
    { name: 'JavaScript', logo: 'javascript.svg' },
    { name: 'PostgreSQL', logo: 'postgresql.svg' },
    { name: 'MySQL', logo: 'mysql.svg' },
    { name: 'SQL Server', logo: 'microsoft_sql_server.svg' },
    { name: 'HTML', logo: 'html.svg' },
    { name: 'CSS', logo: 'css.svg' },
    { name: 'Git', logo: 'git.svg' },
    { name: 'Figma', logo: 'figma.svg' },
  ],
  projects: [
    {
      title: 'Facturación Electrónica en NetSuite',
      description: 'Integración con OSE para emitir y recibir comprobantes electrónicos desde NetSuite, con envíos automatizados y archivo de los XML.',
      tags: ['SuiteScript', 'Integración', 'OSE'],
      flow: ['NetSuite', 'OSE', 'SUNAT'],
    },
    {
      title: 'Libros Contables PLE',
      description: 'Generación automatizada de libros electrónicos desde NetSuite, con reportes personalizados según los formatos que exige SUNAT.',
      tags: ['SuiteScript', 'Reportes', 'PLE'],
      flow: ['NetSuite', 'PLE', 'SUNAT'],
    },
    {
      title: 'Aplicación Web con Angular 17',
      description: 'Frontend con componentes reutilizables, routing y consumo de APIs REST sobre un backend Spring Boot, con diseño responsive.',
      tags: ['Angular 17', 'REST', 'Spring Boot'],
      flow: ['Angular', 'REST', 'Spring Boot'],
    },
  ],
};

// Palette switch: the four hues the site already offers, translated to OKLCH
// so every tint keeps the same perceived lightness when the hue changes.
export const palettes = [
  { id: 'azul', label: 'Azul', h: 255, c: 0.19 },
  { id: 'morado', label: 'Morado', h: 295, c: 0.19 },
  { id: 'verde', label: 'Verde', h: 155, c: 0.15 },
  { id: 'rosa', label: 'Rosa', h: 350, c: 0.19 },
];

const svg = (body, size = 20) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const icon = {
  arrowRight: (s) => svg('<path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path>', s),
  arrowUpRight: (s) => svg('<path d="M7 17 17 7"></path><path d="M8 7h9v9"></path>', s),
  download: (s) => svg('<path d="M12 4v11"></path><path d="m7 10 5 5 5-5"></path><path d="M5 19h14"></path>', s),
  mail: (s) => svg('<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"></rect><path d="m4 7 8 6 8-6"></path>', s),
  menu: (s) => svg('<path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path>', s),
  pin: (s) => svg('<path d="M12 21s-6-5.2-6-11a6 6 0 0 1 12 0c0 5.8-6 11-6 11Z"></path><circle cx="12" cy="10" r="2.25"></circle>', s),
  check: (s) => svg('<path d="m5 12.5 4.5 4.5L19 7.5"></path>', s),
  award: (s) => svg('<circle cx="12" cy="9" r="5.5"></circle><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7"></path>', s),
  linkedin: (s = 20) =>
    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 8.75H3.6V20h2.9V8.75ZM5.05 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20.4 13.85c0-3.2-1.7-5.35-4.55-5.35-1.6 0-2.7.8-3.2 1.7v-1.45H9.8V20h2.9v-6.1c0-1.55.75-2.6 2.15-2.6 1.3 0 1.9.9 1.9 2.6V20h2.9v-6.15Z"></path></svg>`,
  github: (s = 20) =>
    `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5a9.7 9.7 0 0 0-3.07 18.9c.49.09.66-.21.66-.47v-1.7c-2.7.59-3.27-1.15-3.27-1.15-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59.97.07 1.49 1 1.49 1 .87 1.49 2.28 1.06 2.83.81.09-.63.34-1.06.62-1.3-2.15-.25-4.42-1.08-4.42-4.8 0-1.06.38-1.93 1-2.6-.1-.25-.43-1.24.1-2.58 0 0 .81-.26 2.67 1a9.2 9.2 0 0 1 4.86 0c1.85-1.26 2.66-1 2.66-1 .53 1.34.2 2.33.1 2.58.62.67 1 1.54 1 2.6 0 3.73-2.27 4.55-4.44 4.79.35.3.66.9.66 1.81v2.68c0 .26.17.57.67.47A9.7 9.7 0 0 0 12 2.5Z"></path></svg>`,
  instagram: (s = 20) =>
    svg('<rect x="3.5" y="3.5" width="17" height="17" rx="4.5"></rect><circle cx="12" cy="12" r="3.75"></circle><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none"></circle>', s),
};

// Tokens + primitives every direction shares. Direction files add their own
// composition on top and may override a token.
export const baseCss = `
:root { color-scheme: dark; }
*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; min-height: 100%; height: 100%; }
body { background: #101114; }
.page {
  --h: 255; --c: 0.19;
  --bg: oklch(0.145 0.012 var(--h));
  --bg-2: oklch(0.18 0.014 var(--h));
  --bg-3: oklch(0.215 0.016 var(--h));
  --line: oklch(1 0 0 / 0.08);
  --line-2: oklch(1 0 0 / 0.16);
  --text: oklch(0.965 0.005 var(--h));
  --text-2: oklch(0.74 0.012 var(--h));
  --text-3: oklch(0.66 0.012 var(--h));
  --accent: oklch(0.55 var(--c) var(--h));
  --accent-hover: oklch(0.6 var(--c) var(--h));
  --accent-2: oklch(0.8 calc(var(--c) * 0.7) var(--h));
  --accent-soft: oklch(0.55 var(--c) var(--h) / 0.14);
  --accent-glow: oklch(0.6 var(--c) var(--h) / 0.32);
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 100%;
  background: var(--bg);
  color: var(--text);
  font-family: var(--body-font);
  font-size: 16px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
h1, h2, h3, h4 { margin: 0; font-family: var(--display-font); font-weight: 600; letter-spacing: -0.02em; line-height: 1.1; text-wrap: balance; }
p { margin: 0; text-wrap: pretty; }
a { color: var(--accent-2); text-decoration: none; transition: color 0.2s var(--ease); }
a:hover { color: var(--text); }
ul { margin: 0; padding: 0; list-style: none; }
img { display: block; max-width: 100%; }
button { font: inherit; color: inherit; background: none; border: 0; padding: 0; cursor: pointer; }
::selection { background: oklch(0.55 var(--c) var(--h) / 0.45); color: var(--text); }
:focus-visible { outline: 2px solid var(--accent-2); outline-offset: 3px; border-radius: 6px; }
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-thumb { background: var(--bg-3); border-radius: 999px; border: 2px solid var(--bg); }
::-webkit-scrollbar-track { background: transparent; }
.wrap { width: min(1200px, 100% - 48px); margin-inline: auto; }
.btn { display: inline-flex; align-items: center; gap: 10px; min-height: 48px; padding: 0 22px; border-radius: 12px; font-weight: 600; font-size: 15px; line-height: 1; white-space: nowrap; transition: background-color 0.2s var(--ease), color 0.2s var(--ease), border-color 0.2s var(--ease), transform 0.2s var(--ease); }
.btn svg { flex: none; transition: transform 0.25s var(--ease); }
.btn-primary { background: var(--accent); color: #fff; }
.btn-primary:hover { background: var(--accent-hover); color: #fff; transform: translateY(-1px); }
.btn-primary:hover svg { transform: translateX(3px); }
.btn-ghost { background: transparent; color: var(--text); border: 1px solid var(--line-2); }
.btn-ghost:hover { border-color: var(--text-2); background: oklch(1 0 0 / 0.04); color: var(--text); }
.btn-ghost:hover svg { transform: translateX(3px); }
.btn-text { display: inline-flex; align-items: center; gap: 8px; color: var(--text-2); font-weight: 500; font-size: 15px; }
.btn-text:hover { color: var(--text); }
.chip { display: inline-flex; align-items: center; gap: 10px; min-height: 40px; padding: 0 14px 0 10px; border: 1px solid var(--line); border-radius: 10px; background: var(--bg-2); color: var(--text-2); font-size: 14px; font-weight: 500; transition: border-color 0.2s var(--ease), color 0.2s var(--ease), background-color 0.2s var(--ease); }
.chip img { width: 20px; height: 20px; filter: grayscale(1) brightness(1.35); opacity: 0.8; transition: filter 0.25s var(--ease), opacity 0.25s var(--ease); }
.chip:hover { border-color: var(--line-2); color: var(--text); background: var(--bg-3); }
.chip:hover img { filter: none; opacity: 1; }
.tag { display: inline-flex; align-items: center; min-height: 26px; padding: 0 10px; border-radius: 8px; background: var(--accent-soft); color: var(--accent-2); font-size: 12.5px; font-weight: 600; letter-spacing: 0.01em; }
.social { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 12px; border: 1px solid var(--line); color: var(--text-2); transition: border-color 0.2s var(--ease), color 0.2s var(--ease), background-color 0.2s var(--ease); }
.social:hover { color: var(--text); border-color: var(--line-2); background: var(--bg-2); }
.palette { display: flex; align-items: center; gap: 8px; padding: 6px; border-radius: 999px; border: 1px solid var(--line); }
.dot { width: 18px; height: 18px; border-radius: 50%; background: oklch(0.6 var(--dc) var(--dh)); border: 2px solid transparent; box-shadow: 0 0 0 1px oklch(1 0 0 / 0.08) inset; transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease); }
.dot:hover { transform: scale(1.12); }
.dot.is-active { box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px oklch(0.6 var(--dc) var(--dh)); }
.flow { display: flex; align-items: center; gap: 8px; flex-wrap: nowrap; }
.flow-node { display: inline-flex; align-items: center; min-height: 34px; padding: 0 12px; border-radius: 9px; border: 1px solid var(--line-2); background: var(--bg); color: var(--text); font-size: 13px; font-weight: 600; }
.flow-node.is-accent { border-color: transparent; background: var(--accent); color: #fff; }
.flow-arrow { color: var(--text-3); display: inline-flex; }
.flow-arrow svg { width: 18px; height: 18px; }
.reveal { animation: rise 0.9s var(--ease) both; animation-delay: calc(var(--i, 0) * 90ms); }
@keyframes rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
@media (max-width: 480px) {
  .flow { gap: 6px; }
  .flow-node { font-size: 12px; padding: 0 9px; min-height: 30px; }
  .flow-arrow svg { width: 16px; height: 16px; }
  .actions .btn { flex: 1 1 auto; justify-content: center; }
}
@media (prefers-reduced-motion: reduce) { .reveal { animation: none; } * { transition-duration: 0.01ms !important; } }
`;

// Palette-switch logic shared by every artboard. `paleta` is the one tweak:
// it seeds the initial hue; the in-page dots change it live.
export const logic = `
const PALETAS = ${JSON.stringify(palettes)};
class Component extends DCLogic {
  renderVals() {
    const wanted = (this.state && this.state.paleta) || this.props.paleta || 'Azul';
    const active = PALETAS.find((p) => p.label === wanted) || PALETAS[0];
    const dotCls = {};
    const pick = {};
    for (const p of PALETAS) {
      dotCls[p.id] = p.id === active.id ? 'is-active' : '';
      pick[p.id] = () => this.setState({ paleta: p.label });
    }
    return { h: active.h, c: active.c, dotCls, pick };
  }
}
`;

export const dataProps = JSON.stringify({
  paleta: { editor: 'enum', options: palettes.map((p) => p.label), default: 'Azul', section: 'Paleta' },
});

export const paletteDots = (extraClass = '') =>
  `<div class="palette ${extraClass}" role="group" aria-label="Paleta de color">` +
  palettes
    .map(
      (p) =>
        `<button type="button" class="dot {{dotCls.${p.id}}}" style="--dh: ${p.h}; --dc: ${p.c}" title="${p.label}" aria-label="Paleta ${p.label}" onClick="{{pick.${p.id}}}"></button>`,
    )
    .join('') +
  `</div>`;

export const socials = (cls = 'social') => `
<a class="${cls}" href="${data.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icon.linkedin(20)}</a>
<a class="${cls}" href="${data.github}" target="_blank" rel="noreferrer" aria-label="GitHub">${icon.github(20)}</a>
<a class="${cls}" href="${data.instagram}" target="_blank" rel="noreferrer" aria-label="Instagram">${icon.instagram(20)}</a>`;

export const flowStrip = (flow) =>
  `<div class="flow">` +
  flow
    .map((node, i) => {
      const cls = i === flow.length - 1 ? 'flow-node is-accent' : 'flow-node';
      const arrow = i < flow.length - 1 ? `<span class="flow-arrow">${icon.arrowRight(18)}</span>` : '';
      return `<span class="${cls}">${node}</span>${arrow}`;
    })
    .join('') +
  `</div>`;

export const page = ({ title, fonts, css, body }) => `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
  <link rel="stylesheet" href="${fonts}">
  <style>
${baseCss}
${css}
  </style>
</helmet>
<div class="page" style="--h: {{h}}; --c: {{c}}">
${body}
</div>
</x-dc>
<script data-dc-script data-props='${dataProps}'>
${logic}
</script>
</body>
</html>
`;

// Assembles the artboards for the portfolio design canvas.
//   node design/build.mjs            → writes design/artboards/*.dc.html + canvas.json
//   node design/build.mjs --seed     → also seeds the canvas page into the scratch dir
// Mobile artboards are byte-for-byte copies of their desktop file: the
// narrower frame is what triggers the responsive layout.
import { writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, 'artboards');
mkdirSync(out, { recursive: true });

const directions = [
  { desktop: 'Main', mobile: 'OrbitaMovil', module: './src/orbita.mjs', desktopH: 3300, mobileH: 5700 },
  { desktop: 'Consola', mobile: 'ConsolaMovil', module: './src/consola.mjs', desktopH: 2300, mobileH: 4700 },
  { desktop: 'Firma', mobile: 'FirmaMovil', module: './src/firma.mjs', desktopH: 4300, mobileH: 5600 },
];

const DESKTOP_W = 1440;
const MOBILE_W = 390;
const PAIR_GAP = 80;
const DIR_GAP = 120;

const artboards = [];
const annotations = [];
const notes = {
  Main: 'A · ÓRBITA — la referencia, con más disciplina.\nRetrato sobre disco luminoso, stats en órbita, nav pill. Sora + Figtree.\n+ Máximo enganche inmediato y lo más cercano a tu referencia.\n− Es la composición más vista en portafolios dev hoy; distingue por ejecución, no por estructura.',
  Consola:
    'B · CONSOLA — hero en mosaico, técnico y denso.\nTitular, retrato, trayectoria y stack como tiles de una grilla de 12 columnas. Geist + Geist Mono.\n+ Experiencia y herramientas literalmente en el primer pantallazo; se siente producto/ingeniería.\n− Más denso: exige disciplina de espaciado y pierde algo de aire "premium" en móvil.',
  Firma:
    'C · FIRMA — tipográfica y editorial.\nEl nombre es el héroe; retrato monocromo que recupera color al pasar el mouse; listas editoriales sin cajas. Bricolage Grotesque + Hanken Grotesk.\n+ La más elegante y distinta; envejece bien.\n− Comunica menos "de un vistazo": los datos llegan al hacer scroll, y depende de una buena foto.',
};

let x = 0;
for (const d of directions) {
  const mod = await import(d.module);
  const html = mod.default;
  writeFileSync(resolve(out, `${d.desktop}.dc.html`), html);
  writeFileSync(resolve(out, `${d.mobile}.dc.html`), html);
  artboards.push({ file: `${d.desktop}.dc.html`, x, y: 0, w: DESKTOP_W, h: d.desktopH, title: `${d.desktop === 'Main' ? 'Órbita' : d.desktop} · Desktop`, expand: 'fit', is_interactive: true });
  artboards.push({ file: `${d.mobile}.dc.html`, x: x + DESKTOP_W + PAIR_GAP, y: 0, w: MOBILE_W, h: d.mobileH, title: `${d.desktop === 'Main' ? 'Órbita' : d.desktop} · Móvil`, expand: 'fit', is_interactive: true });
  annotations.push({ id: `nota-${d.desktop.toLowerCase()}`, x, y: -300, w: 720, text: notes[d.desktop] });
  x += DESKTOP_W + PAIR_GAP + MOBILE_W + DIR_GAP;
}

const canvas = { artboards, annotations, launch: { view: 'canvas' } };
writeFileSync(resolve(out, 'canvas.json'), JSON.stringify(canvas, null, 2));
console.log('artboards:', readdirSync(out).join(', '));

if (process.argv.includes('--seed')) {
  const skillDir = process.env.DESIGN_SKILL_DIR;
  const scratch = process.env.DESIGN_OUT_DIR;
  if (!skillDir || !scratch) throw new Error('set DESIGN_SKILL_DIR and DESIGN_OUT_DIR');
  const images = readdirSync(resolve(here, 'img')).map((f) => resolve(here, 'img', f));
  const args = [
    resolve(skillDir, 'seed-canvas.mjs'),
    '--template', resolve(skillDir, 'payload.template.html'),
    '--out', resolve(scratch, 'portafolio-vicente-mori.html'),
    '--title', 'Portafolio Vicente Mori',
    '--canvas', resolve(out, 'canvas.json'),
  ];
  for (const a of artboards) args.push('--artboard', resolve(out, a.file));
  for (const img of images) args.push('--image', img);
  const res = execFileSync('node', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  process.stdout.write(res);
}

// Renders plain-HTML previews of each artboard (holes filled with the
// default palette) so the layout can be measured and screenshotted in a
// normal browser tab before seeding the canvas.
//   node design/preview.mjs <outDir>
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(process.argv[2] || resolve(here, 'preview'));
mkdirSync(out, { recursive: true });

for (const f of readdirSync(resolve(here, 'img'))) copyFileSync(resolve(here, 'img', f), resolve(out, f));

for (const name of ['Main', 'Consola', 'Firma']) {
  let html = readFileSync(resolve(here, 'artboards', `${name}.dc.html`), 'utf8');
  const helmet = html.match(/<helmet>([\s\S]*?)<\/helmet>/)[1];
  let body = html.match(/<\/helmet>([\s\S]*?)<\/x-dc>/)[1];
  body = body
    .replace(/\{\{h\}\}/g, '255')
    .replace(/\{\{c\}\}/g, '0.19')
    .replace(/\{\{dotCls\.azul\}\}/g, 'is-active')
    .replace(/\{\{dotCls\.[a-z]+\}\}/g, '')
    .replace(/ onClick="\{\{[^}]+\}\}"/g, '');
  const page = `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${helmet}</head><body>${body}</body></html>`;
  writeFileSync(resolve(out, `${name}.html`), page);
  console.log('preview', name);
}

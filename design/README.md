# Propuestas de diseño — canvas

Fuente de las tres direcciones del rediseño (Órbita, Consola, Firma) publicadas
como canvas de diseño. Los artboards se generan desde `src/`; los `.dc.html`
de `artboards/` son la salida y son los que se siembran en el canvas.

```
src/shared.mjs   contenido real (CV, stack, proyectos), tokens OKLCH, iconos, lógica de paleta
src/orbita.mjs   Dirección A — Main.dc.html (+ OrbitaMovil)
src/consola.mjs  Dirección B — Consola.dc.html (+ ConsolaMovil)
src/firma.mjs    Dirección C — Firma.dc.html (+ FirmaMovil)
img/             retrato recortado (WebP con alpha) y logos del stack
build.mjs        genera artboards/ + canvas.json  (`node design/build.mjs`)
preview.mjs      genera HTML plano para revisar en un navegador normal
```

Los artboards móviles son copias exactas del desktop: el ancho del frame (390)
es lo que activa el layout responsive. La paleta (Azul/Morado/Verde/Rosa) es
un tweak `paleta` y también los puntos del nav; todo el color deriva de
`--h`/`--c` en OKLCH.

Canvas publicado: https://claude.ai/artifact/MLsAz8yvyimBzHKqQe2htR

// Paletas del diseño Órbita. Todo el color deriva de --h (tono) y --c (croma)
// en OKLCH, así cada tinte mantiene la misma luminosidad al cambiar de tono.
export interface Theme {
  id: string;
  label: string;
  h: number;
  c: number;
}

export const blue: Theme = { id: 'azul', label: 'Azul', h: 255, c: 0.19 };
export const purple: Theme = { id: 'morado', label: 'Morado', h: 295, c: 0.19 };
export const green: Theme = { id: 'verde', label: 'Verde', h: 155, c: 0.15 };
export const pink: Theme = { id: 'rosa', label: 'Rosa', h: 350, c: 0.19 };

export const themes: Theme[] = [blue, purple, green, pink];

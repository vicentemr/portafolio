import { Injectable, signal } from '@angular/core';
import { Theme, themes, blue } from '../interfaces/ThemeInterface';

const STORAGE_KEY = 'paleta';

@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  readonly themes = themes;
  readonly active = signal<Theme>(blue);

  // Restaura la paleta guardada (solo en el navegador).
  restore(): void {
    let saved: string | null = null;
    try {
      saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    } catch { }
    this.setActiveTheme(themes.find((t) => t.id === saved) ?? blue, false);
  }

  setActiveTheme(theme: Theme, persist = true): void {
    this.active.set(theme);
    if (typeof document === 'undefined') return;

    const root = document.documentElement.style;
    root.setProperty('--h', String(theme.h));
    root.setProperty('--c', String(theme.c));
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, theme.id); } catch { }
    }
  }
}

import { Component, Input } from '@angular/core';

export type IconName =
  | 'arrowRight' | 'arrowUpRight' | 'download' | 'mail' | 'menu' | 'close'
  | 'award' | 'linkedin' | 'github' | 'instagram';

// Íconos de línea del diseño Órbita (design/src/shared.mjs).
@Component({
  selector: 'app-icon',
  standalone: true,
  host: { style: 'display: contents' },
  template: `
    @switch (name) {
      @case ('linkedin') {
        <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 8.75H3.6V20h2.9V8.75ZM5.05 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20.4 13.85c0-3.2-1.7-5.35-4.55-5.35-1.6 0-2.7.8-3.2 1.7v-1.45H9.8V20h2.9v-6.1c0-1.55.75-2.6 2.15-2.6 1.3 0 1.9.9 1.9 2.6V20h2.9v-6.15Z"></path></svg>
      }
      @case ('github') {
        <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5a9.7 9.7 0 0 0-3.07 18.9c.49.09.66-.21.66-.47v-1.7c-2.7.59-3.27-1.15-3.27-1.15-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59.97.07 1.49 1 1.49 1 .87 1.49 2.28 1.06 2.83.81.09-.63.34-1.06.62-1.3-2.15-.25-4.42-1.08-4.42-4.8 0-1.06.38-1.93 1-2.6-.1-.25-.43-1.24.1-2.58 0 0 .81-.26 2.67 1a9.2 9.2 0 0 1 4.86 0c1.85-1.26 2.66-1 2.66-1 .53 1.34.2 2.33.1 2.58.62.67 1 1.54 1 2.6 0 3.73-2.27 4.55-4.44 4.79.35.3.66.9.66 1.81v2.68c0 .26.17.57.67.47A9.7 9.7 0 0 0 12 2.5Z"></path></svg>
      }
      @default {
        <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          @switch (name) {
            @case ('arrowRight') { <path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path> }
            @case ('arrowUpRight') { <path d="M7 17 17 7"></path><path d="M8 7h9v9"></path> }
            @case ('download') { <path d="M12 4v11"></path><path d="m7 10 5 5 5-5"></path><path d="M5 19h14"></path> }
            @case ('mail') { <rect x="3.5" y="5.5" width="17" height="13" rx="2.5"></rect><path d="m4 7 8 6 8-6"></path> }
            @case ('menu') { <path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path> }
            @case ('close') { <path d="M6 6l12 12"></path><path d="M18 6 6 18"></path> }
            @case ('award') { <circle cx="12" cy="9" r="5.5"></circle><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7"></path> }
            @case ('instagram') { <rect x="3.5" y="3.5" width="17" height="17" rx="4.5"></rect><circle cx="12" cy="12" r="3.75"></circle><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none"></circle> }
          }
        </svg>
      }
    }
  `,
})
export class IconComponent {
  @Input({ required: true }) name!: IconName;
  @Input() size = 20;
}

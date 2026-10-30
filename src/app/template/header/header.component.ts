import { ViewportScroller, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ThemeServiceService } from '../../services/theme-service.service';
import { Theme } from '../../interfaces/ThemeInterface';
import { IconComponent } from '../icon/icon.component';
import { BRAND_PATH, BRAND_SHAPE } from './brand-mark';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  public showMenu = false;
  public scrolled = false;
  public seleccionado = 'inicio';
  public readonly brandPath = BRAND_PATH;
  public readonly brandShape = BRAND_SHAPE;
  private observer!: IntersectionObserver;

  public itemsMenu = [
    { nombre: 'Inicio', ruta: 'inicio' },
    { nombre: 'Sobre mí', ruta: 'sobre-mi' },
    { nombre: 'Experiencia', ruta: 'experiencia' },
    { nombre: 'Proyectos', ruta: 'proyectos' },
    { nombre: 'Contacto', ruta: 'contacto' },
  ];

  constructor(
    public readonly themeService: ThemeServiceService,
    private scroller: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    // scrollToAnchor ignora scroll-margin: deja espacio para el header fijo.
    this.scroller.setOffset([0, 96]);
    this.initSectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
  }

  changeEstadoNav(event: Event, ruta: string): void {
    event.preventDefault();
    this.showMenu = false;
    this.seleccionado = ruta;
    this.scroller.scrollToAnchor(ruta);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 12;
  }

  openAndCloseMenu(): void {
    this.showMenu = !this.showMenu;
  }

  setPaleta(theme: Theme): void {
    this.themeService.setActiveTheme(theme);
  }

  private initSectionObserver(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.seleccionado = entry.target.id;
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    this.itemsMenu.forEach(item => {
      const el = document.getElementById(item.ruta);
      if (el) this.observer.observe(el);
    });
  }
}

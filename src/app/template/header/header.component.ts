import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ThemeServiceService } from '../../services/theme-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  // private stop$ = new Subject<void>();
  public showMenu: boolean = false;
  public estadoTheme: string = 'inicial';
  public seleccionado: string = 'Inicio';
  faMoon = faMoon;
  faSun = faSun;
  faBars = faBars;
  faTimes = faTimes;

  public itemsMenu = [
    {
      nombre: 'Inicio',
      icono: 'iconsminds-shop-4',
      ruta: 'inicio',
    },
    {
      nombre: 'Acerca',
      icono: 'iconsminds-administrator',
      ruta: 'app/portafolio/acerca',
    },
    {
      nombre: 'Habilidades',
      icono: 'iconsminds-file-clipboard-file---text',
      ruta: 'app/portafolio/habilidades',
    },
    {
      nombre: 'Servicios',
      icono: 'iconsminds-handshake',
      ruta: 'app/portafolio/servicios',
    },
    {
      nombre: 'Experiencia',
      icono: 'iconsminds-suitcase',
      ruta: 'app/portafolio/cualificado',
    },
    // {
    //   nombre: 'Contactame',
    //   icono: 'iconsminds-smartphone-4',
    //   ruta: 'app/portafolio/contactame',
    // },
    {
      nombre: 'Portafolio',
      icono: 'iconsminds-management',
      ruta: 'app/portafolio/contactame',
    },
    // {
    //   nombre: 'Proyecto',
    //   icono: 'iconsminds-smartphone-4',
    //   ruta: 'app/portafolio/contactame',
    // },
    // {
    //   nombre: 'Testimonio',
    //   icono: 'iconsminds-smartphone-4',
    //   ruta: 'app/portafolio/contactame',
    // },
    {
      nombre: 'Contacto',
      icono: 'iconsminds-smartphone-4',
      ruta: 'app/portafolio/contactame',
    },
  ];

  constructor(
    // private readonly _navegationPageService: NavegationPagesService,
    private readonly _themeService: ThemeServiceService,
    private scroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.observarSeleccionadoDesdeOtroComponente();
  }
  ngOnDestroy(): void {
    this.stop();
  }

  changeEstadoNav(pagina: string): void {
    this.showMenu = false;
    this.seleccionado = pagina;
    this.scroller.scrollToAnchor(pagina);
    // this._navegationPageService.navegationPages(pagina);
  }

  observarSeleccionadoDesdeOtroComponente(): void {
    // this._navegationPageService.seleccionado$
    //   .pipe(takeUntil(this.stop$))
    //   .subscribe((seleccionado: string) => {
    //     this.seleccionado = seleccionado;
    //   });
  }

  openAndCloseMenu(): void {
    this.showMenu = !this.showMenu;
  }

  changeTheme(): void {
    if (this.estadoTheme === 'inicial') {
      this.estadoTheme = 'dark';
      this._themeService.setDarkTheme();
    } else {
      this.estadoTheme = 'inicial';
      this._themeService.setDefaultTheme();
    }
  }

  stop(): void {
    // this.stop$.next();
    // this.stop$.complete();
  }
}

import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  faComments = faComments;

  constructor(
    // private readonly _navegationPageService: NavegationPagesService,
    private scroller: ViewportScroller
  ) { }

  changeEstadoNav(pagina: string): void {
    this.scroller.scrollToAnchor(pagina);
    // this._navegationPageService.navegationPages(pagina);
  }
}

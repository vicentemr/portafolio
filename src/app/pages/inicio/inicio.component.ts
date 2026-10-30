import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '../../template/icon/icon.component';
import { employers, profile, stats } from '../../data/portfolio.data';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  profile = profile;
  stats = stats;
  employers = employers;

  constructor(private scroller: ViewportScroller) { }

  changeEstadoNav(event: Event, pagina: string): void {
    event.preventDefault();
    this.scroller.scrollToAnchor(pagina);
  }
}

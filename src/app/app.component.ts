import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { QualificationComponent } from './pages/qualification/qualification.component';
import { ThemeServiceService } from './services/theme-service.service';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, HeaderComponent, FooterComponent, QualificationComponent, ContactComponent, PortfolioComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portafolio';

  constructor(private readonly themeService: ThemeServiceService) { }

  ngOnInit() {
    this.themeService.restore();
  }
}

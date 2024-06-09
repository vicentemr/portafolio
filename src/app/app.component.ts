import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillComponent } from './pages/skill/skill.component';
import { QualificationComponent } from './pages/qualification/qualification.component';
import { ThemeServiceService } from './services/theme-service.service';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { CommonModule, DecimalPipe } from '@angular/common';
import { gsap } from 'gsap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPalette, faPaintRoller } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, HeaderComponent, FooterComponent, AboutComponent, SkillComponent, QualificationComponent, ContactComponent, PortfolioComponent, CommonModule, FontAwesomeModule],
  providers: [DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portafolio';
  botonColores: boolean = false;
  reachedTheEnd2 !: boolean;
  public reachedTheEnd !: boolean;
  collapsed = false;
  init = false;

  faPalette = faPalette;
  faPaintRoller = faPaintRoller;
  constructor(
    private readonly themeService: ThemeServiceService,
    private decimalPipe: DecimalPipe,
    // private readonly _navigationPages: NavegationPagesService
  ) { }
  ngOnInit() {
    this.defaultColor();
    this.defaultTheme();
    gsap.to('progress', {
      value: 100,
      scrollTrigger: {
        trigger: '.todo',
        scrub: 0.3,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (options) => {
          if (options instanceof ScrollTrigger) {
            const value = Number(
              this.decimalPipe.transform(options.progress, '1.2-2')
            );
            console.log(value);
            this.reachedTheEnd2 = value > 0.07;
            this.reachedTheEnd = value > 0.84;
            // this.verificarIdElemtHtml();
          }
        },
      },
    });
    setTimeout(() => { }, 1000);
  }
  private async animateElements(collapse: boolean, list: HTMLElement[], menu: any) {
    this.botonColores = true;
    if (collapse) {
      for (let i = 0; i < list.length; i++) {
        const sliced = list.slice(i, list.length);
        gsap.to(sliced, {
          translateY: 55 * i,
          delay: 0.3 * i,
          duration: 0.6,
        });
      }
      setTimeout(() => {
        this.botonColores = false;
      }, 1000);
    } else {
      gsap
        .to(list, {
          y: 0,
          duration: 0.3,
        })
        .then(() => {
          gsap.to(menu, {
            translateY: -80,
            duration: 0.3,
          });
          this.botonColores = false;
        });
    }
  }
  defaultTheme() {
    this.themeService.setDefaultTheme();
    setTimeout(() => {
      document.body.classList.add('animate-colors-transition');
    }, 500);
  }

  defaultColor(): void {
    this.themeService.setPurple();
  }

  colorPurple(): void {
    this.themeService.setPurple();
  }

  colorGreen(): void {
    this.themeService.setGreen();
  }

  colorPink(): void {
    this.themeService.setPink();
  }

  public toggle(menu: HTMLElement) {
    const list = Array.prototype.slice.call(menu.children) as HTMLElement[];
    this.init = true;
    this.collapsed = !this.collapsed;

    gsap.to(menu, {
      translateY: 0,
      duration: 0.6,
    });
    this.animateElements(this.collapsed, list, menu);
  }
}

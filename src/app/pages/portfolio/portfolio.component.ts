import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import Swiper from 'swiper';
// import { register } from 'swiper/element/bundle';
// register();

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  faArrowRight = faArrowRight;
  // swiper : any = new Swiper('.portfolio_container', {
  //   cssMode: true,
  //   // mousewheel: true,
  //   // keyboard: true,
  //   // slidesPerView: 1,
  //   // spaceBetween: 30,
  //   // loop: true,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     // clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });
}

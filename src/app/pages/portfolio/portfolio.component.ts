import { Component } from '@angular/core';
import { IconComponent } from '../../template/icon/icon.component';
import { projects } from '../../data/portfolio.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = projects;
}

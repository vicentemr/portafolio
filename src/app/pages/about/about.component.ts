import { Component } from '@angular/core';
import { about } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about = about;
}
